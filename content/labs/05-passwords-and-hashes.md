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

On Linux use `sha256sum` instead of `shasum -a 256`. Compare the two outputs. One capital letter changed **every** character. That is the avalanche effect.

## Part B: Hash a file

```bash
echo "my secret plan" > plan.txt
shasum -a 256 plan.txt
echo "my secret plan!" > plan.txt
shasum -a 256 plan.txt
```

If a hash changes, the file changed. This is how people check downloads have not been tampered with.

