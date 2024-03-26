---
 Titel: "Analytics-Konzepte" 
 Slug: "Analytics-Konzepte" 
 ausgeblendet: false 
---
# Analytics-Konzepte

## Datensammlungen<div class="divider"></div>Analytics-Daten werden aus Konversationen mit virtuellen Agenten in Cognigy.AI erstellt und sind aus fünf verschiedenen Sammlungen verfügbar:

1. Eingänge
 2. Chat-Verlauf
 3. Schritte
 4. Ausgeführte Schritte
 5. Sitzungen

Der Zugriff auf diese Daten erfolgt über eine Verbindung mit dem [OData Analytics-Endpunkt]({{config.site_url}}ai/tools/analytics/odata-analytics-endpoint/). 

### Eingänge

Diese Auflistung besteht aus einem Eintrag pro Benutzereingabe. Es enthält detaillierte Daten über die Eingabenachricht, wie z. B. NLU-Ergebnisse (Intents & Slots), erreichte Ziele und mehr. Die Eingabeauflistung unterscheidet sich von den anderen 4 Auflistungen, da sie von der Ablauflogik mithilfe der Knoten [Overwrite Analytics]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics/) oder [Code]({{config.site_url}}ai/flow-nodes/code/code/) angepasst werden kann. Dieser Vorgang wird im Folgenden erläutert.

### Chat-Verlauf

Diese Sammlung enthält einen Datensatz pro Benutzereingabe, einen Datensatz pro virtueller Agentenausgabe und einen Datensatz pro menschlicher Agenteneingabe. Der Chatverlauf wird sofort geschrieben, wenn die Nachricht von der jeweiligen Quelle eintrifft. Dieser Datensatz wird häufig zum Generieren von Gesprächsprotokollen verwendet.

### Schritte

Diese Sammlung enthält einen Datensatz pro Analyseschritt, der in einem Flow vorhanden ist. Bei einem Schritt kann es sich entweder um einen Flow-Knoten oder eine Absicht handeln. Sowohl [Question]({{config.site_url}}ai/flow-nodes/message/question/) Nodes als auch [Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) werden automatisch mit einem angehängten Analyseschritt erstellt, aber jeder andere Flow-Knoten kann auch als Schritt erstellt werden. Die Hauptfunktion dieses Datensatzes besteht darin, als Referenzliste von Entitäts-IDs zu fungieren, um die aktuelle Bezeichnung jedes Analyseschritts für die Abwärtskompatibilität von Datensätzen abzurufen, da die Bezeichnung des Analyseschritts jederzeit von Cognigy.AI aktualisiert werden kann.

### Ausgeführte Schritte

Diese Sammlung enthält einen Datensatz pro ausgeführtem Schritt aus jeder Sitzung, die in den Datensätzen vorhanden ist. Diese Auflistung kann verwendet werden, um den Schritt zu identifizieren, der vor dem aktuellen Schritt aufgetreten ist, da sie auch eine Referenz-ID für den vorherigen Schritt enthält.

### Sitzungen

Diese Auflistung enthält einen Datensatz pro Sitzung. Der Hauptzweck dieses Datensatzes besteht darin, eine Liste der geordneten Schritte zu liefern, die jede einzelne Sitzung ausgeführt hat. 

## Analytics-Datenfluss<div class="divider"></div>Analytics-Daten werden während des gesamten Lebenszyklus einer Eingabenachricht generiert, die von Cognigy.AI verarbeitet wird. Das folgende Diagramm zeigt, wann die einzelnen Datentypen generiert und in die jeweilige Sammlung geschrieben werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/analytics-data-flow.png" width="100%" />
</figure>

1. Wenn die Eingabe eintrifft (aber nach der NLU), wird der Analysedatensatz mit den folgenden Daten initialisiert:

'''JavaScript
	{
		projectId,
		projectName,
		contactId,
		sessionId,
		inputId,
		Zustand
		Modus
		Organisation
		userType,
		Kanal
		flowReferenceId,
		flowName,
		Einstiegspunkt,
		localeReferenceId,
		flowLanguage,
		inputText,
		inputData,
		Absicht
		intentScore,
		intentFlow,
		Schlitze
		verstanden
		Zeitstempel
	}
	'''

2. Während ein Flow die Eingabe verarbeitet, kann der Flow die initialisierten Daten überschreiben. Dies kann mithilfe von [Overwrite Analytics Node]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics/) oder [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) 

3. Wenn die Flow-Ausführung abgeschlossen ist, fügt Cognigy.AI dem Analysedatensatz die endgültigen Analyseinformationen (z. B. Ausführungszeit) hinzu, bevor er in der Datenbank gespeichert wird

## Analytics-Schritte<div class="divider"></div>Analytics-Schritte werden erstellt Cognigy.AI um die Sitzungspfade zu verfolgen, die Benutzer verwenden, wenn sie mit dem virtuellen Agenten sprechen.

### Erstellen eines Schritts

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.2.0-blue.svg)] ({{config.site_url}})

Eine Schrittentität ist entweder ein [Flow-Knoten]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/) oder ein [Intent]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/). Jeder Entitätstyp kann über das Einstellungsmenü der jeweiligen Entität als Schritt zugewiesen werden. 

#### Schritte des Flow-Knotens

Ein Flow-Knoten wird als Analyseschritt erstellt, indem eine Textbeschriftung in das Feld "Analyseschritt" im Dropdown-Menü "Einstellungen" der Knoteneinstellungen eingegeben wird:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/b9e42cf-StepFlow.PNG" width="100%" />
</figure>

#### Intent-Schritte

Ein Intent wird als Analytics-Schritt erstellt, indem eine Textbeschriftung in das Feld "Analytics-Schritt" im Dropdown-Menü "Erweitert" der Intent-Einstellungen eingegeben wird.

!!! Warnung "Schritterstellung in den OData-Datensätzen"
    Ein Schritt ist nur dann in den OData-Datensätzen vorhanden, wenn er mindestens einmal durch eine Konversation ausgelöst wurde.<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/0d04fd1-IntentStep.PNG" width="100%" />
</figure>

