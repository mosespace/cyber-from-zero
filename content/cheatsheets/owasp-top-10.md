---
title: OWASP Top 10 at a Glance
summary: One line on each of the biggest web risks, and its fix.
color: "#8DA6FF"
---
## The list in plain words

| Risk | In one line | Main fix |
|------|-------------|----------|
| Broken access control | Users see things they should not | Check permissions on the server for every request |
| Cryptographic failures | Sensitive data left unprotected | Use HTTPS and strong encryption |
| Injection | User input becomes a command | Prepared statements, input checks |
| Insecure design | The plan itself was risky | Threat model early |
| Security misconfiguration | Defaults and open settings | Harden and review settings |
| Vulnerable components | Old libraries with known bugs | Update and track dependencies |
| Authentication failures | Weak login protection | MFA, lockouts, strong passwords |
| Integrity failures | Unchecked updates or data | Sign and verify |
| Logging failures | Nobody sees the attack | Log and alert |
