---
 Titel: "Architektur" 
 Slug: "Architektur" 
 ausgeblendet: false 
---
# Architektur

<figure>
 <img class="image-center" src="{{config.site_url}}live-agent/images/LA-diagram.svg" alt="Live Agent Architecture" width="100%" />
  <figcaption>Diagramm der Live-Agent-Architektur</figcaption>
</figure>

Live Agent besteht aus einer Ruby On Rails-Anwendung, die ein Vue.js Frontend zusammen mit einer API zum Ausführen von Aktionen wie CRUD-Operationen, WebSockets usw. bereitstellt.

Live Agent verfügt über die folgenden Dienste:

- Erforderlich für die Ausführung in einem Kubernetes-Cluster
    - Live-Agent-Webserver (API & UI)
    - Live-Agent-Arbeiter (Sidekiq)
- Externe/Interne Dienstleistungen
    - PostgreSQL-Datenbank als persistenter Speicher
    - Redis-Datenbank für Caching und Performance
    - E-Mail-Dienst (SMTP-Server)
    - Storage-Lösung: NFS-Server mit (AWS, Azure) oder optionale Integration mit External Object Storage (S3, Azure Storage, GCS)