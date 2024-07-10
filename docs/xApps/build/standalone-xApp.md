---
title: "Build a Standalone xApp"
slug: "standalone-xApp"
hidden: true
---

# Build a Standalone xApp

In this tutorial, you will learn how to build and deploy an xApp as a standalone application. A standalone xApp can be accessed via a URL, enabling direct user interaction without the need for a primary communication channel.

## Configure the Flow

### xApp: Init Session Node

1. Create a new Flow in Cognigy and name it `Standalone xApp Tutorial`.
2. In the Flow Editor, add an **xApp: Init Session** Node.
3. Open the Node editor and fill in the following fields:
    - In the **Style Customization** section:
        - **Background Color** — specify `darkslategray`.
        - **Logo** — select **Show Default Logo**.
    - In the **xApp Screens** section:
        - **Loading Text** — specify `Loading...`
    - In the **Intermediate Screen** section:
        - **Customization type** — select **Customized Texts** from the list.
        - **Text Override** — enter `Thank you for the info`. You can now close this tab.
    - In the **Connection Screen** section:
        - **Customization type** — select **No customization**.
4. Click **Save Node**.

### Say Node

1. Below the **xApp: Init Session** Node, add a **Say** Node.
2. In the **Options** section, in the **Data** field, specify the code:

    ```json
    {
     "xAppUrl": "{{"{{ input.apps.url }}"}}"
    }
    ```
   This data-only message is received in the `handleExecutionFinished` transformer method. The URL is then used to redirect the browser to the xApp Shell page.

3. Click **Save Node**.

### xApp: Show HTML Node

1. Below the **Say** Node, add an **xApp: Show HTML** Node.
2. In the **Content** section, select **Full HTML Document**.
3. In the **HTML Document** section, specify the following code:
    ```html
     <!DOCTYPE html>
     <html lang="en">
    
     <head>
     <script src="/sdk/app-page-sdk.js"></script>
     </head>
    
     <body>
     <p>Received info:</p>
     <pre>"{{"{{ JSON.stringify(input.data, null, 2) }}"}}"</pre>
     <button type="button" onclick="SDK.submit({ option: 'ok' })">OK</button>
     </body>
    
     </html>
    ```
4. Click **Save Node**.

### xApp: Show Adaptive Card Node

1. Below the **Question** Node, add the **xApp: Show Adaptive Card** Node.
2. In the **AdaptiveCard Definition** field, specify the following code:
    ```json
    {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.5",
        "body": [
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "Tell us about yourself",
                        "weight": "Bolder",
                        "size": "Medium",
                        "wrap": true,
                        "style": "heading"
                    },
                    {
                        "type": "TextBlock",
                        "text": "We just need a few more details to get you booked for the trip of a lifetime!",
                        "isSubtle": true,
                        "wrap": true
                    },
                    {
                        "type": "Input.Text",
                        "id": "name",
                        "label": "Your name (Last, First)",
                        "isRequired": true,
                        "regex": "^[A-Z][a-z]+, [A-Z][a-z]+$",
                        "errorMessage": "Please enter your name in the specified format",
                        "value": "Doe, John"
                    },
                    {
                        "type": "Input.Text",
                        "id": "email",
                        "label": "Your email",
                        "regex": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z0-9-]{2,4}$",
                        "isRequired": true,
                        "errorMessage": "Please enter a valid email address",
                        "style": "Email",
                        "value": "john@doe.cc"
                    },
                    {
                        "type": "Input.Text",
                        "id": "phone",
                        "label": "Phone Number (xxx xxx xxxx)",
                        "regex": "^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$",
                        "errorMessage": "Invalid phone number. Please enter a 10 digit phone number",
                        "style": "Tel"
                    }
                ]
            }
        ],
        "actions": [
            {
                "type": "Action.Submit",
                "title": "Submit",
                "style": "positive"
            }
        ]
    }
    ```
3. Under **Waiting Behavior**, select **Wait for xApp User Input**.
4. Click **Save Node**.

### xApp: Show HTML Node

1. Below the **xApp: Show Adaptive Card** Node, add an **xApp: Show HTML** Node.
2. In the **Content** field, select **Full HTML Document**.
3. In the **HTML Document** field, specify the following code:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <script src="/sdk/app-page-sdk.js"></script>
    </head>
    
    <body>
      <p>
          Received info:
      <hr>
        Name: "{{"{{ input.data._cognigy._app.payload.name }}"}}"<br>
        Email: "{{"{{ input.data._cognigy._app.payload.email }}"}}"<br>
        Phone: "{{"{{ input.data._cognigy._app.payload.phone }}"}}"<br>
      </p>
      <button type="button" onclick="SDK.submit({ option: 'ok' })">OK</button>
    </body>
    
    </html>
    ```
4. Under **Waiting Behavior**, select **Wait for xApp User Input**.
5. Click **Save Node**.

<figure>
    <img class="image-center" src="../../../_assets/xApps/build/standalone/flow-result.png" width="100%">
</figure>

Now you can test the result via the Interaction Panel.

## Test the Flow

1. Open the Interaction Panel and enter a message like `Hi` to trigger the Flow.
2. In the Interaction Panel, expand the **Event/Message with payload** section to access the xApp session. Also, you can check the **Info** tab to see the xApp's URL in the`input.apps.url`input object.
3. Open the xApp's URL.
4. Once the page is opened, click **Ok**. The Adaptive Card form will be loaded.
5. In the **Phone Number** field, specify a mobile number and click **Submit**.

   <figure>
    <img class="image-center" src="../../../_assets/xApps/build/standalone/test-flow.png" width="100%">
   </figure>

If the operation is successful, you will receive the following message: `Thank you for the info. You can now close this tab`.

After that, you can deploy your xApp.

## Deploy the xApp

1. Go to **Deploy > Endpoints**.
2. Click **+ New Endpoint**.
3. Select the **Rest** Endpoint from the list.
4. Specify a unique name and select the corresponding Flow.
5. In the Endpoint editor, go to the **Transformer Functions** section.
6. Activate the **Enable Input Transformer** and **Enable Execution Finished Transformer** settings.
7. In the **Transformer** field, specify the following code:
    ```js
    const generateId = () => 'xxxx-xxxx-xxxx-xxxx'.replace(/x/g, () => String.fromCharCode(97 + Math.random() * 25))
    
    createRestTransformer({
      handleInput: async ({ endpoint, request, response }) => {
        const userId = 'xapp-user'
        const sessionId = generateId()
        const text = 'GET_STARTED'
        const data = request.query
        return { userId, sessionId, text, data }
      },
    
      handleOutput: async ({ output, endpoint, userId, sessionId }) => {
        return output
      },
    
      handleExecutionFinished: async ({ processedOutput, outputs, userId, sessionId, endpoint, response }) => {
        const { xAppUrl } = processedOutput.data
        if (xAppUrl) {
          response
            .redirect(xAppUrl)
        //   .status(200)
        //   .header('Content-Type', 'application/json')
        //   .send(JSON.stringify({ processedOutput, outputs }, null, 2))
        }
        return processedOutput
      }
    })
    ```
8. Click **Save**.

To check if the xApp was deployed as expected, copy and paste the Endpoint URL into your browser's address bar and test your Flow again.

## More Information

- [xApp Nodes](../../ai/build/node-reference/xApp/overview.md)
- [Build an xApp](overview.md)
- [xApps](../overview.md)