---
title: Protocols: TCP, UDP and HTTP
summary: The agreed languages that computers use to talk.
minutes: 7
---
A **protocol** is a set of rules for talking, like saying "hello" before a phone call.

## TCP vs UDP

| | TCP | UDP |
|--|-----|-----|
| Style | Careful phone call | Shouting across a room |
| Checks data arrived? | Yes | No |
| Speed | Slower | Faster |
| Used for | Websites, email, files | Video calls, games |

## The TCP three-way handshake

1. Client: "Can we talk?" (SYN)
2. Server: "Yes, can you hear me?" (SYN-ACK)
3. Client: "Yes, I can." (ACK)

Then the real data flows. Attackers sometimes send thousands of step 1 messages and never finish. That is called a **SYN flood**.

## HTTP and HTTPS

