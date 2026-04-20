+++
title = "Git Sync"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Git Sync

Codex uses Git for vault synchronization. Every change is auto-committed and pushed to your remote on a configurable timer.

## Setup

### If you cloned this demo vault

Sync is already configured. Codex auto-commits every 60 seconds and pushes to the remote.

### For a local vault

1. Initialize Git in your vault: `cd ~/Documents/MyVault && git init && git remote add origin <url>`
2. Open Codex > Settings > Sync
3. Select **Git**, enter remote name (`origin`), branch (`main`), interval (`60`)
4. Save

## How it works

Every N seconds (default 60), Codex:

1. Stages all changed files
2. Commits as `Codex <codex@local>`
3. Pulls from remote (fast-forward or merge)
4. Pushes to remote

If a pull results in conflicts, Codex reports them in the sync status indicator (top right). Repeated failures trigger exponential backoff up to 10 minutes.

## Authentication

Codex uses your system's Git credentials:

- **SSH** — keys in `~/.ssh/` (ed25519, rsa, ecdsa) or loaded in ssh-agent
- **HTTPS** — Git credential helper (`git config --global credential.helper osxkeychain`)

If your SSH key has a passphrase, load it first: `ssh-add ~/.ssh/id_ed25519`

## Multi-device

Both your Mac and phone can sync to the same Git repo. Edits from either device merge automatically on the next sync cycle.

## Manual sync

Press **Cmd+Shift+S** or use the command palette > "Sync Now" to trigger an immediate sync.
