---
title: "Erstellen einer xApp mit mehreren Kanälen"
Slug: "xApp-mit-Multi-Kanälen"
Ausgeblendet: Wahr
---

# Erstellen Sie eine xApp mit mehreren Kanälen

In diesem Tutorial erfahren Sie, wie Sie eine xApp erstellen, die einen primären Kanal, den Sprachkanal, ergänzen kann, um einen bestimmten Anwendungsfall abzudecken, der nicht ideal über den Sprachkanal abgedeckt werden kann. Die xApp wird verwendet, um die E-Mail-Adresse der Benutzer zu erfassen.  Im Rahmen dieses Tutorials wird auch implementiert, dass der Link zur xApp per SMS mit den Kunden geteilt wird. 

## Voraussetzungen

- Zugang zu einem [Sprachanbieter](.. /.. /tools/voice-preview.md), z. B. Microsoft Azure Speech Services.
- [Twilio-API-Schlüssel](https://www.twilio.com/docs/glossary/what-is-an-api-key#how-can-i-create-api-keys).
- Twilio-Erweiterung vorinstalliert von [Cognigy Marketplace](.. /.. /resources/manage/extensions.md).
- [Voice Gateway-Endpunkt](.. /.. /endpoints/cognigy-vg.md), die in Cognigy konfiguriert ist.

## Konfigurieren eines einfachen xApp-Flows

1. Erstellen Sie einen neuen Flow in Cognigy und nennen Sie ihn "Multichannel App Tutorial".
2. Fügen Sie im Flow-Editor einen **xApp: Init-Sitzungsknoten** hinzu, um die xApp-Sitzung zu initialisieren.
3. Fügen Sie unterhalb des Knotens **xApp: Init-Sitzung** einen Knoten **xApp: Adaptive Karte anzeigen** hinzu, um die initialisierte xApp-Sitzung mit einer neuen, auf adaptiven Karten basierenden xApp-Seite zu aktualisieren.
4. Fügen Sie in das Feld **AdaptiveCard Definition** den folgenden JSON-Code ein:
    '''json 
     {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.5",
            "Körper": [
                {
                    "type": "TextBlock",
                    "text": "Demo-xApp-Formular",
                    "weight": "Mutiger",
                    "size": "Mittel",
                    "wrap": wahr,
                    "style": "Überschrift"
                },
                {
                    "type": "Input.Text",
                    "id": "Meine E-Mail",
                    "label": "Ihre E-Mail-Adresse",
                    "regex": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.] [A-Za-z0-9-] {2,4}$",
                    "isRequired": wahr,
                    "errorMessage": "Bitte geben Sie eine gültige E-Mail-Adresse ein",
                    "style": "E-Mail"
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
5. Klicken Sie auf **Knoten speichern**.
6. Fügen Sie unter **xApp: Adaptive Karte anzeigen** Knoten einen **Frage** Knoten hinzu. Dieser Knoten wird verwendet, um den Benutzer über den primären Kanal aufzufordern, Daten über die xApp bereitzustellen. Anschließend wartet er auf die Sendeeingabe der xApp, bevor er mit der weiteren Flow-Ausführung fortfährt.
7. Legen Sie den Fragetyp **xApp** fest, um sicherzustellen, dass nur Daten aus der xApp als gültige Antwort akzeptiert werden.
8. Wählen Sie den Ausgabetyp **Text mit Schaltflächen** aus, um eine Schaltfläche mit der xApp-URL anzuzeigen.
9. Konfigurieren Sie die Eingabeaufforderung, um Benutzer anzuweisen, ihre E-Mail-Adresse mithilfe der xApp einzugeben. Fügen Sie in das Feld **Text** den folgenden Text ein:
   '''txt
   Willkommen beim xApp-Tutorial. Bitte geben Sie Ihre E-Mail-Adresse in der xApp über den Link ein, den ich Ihnen per SMS geschickt habe
   '''
10. Kopieren Sie den Text aus der Einstellung **Text mit Schaltflächen** und fügen Sie ihn in das Feld **Fallbacktext** ein, da ein Sprachkanal die Einstellung **Text mit Schaltflächen** nicht unterstützt.
11. Klicken Sie auf die Schaltfläche **Hinzufügen**. Füllen Sie die folgenden Felder aus:
    - **Button Title** — Geben Sie **Open xApp** ein.
    - **Auswahlschaltflächentyp** — Wählen Sie die **URL** aus der Liste aus.
    - **URL** — klicken Sie auf ! [Marke] (.. /.. /assets/icons/token.svg) und wählen Sie das **xApp-Sitzungs-URL**-Token aus.
    - **URL-Ziel**: Wählen Sie **URL in einem neuen Tab öffnen** aus.
12. Wenn ein Benutzer etwas in den Chat eingibt, informieren Sie ihn, dass er die xApp-URL verwenden muss, um seine E-Mail-Adresse einzugeben. Wechseln Sie dazu zum Abschnitt **Optionen für erneute Eingabeaufforderung** und fügen Sie die folgende Meldung für die erneute Eingabeaufforderung ein:
    '''txt
    Ich kann nicht fortfahren, bevor Sie die E-Mail-Adresse in die xApp eingegeben haben.
    '''
13. Klicken Sie auf **Speichern**.
14. Klicken Sie auf **Knoten speichern**.
15. Fügen Sie unterhalb des Knotens **Frage** einen Knoten Sagen hinzu.
16. Fügen Sie in das Feld **Text** den folgenden Text ein:
    '''txt
    Ich habe die folgende E-Mail erhalten: {{"{{ input.data._cognigy._app.payload.myEmail }}"}}
    Auf Wiedersehen!
    '''
17. Klicken Sie auf **Knoten speichern**.

    <figure>
        <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/multichannel/basic-xApp-flow.png" width="100%">
    </figure>

## Konfigurieren der Sprachkanalunterstützung

1. Fügen Sie unterhalb des Knotens "Sagen" am Ende des Flows einen Knoten "Voice Gateway auflegen" hinzu, um die Konversation nach der Bestätigung per E-Mail zu beenden.
2. Geben Sie im Feld **Grund für das Auflegen** **Bot hat den Anruf beendet** an.
3. Klicken Sie auf **Knoten speichern**.

## SMS-Funktionalität implementieren

1. Fügen Sie unterhalb des Knotens **xApp: Adaptive Karte anzeigen** einen Knoten **IF** hinzu, um zu überprüfen, ob die Anrufernummer in den Eingabemetadaten verfügbar ist. Dieser Schritt ist optional, hilft aber bei der Unterscheidung zwischen verschiedenen Kanälen in Testszenarien.
2. Fügen Sie im Knoten **Wenn** die Bedingung **VG: Anrufernummer** hinzu.
3. Klicken Sie auf **Knoten speichern**.
4. Wenn die Anrufernummer verfügbar ist, fügen Sie einen **SMS-Sendeknoten** mit einem Dienst wie Twilio hinzu.
5. Füllen Sie im Knoten **SMS senden** die folgenden Felder aus:
    - **Twilio-Verbindung** – Geben Sie einen API-Schlüssel an, den Sie zuvor von Ihrem Twilio-Konto erhalten haben.
    - **Absendernummer** — Legt die Absendernummer fest.
    - **Empfängernummer** — Geben Sie die Bedingung **VG: Anrufernummer** an.
    - **Nachrichtentext**: Passen Sie die SMS-Nachricht so an, dass sie die xApp-Sitzungs-URL enthält.
6. Klicken Sie auf **Knoten speichern**.

Nachdem Sie die xApp erstellt haben, testen Sie Ihren Flow über das Interaktionsfenster.

## Testen des Flows mit einem Sprachkanal

1. Verwenden Sie die Sprachanruffunktion des Interaction Panels, um den Flow zu testen. Stellen Sie sicher, dass die Einstellungen für die Sprachvorschau in den Einstellungen des Agenten ordnungsgemäß konfiguriert sind.
2. Rufen Sie die angegebene Voice-Gateway-Nummer von Ihrem Telefon aus an.
3. Befolgen Sie die Anweisungen zur Konversation und beobachten Sie das Verhalten des Flows.

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/multichannel/test-voice-channel-flow.png" width="100%">
</figure>

Beachten Sie, dass der Sprach-Fallback-Text anstelle von Schaltflächen verwendet wird.

Die Konversation sollte nur fortgesetzt werden, wenn der Benutzer Daten über die xApp eingibt.

## Mehr Informationen

- [xApp-Knoten](.. /.. /flow-nodes/xApp/overview.md)
- [Erstellen einer xApp](overview.md)
- [xApps](.. /overview.md)