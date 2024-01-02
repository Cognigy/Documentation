---
 title: "Datepicker" 
 Schnecke: "Datepicker" 
 ausgeblendet: false 
---
# Datumsauswahl

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/datepicker.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Datepicker-Knoten rendert eine visuelle Datumsauswahl für den Benutzer. Es wird mit vielen konfigurierbaren Optionen geliefert, die unten aufgeführt sind.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/39c5f76-datepicker-widget-webchat.jpg" width="100%" />
</figure>

!!! Tipp "Automatisch ausgelöst durch Frageknoten"
    Der Datepicker wird automatisch ausgelöst, wenn ein Frageknoten vom Typ **Datum** verwendet wird. Dies bedeutet, dass Sie den Datepicker-Knoten selbst nur selten explizit hinzufügen müssen. 

## Eigenschaften<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6c556ea-datepicker-options1.jpg" width="100%" />
</figure>### Titel der Datumsauswahl
Dies ist der Titel, der in der Kopfzeile des Datepicker-Widgets angezeigt wird (wenn es geöffnet wird).
**Ein Beispiel wäre**: *"Buchungsdatum & -uhrzeit"* (wie im Screenshot oben zu sehen). 
### Gebietsschema
Ein Dropdownmenü, mit dem Sie ein Gebietsschema für die Datumsauswahl auswählen können. Dadurch wird das Datumsformat automatisch in der lokalisierten Sprache ausgegeben.
### Modus
Der Modus bestimmt das Verhalten der Datumsauswahl. 

* **Einzelne**: Dies bedeutet, dass ein einzelnes Datum ausgewählt werden kann. 
  * **Mehrere**: Hiermit kann der Benutzer mehrere Daten auswählen.
  * **Bereich**: Hier kann der Benutzer einen Datumsbereich auswählen. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ffaba00-date-range.jpg" width="100%" />
</figure>

### Button-Texte
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ee3c577-datepicker-buttontext.jpg" width="100%" />
</figure>

#### Text der Datumsauswahl öffnen
Dies ist der Text, der in der Schaltfläche angezeigt wird, die gerendert wird, wenn die Datumsauswahl ausgelöst wird. Standardmäßig heißt es: **Datum auswählen**. 

#### Beschriftung der Schaltfläche abbrechen
Dies ist der Text, der auf der Schaltfläche "Abbrechen" angezeigt wird, die gerendert wird, wenn die Datumsauswahl geöffnet wurde. Der Standardwert ist **Abbrechen**.

#### Beschriftung der Schaltfläche "Senden"
Dies ist der Text, der auf der Schaltfläche "Senden" angezeigt wird, die gerendert wird, wenn die Datumsauswahl geöffnet wurde. Der Standardwert ist **submit**.

### Datumseinstellungen
Mit dem Datepicker können Sie genau konfigurieren, welche Daten ausgewählt werden können. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2573a7e-datepicker-datesettings.jpg" width="100%" />
</figure>

#### Standarddatum
Dies ist das standardmäßig ausgewählte Datum. Wenn es nicht ausgefüllt ist, ist es das aktuelle Datum. 

#### Mindestdatum
Dies ist das Mindestdatum. Wenn es nicht ausgefüllt ist, hat es kein Mindestdatum. 

#### Maxium Datum
Dies ist das maximal auswählbare Datum. Wenn es nicht ausgefüllt ist, hat es kein maximales Datum.

### Zeiteinstellungen
Mit dem Datepicker können Sie konfigurieren, ob Zeiten ausgewählt werden können. Wenn dies der Fall ist, können Sie auch die Standardzeiten im Detail konfigurieren. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8204cac-datepicker-timesettings.jpg" width="100%" />
</figure>

#### Datum und Uhrzeit zulassen
Legt fest, ob der Datepicker zusätzlich auswählbare Zeit anzeigen soll.

#### 24-Stunden-Format verwenden
Wenn diese Option ausgewählt ist, zeigt die Datumsauswahl die Uhrzeiten im 24-Stunden-Format an (z. B. 20:00 Uhr statt 20:00 Uhr).

#### Standardmäßig anzuzeigende Stunde
Konfigurierbare Standardstunde.

#### Standardminute für die Anzeige
Konfigurierbare Standardminute.

#### Schritt zur Erhöhung der Arbeitszeit
Die Schrittweite des Inkrements für Stunden. Der Standardwert ist 1 Stunde.

#### Schritt zum Erhöhen der Minuten
Die inkrementelle Erhöhung in Minuten, wenn die Minutenauswahl verwendet wird. Der Standardwert ist 5 Minuten.

#### Sekunden in der Auswahl anzeigen
Aktivieren Sie diese Einstellung, um Sekunden in den Datepicker-Optionen anzuzeigen.

### Datum aktivieren/deaktivieren
Die Datumsauswahl kann so konfiguriert werden, dass bestimmte Datumsangaben ausgeschlossen (oder eingeschlossen) werden. Dies ist nützlich in Anwendungsfällen, in denen bestimmte Daten nicht verfügbar sein sollen - z. B. ein Buchungs- oder Reservierungsbot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c17af07-datepicker-enable-disable.jpg" width="100%" />
</figure>

#### Bestimmte Daten aktivieren
Mit dieser Einstellung können Sie einen Datumsbereich eingeben, der aktiviert werden soll. Wenn konfiguriert, werden alle anderen Daten automatisch deaktiviert. Darüber hinaus können Sie eine Funktion definieren, mit der Datumsangaben aktiviert werden - z.B. nur Wochentage.

Datumsangaben nach Funktion aktivieren - Beispiel:
'''ts
(Datum: Datum): boolean => {
    /* Die Funktion nimmt ein Date-Objekt auf und sollte einen booleschen Wert zurückgeben.
    * Wenn die Funktion true zurückgibt, wird das Datum aktiviert.
    * Sonntag = 0, Montag = 1, Dienstag = 2, Mittwoch = 3, Donnerstag = 4, Freitag = 5, Samstag = 6	 
    */ 	
    Dies ermöglicht Montag bis Freitag
    return (date.getDay() > 0 & date.getDay() < 6);
};
```

#### Disable specific dates
This setting allows you to enter a range of dates that should be disabled. If configured, all other dates will automatically be enabled. In addition, you can define a function that is used to disable dates - for example every saturday and sunday.

Disable dates by function - example:
```ts
(date: Date): boolean => {
    /* Die Funktion nimmt ein Date-Objekt auf und sollte einen booleschen Wert zurückgeben.
    * Wenn die Funktion true zurückgibt, wird das Datum deaktiviert.
    * Sonntag = 0, Montag = 1, Dienstag = 2, Mittwoch = 3, Donnerstag = 4, Freitag = 5, Samstag = 6	 
    */ 	
    Dies wird jeden Sonntag und Samstag deaktiviert
    return (date.getDay() === 0 || date.getDay() === 6);
};
'''

### Erweiterte Optionen
Der Datepicker verfügt über vier erweiterte Optionen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7f9dcfe-advanced-options.jpg" width="100%" />
</figure>

#### Datumsformat
Dieses Feld kann verwendet werden, um ein bestimmtes Datumsformat auszugeben, wie z.B.: "Y-m-d".

#### Kalender ausblenden
Wenn diese Option aktiviert ist, zeigt die Datumsauswahl keinen Kalender an.

#### Wochennummern anzeigen
Wenn diese Option aktiviert ist, werden die Wochennummern im Kalender angezeigt.

#### Datepicker-Schnellantwort ausblenden
Dadurch wird die Schnellantwort in der Datumsauswahl ausgeblendet.