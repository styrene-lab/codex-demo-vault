+++
title = "Kanban Boards"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Kanban Boards

Codex includes a built-in kanban board for task management. Boards live alongside your notes — tasks are stored as structured data in your vault.

## Creating a board

1. Switch to Board view (Cmd+2)
2. If no boards exist, you'll see a prompt to create one
3. Enter a name and click "Create board"

You can also use Cmd+Shift+N or the command palette.

## Default columns

New boards come with four columns: **Backlog**, **In Progress**, **Review**, and **Done**.

## Working with tasks

- Click the **+** in any column header to add a task
- Drag tasks between columns to change status
- Click a task to expand it and edit title, description, priority, and due date

## Task decay

Tasks in Codex have a relevance decay model. Tasks that haven't been touched lose relevance over time based on their decay rate:

| Rate | Half-life | Best for |
|------|-----------|----------|
| Glacial | 90 days | Long-term goals |
| Slow | 30 days | Projects |
| Standard | 14 days | Normal tasks |
| Fast | 3 days | Urgent items |
| Flash | 1 day | Same-day tasks |

When a task's relevance drops below a threshold, Codex can notify you to either act on it or let it go.

## Integration with the agent

Omegon can read and write tasks on your boards. Ask it to "add a task to the backlog" or "show me overdue tasks."
