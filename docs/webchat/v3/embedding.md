---
title: "Embedding"
slug: "embedding"
description: "Embedding Cognigy Webchat v3 into your website allows you to provide a conversational interface powered by virtual agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website."
hidden: false
---

# Webchat 3: Embedding

{! _includes/webchat/beta.md !}

Embedding Webchat v3 into your website allows you to provide a conversational interface powered by virtual agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website.

## Prerequisites

- Ability to modify the HTML content of your website.
- Familiarity with Webchat v3 [embedding parameters](https://github.com/Cognigy/WebchatWidget/blob/v3/docs/embedding.md). Note that specifying parameters in the embedding code that are already configured in Endpoint Settings will overwrite them.
      - Note that some settings are [specific to embedding](https://github.com/Cognigy/WebchatWidget/blob/v3/docs/embedding.md#embedding-configuration), as they aren't available in the Webchat v3 Endpoint settings. 
- Create a [Webchat v3 Endpoint](configuration.md).

## Add the Embedding HTML

Copy the HTML code from the Webchat v3 Endpoint associated with your virtual agent, which you want to deploy on your website:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side **Agent** menu, select **Deploy > Endpoints**.
4. On the **Endpoints** page, select a Webchat v3 Endpoint that you recently created.
5. On the **Endpoint Settings** page, go to the Embedding HTML section.
6. Copy the HTML code by hovering over the code editor and clicking the **Copy to clipboard** button.
7. The HTML code contains the following entities:
    - The Webchat JavaScript bundle. This bundle, hosted externally on GitHub, ensures that your webpage loads the latest version of Webchat v3.
    - The `initWebchat()` function. This function initializes the Cognigy Webchat widget with the provided configuration. The `initWebchat()` function is called with a single argument, which is the Config URL of the Webchat v3 Endpoint to connect to.
      This file contains the necessary JavaScript code to initialize and display the Cognigy Webchat widget on the webpage.
   
    ```html
    <script src="https://github.com/Cognigy/WebchatWidget/releases/download/v3.0.0-beta.19/webchat.js"></script>
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

Note that plugins suitable for Webchat v2 may not be compatible with Webchat v3.

## Customize the Webchat Settings

You can customize the [Webchat settings](https://github.com/Cognigy/WebchatWidget/blob/v3/docs/embedding.md#client-side-configuration) according to your requirements:

- `colors` — customize a Webchat v3 color. In the example:
  `primaryColor` — change the primary color.
- `behavior` — customize the Webchat v3 behavior by adjusting Webchat v3 Endpoint settings. In the example:
    - `enableTypingIndicator` — activate a typing indicator to show when the virtual agent is replying.
    - `messageDelay` — set the time interval, in milliseconds, between virtual agent's messages.
    - `enableSTT` — enable the speech-to-text button in the Reply section of the chat. Note that Mozilla Firefox doesn't support this parameter.
- `embeddingConfiguration` — activate settings related to Webchat browser embedding. These settings aren't configurable via the Endpoint Editor.
    - `awaitEndpointConfig` — wait for the loading of the endpoint configuration. This setting is a necessary precondition for the maintenance settings.
- `maintenance` — configure maintenance mode to prevent users from using Webchat during maintenance. In the example:
    - `mode` — informing the user about maintenance mode. Choose to either `hide` the Webchat widget, `disable` it or `inform` the user about maintenance mode.
    - `text` — a text displayed to users during maintenance mode. For example: `The agent is currently in maintenance mode, please try again later`.
    - `title` — a title displayed to the user during maintenance mode if the mode is set to `inform`. For example, `Maintenance Hours`. Leave empty for no header.

Example:

```html
<script>
  initWebchat('https://endpoint-trial.cognigy.ai/URLTOKEN', {
    settings: {
      colors: {
        primaryColor: "#fab",
      },
      behavior: {
        enableTypingIndicator: true,
        messageDelay: 5,
        enableSTT: true,
      },
      embeddingConfiguration: {
        awaitEndpointConfig: true,
      },
      maintenance: {
        enabled: true,
        mode: "inform",
        text: "The agent is currently in maintenance mode, try again later",
        title: "Maintenance hours",
      },
    },
  }
  );
</script>
```

## Test your Webchat

After implementing the code, open your webpage in a browser to test the functionality.

```html
<html lang="en">
<body>
<script src="https://github.com/Cognigy/WebchatWidget/releases/download/v3.0.0-beta.19/webchat.js"></script>
<script src="./path/to/myPlugin.js"></script>
<link rel="stylesheet" href="./path/to/myStylesheet.css" />
<script>
    initWebchat('https://endpoint-trial.cognigy.ai/URLTOKEN', {
      settings: {
        colors: {
          primaryColor: "#fab",
        },
        behavior: {
          enableTypingIndicator: true,
          messageDelay: 5,
          enableSTT: true,
        },
        embeddingConfiguration: {
          awaitEndpointConfig: true,
        },
        maintenance: {
          enabled: true,
          mode: "inform",
          text: "The agent is currently in maintenance mode, try again later",
          title: "Maintenance hours",
        },
      },
    }
    );
  </script>
</body>
</html>
```

## What's Next?

Customize Webchat further to align with your brand identity and meet specific interaction goals:

- [Webchat API](https://github.com/Cognigy/WebchatWidget/blob/master/docs/webchat-api.md). Use the Webchat API to create tightly coupled integrations.
- [CSS Customization](https://github.com/Cognigy/WebchatWidget/blob/master/docs/css-customization.md). Customize the look and feel of the Webchat to match the design language of your website.
- [Analytics API](https://github.com/Cognigy/WebchatWidget/blob/master/docs/analytics-api.md). Get notified and react to events that happen in your Webchat.
- [Custom Avatars](https://github.com/Cognigy/WebchatWidget/blob/master/docs/custom-avatars.md). Change the avatar of the bot or user during the conversation.