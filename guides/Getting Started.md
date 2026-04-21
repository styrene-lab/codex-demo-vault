+++
title = "Getting Started"
tags = ["codex", "getting-started", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Getting Started

## Install

### macOS

Download the latest DMG from the [releases page](https://github.com/styrene-lab/codex/releases). Open it, drag Codex to Applications. The app is notarized — Gatekeeper will pass it clean.

### Linux

CI builds for x86_64 and aarch64 are available from [releases](https://github.com/styrene-lab/codex/releases). Requires `webkit2gtk-4.1` and GTK 3.

### iOS

Currently distributed via Ad-hoc or TestFlight. Contact the team for access.

## First launch

When you open Codex for the first time, you'll see a simple welcome screen with one big button: **Get started**. Click it and Codex creates a notebook in your Documents folder with a welcome note to help you get oriented.

If you already have notes, click **"I already have notes"** to see more options:

- **Open an existing folder** — point Codex at a folder of markdown files (works with Obsidian vaults)
- **Clone from Git** — download a notebook from a Git repository and keep it synced
- **Import markdown files** — copy files from another location into a new notebook

### Clone this demo vault

If you want to start with this documentation:

1. Click **"I already have notes"**
2. Click **Clone from Git**
3. Enter: `git@github.com:styrene-lab/codex-demo-vault.git`
4. Branch: `main`
5. Codex clones the repo, indexes everything, and opens the notebook

## Notebook structure

A Codex notebook is just a folder:

```
my-notes/
  .codex/
    config.toml        # settings
    templates/         # note templates
  notes.md
  guides/
    some-guide.md
  daily/
    2026-04-21.md
  drawings/
    diagram.excalidraw
```

The `.codex/` directory holds configuration. Everything else is your content.

## Frontmatter

Codex uses TOML frontmatter (enclosed in `+++`):

```
+++
title = "My Note"
tags = ["project", "idea"]
+++

Your content here.
```

In live mode, the frontmatter is hidden — you just see your content. Click into the top of the document to see and edit it.

YAML frontmatter (`---`) is also read, but Codex writes TOML.

## What's next

- [[Keyboard Shortcuts]] to move fast
- [[Wikilinks and Backlinks]] to connect ideas
- [[Git Sync]] to keep devices in sync
- [[Omegon Agent]] for AI-assisted workflows
