---
title: File Permissions
summary: Read and write chmod numbers without thinking.
color: "#B5DB6C"
---
## The three powers

| Letter | Number | Power |
|--------|-------:|-------|
| r | 4 | Read |
| w | 2 | Write |
| x | 1 | Run |

Add the numbers for each group: **owner**, **group**, **everyone else**.

## Common combinations

| Number | Letters | Meaning |
|-------:|---------|---------|
| 7 | rwx | Everything |
| 6 | rw- | Read and write |
| 5 | r-x | Read and run |
| 4 | r-- | Read only |
| 0 | --- | Nothing |

## Examples to remember

| chmod | Used for |
|------:|----------|
| 600 | Private keys and secrets. Only you read and write |
| 644 | Normal files anyone can read |
