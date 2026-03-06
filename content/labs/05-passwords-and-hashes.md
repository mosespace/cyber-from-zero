---
title: Passwords, Hashes and MFA
summary: Set up a password manager, turn on MFA and see a hash with your own eyes.
minutes: 30
module: cryptography
level: Beginner
---
This lab makes your real accounts safer and shows you how hashing works.

## Part A: Hash something

On Mac:

```bash
echo -n "hello" | shasum -a 256
echo -n "Hello" | shasum -a 256
```

