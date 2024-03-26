---
Titel: "KI-Copilot"
Schnecke: "KI-Copilot"
ausgeblendet: false
---
# KI-Copilot im Live-Agenten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.51-blue.svg)] (.. /.. /release-notes/4.51.md)

{! _includes/agent-assist/pricing.md !}

{! _includes/agent-assist/before-you-begin.md !}

{! _includes/live-agent/assistant-setup.md !}

## Einrichten eines Endpunkts

So konfigurieren Sie Ihren Endpunkt:

1. Wechseln Sie zu **Bereitstellen > Endpunkte**.
2. Gehen Sie zu Ihrem **Webchat**-Endpunkt.
3. Scrollen Sie nach unten zu **Übergabeeinstellungen** und wählen Sie **Cognigy Live Agent** aus der Liste aus.
4. Gehen Sie zum Abschnitt **Copilot**.
5. Wählen Sie im Feld **Copilot Config** eine Konfiguration aus, die Sie kürzlich über [API](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) erstellt haben.
6. Klicken Sie auf **Speichern**.
7. Gehen Sie in Live Agent zu **Profileinstellungen > AI Copilot** und wählen Sie **AI Copilot Workspace aktivieren** aus. Alternativ können Sie den Arbeitsbereich für alle menschlichen Agenten in Ihrem Projekt aktivieren. Wechseln Sie dazu zu **Einstellungen > Kontoeinstellungen > AI Copilot-Arbeitsbereich**, wählen Sie **AI Copilot-Arbeitsbereich aktivieren** aus und klicken Sie dann auf **Einstellungen aktualisieren**.

Die Einrichtung des Endpunkts ist abgeschlossen.

## AI Copilot Workspace testen

Gehen Sie folgendermaßen vor, um AI Copilot zu testen:

1. Starten Sie eine Webchat-Sitzung.
2. Schließen Sie den Übergabevorgang an Live Agent ab.
3. Sobald die Übergabe abgeschlossen ist, senden Sie eine Nachricht als Agent.
4. Senden Sie danach eine Nachricht als Benutzer im Webchat.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat.png" width="50%" />
</figure>

Sobald der menschliche Agent diese Nachricht erhält, hängt das Testverhalten davon ab, wie Sie den Endpunkt zuvor konfiguriert haben.

Dieser Arbeitsbereich ist über die rechte Seite des Konversations-Chats zugänglich.
      
<figure>
 <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-workspace.png" width="90%" />
</figure>

Wenn der Test erfolgreich ist, ist das AI Copilot-Setup abgeschlossen.

## Mehr Informationen 

- [KI-Copilot-Übersicht](.. /.. /ai-copilot/overview.md)
- [Erste Schritte mit AI Copilot](.. /.. /ai-copilot/getting-started.md)