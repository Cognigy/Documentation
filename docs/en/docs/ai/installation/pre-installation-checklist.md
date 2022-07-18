---
title: "Pre-installation Checklist"
slug: "pre-installation-checklist"
hidden: false
---

# Pre-installation Checklist

Before proceeding with your on-prem installation with or without installation support from Cognigy side, make sure the criteria from the following checklist are met:
1. Please read through the installation instructions in `README.md` files in both helm charts ([MongoDB](https://github.com/Cognigy/cognigy-mongodb-helm-chart) and [Cognigy.AI](https://github.com/Cognigy/cognigy-ai-helm-chart)) in advance and complete necessary preparations.
2. Prerequisites for MongoDB Helm Chart installation are met (see `README.md` file in [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) for details).
- Prerequisites for Cognigy.AI Helm Chart installation are met (see `README.md` file in [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart) for details)
3. Configuration sections for both Helm charts are accomplished and `values.yaml` files for both charts are prepared and prepopulated with necessary data (see README.md files in MongoDB and Cognigy.AI Helm Charts for details).
4. Team has access to the kubernetes cluster via `kubectl`
5. `kubectl` and `helm` utilities are installed with **required versions**
6. Kubernetes cluster has enough resources (at least 6 x `c5.2xlarge` worker nodes on AWS EKS or equivalents on other cloud providers)
7. Kubernetes nodes are distributed across 3 Availability Zones (AZ) for high availability setup if possible
8. Cognigy.AI licence key is available
9. Cognigy Container image registry credentials are known
10. Domains / DNS names for Cognigy.AI URLs are created and available
11. Wildcard TLS certificate(s) are ready
12. IP whitelisting for image repositories is complete: `cognigy.azurecr.io:443`, `downloads.cognigy.com:443`
13. Network access is allowed for HTTP/HTTPS requests
14. Websocket protocol is supported and can pass through firewall(s)
15. Storage requirements are met by the underlying cloud infrastructure:
    - Custom `StorageClass` is provisioned for MongoDB
    - Block storage (disks) can be provisioned dynamically for MongoDB and Redis
    - (AWS only): EFS shares for `flow-modules` and `functions` are provisioned in advance
    - (AWS only): EFS shares for `flow-modules` and `functions`  are reachable from the EKS cluster
    - (Azure only): Azure File shares can be provisioned dynamically