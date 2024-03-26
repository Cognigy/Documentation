---
Titel: "Datenschutz und Analytik" 
Slug: "Datenschutz und Analytik" 
Beschreibung: "Der Abschnitt "Datenschutz und Analyse" in Cognigy Endpoints bietet Kontrolle über Analysen und Systemprotokollierung. Es ermöglicht Ihnen, die Handhabung der Erstellung und Speicherung von Kontaktdaten, die Erfassung von Analysedaten und die Maskierung sensibler Daten anzupassen, um einen umfassenden Datenschutz zu gewährleisten."
ausgeblendet: false 
---

# Datenschutz & Analytik

Im Abschnitt **Datenschutz & Analyse** dreht sich alles um Analysen und Systemprotokollierung. Hier können Sie umschalten, ob Sie Daten über Kontakte erstellen und speichern möchten und ob Sie Analysedaten für den Endpunkt sammeln möchten. Wenn Sie sich für das Sammeln von Daten entscheiden, können Sie auch konfigurieren, ob Sie vertrauliche Daten maskieren oder nicht.

## Kontaktprofil

Diese Einstellung ermöglicht die Erfassung einzelner Kontaktprofile, um persistente Benutzerdaten sitzungsübergreifend zu speichern.

## Sammeln von Analysen

Aktivieren Sie die Erfassung von Analytics-Daten für diesen Endpunkt.

### Umfangreiche Datennutzlasten in Analytics speichern

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /release-notes/4.60.md)

Diese Einstellung gilt nur für den Endpunkt [Voice Gateway](cognigy-vg.md)
und kann aktiviert werden, wenn der Schalter [Analyse erfassen] (#collect-Analyse) aktiviert ist.

Wenn die Einstellung aktiviert ist, werden alle Informationen aus dem [Voice Gateway-Ereignis](.. /.. /voicegateway/references/events/overview.md) werden in der Analytics-Datenbank gespeichert und sind über OData oder den Transkript-Explorer in Insights verfügbar.

Standardmäßig ist die Einstellung deaktiviert, und die folgenden Felder werden nicht gespeichert:

- 'trace_id'
- 'account_sid'
- 'application_sid'
- 'call_id'
- 'sip_status'
- 'sip_reason'
- 'originating_sip_ip'
- 'local_sip_address'
- 'service_provider_sid'
- 'fs_sip_address'
- 'api_base_url'
- 'originating_sip_trunk_name'

## IP-Adresse maskieren

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.53-blue.svg)] (.. /.. /release-notes/4.53.md)

Maskiert IP-Adressen im Analyse- und Eingabeobjekt, wenn Sie "{{ "{{ input.ip }}" }}' oder "{{ "{{ ci.ip }}" }}' im Say-Knoten oder "ci.ip" oder "input.ip" im Codeknoten verwenden. Wenn die Benutzereingabe eine IP-Adresse und den Text enthält, maskiert Cognigy nur die IP-Adresse und lässt den Rest unmaskiert. Wenn diese Option aktiviert ist, wird die "IP" von Benutzereingaben sowohl in den Analysedaten als auch im Eingabeobjekt durch Sternchen ersetzt.
Die IP-Adressen sind nicht über [Cognigy OData Analytics Endpoint](.. /tools/analytics/odata-analytics-endpoint.md) und [Insights](.. /.. /insights/cognigy-insights.md).

## Sensible Analysen maskieren

Maskiert vertrauliche Informationen in Analysen. Insbesondere werden "inputText", "inputData", "userLanguageText" und die "IP" von Benutzereingaben in den Analysedaten durch Sternchen ersetzt. Wenn diese Funktion innerhalb eines Endpunkts verwendet wird, wird der [Intent Trainer](.. /resources/tweak/intent-trainer.md) kann nicht verwendet werden, da Cognigy den Originaltext des Benutzers nicht speichert. Die einzelnen Datensätze sind auch nicht über [Cognigy OData Analytics Endpoint](.. /tools/analytics/odata-analytics-endpoint.md).

### Bestimmte Felder ignorieren

Um die Protokollierung bestimmter Analysefelder zu deaktivieren, kann man innerhalb eines [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) mit der Variablen 'analyticsdata' darauf zugreifen und sie manipulieren:

'''js
analyticsdata.text = "überschriebener Text";
analyticsdata.data.token löschen;
'''

In diesem Beispiel wird das Token aus den Analysedaten gelöscht, bevor es in die Datenbank geschrieben wird.

## Maskensensitive Protokollierung

Maskiert potenziell vertrauliche Informationen in Systemprotokollen, die von der zugrunde liegenden Infrastruktur erstellt werden. Dazu gehört auch die Protokollseite in unserer Benutzeroberfläche. Hier ist ein Beispiel für ein Protokoll, das erstellt wird, wenn eine neue Nachricht in unserem System eintrifft:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/5c5ee41-log.png" width="100%" />
</figure>

Der Text kann den Namen des Benutzers, seinen Standort oder eine Kreditkartennummer enthalten. Sobald die Maskierung aktiviert wurde, werden alle Felder, die Informationen vom Benutzer enthalten könnten, ausgeblendet und ersetzt, wie Sie in der folgenden Abbildung sehen können:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/53c0057-hidden-log.png" width="100%" />
</figure>

Wir ersetzen die folgenden Eigenschaften:
- userId
-Text
-Daten

## Konversationen sammeln

Definiert, ob Konversationsverläufe in Kontaktprofilen für Endbenutzer gespeichert werden sollen.

## Externe Analysedienste

Sie können Ihren Endpunkt mit zusätzlichen Analyseanbietern verbinden. Ein Konto und ein API-Schlüssel bei einem externen Analysedienstleister sind erforderlich. Hinweis: Bei der Verwendung von API-Kontingentgrenzen für externe Analytics-Anbieter können zusätzliche Bedingungen und/oder Gebühren anfallen.

### Verfügbare externe Analysedienste:
##### Chatbase
Wir haben eine Integration mit Chatbase. Um weitere Informationen über Chatbase zu erhalten, folgen Sie [diesem](http://www.chatbase.com) Link.

##### Dashbot
Cognigy.AI bietet eine umfangreiche, kanalspezifische Integration mit [Dashbot](https://www.dashbot.io).
Auf unserer [HelpCenter-Dashbot-Seite](https://support.cognigy.com/hc/en-us/articles/360016311379) finden Sie eine detaillierte Beschreibung, wie Sie Ihre Dashbot-Integration einrichten können.