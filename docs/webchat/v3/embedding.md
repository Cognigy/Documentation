---
title: "Embedding"
slug: "embedding"
description: "Embedding Cognigy Webchat v3 into your website allows you to provide a conversational interface powered by AI Agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website."
hidden: false
---

# Webchat 3: Embedding

[![Version badge](https://img.shields.io/badge/Updated in-v4.83-blue.svg)](../../release-notes/4.82.md)

Embedding Webchat v3 into your website allows you to provide a conversational interface powered by AI Agents, enhancing user interaction and support. This process involves several key steps, from setting up your Cognigy Endpoint to configuring the widget's appearance and behavior on your website.

## Prerequisites

- Ability to modify the HTML content of your website.
- Familiarity with Webchat v3 [embedding parameters](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md). Note that specifying parameters in the embedding code that are already configured in Endpoint Settings will overwrite them.
      - Note that some settings are [specific to embedding](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md#embedding-configuration), as they aren't available in the Webchat v3 Endpoint settings. 
- Create a [Webchat v3 Endpoint](configuration.md).

## Add the Embedding HTML

Copy the HTML code from the Webchat v3 Endpoint associated with your AI Agent, which you want to deploy on your website:

1. In the left-side menu Cognigy.AI interface, select a Project.
2. In the left-side menu of the Project, go to **Deploy > Endpoints**.
3. On the **Endpoints** page, select a Webchat v3 Endpoint that you recently created.
4. On the **Endpoint Settings** page, go to the Embedding HTML section.
5. Copy the HTML code by hovering over the code editor and clicking the **Copy to clipboard** button.
6. The HTML code contains the following entities:
    - The Webchat JavaScript bundle — hosted externally on GitHub, ensures that your web page loads the latest version of Webchat v3. You can also deploy another Webchat v3 version by replacing `https://github.com/Cognigy/Webchat/releases/latest/download/webchat.js` with `https://github.com/Cognigy/Webchat/releases/download/<webchat-version>/webchat.js`, where `<webchat-version>` is the Webchat v3 version you want to use. For example, to use Webchat v3.2.0, enter `https://github.com/Cognigy/Webchat/releases/download/v3.2.0/webchat.js`. If you enter a specific version, ensure it is the same or later than the version where the Webchat v3 features you use were introduced. Learn more about Webchat v3 versions on the [Webchat v3 release page](https://github.com/Cognigy/Webchat/releases).
    - The `initWebchat()` function — initializes the Cognigy Webchat widget with the provided configuration. The `initWebchat()` function is called with a single argument, which is the Config URL of the Webchat v3 Endpoint to connect to.
      This file contains the necessary JavaScript code to initialize and display the Cognigy Webchat widget on the web page.
   
    ```html
    <script src="https://github.com/Cognigy/Webchat/releases/latest/download/webchat.js"></script>
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

You can customize the [Webchat settings](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md#client-side-configuration) according to your requirements:

- `colors` — customize a Webchat v3 color. In the example:
  `primaryColor` — change the primary color.
- `behavior` — customize the Webchat v3 behavior by adjusting Webchat v3 Endpoint settings. In the example:
    - `enableTypingIndicator` — activate a typing indicator to show when the AI Agent is replying.
    - `messageDelay` — set the time interval, in milliseconds, between AI Agent's messages.
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

### RTL Configuration

By default, the Webchat widget uses the LTR (left-to-right) layout. 
To override this setting for languages that use [RTL (right-to-left)](features.md#rtl-language-support),
add the attribute `dir="rtl"` to the `<html>` tag on the web page where the widget is placed. 
For example, for a web page in Arabic, use `<html lang="ar" dir="rtl">`.

## Test your Webchat

After implementing the code, open your web page in a browser to test the functionality.

=== "LTR (Left-to-Right) Layout"

    ```html
    <html lang="en">
    <body>
    <script src="https://github.com/Cognigy/Webchat/releases/latest/download/webchat.js"></script>
    <script src="./path/to/myPlugin.js"></script>
    <link rel="stylesheet" href="./path/to/myStylesheet.css"/>
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

=== "RTL (Right-to-Left) Layout"
      
    ```html
    <html lang="ar" dir="rtl">
    <body>
    <script src="https://github.com/Cognigy/Webchat/releases/latest/download/webchat.js"></script>
    <script src="./path/to/myPlugin.js"></script>
    <link rel="stylesheet" href="./path/to/myStylesheet.css"/>
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
              text: "الوكيل في وضع الصيانة حالياً، يرجى المحاولة مرة أخرى لاحقاً",
              title: "ساعات الصيانة",
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

- [Webchat API](https://github.com/Cognigy/Webchat/blob/main/docs/webchat-api.md). Use the Webchat API to create tightly coupled integrations.
- [CSS Customization](https://github.com/Cognigy/Webchat/blob/main/docs/css-customization.md). Customize the look and feel of the Webchat to match the design language of your website.
- [Analytics API](https://github.com/Cognigy/Webchat/blob/main/docs/analytics-api.md). Get notified and react to events that happen in your Webchat.
- [Custom Avatars](https://github.com/Cognigy/Webchat/blob/main/docs/custom-avatars.md). Change the avatar of the bot or user during the conversation.