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

- First `rwx`: the **owner** can read, write, run.
- Next `r-x`: the **group** can read and run.
- Last `r--`: **everyone else** can only read.

## Numbers instead of letters

r = 4, w = 2, x = 1. Add them up. So `rwx` = 7, `r-x` = 5, `r--` = 4, and the string above is **754**.

```bash
chmod 754 script.sh
```

## Why this matters

A password file that everyone can read is a disaster. Wrong permissions are one of the most common mistakes that attackers use.

## Remember

- Give the fewest permissions that still work.
