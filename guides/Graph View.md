+++
title = "Graph View"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Graph View

The knowledge graph (Cmd+3) shows every note as a node and every wikilink as an edge. It's a live, interactive force-directed visualization.

## Interaction

- **Click** a node to select it
- **Drag** a node to reposition it
- **Scroll** to zoom in and out
- **Click the background** to deselect

## Settings

Click the gear icon to open the graph settings panel:

### Filters
- **Tags** — filter to show only notes with specific tags
- **Unlinked notes** — toggle visibility of notes with no connections
- **Focus on selection** — show only nodes near the selected note
- **Neighborhood** — how many hops from the selected note to display

### Edges
- **Wikilinks** — toggle wikilink edges
- **Tags** — toggle tag-based edges
- **Tasks** — toggle task reference edges
- **Arrows** — show link direction

### Display
- **Node size** — scale nodes up or down
- **Link width** — thickness of edge lines
- **Labels** — fade labels in/out
- **Min connections** — hide notes with fewer than N links

### Layout
- **Gravity** — how strongly nodes pull toward center
- **Spacing** — how strongly unlinked nodes push apart
- **Link strength** — how strongly linked notes attract
- **Link gap** — preferred distance between linked notes

Click **Restore defaults** to reset everything.

## Tips

- Use the graph to find clusters of related ideas
- Toggle "Unlinked notes" to find orphans that need connecting
- The "Focus on selection" mode is great for exploring one topic's neighborhood
