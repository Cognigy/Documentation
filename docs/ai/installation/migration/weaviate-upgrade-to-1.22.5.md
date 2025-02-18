---
title: "Weaviate Upgrade to v1.22.5"
slug: "weaviate-upgrade-to-v1.22.5"
hidden: false
---

# Weaviate Upgrade to v1.22.5 with Cognigy.AI Release 4.66.0

This guide is intended for Cognigy on-premises customers
who are using the [Knowledge AI features](../../empower/knowledge-ai/overview.md).

!!! warning
    The Weaviate upgrade requires downtime of approximately 30 – 60 minutes. However, this downtime applies to Knowledge AI features only; all other features will remain available.

## Introduction

Cognigy.AI releases 4.65.0 and earlier use Weaviate 1.19.0 as the vector database for the [Knowledge AI features](../../empower/knowledge-ai/overview.md).
The latest version of Weaviate, for example, 1.22.5, introduces several stability improvements necessary to ensure the smooth operation of Knowledge AI features in Cognigy.AI.

Due to limitations in Weaviate's internal implementation, it is not possible to perform a rolling upgrade from Weaviate 1.19.0 to 1.22.5. Additionally, when Weaviate 1.22.5 starts, it upgrades the schema for all existing data to a version that is not backwards compatible with Weaviate 1.19.0. Therefore, one must carefully follow the steps described in the following sections to ensure a smooth upgrade.

## Terminology

- This guide uses the file name `cognigy-ai-values.yaml` to refer to the Helm values file containing your customizations for the Cognigy.AI Helm chart. Replace this with the file name used in your environment.
- This guide assumes that Cognigy.AI is deployed in the `cognigy-ai` namespace. If you have deployed Cognigy.AI in any other namespace, adjust the namespace parameters in all the commands accordingly.

## Prerequisites

- Cognigy.AI v4.66 is deployed.
    - The Cognigy.AI upgrade from v4.65 to v4.66 will not affect the Weaviate version, and it must be completed before attempting to upgrade Weaviate.
- Kubernetes v1.21 – 1.27.
- The `kubectl` utility is installed locally on a Linux or macOS client host. Note that this guide does not support Windows client hosts.
- Helm Chart v3.9.0 – 3.12.3 is installed on the client host.
- Kubernetes cluster meets general Cognigy.AI [prerequisites](../prerequisites.md#whitelisting-of-domains), including hardware resources.

## Upgrade

1. Scale down the Weaviate StatefulSet.
    ```bash
    kubectl scale -n cognigy-ai statefulset weaviate --replicas=0
    ```
2. Back up all Weaviate Persistent Volume Claims (PVCs).
    ```bash
    for pvc in {0..2}; do kubectl get pvc -n cognigy-ai weaviate-data-weaviate-$pvc -o yaml > weaviate-data-weaviate-$pvc; done
    ```
3. Back up all Weaviate Persistent Volumes (PVs) using instructions from your cloud provider and also save the PV manifests. Save the PV manifests.
    ```bash   
    for i in $(kubectl get pv | grep -E 'weaviate' | awk '{print $1}')
    do
    kubectl get pv $i -o yaml > $i.yaml
    done
    ```
4. In your `cognigy-ai-values.yaml` file for Cognigy.AI, set `weaviate.image.tag` to `1.22.5`.
5. Redeploy the Cognigy.AI Helm chart. This action will scale up the Weaviate StatefulSet with Weaviate version 1.22.5.
    ```bash
    helm registry login cognigy.azurecr.io \
    --username <your-username> \
    --password <your-password>
    
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version 4.66.0 --values cognigy-ai-values.yaml
    ```

All Knowledge AI features should be available again once all three Weaviate replicas are up and running.

## Troubleshooting

In case of a failed upgrade, follow the steps below to roll back to Weaviate v1.19.0 and then perform a cleanup.

### Rollback

Follow the steps below to roll back to Weaviate v1.19.0:

1. Scale down the Weaviate StatefulSet to 0 pods.
    ```bash
    kubectl scale -n cognigy-ai statefulset weaviate --replicas=0
    ```
2. Delete the Weaviate PVCs.
    ```bash
    for pvc in {0..2}; do kubectl delete pvc -n cognigy-ai weaviate-data-weaviate-$pvc; done
    ```
3. Create volumes from the Weaviate Persistent Volumes backup taken during the upgrade process. This process could be very specific to the platform you are using; hence we are not providing any commands here.
4. Restore the backup of Weaviate Persistent Volume Claims taken during the upgrade process. Ensure that the volumes created in the previous step are used in the PV manifest (you have taken a backup of the PV manifests during the update at step 3; modify them accordingly). Also, use the PV name as the volumeName in the PVC (you have taken a backup of the PV manifests during the update at step 2; modify them accordingly). Apply these files. After applying, the PV and PVC should be in the "bound" stage.
5. Remove `weaviate.image.tag` from `cognigy-ai-values.yaml`. The Helm Chart upgrade will later pick up the 1.19.0 tag from the Cognigy.AI values.yaml shipped with the Cognigy.AI release.
6. Redeploy the Cognigy.AI Helm chart. This action will scale up the Weaviate StatefulSet with Weaviate version 1.19.0.
    ```bash
    helm registry login cognigy.azurecr.io \
    --username <your-username> \
    --password <your-password>
    
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version 4.66.0 --values cognigy-ai-values.yaml
    ```

All Knowledge AI features should be available again once all three Weaviate replicas are up and running.

### Cleanup

If the Weaviate 1.22.5 upgrade fails and a rollback to version 1.19.0 is necessary, perform the following cleanup step:

1. Delete the Weaviate PVs that were used with Weaviate 1.22.5 during the upgrade. Use the following command for each Weaviate PV name you noted down during the upgrade.

    ```bash
    kubectl delete pv <pv-name>
    ```