---
title: How the Internet Works
summary: Packets, addresses, servers and what happens when you open a website.
minutes: 8
---
The internet is not a cloud. It is millions of real computers connected by real cables (many of them under the sea) and radio waves.

## What happens when you open a website

1. You type `example.com` into your browser.
2. A **DNS server** works like a phone book. It turns the name into an **IP address** like `93.184.216.34`.
3. Your computer sends a **request** to that address.
4. The **server** there sends back the web page.
5. Your browser draws the page on your screen.

```chart:http-flow
```

## Packets: sending a letter in pieces

Big files are cut into small pieces called **packets**. Each packet has the sender's address, the receiver's address and a bit of the data. They travel by different routes and are put back together at the end.

## Key words

| Term | Simple meaning |
|------|----------------|
| IP address | The home address of a computer on a network |
| DNS | The internet phone book |
| Server | A computer that gives things to other computers |
| Client | The computer that asks (your phone or laptop) |
| ISP | The company that connects you to the internet |

