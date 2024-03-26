---
 Titel: "Quoten und Beschränkungen" 
 Slug: "Einschränkungen" 
 ausgeblendet: false 
---

# Quoten und Einschränkungen

Diese Seite enthält Standardkontingente und -beschränkungen, die für neue Cognigy.AI-Installationen gelten. 

!!! Hinweis "Ändern von Werten für verwaltete Cognigy.AI Umgebungen"
    Wenn Sie eine Änderung für Ihre verwaltete Cognigy.AI Umgebung anfordern möchten, senden Sie eine Supportanfrage mit dieser Vorlage: 
    ''''
    Hallo Cognigy Support, 

Ich möchte das Kontingent/Limit "<Description>" auf <x> Wert erhöhen.  
    Wir brauchen das, weil <short explanation="" of="" your="" use="" case="">. 
 
Alles Gute 
    Ihr Name 
    ''''
    Änderungsanträge können nur für dedizierte SaaS-Lösungen von Cognigy überprüft werden. Wenn Änderungen an Cognigy Shared SaaS vorgenommen werden, wirkt sich die Umgebung auf alle Kunden in Bezug auf Funktionalität und Leistung aus.
Alle **Abweichungen** von den Standardwerten für unsere Test- und App-Umgebungen sind in der folgenden Tabelle ebenfalls **fett** angegeben.

| Beschreibung | Standardwert | Testversion | App |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------|------------|------------|
| **Netzwerk** |                                 |            |            |
| Begrenzung der Rate | 1000 Anfragen pro 5 Minuten[^*] |            |            |
| **Datenbank- und HTTP-Knotenaufrufe** |                                 |            |            |
| Maximales Datenbankabfrageergebnis von DB-Flow-Knoten | 500 kB |            |            |
| Maximale Größe von [Context](tools/interaction-panel/context.md) | 65 kB |            | **1,5 MB** |
| Maximale HTTP-Nutzlastgröße für HTTP-Request-Flow-Knoten | 65 kB |            |            |
| Maximale HTTP-Antwortgröße für HTTP-Request-Flow-Knoten | 524 kB | **2,6 MB** | **1,5 MB** |
| Zeitüberschreitung des HTTP-Request-Flow-Knotens | 8 s |            | **15 s** |
| Maximale JSON-kodierte Nutzlastgröße für Anfragen an unsere RESTful-API | 60 kB |            |            |
| Minimaler HTTP-Textkörper (wird in CSV verwendet) | 100 kB |            |            |
| Maximale textcodierte (rohe) Nutzlastgröße für Anfragen an unsere RESTful-API (z. B. zum Hochladen von CSV-Dateien) | 2 MB |            |            |
| **NLU** |                                 |            |            |
| Maximale Anzahl von Beispielsätzen pro Intent in Flows | 200 |            |            |
| Maximale Gesamtanzahl von Beispielsätzen in Flows, einschließlich angehängter Flow-Beispielsätze | 10.000 | **15.000** |            |
| Maximale Gesamtanzahl von Intents in Flows, einschließlich angehängter Flow-Intents | 2.500 | **10.000** |            |
| Maximale Zeit, die eine Intent-Training-Aufgabe ausgeführt werden darf | 10 m |            |            |
| **Cognigy-Funktionen** |                                 |            |            |
| Maximale Anzahl ausgehender HTTP-Anforderungen in einer einzelnen Cognigy Function-Instanz | Nr. 5 |            |            | 
| Maximale HTTP-Antwortgröße in Cognigy Functions | 1 MB |            |            |
| Maximale Zeit, die eine Cognigy-Funktion ausgeführt werden kann | 15 m |            |            |
| Maximale Zeit, für die Daten über Cognigy Function-Instanzen gespeichert werden | 30 Tage |            |            |
| Maximale Anzahl aktiver/laufender Cognigy-Funktionen pro Organisation | Nr. 10 |            |            |
| Maximale Größe des Parameterobjekts, mit dem die Funktionsinstanz gestartet werden kann | 130 kB |            |            |
| **Schnappschüsse** |                                 |            |            |
| Maximale Größe eines gepackten Snapshots | 256 MB |            |            |
| Maximale Anzahl von Snapshots pro Agent | Nr. 10 |            |            |
| Lebensdauer eines herunterladbaren Snapshots, bis Sie den Download neu erstellen müssen | 1 Tag |            |            |
| **Pakete** |                                 |            |            |
| Maximale Größe eines Cognigy-Pakets | 256 MB |            |            |
| **Gebietsschemata** |                                 |            |            |
| Maximale Anzahl von Gebietsschemata pro Agent | Nr. 10 |            |            |
| **Erweiterungen** |                                 |            |            |
| Erweiterungs-Aktionen | Nr. 10 |            |            |
| Maximale Ausführungszeit für Flow-Knoten aus Erweiterungen | 20 Sek. |            |            |
| Maximale Größe eines einzelnen Erweiterungspakets | 128 MB |            |            |
| Maximale Größe für den dateisystembasierten Cache zum Ausführen von Erweiterungen | 512 MB |            |            |
| Maximale Anzahl von HTTP-Anfragen, die ein Optionsresolver senden kann | Nr. 5 |            |            |
| Maximale HTTP-Antwortgröße in einem Options-Resolver | 1 MB |            |            |
| Maximale Zeit, die ein Options-Resolver ausgeführt werden kann | 5 s (max. HTTP-Aufrufe * 1 s) |            |            |
| **Ausführung und Betrieb** |                                 |            |            |
| Maximale Häufigkeit, mit der ein Flow denselben Pfad für eine einzelne Benutzernachricht ausführen kann, bevor der "Endlosschleifenschutz" ausgelöst wird | 4 |            |            |
| Maximale Anzahl von Rückgängig-/Wiederholungsvorgängen, die pro Benutzer im Flow-Editor | Nr. 5 |            |            |
| **Transformatoren** |                                 |            |            |
| Maximale Anzahl von HTTP-Anfragen, die von einem Cognigy Transformer gesendet werden können | Nr. 1 | **2** |            |
| Maximale Zeitspanne, die ein Cognigy Transformer laufen kann, bevor er gestoppt wird | 5 Sek. |            |            |
| **SMTP-Knoten** |                                 |            |            |
| Maximale Häufigkeit, mit der das System versucht, eine ausgehende E-Mail zu senden | 3 |            |            |
| Maximale Größe eines E-Mail-Anhangs | 10 MB |            |            |
| **Code-Knoten** |                                 |            |            |
| Maximale Codeausführungszeit | 1 s |            |            |
| Maximale Anzahl von Zeichen im Code-Editor | 200.000 |            |            |

[^*]: Das Ratenlimit von 1000 Anfragen pro 5 Minuten von einer einzelnen IP-Adresse gilt nur für gemeinsam genutzte SaaS-Umgebungen.

## Aufbewahrung von Aufzeichnungen

!!! Warnung
    Funktionen wie [OData](tools/analytics/odata-analytics-endpoint.md) und [Insights](.. /insights/cognigy-insights.md) basieren auf Datensätzen, die Sie im Abschnitt **Daten** unten finden.

!!! Anmerkung
    Wenn Sie über eine lokale Cognigy.AI Umgebung verfügen, können Sie TTL-Werte systemweit über die Konfigurationszuordnung und/oder organisationsweit über [Management UI](tools/management-ui.md) festlegen

| Beschreibung | Standardwert |
|------------------------------------------------------------------------------------------|---------------|
| **Protokolle** |               |
| Maximale Zeit, bis eine Log-Line auf der Log-Seite des Produkts entfernt wird | 1 Tag |
| **Sitzungen** |               |
| Maximale Zeit, bis relevante Informationen zur Flow-Ausführungssitzung entfernt werden | 30 Tage |
| **Daten** |               |
| Maximale Zeit, bis ein Kontaktprofil, das nicht gelesen oder geändert wurde, entfernt wird | 30 Tage |
| Maximale Zeit, bis Gesprächsprotokolle entfernt werden | 30 Tage |
| **Intent-Trainer-Aufzeichnungen** |               |
| Maximale Zeit, in der Intent Trainer-Datensätze in der Datenbank gespeichert werden | 30 Tage |
| **Audit-Ereignisse** |               |
| Maximale Zeit, bis Überwachungsereignisse entfernt werden | 30 Tage |
| **xApp-Sitzung** |               |
| Maximale Zeit, bis eine xApp-Sitzung abläuft | 30 Tage |

 </short></x></Description>