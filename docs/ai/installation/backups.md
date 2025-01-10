---
title: "Backups"
slug: "backups"
hidden: false
---

# Cognigy.AI Secrets Backups

Follow the Cognigy.AI installation guide to [make a backup of secrets](https://github.com/Cognigy/cognigy-ai-helm-chart#cognigyai-secrets-backup).

## Cognigy.AI Data Backups

Periodic backups of Cognigy.AI installation are crucial for production operation.
The backup process may vary depending on your cloud provider and installation specification.
We recommend performing regular backups of the following stateful data:

- Redis persistent data (`redis-persistent` PV).
- MongoDB data (`datadir-mongodb-0` - `datadir-mongodb-2` PVs).
- `flow-modules` and `functions` shared PVs.

The exact backup and disaster recovery plan depends on your choice's cloud provider and the Kubernetes cluster's provisioning method. Thus, we do not adhere to any guidelines but recommend following your cloud provider's backup and disaster recovery best practices. There are also open-source tools like [Velero](https://velero.io/) that can help you automate backups and disaster recovery for Kubernetes clusters in a vendor-neutral way. 