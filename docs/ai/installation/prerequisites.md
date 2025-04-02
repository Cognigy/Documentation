---
title: "Prerequisites"
slug: "prerequisites"
hidden: false
---
# Prerequisites

### Kubernetes Cluster

Cognigy.AI installation requires a fully functional Kubernetes cluster.
We suggest that you use a managed Kubernetes cluster provided by common public cloud operators
(Amazon EKS, Microsoft AKS, Google GKE).
Cognigy.AI is fully compatible with the following managed Kubernetes services:

- AWS EKS
- Azure AKS

!!! warning
    - **On-premises distributions** — running Cognigy.AI on top of on-premises Kubernetes clusters (like OpenShift) will require significant additional configuration effort from your side. Therefore, we recommend using public clouds instead. Be aware that Cognigy will not provide support for configuring and provisioning on-premises Kubernetes clusters to make them compatible with Cognigy products.
    - **On-premises installations** — Kubernetes versions compatible with Cognigy.AI are specified in [Version Compatibility Matrix](version-compatibility-matrix.md).
    - **Updating Cognigy on-premises installations** - when upgrading Cognigy products, don't skip minor versions. Always upgrade one minor version at a time, carefully reviewing the [Release Notes](../../release-notes/index.md) before proceeding. Pay special attention to the Infrastructure section for any additional instructions.
    
### Hardware Requirements
For a Cognigy.AI installation with English as the default NLU language, we recommend a Kubernetes cluster with the following specifications for AWS EKS (or equivalents on other cloud providers):

- At least 6 x `c5.2xlarge` (AWS) or 6 x `Standard_F8s_v2` (Azure) worker nodes or equivalent VMs with 8 CPU/16 GB RAM and `x86_64` CPU architecture on other cloud providers.
- A dedicated and isolated Virtual Private Cloud on AWS (VPC) or Virtual Network on Azure (VNET) with at least `/18` private IP address space for a production Kubernetes cluster. Note that by leveraging an overlay Container Network Interface (CNI) plugin like `kubenet` on Azure, you can drastically reduce the private IP address space required for the installation. However, the Kubernetes cluster must support up to 1000 pods for a production setup.
- Kubernetes worker nodes must be distributed across 3 Availability Zones (AZ) for a high-availability setup.
- 100 GB root SSD storage per worker node.
- 3 x 250 GB block SSD storage for a MongoDB database (3-replica MongoDB setup).
- 3 x 15 GB block SSD storage for Redis-persistent deployment.
- 3 x 50 GB block SSD storage for a Knowledge AI database (if Knowledge AI feature is required).
- At least 4 x 10 GB of shared file system storage (EFS, AFS, or other NFS-compatible equivalents) for application assets.

!!! note "Dynamic storage provisioning on AWS and Azure"
    If you use AWS EKS or Azure AKS platform to run your Kubernetes cluster and your cloud environment supports dynamic storage provisioning, the block SSD storage will be created dynamically. However, for other cloud providers and on-premises installations, you will need to provision custom storage classes with equal performance and ensure the corresponding storage disks can be created. You can find references to storage classes on AWS and Azure in [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart/tree/master/cloud-providers) and [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/699853e79f3573b5923b361bda8fc6796bb8cbcf/values.yaml#L4093).

!!! warning "General-purpose machines"
    Choosing general-purpose machines instead of compute-optimized machines will have a negative impact on the performance of our software. We advise you to choose compute-optimized machines with high CPU clock speeds and reserved CPU budgets. This is especially important if you plan to install multiple natural language understanding services.


### Kubectl binary 
To deploy Cognigy.AI on a Kubernetes cluster, you will need [kubectl](https://kubernetes.io/docs/reference/kubectl/) binary installed on a Linux machine, which can access the Kubernetes cluster for Cognigy.AI installation. Refer to the official Kubernetes documentation for details. Note that the kubectl version must match the version of your Kubernetes cluster.

### Helm Package Manager
Cognigy products are packaged with the [Helm](https://helm.sh/) package manager for Kubernetes. Get familiar with basic Helm operations before proceeding with installation.


!!! warning "Helm versions"
    For Helm versions compatible with Cognigy.AI refer to [Version Compatibility Matrix](version-compatibility-matrix.md).

### Cognigy License
Cognigy.AI product requires a license key, which you will receive once a license agreement is signed. The key is necessary to install the product.

### Container Image registry credentials:
Cognigy.AI is fully containerized, and its binaries are shipped in the form of Docker images,
which are stored in Cognigy's container registry.
You will receive credentials that are necessary to authenticate and pull these images.

### Domains / DNS names
Cognigy.AI exposes several web services
for which you will need to assign DNS records in a public domain operated by your organization.
Ensure that you have access to DNS provider of your domain
(for example, GoDaddy, United-Domains, and more) to configure DNS records.
If Cognigy.AI needs to be accessible only from your private network,
ensure that you can create DNS records in your private domain.

### TLS certificate(s)
To authenticate a web server and to encrypt web traffic between clients and the web server, you need an SSL certificate for the domain in which DNS records for Cognigy.AI will be created. We highly suggest a wildcard certificate as it simplifies installation processes. If you cannot use a wildcard certificate for some reason, make sure that your standalone certificate(s) cover(s) all DNS records for Cognigy.AI. The reverse-proxy we ship with Cognigy.AI cannot support multiple certificates out of the box, and Cognigy will not provide support for such configurations.

### Whitelisting of Domains
If you plan to set up a Kubernetes environment in a private data center or if there are networking restrictions applied in your public cloud setup, make sure that the Kubernetes nodes can reach the following domains:

- `cognigy.azurecr.io:443` — Cognigy's container registry.
- `billing.cognigy.ai:443` — Cognigy's billing server.

Otherwise, the Cognigy.AI setup won't be able to download Docker images and assets during the installation process.
Note, depending on the implementation of Cognigy.AI flows, additional access to resources located in the Internet may be required.

### Network Firewalls / Websocket Support
If you plan to set up a Kubernetes environment in a private data center, or there are some networking restrictions applied in your public cloud setup, make sure that all valid HTTP methods (GET, POST, DELETE, etc.) are not blocked by any firewall rules between Kubernetes nodes and Internet in both directions. Cognigy.AI heavily relies on WebSocket protocol, thus ensure that any network appliances (web proxies, DPI engines, firewalls) between Kubernetes nodes and Internet support WebSocket connections and are configured to handle such connections properly.

!!! warning "Network configuration support"
    We will not be able to provide any support for setting up any previously mentioned network-related prerequisites. Contact a network/system administrator or a related team of your organization for further support.

!!! warning "Limited Windows support"
    While an installation on Windows servers might be possible, we neither support Windows as an OS nor test Cognigy.AI on Windows servers. We will not be able to provide any support for Cognigy.AI if you pick Windows as an OS.

!!! warning "Pre-installation Checklist"
    Make sure that all aforementioned prerequisites are met before you move the installation process. Use [Pre-installation Checklist](pre-installation-checklist.md) for a cross-check. Note that any installation process assisted by our engineers also implies that these prerequisites are fulfilled from your side before installation begins.