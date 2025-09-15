---
title: "Embedding via npm"
slug: "embedding-via-npm"
description: "Embedding Cognigy Webchat v3 into your JavaScript project allows you to provide a conversational interface powered by AI Agents, enhancing user interaction and support. This guide covers installing via npm, initializing the widget, and customizing its behavior and appearance."
hidden: false
tags:
   - webchat v3 embedding
   - webchat v3 npm package
   - webchat v3 npm embedding
---

# Webchat 3: Embedding via npm

[![Version badge](https://img.shields.io/badge/Added in-v2025.18-blue.svg)](../../../release-notes/2025.18.md)

!!! warning "Support React versions <19.0"
    React version 19 isn't yet supported. Support is expected to be added in a future release. For more details, see the [Restrictions](#restrictions) section.

Embedding Webchat v3 using npm lets you add a Webchat widget to your JavaScript project. This approach works best for modern web apps that use npm packages and bundlers.

The [Webchat npm](https://www.npmjs.com/package/@cognigy/webchat) package lets you pin versions and integrate Webchat into CI/CD pipelines, giving your team better control and stability across environments.

## Prerequisites

- Basic understanding of JavaScript and npm. Familiarity with how to run a JavaScript project, for example, using `npm start` or similar commands.
- A JavaScript project set up with npm and the ability to modify it.
- Access to a Cognigy.AI instance with the [Webchat v3 Endpoint](../configuration.md).
- Familiarity with Webchat v3 [embedding parameters](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md). Keep in mind that:
    - Specifying parameters in the embedding code overwrites parameters configured in the Endpoint settings.
    - Some settings are [specific to embedding parameters](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md#embedding-configuration) and aren't available in the Endpoint settings.

## Restrictions

- If your app uses React, the React version must be earlier than 19.0; 19.0 isn't allowed.

## Embedding

To embed Webchat v3 in your JavaScript project, follow these steps:

1. Install the Webchat npm package:

    ```bash
    npm install @cognigy/webchat
    ```

2. Import and initialize the Webchat widget in your JavaScript code:

    === "ESM (requires React)"

        When using the ESM build in a non-React project, you need to include React and ReactDOM manually:

        ```html
        <!-- Include React and ReactDOM -->
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        
        <!-- Include Webchat ESM bundle via bundler (for example, Webpack, Rollup) -->
        <script type="module">
          import { initWebchat } from "@cognigy/webchat";
        
          initWebchat("https://endpoint-trial.cognigy.ai/c62364a8a1b1e986efc5c5b3bed5b2300aeab6788a6551f88fa24dcf9c37dbmf");
        </script>
        ```
    
    === "UMD (includes React)"

        The UMD build is self-contained and can be used directly without including React or ReactDOM:

        ```html
        <!-- Include Webchat UMD bundle directly -->
        <script src="https://unpkg.com/@cognigy/webchat/dist/webchat.umd.js"></script>
        
        <script>
            initWebchat("https://endpoint-trial.cognigy.ai/c62364a8a1b1e986efc5c5b3bed5b2300aeab6788a6551f88fa24dcf9c37dbmf");
        </script>
        ```

The `initWebchat()` function is called with the required argument, which is the Config URL of the Webchat v3 Endpoint to connect to.

## Include Custom Plugins and Stylesheets

If you have custom [plugins](../../plugins.md) or [stylesheets](https://github.com/Cognigy/WebchatWidget/blob/master/docs/css-customization.md):

```js
import "./path/to/myPlugin.js";
import "./path/to/myStylesheet.css";
```

## Customize Webchat Settings

You can customize the widget using a configuration object passed to `initWebchat`:

```js
initWebchat('https://endpoint-trial.cognigy.ai/URLTOKEN', {
  settings: {
    colors: {
      primaryColor: "#fab",
    },
    behavior: {
      enableTypingIndicator: true,
      messageDelay: 5,
      enableSTT: true, // Note: Not supported in Firefox
    },
    embeddingConfiguration: {
      awaitEndpointConfig: true,
    },
    maintenance: {
      enabled: true,
      mode: "inform", // hide | disable | inform
      text: "The agent is currently in maintenance mode, try again later",
      title: "Maintenance hours",
    },
    widgetSettings: {
      customAllowedHtmlTags: ["a", "abbr", "address", "article", "b", "blockquote", "div", "span", "img", "p"], // Example
    },
  },
});
```

## RTL (Right-to-Left) Configuration

For RTL languages, ensure the HTML root element has the `dir="rtl"` attribute:

```html
<html lang="ar" dir="rtl"></html>
```

The Webchat widget will automatically adjust its layout.

## Test Webchat

Run your JavaScript project and verify the widget loads and interacts correctly.

## What's Next?

Customize Webchat further to align with your brand identity and meet specific interaction goals:

- [Webchat API](https://github.com/Cognigy/Webchat/blob/main/docs/webchat-api.md). Use the Webchat API to create tightly coupled integrations.
- [CSS Customization](https://github.com/Cognigy/Webchat/blob/main/docs/css-customization.md). Customize the look and feel of the Webchat to match the design language of your website.
- [Analytics API](https://github.com/Cognigy/Webchat/blob/main/docs/analytics-api.md). Get notified and react to events that happen in your Webchat.
- [Custom Avatars](https://github.com/Cognigy/Webchat/blob/main/docs/custom-avatars.md). Change the avatar of the bot or user during the conversation.