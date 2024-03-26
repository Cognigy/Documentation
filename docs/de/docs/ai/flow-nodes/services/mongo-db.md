---
 Titel: "Mongo DB" 
 Slug: "mongo-db" 
 ausgeblendet: false 
---
# Mongo DB

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/mongo-db-find.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Mit den MongoDB-Knoten können Sie eine Reihe von Vorgängen auf Ihrer MongoDB ausführen.

## Knoten<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1f1446e-mongo-operations.jpg" width="100%" />
</figure>### Finden
#### Kollektion
Der Name der MongoDB-Sammlung.
#### Abfrage
Die MongoDB-Abfrage im JSON-Format.

[MongoDB-Dokumentation: Suchen] (https://docs.mongodb.com/manual/reference/method/db.collection.find/) {:target="_blank"}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
</figure>

#### Speicherung von Ergebnissen
In diesem Abschnitt können Sie konfigurieren, wo das Ergebnis der MongoDB-Anforderung gespeichert werden soll.

#### Fortgeschritten
Im Abschnitt "Erweitert" werden eine Reihe zusätzlicher Einstellungen angezeigt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37fb69f-mongodb-projection.jpg" width="100%" />
</figure>

##### Projektion

Weitere Informationen zur Projektion finden Sie in der MongoDB-Dokumentation.
 
[MongoDB-Dokumentation: Projektion] (https://docs.mongodb.com/manual/reference/operator/projection/) {:target="_blank"}

##### Optionen

In der MongoDB-Dokumentation finden Sie konfigurierbare Optionen.
 
[MongoDB-Dokumentation] (https://docs.mongodb.com/manual) {:target="_blank"}

##### Inhaltsverzeichnis 

Weitere Informationen finden Sie in der MongoDB-Dokumentation zu Indizes.
 
[MongoDB-Dokumentation: Indizes] (https://docs.mongodb.com/manual/indexes/) {:target="_blank"}

##### Stopp bei Fehler
Hier können Sie konfigurieren, ob die Schemaausführung gestoppt werden soll, wenn ein Fehler auftritt oder nicht.

#### Zwischenspeicherung
##### Cacheantwort vom MongoDB-Vorgang. 
Gibt an, ob die MongoDB-Antworten zwischengespeichert werden sollen, um die Leistung zu optimieren.

### Finde einen
#### Kollektion
Der Name der MongoDB-Sammlung.
#### Abfrage
Die MongoDB-Abfrage im JSON-Format.

[MongoDB-Dokumentation: FindOne] (https://docs.mongodb.com/manual/reference/method/db.collection.findOne/) {:target="_blank"}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
</figure>

#### Speicherung von Ergebnissen
In diesem Abschnitt können Sie konfigurieren, wo das Ergebnis der MongoDB-Anforderung gespeichert werden soll.

#### Fortgeschritten
Im Abschnitt "Erweitert" werden eine Reihe zusätzlicher Einstellungen angezeigt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37fb69f-mongodb-projection.jpg" width="100%" />
</figure>

##### Projektion

Weitere Informationen zur Projektion finden Sie in der MongoDB-Dokumentation.
 
[MongoDB-Dokumentation: Projektion] (https://docs.mongodb.com/manual/reference/operator/projection/) {:target="_blank"}

##### Optionen

In der MongoDB-Dokumentation finden Sie konfigurierbare Optionen.
 
[MongoDB-Dokumentation] (https://docs.mongodb.com/manual) {:target="_blank"}

##### Inhaltsverzeichnis 

Lesen Sie die MongoDB-Dokumentation zu Indizes.
 
[MongoDB-Dokumentation: Indizes] (https://docs.mongodb.com/manual/indexes/) {:target="_blank"}

##### Stopp bei Fehler
Hier können Sie konfigurieren, ob die Schemaausführung gestoppt werden soll, wenn ein Fehler auftritt oder nicht.

#### Zwischenspeicherung
##### Cacheantwort vom MongoDB-Vorgang. 
Gibt an, ob die MongoDB-Antworten zwischengespeichert werden sollen, um die Leistung zu optimieren.

### Update Eins

#### Kollektion
Der Name der MongoDB-Sammlung.

#### Abfrage
Die MongoDB-Abfrage im JSON-Format.

#### Aktualisieren
Die Nutzlast für das MongoDB-Update im JSON-Format.

[MongoDB-Dokumentation: UpdateOne] (https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/) {:target="_blank"}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
</figure>

#### Speicherung von Ergebnissen
In diesem Abschnitt können Sie konfigurieren, wo das Ergebnis der MongoDB-Anforderung gespeichert werden soll.

#### Fortgeschritten
Im Abschnitt "Erweitert" werden eine Reihe zusätzlicher Einstellungen angezeigt.
[https://docs.mongodb.com/manual/reference/operator/projection/] (https://docs.mongodb.com/manual/reference/operator/projection/) {:target="_blank"}

##### Operatoren verwenden
Wenn diese Option aktiviert ist, können Sie Operatoren wie $push in der Aktualisierungsabfrage verwenden. Wenn nicht, dann $set wir automatisch alles, was Sie in die Update-Abfrage schreiben, in die Datenbank.

##### Optionen

In der MongoDB-Dokumentation finden Sie konfigurierbare Optionen.
 
[MongoDB-Dokumentation] (https://docs.mongodb.com/manual) {:target="_blank"}

### Viele aktualisieren
 [MongoDB-Dokumentation: UpdateMany] (https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/) {:target="_blank"}

### Einfügen
 [MongoDB-Dokumentation: Einfügen] (https://docs.mongodb.com/manual/reference/method/db.collection.insert/) {:target="_blank"}

### Entfernen
 [MongoDB-Dokumentation: Entfernen] (https://docs.mongodb.com/manual/reference/method/db.collection.remove/) {:target="_blank"}

### MongoDB-Aggregat
 [MongoDB-Dokumentation: Aggregat] (https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/) {:target="_blank"}