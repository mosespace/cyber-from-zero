---
title: The OSI Model
summary: Seven layers that describe how data travels, from cable to app.
minutes: 8
---
The OSI model splits networking into **seven layers**. Each layer has one job and talks to the layers above and below it.

```chart:osi-layers
```

## A trick to remember the order

From layer 7 down to 1: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing.

## Where attacks happen

| Layer | Example attack |
|-------|----------------|
| 7 Application | SQL injection, phishing links |
| 4 Transport | SYN flood |
| 3 Network | IP spoofing |
| 2 Data link | Fake Wi-Fi, ARP spoofing |
| 1 Physical | Cutting a cable, stealing a laptop |

## Why this matters

When something breaks or is attacked, defenders ask: "Which layer is this?" That question quickly narrows the problem.

## Remember

- Seven layers, each with one job.
- Defend every layer. Attackers pick the weakest one.
