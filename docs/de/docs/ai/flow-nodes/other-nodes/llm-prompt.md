---
Titel: "LLM-Eingabeaufforderung"
slug: "llm-prompt"
description: "Der Cognigy LLM Prompt Node ermöglicht den Einsatz von generativer KI für die Erstellung relevanter Inhalte."
ausgeblendet: false
---

# LLM-Eingabeaufforderung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.64-blue.svg)] (.. /.. /.. /release-notes/4.64.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/llm-prompt.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der LLM Prompt Node ermöglicht die Verwendung von generativer KI für die Erstellung relevanter Inhalte.

Bevor Sie diesen Node verwenden, legen Sie den Generative AI-Anbieter in den [Einstellungen](.. /.. /generative-ai.md#set-up-generative-ai).
Sie können den Knoten so konfigurieren, dass er entweder das in den Einstellungen definierte Standardmodell verwendet oder einen bestimmten konfigurierten LLM auswählt.

Der Node unterstützt die folgenden Modi:

-**Plaudern**. Dieser Modus ist standardmäßig aktiviert und eignet sich hervorragend für dynamische Konversationen und Interaktionen mit dem Modell.
  Es berücksichtigt den Kontext der Nachrichten des Benutzers und des Bots,
  abhängig von der gewählten Anzahl von Transkript-Turns (Nachrichten) in der Einstellung **Transkriptschritte**.
-**Prompt**. Dieser Modus ist für Single-Turn-Aufgaben oder das Generieren von Text basierend auf einer einzelnen Eingabeaufforderung vorzuziehen.

Wenn Ihr LLM-Anbieter den Chat-Modus nicht unterstützt, wandelt Cognigy die Chat-Anfrage automatisch in eine Eingabeaufforderung um.

### Speichern von Ergebnissen

Um die Modellausgabe zu speichern und dann dem Benutzer die Ausgabe des LLM-Eingabeaufforderungsknotens anzuzeigen, wählen Sie **In Eingabe speichern** oder **In Kontext speichern** im Abschnitt [Speicher- und Streaming-Optionen](#storage--streaming-options) aus.

### Streaming-Ergebnisse

Wenn Sie möchten, dass das Ausgabeergebnis sofort im Chat angezeigt wird, ohne es in den Input- oder Context-Objekten zu speichern und den Say-Knoten zu verwenden, wählen Sie die Einstellung **Stream to Output** im Abschnitt [Speicher- und Streaming-Optionen](#storage--streaming-options) aus.

## Einstellungen

### Anleitung

Dies ist entweder die Aufforderung zum Abschluss oder die Systemnachricht für den Chat.

Darüber hinaus können Sie die letzte Konversation in das Feld **Eingabeaufforderung** einfügen, indem Sie die folgenden Tags verwenden:

- '@cognigyRecentConversation' — das Tag wird durch eine Zeichenfolge ersetzt, die bis zu 10 aktuelle virtuelle Agenten und 10 Benutzerausgaben enthalten kann, zum Beispiel:
   '''text
   Bot: agentOutput1
   Benutzer: userOutput1
   Bot: agentOutput2
   Benutzer: userOutput2
   '''
- '@cognigyRecentUserInputs' — das Tag wird durch eine Zeichenfolge ersetzt, die bis zu 10 aktuelle Benutzerausgaben enthalten kann, zum Beispiel:

'''text
    Benutzer: userOutput1
    Benutzer: userOutput2
    '''

Wenn Sie nur auf die letzte Benutzereingabe zugreifen möchten, geben Sie im Feld **Eingabeaufforderung** das Token "Text" an.

Achten Sie beim Hinzufügen eines Tags darauf, dass Sie vor und nach dem Tag einen Zeilenumbruch lassen, z. B.:

'''text
Ein Benutzer hatte eine Konversation mit einem Chatbot. Die bisherige Konversationshistorie lautet:
@cognigyRecentConversation

Beschreiben Sie die Benutzerstimmung in einer sehr kurzen Zeile.
'''

Beide Tags können einen optionalen Parameter für die Kantenübergangsbegrenzung enthalten, der an das Tag angehängt wird. 

Beispiele:

'''Typoskript
@cognigyRecentConversation:3 // gibt die letzten 3 Runden der Konversation zurück.
@cognigyRecentUserInputs:2 // gibt die letzten 2 Benutzereingaben zurück.
'''

### Fortgeschritten

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Probenahme-Methode | Wählen Sie | Methodik:<br/>- **Temperatur** — bestimmt den Grad der Zufälligkeit im generierten Text. Eine höhere Temperatur ermöglicht vielfältigere und kreativere Ausgaben, während eine niedrigere Temperatur zu vorhersehbareren und konsistenteren Ergebnissen mit den Trainingsdaten führt.<br> - **Top Percentage** — gibt den Prozentsatz der wahrscheinlichsten Ausgaben für die Generierung an, was zu einer konsistenteren Ausgabe führt. |
| Maximale Anzahl an Token | Indikator | Die maximale Anzahl von Token, die beim Abschluss generiert werden sollen.                                                                                                                                                                                                                                                                                                                                            |
| Anwesenheitsstrafe | Indikator | Zahl zwischen -2,0 und 2,0. Positive Werte bestrafen neue Token basierend darauf, ob sie bisher im Text erschienen sind, und erhöhen die Wahrscheinlichkeit, dass das Modell über neue Themen spricht.                                                                                                                                                                                                                       |
| Häufigkeits-Strafe | Indikator | Zahl zwischen -2,0 und 2,0. Die Strafe weist Token, die häufig im generierten Text vorkommen, eine geringere Wahrscheinlichkeit zu und ermutigt das Modell, vielfältigere und einzigartigere Inhalte zu generieren.                                                                                                                                                                                                          |
| Stopps verwenden | Umschalten | Gibt an, ob eine Liste von Stoppwörtern verwendet werden soll, um Generative AI wissen zu lassen, wo der Satz endet.                                                                                                                                                                                                                                                                                                                |
| Haltestellen | Text | Bis zu 4 Sequenzen, in denen die API keine weiteren Token mehr generiert. Der zurückgegebene Text enthält nicht die Stoppsequenz.                                                                                                                                                                                                                                                                             |
| Zeitüberschreitung | Anzahl | Die maximale Anzahl von Millisekunden, die auf eine Antwort des generativen KI-Anbieters gewartet werden soll.                                                                                                                                                                                                                                                                                                             |

### Speicher- und Streaming-Optionen

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| So gehen Sie mit dem Ergebnis um | Wählen Sie | Legen Sie fest, wie das Eingabeaufforderungsergebnis behandelt werden soll:<br> - **In Eingabe speichern** – speichert das Ergebnis im Input-Objekt. Um das Eingabeaufforderungsergebnis zu drucken, verwenden Sie das LLM-Eingabeaufforderungsergebnistoken im Say-Knoten. <br> - **Im Kontext speichern** — speichert das Ergebnis im Input-Objekt im Kontext. Um das Eingabeaufforderungsergebnis zu drucken, verwenden Sie das LLM-Eingabeaufforderungsergebnistoken im Say-Knoten. <br>- **Stream to Output** — Das Ergebnis wird direkt in die Ausgabe gestreamt. Dies bedeutet, dass das Modell Eingabeaufforderungen direkt im Unterhaltungschat bereitstellt und Sie das LLM-Eingabeaufforderungsergebnistoken und den Say-Knoten nicht verwenden müssen. Dieses Ergebnis wird weder in der Eingabe noch im Kontext gespeichert. Beachten Sie, dass Streaming möglicherweise nicht von allen [Cognigy LLM Prompt Node](.. /.. /resources/build/llm.md#supported-models), z. B. Google[^*]. Wenn Streaming nicht unterstützt wird, wird das Ergebnis in das Input-Objekt geschrieben. |
| Eingabetaste zum Speichern des Ergebnisses | CognigyScript | Der Parameter ist aktiv, wenn **In Eingabe speichern** ausgewählt ist. Das Ergebnis wird standardmäßig im Input-Objekt 'promptResult' gespeichert. Sie können einen anderen Wert angeben.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Kontextschlüssel zum Speichern des Ergebnisses | CognigyScript | Der Parameter ist aktiv, wenn **Im Kontext speichern** ausgewählt ist. Das Ergebnis wird standardmäßig im Context-Objekt 'promptResult' gespeichert. Sie können einen anderen Wert angeben.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Stream-Ausgabe-Token | CognigyScript | Der Parameter ist aktiv, wenn **Stream to Output** ausgewählt ist. Token, nach denen der Streampuffer ausgegeben werden soll. Bei den Token kann es sich um Satzzeichen oder Symbole handeln, z. B. '\n'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

[^*]: Beachten Sie, dass nicht alle LLM-Modelle Streaming unterstützen.

### Debugging-Optionen

Wenn Sie den Interaktionsbereich verwenden, können Sie zwei Arten von Debug-Protokollen auslösen. Diese Protokolle sind nur verfügbar, wenn Sie den Interaktionsbereich verwenden, und sind nicht für das Debuggen in der Produktion vorgesehen. Sie können auch beide Protokolltypen kombinieren.

| Parameter | Typ | Beschreibung |
|----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Anzahl der Protokolltoken | Umschalten | Protokollieren Sie die Anzahl der verbrauchten LLM-Token für die Anforderung und den Abschluss. Cognigy verwendet den GPT-3-Tokenizer-Algorithmus, so dass die tatsächliche Token-Nutzung je nach verwendetem Modell variieren kann. |
| Protokollanforderung und -vervollständigung | Umschalten | Protokollieren Sie sowohl die an den LLM-Anbieter gesendete Anforderung als auch den anschließenden Abschluss.                                                                                                    |

## Mehr Informationen

- [LLM](.. /.. /resources/build/llm.md)
- [Generative KI](.. /.. /generative-ai.md)
- [GPT-Konversationsknoten](gpt-conversation.md)