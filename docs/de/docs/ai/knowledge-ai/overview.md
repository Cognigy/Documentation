---
Titel: "Wissens-KI"
Schnecke: "Wissens-KI"
Beschreibung: "Die KI-Technologie von Cognigy Knowledge ermöglicht es Ihnen, vorhandenes Wissen als Dokumente hochzuladen, z. B.PDF-, Text- und DOCX-Dateien sowie Dateien in einem benutzerdefinierten Cognigy-Format. Diese Technologie extrahiert aussagekräftige Informationen aus diesen Dokumenten und macht sie den Flow-Designern über die Knowledge AI Nodes zugänglich."
ausgeblendet: false
---

# Wissen KI

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.65-blue.svg)] (.. /.. /release-notes/4.65.md)

{! _includes/ai/terms-of-use-ks.md !}

Wissens-KI kann verwendet werden, um Natural Language Processing (NLP) und Conversational AI zu verbessern. Das Hauptziel von Knowledge AI ist es, diese Systeme in die Lage zu versetzen, auf eine große Menge an Informationen aus verschiedenen Formaten zuzugreifen und diese zu verstehen, z. B. Dokumente, Artikel, Handbücher, FAQs und mehr. Durch den Zugriff auf und das Verständnis von Wissensdatenbanken können diese KI-Systeme genauere, kontextbezogene und hilfreichere Antworten auf Benutzeranfragen liefern.

Mit der neuen KI-Lösung von Cognigy Knowledge müssen Sie sich nicht mehr nur auf [Intents](.. /nlu/nlu-overview/ml-intents.md) und [Standardantworten](.. /nlu/nlu-overview/overview.md#default-replies), um Benutzerfragen zu identifizieren und relevante Inhalte basierend auf vordefinierten Antworten bereitzustellen. Die Erstellung dieser Frage-Antwort-Paare kann zeit- und arbeitsintensiv sein und einen kontinuierlichen Wartungsaufwand erfordern.

Stattdessen können Sie mit der KI-Technologie von Cognigy Knowledge vorhandenes Wissen als Dokumente hochladen, z. B.PDF-, Text- und DOCX-Dateien sowie Dateien in einem benutzerdefinierten Cognigy-Format. Diese Technologie extrahiert aussagekräftige Informationen aus diesen Dokumenten und macht sie über die Knowledge AI Nodes für Flow-Designer zugänglich. Dieser Ansatz ermöglicht es Ihnen, schnell und mühelos wissensbasierte virtuelle Agenten zu erstellen, die Einschränkungen herkömmlicher absichtsbasierter Systeme zu umgehen und den Prozess der Erstellung anspruchsvoller Konversationserlebnisse zu vereinfachen.

## Voraussetzungen

Bevor Sie diese Funktion verwenden, erstellen Sie ein Konto bei einem der LLM-Anbieter:

- [OpenAI](https://platform.openai.com/). Sie müssen über ein kostenpflichtiges Konto verfügen oder Mitglied einer Organisation sein, die Ihnen Zugriff gewährt. Öffnen Sie Ihr OpenAI-Benutzerprofil, kopieren Sie den vorhandenen API-Schlüssel oder erstellen Sie einen neuen und kopieren Sie ihn.
- [Microsoft Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). Sie müssen über ein kostenpflichtiges Konto verfügen oder Mitglied einer Organisation sein, die Ihnen Zugriff gewährt. Bitten Sie Ihren Azure-Administrator, den API-Schlüssel, den Ressourcennamen und den Namen des Bereitstellungsmodells anzugeben.

Für den Fall von Knowledge AI benötigen Sie nur das Modell "text-embedding-ada-002". Wenn Sie jedoch beabsichtigen, das Ergebnis der Wissenssuche zu transformieren und auszugeben, benötigen Sie auch ein zusätzliches Modell aus der Spalte **LLM Prompt Node & Search Extract Output Node** in der Spalte [unterstützte Modelle](.. /resources/build/llm.md) aufgerufen werden.

## Erstellen eines Wissensspeichers

Sie können einen vorkonfigurierten Wissensspeicher erstellen. Gehen Sie dazu folgendermaßen vor:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Wählen Sie im Menü auf der linken Seite **Wissen** aus. Der Wissensassistent wird geöffnet.
3. Folgen Sie den Anweisungen des Assistenten.
4. Geben Sie einen eindeutigen Namen an und wählen Sie ein Einbettungsmodell aus.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/knowledge-ai-wizard.png" width="100%" />
    </figure>

5. Klicken Sie auf **Konfigurieren** und geben Sie die Anmeldeinformationen für das Modell ein:

=== "Microsoft Azure OpenAI"
        - **Verbindungsname** – Erstellen Sie einen eindeutigen Namen für Ihre Verbindung.<br>- **apiKey** – Fügen Sie einen [Azure-API-Schlüssel](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint) hinzu. Dieser Wert finden Sie im Abschnitt Schlüssel und Endpunkt, wenn Sie Ihre Ressource über das Azure-Portal untersuchen. Sie können entweder 'KEY1' oder 'KEY2' verwenden.<br>- **Ressourcenname** — Fügen Sie einen [Ressourcennamen](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource) hinzu. Diesen Wert finden Sie im Azure-Portal unter **Ressourcenverwaltung > Bereitstellungen** oder alternativ unter **Verwaltung > Bereitstellungen** in Azure OpenAI Studio.<br>- **Bereitstellungsname** – fügen Sie einen [Modellnamen](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model) hinzu.<br>- **API-Version** — Fügen Sie eine [API-Version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning) hinzu. Die API-Version, die für diesen Vorgang im Format "JJJJ-MM-TT" verwendet werden soll. Beachten Sie, dass die Version ein erweitertes Format haben kann, z. B. "2023-03-15-preview". <br>- **Benutzerdefinierte URL** – dieser Parameter ist optional. Um die Verbindung zwischen Ihren Clustern und dem Azure OpenAI-Anbieter zu steuern, können Sie Verbindungen über dedizierte Proxyserver weiterleiten und so eine zusätzliche Sicherheitsebene schaffen. Geben Sie dazu die URL nach folgendem Muster an: 'https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/completions?api-version=<api-verson>'. Wenn eine benutzerdefinierte URL hinzugefügt wird, werden die Felder **Ressourcenname**, **Bereitstellungsname** und **API-Version** ignoriert.
    
=== "OpenAI"
        - **Verbindungsname** – Erstellen Sie einen eindeutigen Namen für Ihre Verbindung.<br>- **apiKey** — fügen Sie einen API-Schlüssel aus Ihrem OpenAI-Konto hinzu. Diesen Schlüssel finden Sie in den [Benutzereinstellungen](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) Ihres OpenAI-Kontos.<br>- **Benutzerdefiniertes Modell** — dieser Parameter ist optional. Fügen Sie das Modell hinzu, das Sie verwenden möchten. Dieser Parameter ist hilfreich, wenn Sie mehrere Modelltypen auf der Seite des LLM-Anbieters haben und beabsichtigen, einen bestimmten Modelltyp zu verwenden. Wenn Sie beispielsweise GPT-4 haben, können Sie "gpt-4-0613" für Ihren Anwendungsfall angeben. Wenn ein benutzerdefiniertes Modell hinzugefügt wird, wird das standardmäßige LLM-Modell ignoriert. Weitere Informationen zu den Modellen des Anbieters finden Sie in der [OpenAI-Dokumentation](https://platform.openai.com/docs/models/overview).<br>6. Klicken Sie auf **Weiter**. 
7. Laden Sie die Datei [cognigy-sample.ctxt](https://docs.cognigy.com/ai/images/knowledge-ai/cognigy-sample.ctxt) im Format ".ctxt" herunter. 
8. Wählen Sie im Schritt **Wissen hochladen** den Typ **Cognigy CTXT** aus, laden Sie die gespeicherte Datei hoch und klicken Sie dann auf **Weiter**.
9. _(Optional)_ Wählen Sie im Abschnitt **Antwortextraktionsmodell konfigurieren** das zusätzliche Modell aus, wenn Sie Schlüsselpunkte extrahieren und das Suchergebnis als Text oder adaptive Karte ausgeben möchten. Klicken Sie auf **Konfigurieren**, und geben Sie die Anmeldeinformationen für das Modell ein.
10. _(Optional)_ Wenn das zusätzliche Modell konfiguriert ist, klicken Sie auf **Flow erstellen**. Es wird ein Flow mit dem Knoten **Search Extract Output** erstellt. 
11. Klicken Sie auf **Weiter**.

Schließen Sie die Installation ab und beginnen Sie mit der Erkundung der Wissens-KI-Projektstruktur.   

Weitere Informationen zu 'ctxt' finden Sie unter [Cognigy Text Format](ctxt.md).

## Erkunden Sie ein Knowledge AI-Projekt 

Die Arbeit mit Knowledge AI umfasst zwei Phasen, die dem Intent-Workflow ähneln. Die erste Phase ist das Erfassen und Vorbereiten von Wissen, und die zweite Phase ist die Abfrage des Wissens während der Laufzeit.

**Erste Phase:**

1. **Hochladen von Rohinformationen**. Cognigy.AI erhält Zugriff auf Rohinformationen über hochgeladene Dateien, die Wissen enthalten.
2. **Extraktion von Wissensblöcken**. Eine Sammlung von Werkzeugen, die Text und Metadaten aus den Rohinformationen extrahieren. Chunks können im Chunk-Editor geändert werden.
3. **Vektorisierung**. Der Text von Knowledge Chunks wird mithilfe eines eingebetteten Machine Learning-Modells in numerische Darstellungen codiert. Einbettungen sind hochdimensionale Vektoren, die die Bedeutung und Ähnlichkeit von Wörtern in numerischen Darstellungen kodieren. Cognigy.AI speichert diese Vektoren in einer speziellen internen Datenbank, um während der Laufzeit schnell darauf zugreifen zu können.

**Zweite Phase:**

1. **Abfrage der Wissensdatenbank**. Während der Laufzeit kann das Knowledge AI-System die Wissensdatenbank abfragen, um genaue und kontextbezogene Antworten auf Benutzeranfragen zu geben.
2. **Wissensbasierter Aufbau virtueller Agenten**. Virtuelle Agenten nutzen das in der Wissensdatenbank gespeicherte Wissen, um anspruchsvollere und intelligentere Gespräche mit Benutzern zu führen. Diese Agenten können kontextbezogene Antworten basierend auf den aus den hochgeladenen Dateien extrahierten Informationen bereitstellen.

### Wissens-KI-Management

Das Wissen ist in einer Hierarchie von Speichern, Quellen und Blöcken organisiert, um genaue Antworten des Systems zu ermöglichen. Diese hierarchischen Strukturen werden im Folgenden beschrieben.

#### Wissensspeicher

Ein _Knowledge Store_ ist ein Container, der mehrere Wissensquellen enthält und organisiert. Es bietet eine zentralisierte und strukturierte Umgebung für die Verwaltung und Kategorisierung verschiedener Wissensquellen.
Der Wissensspeicher trägt zur Optimierung des Wissensmanagementprozesses bei, indem er verwandte Wissensquellen gruppiert und so das Organisieren, Suchen und Abrufen relevanter Informationen während der Laufzeit erleichtert.

Die maximale Anzahl von Speichern pro Projekt wird im Abschnitt [Einschränkungen](#limitations) beschrieben.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/knowledge-store.png" width="100%" />
</figure>

#### Wissensquelle

Ein _Knowledge Source_ stellt die Ausgabe der Umwandlung verschiedener Dateitypen in ein strukturiertes und zugängliches Format dar. Jede Datei entspricht eindeutig einer bestimmten Wissensquelle, die wertvolles Wissen in Form von Benutzerhandbüchern, Artikeln, FAQs und anderen relevanten Informationen enthält.

Durch die Aufteilung des Inhalts dieser Dateien in kleinere Einheiten, die als _Chunks_ bezeichnet werden, wird die Wissensquelle zu einer spezifischen Sammlung von organisiertem und strukturiertem Wissen.

Zusätzlich zum Hauptinhalt können Sie andere Arten von Informationen, z. B. Links und Datumsangaben, in die Metadaten aufnehmen.

Die folgenden Dateitypen werden unterstützt:

- '.ctxt' (empfohlen) 
- '.txt'
- '.pdf'
- '.docx'

Das Format '.ctxt' ([Cognigy text](ctxt.md)) teilt den Text effektiv in Blöcke auf und bietet breite Möglichkeiten für die Arbeit mit Metadaten. Bei anderen Formaten können die Ergebnisse der Dateikonvertierung zu schlechteren Ergebnissen führen.

Das '.pdf'-Format verfügt über [zwei Chunk-Splitting-Strategien](pdf.md).

Die maximale Anzahl von Quellen pro Speicher wird im Abschnitt [Einschränkungen](#limitations) beschrieben.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/knowledge-source.png" width="100%" />
</figure>

Darüber hinaus können Sie Quell-Tags verwenden. Diese Tags dienen dazu, den Umfang Ihrer Wissenssuche zu verfeinern, so dass Sie nur die relevantesten Abschnitte der Wissensdatenbank einbeziehen und
Dadurch wird die Genauigkeit der Suchausgaben verbessert.

Um diese Tags anzuwenden, geben Sie sie beim Hochladen einer Quelldatei an.
Für das .ctxt-Format müssen Sie sie in die [Quellmetadaten](ctxt.md#source-metadata) aufnehmen.
während für andere Formate
Sie müssen sie in der Cognigy.AI Benutzeroberfläche angeben, wenn Sie eine neue Wissensquelle erstellen.

!!! Hinweis "Quellen-Tags"
    - Die maximale Anzahl von Tags pro Wissensquelle beträgt 10.
    - Ein Quell-Tag kann nach dem Erstellen der Quelle nicht mehr geändert werden.
    - Ein Quellen-Tag kann nicht zu bereits vorhandenen Quellen hinzugefügt werden. 

#### Brocken 

Ein _Chunk_ ist eine Wissenseinheit, die aus einer Wissensquelle extrahiert wird. Chunks sind kleinere, in sich geschlossene Informationen, die das Knowledge AI-System effektiv verarbeiten und verwalten kann.

Ein Block kann beispielsweise einen einzelnen Absatz, einen Satz oder sogar eine kleinere Texteinheit aus einem Dokument darstellen. Durch die Aufteilung des Inhalts in Blöcke erhält das System eine bessere Granularität, sodass es Benutzeranfragen effizienter analysieren und beantworten kann. Die Extraktion von Wissen in Blöcke verbessert die Fähigkeit des Systems, die richtigen Informationen mit Benutzerfragen abzugleichen, was zu genaueren und kontextuell angemessenen Antworten führt.

Jedem Block können Metadaten zugeordnet sein.
Die Anzahl der Metadaten-Schlüssel-Wert-Paare ist begrenzt und unterstützt nur einfache Datentypen wie Zahl,
string und boolean.
Die maximale Anzahl von Chunks sowie die maximale Länge der unterstützten Zeichen pro Chunk sind im Abschnitt [Limitations](#limitations) beschrieben.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/chunk.png" width="100%" />
</figure>

#### Chunk-Editor

Das _Chunk Editor_ ist ein Tool, mit dem Sie mit Chunks interagieren und diese verwalten können. 
Der Editor bietet eine benutzerfreundliche Oberfläche, mit der Sie den Inhalt innerhalb der einzelnen Blöcke bearbeiten können.
Benutzer können den Text ändern, neue Informationen hinzufügen, Abschnitte löschen,
oder ordnen Sie die Reihenfolge der Inhalte neu, um die Richtigkeit und Relevanz des Wissens zu gewährleisten.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/chunk-editor.png" width="100%" />
</figure>

## Wissen suchen, extrahieren und ausgeben

1. Navigieren Sie zu **Build > Flows** und erstellen Sie einen neuen Flow.
2. Fügen Sie im **Flow**-Editor einen Knoten **Search Extract Output** hinzu.
3. Wählen Sie im **Node**-Editor den Wissensspeicher aus, den Sie kürzlich erstellt haben.
4. Wählen Sie einen der folgenden Modi:
    - **Suchen & Extrahieren & Ausgabe** – führt eine Wissenssuche durch, extrahiert Schlüsselpunkte und gibt das Ergebnis als Text oder adaptive Karte aus. Für diesen Modus benötigen Sie Modelle aus der [Liste der unterstützten Anbieter](.. /resources/build/llm.md), die sowohl die Fälle "LLM Prompt Node & Search Extract Output Node" als auch "Knowledge Search" abdecken.
    - **Suchen & Extrahieren** — führt eine Wissenssuche durch, extrahiert Schlüsselpunkte, aber keine automatische Ausgabe. Für diesen Modus benötigen Sie Modelle aus der [Liste der unterstützten Anbieter](.. /resources/build/llm.md), die sowohl die Fälle "LLM Prompt Node & Search Extract Output Node" als auch "Knowledge Search" abdecken.
    - **Nur Suche** – führt eine Wissenssuche durch und ruft Informationen ohne Extraktion oder automatische Ausgabe ab. Für diesen Modus verwenden Sie nur das Modell 'text-embedding-ada-002'.

     <figure>
       <img class="image-center" src="{{config.site_url}}ai/images/knowledge-ai/configure-search-extract-output.png" width="100%" />
     </figure>
   
5. Prüfen Sie, ob die **Kontextabhängige Suche** im Abschnitt **Sucheinstellungen** aktiviert ist. Diese Funktion berücksichtigt den Kontext des Transkripts für die Suche, sodass ein virtueller Agent Folgefragen beantworten kann. Beachten Sie, dass diese Funktion LLM-Token auf Ihrer LLM-Testseite verbraucht. 
6. Wenn die Einstellung **Kontextabhängige Suche** aktiviert ist, konfigurieren Sie die Anzahl der **Transkriptschritte**. Diese Einstellung wirkt sich auf die Tiefe des Kontexts aus, der beim Abrufen von Suchergebnissen berücksichtigt wird.
7. _(Optional)_ Fügen Sie im Feld **Quell-Tags** Tags hinzu, indem Sie jedes Tag separat angeben und **Eingabe** drücken. Stellen Sie vor dem Angeben von Tags sicher, dass diese beim Hochladen der Quelldatei für die ausgewählte Wissensquelle bereitgestellt wurden. 
8. Klicken Sie auf **Knoten speichern**. 
9. Fahren Sie mit dem [Interaktionsbereich](.. /tools/interaction-panel/interaction-panel.md) und senden Sie die Frage "Kann Cognigy eine Verbindung zu einem Contact Center herstellen?".

Du wirst eine Antwort erhalten, die aus dem absorbierten Wissen generiert wird.

Weitere Informationen zum Suchextrakt-Ausgabeknoten finden Sie im [verwandten Artikel](.. /flow-nodes/other-nodes/search-extract-output.md).

## Einschränkungen

In der folgenden Tabelle sind die Einschränkungen aufgeführt. Diese Einschränkungen unterliegen zukünftigen Änderungen durch Cognigy.

| Beschreibung | Strom-Grenzwert |
|--------------------------------------------------------------------------------------------------------------------|---------------|
| Maximale Anzahl von Wissensspeichern pro Projekt | Nr. 10 |
| Maximale Anzahl von Wissensquellen pro Shop | Nr. 10 |
| Maximale Anzahl von Quellen-Tags pro Wissensquelle | Nr. 10 |
| Maximale Anzahl von Quell-Tags pro [Search Extract Output Node](.. /flow-nodes/other-nodes/search-extract-output.md) | Nr. 5 |
| Maximale Anzahl von Chunks pro Wissensquelle | 1000 |
| Maximale Anzahl von Quellmetadatenpaaren | Nr. 20 |
| Maximale Anzahl von Chunk-Metadatenpaaren | Nr. 20 |
| Maximale Anzahl von Zeichen für Text pro Block | 2000 |
| Maximale Anzahl von Zeichen für Metadaten pro Chunk | 1000 |
| Maximale Anzahl von Zeichen für Metadaten pro Quelle | 1000 |

!!! Schnappschüsse
    Wissens-KI-spezifische Objekte, wie z. B. Stores, Sources und Chunks, **sind** nicht Teil von Cognigy.AI [Snapshots](.. /resources/deploy/snapshots.md). Diese Funktion wird in Kürze implementiert.    

## Häufig gestellte Fragen

**F1**: Wird Knowledge AI kostenlos sein?

**A1**: Nein, wir werden in naher Zukunft Preisinformationen zur Verfügung stellen.

F2: Beim Versuch, eine Datei hochzuladen, ist der Fehler "Anforderung mit Statuscode 429 fehlgeschlagen" aufgetreten. Wie kann ich dieses Problem lösen?

**A2**: Der Fehler "429" tritt auf, wenn das Ratenlimit Ihrer Organisation auf der Seite des LLM-Anbieters überschritten wird. Weitere Informationen finden Sie in der Dokumentation Ihres Anbieters. Wenn Sie beispielsweise die OpenAI-API verwenden, lesen Sie den Artikel [Wie kann ich 429: 'Too Many Requests'-Fehler lösen?] (https://help.openai.com/en/articles/5955604-how-can-i-solve-429-too-many-requests-errors).

## Mehr Informationen

- [Cognigy-Textformat](ctxt.md)
- [PDF](pdf.md)
- [Suchextrakt-Ausgabeknoten](.. /flow-nodes/other-nodes/search-extract-output.md)
- [LLM](.. /resources/build/llm.md)
- [Generative KI](.. /generative-ai.md)</api-verson></deployment-name></resource-name>