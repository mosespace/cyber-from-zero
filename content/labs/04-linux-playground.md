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

## Step 2: Put something in a file

```bash
echo "echo Hello from my first script" > scripts/hello.sh
cat scripts/hello.sh
```

## Step 3: Check permissions

```bash
ls -l scripts/hello.sh
```

You will see something like `-rw-r--r--`. Nobody can run it yet because there is no `x`.

## Step 4: Make it runnable

```bash
chmod 755 scripts/hello.sh
./scripts/hello.sh
```

## Step 5: Lock down the secrets

```bash
chmod 700 secrets
chmod 600 secrets/key.txt
ls -ld secrets
ls -l secrets
```

Only you can now read the folder and the file. That is least privilege in action.

## Step 6: Clean up

