---
 Titel: "Lagerung" 
 slug: "Speicher" 
 ausgeblendet: false 
---
# Lagerung

Live Agent verwendet [active storage](https://edgeguides.rubyonrails.org/active_storage_overview.html) zum Speichern von Anhängen. Die Standardspeicheroption ist der lokale Speicher auf Ihrem Server oder mit einem NFS-Server (bevorzugter Weg) und CDNs von einem beliebigen Cloud-Anbieter wie AWS S3, Microsoft Azure und Google Cloud usw. Nachfolgend finden Sie die erforderlichen zusätzlichen Werte.

## Verwenden eines NFS-Servers

### AWS

Bei Verwendung von AWS muss [ein vorhandenes Elastic File System oder EFS eingerichtet werden](https://aws.amazon.com/efs/). Geben Sie basierend auf Ihrem EFS die folgenden Werte ein:

| Bezeichnung: | Typ | Wert | 
|------------------------------------|--------|-------------| 
| 'storage.cloudProvider' | Zeichenfolge | '"aws"' |
| 'storage.fileSystemId' | Zeichenfolge | '""'        |
| 'storage.provisionerName' | Zeichenfolge | '""'        |
| 'storage.region' | Zeichenfolge | '""'        |
| 'configmap. ACTIVE_STORAGE_SERVICE' | Zeichenfolge | '"lokal"' |

### Azure

Bei der Verwendung von Azure muss ein Netzwerkdateisystem oder NFS-Server eingerichtet werden. Geben Sie basierend auf Ihrem NFS-Server die folgenden Werte ein:

| Bezeichnung: | Typ | Wert | 
|------------------------------------|--------|-----------| 
| 'storage.size' | Zeichenfolge | '"10Gi"' |
| 'storage.cloudProvider' | Zeichenfolge | '"azurblau"' |
| 'storage.nfsServer' | Zeichenfolge | '""'      |
| 'configmap. ACTIVE_STORAGE_SERVICE' | Zeichenfolge | '"lokal"' |

## Verwenden eines CDN

Legen Sie den folgenden Wert auf '"cdn"' fest, um ein Content Delivery Network oder CDN zu verwenden, und geben Sie die restlichen Werte basierend auf dem Anbieter ein, den Sie verwenden möchten.

| Bezeichnung: | Typ | Wert | 
|-------------------------|--------|---------| 
| 'storage.cloudProvider' | Zeichenfolge | '"CDN"' |

[//]: <> (Vorerst kommentiert, da dies für Assets in den Live-Chat-Widget-Anhängen von Chatwoot gedacht ist)
[//]: <> (## Verwenden von CDN für die Asset-Bereitstellung)
[//]: <> (Wenn Sie eine stark frequentierte Website haben, empfehlen wir Ihnen, CDN für Ihre Asset-Bereitstellung einzurichten.)

[//]: <> (| Bezeichnung: | Typ | Wert | )
[//]: <> (| --------------- | ----- | ---- | )
[//]: <> (| 'configmap. ASSET_CDN_HOST' | Zeichenfolge | '"<distribution>.cloudfront.net"' |)

### Verwenden von Amazon S3

Sie können beginnen, indem Sie einen [S3-Bucket](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) erstellen
und [IAM-Benutzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
, um die folgenden Details zu konfigurieren.

| Bezeichnung: | Typ | Wert | 
|------------------------------------|--------|------------| 
| 'configmap. ACTIVE_STORAGE_SERVICE' | Zeichenfolge | '"Amazonas"' |
| 'configmap. S3_BUCKET_NAME' | Zeichenfolge | '""'       |
| 'configmap. AWS_ACCESS_KEY_ID' | Zeichenfolge | '""'       |
| 'configmap. AWS_SECRET_ACCESS_KEY' | Zeichenfolge | '""'       |
| 'configmap. AWS_REGION' | Zeichenfolge | '""'       |

Für das Festlegen der Umgebungsvariablen "AWS_SECRET_ACCESS_KEY" muss ein geheimer Schlüssel eingerichtet werden.

| Bezeichnung: | Typ | Wert | 
|-----------------------------------------------|--------|---------------------------| 
| 'storage.secretAccessKey.environmentVariable' | Zeichenfolge | '"AWS_SECRET_ACCESS_KEY"' |
| 'storage.secretAccessKey.existingSecret' | Zeichenfolge | '"<secret-name>"' |
| 'storage.secretAccessKey.existingSecretKey' | Zeichenfolge | '"<secret-key>"' |

### Verwendung von Google GCS

| Bezeichnung: | Typ | Wert | 
|------------------------------------|--------|------------| 
| 'configmap. ACTIVE_STORAGE_SERVICE' | Zeichenfolge | '"Google"' |
| 'configmap. GCS_PROJECT' | Zeichenfolge | '""'       |
| 'configmap. GCS_BUCKET' | Zeichenfolge | '""'       |

Für das Festlegen der Umgebungsvariablen "GCS_CREDENTIALS" muss ein geheimer Schlüssel eingerichtet werden. 

| Bezeichnung: | Typ |Wert | 
|-----------------------------------------------|--------|--------------------| 
| 'storage.secretAccessKey.environmentVariable' | Zeichenfolge | '"GCS_CREDENTIALS"'|
| 'storage.secretAccessKey.existingSecret' | Zeichenfolge | '"<secret-name>"' |
| 'storage.secretAccessKey.existingSecretKey' | Zeichenfolge | '"<secret-key>"' |

Der Wert von 'GCS_CREDENTIALS' sollte eine JSON-formatierte Zeichenfolge sein, die die folgenden Schlüssel enthält.

'''bash
{
  "type": "service_account",
  "project_id" : "",
  "private_key_id" : "",
  "private_key" : "",
  "client_email" : "",
  "client_id" : "",
  "auth_uri" : "",
  "token_uri" : "",
  "auth_provider_x509_cert_url" : "",
  "client_x509_cert_url" : ""
}
'''

### Verwenden von Microsoft Azure

| Bezeichnung: | Typ | Wert | 
|----------------------------------------|--------|---------------| 
| 'configmap. ACTIVE_STORAGE_SERVICE' | Zeichenfolge | '"Microsoft"' |
| 'configmap. AZURE_STORAGE_ACCOUNT_NAME' | Zeichenfolge | '""'          |
| 'configmap. AZURE_STORAGE_CONTAINER' | Zeichenfolge | '""'          |

Für das Festlegen der Umgebungsvariablen "AZURE_STORAGE_ACCESS_KEY" muss ein geheimer Schlüssel eingerichtet werden. 

| Bezeichnung: | Typ | Wert | 
|-----------------------------------------------|--------|------------------------------| 
| 'storage.secretAccessKey.environmentVariable' | Zeichenfolge | '"AZURE_STORAGE_ACCESS_KEY"' |
| 'storage.secretAccessKey.existingSecret' | Zeichenfolge | '"<secret-name>"' |
| 'storage.secretAccessKey.existingSecretKey' | Zeichenfolge | '"<secret-key>"' |

### Verwenden eines Amazon S3-kompatiblen Service

Um einen S3-kompatiblen Dienst wie [DigitalOcean Spaces](https://www.digitalocean.com/docs/spaces/resources/s3-sdk-examples/#configure-a-client), Minio usw. zu verwenden.

| Bezeichnung: | Typ | Wert | 
|------------------------------------|--------|-----------------------------------------| 
| 'configmap. ACTIVE_STORAGE_SERVICE' | Zeichenfolge | '"s3_compatible"' |
| 'configmap. STORAGE_BUCKET_NAME' | Zeichenfolge | '""'                                    |
| 'configmap. STORAGE_ACCESS_KEY_ID' | Zeichenfolge | '""'                                    |
| 'configmap. STORAGE_REGION' | Zeichenfolge | '"NYC3"' |
| 'configmap. STORAGE_ENDPOINT' | Zeichenfolge | '"https://nyc3.digitaloceanspaces.com"' |

Für das Festlegen der Umgebungsvariablen "STORAGE_SECRET_ACCESS_KEY" muss ein geheimer Schlüssel eingerichtet werden. 

| Bezeichnung: | Typ | Wert | 
|-----------------------------------------------|--------|-------------------------------| 
| 'storage.secretAccessKey.environmentVariable' | Zeichenfolge | '"STORAGE_SECRET_ACCESS_KEY"' |
| 'storage.secretAccessKey.existingSecret' | Zeichenfolge | '"<secret-name>"' |
| 'storage.secretAccessKey.existingSecretKey' | Zeichenfolge | '"<secret-key>"' |

Setzen Sie force_path_style auf true, wenn Sie minio verwenden.

| Bezeichnung: | Typ | Wert | 
|--------------------------------------|------|--------| 
| 'configmap. STORAGE_FORCE_PATH_STYLE' | bool | 'wahr' |

## Verwendung eines einzelnen PVC (nicht empfohlen)

Für die Speicherung steht ein lokaler Persistent Volume Claim (PVC) zur Verfügung. Es wird jedoch nicht für das zentrale Hochskalieren von Bereitstellungen empfohlen, da nur ein PVC pro Bereitstellung vorhanden ist. 
| Bezeichnung: | Typ | Wert | 
|-------------------------|----------------|------------| 
| 'storage.cloudProvider' | Zeichenfolge | '"keine"' |
| 'storage.size' | Zeichenfolge | '"10Gi"' |</secret-key></secret-name></secret-key></secret-name></secret-key></secret-name></secret-key></secret-name></distribution>