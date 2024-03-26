---
 Titel: "Cognigy Live Agent" 
 Schnecke: "vor 4.30" 
 ausgeblendet: false 
---
# Cognigy Live-Agent

## 4.29.0

**Veröffentlicht** 7. Juli 2022

### Verbesserungen

- Verbessert, indem Unterstützung hinzugefügt wurde, um sich den ersten URL-Pfad zu merken und nach erfolgreicher Anmeldung darauf umzuleiten

- Verbessert, indem die Auflösungsfunktion aus dem Stummschaltungsvorgang entfernt wurde. Bisher wurde jedes Mal, wenn ein Agent eine Konversation stummschaltete, die Konversation automatisch aufgelöst

### Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem die Vorschau von Konversationsnachrichten für adaptive Karten nicht korrekt angezeigt wurde

## 4.28.0

**Veröffentlicht** 23. Juni 2022

### Eigenschaften

- Fügen Sie das neue Supervisor-Dashboard im Abschnitt "Berichte" hinzu, einschließlich Informationen über die Verfügbarkeit und den Konversationsstatus der Agenten.

- Fügen Sie die neue Mitteilungszentrale hinzu, mit der Sie schnell auf die neuesten Benachrichtigungen zugreifen können.

### Verbesserungen

- Verbessert durch Hinzufügen der Möglichkeit, im Namen des Benutzers auf Konversationen zu antworten, wenn die Option zum Einfügen des Agenten aktiviert ist

## 4.27.0

**Veröffentlicht** 7. Juni 2022

### Verbesserungen

- Die Benutzeroberfläche für den Agentenassistenten wurde verbessert, indem die Nachrichten mit strukturiertem Inhalt und einfache Nachrichten auf 70 % ihrer ursprünglichen Größe verkleinert wurden, das Vorwärtspfeilsymbol geändert und Funktionen zum Weiterleiten der Agentenhilfenachricht hinzugefügt wurden, indem Sie auf den gesamten Nachrichtencontainer für die Agentenhilfe klicken. Außerdem wurde die Größe von nicht weiterleitenden Informationselementen wie Listen und Text mit Schaltflächen erhöht

- Verbessert durch die Möglichkeit, adaptive Kartennachrichten in Live Agent als strukturierten Inhalt und als Agentenunterstützungsnachrichten zu rendern, werden nicht weiterleitende adaptive Karten in Originalgröße angezeigt, so dass sie als Informationselemente dienen können

## 4.26.0

**Veröffentlicht** 24. Mai 2022

### Verbesserungen

- Verbessert durch Hinzufügen der Möglichkeit, doc/docx-Dateien von Agenten und Kontakten hochzuladen

- Verbessert durch die Aufnahme des Cognigy-Sitzungs-ID-Felds in Live Agent als Teil der Konversationsinformationen und auch als filterbares Feld für Konversationen

- Verbessert, indem Unterstützung für das Vertrauen in selbstsignierte CA-Zertifikate und Clientzertifikate in den Anforderungen an Cognigy.AI hinzugefügt wurde. Werfen Sie einen Blick auf den Abschnitt Helm Values SSL

- Verbessert, indem UI-Teile, die sich auf benutzerdefinierte Attribute beziehen, entfernt wurden, da sie nicht verwendet wurden

### Fehlerbehebungen

- Es wurde ein Fehler behoben, durch den der Agent seinen Online-Status nicht in der Dropdown-Liste "Kontaktaktionen" anzeigte.

- Es wurde ein Fehler behoben, bei dem sich das Website-Favicon nicht änderte und der Benachrichtigungston nicht abgespielt wurde, wenn neue Nachrichten empfangen wurden

- Es wurde ein Fehler behoben, bei dem sich Cognigy.AI mehrinstanzenfähige Benutzer nicht mit der OAuth-Anmeldung bei der richtigen Cognigy.AI Organisation anmelden konnten.

- Es wurde ein Fehler behoben, bei dem Agenten nicht über die Konversationszuweisung benachrichtigt wurden, wenn die Konversation zum ersten Mal erstellt und ihnen automatisch zugewiesen wurde.

## 4.25.0

**Veröffentlicht** 10. Mai 2022

### Verbesserungen

- Verbessert durch Behebung der Sicherheitslücke CVE-2022-28391, die den OData-Dienst betrifft
- Verbessert durch Hinzufügen eines optionalen Antiviren-Scans mit ClamAV beim Hochladen von Dateien
- Verbessert, indem der Abschnitt "Vorherige Konversationen" zur Konversationsansicht hinzugefügt wurde, damit Agenten den Rest der Konversationen mit demselben Kontakt sehen können

## 4.24.0

**Veröffentlicht** 2. Mai 2022

### Verbesserungen

- Verbessert, indem das Styling des Kontaktinfo-Abschnitts für die Anzeige Cognigy.AI Kontaktprofilfelder verbessert wurde
- Verbessert, indem die Farbe der Agentennachrichten in ein etwas helleres Blau geändert wurde, um sie von den Cognigy.AI Bot-Nachrichten zu unterscheiden
- Verbessert durch das Rendern Cognigy.AI Kontaktprofildaten in der Konversationsansicht unter dem Abschnitt "Kontaktinformationen".
  - Ein neuer Wert namens "COGNIGY_AI_API_BASE_URL_WITH_PROTOCOL" muss der Datei Helm values.yaml hinzugefügt werden, damit es funktioniert. [Mehr Informationen hier] ({{config.site_url}}live-agent/installation/helm-values/helm-values/#urls).
- Verbessert, indem die Funktionalität im Zusammenhang mit dem Hinzufügen von Agenten entfernt wurde, da jetzt Cognigy.AI die Benutzerverwaltung stattfindet
- Verbessert, indem die Möglichkeit entfernt wurde, gelöste Konversationen auf UI- und API-Ebene erneut zu öffnen
- Verbessert durch Hinzufügen des Cognigy-Logos für Bot-Nachrichten
- Möglichkeit, mehrere Anhänge über das Agenten-Dashboard zu senden

## 4.23.0

### Verbesserungen

- Verbessert durch ein korrektes Design von OAuth-Fehlerseiten mit Links zum Erhalt von Support in der Live Agent-Dokumentation
- Verbessert durch Erweiterung Cognigy.AI OAuth-Handler-Logik, um Benutzerfelder während der Anmeldung zu aktualisieren, wenn sie in Cognigy.AI geändert werden, z. B. der Benutzername
- Verbessert durch das Ausblenden der Posteingangseinstellung, die Nachrichten nach der Auflösung einer Konversation zulässt, da sie nicht wie erwartet funktioniert hat
- Verbessert, indem der Konversationsabschnitt "vorherige Konversationen" ausgeblendet wurde, da er nicht wie erwartet funktionierte