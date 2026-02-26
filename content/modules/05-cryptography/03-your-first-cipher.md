---
title: Your First Cipher
summary: Play with the Caesar cipher used by Julius Caesar.
minutes: 5
---
Julius Caesar sent secret notes by moving each letter a few places along the alphabet. With a shift of 3, **A** becomes **D**, **B** becomes **E**, and so on.

## Play with it

```widget:caesar
```

## Why it is weak

There are only 25 possible shifts. A computer can try them all in a blink. This is called a **brute-force attack**. Modern encryption uses keys so huge that trying them all would take longer than the age of the universe.

## Key lesson

A good code stays safe even if the attacker knows **how** it works. Only the key must be secret. This idea is called **Kerckhoffs's principle**.

## Remember

- Old ciphers are fun but not safe.
- Real security comes from strong, well-tested algorithms and secret keys.
