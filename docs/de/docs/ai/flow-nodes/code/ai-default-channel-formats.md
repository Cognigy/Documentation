---
 Titel: "AI-Standard-Kanalformate" 
 Slug: "ai-default-channel-formats" 
 ausgeblendet: false 
---
# AI-Standard-Kanalformate

Wie in [Channel Output]({{config.site_url}}ai/flow-nodes/code/channel-output/) beschrieben, können Sie JSON-formatierte Ausgaben direkt an Ihre [Endpoints]({{config.site_url}}ai/resources/deploy/endpoints/) senden, damit sie an die entsprechenden Kanäle ausgegeben werden.

Das Besondere am AI Default Channel ist, dass Inhalte aus dem Default Channel automatisch in die richtigen Payloads für alle anderen Channels konvertiert werden (weitere Informationen finden Sie in unserer [Say]({{config.site_url}}ai/flow-nodes/message/say/) Node-Dokumentation).

Mit dem [Code](code.md)-Knoten können Sie auch eine JSON-formatierte Ausgabe an die Endpunkte für den AI-Standardkanal senden, der die Konvertierung in den entsprechenden Inhalt übernimmt. Die erforderlichen Payload-Formate werden im Folgenden beschrieben. 

## Payload-Formate<div class="divider"></div>### Text

Sendet Text an den Endpunkt.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9fc53d9-say_in_nodde.png" width="100%" /><figcaption>Text im Knotentext</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ade750b-say_in_webchat.png" width="100%" /><figcaption>im Webchat</figcaption>
  
  
</figure>

'''js
actions.output("Ihr Text", null);
''' 

### Text mit Schnellantworten

Sendet Text und eine Reihe von Schnellantwort-Schaltflächen.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c3989d9-Say_Node_quick_replies.PNG" width="100%" /><figcaption>Schnellantworten im Say Node</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1414533-Say_Node_text_with_quick_reply.png" width="100%" /> Quick<figcaption>Reply Detaillierte Einstellungen</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/a8c2356-Webchat_quick_reply_buttons.PNG" width="100%" /><figcaption>Webchat Quick Replies</figcaption>
  
  
</figure>

'''js
actions.output(null, {
  "type": "quickAntworten",
  "_cognigy": {
    "_default": {
      "_quickReplies": {
        "type": "quick_replies",
        "text": "Schneller Antworttext",
        "quickReplies": [
          {
            "id": 111,
            "contentType": "Postback",
            "payload": "Postback 1",
            "title": "Geschmack 1",
            "imageUrl": "https://www.cognigy.com/hubfs/Cognigy.svg"
          },
          {
            "id": 112,
            "contentType": "phone_number",
            "payload": "+49123456",
            "title": "Geschmack 2"
          },
          {
            "id": 112,
            "contentType": "trigger_intent",
            "payload": "",
            "title": "Geschmack 3",
            "intentName": "Name der Absicht"
          }
        ]
      }
    }
  }
});
''' 

### Galerie

Gibt ein Karussell mit Karten aus.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3f7ebfd-gallery_say_node.png" width="100%" /> Galerie <figcaption>in Say Node</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7f7fa36-Gallery_Button_Settings.png" width="100%" /> Galerie<figcaption>Button-Einstellungen</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/5868040-gallery_web_chat.png" width="100%" /><figcaption>Galerie im Webchat</figcaption>
  
  
</figure>

'''js
actions.output(null, {
  "type": "Galerie",
  "_cognigy": {
    "_default": {
      "_gallery": {
        "type": "Karussell",
        "Gegenstände": [
          {
            "id": 111,
            "title": "Cognigy.AI",
            "subtitle": "Cognigy.AI ist eine dialogorientierte KI-Plattform.",
            "imageUrl": "https://www.cognigy.com/hubfs/AI%20Copy%205.svg",
            "Schaltflächen": [
              {
                "id": 112,
                "payload": "Postback 1",
                "type": "Postback",
                "title": "Geschmack 1"
              },
              {
                "id": 113,
                "payload": "",
                "type": "web_url",
                "title": "URL-Schaltfläche",
                "url": "https://www.cognigy.com/products/cognigy-ai"
              }
            ]
          },
          {
            "id": 121,
            "title": "Cognigy.VG",
            "subtitle": "Cognigy Voice Gateway verbindet Ihre KI mit Ihrem Contact Center",
            "imageUrl": "https://www.cognigy.com/hubfs/cognigy-vg-logo.svg",
            "Schaltflächen": [
              {
                "id": 122,
                "payload": "",
                "type": "web_url",
                "title": "Klick mich",
                "url": "https://www.cognigy.com/products/voice-gateway"
              }
            ]
          }
        ],
        "fallbackText": "Fallback-Text für Sprachkanäle"
      }
    }
  }
});
''' 

### Text mit Schaltflächen

Gibt Text mit einer Liste von Schaltflächen aus.

Text mit Schaltflächen <figure><figcaption>in Say Node</figcaption>Text mit Schaltflächen Detaillierte Einstellungen Text mit Schaltflächen im Webchat<img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/a2bfb8c-Buttons_in_Editor.AI.png" width="100%" />
  
  
</figure><figure><figcaption></figcaption><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/52ff65d-Text_with_Buttons.PNG" width="100%" />
  
  
</figure><figure><figcaption></figcaption><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8278835-test_with_buttons_in_web_chat.png" width="100%" />
  
  
</figure>

'''js
actions.output(null, {
  "type": "Schaltflächen",
  "_cognigy": {
    "_default": {
      "_buttons": {
        "type": "Schaltflächen",
        "text": "Text mit Schaltflächen",
        "Schaltflächen": [
          {
            "id": 111,
            "payload": "Postback-Wert",
            "type": "Postback",
            "title": "Schaltfläche für Postback-Werte"
          },
          {
            "id": 112,
            "payload": "",
            "type": "web_url",
            "title": "URL-Schaltfläche",
            "url": "https:\\\\google.com"
          },
          {
            "id": 113,
            "payload": "+491234567",
            "type": "phone_number",
            "title": "Telefonnummern-Geschmack"
          },
          {
            "id": 114,
            "payload": "",
            "type": "trigger_intent",
            "title": "Absichts-Taste",
            "intentName": "Name der Absicht"
          }
        ]
      }
    }
  }
});
''' 

### Liste

Gibt eine Liste aus.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2a940c5-Edit_Node_list.svg" width="100%" /> Liste in Say Node <figcaption>Say</figcaption>


</figure><figure><figcaption>Node</figcaption><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2fff87d-Say_list_option_order_3.svg" width="100%" /> Einstellungen

</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/483e566-Webchat_Say_node_list_items.svg" width="100%" /><figcaption>Liste im Webchat</figcaption>


</figure>

'''js
actions.output(null, {
  "type": "Liste",
  "_cognigy": {
    "_default": {
      "_list": {
        "type": "Liste",
        "Gegenstände": [
          {
            "title": "Listeneintrag 1",
            "subtitle": "Untertitel",
            "imageUrl": "https://www.cognigy.com/hubfs/Cognigy.svg",
            "defaultActionUrl": "",
            "imageAltText": "Alternativer Text",
            "Schaltflächen": [
              {
                "type": "Postback",
                "payload": "Postback-Wert",
                "title": "Postback-Button"
              }
            ]
          },
          {
            "title": "Listeneintrag 2",
            "subtitle": "",
            "imageUrl": "",
            "defaultActionUrl": "",
            "Schaltflächen": [
              {
                "type": "web_url",
                "payload": "",
                "title": "URL-Schaltfläche",
                "url": "https:\\\\www.google.com"
              }
            ]
          },
          {
            "title": "Listeneintrag 3",
            "subtitle": "",
            "imageUrl": "",
            "defaultActionUrl": "",
            "Schaltflächen": [
              {
                "type": "phone_number",
                "payload": "+491234567",
                "title": "Telefonnummern-Geschmack"
              }
            ]
          },
          {
            "title": "Listeneintrag 4",
            "subtitle": "",
            "imageUrl": "",
            "defaultActionUrl": "",
            "Schaltflächen": [
              {
                "type": "trigger_intent",
                "payload": "",
                "title": "Absichts-Taste",
                "intentName": "Name der Absicht"
              }
            ]
          }
        ],
        "Schaltfläche": {
          "type": "Postback",
          "condition": "",
          "payload": "Postback-Wert",
          "title": "Schaltfläche von Liste trennen"
        }
      }
    }
  }
});
''' 

### Audio

Gibt Audio von einer URL aus.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/bb4f85f-Audio_and_Details_in_Say_Node.png" width="100%" /> Audio <figcaption>und Details im Audio des Knotens</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/eef7261-audio_in_webchat.png" width="100%" /> "Sagen"<figcaption>im Webchat</figcaption>
  
  
</figure>

'''js
actions.output(null, {
  "type": "Audio",
  "_cognigy": {
    "_default": {
      "_audio": {
        "type": "Audio",
        "audioUrl": "https://audio.test/test.wav"
      }
    }
  }
});
''' 

### Bild

Gibt ein Bild von einer URL aus.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Image.png" width="100%" /> Bild <figcaption>und Details im Bild des Knotens</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Image in Webchat.png" width="100%" /> "Sagen"<figcaption>im Webchat</figcaption>
  
  
</figure>

'''js
actions.output(null, {
  "type": "Bild",
  "_cognigy": {
    "_default": {
      "_image": {
        "type": "Bild",
        "imageUrl": "https://testURL.test/image.jpeg"
      }
    }
  }
});
''' 

### Zum Video

Gibt Videos von einer URL aus. 

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/47700b9-video_in_Say_Node.png" width="100%" /> Video <figcaption>und Details im Say-Node-Video</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2ab75df-video_in_web_chat.png" width="100%" /><figcaption>im Webchat</figcaption>
  
  
</figure>

'''js
actions.output(null, {
  "type": "Video",
  "_cognigy": {
    "_default": {
      "_video": {
        "type": "Video",
        "videoUrl": "https://www.youtube.com/watch?v=iGc3fekZQOw"
      }
    }
  }
});
''' 

### Adaptive Karte

Gibt eine adaptive Karte aus. 

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/code/adaptive-card.png" width="80%" /><figcaption>Adaptive Karte im Webchat</figcaption>
  
  
</figure>

'''javaScript
actions.output(null, {
  "type": "adaptiveCard",
  "_cognigy": {
    "_default": {
      "_adaptiveCard": {
        "type": "adaptiveCard",
        "adaptiveCard": {
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "Körper": [
            {
              "type": "TextBlock",
              "size": "Mittel",
              "weight": "Mutiger",
              "text": "Adaptives Kartenschema veröffentlichen"
            },
            {
              "type": "Spaltensatz",
              "Spalten": [
                {
                  "type": "Spalte",
                  "Gegenstände": [
                    {
                      "type": "Bild",
                      "style": "Person",
                      "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                      "size": "Klein"
                    }
                  ],
                  "width": "auto"
                },
                {
                  "type": "Spalte",
                  "Gegenstände": [
                    {
                      "type": "TextBlock",
                      "weight": "Mutiger",
                      "text": "Matt Hidinger",
                      "wrap": wahr
                    },
                    {
                      "type": "TextBlock",
                      "spacing": "Keine",
                      "text": "Erstellt Di, Feb 14, 2017",
                      "isSubtle": wahr,
                      "wrap": wahr
                    }
                  ],
                  "width": "dehnen"
                }
              ]
            },
            {
              "type": "TextBlock",
              "text": "Adaptives Kartenschema einfach veröffentlichen.",
              "wrap": wahr
            },
            {
              "type": "Action.OpenUrl",
              "title": "Ansicht",
              "url": "https://adaptivecards.io"
            }
          ],
          "Aktionen": [],
          "version": "1.5"
        }
      }
    }
  }
});
'''