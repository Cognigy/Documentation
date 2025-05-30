---
title: "Weaviate to Qdrant"
slug: "from-weaviate-to-qdrant"
description: "This guide explains how to switch from using Weaviate to Qdrant as the vector database for Knowledge AI."
hidden: false
---

# Migration from Weaviate to Qdrant

This guide is intended for Cognigy on-premises customers who are using the [Knowledge AI features](https://docs.cognigy.com/ai/empower/knowledge-ai/overview/).

!!! warning
    - The migration process requires downtime of approximately 60–90 minutes, depending on the number of stored Knowledge Chunks and the number of projects configured to use Knowledge AI. However, this downtime applies to Knowledge AI features only; all other features will remain available.
    - The migration process alters the `distance` value. Decision-making in Flow will be ineffective post-migration if distance is used.

## Introduction

Cognigy.AI releases 4.72.0 and earlier uses Weaviate as the vector database for Knowledge AI.
With release 4.73.0, Cognigy.AI transitions to Qdrant as the vector database instead of Weaviate.
This change aims to provide Cognigy.AI users with a significantly improved Knowledge AI experience.

This guide explains how to switch from using Weaviate to Qdrant as the vector database for Knowledge AI.

### Test Migration

You can perform a test migration from Weaviate to Qdrant without causing any downtime. 
This means there will be no disruptions to the Knowledge AI traffic in the system. 
A test migration can be used to determine the following:

1. The approximate downtime that will be required for a proper migration.
2. The review of the report generated by the migration job to determine which projects, if any, will be affected.

Note that following such a migration,
the Qdrant Persistent Volume Claims (PVCs) and Persistent Volumes (PVs) will need to be deleted.
For details, see the [Delete Data from Qdrant](#delete-data-from-qdrant) section.
Once the Qdrant database is empty again, a proper migration can be done.

To perform a test migration,
follow the standard steps outlined below
and pay attention to any notes that offer additional guidance specifically for the test migration.

## Terminology

- This guide uses the file name `cognigy-ai-values.yaml` to refer to the Helm values file with your customizations for the Cognigy.AI Helm chart. Replace this with the file name you use in your environment.
- This guide assumes that Cognigy.AI is deployed in the `cognigy-ai` namespace. If you've deployed Cognigy.AI in another namespace, then adjust the namespace parameters in all the commands accordingly.
- This guide uses the term **project**, which corresponds to the term **Agent (as a project)** as specified in the [glossary](../../glossary.md#a).

## Prerequisites

- Cognigy.AI v4.73 is deployed.
- Kubernetes v1.21-1.27.
- The `kubectl` utility is installed locally on a Linux or macOS client host. Note that this guide does not support Windows client hosts.
- Helm v3.9.0–v3.12.3 installed on the client host.
- Kubernetes cluster meets general Cognigy.AI [prerequisites](https://docs.cognigy.com/ai/installation/prerequisites/#whitelisting-of-domains), including hardware resources.

## Pre-Migration Steps

Execute the pre-migration steps to proceed to the migration process.

### Calculate the Amount of Memory Required for Qdrant

The following formula can be used to calculate the memory required by each Qdrant pod in megabytes:

```text
memory_size = (number_of_knowledge_chunks * vector_dimension * 0.000004 * 1.5) + (number_of_projects * 10)
```
where:

- `number_of_knowledge_chunks` is the maximum number of Knowledge Chunks permitted under your Knowledge AI license.
- `vector_dimension` is the dimension of the embedding vectors used in your environment, which depends on the embedding model used for the Knowledge Search use case. Since the `text-embedding-ada-002` is the only embedding model supported for Knowledge AI at this time, `vector_dimension` is always `1536`.
- `0.000004` megabytes (4 bytes) is the size of each 32-bit single-precision floating point element in the embedding vector.
- `1.5` is a factor that accounts for the space needed to store data in addition to the vectors, for example, indexes.
- `number_of_projects` is to use Knowledge AI. Each project using Knowledge AI creates a collection in Qdrant, requiring 10 Megabytes of memory space, even if the collection is empty.

#### Example

Let's consider a scenario where the `text-embedding-ada-002` model is used to compute the embedding vectors.
Then, to store 100,000 Chunks in just one project, the amount of memory we need is calculated as follows:

```text
memory_size = (100000 * 1536 * 0.000004 * 1.5) + (1 * 10) = 931.6 MB`
```

Similarly, for 1 million Chunks with `text-embedding-ada-002` vectors in one project:

```text
memory_size = (1000000 * 1536 * 0.000004 * 1.5) + (1 * 10) = 9226 MB = 9.226 GB
```

### (Optional) Create a Test Project for Knowledge AI

!!! warning
    This step isn't required if you're already running a test migration.

Before starting the process of migrating from Weaviate to Qdrant, create a test project,
which includes just one Knowledge Store with just one small Knowledge Source,
and a Flow with a [Search Extract Output](../../build/node-reference/other-nodes/search-extract-output.md) Node.

Upon completion of the migration process, you can use this project to test search,
ingestion, and Knowledge AI data manipulation operations to verify a successful migration.

## Migration Steps

Pay close attention to the migration steps, ensuring that you don't skip any.

### Step 1. Enable Qdrant

Perform the preliminary steps and proceed to enable Qdrant.

#### Preliminary Steps

- Before proceeding with the setup, ensure that your cluster has enough CPU and memory resources available to support three Qdrant pods.
- To prevent any missing data in Qdrant during setup, disable the ingestion of new Knowledge AI data while Qdrant is being populated. This entails scaling down Weaviate, effectively stopping all ingestion. This note doesn't apply if you're conducting a test migration; Weaviate must remain unscaled for such a scenario.

#### Enable Qdrant 

To enable Qdrant, follow these steps:

1. In the `cognigy-ai-values.yaml` file, add the following sections at the root level:

    ```yaml
    # Enable Qdrant. Add a ‘resources’ section if needed.
    qdrant:
      enabled: true
      metrics:
        serviceMonitor:
          # You can enable this only if are running the Cognigy Monitoring Stack or kube-prometheus-stack in your cluster.
          enabled: false
    
    # Enable the storage class for qdrant
    # Set the following for AWS
    storageClass:
      aws:
        ebs:
          qdrant:
            enabled: true
    
      # Or, set the following for Azure
      storageClass:
        azure:
          disk:
            qdrant:
              enabled: true
    
    # Scale down weaviate (not for test migration), so that no new Knowledge AI data can be ingested while qdrant is being populated.
    weaviate:
      replicas: "0"
    ```

2. Deploy the Cognigy.AI Helm chart with the above changes:

    ```bash
    helm registry login cognigy.azurecr.io \
    --username <your-username> \
    --password <your-password>
    
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version 4.73.0 --values cognigy-ai-values.yaml
    ```

3. The `qdrant-0`, `qdrant-1`, and `qdrant-2` pods should start in tandem. The following command can be used to list the Qdrant pods:

     ```bash
     kubectl get pods -n=cognigy-ai | grep qdrant
     ```

If you are running a proper migration and not a test, Weaviate should have been scaled down. Therefore, no new Knowledge AI operations will be possible.

### Step 2. Populate Qdrant with Existing Knowledge AI Data

Before starting to populate Qdrant,
make sure all three Qdrant pods are up and running and Weaviate has been scaled down.
If you are running a test migration, Weaviate should not be scaled down.

To populate Qdrant with the existing Knowledge AI data, a `Kubernetes Job` must be run in the cluster.
The time it takes for this job to finish depends on the amount of Knowledge AI data that needs to be copied,
as well as the total number of projects that are configured to use Knowledge AI.

The migration job provided below should only be used with an empty Qdrant database. 
In case you need to run the job again, you must remove all collections from Qdrant first. 
Refer to the [Delete Data from Qdrant](#delete-data-from-qdrant) section for detailed instructions on how to empty Qdrant.

To populate Qdrant with Existing Knowledge AI Data, follow these steps:

1. Copy the following job description to a file named `job-populate-qdrant.yaml`. If you are using an image registry other than Cognigy's, replace `cognigy-registry-token` under `imagePullSecrets` with the correct value.
    
    ```yaml
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: job-populate-qdrant
      namespace: cognigy-ai
    spec:
      backoffLimit: 0 # No retries
      activeDeadlineSeconds: 3600 # 60 minutes
      ttlSecondsAfterFinished: 3600 # 60 minutes
      template:
        spec:
          restartPolicy: Never
          containers:
            - name: job-populate-qdrant
              image: cognigy.azurecr.io/job-sync-knowledge-data:release-5dd849b-1710242738
              resources:
                requests:
                  cpu: '0.3'
                  memory: 300M
                limits:
                  cpu: '0.5'
                  memory: 800M
              env:
                - name: REDIS_ENABLE_RECONNECT
                  value: "true"
                - name: RABBITMQ_ENABLE_RECONNECT
                  value: "true"
                - name: KAI_VECTOR_DB
                  value: "qdrant"
                - name: SYNC_KAI_CHUNKS_BATCH_SIZE
                  value: "1000"
                - name: IMPORT_TASK_ARGUMENTS
                  value: "eyJhY3Rpb24iOiJyZXN0b3JlVmVjdG9yREIiLCJvcmdhbmlzYXRpb25JZHMiOltdLCJwcm9qZWN0SWRzIjpbXSwic3RvcmVJZHMiOltdLCJ0YXNrSWQiOiIiLCJ0cmFjZUlkIjoidGVzdCIsInVwZGF0ZUJhdGNoU2l6ZSI6NDB9"
              envFrom:
                - configMapRef:
                    name: cognigy-env
              volumeMounts:
                - name: mongodb-connection-string
                  mountPath: /var/run/secrets/mongodbConnectionString
                  subPath: mongodbConnectionString
                - name: rabbitmq-connection-string
                  mountPath: /var/run/secrets/rabbitmqConnectionString
                  subPath: rabbitmqConnectionString
                - name: redis-password
                  mountPath: /var/run/secrets/redis-password.conf
                  subPath: redis-password.conf
                - name: qdrant-api-key
                  mountPath: /var/run/secrets/qdrant-api-key
                  subPath: qdrant-api-key
                - name: vector-db-config
                  mountPath: /vector-db-config/qdrant/collection/config.json
                  subPath: qdrant-collection-config
          volumes:
            - name: mongodb-connection-string
              secret:
                secretName: cognigy-service-resources
                items:
                  - key: connection-string
                    path: mongodbConnectionString
            - name: rabbitmq-connection-string
              secret:
                secretName: cognigy-rabbitmq
                items:
                  - key: connection-string
                    path: rabbitmqConnectionString
            - name: redis-password
              secret:
                secretName: cognigy-redis-password
            - name: qdrant-api-key
              secret:
                secretName: qdrant-apikey
                items:
                  - key: api-key
                    path: qdrant-api-key
            - name: vector-db-config
              configMap:
                name: vector-db-config
          imagePullSecrets:
            - name: cognigy-registry-token
    ```

2. Apply the job in the cluster:

    ```bash
    kubectl apply –n cognigy-ai –f job-populate-qdrant
    ```
    A pod will be created to correspond with the applied job.
    The logs for this pod will continue reporting the number of Knowledge Sources copied compared to the total number of sources to be copied.

3. Once the job is complete, copy the pod logs for your records. At the end of the logs, a brief report is included that highlights any Sources and Chunks that could not be copied. For more information about the report interpretation, referer to the [Migration Report Overview](#migration-report-overview) section.

If you have any concerns at this step,
contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/) and include these logs in your support ticket.

Towards the end of the job logs, you will notice two error messages: `Broker connection closed: undefined` and `Error while connecting to RabbitMQ. Shutting down`. Ignore both of them.

If you have completed a test migration, the process is already finished. You can record the duration of the migration job and schedule the necessary downtime for the proper migration later. Additionally, you can review the logs from the job to see a list of Sources and Chunks that will not be included in the migration.

#### Migration Report Overview

The migration job logs, generated in the previous step, contain a report at the end.
This report lists, for each organization and project,
the number of Knowledge Sources and Chunks ignored during migration.

The following example helps in interpreting the report:

```json
{
  "Organisation: <org-id>": {
    "Project: <proj-id>": {
      "ignoredSource": 2, // Total number of ignored sources
      "Source: <source-id>": <Number of chunks ignored in this source>,
      "Source: <source-id> ": <Number of chunks ignored in this source>
    },
    "Project: <proj-id>": {
      "missingEmbedding": <Number of chunks ignored>
    }
  }
}
```

The example above depicts a migration where:

- In the first project, two entire sources were ignored; none of the Chunks in these sources were ingested into Qdrant. 
Note that only those Knowledge Sources are ignored entirely that are already corrupt and therefore cannot be used. 
This action should not cause any issues for production AI Agents.
- In the second project, the number corresponding to `missingEmbedding` refers to the number of Chunks ignored because they didn't have corresponding embedding vectors stored. 
This error is similar to the one described previously, except that in this case, the ignored Chunks may be from more than one source. 
Also, these Chunks are already corrupt, and ignoring them should not disrupt the existing AI Agents.

#### Delete Data from Qdrant

Deleting all data from the Qdrant database may be necessary in the following cases:

- You ran a test migration that populated Qdrant. Since the migration job only works with an empty Qdrant database, you need to remove all data from Qdrant before starting a proper migration.
- As part of a proper migration, you finished running the migration job but have not yet started Step 3. Due to a potential issue with the migration job, you would like to run it again before starting Step 3.

In both cases, you can empty the Qdrant database by deleting the Persistent Volume Claims (PVCs) and the Persistent Volumes (PVs) for Qdrant as follows:

1. Delete the PVCs:

    ```bash
    for pvc in {0..2}; do kubectl delete pvc -n cognigy-ai qdrant-storage-qdrant-$pvc; done
    ```

2. Use the following command to delete each Qdrant PV, replacing `Qdrant PV` with the name of each specific PV in the command:

    ```bash
    kubectl delete pv <pv-name>
    ```

### Step 3. Instruct Knowledge AI Components to Use Qdrant instead of Weaviate

Before proceeding with the steps below, ensure that Qdrant has been successfully populated.

To instruct Knowledge AI components to use Qdrant instead of Weaviate, follow these steps:

1. In the `cognigy-ai-values.yaml` file, add or update the following sections:

    ```yaml
    # Make sure KAI_VECTOR_DB is set to "qdrant". WEAVIATE_SCHEMA_REPLICATION_FACTOR is no longer needed.
    serviceSearchOrchestrator:
      extraEnvVars:
        - name: KAI_VECTOR_DB
          value: "qdrant"
    
    # Make sure KAI_VECTOR_DB is set to "qdrant", and the batch size is set to 100.
    taskIngestKnowledgeChunks:
      extraEnvVars:
        - name: TASK_INGEST_KNOWLEDGE_CHUNKS_BATCH_SIZE
          value: "100"
        - name: KAI_VECTOR_DB
          value: "qdrant"
    
    # Disable the CronJob and make sure KAI_VECTOR_DB is set to "qdrant".
    jobSyncKnowledgeData:
      enabled: false
      extraEnvVars:
        - name: KAI_VECTOR_DB
          value: "qdrant"
    ```

2. Deploy the Cognigy.AI Helm chart with the above changes:

    ```bash
    helm registry login cognigy.azurecr.io \
    --username <your-username> \
    --password <your-password>
    
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version 4.73.0 --values cognigy-ai-values.yaml
    ```

After completing the Helm upgrade, all Knowledge AI features should be available again, with Qdrant serving as the vector database.

### Step 4. Test Knowledge AI

If you created a new small Knowledge AI project
as described in the [(Optional)
Create a Test Knowledge AI Project](#optional-create-a-test-project-for-knowledge-ai) section,
you can use it to test search, ingestion, and other Knowledge AI data manipulation operations on existing data. 
Otherwise, you can use any of your existing projects containing Knowledge AI data for testing these operations.

Additionally, we recommend creating a new project with Knowledge AI enabled to test all Knowledge AI operations.

## Post-Migration Steps

Complete the post-migration steps.

### Delete the Weaviate PVC and PV

After successful migration and testing of Knowledge AI features with Qdrant as the vector database, the Weaviate PVC and PV can be deleted.

1. Delete the Weaviate PVC:

    ```bash
    delete pvc -n cognigy-ai weaviate-data-weaviate-0
    ```

2. Delete the Weaviate PV using the name of the Weaviate PV in your system:

    ```bash
    kubectl delete pv <pv-name>
    ```

The Weaviate PVC and PV are deleted.
