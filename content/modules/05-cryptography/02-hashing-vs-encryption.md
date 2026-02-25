---
title: Hashing vs Encryption
summary: One-way fingerprints and two-way locks.
minutes: 7
---
People mix these up, but they do different jobs.

| | Hashing | Encryption |
|--|---------|------------|
| Direction | One way only | Two ways (lock and unlock) |
| Needs a key? | No | Yes |
| Can you get the original back? | No | Yes, with the key |
| Used for | Storing passwords, checking files | Private messages, HTTPS |

## Hashing: a fingerprint

A hash turns any data into a short fixed code. Change one letter and the whole code changes.

```
hello  ->  2cf24dba5fb0a30e...
Hello  ->  185f8db32271fe25...
```

