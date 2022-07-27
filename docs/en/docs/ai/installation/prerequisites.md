---
title: "Prerequisites"
slug: "prerequisites"
hidden: false
---
# Prerequisites

### Kubernetes Cluster
Cognigy.AI installation requires a fully functional Kubernetes cluster. We suggest that you use a managed Kubernetes cluster provided by common public cloud operators (Amazon EKS, Microsoft AKS, Google GKE). Cognigy.AI is fully compatible with following managed Kubernetes services:

- AWS EKS
- Azure AKS

Running Cognigy.AI on top of on-premise Kubernetes clusters will require additional configuration effort from your side. Therefore, we recommend to use public clouds instead. Please, be aware that Cognigy will not provide support for configuring and provisioning Kubernetes clusters.

???+ attention
    Kubernetes versions compatible with Cognigy.AI are specified in [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart)

### Hardware Requirements
For a Cognigy.AI installation with English as the default NLU language, we recommend a Kubernetes cluster with the following specification for AWS EKS (or equivalents on other cloud providers):

- at least 6 x `c5.2xlarge` worker nodes (8 CPU cores and 16 GB RAM per each node)
- 100 GB root SSD storage per worker node
- Kubernetes worker nodes are distributed across 3 Availability Zones (AZ) for high availability setup
- 250 GB of block SSD storage for application databases (250 GB x 3 for 3-replica MongoDB setup)
- 10 GB of file system storage (EFS or other NFS-compatible equivalents) for application assets

???+ attention
    Choosing general-purpose machines instead of compute-optimized machines will have a negative impact on the performance of our software. We advise you to choose compute-optimized machines with high CPU clock speeds and reserved CPU budgets. This is especially important if you plan to install multiple natural language understanding services.


### Kubectl binary 
To deploy Cognigy.AI on a Kubernetes cluster you will need [kubectl](https://kubernetes.io/docs/reference/kubectl/) uitlity installed on a Linux machine which can access the Kubernetes cluster for Cognigy.AI installation. Refer to the official Kubernetes documenatation for details. Please note that the kubectl version must match the version of your Kubernetes cluster.

### Helm Package Manager
Our products are packaged with the [Helm](https://helm.sh/) package manager for Kubernetes. Please get familiar with basic Helm operations before proceeding with installation.

???+ attention
   [Kustomize](https://kustomize.io/) scripts for Cognigy.AI installation are **deprecated**. We strongly recommend to use Helm Charts for all new installations. You can still download the depecated installation documentation for kustomize [here](https://docs.cognigy.com/downloads/cognigy-4-x-rev10.zip). We will stop updating our **kustomize files end this year (31st December 2022)**.

???+ attention
    For Helm versions compatible with Cognigy.AI refer to [Cognigy.AI Helm Chart](h**ttps://github.com/Cognigy/cognigy-ai-helm-chart)


### Cognigy License
Cognigy.AI product requires a license key which you will receive once a license agreement is signed. The key is necessary to install the product.

### Container Image registry credentials:
Cognigy.AI is fully containerized and its binaries are shipped in a form of Docker images which are stored in Cognigy's container registry. You will receive credentials which are necessary to authenticate and pull these images.

### Domains / DNS names
Cognigy.AI exposes several web services for which you will need to assign DNS records in a public domain operated by your organization. Please ensure that you have access to DNS provider of your domain (e.g. Go- Daddy, United-Domains etc.) to configure DNS records. If our product needs to be accessible only from your private network, ensure that you can create DNS records in your private domain.

### TLS certificate(s)
To authenticate a web server and to encrypt web traffic between clients and the web server you need an SSL certificate for the domain in which DNS records for Cognigy.AI will be created. We highly suggest a wildcard certificate as it simplifies installation process. If you cannot use a wildcard certificate for some reason, make sure that your standalone certificate(s) cover(s) all DNS records for our product. The reverse-proxy we ship with our product cannot support multiple certificates out of the box and Cognigy will not provide support for such configurations.

### Whitelisting of Domains
If you plan to set up a Kubernetes environment in a private data center, or there are some networking restrictions applied in your public cloud setup, make sure that Kubernetes nodes can reach `cognigy.azurecr.io:443` Cognigy’s container registry. Otherwise, Cognigy.AI setup will not be able to download necessary docker images and assets during installation process.

### Network Firewalls / Websocket Support
If you plan to set up a Kubernetes environment in a private data center, or there are some networking restrictions applied in your public cloud setup, make sure that all valid HTTP methods (GET, POST, DELETE, etc.) are not blocked by any firewall rules between Kubernetes nodes and Internet in both directions. Our product heavily relies on WebSocket protocol, thus ensure that any network appliances (web proxies, DPI engines, firewalls) between Kubernetes nodes and Internet support WebSocket connections and are configured to handle such connections properly.

???+ attention 
    Please note, that we will not be able to provide any support on setting up any aforementioned network-related prerequisites. Please contact a net-work/system administrator or a related team of your organization for further support.

???+ attention
    While an installation on Windows servers might be possible, we neither support Windows as an OS nor test our product on Windows servers. We will not be able to provide any support for our product if you pick Windows as an OS.

???+ attention
    Please make sure, that all aforementioned prerequisites are met before you move installation process. Please use [Pre-installation Checklist](pre-installation-checklist.md) for a cross-check. Note, that any installation process assisted by our engineers also implies that these prerequisites are fulfilled from your side before installation begins.