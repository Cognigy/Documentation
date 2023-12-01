---
Titel: "Chatwoot" 
Schnecke: "Chatwoot-Übergabe" 
ausgeblendet: false 
---

# Chatwoot

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/chatwoot.svg" width="25%" />
</figure>

## Beschreibung<div class="divider"></div>Cognigy hat **Chatwoot** als zusätzlichen Übergabeanbieter integriert. Diese Integration ermöglicht es Cognigy-Kunden, ihre Benutzer über die [Chatwoot](https://www.chatwoot.com/)-Plattform mit menschlichen Agenten zu verbinden. Chatwoot ist eine Open-Source-Lösung und kann kostenlos verwendet werden.

## Einrichtung<div class="divider"></div>### Voraussetzungen

- Sie benötigen ein Konto in [Chatwoot](https://www.chatwoot.com/). Sie können Chatwoot auch so einrichten, dass es in einer [On-Premise-Umgebung](https://www.chatwoot.com/docs/self-hosted) ausgeführt wird.
- Sie benötigen zwei IDs, die in der Chatwoot-Adresszeile aufgeführt sind:

- **Konto-ID** ist eine eindeutige Nummer für Sie als Benutzer.
    - **Posteingangs-ID** ist nicht eindeutig und wird mit jedem neuen Kanal neu erstellt.<br>Beide IDs sind erforderlich, um den neuen Posteingangskanal zu verwenden. Sie finden sie in Ihrer Chatwoot-URL. Beispiel: "https://app.chatwoot.com/app/account/6607/inbox/5446", wobei die Konto-ID "6607" und die Posteingangs-ID "5446" lautet.

### Agenten in Chatwoot

Falls Sie einen neuen Agenten zu Chatwoot hinzufügen möchten, gehen Sie zu Ihrer Chatwoot-Installation.
Klicken Sie auf der Startseite im Menü "Einstellungen" auf der linken Seite auf **Agents**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Chatwoot_settings_menu.png" width="80%" />
  <figcaption>Menü "Einstellungen" in Chatwoot</figcaption>
</figure>

### Hinzufügen eines Webhooks

Gehen Sie folgendermaßen vor, um den Webhook für die eingehenden Nachrichten **Posteingang** zu konfigurieren:

1. Klicken Sie im linken Menü der **Chatwoot**-Hauptseite auf **Posteingänge**. 
2. Um den Erstellungs- und Konfigurationsvorgang für den Posteingang zu starten, klicken Sie auf **Posteingang hinzufügen**.
3. Erstellen Sie einen API-Kanal, indem Sie den **API-Kanal** auswählen und einen Kanalnamen eingeben. 

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/endpoints/images/inbox-create-api-channel-edit.png" width="100%" />
    </figure>

4. Geben Sie die Endpunkt-Basis-URL in das Feld **Webhook-URL** ein und hängen Sie "/handover/chatwoot/" an das Ende der URL an, z. B. "https://endpoint-trial.cognigy.com/handover/chatwoot".
5. Klicken Sie auf **API-Kanal erstellen**. 
6. Wählen Sie den Agenten aus, der den Posteingangsnachrichten zugewiesen werden soll, und bestätigen Sie die Aktion, indem Sie auf **Agenten hinzufügen** klicken.

Der neue Kanal wird dem Chatwoot-Posteingang hinzugefügt.
 
### Chatwoot mit Cognigy.AI verbinden

#### Richten Sie Ihren Chatwoot-Posteingang ein

Um Chatwoot in Cognigy.AI mit Ihrem virtuellen Agont zu verbinden, müssen Sie angeben, in welchen Chatwoot-Posteingang die Übergabe erfolgen soll.

Gehen Sie dazu folgendermaßen vor:

1. Fügen Sie im Flow-Editor einen **Übergabe an Agent**-Knoten hinzu, falls Sie dies noch nicht getan haben.
2. Gehen Sie im Node-Editor des Knotens **Handover to Agent** zum Abschnitt **Chatwoot-Einstellungen**. 
3. Geben Sie im Feld **Chatwoot-Posteingangs-ID** die Posteingangs-ID an.  Sie können [CognigyScript](.. /.. /ai/tools/cognigy-script.md), um dynamisch zu entscheiden, welcher Posteingang für die Übergabeanfrage verwendet werden soll.

#### Verbinden Sie Ihren Endpunkt mit Chatwoot

Um den Endpunkt mit Chatwoot zu verbinden, gehen Sie wie folgt vor:

1. Öffnen Sie Ihren **Endpunkt-Editor** in Cognigy.AI und wählen Sie die **Übergabeeinstellungen** aus.
2. Wählen Sie **Chatwoot** als **Übergabeplattform** aus.
3. Geben Sie eine Basis-URL für die Chatwoot-Instanz ein. Die Basis-URL ist Ihre Chatwoot-Installations-URL, die um '/api/v1' erweitert wurde. Zum Beispiel dient "https://app.chatwoot.com/api/v1" als Basis-URL, wobei "https://app.chatwoot.com" die Chatwoot-URL ist. Alternativ können Sie auch Ihre lokale Chatwoot-API-URL verwenden
4. Geben Sie Chatwoot **Konto-ID** ein.
5. Geben Sie den **API-Schlüssel** ein.
6. Klicken Sie auf **Speichern**, um die Eingaben zu bestätigen.
7. Um die Funktionalität zu überprüfen, klicken Sie auf **Webchat öffnen** und starten Sie eine Konversation mit einer Übergabeanfrage.

Wenn Sie eine Konversation mit dem Endpunkt beginnen und der Übergabeknoten ausgelöst wird, wird die Agentenübergabe mit Chatwoot gestartet und Sie finden eine Übergabenachricht im Chatwoot-Posteingang.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Chatwoot_handing_over_info.PNG" width="100%" />
  <figcaption></figcaption>
</figure>

In Ihrem Chatwoot-Posteingang werden auf der linken Seite Benutzernachrichten angezeigt, auf der rechten Seite sehen Sie die verbundenen echten Agentenantworten.
Auf der linken Seite werden die Benutzermeldungen angezeigt. Auf der rechten Seite werden die Antworten der verbundenen echten Agenten in Chatwoot angezeigt.

!!! note "Notiz"
    Wenn eine Benutzeranfrage vom Agenten beantwortet und gelöst wird, kann der Agent die Verbindung **auflösen**, und wenn eine weitere Anfrage von der Benutzerseite eingeht, kann der Agent die Verbindung in Chatwoot **erneut öffnen**, um auf die Anfrage antworten zu können.

### Unterstützte Nachrichteninhalte

Mit der Chatwoot-Integration kann der Benutzer

- Textnachrichten
-Dateien
- Videos (z.B. mp4)
- Bilder (z. B. JPG, PNG)
- Animierte GIFs

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Screen_Shot_139.png" width="100%" />
  <figcaption>Webchat-Konversation mit Text und Bild</figcaption>
</figure>

### Chatwoot-API-Aktualisierungen

Mit Cognigy.AI 4.10.0 wurde die Chatwoot-API aufgrund der Implementierung mit Cognigy Live Agent aktualisiert (neue Farbe, Chatverlauf).

Details:

- Die Chatwoot-API wurde auf Version 1.19.0 aktualisiert.
- Unterstützung für benutzerdefinierte Agent-Bot-Namen (config-map: 'AGENT_BOT_NAME').
- Unterstützung für benutzerdefinierte Agenten-Bot-Beschreibungen (config-map: 'AGENT_BOT_DESCRIPTION').
- Der Nachrichtenverlauf einer Konversation ist verfügbar.
- Nachrichten im Chatwoot-Dashboard werden in einem neuen Design und Styling angezeigt.