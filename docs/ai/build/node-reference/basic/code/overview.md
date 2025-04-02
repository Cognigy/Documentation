---
title: "Overview"
slug: "code"
hidden: false
---
# Code

[![Version badge](https://img.shields.io/badge/Updated in-v4.68-blue.svg)](../../../../../release-notes/4.68.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/code/code.png" width="50%" />
</figure>

## Description

Code Nodes enable a Flow creator to execute custom JavaScript or TypeScript code within the Flow.
The Code Node editor has full IntelliSense and exposes all Cognigy objects and actions.
For better performance, the TypeScript code is transpiled when the Node is saved.
If the transpilation fails,
the code is saved and an error icon appears in the top right corner of the Code Node,
indicating that there is a potential issue with the code.

The execution of the Code Node is synchronous, the Flow continues after the Code Node has finished executing.

Just as in other Nodes, `input`, `context`, and `profile` can be accessed and modified from Code Nodes.
If the script crashes, it is stopped and throws an error. In case of an uncaught error, a Flow execution is stopped.

The `actions` object provides access to most internal Cognigy functions within the Code Node. For more information, refer to [Actions](actions.md).

The `getTextCleaner` function allows you to get access to an instance of the [Text Cleaner](modules.md).

The `lastConversationEntries` array contains the user inputs and agent outputs for the past 10 turns of the conversation in the following format:

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

## Limitations

- The maximum number of characters in the code editor is 200K.
- The maximum code execution time is 1 second. If the limit is exceeded, an error is returned, and the message can be accessed in the `input.codeNodeError.message` Input object. The maximum execution time isn't configurable. To run code that takes longer than one second to execute, we recommend using custom [Extensions](../../../extensions.md#extension-marketplace).
- The maximum number of API calls per Code Node is 100. If this limit is exceeded, you can access the returned error message in the Input object via `input.codeNodeError.message`.

## Auto-Complete in the Code Node Editor

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

Additionally, if you've run a Flow before, the `context` object benefits from full IntelliSense support. When working with the `context` object in your code, you'll receive auto-complete suggestions based on the current context, making accessing and using the relevant information easier.

Furthermore, IntelliSense fully supports the `profile` object.
When working with the `profile` object in your code,
you'll receive auto-complete suggestions that are contextually relevant,
aligning with the structure and attributes
defined in the [Profile Schema](../../../../analyze/contact-profiles.md#profile-schema).

## Adding Log Statements to Code Nodes

To view log statements on the [Logs page](../../../../test/logs.md), insert `api.log()` statements into the Code Node.

Input code in a Code Node:

```javaScript
const testKeyAPILOG = "Test for api.log"
actions.addToContext("test.contextKeyAPI", testKeyAPILOG, "simple")
api.log("debug", testKeyAPILOG);
``` 

Result on the Logs page:

`2023-01-12 10:27:08 <mark>debug</mark> ***Test for api.log*** { "flowId": "94311a23-b905-4e38-b121-9bffeb658783", "entrypoint": "63bff4588642adbc590be047", "userId": "user1234"`
   
## Code Node Error Handling

If a Code Node times out or sends too many events, the Flow execution doesn't stop.
Instead, an error message is written to the `input.codeNodeError` Input object.

## Example

### Sending Facebook JSON

You can send Facebook JSON directly from within Code Nodes using the [output](actions.md) action.

??? info "JSON Sample"
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

## More Information

- [Actions](actions.md)
- [Input object](../../../../test/interaction-panel/input.md)
- [Context object](../../../../test/interaction-panel/context.md)
- [Profile object](../../../../test/interaction-panel/profile.md)