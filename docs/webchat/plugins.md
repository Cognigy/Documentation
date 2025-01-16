---
title: "Webchat Plugins"
slug: "webchat-plugins"
description: "Utilize pre-made plugins for your Cognigy Webchat or develop your own plugin to customize it according to your needs."
hidden: false
tags:
  - Webchat
  - Plugins
  - Plugin
---

# Webchat Plugins

You can customize the Webchat by adding plugins from the [plugin collection](https://github.com/Cognigy/WebchatPlugins/tree/master) on GitHub or by creating your own. Set up plugins:

- [For testing purposes in the Demo Webchat](#test-plugins-in-demo-webchat) by using the Webchat Endpoint settings.
- In your production environment, [to add plugins](#implement-plugins-in-production) to the Webchat in your website.

After setting them up, you need to [trigger them in the Flow editor](#trigger-plugins).

## Restrictions

Webchat v3 may not support plugins compatible with Webchat v2.

## Test Plugins in Demo Webchat

### Test a Plugin from the Collection

To test a plugin from the plugin collection, follow these steps:

1. Open the [Cognigy GitHub repository](https://github.com/Cognigy/WebchatPlugins/tree/master) and select the plugin you want to use.
2. On the [Releases](https://github.com/Cognigy/WebchatPlugins/releases) page, copy the URL of the JavaScript file from the **Assets** section of the plugin you selected. For example, the URL for the Google Firebase Authentication Webchat Plugin is `https://github.com/Cognigy/WebchatPlugins/releases/download/google-firebase-authentication100/google-firebase-authentication.webchat-plugin.js`.
3. In Cognigy.AI, select a Project from the Projects list.
4. In **Deploy > Endpoints**, select an Endpoint or create a new one:

    === "Webchat v3"
        1. Select the **Webchat (v3)** Endpoint.
        2. In the Webchat v3 Endpoint settings, paste the URL into the **Webchat Plugin URL** field under the **Demo Webchat Settings** section.

    === "Webchat v2"
        1. Select the **Webchat** Endpoint.
        2. In the Webchat Endpoint settings, paste the URL into the **Webchat Plugin URL** field under the **Demo Webchat Settings** section.

### Test a Custom Plugin

To test custom plugins, you need to install them manually and then set them up in the Endpoint settings as follows:

1. Open the [Cognigy GitHub repository](https://github.com/Cognigy/WebchatPlugins/tree/master).
2. Clone and modfy the plugin source code as needed.
3. Build your plugin by running the `npm ci && npm run build` command.
4. Upload your plugin to your cloud storage, for example, Amazon S3. Ensure that the uploaded plugin is accessible to the target audience. Check the availability settings on your cloud storage side.
5. In the left-side menu of the Cognigy.AI interface, select a Project.
6. In **Deploy > Endpoints**, select an Endpoint or create a new one:

    === "Webchat v3"
        1. Select the **Webchat (v3)** Endpoint.
        2. In the Webchat v3 Endpoint settings, paste the URL into the **Webchat Plugin URL** field under the **Demo Webchat Settings** section. Follow the format `https://url.to/plugin.js`, where `url.to` represents your plugin's directory path in your cloud storage, such as `https://my-plugin-directory/dir1/dir2/`, and `my-plugin` is the name of the plugin you use. Note that you can upload multiple plugins.

    === "Webchat v2"
        1. Select the **Webchat** Endpoint.
        2. In the Webchat Endpoint settings, paste the URL into the **Webchat Plugin URL** field under the **Demo Webchat Settings** section. Follow the format `url.to/plugin.js`, where `url.to` represents your plugin's directory path in your cloud storage, such as `https://my-plugin-directory/dir1/dir2/`, and `my-plugin` is the name of the plugin you use. Note that you can upload multiple plugins.

## Set Up Plugins in Production

You can set up plugins in production in the embedding code of your [Webchat v3](v3/embedding.md) or [Webchat v2](v2/embedding.md). To add the plugins in production, proceed as follows:

=== "Plugin from Collection"
    1. Open the [Cognigy GitHub repository](https://github.com/Cognigy/WebchatPlugins/tree/master) and select the plugin you want to use.
    2. On the [Releases](https://github.com/Cognigy/WebchatPlugins/releases) page, copy the URL of the JavaScript file from the **Assets** section of the plugin you selected. For example, the URL for the Google Firebase Authentication Webchat Plugin is `https://github.com/Cognigy/WebchatPlugins/releases/download/google-firebase-authentication100/google-firebase-authentication.webchat-plugin.js`.
    3. Add the plugin using a `<script>` tag after loading `webchat.js` and before calling `initWebchat()` in your HTML code, for example:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Parcel Sandbox</title>
        <meta charset="UTF-8" />
        <style>
        html {
            background-color: #eee;
        }
        </style>
    </head>
    <body>
        <script src="https://github.com/Cognigy/WebchatWidget/releases/download/v2.20.0/webchat.js"></script>
        <script src="https://github.com/Cognigy/WebchatPlugins/releases/download/google-firebase-authentication100/google-firebase-authentication.webchat-plugin.js"></script>
        <script>
        initWebchat(
            "https://endpoint-trial.cognigy.ai/8a8b023c1da283e1c9191c471aaef8dc5090ccc8f33d6a39b00a80276754309e"
        );
        </script>
    </body>
    </html>
    ```

=== "Custom Plugin"
    1. Open the [Cognigy GitHub repository](https://github.com/Cognigy/WebchatPlugins/tree/master).
    2. Clone and modify the plugin source code as needed.
    3. Build your plugin by running the `npm ci && npm run build` command.
    4. Upload your plugin to your cloud storage, for example, Amazon S3. Ensure that the uploaded plugin is accessible to the target audience. Check the availability settings on your cloud storage side.
    5. Enter the plugin URL in a `<script>` tag after loading `webchat.js` and before calling `initWebchat()` in your HTML code. For the plugin URL, follow the format `https://url.to/plugin.js`, where `url.to` represents your plugin's directory path in your cloud storage, such as `https://my-plugin-directory/dir1/dir2/`, and `my-plugin` is the name of the plugin you use. Note that you can upload multiple plugins. For example:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Parcel Sandbox</title>
        <meta charset="UTF-8" />
        <style>
        html {
            background-color: #eee;
        }
        </style>
    </head>
    <body>
        <script src="https://github.com/Cognigy/WebchatWidget/releases/download/v2.20.0/webchat.js"></script>
        <script src="https://my-plugin-directory/dir1/dir2/my-plugin.js"></script>
        <script>
        initWebchat(
            "https://endpoint-trial.cognigy.ai/8a8b023c1da283e1c9191c471aaef8dc5090ccc8f33d6a39b00a80276754309e"
        );
        </script>
    </body>
    </html>
    ```

## Trigger Plugins

Most plugins based on [Cognigy plugin examples](https://github.com/Cognigy/WebchatPlugins/blob/master/examples/) are activated only when specific data is present in a message.
The plugin code specifies the `"match": "plugin-name"` condition, which determines when the plugin is triggered. For example, the `"match": "dialog"` condition triggers the plugin when the message contains the word `dialog`. See the [source code](https://github.com/Cognigy/WebchatPlugins/blob/4b472973d94748e93e69d06f0450b2004a428c9a/examples/dialog-example/src/index.jsx#L97).

For instance, consider a plugin that displays images in a chat interface, extracting the URL from the message's data. This plugin has two parameters: `match` set to `inline-image`, and `url` which retrieves the image URL from `message.data._plugin.url`. When Webchat receives a message, it triggers the `inline-image` plugin if the condition `message.data._plugin.type === 'inline-image'` is met. Then, the plugin retrieves the image URL from `message.data._plugin.url`.

You can trigger plugins using the following components:

- [Basic Nodes](#basic-nodes)
    - [Code Node](#code-node)
- [Extensions](#extensions)

### Basic Nodes

1. In the Node Editor, navigate to the **Options** section.
2. In the **Data** field, enter the following JSON to trigger plugin. 

Example:

```JSON
{
  "_plugin": {
    "type": "inline-image",
    "url": "https://placekitten.com/256/256"
  }
}
```

#### Code Node

If you prefer using a Code Node to send a message, you can pass the structured `data` payload as a second parameter to the `actions.output` method.

Example:

```JavaScript
actions. output('' , {
 _plugin: {
   type: "inline-image",
   url: "https://placekitten.com/256/256"
  }
})
```

### Extensions

You can build an [Extension](../ai/build/extensions.md) that sends a message triggering the Webchat plugin, simplifying the process to only include necessary parameters.

Custom module example:

```JavaScript
/**
 * Sends an image to the user via webchat
 * @arg {CognigyScript} `url` The url of the image
 */
const sendInlineImage = async (input, args) => {
    const { url } = args;

    // if no url is set
    if (!url) {
        // do nothing
        return input;
    }

    // send a message that triggers the 'inline-image' plugin with a url
    input.actions.output('', {
        _plugin: {
            type: "inline-image",
            url: "https://placekitten.com/256/256"
        }
    });


    return input;
}
```

## More Information

- [Webchat v3](overview.md)
- [Webchat v2](overview.md)