---
title: Browser Detective
summary: Use your browser's developer tools to see requests, cookies and headers.
minutes: 25
module: web-security
level: Intermediate
---

Every browser has built-in developer tools. They let you see what a website really sends. This is a safe, normal way to learn. You are only looking at pages your browser already downloaded.

## Step 1: Open the tools

Press **F12** (or right-click, then Inspect). Open the **Network** tab. Reload the page.

## Step 2: Read the requests

Click the first request. Look at:

| Part             | What to find                 |
| ---------------- | ---------------------------- |
| Request method   | Usually GET                  |
| Status           | 200, 301, 404 ...            |
| Response headers | `content-type`, `set-cookie` |

## Step 3: Find a cookie

Open the **Application** tab (Chrome) or **Storage** tab (Firefox). Click **Cookies**. For each cookie, check the flags **HttpOnly** and **Secure**.

## Step 4: Check for HTTPS

Click the padlock in the address bar. Read who issued the certificate and when it ends.

## Step 5: Practise on a safe target

Run **OWASP Juice Shop** on your own computer by following the official instructions on owasp.org. Then try the first beginner challenges.

## Questions

1. Which cookies did the site set?
2. Do they use HttpOnly and Secure? Why does that help?
3. What would happen if the site used plain HTTP?

## Checkpoint

You can now look at a website the way a tester does.
