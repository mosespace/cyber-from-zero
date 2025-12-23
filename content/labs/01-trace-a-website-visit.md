---
title: Trace a Website Visit
summary: Watch DNS and HTTP happen with three simple commands.
minutes: 15
module: digital-world
level: Beginner
---
In Module 1 you learned that opening a website starts with DNS and ends with a web page. In this lab you will see it with your own eyes. Everything here is safe. You only talk to public websites the way your browser already does.

## What you need

- A Mac, Linux or Windows computer
- A terminal (Terminal on Mac and Linux, PowerShell on Windows)

## Step 1: Ask DNS for an address

```bash
nslookup example.com
```

Look for the line that says **Address**. That is the IP address of the server. This is step 2 of the lesson, the phone book answering you.

## Step 2: Check the server is alive

```bash
ping -c 4 example.com
```

On Windows use `ping -n 4 example.com`. You will see how many milliseconds each packet took. Small numbers mean a fast connection.

## Step 3: Look at the HTTP headers

```bash
curl -I https://example.com
```

The first line starts with `HTTP/2 200`. You met **200** in Module 7: it means OK. Find the `content-type` line. It tells the browser what kind of file is coming.

## Step 4: Follow the road

```bash
traceroute example.com
```

On Windows use `tracert example.com`. Each line is one computer your packets pass through on the way.

## Questions to answer

1. What is the IP address of example.com?
