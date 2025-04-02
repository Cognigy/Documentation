---
 title: "Channel Output" 
 slug: "channel-output" 
 hidden: false 
---
# Channel Output

With a Code Node, you can output a text message along with a data object by using the following `actions` functions:
```javaScript
actions.output("<YOUR_TEXT>", {"key": "value" });
// OR
actions.say("<YOUR_TEXT>", {"key": "value" });
``` 

The `data` parameter should take the JSON payload that defines the custom channel message:
```javaScript
const jsonPayload = {
 "_cognigy":{
  // Channel Specific Payload 
 }
}

actions.say("<YOUR_TEXT", jsonPayload);
``` 

See the next sections for the required format.

??? info "AI Default Channel"
    The Cognigy.AI default channel has a specific channel format which you can find more about at [AI default channel format](ai-default-channel-formats.md).

??? info "Alexa"
    [Alexa Response JSON Reference](https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html)

    ### Example
    ---
    We'll output a simple card to our contact by using the following snippet:
    ```JSON
    {
        "_cognigy": {
            "_alexa": {
                "response": {
                    "shouldEndSession": false,
                    "card":  {
                        "type": "Standard",
                        "title": "Title of the card",
                        "content": "Content of a simple card",
                        "text": "Text content for a standard card",
                        "image": {
                            "smallImageUrl": "https://url-to-small-card-image",
                            "largeImageUrl": "https://url-to-large-card-image"
                        }
                    }
                }
            }
        }
    }
    ``` 

??? info "Messenger"
    [Messenger Messaging Reference](https://developers.facebook.com/docs/messenger-platform/send-messages)

    For the messenger you can send multiple templates by building a JSON object or by using the **facebook-bot-messenger module**. For further information got to their [GitHub Page](https://github.com/snlangsuan/facebook-bot-messenger#readme).

    ### Example
    ---
    The following snippet will send a simple text message and a quick reply to the contact:
    ```JSON
    {
        "_cognigy": {
            "_facebook": {      
              "message": {
                "text": "Hello World",
                "quick_replies": [
                  {
                    "content_type": "text",
                    "condition": "",
                    "title": "Hi",
                    "image_url": "",
                    "payload": "Hi"
                  }
                ]
              }
            }
        }
    }
    ``` 

    Or you can use the **facebook-bot-messenger** module for building custom json. Here we'll send quick replies to the contact:
    ```javaScript
    // use facebook-bot-messenger to compile reply
    const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Pick a color:');
    builder.addImageOption('Red', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'http://petersfantastichats.com/img/red.png')
           .addImageOption('Green', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'http://petersfantastichats.com/img/green.png');

    // output the reply
    actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
    ```

??? info "Webchat"
    The Webchat uses the same format as the **Messenger** but instead of adding the `_facebook` property you have to add `_webchat`.

    ### Example
    ---
    The following example sends a text message and a quick reply to the contact:
    ```JSON
    {
        "_cognigy": {
            "_webchat": {      
                "message": {
                    "text": "Hello World",
                    "quick_replies": [
                        {
                            "content_type": "text",
                            "condition": "",
                            "title": "Hi",
                            "image_url": "",
                            "payload": "Hi"
                        }
                    ]
                }
            }
        }
    }
    ```

??? info "AI"
    The default AI channel, which is always selected from the default, uses the almost same format as the webchat above. The only difference is that you type `_default` instead of `_webchat`. 

    ### Example
    ---
    The following example sends a text message and a quick reply to the contact:
    ```JSON
    {
        "_cognigy": {
            "_default": {      
                "message": {
                    "text": "Hello World",
                    "quick_replies": [
                        {
                            "content_type": "text",
                            "condition": "",
                            "title": "Hi",
                            "image_url": "",
                            "payload": "Hi"
                        }
                    ]
                }
            }
        }
    }
    ```

??? info "LINE"
    [:link: LINE Messaging API](https://developers.line.me/en/reference/messaging-api/#template-messages)

    ### Example
    ---
    The following outputs a simple confirm prompt to the contact:
    ```JSON
    {
        "_cognigy": {
            "_line": {
                    "type": "template",
                    "altText": "this is a confirm template",
                    "template": {
                        "type": "confirm",
                        "text": "Are you sure?",
                        "actions": [
                            {
                                "type": "message",
                                "label": "Yes",
                                "text": "yes"
                            },
                            {
                                "type": "message",
                                "label": "No",
                                "text": "no"
                            }
                        ]
                    }
            }
        }
    }
    ```

??? info "Smooch"
    [Smooch messaging API](https://docs.smooch.io/rest/?shell#message-types)

    ### Example
    ---
    The following outputs a simple image to the end user:
    ```JSON
    {
        "role": "appMaker",
        "type": "image",
        "text": "Hello!",
        "mediaUrl": "http://example.org/image.jpg",
        "actions": [{
            "text": "More info",
            "type": "link",
            "uri": "http://example.org"
        }]
    }
    ```

??? info "RingCentral Engage"
    ### Example
    ---
    The following outputs a gallery with images to the end user. This example is quite interesting since one needs to [create an attachment for each image](https://developers.ringcentral.com/engage/digital/api-reference/Attachments/createAttachment) using the RingCentral Engage API. The returned **attachmentIds** are inserted in the **Custom JSON** below: 
    ```JSON
    {
      "command": "structured-content",
      "body": "",
      "structuredContent": {
        "type": "carousel",
        "items": [
            {
                "attachment_id": "5f73470a0e69dc",
                "title": "This is the title",
                "url": "https://url-to-image.com",
                "subtitle": "This is the first subtitle",
                "items": [
                    {
                        "type": "url",
                        "url": "https://www.cognigy.com/",
                        "title": "Visit Website"
                    },
                    {
                        "type": "reply",
                        "payload": "I want to select this one",
                        "title": "Select"
                    }
                ]
            },
            "...": "..."
        ]
      }
    }
    ```
