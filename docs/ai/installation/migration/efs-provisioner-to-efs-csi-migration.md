---
title: "Amazon EFC Provisioner to EFC CSI"
slug: "efs-provisioner-to-efs-csi-migration"
hidden: false
ignore_macros: true
---
# Amazon EFC Provisioner to EFC CSI

Starting from version 4.45, Cognigy.AI supports [Amazon EFS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html) as the [EFS external provisioner](https://github.com/kubernetes-retired/external-storage) is deprecated.

## Prerequisites

- Kubernetes v1.21 - 1.24.
- Kubectl utility is installed locally.
- [Helm](https://helm.sh/) v3.8+ is installed on the client host.
- [Amazon EFS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html) is installed in the kubernetes cluster.
- Cognigy.AI installation must be >= v4.45.
- Snapshots/Backups of all EFS Persistent Volume Claims/Persistent Volumes (flow modules, functions) are must be ready before the migration starts.

## Migration process

1. Retain the `flow-modules` and `functions` Persistent volumes.

    ```bash
    kubectl patch pv <flow-modules-pv-id> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
    kubectl patch pv <functions-pv-id> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
    ```

2. Enable the EFS CSI provisioner in the `values.yaml` file.

    ```bash
    flowModules:
      persistence:
        aws:
          efs:
            enabled: true
            ## EFS File system ID
            ##
            id: ""
            efs_csi:
              enabled: true
    functions:
      persistence:
        aws:
          efs:
            enabled: true
            ## EFS File system ID
            ##
            id: ""
            efs_csi:
              enabled: true
    ```
    For more details, check [here](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml)

3. Disable the currently running efs provisioner in the `values.yaml` file by deleting the following code block.

    ```bash
    efs:
      flowModules:
        id: "<flow-module efs id>"
      functions:
        id: "<function efs id>"
    ```
4. Delete the `flow-modules` and `function` [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/).

    ```bash
    kubectl delete sc aws-efs-flow-modules aws-efs-functions
    ```
5. Reapply the helm chart.

    ```bash
    helm upgrade --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values YOUR_VALUES_FILE.yaml --create-namespace
    ```
