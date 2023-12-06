---
 Titel: "MS SQL" 
 Slug: "MS-SQL" 
 ausgeblendet: false 
---
# MS SQL

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/run-sql-query.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Mit dem SQL-Knoten können Sie Abfragen, Transaktionen oder gespeicherte Prozeduren auf MS-SQL Server ausführen.

### Bedienung
---
Wählen Sie einen Vorgang aus der Dropdown-Liste aus:

* [Abfrage ausführen]({{config.site_url}}ai/flow-nodes/services/ms-sql/#run-query)
  * [Transaktion ausführen]({{config.site_url}}ai/flow-nodes/services/ms-sql/#run-transaction)
  * [Gespeicherte Prozedur ausführen]({{config.site_url}}ai/flow-nodes/services/ms-sql/#run-stored-procedure)

### Verbindung
---
Wählen Sie eine neue Datenbankverbindung aus, oder erstellen Sie eine neue, siehe [Connections]({{config.site_url}}ai/resources/build/connections/).

### Kontextspeicher
---
Der SQL-Knoten führt den konfigurierten Vorgang für die Datenbank aus. Die Abfrageantwort aus der Datenbank wird im Kontext gespeichert. Geben Sie hier den Standort des Geschäfts an.

## Abfrage ausführen<div class="divider"></div>Führt eine einzelne SQL-Abfrageanweisung aus. Geben Sie eine gültige SQL-Abfrage in das Feld Abfrage ein.

## Transaktion ausführen<div class="divider"></div>Führt eine Transaktion aus. Geben Sie eine gültige SQL-Transaktionsabfrage in das Feld Abfrage ein. Sie müssen die Felder "BEGIN TRANSACTION" und "Commit" nicht hinzufügen, da dies implizit geschieht. Wenn Sie mit Try / Catch-Blöcken arbeiten und komplexere Transaktionen mit Rollbacks ausführen möchten, sollten Sie stattdessen [Run Query]({{config.site_url}}ai/flow-nodes/services/ms-sql/#run-query) verwenden  

## Gespeicherte Prozedur ausführen<div class="divider"></div>Führt eine gespeicherte Prozedur aus. Die gespeicherte Prozedur muss in der Datenbank vorhanden sein, die unter Verbindung angegeben ist.

### Name der gespeicherten Prozedur
---
Der Name der gespeicherten Prozedur

### Eingänge
---
Geben Sie ein Array von Eingabeparametern der gespeicherten Prozedur ein, wie in der Datenbank definiert. Sie können z.B. Parameter aus dem Context an die Datenbank weiterleiten. Parameter müssen in einem Array von Objekten angegeben werden, die den Eingabeparameter im folgenden Format definieren: '{name,value,type}'

### Ausgänge
---
Geben Sie ein Array von Ausgabeparametern der gespeicherten Prozedur ein, wie in der Datenbank definiert. Sie können z.B. Parameter aus der Datenbank an den Context weiterleiten. Parameter müssen in einem Array von Objekten angegeben werden, die den Ausgabeparameter im folgenden Format definieren: '{name,value,type}'