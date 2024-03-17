---
title: "Embedding"
slug: "embedding"
description: "Embedding Cognigy Webchat v2 into your website allows you to provide a conversational interface powered by virtual agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website."
hidden: false
---

# Webchat 2: Embedding

Embedding Webchat v2 into your website allows you to provide a conversational interface powered by virtual agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website.

## Prerequisites

- Ability to modify your website's HTML content.
- Familiarity with Webchat v2 [embedding parameters](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md). Note that if you specify parameters in the embedding code that are already configured in Endpoint Settings, the embedding parameters overwrite them.
- Created a [Webchat Endpoint](configuration.md).

## Add the Embedding HTML

Copy the HTML code from the Webchat v2 Endpoint associated with your virtual agent, which you want to deploy on your website:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side **Agent** menu, select **Deploy > Endpoints**.
4. On the **Endpoints** page, select a Webchat Endpoint that you recently created.
5. On the **Endpoint Settings** page, go to the Embedding HTML section.
6. Copy the HTML code by hovering over the code editor and clicking the **Copy to clipboard** button.
7. The HTML code contains the following entities:
    - The Webchat JavaScript bundle. This bundle, hosted externally on GitHub, ensures that your webpage loads the latest version of Webchat v2.
    - The `initWebchat()` function. This function initializes the Cognigy Webchat widget with the provided configuration. The `initWebchat()` function is called with a single argument, which is the Config URL of the Webchat v2 Endpoint to connect to.
      This file contains the necessary JavaScript code to initialize and display the Cognigy Webchat widget on the webpage.

    ```html
    <script src="https://github.com/Cognigy/WebchatWidget/releases/download/v2.20.0/webchat.js"></script>
    <script>
        initWebchat(
            "https://endpoint-trial.cognigy.ai/c62364a8a1b1e986efc5c5b3bed5b2300aeab6788a6551f88fa24dcf9c37dbmf"
        );
    </script>
    ```

## Include Custom Plugins and Stylesheets

If you have custom [plugins](../plugins.md) or [stylesheets](https://github.com/Cognigy/WebchatWidget/blob/master/docs/css-customization.md) for the webchat, include them by adding the appropriate `<script>` and `<link>` tags respectively. Replace the placeholders with the paths to your custom files.

```html
<script src="./path/to/myPlugin.js"></script>
<link rel="stylesheet" href="./path/to/myStylesheet.css"/>
```

## Customize the Webchat Settings

You can customize the [Webchat settings](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md#client-side-configuration) according to your requirements:

- `userId` - assign a unique ID to each user.
- `sessionId` - assign a session ID for the current chat session.
- `settings` - customize the Webchat behavior by changing the Webchat Endpoint settings. In the example:
    - `disableLocalStorage` - disable local storage of chat history.
    - `useSessionStorage` - determine whether to use session storage.

Example:

```html
<script>
    initWebchat('https://endpoint-trial.cognigy.ai/URLTOKEN', {
        userId: "user2",
        sessionId: "session2",
        settings: {
            disableLocalStorage: true,
            useSessionStorage: false
        }
    }).then(function (webchat) {
        window.cognigyWebchat = webchat;
        webchat.sendMessage("text",{name:"tom"});
        webchat.open();
    });
</script>
```

!!! warning
    When embedding the code, if you're using the `maintenance`, `businessHours`, and `connectivity` settings, ensure that you include the `[awaitEndpointConfig](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md#endpoint-settings)` setting. Otherwise, those settings won't function.

## Test Your Webchat

After implementing the code, open your webpage in a browser to test the functionality.

```html
<html lang="en">
<body>
    <script src="https://github.com/Cognigy/WebchatWidget/releases/download/v2.20.0/webchat.js"></script>
    <script src="./path/to/myPlugin.js"></script>
    <link rel="stylesheet" href="./path/to/myStylesheet.css"/>
    <script>
        initWebchat('https://endpoint-trial.cognigy.ai/URLTOKEN', {
            userId: "user2",
            sessionId: "session2",
            // Set endpoint settings
            settings:{"disableLocalStorage": true, "useSessionStorage": false}
        }).then(function (webchat) {
            window.cognigyWebchat = webchat;
            // send message:
            webchat.sendMessage("text",{name:"tom"})
            // open Webchat Widget
            webchat.open();
        })
    </script>
</body>
</html>
```

## What's Next?

Customize Webchat further to align with your brand identity and meet specific interaction goals:

- [Webchat API](https://github.com/Cognigy/WebchatWidget/blob/master/docs/webchat-api.md). Use the Webchat API to create tightly coupled integrations.
- [CSS Customization](https://github.com/Cognigy/WebchatWidget/blob/master/docs/css-customization.md). Customize the look and feel of the Webchat to match the design language of your website.
- [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md). Learn how to save user's chat history, so they can refer to them later.
- [Analytics API](https://github.com/Cognigy/WebchatWidget/blob/master/docs/analytics-api.md). Get notified and react to events that happen in your Webchat.
- [Custom Avatars](https://github.com/Cognigy/WebchatWidget/blob/master/docs/custom-avatars.md). Change the avatar of the bot or user during the conversation.