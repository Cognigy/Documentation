---
title: "Posteingang einrichten" 
Slug: "Live-Agent-Setup-Posteingang" 
ausgeblendet: false 
---

# Einrichten des Posteingangs für Live Agent

Konfigurieren Sie nach [Einrichten von Live Agent für Ihre Organisation](live-agent-setup-org.md) Ihren standardmäßigen Live Agent-Posteingang.

## Agenten-Einstellungen

Gehen Sie folgendermaßen vor, um einen neuen Posteingang für den Agenten zu erstellen:

1. Öffnen Sie in der Cognigy.AI Schnittstelle einen vorhandenen [Agent](.. /.. /.. /ai/resources/agents/agents.md).
2. Klicken Sie im Menü auf der linken Seite des Agenten auf **> Einstellungen verwalten**.
3. Scrollen Sie nach unten und suchen Sie nach **Live Agent-Einstellungen**.
4. Klicken Sie auf **Projekteingang erstellen**.

Sobald der Posteingang erstellt wurde, wird die Schaltfläche **Standard-Posteingangs-ID** deaktiviert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-with-inbox-id.png" width="100%" />
  <figcaption>Posteingang, der bereits für den Agenten erstellt wurde</figcaption>
</figure>

## Fehlerbehebung

### Projekteingang erstellen deaktiviert

Die Schaltfläche **Projekteingang erstellen** kann auch aus folgenden Gründen deaktiviert werden:

* Sie haben die Cognigy Live Agent-Funktion nicht aktiviert.
* Die Organisation hat kein Live Agent-Konto eingerichtet.
* Sie sind nicht berechtigt, einen Posteingang für den Agenten zu erstellen.

**Beispiel 1**

Die Cognigy Live Agent-Funktion ist nicht aktiviert, oder es ist kein Live Agent-Konto auf Organisationsebene eingerichtet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-settings-not-configured.png" width="100%"/>
</figure>

**Beispiel 2**

Sie verfügen nicht über die Berechtigungen, einen Posteingang für Live Agent zu erstellen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-no-permissions.png" width="100%"/>
</figure>

Wenn Sie sowohl das **Theming** als auch die Cognigy Live Agent-Funktion deaktiviert haben, wird der Abschnitt **Live Agent-Einstellungen** auf den Seiten **Organisationsdetails** und **Agenteneinstellungen** nicht angezeigt.

## Wie geht es weiter?

Jetzt müssen Sie eine [Übergabe](live-agent-setup-handover.md) an Live Agent einrichten.