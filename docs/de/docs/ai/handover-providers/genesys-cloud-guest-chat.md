---
Titel: "Genesys Cloud-Gast-Chat" 
Slug: "genesys-cloud-guest-chat" 
ausgeblendet: false 
---

# Genesys Cloud-Gast-Chat

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.52-blue.svg)] (.. /.. /release-notes/4.52.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/genesys.svg" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Cognigy integriert Genesys Cloud als zusätzlichen Übergabeanbieter, der es Cognigy-Benutzern ermöglicht, sich mit menschlichen Agenten aus Genesys Cloud zu verbinden.

Die Übergabe von Genesys Cloud Guest Chat basiert auf [Genesys Guest Chat APIs](https://developer.genesys.cloud/commdigital/digital/webchat/guestchat). Diese APIs enthalten Funktionen zum Erstellen einer neuen Chat-Konversation, zum Abrufen des vorherigen Chatverlaufs, zum Senden von Nachrichten, zum Festlegen des Eingabeindikators und zum Verlassen des Chats. Das Empfangen von Nachrichten, Mitgliedschaftsänderungen und anderen Echtzeitereignissen ist über eine WebSocket-Verbindung verfügbar.

## Einrichtung<div class="divider"></div>### Voraussetzungen

- Sie müssen über ein Konto in [Genesys Cloud](https://login.genesys.pure.cloud/) verfügen.

### Übergabeeinstellungen konfigurieren

Wählen Sie unter [Übergabe an Agent](.. /tools/agent-handover.md) die folgenden Einstellungen konfigurieren:

- **Sprache** — Geben Sie eine Sprache für die Konversation an. Zum Beispiel 'englisch', 'spanisch', 'deutsch'.
- **Skills** — Definieren Sie Skills für die Konversation. Zum Beispiel "Eskalation".
- **Priorität** — Legen Sie die Priorität für die Konversation fest. Beispiel: "1". Wenn eine Priorität festgelegt ist, löst dies einen Ablauf in Genesys aus, um die Konversation innerhalb der Warteschlange zu priorisieren oder zu depriorisieren. Beachten Sie, dass für diese Funktion der entsprechende Ablauf in Genesys eingerichtet werden muss.
- **Benutzerdefinierte Attribute** — fügen Sie benutzerdefinierte Attribute im Format "Schlüssel: Wert" hinzu, mit dem Sie zusätzliche Informationen einfügen können. 
  Zum Beispiel:
  '''json
  {
      "section": "Abschnitt A",
      "region": "Europa"
  }
  '''
### Erstellen eines Endpunkts

So beginnen Sie mit der Nutzung von Genesys Cloud als Übergabeanbieter mit Cognigy.AI:

1. Wechseln Sie zu **Bereitstellen > Endpunkte**.
2. Öffnen Sie den Endpunkt, an dem Sie die Übergabe an Genesys Cloud aktivieren möchten.
3. Scrollen Sie nach unten zu **Übergabeeinstellungen** und wählen Sie **Genesys Cloud Guest Chat** aus der Liste aus.
4. Um die erforderlichen Felder auszufüllen und Ihre Einrichtung abzuschließen, lesen Sie den Artikel [Genesys Cloud Handover Integration](https://support.cognigy.com/hc/en-us/articles/6229147435292) im Cognigy Help Center. 

## Mehr Informationen

- [Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md)