---
title: "Erstellen Sie Ihre erste xApp"
slug: "build-first-xApp"
Ausgeblendet: Wahr
---

# Erstellen Sie Ihre erste xApp

In diesem Tutorial erfahren Sie, wie Sie eine einfache xApp von Grund auf neu erstellen. Sie erstellen einen virtuellen Agenten, der Benutzer fragt, ob es sich um neue oder bestehende Kunden handelt. Wenn der Benutzer bereits vorhanden ist, leitet der virtuelle Agent ihn zu einer xApp weiter, die seine Anmeldedaten sammelt. Wenn der Benutzer neu ist, führt ihn der virtuelle Agent zu einer xApp, die Registrierungsinformationen sammelt.

## Konfigurieren eines einfachen xApp-Flows

1. Erstellen Sie einen neuen Flow in Cognigy und nennen Sie ihn "Basic xApp Tutorial".
2. Fügen Sie im Flow-Editor einen **xApp: Init-Sitzung**-Knoten hinzu, um die xApp-Sitzung zu initialisieren.
3. Fügen Sie unterhalb des Knotens **xApp: Init-Sitzung** einen Knoten **xApp: Adaptive Karte anzeigen** hinzu, um die initialisierte xApp-Sitzung mit einer neuen Seite **Adaptive Card-basierte xApp** zu aktualisieren.
4. Fügen Sie in das Feld **AdaptiveCard Definition** den folgenden JSON-Code ein:
    '''json
    {
      "type": "AdaptiveCard",
      "Körper": [
        {
          "type": "TextBlock",
          "size": "Mittel",
          "weight": "Mutiger",
          "text": "Bitte geben Sie Ihren Kundenstatus an"
        },
        {
          "type": "Input.ChoiceSet",
          "id": "Status",
          "Auswahlmöglichkeiten": [
            {
              "title": "Neuer Kunde",
              "value": "neu"
            },
            {
              "title": "Bestehender Kunde",
              "value": "vorhanden"
            }
          ],
          "placeholder": "Kundenstatus auswählen"
        }
      ],
      "Aktionen": [
        {
          "type": "Aktion.Senden",
          "title": "Senden"
        }
      ],
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "version": "1.6"
    }
    '''
5. Klicken Sie auf **Knoten speichern**.
6. Fügen Sie unter dem Knoten **xApp: Adaptive Karte anzeigen** einen Knoten **Frage** hinzu. Dieser Knoten wird verwendet, um den Benutzer über den primären Kanal aufzufordern, Daten über die xApp bereitzustellen. Anschließend wartet er auf die Sendeeingabe der xApp, bevor er mit der weiteren Flow-Ausführung fortfährt.
7. Legen Sie den Fragetyp **xApp** fest, um sicherzustellen, dass nur Daten aus der xApp als gültige Antwort akzeptiert werden.
8. Wählen Sie den Ausgabetyp **Text mit Schaltflächen** aus, um eine Schaltfläche mit der xApp-URL anzuzeigen.
9. Konfigurieren Sie die Eingabeaufforderung, um Benutzer anzuweisen, ihre E-Mail-Adresse mithilfe der xApp einzugeben. Fügen Sie in das Feld **Text** den folgenden Text ein:
   '''text
   Willkommen beim xApp-Tutorial. Werfen Sie einen Blick auf Ihre xApp
   '''
10. Klicken Sie auf die Schaltfläche **Hinzufügen**. Füllen Sie die folgenden Felder aus:
    - **Button Title** — Geben Sie "Open xApp" ein.
    - **Auswahlschaltflächentyp** – Wählen Sie **URL** aus der Liste aus.
    - **URL** — klicken Sie auf ! [Marke] (.. /.. /assets/icons/token.svg) und wählen Sie das **xApp-Sitzungs-URL**-Token aus.
    - **URL-Ziel**: Wählen Sie **URL in einem neuen Tab öffnen** aus.
11. Klicken Sie auf **Speichern**.
12. Wenn ein Benutzer etwas in den Chat eingibt, informieren Sie ihn, dass er die xApp-URL verwenden muss, um seine E-Mail-Adresse einzugeben. Wechseln Sie dazu zum Abschnitt **Optionen für erneute Eingabeaufforderung** und fügen Sie die folgende Meldung für die erneute Eingabeaufforderung ein:
    '''text
    Ich kann nicht fortfahren, bevor Sie Ihre Auswahl in der xApp getroffen haben
    '''
13. Klicken Sie auf **Knoten speichern**.
14. Fügen Sie unter dem **Frage**-Knoten einen **Wenn**-Knoten zu Ihrem Flow hinzu und legen Sie die Bedingungen wie folgt fest:
    '''text
    input.data._cognigy._app.payload.status = 'neu'
    '''
    Auf diese Weise können Sie die xApp-Sitzung mit einer anderen xApp aktualisieren, die basierend auf der Auswahl des Benutzers übergeben wird.
15. Klicken Sie auf **Knoten speichern**.
16. Fügen Sie im **Wenn-Dann**-Fall einen **xApp: Show Adaptive Card** Node hinzu, um die initialisierte xApp-Sitzung mit einer neuen, auf adaptiven Karten basierenden xApp-Seite zu aktualisieren.
17. Fügen Sie in das Feld **AdaptiveCard Definition** den folgenden JSON-Code ein:
    '''json
    {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.0",
      "Körper": [
        {
          "type": "TextBlock",
          "text": "Vollständiger Name",
          "size": "Mittel"
        },
        {
          "type": "Input.Text",
          "id": "vollständiger Name"
        },
        {
          "type": "TextBlock",
          "text": "Geburtsdatum",
          "size": "Mittel"
        },
        {
          "type": "Eingabe.Datum",
          "id": "Geburtsdatum"
        },
        {
          "type": "TextBlock",
          "text": "E-Mail",
          "size": "Mittel"
        },
        {
          "type": "Input.Text",
          "id": "E-Mail",
          "style": "E-Mail",
          "Platzhalter": "example@domain.com"
        }
      ],
      "Aktionen": [
            {
                "type": "Aktion.Senden",
                "title": "Senden"
            }
        ]
    }
    '''
    Darin wird der Benutzer aufgefordert, seinen Namen, sein Geburtsdatum und seine E-Mail-Adresse anzugeben.
18. Klicken Sie auf **Knoten speichern**.
19. Wiederholen Sie denselben Knoten für den **If-Else**-Fall und fügen Sie den folgenden JSON-Code ein:
    '''json
    {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.0",
      "Körper": [
        {
          "type": "Input.Text",
          "placeholder": "Benutzername",
          "id": "Benutzername"
        },
        {
          "type": "Input.Text",
          "placeholder": "Passwort",
          "id": "Passwort",
          "style": "Passwort"
        },
        {
          "type": "Aktionssatz",
          "Aktionen": [
            {
              "type": "Aktion.Senden",
              "title": "Senden"
            }
          ]
        }
      ]
    }
    '''
    Dadurch wird der Benutzer aufgefordert, sich mit seinem Benutzernamen und Passwort anzumelden.
20. Klicken Sie auf **Speichern** Knoten.
21. Fügen Sie unter den Fällen **Wenn-Dann** und **Wenn-Sonst** einen neuen **Frage**-Knoten hinzu. Dieser Knoten wird verwendet, um auf die xApp-Eingabe zu warten.
22. Klicken Sie auf **Knoten speichern**.
23. Fügen Sie zum Schluss einen **Say**-Knoten hinzu.
24. Fügen Sie in das Feld Text den folgenden Text ein:
    '''txt
    Danke, wir haben alle Daten!
    {{"{{JSON.stringify(input.data._cognigy._app.payload, undefiniert, 4)}}"}}
    '''
25. Klicken Sie auf **Knoten speichern**.

Nachdem Sie Ihre erste xApp erstellt haben, können Sie Ihre xApp über das Interaktionsfenster testen.

## Testen Sie die App über das Interaction Panel

1. Öffnen Sie das Interaktionsfenster und geben Sie eine Nachricht wie "Hallo" ein, um den Flow auszulösen.
2. Klicken Sie im Interaktionsbereich auf **xApp öffnen**, um auf die xApp-Sitzung zuzugreifen. Übrigens können Sie auch auf der Registerkarte **Info** die URL der xApp im Eingabeobjekt "input.apps.url" sehen.

       <figure>
          <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/first-xApp/open-xApp.png" width="100%">
       </figure>

3. Öffnen Sie die URL in einem neuen Tab, um die xApp mit der adaptiven Karte anzuzeigen, und wählen Sie Ihren Kundenstatus aus.

       <figure>
          <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/first-xApp/open-url.png" width="100%">
       </figure>

4. Wenn Sie **Neuer Kunde** auswählen und die Aktion absenden, wird eine neue Seite geladen.

       <figure>
          <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/first-xApp/select-new-customer.png" width="100%">
       </figure>

5. Sie können Daten in die Eingabefelder eingeben und das Verhalten beobachten, z. B. 'Dan Schneider', '01.01.1999' und 'dan@cognigy.com'.
6. Überprüfen Sie das Eingabeergebnis über das Interaction Panel.

    <figure>
      <img class="image-center" src="{{config.site_url}}/ai/images/xApp/build-xApps/first-xApp/check-input-result.png" width="100%">
    </figure>

Sie können ein Cognigy-Paket mit dem [xApp Flow-Beispiel](https://docs.cognigy.com/ai/images/xApp/build-xApps/first-xApp/Flow-xApp-Demo.zip) herunterladen.

## Mehr Informationen

- [Vorgefertigte Beispiele für xApps](https://github.com/Cognigy/xApps/tree/main)
- [xApp-Knoten](.. /.. /flow-nodes/xApp/overview.md)
- [Erstellen einer xApp](overview.md)
- [xApps](.. /overview.md)