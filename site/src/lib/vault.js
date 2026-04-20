import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

const VAULT_ROOT = path.resolve(import.meta.dirname, '../../../');

marked.use({ gfm: true, breaks: false });

/** Convert [[wikilinks]] to standard markdown links before parsing */
function convertWikilinks(md) {
  return md.replace(/\[\[([^\]]+)\]\]/g, (_, title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    return `[${title}](/${slug}/)`;
  });
}

/** Parse TOML-ish frontmatter (+++...+++) — good enough for our vault notes */
function parseFrontmatter(raw) {
  const match = raw.match(/^\+\+\+\s*\n([\s\S]*?)\n\+\+\+\s*\n?/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^(\w+)\s*=\s*"([^"]*)"/);
    if (kv) meta[kv[1]] = kv[2];
    const kvArr = line.match(/^(\w+)\s*=\s*\[([^\]]*)\]/);
    if (kvArr) meta[kvArr[1]] = kvArr[2].split(',').map(s => s.trim().replace(/"/g, '')).filter(Boolean);
  }
  return { meta, body: raw.slice(match[0].length) };
}

/** List all notes in a directory with parsed frontmatter */
export function listNotes(dir) {
  const dirPath = path.join(VAULT_ROOT, dir);
  if (!fs.existsSync(dirPath)) return [];

  return fs.readdirSync(dirPath)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const { meta, body } = parseFrontmatter(raw);
      const title = meta.title || file.replace('.md', '');
      const slug = file.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
      const tags = meta.tags || [];
      return { file, title, slug, tags, body, meta };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

/** Read and render a single vault note to HTML */
export function renderNote(dir, file) {
  const filePath = dir
    ? path.join(VAULT_ROOT, dir, file)
    : path.join(VAULT_ROOT, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { meta, body } = parseFrontmatter(raw);
  const title = meta.title || file.replace('.md', '');
  const html = marked.parse(convertWikilinks(body));
  return { title, html, meta };
}

/** Get all publishable pages for static path generation */
export function getAllPages() {
  const pages = [];

  for (const dir of ['guides', 'reference']) {
    for (const note of listNotes(dir)) {
      pages.push({ params: { slug: note.slug }, props: { dir, file: note.file } });
    }
  }

  // Welcome page
  pages.push({ params: { slug: 'welcome' }, props: { dir: '', file: 'Welcome.md' } });

  return pages;
}

/** Build graph data (nodes + edges) from all vault notes and their wikilinks */
export function buildGraphData() {
  const allNotes = [];

  // Collect all notes from all directories + root
  for (const dir of ['', 'guides', 'reference']) {
    const dirPath = dir ? path.join(VAULT_ROOT, dir) : VAULT_ROOT;
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath)) {
      if (!file.endsWith('.md') || file === 'README.md') continue;
      const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const { meta, body } = parseFrontmatter(raw);
      const title = meta.title || file.replace('.md', '');
      const slug = file.replace('.md', '').toLowerCase().replace(/\s+/g, '-');
      const tags = meta.tags || [];

      // Extract wikilinks from body
      const links = [];
      const re = /\[\[([^\]]+)\]\]/g;
      let m;
      while ((m = re.exec(body)) !== null) {
        links.push(m[1]);
      }

      allNotes.push({ title, slug, tags, links, group: dir || 'root' });
    }
  }

  // Build node map by title (case-insensitive)
  const nodeByTitle = {};
  const nodes = allNotes.map((note, i) => {
    const node = {
      id: note.slug,
      title: note.title,
      kind: 'document',
      group: note.group,
      tags: note.tags,
      slug: note.slug,
    };
    nodeByTitle[note.title.toLowerCase()] = node.id;
    return node;
  });

  // Build edges from wikilinks
  const edges = [];
  const seen = new Set();
  for (const note of allNotes) {
    const sourceId = note.slug;
    for (const linkTitle of note.links) {
      const targetId = nodeByTitle[linkTitle.toLowerCase()];
      if (!targetId || targetId === sourceId) continue;
      const key = [sourceId, targetId].sort().join('::');
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ source: sourceId, target: targetId, kind: 'wikilink' });
    }
  }

  return { nodes, edges };
}
