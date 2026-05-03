---
title: Firewalls and VPNs
summary: Guards at the door and private tunnels.
minutes: 7
---
## Firewall

A **firewall** is a guard that checks every packet against a list of rules: allow or block. Rules look at addresses, ports and direction.

Example rule list:

| Rule | Action |
|------|--------|
| Allow port 443 from anywhere | Allow |
| Allow port 22 from the office only | Allow |
| Everything else | Block |

The safe approach is **default deny**: block everything, then open only what is needed.

## VPN

A **VPN** (virtual private network) builds an encrypted tunnel between you and another network. It protects you on public Wi-Fi and hides your traffic from the local network. It does not make you invincible. A VPN provider can still see your traffic, so choose a trustworthy one.

## Remember

- Default deny is the safest firewall style.
