# Codex Demo Vault

This is the official demo vault for [Codex](https://github.com/styrene-lab/codex) — a local-first knowledge management app built in Rust.

## Use as a vault

Clone this repo and open it in Codex:

1. Open Codex
2. Click **Clone remote vault**
3. Enter `git@github.com:styrene-lab/codex-demo-vault.git`
4. Branch: `main`

Or from the command line:

```bash
git clone git@github.com:styrene-lab/codex-demo-vault.git ~/Documents/codex-demo-vault
open /Applications/Codex.app --args --vault ~/Documents/codex-demo-vault
```

## Published site

This vault is also published as a documentation site at **[codex-demo-vault.pages.dev](https://codex-demo-vault.pages.dev)**. The site is built with Astro and deployed to Cloudflare Pages. Every push to `main` rebuilds the site.

### Build the site locally

```bash
cd site
npm install
npm run dev
```

## Structure

```
Welcome.md                  # Landing page
guides/                     # How-to guides
  Getting Started.md
  Wikilinks and Backlinks.md
  Daily Notes.md
  Query Blocks.md
  Excalidraw Drawings.md
  Git Sync.md
  Omegon Agent.md
  Kanban Boards.md
  Graph View.md
reference/                  # Reference docs
  Keyboard Shortcuts.md
.codex/                     # Vault configuration
  config.toml
  templates/
site/                       # Astro publication site
```
