---
 Titel: "OData-Endpunkt des Live-Agenten" 
 Slug: "Live-Agent-OData-Endpunkt" 
 ausgeblendet: false 
---
# OData Analytics-Endpunkt

Live Agent macht einen OData v4-Analyseendpunkt verfügbar, um Analysedatensätze abzurufen. [OData] (https://www.odata.org/), der beste Weg zu REST, ist ein leistungsstarkes API-Framework. Mit den OData-Endpunkten können Sie die relevantesten Datenmodelle mithilfe von GET-Anforderungen aus Live Agent abrufen. Es deckt alle Ihre Anforderungen an Unternehmensanalysen ab, um fein abgestufte Abfragen in Ihren Tabellenkalkulationen durchzuführen oder umfangreiche Dashboards für Ihre Bots mit Ihrem bevorzugten Datenvisualisierungstool zu erstellen.

Beachten Sie, dass der Live Agent-OData-Endpunkt nur "GET"-Anforderungen unterstützt und keine anderen Anforderungstypen wie "PATCH", "DELETE" oder "POST".<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019467199-Cognigy-Sessions-Analytics-OData" target="_blank">Technisches Video "Analytics &amp; OData"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>## Verwendung und Authentifizierung<div class="divider"></div>Um eine Verbindung mit dem OData-Endpunkt herzustellen, rufen Sie ein Live Agent-Zugriffstoken ab:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie im Menü auf der linken Seite zu **Profileinstellungen**.
3. Kopieren Sie im Abschnitt **Zugriffstoken** das vorhandene Token.
4. Fügen Sie dieses Token in Ihre OData-Anforderung ein.

Eine OData-URL setzt sich wie folgt aus dem Dienststamm, der API-Version, dem Dienstpfad, der Datenerfassung und dem Live Agent-Zugriffstokenparameter zusammen:

'''
    GET //<api-version>odata/<OData data="" model="">?<odata query=""> HTTP/1.1
    Gastgeber: <odata domain="">
    Autorisierung: Inhaber <Live agent="" access="" token="">
'''

Die Authentifizierung kann auch mit einem Abfrageparameter wie dem folgenden erfolgen:

''' 
<api-version>odata/<OData data="" model="">?<odata query="">&apikey=<Live agent="" access="" token="">
'''

!!! Hinweis "OData-Domänenname"
    Der OData-Endpunkt ist in einer anderen Domäne als Ihrer Cognigy-Benutzeroberflächendomäne verfügbar. Beispiel: [https://odata-liveagent-trial.cognigy.ai/v1.0/odata](https://odata-dev-live-agent.cognigy.ai/v1.0/odata).

Auf unserem Testserver lautet die OData-Endpunkt-URL für die Analytics-Eingabesammlung beispielsweise "https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Message?". Ersetzen Sie bei On-Premise-Installationen den Domänennamen "odata-trial.cognigy.ai" durch den Domänennamen, der für Ihre lokale Installation konfiguriert ist.

!!! Hinweis "Excel/Power BI"
    Wenn Sie PowerBI oder Excel verwenden, werden Sie möglicherweise aufgefordert, sich zu authentifizieren. Wählen Sie einfach "Anonyme Authentifizierung" und übergeben Sie das Live Agent-Zugriffstoken als Abfrageparameter '&apikey=<Live agent="" access-token="">'

## Endpunkt-Version<div class="divider"></div>### Ausführung 1.0
Die aktuelle Version des OData-Endpunkts ist "v1.0". Diese Endpoint-Version ist ab LiveAgent Version 1.0.0 verfügbar. In dieser Version stehen die folgenden OData-Sammlungen zur Verfügung:

- [Nachricht](#message) ('/Nachricht')
- [Konversation](#conversation) ('/Konversation')
- [Benutzer](#user) ('/Benutzer')
- [Beschriftung](#label) ('/Bezeichnung')
- [Posteingang](#inbox) ('/Posteingang')

Um alle verfügbaren OData-Modelle anzuzeigen, können Sie den folgenden Endpunkt pingen:
'https://<hostname>/v1.0/OData/'

Die URL für den Zugriff auf den OData-Endpunkt der Version 1.0 lautet wie folgt:
'https://<hostname>/v1.0/odata/<collection>'

## Abfragen<div class="divider"></div>Der Endpunkt unterstützt die folgenden OData-Abfragesprachenoperatoren:

- $filter
- $select
- $skip
- $top
- $orderby
- $expand

### Beispiel-Abfragen

'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation(1)?$select=inbox_id,account_id&apikey=<access-token>'
Geben Sie die Spalten inbox_id und account_id für die Konversation mit id=1 zurück.

'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&apikey=<access-token>'
Geben Sie die Spalten id und account_id für alle Unterhaltungen zurück.

'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2021-11-23T00:00:00'&apikey=<access-token>'
Geben Sie die Spalten-ID und account_id für alle Unterhaltungen zurück, gefiltert nach der created_at Spalte, die kleiner oder gleich "2021-11-23T00:00:00" ist.

## Referenz-Dokumentation

Eine vollständige Referenzdokumentation finden Sie in der [umfangreichen Sammlung von Ressourcen unter OData.org](https://www.odata.org/) und der [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Datenschutz & Analytik<div class="divider"></div>Nur Benutzer mit einer Administratorrolle in Live Agent können OData-Modelle abfragen.

## OData-Sammlungen für Live-Agenten<div class="divider"></div>In diesem Abschnitt werden die Datentypen beschrieben, die in den OData-Auflistungen vorhanden sind, die vom OData-Endpunkt abgerufen werden können. Folgende Kollektionen stehen zur Verfügung:

- [Nachricht](#message)
- [Gespräch](#conversation)
- [Benutzer](#user)
- [Beschriftung](#label)
- [Posteingang](#inbox)

### Nachricht

**Beschreibung:**

Eine Nachricht ist eine einzelne Kommunikation zwischen einem Agenten und einem Client.
Jedes Mal, wenn ein Agent/Benutzer die Eingabetaste drückt, wird dieser Text als neue Nachrichtenzeile geschrieben.
In der Tabelle "Nachrichten" finden Sie alle Nachrichten aus allen Posteingängen und Unterhaltungen.

**Beispielabfrage:**

* V1.0-Endpunkt: 'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Message?'.

**Datentypen:**

Beim Abrufen dieses Datenmodells gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------|
| Kennung | Eindeutige Nachrichten-ID | Anzahl | Nr. 1 |
| Inhalt | Die gesendete Nachricht | Zeichenfolge | Willkommen bei Live Agent |
| account_id | Konto-ID | Anzahl | Nr. 1 |
| inbox_id | Posteingangs-ID | Anzahl | Nr. 1 |
| conversation_id | Konversations-ID | Anzahl | Nr. 1 |
| message_type | Art der Nachricht { eingehend: 0, ausgehend: 1, Aktivität: 2, Vorlage: 3 } | Anzahl | 3 |
| created_at | Erstellungsdatum der Nachricht | Datum | 2021-12-11 12:41:26.745 |
| updated_at | Aktualisierungsdatum der Nachricht | Datum | 2021-12-11 12:41:26.745 |
| privat | Sichtbarkeit von Nachrichten | Boolescher Wert | falsch |
| Status | Nachrichtenstatus { gesendet: 0, zugestellt: 1, gelesen: 2, fehlgeschlagen: 3 } | Anzahl | 3 |
| source_id | Nachrichtenquelle | Zeichenfolge | Standardeinstellung |
| content_type | Text: 0, input_text: 1, input_textarea: 2, input_email: 3, input_select: 4, Karten: 5, Form: 6, Artikel: 7, incoming_email: 8, input_csat: 9, Typologie: 2016, request_file_upload: 2017 | Anzahl | 0 |
| content_attributes | JSON-Attribut-/Wertdefinitionen | JSON | "{\"items\":[{\"title\":\"Acme Hardware\"]}" |
| sender_type | Enthält Informationen darüber, von wem die Nachricht stammt | Zeichenfolge | cognigy |
| sender_id | Eindeutige Absender-ID | Anzahl | Nr. 1 |
| external_source_ids | Externe Quell-IDs | JSON | "{\"items\":[{\"title\":\"Acme Hardware\"]}" |

### Konversation

**Beschreibung:**

Eine Konversation ist der Kommunikationskanal, der zwischen einem Agenten und einem Kunden geöffnet wird.

**Beispielabfrage:**

* V1.0-Endpunkt: 'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?'.

**Datentypen:**

Beim Abrufen dieses Datenmodells gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
|-----------------------|-----------------------------------------------------------------------|--------|----------------------------------------|
| Kennung | Eindeutige Konversations-ID | Anzahl | Nr. 1 |
| account_id | Konto-ID (zu der die Konversation gehört) | Anzahl | Nr. 1 |
| inbox_id | Posteingangs-ID (wohin die Konversation gehört) | Anzahl | Nr. 1 |
| Status | Konversationsstatus: { offen: 0, gelöst: 1, ausstehend: 2, schlummernd: 3 } | Anzahl | Nr. 1 |
| assignee_id | Agenten-ID (der Konversation zugewiesen) | Anzahl | Nr. 1 |
| created_at | Erstellungsdatum der Konversation | Datum | 2021-12-11 12:41:26.745 |
| updated_at | Aktualisiertes Datum der Konversation | Datum | 2021-12-11 12:41:26.745 |
| contact_id | Eindeutige Identifizierung des Kunden.                                         | Anzahl | 3 |
| display_id | ID anzeigen | Anzahl | 3 |
| contact_last_seen_at | Kontakt-/Kundendatum Zuletzt gesehen | Datum | 2021-12-11 12:41:26.745 |
| agent_last_seen_at | Datum des letzten Sehens des Agenten | Datum | 2021-12-11 12:41:26.745 |
| additional_attributes | JSON, das alle zusätzlichen Attribute enthält.                            | JSON | {}                                     |
| contact_inbox_id | Kontakt-Posteingangs-ID | Anzahl | Nr. 1 |
| UUID | Eindeutige Kennung | Zeichenfolge | 89F20666-E17D-427C-9283-268BA7870283 |
| Kennung | Kennung | Zeichenfolge | "89F20666-E17D-427C-9283-268BA7870283" |
| last_activity_at | Datum der letzten Aktivität.                                                   | Datum | 2021-12-11 12:41:26.745 |
| team_id | Team-ID (zur Konversation gehörend) | Anzahl | Nr. 1 |
| campaign_id | Kampagnen-ID | Anzahl | Nr. 1 |
| snoozed_until | Schlummerndes Datumsende | Datum | 2021-12-11 12:41:26.745 |
| custom_attributes | Zusätzliches Add-on-Attribut | JSON | "{}"                                   |
| assignee_last_seen_at | Datum des letzten Sehens des Beauftragten | Datum | 2021-12-11 12:41:26.745 |

### Posteingang

**Beschreibung:**

Der Posteingang ist der Ort, an dem alle Konversationen von einer bestimmten Gruppe von Agenten abgelegt werden.

**Beispielabfrage:**

* V1.0-Endpunkt: 'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Inbox?'.

**Datentypen:**

Beim Abrufen dieses Datenmodells gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
|--------------------------|-----------------------------------------------------------------------------|---------|-------------------------------------------|
| Kennung | Eindeutige Datensatz-ID | Anzahl | Nr. 1 |
| channel_id | Kanal-ID | Anzahl | Nr. 1 |
| Bezeichnung: | Name des Posteingangs | Zeichenfolge | Willkommen bei Live Agent |
| account_id | Konto-ID | Anzahl | Nr. 1 |
| created_at | Erstellungsdatum des Posteingangs | Datum | 2021-12-11 12:41:26.745 |
| updated_at | Aktualisierungsdatum des Posteingangs | Datum | 2021-12-11 12:41:26.745 |
| channel_type | Kommunikationskanal, z.B. API, webWidget, Facebook | Zeichenfolge | "Kanal:WebWidget" |
| enable_auto_assignment | Funktion, die es dem Agenten ermöglicht, Konversationen automatisch zuzuweisen | Boolescher Wert | Wahr |
| greeting_enabled | Funktion, mit der eine automatische Begrüßung gesendet werden kann | Boolescher Wert | falsch |
| greeting_message | Automatische Begrüßungsnachricht | Zeichenfolge | "Hallo!"                               |
| email_address | E-Mail-Adresse | Zeichenfolge | Standardeinstellung |
| working_hours_enabled | Funktion, die einen Arbeitszeitplan ermöglicht | Boolescher Wert | Wahr |
| out_of_office_enabled | Standardmeldung, die außerhalb der Bürozeiten angezeigt wird | Zeichenfolge | "Außerhalb der Bürozeiten, versuchen Sie es morgen noch einmal" |
| Zeitzone | Zeitzone des Posteingangs | Zeichenfolge | "UTC" |
| enable_email_collect | Ermöglicht die E-Mail-Sammlung | Boolescher Wert | Wahr |
| csat_survey_enabled | Ermöglicht CSAT-Umfragen | Boolescher Wert | Wahr |
| cognigy_organization_id | Cognigy-Konto-ID | Anzahl | Nr. 1 |
| cognigy_project_id | Cognigy-Projekt-ID | Anzahl | Nr. 1 |
| enable_auto_reassignment | Ermöglicht die Neuzuweisung von Konversationen | Boolescher Wert | Wahr |
| conversation_show_all | Ermöglicht es, alle Konversationen im Posteingang zu sehen, auch wenn sie nicht Ihnen gehören | Boolescher Wert | Wahr |

### Beschriftung

**Beschreibung:**

Labels werden verwendet, um verschiedene Konversationen zu markieren, zu identifizieren oder zu gruppieren.

**Beispielabfrage:**

* V1.0-Endpunkt: 'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Label?'.

**Datentypen:**

Beim Abrufen dieses Datenmodells gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
|-----------------|---------------------------------------------|---------|-----------------------------|
| Kennung | Eindeutige Etiketten-ID | Anzahl | Nr. 1 |
| Titel | Titel des Etiketts | Zeichenfolge | label-complain" |
| Beschreibung | Beschreibung des Etiketts | Zeichenfolge | "Etiketten für Beschwerden" |
| Farbe | Farbe des Etiketts | Zeichenfolge | "Fäulnis" |
| show_on_sidebar | Ermöglicht die Anzeige des Labels in der Seitenleiste | Boolescher Wert | Wahr |
| account_id | Konto, zu dem das Etikett gehört | Anzahl | 3 |
| created_at | Erstellungsdatum des Etiketts | Datum | 2021-12-11 12:41:26.745 |
| updated_at | Aktualisierungsdatum des Etiketts | Datum | 2021-12-11 12:41:26.745 |

### Benutzer

**Beschreibung:**

Dieses Datenmodell enthält Informationen zu den Live Agent-Benutzern, z. B. einem Agenten.

**Beispielabfrage:**

* V1.0 Endpunkt: 'https://odata-liveagent-trial.cognigy.ai/v1.0/odata/User?'.

**Datentypen:**

Beim Abrufen dieses Datenmodells gibt der Endpunkt die folgenden Felder zurück:

| Feldname | Beschreibung | Typ | Beispiel |
|------------------------|------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------|
| Kennung | Eindeutige Datensatz-ID | Anzahl | Nr. 1 |
| Anbieter | z.B. E-Mail | Zeichenfolge | "E-Mail" |
| UID | Bereitgestellte eindeutige Kennung | Zeichenfolge | "some-email@cognigy.com" |
| encrypted_password | Verschlüsseltes Passwort | Zeichenfolge | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38hjovasd" |
| reset_password_token | Token zum Zurücksetzen des Kennworts | Zeichenfolge | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38rjsvaru" |
| reset_password_send_at | Datum, an dem ein Zurücksetzen des Kennworts gesendet wurde | Datum | 2021-12-11 12:41:26.745 |
| remember_created_at | Erstellungsdatum merken | Datum | 2021-12-11 12:41:26.745 |
| sign_in_count | Häufigkeit, mit der sich der Benutzer angemeldet hat | Anzahl | 3 |
| current_sign_in_at | Aktuelles Anmeldedatum | Datum | 2021-12-11 12:41:26.745 |
| last_sign_in_at | Datum der letzten Anmeldung | Datum | 2021-12-11 12:41:26.745 |
| current_sign_in_ip | Aktuelle IP-Adresse für die Anmeldung | Zeichenfolge | "120.0.0.1" |
| last_sign_in_ip | Aktuelle IP-Adresse für die Anmeldung | Zeichenfolge | "120.0.0.1" |
| confirmation_token | Bestätigungs-Token | Zeichenfolge | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38hjovasd" |
| confirmed_at | Bestätigungstoken am Datum bestätigt | Datum | 2021-12-11 12:41:26.745 |
| confirmation_sent_at | Bestätigungstoken, das an Datum gesendet wurde | Datum | 2021-12-11 12:41:26.745 |
| unconfirmed_email | Unbestätigte E-Mail-Adresse | Zeichenfolge | "unconfirmed@cognigy.com" |
| Bezeichnung: | Benutzername | Zeichenfolge | "Francisco" |
| display_name | Anzeigename des Benutzers | Zeichenfolge | "Paco" |
| E-Mail | E-Mail-Adresse des Benutzers | Zeichenfolge | "fran@cognigy.com" |
| Marke | Benutzer-Token | JSON | ""{\"MN4iNP38tvwe5wer7pvpnAQ\":{\"token\":\"$2a$10$iA7Si0sBV9lMkO2mqvwiD.L90.uTCl27WQbEo/Kc0W\",\"Ablauf\":1644763988}}"" |
| created_at | Erstellungsdatum des Benutzers | Datum | 2021-12-11 12:41:26.745 |
| updated_at | Aktualisierungsdatum des Benutzers | Datum | 2021-12-11 12:41:26.745 |
| pubsub_tokens | Benutzer-Publish/Subscribe-Token | Zeichenfolge | "MiVxY3FKry6oklambiuqL72nn" |
| Verfügbarkeit | Dies stellt die Verfügbarkeit des Benutzers dar. | Anzahl | Nr. 1 |
| ui_settings | UI-Einstellungen für Benutzer | JSON | "{"is_conv_actions_open": wahr, "is_contact_sidebar_open": wahr}" |
| custom_attributes | Benutzerdefinierte Attribute | JSON | "{}"                                                                                                                      |
| cognigy_user_id | Cognigy-Benutzer-ID | Zeichenfolge | "610bEOk617uPiXy9L3HOq8nn6kdjJK2" |

## Integrationen<div class="divider"></div>### Excel

Wenn Sie eine Verbindung von Microsoft Excel 2016 aus herstellen, müssen Sie die PowerQuery-Funktion verwenden, die Sie unter "Daten > Abrufen und Transformieren > neuen Abfrage > aus anderen Quellen > aus OData-Feed" finden. Dadurch wird eine Verbindung zu unserem OData v4-Feed hergestellt.

### Power BI

Befolgen Sie die [Anweisungen in der Power BI-Dokumentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).

### Tableau

!!! danger "Inkompatible OData-Version"
    Cognigy.AI unterstützt OData-Version 4.0, was bedeutet, dass bestimmte Versionen von Tableau nicht kompatibel sind.

Anweisungen zum Verbinden eines OData-Feeds finden Sie in der [Tableau-Dokumentation](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).

## OData-Consumer-Ökosystem

Eine vollständige Liste der verfügbaren OData-Consumer-Optionen finden Sie unter [folgen Sie dem Link zu Consumern auf OData.org](https://www.odata.org/ecosystem/#consumers).

## Clientbibliotheken in .NET, Java, JavaScript, C++ und anderen Plattformen

Eine vollständige Liste der verfügbaren OData-Bibliotheken finden Sie [im neuesten Verzeichnis der verfügbaren Bibliotheken auf OData.org](https://www.odata.org/libraries/).</access-token></access-token></access-token></collection></hostname></hostname></Live></Live></odata></OData></api-version></Live></odata></odata></OData></api-version>