---
 title: "Installation & Updating" 
 slug: "installation-and-updating" 
 hidden: false 
---
# Installation & Updating

## Overview

<div class="divider"></div>

Cognigy.AI is a modern software product and based on a microservice architecture. This means that we are not shipping a single binary to our customers, but rather multiple binaries packaged as Docker images. If you want to install and run our product, you have to provision a Kubernetes cluster as this container orchestrator is required in order to run our product.

???+ danger "DockerSwarm support dropped"
    With Cognigy.AI version 4.0.0 we have dropped support for DockerSwarm as a container orchestrator and Kubernetes is the only way of how you can install our product.

???+ danger "Update from Cognigy.AI 3.X"
    You can't update a Cognigy.AI 3.X installation to Cognigy.AI 4.X by using the usual "update" mechanism. You have to setup a new installation for Cognigy.AI 4.X and migrate your content. Please get in touch with us if you have any questions regarding the "update path".

You can get more information about Kubernetes by reading through their official documentation: [https://kubernetes.io/](https://kubernetes.io/)

Installing our product requires our installation-guide, which you can download using this link: [https://docs.cognigy.com/downloads/cognigy-4-x-rev10.zip]({{config.site_url}}downloads/cognigy-4-x.zip)