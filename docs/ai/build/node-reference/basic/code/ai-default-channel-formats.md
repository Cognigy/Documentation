---
 title: "AI Default Channel Formats" 
 slug: "ai-default-channel-formats" 
 hidden: false 
---
# AI Default Channel Formats

You can send JSON-formatted output directly against your [Endpoints](../../../../deploy/endpoints/overview.md) for it to be output to the respective channels.

The [AI Default Channel](../say.md#default-ai-channel-output-type) is special in a way that content from the Default Channel is automatically converted into the correct payloads for all other channels.

Using the [Code](overview.md) Node, you can also send JSON-formatted output to the Endpoints for the AI Default Channel, and it will handle the conversion into the appropriate content. The required payload formats are described below. 

## Payload Formats

??? info "Text"
    Sends text to the Endpoint.

    === "JSON Format"
        ```js
        actions.output("Your text", null);
        ```

    === "Say Node"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/say-in-node.png" width="80%" />
        </figure>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/say-in-webchat.png" width="50%" />
        </figure>

??? info "Text with Quick Replies"
    Sends text and a number of quick reply buttons.

    === "JSON Format"
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

    === "Say Node"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/say-node-quick-replies.png" width="50%" />
          <figcaption>Quick Replies in Say Node</figcaption>
        </figure>

        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/say-node-text-with-quick-reply.png" width="50%" />
          <figcaption>Quick Reply Detailed Settings</figcaption>
        </figure>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/webchat-quick-reply-buttons.png" width="50%" />
        </figure>

??? info "Gallery"
    Outputs a carousel of cards.

    === "JSON Format"
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

    === "Say Node"
        <div style="display: flex; justify-content: space-between;">
          <figure style="width: 30%;">
            <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/gallery-say-node.png" width="80%" />
            <figcaption>Gallery in Say Node</figcaption>
          </figure>

          <figure style="width: 50%;">
            <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/gallery-button-settings.png" width="50%" />
            <figcaption>Gallery Button Settings</figcaption>
          </figure>
        </div>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/gallery-web-chat.png" width="50%" />
          <figcaption>Gallery in Webchat</figcaption>
        </figure>

??? info "Text with Buttons"
    Outputs text with a list of buttons.

    === "JSON Format"
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

    === "Say Node"
        <div style="display: flex; justify-content: space-between;">
          <figure style="width: 30%;">
            <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/buttons-in-editor-ai.png" width="100%" />
            <figcaption>Text with Buttons in Say Node</figcaption>
          </figure>

          <figure style="width: 50%;">
            <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/text-with-buttons.png" width="60%" />
            <figcaption>Text with Buttons Detailed Settings</figcaption>
          </figure>
        </div>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/test-with-buttons-in-web-chat.png" width="50%" />
        </figure>

??? info "List"
    Outputs a list.

    === "JSON Format"
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

    === "Say Node"
        <div style="display: flex; justify-content: space-between;">
          <figure style="width: 50%;">
            <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/edit-node-list.svg" width="60%" />
            <figcaption>List in Say Node</figcaption>
          </figure>

          <figure style="width: 50%;">
            <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/say-list-option-order.svg" width="50%" />
            <figcaption>List Say Node settings</figcaption>
          </figure>
        </div>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/webchat-say-node-list-items.svg" width="80%" />
        </figure>

??? info "Audio"
    Outputs audio from a URL.

    === "JSON Format"
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

    === "Say Node"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audio-and-details-in-say-node.png" width="30%" />
        </figure>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audio_in_webchat.png" width="50%" />
        </figure>

??? info "Image"
    Outputs image from a URL.

    === "JSON Format"
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

    === "Say Node"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/image.png" width="30%" />
        </figure>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/image-in-webchat.png" width="30%" />
        </figure>

??? info "Video"
    Outputs video from a URL.

    === "JSON Format"
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

    === "Say Node"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/video-in-say-node.png" width="30%" />
        </figure>

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/video_in_web_chat.png" width="50%" />
        </figure>

??? info "Adaptive Card"
    Outputs an adaptive card.

    === "JSON Format"
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

    === "Webchat"
        <figure>
          <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/adaptive-card.png" width="60%" />
        </figure>
