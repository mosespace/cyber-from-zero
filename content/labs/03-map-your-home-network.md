---
title: Map Your Home Network
summary: Find your devices, addresses and open ports. Only on your own network.
minutes: 25
module: networking
level: Beginner
---
You will draw a map of your own network. **Only do this on a network you own or have permission to use.**

## Step 1: Find your own address

On Mac or Linux:

```bash
ifconfig | grep "inet "
```

On Windows:

```bash
ipconfig
```

Look for an address like `192.168.1.23`. That is your private IP.

## Step 2: See who else is nearby

```bash
arp -a
```

This lists devices your computer has talked to recently, with their IP and hardware (MAC) addresses.

## Step 3: See which doors are open on your own computer

On Mac or Linux:

