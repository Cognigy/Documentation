---
title: "Füge einen weiteren Posteingang für dein Projekt hinzu" 
Slug: "Live-Agent-Setup-zusätzliche-Posteingang" 
ausgeblendet: false 
---
# Fügen Sie einen weiteren Posteingang für Ihr Projekt hinzu

Sie können zusätzliche Posteingänge in Live Agent erstellen und diese für die Übergabe innerhalb Ihrer Flows konfigurieren.

## Fügen Sie einen zusätzlichen Posteingang hinzu

Gehen Sie folgendermaßen vor, um einen weiteren Posteingang in Live Agent hinzuzufügen:

1. Klicken Sie in der Seitenleiste des Live Agent-Dashboards auf **Posteingänge**.
2. Klicken Sie in der oberen rechten Ecke auf die Schaltfläche **+ Posteingang hinzufügen**. Live Agent zeigt Ihnen einen Bildschirm, auf dem Sie Ihren Posteingang einrichten können.

    <figure>
        <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_setup.png" width="80%" alt="Live Agent Inbox Setup">
      <figcaption></figcaption>
    </figure>

3. Füllen Sie auf der Seite Posteingang einrichten die folgenden Felder aus:
    - **Kanalname** — Erstellen Sie einen eindeutigen Posteingangsnamen. Zum Beispiel 'Cognigy Handover'.
    - **Webhook-URL** — Geben Sie den Cognigy.AI Endpoint Config URL-Domänennamen ein, erweitert um "/handover/liveagent". Beispiel: "https://endpoint-trial.cognigy.ai/handover/liveagent". Sie finden die URL für die Endpunktkonfiguration im Abschnitt **Konfigurationsinformationen** Ihres Endpunkts.

        <figure>
            <img src="{{config.site_url}}live-agent/getting-started/images/LA_Config_URL.png" width="80%">
        </figure>

4. Klicken Sie auf die Schaltfläche **Cognigy.AI Posteingang erstellen**. Nachdem Sie den Posteingang erfolgreich eingerichtet haben, werden Sie im nächsten Schritt aufgefordert, Ihre Agenten dem neuen Posteingang zuzuweisen. 
5. Wählen Sie in der Auswahlliste die gewünschten Agenten aus und klicken Sie auf **Agenten hinzufügen**. 

Ein neuer Live-Agent-Posteingang wurde erstellt.

### Account- und Posteingangs-IDs suchen

Der neue Posteingang wird durch eine Konto-ID und eine Posteingangs-ID definiert. Die Posteingangs-ID ist erforderlich, um den Knoten **Übergabe an den Agenten** zu konfigurieren.

Beide IDs finden Sie in der Live Agent-URL, nachdem Sie den Posteingang erstellt haben.

Gehen Sie folgendermaßen vor, um sie zu finden:

1. Gehen Sie zu **Einstellungen > Posteingänge**.
2. Suchen Sie in der Liste **Posteingänge** den Posteingang, den Sie zuvor erstellt haben, und klicken Sie auf das Symbol **Einstellungen** neben dem Posteingang. 

Die Einstellungen für den Posteingang werden angezeigt.
und Sie sehen die Adresszeile Ihres Browsers wie folgt:
'https://liveagent-<your-environment>/app/accounts/<account-id>/settings/inboxes/<inbox-id>'.
In der URL "https://liveagent-dev.cognigy.ai/app/accounts/2/settings/inboxes/32852" lautet die Konto-ID beispielsweise "2".
und die Posteingangs-ID lautet "32852".

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_URL.png" width="80%">
</figure>

## Konfigurieren eines Flows für die Übergabe an den zusätzlichen Posteingang

Gehen Sie folgendermaßen vor, um einen Flow für eine Übergabe an einen Live-Agenten zu konfigurieren:

1. Öffnen Sie Ihren Flow in Cognigy.AI, der mit einem Übergabeknoten vorbereitet wurde.

    <figure>
        <img src="{{config.site_url}}live-agent/images/Flow_handover_node_config.png" width="80%">
    </figure>

2. Klicken Sie auf den Knoten **Übergabe an Agent**, um den Knoten-Editor zu öffnen.
3. Geben Sie im Abschnitt **Live Agent-Einstellungen** die Posteingangs-ID Ihres neuen Live Agent-Posteingangs ein.  
4. Klicken Sie auf **Knoten speichern**.

Ihr Flow ist jetzt für eine Live-Agentenübergabe konfiguriert.  

## Wie geht es weiter?

- [Konversations-Workflow erkunden](.. /.. /.. /live-agent/conversation/conversation-workflow.md)
- [Konversations-Routing konfigurieren](.. /.. /.. /live-agent/conversation/conversation-routing/overview.md)
- [Passen Sie Ihren Live-Agenten an, indem Sie die Kontoeinstellungen ändern](.. /.. /settings/overview.md)
    - [Menschliche Agenten in Teams gruppieren](.. /.. /settings/teams.md)
    - [Organisieren Sie Ihre Arbeit durch Hinzufügen von Beschriftungen](.. /.. /settings/labels.md)

</inbox-id></account-id></your-environment>