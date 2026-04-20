+++
title = "Query Blocks"
tags = ["codex", "guide"]
[publication]
enabled = true
visibility = "public"
+++

# Query Blocks

Codex supports inline queries similar to Obsidian's Dataview plugin. Write a query in a fenced code block with the `query` language tag, and Codex renders the results in live preview.

## Syntax

````
```query
TABLE title, tags FROM "" WHERE tags = "#guide" SORT title
```
````

## Query types

### TABLE

Returns results as a table with the specified columns:

````
```query
TABLE title, tags FROM "" WHERE tags = "#codex"
```
````

### LIST

Returns a bullet list of matching notes:

````
```query
LIST FROM "" WHERE tags = "#reference"
```
````

### TASK

Returns tasks from across the vault:

````
```query
TASK FROM "" WHERE tags = "#todo"
```
````

## Clauses

| Clause | Example | Purpose |
|--------|---------|---------|
| `FROM ""` | `FROM ""` | Search scope (empty = whole vault) |
| `WHERE` | `WHERE tags = "#guide"` | Filter by tag or title |
| `SORT` | `SORT title` | Order results |
| `LIMIT` | `LIMIT 10` | Cap result count |

## Live preview

Query results render inline in live mode. Switch to source mode (Cmd+E) to edit the query text.
