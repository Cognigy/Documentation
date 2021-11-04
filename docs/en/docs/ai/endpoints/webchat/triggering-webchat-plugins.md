---
 title: "Triggering Webchat Plugins" 
 slug: "triggering-webchat-plugins" 
 hidden: false 
---
# Triggering Webchat Plugins

## Description

<div class="divider"></div>

Many Plugins (e.g. those who use a string as the `match` value) will only be triggered whenever a message contains specific `data`.

As an example, let's imagine we have a plugin that displays images in the chat, taking the url from the message's data.
The `match` field is set to `inline-image` and it reads the image url from `message.data._plugin.url`.
In order to trigger the plugin, we would need to send a message with the `data` field set up like this:

```JSON
{
  "_plugin": {
    "type": "inline-image",
    "url": "https://placekitten.com/256/256"
  }
}
```

When the webchat receives this mesage, it will trigger the `inline-image`-plugin because of `message.data._plugin.type === 'inline-image'`. The plugin itself then reads the url from `message.data._plugin.url`.

## Usage within regular Flow Nodes

<div class="divider"></div>

Using regular Flow Nodes (such as the Say Node), you can make use of the `data` field in order to append a data payload to a message. The Data Field will help you with syntax highlighting to prevent structural errors.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/f123a42-imagePlugin.PNG" width="100%" />
</figure>

## Usage within Code Nodes

<div class="divider"></div>

If you prefer using a Code Node to send a message, you can pass the structured `data` payload as a second parameter to the `actions.output` method.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7bb9a4b-codePlugin.PNG" width="100%" />
</figure>

## Usage within Extensions

<div class="divider"></div>

To get the best user experience for the editors of a Conversational AI, you can build a customized [Extension]({{config.site_url}}ai/resources/manage/extensions/) that sends a message triggering the webchat plugin, abstracting away everything but the required parameters.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/f123a42-imagePlugin.PNG" width="100%" />
</figure>

**Custom Module Example**
```JavaScript
/**
 * Sends an Image to the user via webchat
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