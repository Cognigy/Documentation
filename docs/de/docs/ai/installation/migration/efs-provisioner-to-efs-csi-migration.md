---
title: "Amazon EFC Provisioner für EFC CSI"
Slug: "EFS-Provisioner-zu-EFS-CSI-Migration"
ausgeblendet: false
ignore_macros: wahr
---
# Amazon EFC Provisioner für EFC CSI

Ab Version 4.45 unterstützt Cognigy.AI [Amazon EFS CSI-Treiber](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html), da der derzeit verwendete [EFS External Provisioner](https://github.com/kubernetes-retired/external-storage) veraltet ist.

## Voraussetzungen

- Kubernetes v1.21 - 1.24.
- Das Dienstprogramm Kubectl ist lokal installiert.
- [Helm](https://helm.sh/) v3.8+ ist auf dem Client-Host installiert.
- [Amazon EFS CSI-Treiber](https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html) ist im Kubernetes-Cluster installiert.
- Cognigy.AI Installation muss >= v4.45 sein.
- Snapshots/Sicherungen aller EFS Persistent Volume Claims/Persistent Volumes (Flow-Module, Funktionen) müssen vor Beginn der Migration bereit sein.

## Migrationsprozess

1. Behalten Sie die persistenten Volumes "flow-modules" und "functions" bei.

'''bash
    kubectl patch pv -p '{"spec": {" <flow-modules-pv-id> persistentVolumeReclaimPolicy":"Behalten"}}'
    kubectl patch pv -p '{"spec": {" <functions-pv-id> persistentVolumeReclaimPolicy":"Behalten"}}'
    '''

2. Aktivieren Sie den EFS CSI-Provisioner in der Wertedatei.

'''bash
    flowModule:
      Ausdauer:
        AWS:
          efs:
            Aktiviert: true
            ## EFS-Dateisystem-ID
            ##
            Kennung: ""
            efs_csi:
              Aktiviert: true
    Funktionen:
      Ausdauer:
        AWS:
          efs:
            Aktiviert: true
            ## EFS-Dateisystem-ID
            ##
            Kennung: ""
            efs_csi:
              Aktiviert: true
    '''
    Weitere Informationen finden Sie [hier](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml)

3. Deaktivieren Sie den aktuell ausgeführten efs-Provisioner in der Wertedatei, indem Sie den folgenden Codeblock löschen.

'''bash
    efs:
      flowModule:
        Kennung: "<flow-module efs="" id="">"
      Funktionen:
        Kennung: "<function efs="" id="">"
    '''
4. Löschen Sie die 'flow-modules' und 'function' [StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/).

'''bash
    kubectl sc löschen aws-efs-flow-modules aws-efs-functions
    '''
5. Wenden Sie das Ruderdiagramm erneut an.

'''bash
    helm upgrade --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values YOUR_VALUES_FILE.yaml --create-namespace
    '''
</function></flow-module></functions-pv-id></flow-modules-pv-id>