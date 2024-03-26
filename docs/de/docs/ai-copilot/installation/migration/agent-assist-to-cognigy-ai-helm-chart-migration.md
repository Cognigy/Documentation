---
title: "Migrationsleitfaden: Agent Assist zu Cognigy.AI Helm Chart"
Slug: "Agent-Assist-to-Cognigy-AI-Helm-Chart-Migration"
ausgeblendet: false
---

# Migrationsleitfaden: Agentenunterstützung für Cognigy.AI Helm-Diagramm

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.64-blue.svg)] (.. /.. /.. /release-notes/4.64.md)

Dieser Leitfaden enthält Schritt-für-Schritt-Anleitungen für die Migration von Agent Assist[^*]-Diensten in das Helm-Diagramm "cognigy-ai-app".

[^*]: Ab Version 4.65 wurde Agent Assist in AI Copilot umbenannt.

!!! Warnung "Helm-Chart-Migration erforderlich"
    Ab Version 4.65 sind die Agent Assist Services vollständig in das Helm-Chart "cognigy-ai-app" integriert. Diese Integration impliziert, dass die von diesem Helm-Chart bereitgestellten Dienste nicht mit den Versionen 4.65 und höher der Cognigy.AI-Plattform kompatibel sind. Benutzer müssen zum neuen Diagramm migrieren, um weiterhin Updates und Support zu erhalten. 
    Beachten Sie, dass der 'agent-assist-genesys-notifications-forwarder' nicht mehr mit Version 4.64 und früheren Versionen kompatibel ist, da er nun eine Integration mit RabbitMQ erfordert. Benutzern wird empfohlen, ihre Upgrade-Strategien entsprechend zu planen, um reibungslose Übergänge und kontinuierliche Funktionalität zu gewährleisten.

!!! Hinweis "Downtime"
    Das Umschalten des "Eingangs" als Teil des Migrationsprozesses führt zu einer Ausfallzeit. Das Produkt ist erst verfügbar, wenn alle neuen Pods im Namespace "county-ai" betriebsbereit sind und der Namespace "agent-assist" gelöscht wurde. Planen Sie diese Migration entsprechend, um die Auswirkungen zu minimieren.

## Voraussetzungen

### Upgrade der aktuellen Installation von Agent Assist auf v4.64

Für die Migration auf das Helm-Diagramm "cognigy-ai-app" ist Agent Assist v4.64 oder höher erforderlich. Wenn Sie eine frühere Version ausführen, führen Sie ein Upgrade auf v4.64 oder höher durch, bevor Sie mit der Migration fortfahren.

## Aufgaben vor der Migration

Bevor Sie mit der Migration beginnen, führen Sie die folgenden vorbereitenden Aufgaben aus.

### Kopieren von Agent-Assist-Namespace-Geheimnissen

Sie müssen die vorhandenen Geheimnisse aus dem Namespace "agent-assist" in den Namespace "cognigy-ai" kopieren. Der erforderliche geheime Schlüssel ist "cognigy-agent-assist" (MongoDB-Verbindungszeichenfolge).

Verwenden Sie das Skript "copy-secret.sh", um diese Geheimnisse zu kopieren:

'''bash
#!/bin/bash

# Geheimes Geheimnis und Namespaces definieren
sourceNamespace="agenten-assist"
destinationNamespace="cognigy-ai"
secret="Cognigy-Agent-Assist"

# Prüfen Sie, ob kubectl installiert ist
wenn! Befehl -v kubectl &> /dev/null
dann
    echo "kubectl konnte nicht gefunden werden, bitte installieren Sie es, um dieses Skript auszuführen."
    Ausfahrt 1
Fi

# Kopieren Sie das Geheimnis
echo "Kopieren $secret von $sourceNamespace nach $destinationNamespace..."
kubectl get secret $secret --namespace $sourceNamespace -o yaml |\
sed '/namespace:/d' |\
kubectl apply --namespace=$destinationNamespace -f -

echo "Geheimnis erfolgreich kopiert."

'''

Führen Sie das Skript aus:

'''bash
chmod +x copy-secret.sh
./copy-secret.sh
'''

### values.yaml für die Migration vorbereiten

Konfigurieren Sie die Datei "values.yaml" mit neuen Werten für die Abschnitte "ingress" und "c'ognigyAgentAssist":

'''Yaml
Eintritt:
  # ...
  agentAssistBackend:
    Gastgeber: ""
  agentAssistFrontend:
    Gastgeber: ""

cognigyAgentAssist:
  # Aktivieren Sie diese Option nur, wenn Sie Genesys-Benachrichtigungen an Agent Assist weiterleiten möchten.
  # enableGenesysNotificationsForwarder: true
  Aktiviert: true
'''

Dieser geheime Schlüssel "agent-assist-api-key" enthält ein Feld "api-key" und wird für die Authentifizierung sowohl der Agent Assist-API-Rest- als auch der WebSocket-API verwendet.

### Umgebungsvariablen hinzufügen

Entfernen Sie alte 'extraEnvVars', die 'AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN' enthalten, falls sie aus dem Helm-Diagramm 'cognigy-ai-app' definiert sind:

'''Yaml
serviceAi:
  # ...
  # Entferne die folgenden Zeilen
  extraEnvVars:
    - Bezeichnung: AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN
      valueFrom:
        secretKeyRef:
          Name: agent-assist-workspace-credentials
          Schlüssel: API-Zugriffstoken

serviceEndpoint:
  # ...
  # Entferne die folgenden Zeilen
  extraEnvVars:
    - Bezeichnung: AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN
      valueFrom:
        secretKeyRef:
          Name: agent-assist-workspace-credentials
          Schlüssel: API-Zugriffstoken

serviceÜbergabe:
  # ...
  # Entferne die folgenden Zeilen
  extraEnvVars:
    - Bezeichnung: AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN
      valueFrom:
        secretKeyRef:
          Name: agent-assist-workspace-credentials
          Schlüssel: API-Zugriffstoken

cognigyEnv:
  # ...
  # Entferne die folgenden Variablen
  AGENT_ASSIST_WORKSPACE_FRONTEND_URL_WITH_PROTOCOL=
  AGENT_ASSIST_WORKSPACE_API_BASE_URL_WITH_PROTOCOL=
'''

Aktualisieren Sie den Abschnitt "cognigyEnv", um sicherzustellen, dass er die richtigen Domänennamen für Ihre Umgebung enthält:

'''Yaml
cognigyEnv:
  # Aktivieren Sie diese Option nur, wenn Sie Genesys-Benachrichtigungen an Agent Assist weiterleiten möchten.
  FEATURE_ENABLE_AGENT_ASSIST_WORKSPACE_GENESYS_CREDENTIALS_WHITELIST: "*"
'''

## Migrationsprozess

Führen Sie die folgenden Aufgaben aus, um die Migration zu initiieren.

### Migrieren Sie zu Cognigy. KI-Helm-Diagramm

Nachdem Sie die Aufgaben vor der Migration abgeschlossen haben, fahren Sie mit der Migration fort, indem Sie das Helm-Diagramm "cognigy-ai-app" mit der aktualisierten Datei "values.yaml" bereitstellen.

### Deinstallieren des Agent Assist-Namespace

Deinstallieren Sie nach erfolgreicher Migration den Namespace "agent-assist":

'''bash
helm uninstall agent-assist --namespace agent-assist
kubectl delete ns agent-assist
'''

Die Migration ist abgeschlossen. Sie können jetzt das Helm-Diagramm "cognigy-ai-app" verwenden, um Ihre Agent Assist-Dienste zu verwalten.