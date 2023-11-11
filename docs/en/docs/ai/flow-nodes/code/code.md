---
 title: "Code" 
 slug: "code" 
 hidden: false 
---
# Code

[![Version badge](https://img.shields.io/badge/Updated in-v4.64-blue.svg)](../../../release-notes/4.64.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/code/code.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

Code Nodes enable a Flow creator to execute custom JavaScript or TypeScript code within the Flow. The editor has full IntelliSense and exposes all Cognigy objects and actions. For better performance, the TypeScript code will be transpiled when the node is saved. If the transpilation fails the code will be saved and an error icon will appear in the top right corner of the Code Node, indicating that there is a potential issue with the code. 

The execution of the Code Node will be synchronous, the Flow will continue after the Code Node has finished executing.

Just as within other Nodes, `input`, `context` and `profile` can be accessed (and modified) within Code Nodes. If the script crashes or takes longer than one second to execute, it will be stopped and throw an error. In case of an uncaught error, the Flow Execution will be stopped.

The `actions` object provides access to most internal node functions (see [Actions](ai/flow-nodes/code/actions)) within the Code Node.

The `lastConversationEntries` array contains the user inputs and bot outputs for the past 10 turns of the conversation in the following format:

```json
[
    {
        source: "user",
        text: "hello"
    },
    {
        source: "bot",
        text: "hello and welcome to Cognigy"
    }
]
```

For convenience, the `lodash` ([https://lodash.com/](https://lodash.com/)) and `moment` ([https://momentjs.com/](https://momentjs.com/)) libraries are exposed for use within Code Nodes.

## Restrictions

- Maximum number of characters in the code editor is 200K.
- Maximum code execution time is 1 second. If the limit is exceeded, an error is returned, and the message can be accessed under input.codeNodeError.message. The maximum execution time is not configurable. To run code that takes longer than one second to execute, we recommend using custom [Extensions](../../resources/manage/extensions.md#extension-marketplace).

## Auto-completion (Intellisense) in the Code Node
<div class="divider"></div>

The Code Node supports full Intellisense (auto-complete).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3c5a246-Screen_Shot_008.PNG" width="100%" />
</figure>

When using the  **input** operator a Code Node, all available input object properties will be automatically displayed e.g. text, channel, language, etc

If you have executed the Flow before, the **context** object will also support full Intellisense for the current context.

The **profile** object is also fully supported by Intellisense, which is based on the [Profile Schema]({{config.site_url}}ai/resources/manage/contact-profiles).


## Adding Log Statements to Code Nodes
<div class="divider"></div>

To see log statements on the [Logs page](../../resources/test/logs.md), place `api.log()` statements into the Code Node.

- Input code in a Code Node:
    ```javaScript
    const testKeyAPILOG = "Test for api.log"
    actions.addToContext("test.contextKeyAPI", testKeyAPILOG, "simple")
    api.log("debug", testKeyAPILOG);
    ``` 
- Result on the Logs page:

`2023-01-12 10:27:08 <mark>debug</mark> ***Test for api.log*** { "flowId": "94311a23-b905-4e38-b121-9bffeb658783", "entrypoint": "63bff4588642adbc590be047", "userId": "user1234"`
   
## Sending Facebook JSON
<div class="divider"></div>

You can send Facebook JSON directly from within Code Nodes using the output action. You can do this in two ways:

- Writing the JSON yourself
    ```javaScript
    // build the faceboook reply
    const obj = {
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

    // output the reply
    actions.output("test", obj);
    ``` 

- Using the facebook-bot-messenger module (more information on [GitHub](https://github.com/snlangsuan/facebook-bot-messenger)
    ```javaScript
    // use facebook-bot-messenger to compile reply
    const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Pick a color:');
    builder.addImageOption('Red', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'http://petersfantastichats.com/img/red.png')
        .addImageOption('Green', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'http://petersfantastichats.com/img/green.png');

    // output the reply
    actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
    ``` 
