+++
title = "Omegon Agent"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Omegon Agent

Omegon is the AI agent that lives in the Codex sidebar. It has full read/write access to your vault and can search, summarize, create, and edit notes on your behalf.

## Opening the agent

- **Cmd+Shift+A** to toggle the agent panel
- Click the Omegon icon in the top-right toolbar

## What it can do

- Search your vault for notes, tasks, and tags
- Summarize the current note or a set of notes
- Draft new content based on your existing knowledge
- Create and manage tasks on your kanban boards
- Answer questions using your vault as context

## Slash commands

Type `/` in the agent input to see available commands:

- `/login` — authenticate with Omegon
- `/status` — check connection status and current model
- `/config` — view and change model settings

## Configuration

The agent's model, thinking level, and max turns are configurable in Settings > Omegon Profile.

## Requirements

Omegon must be installed separately. Codex looks for the `omegon` binary at `~/.local/share/omegon/bin/omegon`. If it's not found, the agent panel will tell you.
