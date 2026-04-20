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

