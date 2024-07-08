---
title: "Azure File Provisioner to Azure CSI"
slug: "azure-file-to-azure-csi-migration"
hidden: false
ignore_macros: true
---
# Azure File Provisioner to Azure CSI

From Kubernetes version 1.25 `kubernetes.io/azure-file` got deprecated. Starting from version 4.64.2 Cognigy.AI supports [Azure File Container Storage Interface(CSI)](https://learn.microsoft.com/en-us/azure/aks/azure-files-csi) which replaced the Azure File provisioner. This guide will explain the migration process from Azure File Provisioner to Azure CSI driver. 

## Prerequisites

- Kubernetes >=v1.21.
- Kubectl utility is installed locally.
- [Helm](https://helm.sh/) v3.9+ is installed on the client host.
- Cognigy.AI installation must be >= v4.64.2.
- Snapshots/Backups of all Azure file Persistent Volume Claims/Persistent Volumes (flow modules, functions) are must be ready before the migration starts.
  
## Migration Process

1. Retain the `flow-modules` and `functions` Persistent volumes.

    ```bash
    kubectl patch pv <flow-modules-pv-id> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
    kubectl patch pv <functions-pv-id> -p '{"spec":{"persistentVolumeReclaimPolicy":"Retain"}}'
    ```
2. Enable the Azure CSI provisioner in the values file.

    ```bash
    flowModules:
    persistence:
      storageClass: "flow-modules"
    functions:
    persistence:
      storageClass: "functions"

    storageClass:
    azure:
      file:
        flowmodules:
          enabled: true
          skuName: Premium_LRS
          lfs: false
        functions:
          enabled: true
          skuName: Premium_LRS
          lfs: false
    ```
3. Delete the `flow-modules` and `function` [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/).
   
	 ```bash
	 kubectl delete sc flow-modules functions
	 ```
4. Reapply the helm chart.

    ```bash
    helm upgrade --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values YOUR_VALUES_FILE.yaml --create-namespace
    ```
## Rollback Process

1. Undo all the changes in values file which has been done during migration.
2. Delete the `flow-modules` and `function` [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/).
   
	 ```bash
	 kubectl delete sc flow-modules functions
	 ```
3. Reapply the helm chart.

    ```bash
    helm upgrade --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values YOUR_VALUES_FILE.yaml --create-namespace
    ```

