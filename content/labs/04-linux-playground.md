---
title: Linux Playground
summary: Practise files, folders and permissions in a safe practice folder.
minutes: 25
module: operating-systems
level: Beginner
---
You will practise the commands from Module 4 in a folder that is safe to break. Open a terminal. Mac and Linux work out of the box. On Windows, use WSL or any Linux virtual machine.

## Step 1: Build a practice folder

```bash
mkdir ~/linux-lab
cd ~/linux-lab
mkdir notes scripts secrets
touch notes/todo.txt scripts/hello.sh secrets/key.txt
ls -R
```

