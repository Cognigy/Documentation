---
title: "Code"
slug: "code"
hidden: false
---
# Code

[![Version badge](https://img.shields.io/badge/Updated in-v4.68-blue.svg)](../../../release-notes/4.68.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/code/code.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

Code Nodes enable a Flow creator to execute custom JavaScript or TypeScript code within the Flow. The editor has full IntelliSense and exposes all Cognigy objects and actions. For better performance, the TypeScript code will be transpiled when the node is saved. If the transpilation fails the code will be saved and an error icon will appear in the top right corner of the Code Node, indicating that there is a potential issue with the code.

The execution of the Code Node will be synchronous, the Flow will continue after the Code Node has finished executing.

Just as within other Nodes, `input`, `context` and `profile` can be accessed (and modified) within Code Nodes. If the script crashes or takes longer than one second to execute, it will be stopped and throw an error. In case of an uncaught error, the Flow Execution will be stopped.

The `actions` object provides access to most internal Cognigy functions within the Code Node. For more information, refer to [Actions](actions.md).

The `getTextCleaner` function allows you to get access to an instance of the [Text Cleaner](../../flow-nodes/code/actions.md#text-cleaner).

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

## Sending Facebook JSON
<div class="divider"></div>

You can send Facebook JSON directly from within Code Nodes using the [output](actions.md#actionsoutput--actionssay--apioutput--apisay) action.

You can do this in two ways:

=== "Manually creating the JSON"
    ```javaScript
    // build the facebook reply
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

=== "Utilizing the facebook-bot-messenger module"
    ```javaScript
    // use facebook-bot-messenger to compile reply
    const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Pick a color:');
    builder.addImageOption('Red', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'http://petersfantastichats.com/img/red.png')
        .addImageOption('Green', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'http://petersfantastichats.com/img/green.png');

    // output the reply
    actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
    ``` 
   
    More details can be found on its [GitHub documentation](https://github.com/snlangsuan/facebook-bot-messenger).

## Auto-completion in Code-Nodes Editor
<div class="divider"></div>

The Code Node offers a comprehensive IntelliSense feature.
This feature provides auto-complete suggestions for various objects and actions,
making coding more efficient and reducing the likelihood of errors.

When you use the `input.` operator within a Code Node, you'll see a list of all available properties of the `input` object. These properties may include text, channel, language, and more attributes.

For example:

- `sessionId`
- `userID`
- `entryPoint`
- `flowName`
- `conditionalEntryPointWasExecuted`

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3c5a246-Screen_Shot_008.PNG" width="100%" />
</figure>

Additionally, if you've run a Flow before, the `context` object benefits from full IntelliSense support. When working with the `context` object in your code, you'll receive auto-complete suggestions based on the current context, making accessing and using the relevant information easier.

Furthermore, IntelliSense fully supports the `profile` object.
When working with the `profile` object in your code,
you'll receive auto-complete suggestions that are contextually relevant,
aligning with the structure and attributes
defined in the [Profile Schema](../../resources/manage/contact-profiles.md#profile-schema).

## Adding Log Statements to Code Nodes
<div class="divider"></div>

To view log statements on the [Logs page](../../resources/test/logs.md), insert `api.log()` statements into the Code Node.

Input code in a Code Node:

```javaScript
const testKeyAPILOG = "Test for api.log"
actions.addToContext("test.contextKeyAPI", testKeyAPILOG, "simple")
api.log("debug", testKeyAPILOG);
``` 

Result on the Logs page:

`2023-01-12 10:27:08 <mark>debug</mark> ***Test for api.log*** { "flowId": "94311a23-b905-4e38-b121-9bffeb658783", "entrypoint": "63bff4588642adbc590be047", "userId": "user1234"`
   