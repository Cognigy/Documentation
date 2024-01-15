---
 Titel: "Modul" 
 slug: "Modul" 
 ausgeblendet: false 
---
# Modul

## Beschreibung<div class="divider"></div>In einem Codeknoten können Sie eine Auswahl vordefinierter NPM-Module verwenden. 
Auf dieser Seite finden Sie alle notwendigen Informationen, um diese Module in einem Codeknoten auszuführen.

## moment.js<div class="divider"></div>[Moment.js Dokumentation] (https://momentjs.com/docs/)

Sie können das moment.js-Modul zum Parsen, Validieren, Bearbeiten und Anzeigen von Datumsangaben verwenden.

### Verwendung
---
Rufen Sie in einem Codeknoten die folgende Funktion auf:
'''javaScript
moment(inp?:any, format?: any, strict?: boolean);
''' 

### Beispiel
---
Im folgenden Beispiel werden die aktuelle UTC-Uhrzeit und das aktuelle UTC-Datum abgerufen und an den Kontakt zurückgegeben.
'''javaScript
const utc = moment.utc();
actions.output(UTC);
''' 

## Lodash<div class="divider"></div>[Lodash-Dokumentation] (https://lodash.com/docs/4.17.10)

Cognigy.AI unterstützt auch die Utility-Bibliothek Lodash innerhalb von Codeknoten.

### Verwendung
---
Sie können Funktionen des Lodash-Moduls mit der folgenden Syntax aufrufen:
'''javaScript
_.keys(<OBJECT>);
''' 
Sie können jede Lodash-Funktion innerhalb eines Codeknotens verwenden. Weitere Informationen finden Sie in der [Dokumentation](https://lodash.com/docs/4.17.10).

### Beispiel
---
Das folgende Beispiel zeigt einen typischen Anwendungsfall und die Syntax des Lodash-Moduls.
'''javaScript
const favoriteFoods = ["Pizza", "Spaghetti", "Burger"];
const last = _.last(favouriteFoods);
actions.output(letzte);
''' 
In diesem Beispiel extrahieren wir das letzte Element des Arrays "favouriteFoods" und senden es als Ausgabenachricht.

## Messenger-Plattform<div class="divider"></div>[Messenger-Dokumentation] (https://github.com/snlangsuan/facebook-bot-messenger)

Für die Erstellung von Facebook Messenger-Nachrichten (Schnellantworten, Buttons, Listen, generische Vorlagen usw.) können Sie das **facebook-bot-messenger**-Modul innerhalb eines Code Node verwenden.

### Verwendung
---
In einem Codeknoten können Sie einen Nachrichtentyp Ihrer Wahl erstellen, indem Sie den Namespace **MessengerPlatform** verwenden. Eine Liste möglicher Nachrichtentypen finden Sie in der [facebook-bot-messenger-Dokumentation](https://github.com/snlangsuan/facebook-bot-messenger).

### Beispiel
---
Der folgende Codeausschnitt kann verwendet werden, um eine Schnellantwortnachricht zu generieren. Beachten Sie, dass die erstellte Nachricht ('builder.buildMessage()') der Wert der **message**-Eigenschaft des **_facebook**-Objekts sein muss. 
'''javaScript
Verwenden Sie Facebook-Bot-Messenger, um Antworten zu kompilieren
const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Wählen Sie eine Farbe:');
builder.addImageOption('Rot', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'https://cognigy.com/img/red.png')
       .addImageOption('Grün', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'https://cognigy.com/img/green.png');

Antwort ausgeben
actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
''' 

## Messenger-Plattform<div class="divider"></div>[XML-js-Dokumentation] (https://www.npmjs.com/package/xml-js)

Wenn Sie XML-Daten parsen möchten, können Sie dieses Modul verwenden.

### Verwendung
---
Innerhalb eines Codeknotens können Sie die folgende Methode aufrufen: 
'''javaScript
const xml =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<note importance="high" logged="true">' +
    '    <title>Glücklich</title>' +
    '    <todo>Arbeit</todo>' +
    '    <todo>Spielen</todo>' +
    ''</note>;

const result = xmljs.xml2json(xml, { compact: true, spaces: 4 });

result enthält nun eine JSON-Darstellung des obigen XML-Codes
''' 

## Text-Bereinigung<div class="divider"></div>### Verwendung
---
Innerhalb eines Codeknotens können Sie die Funktion 'getTextCleaner' aufrufen, die eine Instanz von [Text Cleaner](.. /.. /tools/text-cleaner.md)-Klasse. 
Diese Klasse bietet Zugriff auf verschiedene Textbereinigungsfunktionen.

**Parameter**

| Parameter | Typ | Beschreibung |
|-----------|--------|----------------------------------------------------------------------------|
| Gebietsschema | Zeichenfolge | Das Gebietsschema, für das die Klasse instanziiert werden soll. Beispiel: 'de' oder 'en'). |
| Optionen | Objekt | Unten finden Sie die Konfigurationsoptionen.                                          |

**Konfigurationsoptionen**

'''json
{
    zusätzliche Zeichen, die nicht von cleanDisallowedSymbols bereinigt werden
    additionalAllowedCharacters: string[], 

zusätzliche Symbole, die ersetzt werden (z. B. "minus": "-")
    additionalMappedSymbols: { [key: string]: string }, 

zusätzliche Sätze, die ersetzt werden
    additionalSpecialPhrases: { [key: string]: string }, 

Ergänzungen zum phonetischen Alphabet (z. B. "cognigy": "c")
    additionalPhoneticAlphabet: { [key: string]: string } 
}
'''

**Ertrag**

Instanz der Text Cleaner-Klasse.</OBJECT>