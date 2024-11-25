---
title: "Copilot: IFrame Tile"
slug: "set-iframe-tile"
hidden: false
---

# Copilot: IFrame Tile

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-iframe-tile.png" width="80%" />
</figure>

## Description

This Node lets you embed external websites directly into the AI Copilot Workspace. To do that, specify a URL for the external content you want to display. You can present web pages, forms, or applications within the AI Copilot workspace without redirecting human agents to an external site.

## Settings

| Parameter  | Type          | Description                                              |
|------------|---------------|----------------------------------------------------------|
| Tile ID    | CognigyScript | The ID that you created in the AI Copilot configuration. |
| IFrame URL | URL           | The URL to render inside the Widget.                     |
| JSON Data  | JSON          | The Data to send to the IFrame as a postMessage event.   |

## Passing JSON Data into the IFrame

When you use a Copilot: IFrame Tile Node, JSON data is passed into the IFrame code using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method.
To receive and process the passed JSON in your widget, add an event listener to the Copilot HTML Tile Node and handle the data accordingly.

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

## Sending JSON Data back to the Flow

You can send data back to the Flow by using the Postback feature.

{! _includes/ai/nodes/postback.md !}

### Via Copilot: Send Data Tile Node

In the AI Copilot Flow, below the Copilot: IFrame Tile Node, add a [Copilot: Send Data Tile](send-data-tile.md).
In the JSON field of the Copilot: Send Data Tile Node,
specify the parameters you want to pass as metadata to the Copilot: IFrame Tile Node to update the content.

## More Information

- [Copilot: HTML Tile](set-html-tile.md)
- [Copilot: Adaptive Card Tile](set-adaptive-card-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)