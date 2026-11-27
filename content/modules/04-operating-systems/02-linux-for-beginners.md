---
title: Linux Commands for Beginners
summary: Ten commands that unlock the terminal.
minutes: 9
---

Most servers in the world run Linux. You control it by typing commands into the **terminal**. It looks scary but it is just text chat with your computer.

## Ten commands to start

| Command       | What it does                     |
| ------------- | -------------------------------- |
| `pwd`         | Shows which folder you are in    |
| `ls`          | Lists files                      |
| `cd folder`   | Moves into a folder              |
| `mkdir name`  | Makes a new folder               |
| `touch file`  | Makes an empty file              |
| `cat file`    | Shows what is inside a file      |
| `cp a b`      | Copies a to b                    |
| `mv a b`      | Moves or renames                 |
| `rm file`     | Deletes a file (no recycle bin!) |
| `man command` | Shows the manual for a command   |

## Try it yourself

```bash
mkdir practice
cd practice
touch hello.txt
ls
```

## Be careful

Commands do exactly what you type. Never copy a command from the internet if you do not understand it, especially anything with `sudo` (run as admin) or `rm -rf`.

## Remember

- The terminal is a conversation with the OS.
- Read before you run.
