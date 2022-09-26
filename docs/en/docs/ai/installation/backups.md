---
title: "Backups"
slug: "backups"
hidden: false
---

## Cognigy.AI Secrets Backups
Follow Cognigy.AI installation guide to [make a backup of secrets](https://github.com/Cognigy/cognigy-ai-helm-chart#cognigyai-secrets-backup)

## Cognigy.AI Data Backups

Periodic backups of Cognigy.AI installation are crucial for production operation. Backup process may vary depending on your cloud provider and installation specification. We recommend performing regular backups of the following stateful data:

- Redis persistent data (`redis-persistent` PV)
- MongoDB data (`datadir-mongodb-0` - `datadir-mongodb-2` PVs)
- `flow-modules` and `functions` shared PVs

