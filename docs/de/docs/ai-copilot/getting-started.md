---
Titel: "Erste Schritte"
Slug: "Erste Schritte"
ausgeblendet: false
---

# Erste Schritte mit AI Copilot

In diesem Leitfaden für die ersten Schritte erfahren Sie, wie Sie Ihren AI Copilot-Arbeitsbereich konfigurieren.

{! _includes/agent-assist/before-you-begin.md !}

## Flows erstellen

So beginnen Sie mit dem Dienst:

1. Gehen Sie zur Cognigy.AI Oberfläche.
2. Erstellen Sie einen [virtuellen Agent](.. /ai/resources/agents/agents.md) oder verwenden Sie eine vorhandene.
3. Kopieren Sie die Projekt-ID aus Ihrer URL, z. B. "https://app.cognigy.ai/agent/642c6a2cb45919dfae7b4428/", wobei die Projekt-ID "642c6a2cb45919dfae7b4428" lautet.
4. Speichern Sie die kopierte Agenten-ID für die spätere Verwendung.
5. Gehen Sie zum Menü auf der linken Seite und klicken Sie auf **Build > Flows**.
6. Erstellen Sie einen [Flow](.. /ai/resources/build/flows.md) oder verwenden Sie eine vorhandene, die eine Übergabe oder Übertragung an einen menschlichen Agenten beinhaltet 
7. Erstellen Sie den zusätzlichen Flow für AI Copilot.

Vergewissern Sie sich, dass Sie zwei Flows haben: den Main Flow und den AI Copilot Flow.

## Konfigurieren Sie die AI Copilot Config

Mit der AI Copilot Config API können Sie die Position und Größe der Kacheln in Ihrem Raster konfigurieren. Dies gibt volle Flexibilität, um den AI Copilot Workspace so effizient wie möglich zu nutzen.

1. [Holen Sie sich Ihren API-Schlüssel aus Ihrem Profil](#get-an-api-key)
2. [Erstellen Sie Ihre AI Copilot-Konfiguration](#configure-the-ai-copilot-config)

### Abrufen eines API-Schlüssels

Gehen Sie folgendermaßen vor, um Ihren API-Schlüssel zu erhalten:

1. Klicken Sie in der oberen rechten Ecke der Cognigy.AI auf **Benutzermenü ! [Benutzer-Menü] (.. /assets/icons/user-menu.svg) > Mein Profil**.
2. Klicken Sie im Abschnitt **API-Schlüssel** auf **+**.
3. Fügen Sie einen API-Schlüsselnamen hinzu und klicken Sie auf **Bestätigen**. Der API-Schlüssel wird in der Liste angezeigt.
4. Kopieren Sie diesen API-Schlüssel und gehen Sie zum Abschnitt **AUTHENTICATION** auf der Website [Cognigy OpenApi](https://api-trial.cognigy.ai/openapi).
5. Fügen Sie den API-Schlüssel in die folgenden Felder ein:
    - API-Schlüssel (X-API-Schlüssel)
    - API-Schlüssel (api_key)
6. Klicken Sie neben beiden Feldern auf **Festlegen**. 

### Erstellen einer KI-Copilot-Konfiguration

Gehen Sie folgendermaßen vor, um Ihre AI Copilot-Konfiguration zu erstellen:

1. Erstellen Sie eine Agentenunterstützungskonfiguration mithilfe der [Post](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs)-Anforderung. 
2. Definieren Sie die Rastergröße im Objekt 'config.grid' der Konfiguration, indem Sie die Anzahl der Zeilen und Spalten angeben. 
3. Wählen Sie die Platzierung Ihrer Kacheln, indem Sie die Startposition und Größe jeder Kachel in Ihrem Raster hinzufügen.
4. Fügen Sie die Projekt-ID hinzu, die Sie zuvor kopiert haben, um sicherzustellen, dass die Konfiguration dem richtigen Agenten zugeordnet ist.

'''json
    {
      "name": "Zeichenfolge",
      "description": "Zeichenfolge",
      "config": {
        "Gitter": {
          "Spalten": 6,
          "Zeilen": 9,
          "Lücke": 16
        },
        "Kacheln": {
          "Live-Agent": {
            "x": 1,
            "y": 1,
            "Spalten": 4,
            "Zeilen": 2
          },
          "Sprach-Gateway": {
            "x": 1,
            "y": 1,
            "Spalten": 4,
            "Zeilen": 2
          }
        }
      },
      "projectId": "Ihre Projekt-ID"
    }
    '''
5. Erstellen Sie die Anforderung, indem Sie auf **Testen** klicken.

Wenn die Anfrage erstellt wird, wird der Antwortcode "201" angezeigt.

## Erstellen eines Endpunkts

Gehen Sie folgendermaßen vor, um Ihren Endpunkt zu erstellen:

1. Gehen Sie zur Cognigy.AI Oberfläche.
2. Wählen Sie im Menü auf der linken Seite **Deploy > Endpoint** aus.
3. Klicken Sie auf **+Neuer Endpunkt**. 
4. Fügen Sie im Fenster **Neuer Endpunkt** einen Endpunktnamen hinzu und wählen Sie Ihren Virtual Agent Flow aus, der Sie an einen menschlichen Agenten übergibt. 
5. Wählen Sie in der Liste **Endpunkttyp** den gewünschten Endpunkt aus. 
6. Klicken Sie auf **Speichern**. 
7. Gehen Sie zu **Übergabeeinstellungen**. 
8. Wählen Sie unter **Copilot Flow** den AI Copilot Flow aus, den Sie in den ersten Schritten erstellt haben. 
9. Wählen Sie in **Copilot Config** die Konfiguration aus, die Sie kürzlich per API erstellt haben.
10. _(Optional)_ Eine Transkriptkachel zur Anzeige der Konversation mit dem Kunden kann hinzugefügt werden, indem der Schalter in den AI Copilot-Einstellungen aktiviert wird.
11. Klicken Sie auf **Speichern**.

## Konfigurieren eines KI-Copilot-Flows

1. Um das erste Widget zu konfigurieren, gehen Sie in den AI Copilot Flow.
2. Fügen Sie den gewünschten AI Copilot Flow Node hinzu. 
3. Fügen Sie den Inhalt hinzu, der als Widget im AI Copilot-Arbeitsbereich angezeigt wird.
4. Stellen Sie sicher, dass die Kachel-ID mit der ID übereinstimmt, die in der AI Copilot-Konfiguration ausgewählt wurde. Dies definiert die Größe und Platzierung des Widgets innerhalb des Arbeitsbereichs.

## Erkunden eines AI Copilot-Arbeitsbereichs

Um den AI Copilot-Arbeitsbereich zu beobachten, beginnen Sie eine Konversation mit Ihrem virtuellen Agenten

An einem Punkt werden Sie an einen menschlichen Agenten übergeben. 

Wenn Sie die "Standalone"-Version von AI Copilot verwenden, erhalten Sie an dieser Stelle den Link zu Ihrem AI Copilot Workspace.

Bei der Übergabe eines Kunden wird nicht nur der Gesprächsverlauf mit dem Bot und die aktuelle Absicht an den menschlichen Agenten weitergeleitet, sondern auch ein spezifischer Link zum Zugriff auf den AI Copilot Workspace.

Falls Sie die "eingebettete" Version verwenden, wird der AI Copilot Workspace in einem iFrame in Ihrem Agents Desktop angezeigt.

Sobald sich der menschliche Agent an der Konversation beteiligt, zeigt das Raster einen leeren Zustand mit den Umrissen der Widgets an. 

Die Widgets füllen ihren Inhalt aus, sobald der Kunde die Konversation beginnt.

## Mehr Informationen

- [Arbeitsbereich für KI-Copilot](overview.md)
- [Konfiguration des KI-Copiloten](configuration.md)
- [KI-Copilot-Knoten](.. /ai/flow-nodes/ai-copilot/overview.md)
- [KI-Copilot-Einbettung](embedding.md)
- [KI-Copilot für Sprache](/voice-agent-assist/voice-overview.md)
- [KI-Copilot für Chat](chat.md)
- [Integration mit Contact Centern](contact-center-integration.md)