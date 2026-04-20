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

Download `Codex-0.2.0.dmg` from the releases page. Open it, drag Codex to Applications. The app is notarized — Gatekeeper will pass it clean.

### iOS

Currently distributed via Ad-hoc or TestFlight. Contact the team for access.

## First launch

When you open Codex for the first time, you'll see the Welcome screen with five options:

1. **Open existing vault** — point Codex at a folder of markdown files (great for Obsidian users)
2. **Create local vault** — start fresh
3. **Clone remote vault** — clone a Git repo as your vault (recommended: clone this demo vault)
4. **Import markdown folder** — copy files from another location
5. **Seed demo publication** — scaffold an Astro site for publishing

### Clone this demo vault

The fastest way to get started:

1. Click **Clone remote vault**
2. Enter: `git@github.com:styrene-lab/codex-demo-vault.git`
3. Branch: `main`
4. Codex clones the repo, indexes everything, and opens the vault

You'll see this documentation, ready to explore and edit.

## Vault structure

A Codex vault is just a folder:

```
my-vault/
  .codex/
    config.toml        # vault settings
    templates/         # note templates
  .codex-local/        # SQLite index (auto-generated, gitignored)
  notes.md
  guides/
    some-guide.md
  daily/
    2026-04-20.md
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

YAML frontmatter (`---`) is also read, but Codex writes TOML.

## What's next

- [[Keyboard Shortcuts]] to move fast
- [[Wikilinks and Backlinks]] to connect ideas
- [[Git Sync]] to keep devices in sync
- [[Omegon Agent]] for AI-assisted workflows
