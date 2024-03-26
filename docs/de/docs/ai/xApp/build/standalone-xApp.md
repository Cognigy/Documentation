---
title: "Erstellen einer eigenständigen xApp"
slug: "standalone-xApp"
Ausgeblendet: Wahr
---

# Erstellen einer eigenständigen xApp

In diesem Tutorial erfahren Sie, wie Sie eine xApp als eigenständige Anwendung erstellen und bereitstellen. Auf eine eigenständige xApp kann über eine URL zugegriffen werden, was eine direkte Benutzerinteraktion ermöglicht, ohne dass ein primärer Kommunikationskanal erforderlich ist.

## Konfigurieren des Flows

### xApp: Init-Sitzungsknoten

1. Erstellen Sie einen neuen Flow in Cognigy und nennen Sie ihn "Standalone xApp Tutorial".
2. Fügen Sie im Flow-Editor einen Knoten **xApp: Init-Sitzung** hinzu.
3. Öffnen Sie den Node-Editor und füllen Sie die folgenden Felder aus:
    - Gehen Sie im Abschnitt **Stilanpassung** wie folgt vor:
        - **Hintergrundfarbe** — geben Sie 'darkslategray' an.
        - **Logo** — Wählen Sie **Standardlogo anzeigen** aus.
    - Gehen Sie im Abschnitt **xApp-Bildschirme** wie folgt vor:
        - **Text wird geladen** — geben Sie 'Laden...' ein.
    - Im Abschnitt **Zwischenbildschirm**:
        - **Anpassungstyp** — Wählen Sie **Benutzerdefinierte Texte** aus der Liste aus.
        - **Text überschreiben** — Geben Sie "Vielen Dank für die Info" ein. Sie können diesen Tab nun schließen.
    - Gehen Sie im Abschnitt **Verbindungsbildschirm** wie folgt vor:
        - **Anpassungstyp**: Wählen Sie **Keine Anpassung** aus.
4. Klicken Sie auf **Knoten speichern**.

### Knoten sagen

1. Fügen Sie unterhalb des Knotens **xApp: Init Session** einen Knoten **Say** hinzu.
2. Geben Sie im Abschnitt **Optionen** im Feld **Daten** den Code an:

'''json
    {
     "xAppUrl": "{{"{{ input.apps.url }}"}}"
    }
    '''
   Diese reine Datennachricht wird in der Transformermethode "handleExecutionFinished" empfangen. Die URL wird dann verwendet, um den Browser auf die xApp-Shell-Seite umzuleiten.

3. Klicken Sie auf **Knoten speichern**.

### xApp: HTML-Knoten anzeigen

1. Fügen Sie unter dem Knoten **Say** einen Knoten **xApp: HTML anzeigen** hinzu.
2. Wählen Sie im Abschnitt **Inhalt** die Option **Vollständiges HTML-Dokument** aus.
3. Geben Sie im Abschnitt **HTML-Dokument** den folgenden Code an:
    '''html     <!DOCTYPE html>
     <html lang="en">
    
     <head>
     <script src="/sdk/app-page-sdk.js"></script>
     </head>
    
     <body>
     <p>Erhaltene Informationen:</p>
     <pre>"{{"{{ JSON.stringify(input.data, null, 2) }}"}}"</pre>
     <button type="button" onclick="SDK.submit({ option: 'ok' })">OKAY</button>
     </body>
    
     </html>'''
4. Klicken Sie auf **Knoten speichern**.

### xApp: Adaptiven Kartenknoten anzeigen

1. Fügen Sie unter dem Knoten **Frage** den Knoten **xApp: Adaptive Karte anzeigen** hinzu.
2. Geben Sie im Feld **AdaptiveCard Definition** den folgenden Code an:
    '''json
    {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.5",
        "Körper": [
            {
                "type": "Behälter",
                "Gegenstände": [
                    {
                        "type": "TextBlock",
                        "text": "Erzählen Sie uns etwas über sich",
                        "weight": "Mutiger",
                        "size": "Mittel",
                        "wrap": wahr,
                        "style": "Überschrift"
                    },
                    {
                        "type": "TextBlock",
                        "text": "Wir brauchen nur noch ein paar Details, um Sie für die Reise Ihres Lebens zu buchen!",
                        "isSubtle": wahr,
                        "wrap": wahr
                    },
                    {
                        "type": "Input.Text",
                        "id": "Name",
                        "label": "Dein Name (Nachname, Vorname)",
                        "isRequired": wahr,
                        "regex": "^[A-Z][a-z]+, [A-Z][a-z]+$",
                        "errorMessage": "Bitte geben Sie Ihren Namen im angegebenen Format ein",
                        "value": "Mustermann, John"
                    },
                    {
                        "type": "Input.Text",
                        "id": "E-Mail",
                        "label": "Ihre E-Mail-Adresse",
                        "regex": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.] [A-Za-z0-9-] {2,4}$",
                        "isRequired": wahr,
                        "errorMessage": "Bitte geben Sie eine gültige E-Mail-Adresse ein",
                        "style": "E-Mail",
                        "value": "john@doe.cc"
                    },
                    {
                        "type": "Input.Text",
                        "id": "Telefon",
                        "label": "Telefonnummer (xxx xxx xxxx)",
                        "regex": "^\\(?( [0-9] {3}) \\)? [-.\\s]? ([0-9]{3}) [-.\\s]? ([0-9]{4})$",
                        "errorMessage": "Ungültige Telefonnummer. Bitte geben Sie eine 10-stellige Telefonnummer ein",
                        "style": "Tel"
                    }
                ]
            }
        ],
        "Aktionen": [
            {
                "type": "Aktion.Senden",
                "title": "Senden",
                "style": "positiv"
            }
        ]
    }
    '''
3. Wählen Sie unter **Warteverhalten** die Option **Auf xApp-Benutzereingabe warten** aus.
4. Klicken Sie auf **Knoten speichern**.

### xApp: HTML-Knoten anzeigen

1. Fügen Sie unterhalb des Knotens **xApp: Adaptive Karte anzeigen** einen Knoten **xApp: HTML anzeigen** hinzu.
2. Wählen Sie im Feld **Inhalt** die Option **Vollständiges HTML-Dokument** aus.
3. Geben Sie im Feld **HTML-Dokument** den folgenden Code an:
    '''html    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <script src="/sdk/app-page-sdk.js"></script>
    </head>
    
    <body>
      <p>Erhaltene Informationen:      <hr>Name: "{{"{{ input.data._cognigy._app.payload.name }}"}}"<br>E-Mail: "{{"{{ input.data._cognigy._app.payload.email }}"}}"<br>Telefon: "{{"{{ input.data._cognigy._app.payload.phone }}"}}"<br>
      </p>
      <button type="button" onclick="SDK.submit({ option: 'ok' })">OKAY</button>
    </body>
    
    </html>'''
4. Wählen Sie unter **Warteverhalten** die Option **Auf xApp-Benutzereingabe warten** aus.
5. Klicken Sie auf **Knoten speichern**.

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/standalone/flow-result.png" width="100%">
</figure>

Nun können Sie das Ergebnis über das Interaction Panel testen.

## Testen des Flows

1. Öffnen Sie das Interaktionsfenster und geben Sie eine Nachricht wie "Hallo" ein, um den Flow auszulösen.
2. Erweitern Sie im Interaktionsbereich den Abschnitt **Ereignis/Nachricht mit Nutzlast**, um auf die xApp-Sitzung zuzugreifen. Sie können auch die Registerkarte **Info** überprüfen, um die URL der xApp im Eingabeobjekt "input.apps.url" anzuzeigen.
3. Öffnen Sie die URL der xApp.
4. Sobald die Seite geöffnet ist, klicken Sie auf **Ok**. Das Formular "Adaptive Karte" wird geladen.
5. Geben Sie im Feld **Telefonnummer** eine Handynummer an und klicken Sie auf **Senden**.

   <figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/standalone/test-flow.png" width="100%">
   </figure>

Wenn die Operation erfolgreich ist, erhalten Sie die folgende Nachricht: "Vielen Dank für die Info. Sie können diesen Tab jetzt schließen."

Danach können Sie Ihre xApp bereitstellen.

## Bereitstellen der xApp

1. Wechseln Sie zu **Bereitstellen > Endpunkte**.
2. Klicken Sie auf **+ Neuer Endpunkt**.
3. Wählen Sie den **Rest**-Endpunkt aus der Liste aus.
4. Geben Sie einen eindeutigen Namen an und wählen Sie den entsprechenden Flow aus.
5. Wechseln Sie im Endpunkt-Editor zum Abschnitt **Transformer-Funktionen**.
6. Aktivieren Sie die Einstellungen **Enable Input Transformer** und **Enable Execution Finished Transformer**.
7. Geben Sie im Feld **Transformer** den folgenden Code an:
    '''js
    const generateId = () => 'xxxx-xxxx-xxxx-xxxx'.replace(/x/g, () => String.fromCharCode(97 + Math.random() * 25))
    
createRestTransformer({
      handleInput: async ({ Endpunkt, Anforderung, Antwort }) => {
        const userId = 'xapp-user'
        const sessionId = generateId()
        const text = 'GET_STARTED'
        Konstante Daten = Request.Query
        return { userId, sessionId, text, data }
      },
    
handleOutput: async ({ output, endpoint, userId, sessionId }) => {
        Ausgang zurückgeben
      },
    
handleExecutionFinished: async ({ processedOutput, outputs, userId, sessionId, endpoint, response }) => {
        const { xAppUrl } = processedOutput.data
        if (xAppUrl) {
          Antwort Antwort
            .redirect(xAppUrl)
        .status(200)
        .header('Content-Type', 'application/json')
        .send(JSON.stringify({ processedOutput, outputs }, null, 2))
        }
        return processedOutput
      }
    })
    '''
8. Klicken Sie auf **Speichern**.

Um zu überprüfen, ob die xApp wie erwartet bereitgestellt wurde, kopieren Sie die Endpunkt-URL, fügen Sie sie in die Adressleiste Ihres Browsers ein und testen Sie Ihren Flow erneut.

## Mehr Informationen

- [xApp-Knoten](.. /.. /flow-nodes/xApp/overview.md)
- [Erstellen einer xApp](overview.md)
- [xApps](.. /overview.md)