---
Titel: "Generative KI"
slug: "Generative KI"
ausgeblendet: false
---

# Generative KI

{! _includes/ai/terms-of-use.md !}

Generative KI bezieht sich auf eine Art von künstlicher Intelligenz, die mithilfe von Algorithmen des maschinellen Lernens neue, originelle Inhalte wie Bilder, Videos, Audios und Texte erstellt. Es funktioniert, indem es aus vorhandenen Daten lernt und auf der Grundlage dieses Lernens neue Inhalte erstellt.

Cognigy.AI lässt sich in die [Anbieter generativer KI](#prerequisites) integrieren, die eine Textgenerierung auf der Grundlage von Benutzereingaben ermöglichen. Dazu gehört die Verwendung von [Large Language Models (LLMs)](resources/build/llm.md), um Daten zu analysieren und kontextuell relevante und personalisierte Inhalte zu generieren.

In der Cognigy.AI Benutzeroberfläche generieren LLMs menschenähnliche und personalisierte Inhalte für einen Bot. Es kann für folgende Zwecke verwendet werden:

- [Generieren von Lexika](#lexika-generieren)
- [Erstellen neuer Flows mit vorkonfigurierten Nodes](#flows-generieren)
- [Generieren neuer Absichtssätze](#intent-sätze-generieren)
- [Umformulieren von Bot-Ausgaben](#bot-ausgaben-umformulieren)
- [Vervollständigung von Texten](#vollständige-texte)

Um mehr über die Vorteile der Integration von Conversational AI mit generativen KI-Plattformen zu erfahren, sehen Sie sich dieses Webinar an:

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/g_ntrz52BLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Voraussetzungen

Bevor Sie diese Funktion nutzen können, müssen Sie ein Konto bei einem der Anbieter für generative KI erstellen:

- [OpenAI](https://platform.openai.com/). Sie müssen über ein kostenpflichtiges Konto verfügen oder Mitglied einer Organisation sein, die Ihnen Zugriff gewährt. Öffnen Sie Ihr OpenAI-Benutzerprofil, kopieren Sie den vorhandenen API-Schlüssel oder erstellen Sie einen neuen und kopieren Sie ihn.
- [Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). Sie müssen über ein kostenpflichtiges Konto verfügen oder Mitglied einer Organisation sein, die Ihnen Zugriff gewährt. Bitten Sie Ihren Azure-Administrator, den API-Schlüssel, den Ressourcennamen und den Namen des Bereitstellungsmodells anzugeben.
- [Anthropischer Claude](https://console.anthropic.com/docs). Sie müssen ein [Mitglied einer Organisation](https://console.anthropic.com/docs/access) sein, die Ihnen Zugriff gewährt.
- [Google Vertex AI](https://cloud.google.com/vertex-ai). Sie müssen über ein kostenpflichtiges Konto verfügen oder Mitglied einer Organisation sein, die Ihnen Zugriff gewährt.

## Generative KI einrichten

Gehen Sie wie folgt vor, um die Verbindung zwischen Cognigy.AI und dem Generative AI Provider einzurichten:

- [Modell hinzufügen](#hinzufügen-eines-modells)
- [Modell anwenden](#anwenden-des-modells)

### Hinzufügen eines Modells

{! _includes/ai/generative-ai/credentials.md !}

### Anwenden des Modells

{! _includes/ai/generative-ai/apply-model.md !}

Sie können überprüfen, ob die Verbindung funktioniert, indem Sie einen neuen generativen KI-Flow erstellen.

## Lexika generieren

Beachten Sie, dass die Generierung von Lexika für primäre NLU-Sprachen neben Deutsch und Englisch nicht vollständig unterstützt wird.

Um die generative KI-Technologie zum Erstellen eines neuen Lexikons zu verwenden, gehen Sie wie folgt vor:

1. Klicken Sie im Menü auf der linken Seite der Cognigy.AI Benutzeroberfläche auf **Lexika > erstellen**.
2. Klicken Sie auf **+ Neues Lexikon**.
3. Geben Sie im Fenster **Neues Lexikon** den Namen an, der das allgemeine Hauptthema des Lexikons abdeckt, und fügen Sie eine relevante Beschreibung hinzu. Es hilft, ein genaueres Ergebnis zu erzielen. Um sicherzustellen, dass der generierte Inhalt den gewünschten Erwartungen entspricht, füllen Sie beide Felder aus. Wenn Sie sich ausschließlich auf den Titel verlassen, ohne das Beschreibungsfeld zu verwenden, werden nicht die beabsichtigten Ergebnisse erzielt.
4. Gehen Sie zur Einstellung **Generierung von Lexikoneinträgen** und aktivieren Sie **Lexikoneinträge generieren**.
5. Wählen Sie **Lexikonsprache** aus der Liste aus.
6. Legen Sie die Anzahl der Einträge (Lexikoneinheiten) fest.
7. *(Optional)* Fügen Sie den Standardwert [Slot](../ai/nlu/slot-mapping/slot-mapping.md).
8. *(Optional)* Aktivieren Sie **Synonyme generieren**. Synonyme helfen virtuellen Agenten, verschiedene Variationen desselben Konzepts zu verstehen und zu erkennen. Für jede Schlüsselphrase werden bis zu fünf Synonyme generiert.
9. Klicken Sie auf **Erstellen**.

Wenn der Lexikon-Editor mit neuen Schlüsselwörtern geöffnet wird, können Sie sie manuell bearbeiten, löschen oder neue hinzufügen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-lexicons.png" width="90%" />
</figure>

## Flows generieren

Beachten Sie, dass die Generierung von Flows für primäre NLU-Sprachen neben Deutsch und Englisch nicht vollständig unterstützt wird.

Gehen Sie folgendermaßen vor, um die generative KI-Technologie zum Erstellen eines neuen Flows mit vorkonfigurierten Knoten basierend auf Ihrem Szenario zu verwenden:

1. Klicken Sie im Menü auf der linken Seite der Cognigy.AI auf **Build > Flows**.
2. Klicken Sie auf **+ Neuer Flow**.
3. Wechseln Sie im Fenster **Neuer Flow** zum Abschnitt **Flow-Generierung** und wählen Sie eine der Optionen aus:
    - **Keine** — Die generative KI wird nicht auf diesen Flow angewendet. Diese Einstellung ist standardmäßig aktiviert.
    - **Name und Beschreibung** – Die generative KI verwendet die Felder "Name" und "Beschreibung" zum Generieren von Flow.
    - **Name und Transkript** – die generative KI verwendet die Felder "Name" und "Transkript" zum Generieren von Flow. Für diese Einstellung müssen Sie ein Szenario erstellen und es in das Feld Transkript eingeben. Verwenden Sie die Feldvorlage Transkript als Beispiel für Ihr Szenario.
4. Generieren Sie den Flow, indem Sie auf **Erstellen** klicken.

Im vorhandenen Flow können Sie Knoten bearbeiten, die basierend auf Ihrem Szenario erstellt wurden. Generieren Sie neue Intent-Sätze oder Antworten für einen Chatbot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-flows.png" width="90%" />
</figure>

## Intent-Sätze generieren

Beachten Sie, dass die Generierung von Intent-Sätzen für primäre NLU-Sprachen außer Deutsch und Englisch nicht vollständig unterstützt wird.

Gehen Sie folgendermaßen vor, um die generative KI-Technologie zum Erstellen von Intent-Beispielsätzen zu verwenden:

1. Öffnen Sie den vorhandenen Flow.
2. Wählen Sie in der oberen rechten Ecke der Seite **Flow-Editor** die Option **NLU** aus.
3. Klicken Sie auf der Registerkarte **Absicht** auf **Absicht erstellen**.
4. Geben Sie einen eindeutigen Namen für die Absicht an und fügen Sie eine relevante Beschreibung hinzu. Es hilft, ein genaueres Ergebnis zu erzielen. Um sicherzustellen, dass der generierte Inhalt den gewünschten Erwartungen entspricht, füllen Sie beide Felder aus. Wenn Sie sich ausschließlich auf den Titel verlassen, ohne das Beschreibungsfeld zu verwenden, werden nicht die beabsichtigten Ergebnisse erzielt.
5. Aktivieren Sie die Einstellung **Beispielsätze generieren**.
6. Legen Sie die Anzahl der generativen Sätze fest.
7. Generieren Sie neue Sätze, indem Sie auf **Erstellen** klicken.
8. Klicken Sie auf **Modell erstellen**, um den vorhandenen Satz zu lernen.

Wenn Sie weitere Beispiele automatisch hinzufügen möchten, verwenden Sie die Schaltfläche **Sätze generieren**. Neue Sätze werden hellblau markiert. Das System erzeugt eine bestimmte Anzahl von Sätzen. Speichern Sie die Änderungen, und erstellen Sie das Modell erneut.

Sie können Generative AI auch in der Node-Konfiguration verwenden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-intent-sentences.png" width="90%" />
</figure>

## Bot-Ausgaben umformulieren

Generative KI wird durch die [Say](.. /ai/flow-nodes/message/say.md), [Frage](.. /ai/flow-nodes/message/question.md) und [Optionale Frage](.. /ai/flow-nodes/message/optional-question.md) Knoten.

Gehen Sie folgendermaßen vor, um die KI-gestützte Umformulierung der Botausgabe zu verwenden:

1. Öffnen Sie den vorhandenen Flow.
2. Fügen Sie einen der Knoten hinzu: Say, Question oder Optionale Frage.
3. Gehen Sie zum Abschnitt KI-gestützte Ausgabe.
4. Wählen Sie in der Einstellung Ausgabe umformulieren eine der folgenden Optionen aus:
    - **Keine** — die generative KI wird nicht auf diesen Knoten angewendet. Diese Einstellung ist standardmäßig aktiviert.
    - **Basierend auf benutzerdefinierter Eingabe** – geben Sie benutzerdefinierte Werte für die Eingabe an. Verwenden Sie das Feld **Benutzerdefinierte Eingaben**, mit dem der Bot-Entwickler Informationen zum Kontextualisieren und Umformulieren der Ausgabe eingeben kann.
    - **Basierend auf vorherigen Benutzereingaben** — setzt die zuletzt berücksichtigten 'x' Benutzereingaben.
5. Stellen Sie die Punktzahl in der Einstellung Temperatur ein. Der Temperaturbereich bestimmt das Ausmaß der Variation in der Reaktion der generativen KI.
6. Klicken Sie auf **Knoten speichern**.

Überprüfen Sie im interaktiven Bedienfeld, ob Ihr Flow wie erwartet funktioniert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-output.png" width="90%" />
</figure>

## Vollständige Texte

Sie können die folgenden Knoten zum Ausführen von Aufgaben verwenden.

- [LLM-Eingabeaufforderung](#llm-Eingabeaufforderung)
- [GPT-Konversationen](#gpt-Konversation)

Diese Nodes unterstützen nur die Textausgabe im [AI-Kanal](flow-nodes/message/say.md#description).

### LLM-Eingabeaufforderung

Die Funktion [LLM Prompt Node](./flow-nodes/other-nodes/llm-prompt.md) ermöglicht die Erstellung relevanter Inhalte mithilfe von generativer KI. Um diese Funktion zu verwenden, stellen Sie einfach eine Texteingabeaufforderung bereit, die die KI beim Fortsetzen des generierten Textes anleitet.

### GPT-Konversation 

!!! warning
    Dieser Node ist Teil der Forschungsbemühungen von Cognigy im Bereich der großen Sprachmodelle und dient ausschließlich als Vorschaufunktion. Der GPT-Konversationsknoten ist nicht für die Verwendung in der Produktion vorgesehen.

Die Funktion [GPT Conversation Node](./flow-nodes/other-nodes/gpt-conversation.md) ermöglicht die Erstellung relevanter Inhalte mithilfe von generativer KI basierend auf Ihrem Szenario. Standardmäßig verfügt dieser Knoten bereits über vorausgefüllte Felder mit einem Szenario.

## Häufig gestellte Fragen

**F1:** Kann ich mein kostenloses OpenAI-Konto für die generative KI-Funktion in Cognigy.AI verwenden?

**A1:** Ein kostenpflichtiges Konto ist erforderlich, um einen API-Schlüssel zu erhalten, der für die Verwendung von Generative AI erforderlich ist. Ein kostenloses Konto stellt diesen Schlüssel nicht zur Verfügung.

**F2**: Warum funktioniert die generative KI nicht mit AudioCodes-Knoten?

**A2:** Die generative KI-Ausgabe unterstützt nur Textnachrichten im [KI-Kanal](#complete-Texte).

## Mehr Informationen

- [Flüsse](../ai/resources/build/flows.md)
- [Flow-Knoten](../ai/flow-nodes/flow-nodes-overview.md)
- [Absichten](../ai/nlu/nlu-overview/overview.md#intents)
- [Lexika](../ai/resources/build/lexicons.md)
- [LLM](../ai/resources/build/llm.md)
- [Cognigy.AI Einstellungen](../ai/resources/manage/settings.md)