---
title: "Copilot: IFrame Tile"
slug: "set-iframe-tile"
hidden: false
---

# Copilot: IFrame Tile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-iframe-tile.png" width="80%" />
</figure>

## Description

This Node in Cognigy allows you to embed external websites directly into the AI Copilot Workspace. To do that, specify a URL for the external content you want to display. You can present web pages, forms, or applications within the AI Copilot workspace without redirecting human agents to an external site.

## Settings

| Parameter  | Type          | Description                                              |
|------------|---------------|----------------------------------------------------------|
| Tile ID    | CognigyScript | The ID that you created in the AI Copilot configuration. |
| IFrame URL | URL           | The URL to render inside the Widget.                     |
| JSON Data  | JSON          | The Data to send to the IFrame as a postMessage event.   |

## Passing JSON Data into the IFrame

When you use an IFrame Tile Node, JSON data is passed into the IFrame code using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method. 
To receive and process the passed JSON data in your tile, add an event listener to your website and handle the data accordingly.

```js
window.addEventListener("message", function (event) {
  console.log("Content of message: " + event.data);
});
``` 

Example of an HTML page hosted on your website:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Iframe Example</title>
</head>
<body>
<script>
        let i = 0; // Handle postMessage from iframe parent

        // Update the body document content every second
        setInterval(function () {
            i++;
            document.body.innerHTML = '<h1>Iframe Tile ' + i + '</h1>';
        }, 1000);

        // Listen for messages from the parent window
        window.addEventListener('message', function (event) {
            // We only accept messages from ourselves
            // if (event.source != window) return; // Uncomment this line if needed
            console.log('Content of message: ' + event.data);
        });
    </script>
<h1>Iframe Tile</h1>
</body>
</html>
```

If you want to send data to your tile without updating the content, simply resend the IFrame URL along with the data, ensuring that the URL remains unchanged. The tile will only update if the IFrame URL has changed.

## Postback

{! _includes/ai/nodes/postback.md !}

## More Information

- [Copilot: HTML Tile](set-html-tile.md)
- [Copilot: Adaptive Card Tile](set-adaptive-card-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)