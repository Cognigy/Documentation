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

The exact backup and disaster recovery plan depends on the cloud provider of your choice and the provisioning method of the Kubernetes cluster. Thus, we do not adhere here to any guidelines, but rather recommend to follow backup and disaster recovery best practices of your cloud provider. There are also open-source tools like [Velero](https://velero.io/)  that can help you to automate backups and disaster recovery for Kubernetes clusters in a vendor-neutral way. 