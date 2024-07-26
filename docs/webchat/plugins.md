---
title: "Webchat Plugins"
slug: "webchat-plugins"
description: "Utilize pre-made plugins for your Cognigy Webchat or develop your own plugin to customize it according to your needs."
hidden: false
---

# Webchat Plugins

Your Webchat can be customized by adding plugins from the [plugin collection](https://github.com/Cognigy/WebchatPlugins/tree/master) on GitHub or by creating your own. 
After that, you need to specify the plugin link in the Webchat Endpoint settings.
Then, most plugins should be invoked using a Node in your Flow associated with the Webchat Endpoint.

## Restrictions

Plugins suitable for Webchat v2 may not be compatible with Webchat v3.

## Add a Plugin from the Collection

To add a plugin from the collection of plugins, follow these steps:

1. Open the [Cognigy GitHub repository](https://github.com/Cognigy/WebchatPlugins/tree/master) and select the plugin you want to use.
2. On the [Releases](https://github.com/Cognigy/WebchatPlugins/releases) page, copy the plugin URL from the **Assets** section of the selected plugin. For example, the URL for the Google Firebase Authentication Webchat Plugin is `https://github.com/Cognigy/WebchatPlugins/releases/download/google-firebase-authentication100/google-firebase-authentication.webchat-plugin.js`.
3. Go to the Cognigy.AI interface 
4. In the left-side menu, select a Project.
5. In the left-side **Project** menu, select **Deploy > Endpoints**.
6. Use an existing Endpoint or create a new one:

    === "Webchat v3"
        6.1 Select the **Webchat (v3)** Endpoint.<br>
        6.2 In the Webchat v3 Endpoint settings, navigate to the **Advanced Settings** section.

    === "Webchat v2"
        6.1 Select the **Webchat** Endpoint.<br>
        6.2 In the Webchat Endpoint settings, navigate to the **Webchat Layout** section.

7. Paste the URL directly into the **Webchat Plugin URL** field.
8. Click **Save**.

## Add a Custom Plugin

To use custom plugins in your production environment or modify existing ones, you need to install them manually as follows:

1. Open the [Cognigy GitHub repository](https://github.com/Cognigy/WebchatPlugins/tree/master).
2. Clone the source code.
3. Modify the plugin code as needed.
4. Build your plugin by running the `npm ci && npm run build` command.
5. Upload your plugin to cloud storage, for example, Amazon S3. Ensure that the uploaded plugin is accessible to the target audience. Check the availability settings on your cloud storage side.
6. Go to the Cognigy.AI interface
7. In the left-side menu, select a Project.
8. In the left-side **Project** menu, select **Deploy > Endpoints**.
9. Use an existing Endpoint or create a new one:

    === "Webchat v3"
        9.1 Select the **Webchat (v3)** Endpoint.<br>
        9.2 In the Webchat v3 Endpoint settings, navigate to the **Advanced Settings** section.

    === "Webchat v2"
        9.1 Select the **Webchat** Endpoint.<br>
        9.2 In the Webchat Endpoint settings, navigate to the **Webchat Layout** section.

10. Paste the URL into the **Webchat Plugin URL** field. Follow the format `https://url.to/plugin.js`, where `url.to` represents the storage location for your plugin, such as Amazon S3, and `plugin` is the name of the specific plugin you use. Note that you can upload multiple plugins.
11. Click **Save**.

## Trigger Plugins 

Most plugins, based on [Cognigy plugin examples](https://github.com/Cognigy/WebchatPlugins/blob/master/examples/),
are activated only when specific data is present in a message.
The plugin's code specifies the `"match": "plugin-name"` condition, which determines when the plugin will be triggered.
For example, the `"match": "dialog"` condition will trigger the plugin when the message contains the word `dialog`.
See the [source code](https://github.com/Cognigy/WebchatPlugins/blob/4b472973d94748e93e69d06f0450b2004a428c9a/examples/dialog-example/src/index.jsx#L97).

For instance, consider a plugin that displays images in a chat interface, extracting the URL from the message's data. This plugin has two parameters: `match` set to `inline-image`, and `url` which retrieves the image URL from `message.data._plugin.url`. When Webchat receives a message, it triggers the `inline-image` plugin if the condition `message.data._plugin.type === 'inline-image'` is met. Then, the plugin retrieves the image URL from `message.data._plugin.url`.

You can trigger plugins via the following components:

- [Basic Nodes](#basic-nodes)
    - [Code Node](#code-node)
- [Extensions](#extensions)

### Basic Nodes

In the Node Editor, navigate to the **Options** section.
In the **Data** field, specify the following JSON to trigger plugin. 

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