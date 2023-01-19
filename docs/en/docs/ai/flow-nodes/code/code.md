---
 title: "Code" 
 slug: "code" 
 hidden: false 
---
# Code

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8d586ff-code-node.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>

Code Nodes enable a Flow creator to execute custom JavaScript or TypeScript code within the Flow. The editor has full IntelliSense and exposes all Cognigy objects and actions. For better performance, the TypeScript code will be transpiled when the node is saved. If the transpilation fails the code will be saved and an error icon will appear in the top right corner of the Code Node, indicating that there is a potential issue with the code. 

The execution of the Code Node will be synchronous, the Flow will continue after the Code Node has finished executing.

???+ warning "Maximum Execution Time"
    Code Nodes are set by default to run for a maximum of 1000 ms before returning an error. This value is currently not configurable. To execute code that takes longer to execute, we recommend using custom [Extensions]({{config.site_url}}ai/resources/manage/extensions/?h=extension#extension-marketplace). The error can be accessed under ```input.codeNodeError.message```

Just as within other Nodes, `input`, `context` and `profile` can be accessed (and modified) within Code Nodes. If the script crashes or takes longer than one second to execute, it will be stopped and throw an error. In case of an uncaught error, the Flow Execution will be stopped.

The `actions` object provides access to most internal node functions within the Code Node.

For convenience, the `lodash` ([https://lodash.com/](https://lodash.com/)) and `moment` ([https://momentjs.com/](https://momentjs.com/)) libraries are exposed for use within Code Nodes.

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

## Auto-completion in Code-Nodes Editor
<div class="divider"></div>

When using the  **"input."** operator in the Node Editor of a "Code-Node", all available input objects  will be automatically displayed e.g. 

question<br/>
entryPoint<br/>
flowName<br/>
traceId<br/>
localeId<br/>
conditionalEntryPointWasExecuted

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3c5a246-Screen_Shot_008.PNG" width="100%" />
</figure>

## Adding Log Statements to Code Nodes
<div class="divider"></div>

You can place api.log() statements into Code Nodes, to see log statements on the Logs Page, which you can find under **Test**, and then **Logs** within Cognigy.AI.

- An example for a Code Node including a Debug Log:
    ```javaScript
    const testKeyAPILOG = "Test for api.log"
    actions.addToContext("test.contextKeyAPI", testKeyAPILOG, "simple")
    api.log("debug", testKeyAPILOG);
    ``` 
- This will produce a result in the UI Logs such as this example:

>2023-01-12 10:27:08 <mark>debug</mark> ***Test for api.log*** { "flowId": "94311a23-b905-4e38-b121-9bffeb658783", "entrypoint": "63bff4588642adbc590be047", "userId": "user1234"
   
