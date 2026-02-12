---
title: Files and Permissions
summary: Who can read, write or run a file.
minutes: 7
---
Every file on Linux has an owner and three kinds of permission.

| Letter | Permission | Meaning |
|--------|------------|---------|
| r | Read | Look inside the file |
| w | Write | Change the file |
| x | Execute | Run it as a program |

## Reading the permission string

Run `ls -l` and you might see `-rwxr-xr--`.

