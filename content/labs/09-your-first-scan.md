---
title: Your First Scan
summary: Use Nmap on your own machine and a test host that allows it.
minutes: 30
module: ethical-hacking
level: Intermediate
---
Nmap shows which ports are open on a computer. **Only scan machines you own or have written permission to scan.** The Nmap project provides `scanme.nmap.org` for people to practise on. Be polite: scan it lightly and not repeatedly.

## Step 1: Install Nmap

Download it from nmap.org, or use your package manager:

```bash
brew install nmap
```

On Linux use `sudo apt install nmap`.

## Step 2: Scan your own computer

```bash
nmap 127.0.0.1
```

`127.0.0.1` always means "this computer". Which ports are open? Compare with the `lsof` results from Lab 3.

## Step 3: Learn more about each service

```bash
nmap -sV 127.0.0.1
```

The `-sV` flag asks Nmap to guess the program and version behind each port.

## Step 4: Scan the practice host

```bash
nmap -F scanme.nmap.org
```

`-F` means a fast scan of the most common ports. Read the results and match each port to Module 3.

## Step 5: Write a mini report

