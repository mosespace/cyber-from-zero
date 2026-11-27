---
title: Harden Your Laptop
summary: A 30-minute checklist that makes your computer much harder to attack.
minutes: 30
module: defense
level: Intermediate
---

Hardening means making something tougher. Work through this list on your own computer.

## Checklist

| Step                           | Mac                              | Windows                    | Linux                                 |
| ------------------------------ | -------------------------------- | -------------------------- | ------------------------------------- |
| Install updates                | System Settings, Software Update | Settings, Windows Update   | `sudo apt update && sudo apt upgrade` |
| Turn on the firewall           | Settings, Network, Firewall      | Windows Security, Firewall | `sudo ufw enable`                     |
| Encrypt the disk               | FileVault                        | BitLocker                  | LUKS at install                       |
| Lock screen after a short time | Settings, Lock Screen            | Settings, Accounts         | Settings, Privacy                     |
| Use a normal account daily     | Create an admin and a user       | Same                       | Same                                  |

## Step 1: Backups with the 3-2-1 rule

Keep **3** copies, on **2** kinds of storage, with **1** copy somewhere else. A cloud backup plus an external drive covers it.

## Step 2: Remove what you do not use

List your apps. Remove anything you have not used for a year. Fewer programs mean fewer bugs.

## Step 3: Browser tidy-up

- Remove extensions you do not recognise.
- Turn on automatic updates.
- Use a password manager instead of the browser's saved passwords on shared computers.

## Step 4: Test your backup

Restore one file from your backup. A backup you never tested is only a hope.

## Checkpoint

Write down the date you finished. Repeat this lab every six months.
