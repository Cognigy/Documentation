---
Titel: "Aktion" 
slug: "Aktionen" 
ausgeblendet: false 
---

# Aktion

Innerhalb eines [Code Node](code.md) können Sie die Funktionen der Klassen 'actions' und 'api' verwenden.

!!! Hinweis "Verfügbar in Erweiterungen"
    Die folgenden Funktionen stehen auch in den Erweiterungen zur Verfügung. Dort kann man das Objekt 'api' verwenden und z.B. ein 'api.say()' ausführen.

## Sonstiges

### actions.output / actions.say || api.output / api.say

Führt eine grundlegende Ausgabe an den Kontakt aus, ähnlich der Funktionalität von [Say](.. /message/say.md) Knoten. 

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|----------------------------------------------|
| Text | Zeichenfolge | Der Ausgabetext, der an den Kontakt |
| Daten | beliebig | Die Ausgabedaten, die an den Kontakt |

**Ertrag**

Leere

### actions.completeGoal || api.completeGoal

Fügt dem Array **completedGoals** im **Input-Objekt** ein definiertes Ziel hinzu.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|----------------------------------------------------------------|
| Schlüssel | Zeichenfolge | Name des Ziels, das dem completedGoals-Array hinzugefügt wird |

**Ertrag**

Versprechen<void>### actions.setTimezoneOffset || api.setTimezoneOffset

Legt den Zeitzonen-Offset von UTC fest.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|----------|--------------------------|
| Versatz | *Anzahl* | Der Zeitversatz in Stunden |

**Ertrag**

Leere

### Aktionen:.log || api:.log

Schreibt eine Meldung in die Projektprotokolle.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|---------------------------------------|
| Ebene | Zeichenfolge | Der Log-Level, z.B. *debug* oder *info* |
| Text | Zeichenfolge | Die Nachricht für die Protokolle |

**Ertrag**

Leere

### aktionen.denken || api.think

Wird verwendet, um den Flow innerhalb eines Aufrufs erneut auszuführen.

Der Flow wird gestoppt und dann am Startknoten neu ausgeführt.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|-----------------------------------------|
| Text | Zeichenfolge | Ein simulierter Meldungstext des Benutzers. |
| Daten | beliebig | Simulierte Nachrichtendaten des Benutzers.   |

**Ertrag**

Leere

## Kontext

### actions.addToContext || api.addToContext

Wird verwendet, um das Speichern von Informationen im Kontext der Konversation zu vereinfachen.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Schlüssel | Zeichenfolge | Wo die Daten im Kontext gespeichert werden sollen.                                                                                                      |
| Wert | Zeichenfolge | Der Wert, der im Kontext gespeichert werden soll.                                                                                                           |
| Modus | Zeichenfolge | Im "einfachen" Modus werden vorhandene Werte ersetzt, im "Array"-Modus werden Informationen in einem Array gespeichert und neue Ergebnisse in dieses Array übertragen. |

**Ertrag**

Leere

### actions.getContext || api.getContext

Ruft die Daten aus dem Kontext durch den Schlüssel ab.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|----------------------------------------------|
| Schlüssel | Zeichenfolge | Wo die Daten aus dem Kontext abgerufen werden sollen. |

**Ertrag**

any : Die angeforderten Kontextdaten

### actions.resetContext || api.resetContext

Setzt den Kontext zurück.

**Parameter**

nichts

**Ertrag**

Versprechen

### actions.removeFromContext || api.removeFromContext

Entfernt Informationen aus dem Kontext der Konversation.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|-------------------------------------------------------------------------------------------------------------------|
| Schlüssel | Zeichenfolge | Der Schlüssel im Kontext zum Entfernen von Informationen aus |
| Wert | Zeichenfolge | Der zu entfernende Wert (im Array-Modus) |
| Modus | Zeichenfolge | Im einfachen Modus wird die Eigenschaft vollständig entfernt, im Array-Modus werden übereinstimmende Werte aus diesem Array entfernt. |

**Ertrag**

Leere

### actions.deleteContext || api.deleteContext

Löscht den Schlüssel und seine Werte aus dem Kontext der Konversation.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|---------------------------------------------------|
| Schlüssel | Zeichenfolge | Der Schlüssel im Kontext zum Entfernen von Informationen aus |

**Ertrag**

Leere

## Zustand<div class="divider"></div>### Aktionen .setState || api.setState

Wird verwendet, um den aktuellen Status dieser Konversation festzulegen.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|-------------------------------------|
| Bundesland | Zeichenfolge | Der Status, der aktiviert werden soll. |

**Ertrag**

Leere

### Aktionen .getState || api.getState

Gibt den aktuellen Zustand zurück.

**Parameter**

nichts

**Ertrag**

string: Der aktuelle Status.

### Aktionen .resetState || api.resetState

Setzt den Status des Flows auf den *Standard*-Zustand zurück

**Parameter**

nichts

**Ertrag**

Versprechen<string>

## Lexikon

### Aktionen .setKeyphrase || api.setKeyphrase

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------------------|------------|----------------------------------------------|
| Schlüsselwort | Zeichenfolge | Die Keyphrase, die Sie festlegen möchten |
| Schlagwörter | *Zeichenfolge[]* | Tags, die Sie an die Schlüsselphrase |
| Synonyme *(optional)* | *Zeichenfolge[]* | Synonyme, die Sie an die Schlüsselphrase |

**Ertrag**

Leere

### actions.addLexiconSchlüsselphrase || api.addLexiconKeyphrase

Fügt einem Lexikon eine neue Schlüsselphrase hinzu.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|----------------------------------------------|
| lexiconId | Zeichenfolge | Die ID des Lexikons, das Sie aktualisieren möchten |
| Schlüsselwort | Zeichenfolge | Die Schlüsselphrase, die Sie dem Lexikon hinzufügen möchten |
| Schlagwörter | beliebig | Tags, die Sie an die Schlüsselphrase anhängen möchten.    |
| Synonyme | beliebig | Synonyme, die Sie an die Schlüsselphrase |

**Ertrag**

Versprechen<string>

## Steckbrief

### actions.activateProfile || api.activateProfile

Wird verwendet, um ein deaktiviertes Profil wieder zu aktivieren, falls der Benutzer die Datenerfassung versehentlich deaktiviert hat oder die Datenerfassung wieder zulassen möchte.

**Parameter**

Nichts

**Ertrag**

Versprechen<any> 

### actions.updateProfile || api.updateProfile

Wird verwendet, um das Kontaktprofil des Benutzers zu aktualisieren.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|------------------------------------------------------|
| Schlüssel | Zeichenfolge | Das Feld im Kontaktprofil des Benutzers, das aktualisiert werden soll. |
| Wert | Zeichenfolge | Der Wert, den Sie festlegen möchten.                           |

**Ertrag**

Versprechen<any>

### actions.mergeProfile || api.mergeProfile

Wird verwendet, um das Profil des Kontakts, der auf den Knoten trifft, mit einem anderen Kontaktprofil zusammenzuführen. 

Dies ist nützlich in einer Omnichannel-Umgebung, in der ein Kontakt auf verschiedenen Plattformen mit Ihrem Flow kommunizieren kann, aber auf allen Plattformen als dieselbe Person erkannt werden möchte.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|------------------------------------------------------------------------------------|
| Kontakt-ID | Zeichenfolge | Die ID des Kontakts, den Sie mit dem aktuellen Kontakt zusammenführen möchten, der den Knoten erreicht hat. |

**Ertrag**

Versprechen<any> 

### actions.deactivateProfile || api.deactivateProfile

Wird verwendet, um ein bestimmtes Kontaktprofil zu deaktivieren, falls ein Kontakt es anfordert.

**Parameter**

Nichts

**Ertrag**

Versprechen<any></any></any></any></any></string></string></void>