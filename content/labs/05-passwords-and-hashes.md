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

## Part C: Install a password manager

1. Choose a trusted manager (for example Bitwarden or 1Password).
2. Create a **passphrase** of four random words as your master password.
3. Save the recovery kit somewhere safe, offline.

## Part D: Turn on MFA

Turn on MFA for these three accounts first:

1. Your main email
2. Your phone's app store account
3. Your bank or money app

Prefer an authenticator app or a hardware key over text messages.

## Checkpoint

- You can explain what a hash is and why a small change makes a totally different hash.
