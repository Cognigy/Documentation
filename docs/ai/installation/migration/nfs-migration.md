---
title: "NFS Migration"
slug: "nfs-migration"
description: "This migration guide helps you migrate to the current NFS structure in Cognigy.AI on-premises installations."
hidden: false
tags: 
  - 'migration'
  - 'nfs migration'
  - 'network file system'
---

# Migration Guide for Network File Share

This migration guide helps you migrate to the current NFS structure in on-premises installations.

Several Cognigy.AI features rely on file shares, Network File System (NFS), to store files that multiple services access.

A new NFS structure has been introduced to clearly and consistently reflect [Cognigy.AI's architecture](../architecture.md). For now, the old NFS structure is still compatible, but it will be deprecated in the future. For this reason, users should migrate to the current NFS structure.

To check if you still use the old NFS structure, search for `flow-modules` and `functions` in your Helm chart file. If you find them, you need to migrate to the current NFS structure.

## Prerequisites

- Cognigy.AI 4.90 or later.
- The `kubectl` utility is installed locally on a Linux or MacOS client host. Windows client hosts aren't supported.
- Helm 3.9 or later installed on the client host.
- Kubernetes cluster meets general Cognigy.AI prerequisites, including hardware resources.
- Runtime and IDE file shares have been deployed.

## Migration Process

To migrate to the current NFS structure, you need to:

1. Adjust feature flags to [handle multiple NFS shares](#activate-the-nfs-restructuring-feature) during the migration process from the old to the current NFS structure.
2. Run the [migration job](#finish-migration-and-switch-to-new-nfs-shares) to copy the data from the old NFS structure into the current NFS structure.
3. [Clean up](#post-migration-steps) the old NFS structure.

While running the migration job, there is no downtime.

## Migration Steps

For this migration guide, consider the namespace as `cognigy-ai` and the Helm chart file name as `cognigy-ai-values.yaml`. You need to adjust the following instructions to match to your namespace and Helm chart file name.

### Activate the NFS Restructuring Feature

1. In the `cognigy-ai-values.yaml` file, add the following sections at the root level:

    ```yaml
    jobCopyNfs:
        # This will start the migration job automatically with the default configuration
        enabled: true

    migrateFS:
        # This will let the services use the new NFS shares at the same time as the old NFS shares
        enabled: true
        # This flag should be set to true after the migration finishes to use only the new NFS volumes
        finished: false
    ```

2. Deploy the Cognigy.AI Helm chart:

    ```bash
    helm registry login cognigy.azurecr.io \
        --username <your-username> \
        --password <your-password>

    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version <Min supported version> --values cognigy-ai-values.yaml
    ```

The pods start running. When the migration job successfully finishes, check the logs to ensure the migration job didn't fail to copy any resources.

### Finish Migration and Switch to New NFS Shares

After the migration job is completed and all resources are located in the new NFS shares, follow these steps:

1. Update the `cognigy-ai-values.yaml` file:

    ```yaml
    migrateFS:
        enabled: true
        # Set this flag to true to use only the new NFS volumes
        finished: true

    JobCopyNfs:
        # Set this flag to false to disable the migration job
        enabled: false
    ```

2. Deploy the Cognigy.AI Helm chart:

    ```bash
    helm registry login cognigy.azurecr.io \
        --username <your-username> \
        --password <your-password>

    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version <Min supported version> --values cognigy-ai-values.yaml
    ```

The pods start running. Now, the services use only the new NFS.

### Post-Migration Steps

Set `migrateFS.finished` to `true` within seven days after the migration. This setting ensures the migration process is fully completed and stable before finalizing, and automatically deletes the `storageClass` object in the Persistent Volume Claim of the old NFS shares. To clean up these NFS shares completely, proceed as follows:

1. In `cognigy-ai-values.yaml`, remove the trace of `flow-modules` and `functions` by deleting the following code:

    ```yaml
    ## aws
    flowModules:
        persistence:
            aws:
                efs:
                    enabled: true
                    id: "fs-xx"
                    efs_csi:
                        enabled: true
    functions:
        persistence:
            aws:
                efs:
                    enabled: true
                    id: "fs-yy"
                    efs_csi:
                        enabled: true
    ## azure
    flowModules:
        persistence:
            storageClass: "flow-modules"
    functions:
        persistence:
            storageClass: "functions"

    .......
        flowmodules:
            enabled: true
            skuName: Premium_LRS
            lfs: false
        functions:
            enabled: true
            skuName: Premium_LRS
            lfs: false
    ```

2. Delete all released volumes that were related to `flow-modules` and `functions`.

## More Information

- [Architecture](../architecture.md)
