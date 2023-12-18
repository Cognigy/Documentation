---
Titel: "Architektur" 
Slug: "Architektur" 
ausgeblendet: false 
---

# Architektur

<figure>
 <img class="image-center" src="{{config.site_url}}ai-copilot/images/AI-Copilot-Architecture-Flow.png" alt="AI Copilot Architecture" width="100%" />
  <figcaption>KI-Copilot-Architekturdiagramm</figcaption>
</figure>

AI Copilot besteht aus Node.JS Microservices, die ein React-Frontend zusammen mit einer API zum Ausführen von Aktionen wie CRUD-Operationen und WebSockets bereitstellen.

AI Copilot verfügt über die folgenden Dienste:

- Erforderlich für die Ausführung in einem Kubernetes-Cluster
  - Agenten-Assist-Backend (API)
  - Agenten-Assist-Frontend (UI)
- Externe/Interne Dienstleistungen
  - MongoDB-Datenbank als persistenter Speicher
  - Redis-Datenbank für Caching und Performance