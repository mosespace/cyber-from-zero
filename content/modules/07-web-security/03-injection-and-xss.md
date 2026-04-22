---
title: SQL Injection and XSS
summary: The two classic web attacks, safely explained.
minutes: 8
---
## SQL injection

Websites ask a database questions using a language called SQL. If a site builds a question by gluing user text into it, an attacker can add their own commands.

Imagine a login box that does this:

```
SELECT * FROM users WHERE name = '<what you typed>'
```

If a user types something tricky instead of a name, the question changes meaning. The database may reveal every user.

**The fix:** use **prepared statements** (parameterised queries). They keep data separate from commands.

## Cross-site scripting (XSS)

XSS happens when a site shows user text on a page without cleaning it. An attacker leaves a comment containing a small script. Every visitor's browser runs it.

**The fix:** **escape output** so `<` becomes `&lt;`, and use a Content Security Policy.

## One rule to cover both

> Treat all user input as dangerous until proven safe.

## Where to practise legally

Use deliberately vulnerable practice sites such as PortSwigger Web Security Academy, OWASP Juice Shop or TryHackMe. Never test real websites without permission.

## Remember

