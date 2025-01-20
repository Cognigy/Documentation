---
title: "Embedding"
slug: "embedding"
description: "Embedding Cognigy Webchat v2 into your website allows you to provide a conversational interface powered by AI Agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website."
hidden: false
---

# Webchat 2: Embedding

{! _includes/webchat/deprecation-webchat-v2.md !}

Embedding Webchat v2 into your website allows you to provide a conversational interface powered by AI Agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website.

## Prerequisites

- Ability to modify the HTML content of your website.
- Familiarity with Webchat v2 [embedding parameters](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md). Note that specifying parameters in the embedding code that are already configured in Endpoint Settings will overwrite them.
- Create a [Webchat Endpoint](configuration.md).

## Add the Embedding HTML

Copy the HTML code from the Webchat v2 Endpoint associated with your AI Agent, which you want to deploy on your website:

1. In the left-side menu of the Cognigy.AI interface, select a Project.
2. In the left-side menu of the Project, go to **Deploy > Endpoints**.
3. On the **Endpoints** page, select a Webchat Endpoint that you recently created.
4. On the **Endpoint Settings** page, go to the Embedding HTML section.
5. Copy the HTML code by hovering over the code editor and clicking the **Copy to clipboard** button.
6. The HTML code contains the following entities:
    - The Webchat JavaScript bundle — hosted externally on GitHub, ensures that your web page loads the latest version of Webchat v2. You can also deploy another Webchat v2 version by replacing `https://github.com/Cognigy/WebchatWidget/releases/latest/download/webchat.js` with `https://github.com/Cognigy/WebchatWidget/releases/download/<webchat-version>/webchat.js`, where `<webchat-version>` is the Webchat v2 version you want to use. For example, to use Webchat v2.59.0, enter `https://github.com/Cognigy/WebchatWidget/releases/download/v2.59.0/webchat.js`. If you enter a specific version, ensure it is the same or later than the version where the Webchat v2 features you use were introduced. Learn more about Webchat v2 versions on the [Webchat v2 release page](https://github.com/Cognigy/WebchatWidget/releases).
    - The `initWebchat()` function — initializes the Cognigy Webchat widget with the provided configuration. The `initWebchat()` function is called with a single argument, which is the Config URL of the Webchat v2 Endpoint to connect to.
      This file contains the necessary JavaScript code to initialize and display the Cognigy Webchat widget on the web page.

    ```html
    <script src="https://github.com/Cognigy/WebchatWidget/releases/latest/download/webchat.js"></script>
    <script>
        initWebchat(
            "https://endpoint-trial.cognigy.ai/c62364a8a1b1e986efc5c5b3bed5b2300aeab6788a6551f88fa24dcf9c37dbmf"
        );
    </script>
    ```


## Include Custom Plugins and Stylesheets

If you have custom [plugins](../plugins.md) or [stylesheets](https://github.com/Cognigy/WebchatWidget/blob/master/docs/css-customization.md) for the Webchat widget, include them by adding the appropriate `<script>` and `<link>` tags respectively. Replace the placeholders with the paths to your custom files.

```html
<script src="./path/to/myPlugin.js"></script>
<link rel="stylesheet" href="./path/to/myStylesheet.css"/>
```

## Customize the Webchat Settings

You can customize the [Webchat settings](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md#client-side-configuration) according to your requirements:

- `userId` — assign a unique ID to each user.
- `sessionId` — assign a session ID for the current chat session.
- `settings` — customize the Webchat v2 behavior by changing the Webchat Endpoint settings. In the example:
    - `disableLocalStorage` — disable local storage of chat history.
    - `useSessionStorage` — determine whether to use session storage.

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

After implementing the code, open your web page in a browser to test the functionality.

```html
<html lang="en">
<body>
    <script src="https://github.com/Cognigy/WebchatWidget/releases/latest/download/webchat.js"></script>
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
- [CSS Customization](https://github.com/Cognigy/WebchatWidget/blob/master/docs/css-customization.md). Customize the look and feel of the Webchat widget to match the design language of your website.
- [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md). Learn how to save user's chat history, so they can refer to them later.
- [Analytics API](https://github.com/Cognigy/WebchatWidget/blob/master/docs/analytics-api.md). Get notified and react to events that happen in your Webchat.
- [Custom Avatars](https://github.com/Cognigy/WebchatWidget/blob/master/docs/custom-avatars.md). Change the avatar of the bot or user during the conversation.