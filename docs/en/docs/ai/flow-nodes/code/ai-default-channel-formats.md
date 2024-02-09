---
 title: "AI Default Channel Formats" 
 slug: "ai-default-channel-formats" 
 hidden: false 
---
# AI Default Channel Formats

As described in [Channel Output]({{config.site_url}}ai/flow-nodes/code/channel-output/), you can send JSON-formatted output directly against your [Endpoints](../../endpoints/overview.md) for it to be output to the respective channels.

The AI Default Channel is special in a way that content from the Default Channel is automatically converted into the correct payloads for all other channels (see our [Say]({{config.site_url}}ai/flow-nodes/message/say/) Node documentation for more information).

Using the [Code](code.md) Node, you can also send JSON-formatted output to the Endpoints for the AI Default Channel, and it will handle the conversion into the appropriate content. The required payload formats are described below. 

## Payload Formats
<div class="divider"></div>
### Text

Sends text to the Endpoint.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9fc53d9-say_in_nodde.png" width="100%" />
  <figcaption>Text in Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ade750b-say_in_webchat.png" width="100%" />
  <figcaption>Text in Webchat</figcaption>
</figure>

```js
actions.output("Your text", null);
``` 

### Text with Quick Replies

Sends text and a number of quick reply buttons.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c3989d9-Say_Node_quick_replies.PNG" width="100%" />
  <figcaption>Quick Replies in Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1414533-Say_Node_text_with_quick_reply.png" width="100%" />
  <figcaption>Quick Reply Detailed Settings</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/a8c2356-Webchat_quick_reply_buttons.PNG" width="100%" />
  <figcaption>Webchat Quick Replies</figcaption>
</figure>

```js
actions.output(null, {
  "type": "quickReplies",
  "_cognigy": {
    "_default": {
      "_quickReplies": {
        "type": "quick_replies",
        "text": "Quick Reply Text",
        "quickReplies": [
          {
            "id": 111,
            "contentType": "postback",
            "payload": "Postback 1",
            "title": "Button 1",
            "imageUrl": "https://www.cognigy.com/hubfs/Cognigy.svg"
          },
          {
            "id": 112,
            "contentType": "phone_number",
            "payload": "+49123456",
            "title": "Button 2"
          },
          {
            "id": 112,
            "contentType": "trigger_intent",
            "payload": "",
            "title": "Button 3",
            "intentName": "Intent Name"
          }
        ]
      }
    }
  }
});
``` 

### Gallery

Outputs a carousel of cards.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3f7ebfd-gallery_say_node.png" width="100%" />
  <figcaption>Gallery in Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7f7fa36-Gallery_Button_Settings.png" width="100%" />
  <figcaption>Gallery Button Settings</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/5868040-gallery_web_chat.png" width="100%" />
  <figcaption>Gallery in Webchat</figcaption>
</figure>

```js
actions.output(null, {
  "type": "gallery",
  "_cognigy": {
    "_default": {
      "_gallery": {
        "type": "carousel",
        "items": [
          {
            "id": 111,
            "title": "Cognigy.AI",
            "subtitle": "Cognigy.AI is a conversational AI platform.",
            "imageUrl": "https://www.cognigy.com/hubfs/AI%20Copy%205.svg",
            "buttons": [
              {
                "id": 112,
                "payload": "Postback 1",
                "type": "postback",
                "title": "Button 1"
              },
              {
                "id": 113,
                "payload": "",
                "type": "web_url",
                "title": "URL Button",
                "url": "https://www.cognigy.com/products/cognigy-ai"
              }
            ]
          },
          {
            "id": 121,
            "title": "Cognigy.VG",
            "subtitle": "Cognigy Voice Gateway connects your AI to your contact center",
            "imageUrl": "https://www.cognigy.com/hubfs/cognigy-vg-logo.svg",
            "buttons": [
              {
                "id": 122,
                "payload": "",
                "type": "web_url",
                "title": "Click me",
                "url": "https://www.cognigy.com/products/voice-gateway"
              }
            ]
          }
        ],
        "fallbackText": "Fallback text for voice channels"
      }
    }
  }
});
``` 

### Text with Buttons

Outputs text with a list of buttons.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/a2bfb8c-Buttons_in_Editor.AI.png" width="100%" />
  <figcaption>Text with Buttons in Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/52ff65d-Text_with_Buttons.PNG" width="100%" />
  <figcaption>Text with Buttons Detailed Settings</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8278835-test_with_buttons_in_web_chat.png" width="100%" />
  <figcaption>Text with Buttons in Webchat</figcaption>
</figure>

```js
actions.output(null, {
  "type": "buttons",
  "_cognigy": {
    "_default": {
      "_buttons": {
        "type": "buttons",
        "text": "Text with Buttons",
        "buttons": [
          {
            "id": 111,
            "payload": "Postback Value",
            "type": "postback",
            "title": "Postback Value Button"
          },
          {
            "id": 112,
            "payload": "",
            "type": "web_url",
            "title": "URL Button",
            "url": "https:\\\\google.com"
          },
          {
            "id": 113,
            "payload": "+491234567",
            "type": "phone_number",
            "title": "Phone Number Button"
          },
          {
            "id": 114,
            "payload": "",
            "type": "trigger_intent",
            "title": "Intent Button",
            "intentName": "Intent Name"
          }
        ]
      }
    }
  }
});
``` 

### List

Outputs a list.

<figure>
<img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2a940c5-Edit_Node_list.svg" width="100%" />
<figcaption>List in Say Node</figcaption>
</figure>

<figure>
<img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2fff87d-Say_list_option_order_3.svg" width="100%" />
<figcaption>Say Node settings</figcaption>
</figure>

<figure>
<img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/483e566-Webchat_Say_node_list_items.svg" width="100%" />
<figcaption>List in webchat</figcaption>
</figure>

```js
actions.output(null, {
  "type": "list",
  "_cognigy": {
    "_default": {
      "_list": {
        "type": "list",
        "items": [
          {
            "title": "List Item 1",
            "subtitle": "Subtitle",
            "imageUrl": "https://www.cognigy.com/hubfs/Cognigy.svg",
            "defaultActionUrl": "",
            "imageAltText": "Alternate Text",
            "buttons": [
              {
                "type": "postback",
                "payload": "Postback Value",
                "title": "Postback Button"
              }
            ]
          },
          {
            "title": "List Item 2",
            "subtitle": "",
            "imageUrl": "",
            "defaultActionUrl": "",
            "buttons": [
              {
                "type": "web_url",
                "payload": "",
                "title": "URL Button",
                "url": "https:\\\\www.google.com"
              }
            ]
          },
          {
            "title": "List Item 3",
            "subtitle": "",
            "imageUrl": "",
            "defaultActionUrl": "",
            "buttons": [
              {
                "type": "phone_number",
                "payload": "+491234567",
                "title": "Phone Number Button"
              }
            ]
          },
          {
            "title": "List Item 4",
            "subtitle": "",
            "imageUrl": "",
            "defaultActionUrl": "",
            "buttons": [
              {
                "type": "trigger_intent",
                "payload": "",
                "title": "Intent Button",
                "intentName": "Intent Name"
              }
            ]
          }
        ],
        "button": {
          "type": "postback",
          "condition": "",
          "payload": "Postback value",
          "title": "Separate Button from List"
        }
      }
    }
  }
});
``` 

### Audio

Outputs audio from a URL.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/bb4f85f-Audio_and_Details_in_Say_Node.png" width="100%" />
  <figcaption>Audio and Details in the Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/eef7261-audio_in_webchat.png" width="100%" />
  <figcaption>Audio in Webchat</figcaption>
</figure>

```js
actions.output(null, {
  "type": "audio",
  "_cognigy": {
    "_default": {
      "_audio": {
        "type": "audio",
        "audioUrl": "https://audio.test/test.wav"
      }
    }
  }
});
``` 

### Image

Outputs image from a URL.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Image.png" width="100%" />
  <figcaption>Image and Details in the Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Image in Webchat.png" width="100%" />
  <figcaption>Image in Webchat</figcaption>
</figure>

```js
actions.output(null, {
  "type": "image",
  "_cognigy": {
    "_default": {
      "_image": {
        "type": "image",
        "imageUrl": "https://testURL.test/image.jpeg"
      }
    }
  }
});
``` 

### Video

Outputs video from a URL. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/47700b9-video_in_Say_Node.png" width="100%" />
  <figcaption>Video and Details in the Say Node</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2ab75df-video_in_web_chat.png" width="100%" />
  <figcaption>Video in Webchat</figcaption>
</figure>

```js
actions.output(null, {
  "type": "video",
  "_cognigy": {
    "_default": {
      "_video": {
        "type": "video",
        "videoUrl": "https://www.youtube.com/watch?v=iGc3fekZQOw"
      }
    }
  }
});
``` 

### Adaptive Card

Outputs an adaptive card. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/code/adaptive-card.png" width="80%" />
  <figcaption>Adaptive card in Webchat</figcaption>
</figure>

```javaScript
actions.output(null, {
  "type": "adaptiveCard",
  "_cognigy": {
    "_default": {
      "_adaptiveCard": {
        "type": "adaptiveCard",
        "adaptiveCard": {
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "body": [
            {
              "type": "TextBlock",
              "size": "Medium",
              "weight": "Bolder",
              "text": "Publish Adaptive Card Schema"
            },
            {
              "type": "ColumnSet",
              "columns": [
                {
                  "type": "Column",
                  "items": [
                    {
                      "type": "Image",
                      "style": "Person",
                      "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                      "size": "Small"
                    }
                  ],
                  "width": "auto"
                },
                {
                  "type": "Column",
                  "items": [
                    {
                      "type": "TextBlock",
                      "weight": "Bolder",
                      "text": "Matt Hidinger",
                      "wrap": true
                    },
                    {
                      "type": "TextBlock",
                      "spacing": "None",
                      "text": "Created Tue, Feb 14, 2017",
                      "isSubtle": true,
                      "wrap": true
                    }
                  ],
                  "width": "stretch"
                }
              ]
            },
            {
              "type": "TextBlock",
              "text": "Publish Adaptive Card Schema easily.",
              "wrap": true
            },
            {
              "type": "Action.OpenUrl",
              "title": "View",
              "url": "https://adaptivecards.io"
            }
          ],
          "actions": [],
          "version": "1.5"
        }
      }
    }
  }
});
```

