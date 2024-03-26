---
 title: "Agent Assist Bot"
 Slug: "Agenten-Assist-Bot" 
 ausgeblendet: false 
---
# Bot unterstützen

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-overview.png" width="100%" alt="Live Agent Assist Bot Overview" />
  <figcaption>Übersicht über den Live Agent Assist Bot</figcaption>
</figure>

Der Assist Bot ist ein Tool, das entwickelt wurde, um menschliche Agenten bei Kundengesprächen zu unterstützen.
Es enthält einen dedizierten Flow für die Bereitstellung von Informationen für den menschlichen Agenten,
und als solches muss es als separater Flow in Cognigy.AI konfiguriert werden.

## Erstellen eines Assist-Bots

### 1. Erstellen eines neuen WebChat-Endpunkts

Es muss ein neuer WebChat-Endpunkt erstellt werden.  Nachdem der Endpunkt erstellt wurde, ist es an der Zeit, die Endpunkt-URL aus den Einstellungen zu kopieren.

Weitere Informationen zum Erstellen eines Endpunkts finden Sie unter [Endpunkte](.. /.. /ai/resources/deploy/endpoints.md). 
Ein neuer WebChat-Endpunkt benötigt
um zu erfahren, wie man einen Endpunkt erstellt, gehen Sie zu [Endpoints](.. /.. /ai/resources/deploy/endpoints.md).
Nachdem der Endpunkt erstellt wurde, ist es an der Zeit, die Endpunkt-URL aus den Einstellungen zu kopieren.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/ai-endpoint-config-url.png" width="100%" alt="Cognigy.AI Endpoint Config URL" />
  <figcaption>Cognigy.AI Endpunktkonfigurations-URL</figcaption>
</figure>

### 2. Erstellen eines Assist-Bots für einen Posteingang

Nachdem der Endpunkt mit dem Assist-Flow eingerichtet und die URL kopiert wurde, ist es an der Zeit, den Assist-Bot in Live Agent zu erstellen. Gehen Sie zu den Einstellungen für den Posteingang und fügen Sie einen neuen Assist Bot hinzu.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-inbox-settings-assist-bots.png" width="100%" alt="Live Agent Assist Bot Inbox Settings" />
  <figcaption>Einstellungen für den Bot-Posteingang von Live Agent Assist</figcaption>
</figure>

Klicken Sie auf die Schaltfläche "Bots hinzufügen" und füllen Sie die folgenden Felder aus:

| Feld | Wert |
|--------------|-------------------------------------------|
| Bezeichnung: | Name des Assist-Bots |
| Endpunkt-URL | Die URL, die aus den Endpunkteinstellungen |

Der neu hinzugefügte Assist Bot wird im Abschnitt "Assist Bot" der Konversationen verfügbar sein, die zum entsprechenden Posteingang gehören. Es ist möglich, mehrere Assist-Bots im selben Posteingang zu haben und sie zu bearbeiten. Die Änderungen werden sofort übernommen.

### 3. Verwenden des Assist-Bots in einer Konversation

Wenn der Assistent-Bot im Konversationseingang konfiguriert ist, können sie im Abschnitt "Konversationsinformationen" in der rechten Seitenleiste ausgewählt werden. Es gibt eine Registerkarte namens "Assist", und dann können die Assist-Bots über das Dropdown-Menü so eingestellt werden, dass sie mit ihnen chatten.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-chat.png" width="100%" alt="Live Agent Assist Bot Chat" />
  <figcaption>Live-Agenten-Assist-Bot-Chat</figcaption>
</figure>

## Weiterleiten von Assist-Bot-Nachrichten

Die Assist Bot Nachrichten können einfach an den Kunden weitergeleitet werden, indem Sie direkt auf die Nachrichten klicken. Die Nachricht wird automatisch weitergeleitet, wie im Screenshot gezeigt.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-forward-messages.png" width="100%" alt="Live Agent Assist Bot Forward Messages" />
  <figcaption>Live-Agent unterstützt Bot-Weiterleitungsnachrichten</figcaption>
</figure>

## Zurücksetzen der Assist-Bot-Sitzung

Der Assist-Bot-Chat kann zurückgesetzt werden, indem Sie auf die Schaltfläche "Sitzung zurücksetzen" im Dropdown-Menü mit drei Punkten klicken. Dadurch wird der Verlauf gelöscht und die Sitzung mit dem Assist Bot zurückgesetzt.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-reset-session.png" width="100%" alt="Live Agent Assist Bot Reset Session" />
  <figcaption>Live-Agent-Assist-Bot-Reset-Sitzung</figcaption>
</figure>
