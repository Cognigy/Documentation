---
title: "Pre-installation Checklist"
slug: "pre-installation-checklist"
hidden: false
---

# Pre-Installation Checklist

Before proceeding with your on-prem installation with or without installation support from Cognigy side, make sure the criteria from the following checklist are met:

1. Read through the installation instructions in `README.md` files in both helm charts ([MongoDB](https://github.com/Cognigy/cognigy-mongodb-helm-chart) and [Cognigy.AI](https://github.com/Cognigy/cognigy-ai-helm-chart)) in advance and complete necessary preparations.

2. Prerequisites for MongoDB Helm Chart installation are met (see `README.md` file in [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) for details).

3. Prerequisites for Cognigy.AI Helm Chart installation are met (see `README.md` file in [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart) for details).

4. Configuration sections for both Helm charts are accomplished and `values.yaml` files for both charts are prepared and prepopulated with necessary data (see README.md files in MongoDB and Cognigy.AI Helm Charts for details).

5. Team members performing the installation have administrative access to the kubernetes cluster via `kubectl`.

6. `kubectl` and `helm` utilities are installed with **required versions**.

7. Kubernetes cluster has resources as specified in [prerequisites](prerequisites.md)

8. Kubernetes worker nodes are distributed across 3 Availability Zones (AZ) for high-availability setup.

9. Cognigy.AI license key is available.

10. Cognigy Container image registry credentials are known.

11. Domains / DNS names for Cognigy.AI URLs are created and available.

12. Wildcard TLS certificate(s) are ready.

13. IP whitelisting for Cognigy’s container registry (`cognigy.azurecr.io:443`) and billing server (`billing.cognigy.ai:443`) is complete.

14. Network access is allowed for HTTP/HTTPS requests.

15. Websocket protocol is supported and can pass through any firewall(s).

16. Storage requirements are met by the underlying cloud infrastructure as specified in [prerequisites](prerequisites.md):
    - Custom `StorageClass` is created for MongoDB as specified in [MongoDB](https://github.com/Cognigy/cognigy-mongodb-helm-chart) installation instructions.
    - Block SSD storage (disks) can be provisioned dynamically in your cloud environment. If dynamic storage provisioning 
is not supported, the required StorageClasses and disks must be created statically.
    - (AWS only): EFS shares for `flow-modules` and `functions` are provisioned in advance and are reachable from the EKS cluster.
    - (Azure only): Azure File shares can be provisioned dynamically.