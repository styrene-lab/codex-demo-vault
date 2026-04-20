+++
title = "Wikilinks and Backlinks"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Wikilinks and Backlinks

## Linking notes

Type `[[` followed by the note title to create a link:

```
Check out [[Getting Started]] for the basics.
```

Codex resolves wikilinks by matching the text inside the brackets to note titles. The match is case-insensitive.

## The graph

Every wikilink creates an edge in the knowledge graph. Open the graph view (Cmd+3) to see how your notes connect. The more you link, the more useful the graph becomes.

## Backlinks

When note A links to note B, note B knows about it. This is a backlink. You can see backlinks in the graph view by clicking on a node.

## Renaming

When you rename a note (Cmd+Shift+R or double-click the title), Codex updates every wikilink across the entire vault that pointed to the old name. No broken links.

## Tips

- Link liberally. The graph rewards dense connections.
- Use descriptive titles — they become your link text.
- Check the graph view periodically to find unlinked notes ("unlinked notes" toggle in graph settings).
