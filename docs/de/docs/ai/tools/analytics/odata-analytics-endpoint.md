---
 Titel: "OData Analytics-Endpunkt" 
 Slug: "OData-Analytics-Endpunkt" 
 ausgeblendet: false 
---
# OData Analytics-Endpunkt

Cognigy.AI macht einen OData v4-Analyseendpunkt zum Abrufen von Analysedatensätzen verfügbar. [OData] (https://www.odata.org/), der beste Weg zu REST, ist ein leistungsstarkes API-Framework. Mit dem OData-Endpunkt können Sie alle Rohdaten mithilfe von GET-Anforderungen aus Cognigy.AI abrufen. Es deckt alle Ihre Anforderungen an Unternehmensanalysen ab, um fein abgestufte Abfragen in Ihren Tabellenkalkulationen durchzuführen oder umfangreiche Dashboards für Ihre Bots mit Ihrem bevorzugten Datenvisualisierungstool zu erstellen.

Beachten Sie, dass der Cognigy OData-Endpunkt nur "GET"-Anforderungen unterstützt und keine anderen Anforderungstypen wie "PATCH", "DELETE" oder "POST".<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019467199-Cognigy-Sessions-Analytics-OData" target="_blank">Technisches Video "Analytics &amp; OData"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>## Verwendung und Authentifizierung<div class="divider"></div>Sie können eine Verbindung mit dem OData-Endpunkt herstellen, indem Sie Ihren [API-Schlüssel]({{config.site_url}}ai/tools/user-menu/my-profile/#api-keys/) in der OData-URL auf Ihrem Server verwenden.

Eine OData-URL wird aus dem Dienststamm, der API-Version, der Sammlung und dem API-Schlüsselparameter wie folgt kombiniert:

"https://<odata domain="">/<api-version>/<collection>?apikey=YOURAPIKEY'

!!! Hinweis "OData-Domänenname"
    Der OData-Endpunkt ist in einer anderen Domäne als Ihrer Cognigy-Benutzeroberflächendomäne verfügbar. Wenn Sie sich über [https://trial.cognigy.ai](https://trial.cognigy.ai) bei Cognigy anmelden, lautet Ihre OData-Domain [https://odata-trial.cognigy.ai](https://odata-trial.cognigy.ai).

Auf unserem Testserver lautet die OData-Endpunkt-URL für die Analytics-Eingabesammlung beispielsweise "https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY" (wobei YOURAPIKEY durch Ihren jeweiligen API-Schlüssel ersetzt werden muss). Ersetzen Sie bei lokalen Installationen den Domänennamen "odata-trial.cognigy.ai" durch den Domänennamen, der für Ihre lokale Installation konfiguriert ist.

!!! Hinweis "Excel/Power BI"
    Wenn Sie PowerBI oder Excel verwenden, werden Sie möglicherweise aufgefordert, sich zu authentifizieren. Wählen Sie einfach "Anonyme Authentifizierung".

## Endpunkt-Version<div class="divider"></div>=== "Version 2.3"

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.31.0-blue.svg)] ({{config.site_url}})

Die aktuelle Version des OData-Endpunkts ist "v2.3". In dieser Version stehen die folgenden OData-Sammlungen zur Verfügung:

- [Analytics](#analytics) ('/Analytics')
    - [Unterhaltungen](#conversations) ('/Unterhaltungen')
    - [Schritte](#steps) ('/Schritte')
    - [AusgeführteSchritte](#executedsteps) ('/AusgeführteSchritte')
    - [Sitzungen](#sessions) ('/Sitzungen')
    - [LiveAgentEscalations](#liveagentescalations) ('/LiveAgentEscalations')

Die URL für den Zugriff auf den V2.3-OData-Endpunkt lautet wie folgt:
    'https://<hostname>/v2.3/<collection>?apikey=YOURAPIKEY'

=== "Version 2.2 und früher"
    !!! Warnung "Deprecation of OData v2.0 - 2.2"
        Die OData-Endpunktversionen 2.0 bis 2.2 wurden veraltet und in Cognigy.AI "v4.48.0" entfernt.

- [Inputs](#analytics) ('/Inputs') – umbenannt in Analytics in v2.3 Endpoint
    - [ChatHistory](#conversations) ('/ChatHistory') – umbenannt in Conversations in v2.3 endpoint
    - [Schritte](#steps) ('/Schritte')
    - [AusgeführteSchritte](#executedsteps) ('/AusgeführteSchritte')
    - [Conversations](#sessions) ('/Conversations') – umbenannt in Sessions in v2.3 endpoint

Die URL für den Zugriff auf die V2. Der X-OData-Endpunkt lautet wie folgt:
    "https://<hostname>/v2. X/<collection>?apikey=YOURAPIKEY'

## Abfragen<div class="divider"></div>Der Endpunkt unterstützt die folgenden OData-Abfragesprachenoperatoren:

- $filter
- $skip
- $top
- $orderby
- $count
- $select

!!! Warnung "$count und Excel oder PowerBI"
    Microsoft Excel und PowerBI unterstützen die $count Abfrage nicht. Verwenden Sie Postman oder andere Optionen.

## Beispiel-Anfragen

=== "OData 2.3"

| Beschreibung anfordern | OData 2.3-Anforderung |
    | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Gibt die Gesamtanzahl der Analysedatensätze zurück (wird in Excel oder PowerBI nicht unterstützt) | "https://odata-trial.cognigy.ai/v2.3/Analytics/$count?apikey=YOURAPIKEY" |
    | Gibt alle Analytics-Datensätze für den angegebenen APIKey | "https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=YOURAPIKEY" |
    | Gibt die ersten 10 Analytics-Datensätze zurück | "https://odata-trial.cognigy.ai/v2.3/Analytics/?$top=10&apikey=YOURAPIKEY" |
    | Gibt die 5 wichtigsten Analytics-Datensätze zurück, bei denen executionTime weniger als 50 ms beträgt, sortiert nach executionTime | 'https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=executionTime lt 50&$top=5&$orderby=Ausführungszeit&apikey=YOURAPIKEY' |
    | Gibt alle Analytics-Datensätze für einen bestimmten Cognigy.AI-Agent zurück, gefiltert nach ProjectId | 'https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=projectId eq 'PROJECTID'&apikey=YOURAPIKEY' |
    | Gibt alle Analytics-Datensätze zwischen zwei Datumsangaben zurück, z. B. 1. Januar 2021 und 1. Juli 2021 | 'https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=timestamp gt 2021-01-01T00:00:00.000Z und Zeitstempel lt 2021-07-01T00:00:00.000Z&apikey=YOURAPIKEY' |

=== "OData 2.2 und früher"

| Beschreibung anfordern | OData 2.2-Anforderung |
    | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Gibt die Gesamtanzahl der Eingabedatensätze zurück (wird in Excel oder PowerBI nicht unterstützt) | "https://odata-trial.cognigy.ai/v2.2/Inputs/$count?apikey=YOURAPIKEY" |
    | Gibt alle Inputs-Datensätze für den angegebenen APIKey | "https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY" |
    | Gibt die ersten 10 Inputs-Datensätze zurück | "https://odata-trial.cognigy.ai/v2.2/Inputs/?$top=10&apikey=YOURAPIKEY" |
    | Gibt die obersten 5 Eingabedatensätze zurück, bei denen executionTime weniger als 50 ms beträgt, sortiert nach executionTime | 'https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=executionTime lt 50&$top=5&$orderby=Ausführungszeit&apikey=YOURAPIKEY' |
    | Gibt alle Eingabedatensätze für einen bestimmten Cognigy.AI-Agent zurück, gefiltert nach ProjectId | 'https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=projectId eq 'PROJECTID'&apikey=YOURAPIKEY' |
    | Gibt alle Inputs-Datensätze zwischen zwei Datumsangaben zurück, z. B. 1. Januar 2021 und 1. Juli 2021 | 'https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=timestamp gt 2021-01-01T00:00:00.000Z und Zeitstempel lt 2021-07-01T00:00:00.000Z&apikey=YOURAPIKEY' |

## Referenz-Dokumentation

Eine vollständige Referenz finden Sie in der [umfangreichen Sammlung von Ressourcen unter OData.org](https://www.odata.org/) und in der [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Datenschutz & Analytik<div class="divider"></div>Sie steuern und verwalten die im OData-Endpunkt verfügbaren Daten über das Einstellungsmenü des Agenten. Weitere Informationen finden Sie unter [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/):

- Wenn Sie *Collect Analytics* deaktivieren, werden keine Analytics-Daten protokolliert oder sind in OData verfügbar.

- Wenn Sie *Sensible Analysen maskieren* aktivieren, werden die Felder *inputText* und *inputData* maskiert.

Darüber hinaus können Sie das Verhalten der Analyseprotokollierung innerhalb eines Flows steuern, indem Sie [Blind Mode]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#blind-mode)-Knoten verwenden, die die in OData verfügbaren Analysedaten entsprechend Ihren Knoteneinstellungen deaktivieren oder maskieren.

## Cognigy.AI OData-Sammlungen<div class="divider"></div>In diesem Abschnitt werden die Datentypen beschrieben, die in den OData-Auflistungen vorhanden sind, die vom OData-Endpunkt abgerufen werden können. Folgende Kollektionen stehen zur Verfügung:

* [Analytik](#analytics)
  * [Gespräche](#conversations)
  * [Schritte](#steps)
  * [AusgeführteSchritte](#executedsteps)
  * [Sitzungen](#sessions)

### Felder

Jede Sammlung gibt Felder zurück und kann nach diesen gefiltert werden. Viele der OData-Datensatzfelder werden direkt aus den Ergebnissen des Eingabeobjekts abgerufen.

Siehe [hier]({{config.site_url}}ai/tools/interaction-panel/input/) für weitere Informationen darüber, was diese Variablen im Eingabeobjekt sind.

### Analytik

**Beschreibung**

Jedes Mal, wenn ein Kontakt eine Nachricht an einen Cognigy.AI Flow sendet, erstellt Cognigy.AI einen Analytics-Datensatz mit detaillierten Analyseprotokollen über die Interaktion. Jede Interaktion wird im Analyseendpunkt als einzelne Werbebuchung verfügbar gemacht. Daten, die in diese Sammlung geschrieben werden, werden am Ende der Flow-Ausführung festgeschrieben, daher ist es möglich, die in dieser Sammlung enthaltenen Daten mithilfe von [Overwrite Analytics Node]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics/) zu überschreiben.

**Beispielabfrage**

=== "OData 2.3"
    
"https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=YOURAPIKEY"

=== "OData 2.2"
    
'https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY'

=== "OData 2.0"
    
"https://odata-trial.cognigy.ai/v2.0/Inputs?apikey=YOURAPIKEY"

**Datentypen**

Beim Abrufen dieser Auflistung gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
| ------------------ | ------------------------------------------------------------------------------------------ | -------- | ------------------------------------ |
| _id | Eindeutige Analysedatensatz-ID | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| Organisation | Name Ihrer Organisation | Zeichenfolge | cognigy |
| projectId | Projekt-ID | Zeichenfolge | 5A91D194FDE28B0011CE2422 |
| flowReferenceId | ID des Flows | Zeichenfolge | 66CEB9CC-AC5B-4CDD-9F4B-8A48DFBB35D9 |
| Einstiegspunkt | Die ID des Projekts/Agenten oder eines Snapshots, wenn er vom Endpunkt | Zeichenfolge | 621d3deb87016d3855ec0c92 |
| Geistiges Eigentum | Die IP-Adresse, von der die Anfrage stammt | Zeichenfolge | 78.143.45.111 |
| Kontakt-ID | ID des verbindenden Benutzers | Zeichenfolge | myContactID |
| sessionId | Sitzungs-ID | Zeichenfolge | 5A91D194FDE28B0011CE2425 |
| inputId | Eindeutige Eingabe-ID | Zeichenfolge | 5A91D194FDE28B0011CE2424 |
| inputText | Der Eingabetext | Zeichenfolge | Hallo Welt!                         |
| inputData | Das Eingabedatenobjekt als String | Zeichenfolge | {"Schlüssel":"Wert"} |
| Bundesland | Zustand des Durchflusses am Eingang | Zeichenfolge | Standardeinstellung |
| Modus | [Modus] ({config.site_url}}ai/tools/interaction-panel/input#Properties/) der Eingabe | Zeichenfolge | TextOnly |
| userType | Typ des verbindenden Benutzers. Entweder "extern" für externen Benutzer oder "admin" für admin-Benutzer | Zeichenfolge | Externes |
| Kanal | Kanal, durch den der Eingang kam | Zeichenfolge | Facebook |
| flowLanguage | Sprache des Flusses | Zeichenfolge | en-DE |
| Absicht | Gefundene Absicht (kann leer sein) | Zeichenfolge | bestellenEssen |
| intentFlow | Die übergeordnete ID des Flows, in dem die Absicht gefunden wurde (kann leer sein) | Zeichenfolge | 5e33b160e6236da3aa54221461a53f04 |
| intentScore | Die numerische Bewertung der Eingabe im Vergleich zu einer erkannten Absicht (kann leer sein) | Anzahl | 0,836322430892043 |
| completedGoalsList | Liste der abgeschlossenen Ziele in dieser Sitzung | Zeichenfolge | bestellteEssen |
| foundSlots | Gefundene Slot-Tags | Zeichenfolge | DATUM |
| foundSlotDetails | Gefundene Slot-Tags mit Details | Zeichenfolge | DATUM[2018-2-25T12:32:32.000] |
| verstanden | Ob Slots, Absichten oder der Nachrichtentyp gefunden wurden | Boolescher Wert | Wahr |
| Zeitstempel | Datum/Uhrzeit der Eingabe | Datum/Uhrzeit | 2018-2-25T12:32:32.000Z |
| Ausführungszeit | Zeit, die zum Ausführen des Flows in ms | Anzahl | Nr. 32 |
| Ausführung | Die Anzahl der Ausführungen | Anzahl | 3 |
| benutzerdefiniert1 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert2 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert3 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert4 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert5 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert6 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert7 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert8 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert9 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| benutzerdefiniert10 | Benutzerdefinierter Wert, der durch Flow erstellt wird | Zeichenfolge |                                      |
| localeReferenceId | Referenz-ID für Gebietsschema | Zeichenfolge |                                      |
| localeName | Name des Gebietsschemas | Zeichenfolge |                                      |
| endpointUrlToken | Das URL-Token für den Endpunkt | Zeichenfolge |                                      |
| endpointName | Der Name des Endpunkts | Zeichenfolge |                                      |
| Bewertung | Die Bewertung für die Sitzung. -1 für eine negative Bewertung oder 1 für eine positive Bewertung | Anzahl |                                      |
| ratingKommentieren | Kommentar bei Bewertung hinterlassen | Zeichenfolge |                                      |
| snapshotName | Name für den Snapshot, der vom Endpunkt verwendet wird | Zeichenfolge |                                      |

!!! Warnung "Maximale Länge der benutzerdefinierten Felder"
    Sie können maximal 500 Zeichen als Wert für jedes der benutzerdefinierten Felder speichern

!!! Hinweis "Warum wird das Label Analytics-Schritt nicht verwendet?"
    Die Beschriftung des Analyseschritts kann jederzeit über die Cognigy-Benutzeroberfläche aktualisiert werden. Um alle bisherigen Datensätze mit zukünftigen Datensätzen kompatibel zu machen, wird daher die entityReferenceId verwendet. Die entityReferenceID ist entweder die Node-ID oder die Intent-ID, die als Analyseschritt zugewiesen wurde. Die aktuelle Analysebezeichnung des Schritts kann abgerufen werden, indem die entityReferenceID dem Datensatz ['Steps'](#steps) zugeordnet wird.

### Unterhaltungen

**Beschreibung**

Die Conversations-Sammlung bietet ein Protokoll aller Sitzungsnachrichten, einschließlich der Antworten von Endbenutzern, Bots oder menschlichen Agenten. Jedes Mal, wenn eine dieser Quellen eine Nachricht an einen Cognigy.AI Flow sendet, erstellt Cognigy.AI einen Datensatz, um die Interaktion zu protokollieren. Jede Interaktion wird im Analyseendpunkt als einzelne Werbebuchung verfügbar gemacht.

**Beispielabfrage**

=== "OData 2.3"

"https://odata-trial.cognigy.ai/v2.3/Conversations?apikey=YOURAPIKEY"

=== "OData 2.2"

"https://odata-trial.cognigy.ai/v2.2/ChatHistory?apikey=YOURAPIKEY"

=== "OData 2.0"
    
"https://odata-trial.cognigy.ai/v2.0/ChatHistory?apikey=YOURAPIKEY"

**Datentypen**

Beim Abrufen dieser Auflistung gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
| ---------------------- | ----------------------------------------------------- | -------- | ------------------------------------------ |
| _id | Eindeutige Analysedatensatz-ID | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| projectId | Projekt-ID | Zeichenfolge | 5A91D194FDE28B0011CE2422 |
| Projektname | Name des Cognigy.AI Projekts | Zeichenfolge | Projekt 1 |
| inputId | Eindeutige Eingabe-ID | Zeichenfolge | 5A91D194FDE28B0011CE2424 |
| sessionId | Sitzungs-ID | Zeichenfolge | 5A91D194FDE28B0011CE2425 |
| Kontakt-ID | ID des verbindenden Benutzers | Zeichenfolge | myContactID |
| Organisation | Name Ihrer Organisation | Zeichenfolge | cognigy |
| inputText | Der Eingabetext | Zeichenfolge | Hallo Welt!                               |
| inputData | Das Eingabedatenobjekt als String | Zeichenfolge | {"Schlüssel":"Wert"} |
| Typ | Unabhängig davon, ob es sich bei der Nachricht um eine Ein- oder Ausgabe der Flow | Zeichenfolge | "Eingang" oder "Ausgang" |
| Quelle | Die Quelle der Nachricht | Zeichenfolge | "Benutzer" oder "Bot" oder "Agent" oder "Vorschlag" |
| Zeitstempel | Datum/Uhrzeit der Eingabe | Datum/Uhrzeit | 2018-2-25T12:32:32.000Z |
| flowName | Name des Flows | Zeichenfolge | MainFlow |
| flowParentId | ParentId des Flows | Zeichenfolge | 5e33b160e6236da3aa54221461a53f04 |
| Kanal | Kanal, durch den der Eingang kam | Zeichenfolge | Facebook |
| inHandoverRequest | Kennzeichnen, ob sich die Sitzung in einer Übergabeanforderung befindet | Boolescher Wert | falsch |
| inHandoverKonversation | Kennzeichnen, ob sich die Sitzung in einer Übergabesitzung befindet | Boolescher Wert | Wahr |
| outputId | Ausgabe-ID | Zeichenfolge | F514B7B2-7DC0-4E75-BE62-A53Fed5B2BB7 |

### Schritte

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.2-blue.svg)] (.. /.. /release-notes/pre-4.30.md#analytics-steps-for-flow-nodes-and-intents)

**Beschreibung**

Die Steps-Sammlung bietet eine Liste aller Entitäten (eine Entität ist ein Flow-Knoten oder ein Intent), die als Analyseschritt zugewiesen wurden und die in jedem Flow vorhanden sind, auf den der API-Schlüssel Zugriff hat. Analytics-Schritte werden in Cognigy.AI erstellt, indem in den Einstellungen für eine Entität ein Wert in das Feld "Analytics-Schritt" eingefügt wird. Damit ein Step in dieser OData-Auflistung vorhanden ist, muss er auch durch mindestens eine Sitzung mit dem Flow ausgelöst worden sein. Jeder Schritt, der in ExecutedSteps vorhanden sein kann, wird in diesem Analyseendpunkt als einzelner Einzelposten verfügbar gemacht.

**Beispielabfrage**

=== "OData 2.3" 
    
"https://odata-trial.cognigy.ai/v2.3/Steps?apikey=YOURAPIKEY"

=== "OData 2.2" 

"https://odata-trial.cognigy.ai/v2.2/Steps?apikey=YOURAPIKEY"

=== "OData 2.0" 
    
"https://odata-trial.cognigy.ai/v2.0/Steps?apikey=YOURAPIKEY"

**Datentypen**

Beim Abrufen dieser Auflistung gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
| ----------------- | -------------------------------------------------------------------------- | ------ | -------------------------------- |
| _id | Eindeutige Analysedatensatz-ID | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| Etikett | Analytics-Schrittbezeichnung, die für die Entität (Knoten oder Intent) in Cognigy.AI | Zeichenfolge | Frage (2) |
| Typ | Art des Unternehmens | Zeichenfolge | 'Knoten' oder 'Absicht' |
| entityReferenceId | Eindeutige ID für die Entität (Knoten-ID oder Flow-ID) | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| flowReferenceId | ID des Flows | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| flowName | Name des Flows, in dem der Schritt vorhanden ist | Zeichenfolge | Hauptstrom |
| Projektname | Name des Cognigy.AI Projekts | Zeichenfolge | Projekt 1 |
| snapshotId | ID des Snapshots | Zeichenfolge | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName | Name des Snapshots | Zeichenfolge | Bot-Version 2.2 |

!!! Hinweis "Erstellen von Visualisierungen mit Schrittdatensätzen"
    Im folgenden Support-Artikel wird erläutert, wie diese Datensätze in BI-Software bearbeitet werden können, um aufschlussreiche Sitzungspfadanalysen zu erstellen: [Schrittüberwachung mit OData](https://support.cognigy.com/hc/en-us/articles/360021089180-Step-Monitoring-with-OData)

### Ausgeführte Schritte
 
**Beschreibung**

Die ExecutedSteps-Auflistung enthält eine Liste aller Schrittereignisse, die in Sitzungen aufgetreten sind. Er enthält auch einen Verweis auf den Schritt, der zuvor ausgeführt wurde (übergeordneter Schritt). Jedes Mal, wenn eine Entität (Flow-Knoten oder Intent mit einem zugewiesenen Schritt) ausgeführt wird, wird ein Datensatz in dieser Sammlung erstellt. Jeder ausgeführte Schritt wird in diesem Analyseendpunkt als einzelne Werbebuchung verfügbar gemacht.

**Beispielabfrage**

=== "OData 2.3"
    
"https://odata-trial.cognigy.ai/v2.3/ExecutedSteps?apikey=YOURAPIKEY"

=== "OData 2.2"
    
"https://odata-trial.cognigy.ai/v2.2/ExecutedSteps?apikey=YOURAPIKEY"
=== "OData 2.0"
    
"https://odata-trial.cognigy.ai/v2.0/ExecutedSteps?apikey=YOURAPIKEY"

**Datentypen**

Beim Abrufen dieser Auflistung gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
| ----------------- | -------------------------------------------------------------------------- | -------- | -------------------------------- |
| _id | Eindeutige Analysedatensatz-ID | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| userId | ID des verbindenden Benutzers | Zeichenfolge | myContactID |
| sessionId | Sitzungs-ID | Zeichenfolge | 5A91D194FDE28B0011CE2425 |
| inputId | ID der Nachricht | Zeichenfolge | 5A91D194FDE28B0011CE2425 |
| stepLabel | Analytics-Schrittbezeichnung, die für die Entität (Knoten oder Intent) in Cognigy.AI | Zeichenfolge | Frage (2) |
| parentStep | ID des Schritts, der vor diesem Schritt ausgeführt wurde | Zeichenfolge | 5A91D194FDE28B0011CE2425 |
| Typ | Art des Unternehmens | Zeichenfolge | 'Knoten' oder 'Absicht' |
| entityReferenceId | Eindeutige ID für die Entität (Knoten-ID oder Intent-ID) | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| flowReferenceId | ID des Flows | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| flowName | Name des Flows, in dem der Schritt vorhanden ist | Zeichenfolge | Hauptstrom |
| Zeitstempel | Zeitstempel, wann der Schritt ausgeführt wurde | Datum/Uhrzeit | 2018-2-25T12:32:32.000Z |
| Projektname | Name des Cognigy.AI Projekts | Zeichenfolge | Projekt 1 |
| projectId | ID des Projekts | Zeichenfolge | 6067352c18887e471da4e392 |
| organisationId | Cognigy.AI Organisations-ID | Zeichenfolge | 5F8833DAE72B850AD2ED4D53 |
| snapshotId | ID des Snapshots | Zeichenfolge | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName | Name des Snapshots | Zeichenfolge | Bot-Version 2.2 |

### Sitzungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.41-blue.svg)] (.. /.. /.. /release-notes/4.41.md)

**Beschreibung**

Die Sessions-Auflistung enthält eine Liste aller Sitzungen, die stattgefunden haben. Das Hauptziel dieser Sammlung besteht darin, eine Liste der Analyseschritte bereitzustellen, die in einer bestimmten Sitzung stattgefunden haben, und die Reihenfolge, in der sie stattgefunden haben. Diese Informationen sind als kommagetrennte Liste in einer einzigen Spalte mit dem Namen "stepPath" enthalten. Jede Sitzung wird in diesem Analyseendpunkt als einzelne Werbebuchung verfügbar gemacht.

**Beispielabfrage**

=== "OData 2.3"
    
'https://odata-trial.cognigy.ai/v2.3/Sessions?apikey=YOURAPIKEY'

=== "OData 2.2"
    
"https://odata-trial.cognigy.ai/v2.2/Conversations?apikey=YOURAPIKEY"

=== "OData 2.0"
 
"https://odata-trial.cognigy.ai/v2.0/Conversations?apikey=YOURAPIKEY"

**Datentypen**

Beim Abrufen dieser Auflistung gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
| ------------------- | ------------------------------------------------ | -------- | ------------------------------------------------------------------------------ |
| _id | Eindeutige Analysedatensatz-ID | Zeichenfolge | 5A91D194FDE28B0011CE2423 |
| Ziele | Alle Ziele, die in der Sitzung erreicht wurden | Zeichenfolge | Tor 1, Tor 2 |
| stepPath | Kommagetrennte Liste der ausgeführten Schritte | Zeichenfolge | 9ac4f679-beae-4461-b9e3-43aece8b3430,f1e72fe3-f04b-48f5-b862-1e35ad253f18, ... |
| SchritteAnzahl | Anzahl der Schritte | Anzahl | Nr. 10 |
| ÜbergabeEskalationen | Häufigkeit, mit der die Sitzung eine Übergabe ausgelöst hat | Anzahl | 3 |
| startedAt | Zeitstempel, wann die erste Nachricht empfangen wurde | Datum/Uhrzeit | 2018-2-25T12:32:32.000Z |
| userId | ID des verbindenden Benutzers | Zeichenfolge | myContactID |
| sessionId | Sitzungs-ID | Zeichenfolge | 5A91D194FDE28B0011CE2425 |
| localeReferenceId | ID des Gebietsschemas | Zeichenfolge | en-DE |
| localeName | Name des Gebietsschemas | Zeichenfolge | Englisch |
| endpointReferenceId | ID des Endpunkts | Zeichenfolge | 5e33b160e6236da3aa54221461a53f04 |
| endpointName | Name des Endpunkts | Zeichenfolge | Webchat |
| Projektname | Name des Cognigy.AI Projekts | Zeichenfolge | Projekt 1 |
| projectId | ID des Projekts | Zeichenfolge | 6067352c18887e471da4e392 |
| organisationId | Cognigy.AI Organisations-ID | Zeichenfolge | 5F8833DAE72B850AD2ED4D53 |
| snapshotId | ID des Snapshots | Zeichenfolge | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName | Name des Snapshots | Zeichenfolge | Bot-Version 2.2 |

### LiveAgentEskalationen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.49-blue.svg)] (.. /.. /.. /release-notes/4.49.md)

**Beschreibung**

Die LiveAgentEscalations-Auflistung enthält Datensätze aus Live Agent-Eskalationen und enthält die zugehörigen Daten zu Übergaben an Live Agent.

**Beispielabfrage**

=== "OData 2.3"
    
"https://odata-trial.cognigy.ai/v2.3/LiveAgentEscalations?apikey=YOURAPIKEY"

**Datentypen**

Beim Abrufen dieser Auflistung gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
| ----------------- | --------------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| _id | Eindeutige Kennung für den Datensatz | Zeichenfolge | 649be849b7fd71d48b9bacc8 |
| organisationId | Kennung der Organisation, die dem Datensatz zugeordnet ist | Zeichenfolge | 5eb4a49d426cd3d05f2892a9 |
| projectId | Kennung des Projekts, das sich auf den Datensatz bezieht | Zeichenfolge | 6409b6c53c9687b5e78e6403 |
| sessionId | Kennung der Sitzung | Zeichenfolge | Sitzung-2A38246E-0395-49A5-876D-DD5133FD5418 |
| Zeitstempel | Datum und Uhrzeit der Erstellung des Datensatzes | Datum/Uhrzeit | 2023-06-28T07:59:04.628Z |
| localeName | Name des Gebietsschemas | Zeichenfolge | en |
| Status | Aktueller Stand des Datensatzes | Zeichenfolge | geöffnet |
| inboxId | Kennung des Posteingangs, der dem Datensatz zugeordnet ist | Zeichenfolge | 7983 |
| inboxName | Name des Posteingangs | Zeichenfolge | LA Chatbot-Standard |
| teamId | Kennung des Teams | Zeichenfolge | 8 |
| teamName | Name des Teams | Zeichenfolge | IT-Unterstützung |
| Etiketten | Liste der Labels, die dem Datensatz zugeordnet sind | Anordnung | [Hardware] |
| agentId | Kennung des Agenten | Zeichenfolge | 618cf7687614774ba028dcac |
| agentenname | Name des Agenten | Zeichenfolge | John Smith |
| Kontakt-ID | Kennung des Kontakts | Zeichenfolge | 649ba8450d5df5cadf8b75b8 |
| endpointName | Name des Endpunkts | Zeichenfolge | LA Chatbot |
| endpointType | Typ des Endpunkts | Zeichenfolge | webchat2 |
| endpointUrlToken | Token oder Bezeichner, der dem Endpunkt zugeordnet ist | Zeichenfolge | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb |
| Kanal | Kanal, über den der Datensatz empfangen wurde | Zeichenfolge | Admin-Webchat |
| localeReferenceId | Bezeichner für den spezifischen Gebietsschemaverweis | Zeichenfolge | 7eff993c-b801-4556-b111-1c319e8577cf |
| snapshotId | Kennung des Snapshots | Zeichenfolge | 63ff0cc47a466cab278fd19b |
| endpsnapshotName | Name des Snapshots | Zeichenfolge | Prod-Snapshot 26.7.23 |

## Integrationen<div class="divider"></div>### Excel

Wenn Sie eine Verbindung von Microsoft Excel 2016 aus herstellen, müssen Sie die PowerQuery-Funktion verwenden, die Sie unter "Daten > Abrufen und Transformieren > neuen Abfrage > aus anderen Quellen > aus OData-Feed" finden. Dadurch wird eine Verbindung zu unserem OData v4-Feed hergestellt.

### PowerBI

Befolgen Sie die [Anweisungen in der Power BI-Dokumentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).

### Tableau

!!! danger "Inkompatible OData-Version"
    Derzeit unterstützt Cognigy.AI OData-Version 4.0, was bedeutet, dass bestimmte Versionen von Tableau nicht kompatibel sind.

Die Anleitung zum Verbinden eines OData-Feeds in Tableau [hier](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).

### OData-Consumer-Ökosystem

Eine vollständige Liste der verfügbaren OData-Consumer-Optionen finden Sie [folgen Sie dem Link zu Consumern auf OData.org](https://www.odata.org/ecosystem/#consumers).

### Client-Bibliotheken in .NET, Java, JavaScript, C++ und anderen Plattformen

Eine vollständige Liste der verfügbaren OData-Bibliotheken finden Sie im aktuellen Verzeichnis der verfügbaren Bibliotheken auf OData.org](https://www.odata.org/libraries/)</collection></hostname></collection></hostname></collection></api-version></odata>