---
 Titel: "Kanalausgang" 
 Schnecke: "Kanal-Ausgang" 
 ausgeblendet: false 
---
# Kanal-Ausgang

## Beschreibung<div class="divider"></div>Innerhalb eines Code-Knotens haben Sie die Möglichkeit, eine Textnachricht zusammen mit einem Datenobjekt auszugeben, indem Sie die folgenden 'actions'-Funktionen verwenden:
'''javaScript
actions.output("<YOUR_TEXT>", {"key": "value" });
ODER
actions.say("<YOUR_TEXT>", {"key": "Wert" });
''' 

Der Parameter "data" sollte die JSON-Nutzlast übernehmen, die die benutzerdefinierte Kanalnachricht definiert:
'''javaScript
const jsonPayload = {
 "_cognigy":{
  Kanalspezifische Nutzlast 
 }
}

actions.say("<YOUR_TEXT", jsonPayload);
``` 

See the next sections for the required format.

## AI Default Channel
<div class="divider"></div>Der Cognigy AI Default Channel hat ein bestimmtes Kanalformat, über das Sie mehr unter [AI Default Channel Format]({{config.site_url}}ai/flow-nodes/code/ai-default-channel-formats/) erfahren können.

## Alexa<div class="divider"></div>[:link: JSON-Referenz für Alexa-Antworten] (https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html)

### Beispiel
---
Wir geben eine einfache Karte an unseren Kontakt aus, indem wir den folgenden Codeausschnitt verwenden:
'''JSON
{
	"_cognigy": {
		"_alexa": {
			"Antwort": {
                "shouldEndSession": false,
				"Karte": {
 					"type": "Standard",
 					"title": "Titel der Karte",
 					"content": "Inhalt einer einfachen Karte",
 					"text": "Textinhalt für eine Standardkarte",
 					"Bild": {
						"smallImageUrl": "https://url-to-small-card-image",
						"largeImageUrl": "https://url-to-large-card-image"
 					}
				}
			}
		}
	}
}
''' 

## Bote<div class="divider"></div>[:link: Messenger-Nachrichten-Referenz] (https://developers.facebook.com/docs/messenger-platform/send-messages)

Für den Messenger können Sie mehrere Vorlagen senden, indem Sie ein JSON-Objekt erstellen oder das **facebook-bot-messenger-Modul** verwenden. Weitere Informationen finden Sie auf ihrer [GitHub Page](https://github.com/snlangsuan/facebook-bot-messenger#readme).

### Beispiel
---
Mit dem folgenden Snippet wird eine einfache Textnachricht und eine schnelle Antwort an den Kontakt gesendet:
'''JSON
{
	"_cognigy": {
        "_facebook": {      
          "Nachricht": {
            "text": "Hallo Welt",
            "quick_replies": [
              {
                "content_type": "Text",
                "condition": "",
                "title": "Hallo",
                "image_url": "",
                "payload": "Hallo"
              }
            ]
          }
        }
    }
}
''' 

Oder Sie können das **facebook-bot-messenger**-Modul verwenden, um benutzerdefiniertes JSON zu erstellen. Hier senden wir schnelle Antworten an den Kontakt:
'''javaScript
Verwenden Sie Facebook-Bot-Messenger, um Antworten zu kompilieren
const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Wählen Sie eine Farbe:');
builder.addImageOption('Rot', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'http://petersfantastichats.com/img/red.png')
       .addImageOption('Grün', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'http://petersfantastichats.com/img/green.png');

Antwort ausgeben
actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
'''

## Webchat<div class="divider"></div>Der Webchat verwendet das gleiche Format wie der **Messenger**, aber anstatt die Eigenschaft '_facebook' hinzuzufügen, müssen Sie '_webchat' hinzufügen.

### Beispiel
---
Im folgenden Beispiel werden eine Textnachricht und eine Schnellantwort an den Kontakt gesendet:
'''JSON
{
	"_cognigy": {
        "_webchat": {      
            "Nachricht": {
                "text": "Hallo Welt",
                "quick_replies": [
                    {
                        "content_type": "Text",
                        "condition": "",
                        "title": "Hallo",
                        "image_url": "",
                        "payload": "Hallo"
                    }
                ]
            }
        }
    }
}
'''

## KI<div class="divider"></div>Der Standard-KI-Kanal, der immer aus dem Standard ausgewählt wird, verwendet fast das gleiche Format wie der Webchat oben. Der einzige Unterschied besteht darin, dass Sie "_default" anstelle von "_webchat" eingeben. 

### Beispiel
---
Im folgenden Beispiel werden eine Textnachricht und eine Schnellantwort an den Kontakt gesendet:
'''JSON
{
	"_cognigy": {
        "_default": {      
            "Nachricht": {
                "text": "Hallo Welt",
                "quick_replies": [
                    {
                        "content_type": "Text",
                        "condition": "",
                        "title": "Hallo",
                        "image_url": "",
                        "payload": "Hallo"
                    }
                ]
            }
        }
    }
}
'''

## LINIE<div class="divider"></div>[:link: LINE Messaging API] (https://developers.line.me/en/reference/messaging-api/#template-messages)

### Beispiel
---
Im Folgenden wird eine einfache Bestätigungsaufforderung an den Kontakt ausgegeben:
'''JSON
{
	"_cognigy": {
		"_line": {
			  	"type": "Vorlage",
				"altText": "Dies ist eine Bestätigungsvorlage",
				"Vorlage": {
					"type": "Bestätigen",
					"text": "Bist du sicher?",
					"Aktionen": [
						{
							"type": "Nachricht",
							"label": "Ja",
							"text": "Ja"
						},
						{
							"type": "Nachricht",
							"label": "Nein",
							"text": "nein"
						}
					]
				}
		}
	}
}
'''

## Knutschen<div class="divider"></div>[:link: Smooch-Messaging-API] (https://docs.smooch.io/rest/?shell#message-types)

### Beispiel
---
Im Folgenden wird ein einfaches Bild an den Endbenutzer ausgegeben:
'''JSON
{
    "role": "appMaker",
    "type": "Bild",
    "text": "Hallo!",
    "mediaUrl": "http://example.org/image.jpg",
    "Aktionen": [{
        "text": "Mehr Infos",
        "type": "Verknüpfung",
        "uri": "http://example.org"
    }]
}
'''

## RingCentral Engage<div class="divider"></div>### Beispiel
---
Im Folgenden wird ein Katalog mit Bildern an den Endbenutzer ausgegeben. Dieses Beispiel ist sehr interessant, da man [einen Anhang für jedes Bild erstellen](https://developers.ringcentral.com/engage/digital/api-reference/Attachments/createAttachment) mit der RingCentral Engage-API erstellen muss. Die zurückgegebenen **attachmentIds** werden in den folgenden **benutzerdefinierten JSON-Code** eingefügt: 
'''JSON
{
  "command": "Strukturierter-Inhalt",
  "body": "",
  "structuredContent": {
    "type": "Karussell",
    "Gegenstände": [
        {
            "attachment_id": "5F73470A0E69DC",
            "title": "Das ist der Titel",
            "url": "https://url-to-image.com",
            "subtitle": "Dies ist der erste Untertitel",
            "Gegenstände": [
                {
                    "type": "URL",
                    "url": "https://www.cognigy.com/",
                    "title": "Webseite besuchen"
                },
                {
                    "type": "Antworten",
                    "payload": "Ich möchte diesen auswählen",
                    "title": "Auswählen"
                }
            ]
        },
        "...": "..."
    ]
  }
}
'''</YOUR_TEXT></YOUR_TEXT>