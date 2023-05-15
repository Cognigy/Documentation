---
title: "Getting Started"
slug: "create-signature"
hidden: true
---

# Getting Started

In this tutorial, you will learn how to build a simple xApp that allows users to collect their signatures. The xApp enables users to draw their signature in an HTML-based interface and submit it to a Flow for further processing. We will cover the necessary code snippets and steps to create this functionality.

## Explore Code

1. Open the code in the Code Sandbox by clicking the following link:
   [![Edit Basic Implementation](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/signature-pad-xapp-z2zsuj)
2. The code contains a submit button that, when clicked, displays an alert with the JSON data containing the base64-encoded image in PNG format. The data is represented in a JSON format with a single field called `signaturePng`.
   ```js
   submitButton.addEventListener("click", (event) => {
      if (signaturePad.isEmpty()) {
        alert("Please provide a signature first")
      } else {
        const data = { signaturePng: signaturePad.toDataURL() }
        SDK.submit(data)
      }
    })
   ```
3. To include the required SDK in your xApp, use the SDK app page URL and the SDK's submit function to send the JSON data. 
4. In the `app-page-sdk.js` file, you will find an xApp page SDK mock file that creates the window.SDK object. The provided mock file defines the submit function to display an alert with the submitted data. In the actual shell page of the xApp, the data will be sent to the Cognigy flow for further processing. <br>
    ```js
    window.SDK = {
    submit: (data) => alert(JSON.stringify(data))
    }
    ```
   
## Build the xApp

1. Open a new Flow.
2. In the Flow editor, add an **xApp: Init Session** Node. The agent session needs to be initialized to communicate with the Cognitive backend.
   The **xApp: Init Session** Node is used to start the session, which provides the token and the xApp URL in the `agent.session` object.
3. Below **xApp: Init Session** Node, add an **xApp: Show HTML** Node. Copy the code from Code Sandbox and paste it to the **HTML Document** field with selected **Full HTML Document** content.
4. Click **Save Node**.
5. Below the **xApp: Show HTML** Node, add a **Question** Node. 
6. In the Node, select the **xApp** question type.
7. Select **Text with Buttons** output type.
8. In the text field, enter the text: `Please draw your signature in the xApp`.
9. Click **Add Button**. Fill in the following fields:
    - **Button xApp** — enter the text: `Open xApp`.
    - **Select Button Type** — select **URL**.
    - **URL** — add **xApp Session URL**.
    - **URL Target** — select open URL in a new tab.
10. Click **Save**.
11. Click **Save Node**.
12. Below the **Question** Node, add a **Say** Node.
13. In the **Say** Node, select the **Gallery** Output Type.
14. Click **Card**. In the Title field, specify **Received signature**.
15. Click **Save Node**.

Test your Flow via the [Interaction Panel](../tools/interaction-panel/interaction-panel.md).

Once the node is added, you should always start with the Init Session node. After that, when you try again, your input object will contain the token and the URL for the xApp Framework. Take this URL and create a signature.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/tutorial-signature.png" width="100%">
</figure>