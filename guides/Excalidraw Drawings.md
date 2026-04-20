+++
title = "Excalidraw Drawings"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Excalidraw Drawings

Codex embeds Excalidraw for visual thinking — diagrams, sketches, architecture maps, anything you'd put on a whiteboard.

## Creating a drawing

- **Cmd+Shift+D** — creates a new drawing and opens it
- **Cmd+P** > "New Drawing" — same thing via command palette
- **Cmd+P** > "Insert Drawing Here" — creates a drawing and inserts an embed at your cursor

## How it works

Drawings are stored as `.excalidraw` files in your vault — they're JSON, so they diff and sync cleanly with Git.

When you open a `.excalidraw` file, Codex loads the Excalidraw editor in place of the markdown editor. Draw with the full Excalidraw toolset.

## Embedding in notes

Embed a drawing in any note with the wikilink syntax:

```
![[my-diagram.excalidraw]]
```

Codex renders an SVG preview inline. The SVG is auto-exported every time you save the drawing.

## Exporting

Use the export buttons in the drawing toolbar to save as SVG or PNG to disk.

## Tips

- Use drawings for architecture diagrams, mind maps, flowcharts, and UI sketches
- Embed them in relevant notes to keep context close to the visual
- Drawings sync via Git just like markdown — they merge cleanly since they're JSON
