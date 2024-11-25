---
title: "Copilot: Send Data Tile"
slug: "send-data-tile"
description: "This Node updates the content in the AI Copilot widgets (IFrame or HTML) without refreshing the entire tile, simplifying the modification of dynamic content."
hidden: false
---

# Copilot: Send Data Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/send-data.png" width="80%"/>
</figure>

## Description

This Node updates the content in the AI Copilot widgets (IFrame or HTML) without refreshing the entire tile, simplifying the modification of dynamic content.

## Settings

| Parameter | Type          | Description                                                                                                                               |
|-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID   | CognigyScript | The ID of the [Copilot: IFrame Tile](set-iframe-tile.md) or [Copilot: HTML Tile](set-html-tile.md) Node you want to update with new data. |
| JSON Data | JSON          | The Data to send to the [Copilot: IFrame Tile](set-iframe-tile.md) or [Copilot: HTML Tile](set-html-tile.md) Node as a postMessage event. |

## Example

This example shows how data (metadata) can be dynamically updated in an HTML tile by sending updates through a Send Data Node and receiving them in the HTML tile with a script that handles the data.

### HTML in the Copilot: HTML Tile Node

1. The JavaScript inside the HTML Tile listens for messages sent to it via the `postMessage` API.
2. Once a message is received, the content of the message (stored in `event.data`) is logged to the browser's console.
3. If the message contains data, the content of the `metadataDisplay` div updates to show the received data.

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <!-- Script to listen for messages sent to this HTML Tile -->
    <script>
      // Listen for 'message' events (data sent to this HTML tile)
      window.addEventListener("message", function (event) {
        // Log the content of the received message to the console
        console.log("Content of message: " + JSON.stringify(event.data));
        
        // If data is received, display it inside the metadataDisplay div
        if (event.data) {
            document.getElementById("metadataDisplay").innerText = "Metadata: " + JSON.stringify(event.data);
        }
      });
    </script>

    <!-- Header for the HTML Tile -->
    <h1>HTML Tile</h1>

    <!-- Placeholder for dynamic content -->
    <div id="test">
        Here will be your content
    </div>

    <!-- Div to display received metadata -->
    <div id="metadataDisplay">Metadata: None</div>
  </body>
</html>
```

### JSON in the Copilot: HTML Tile Node

This JSON configuration defines the current version of the Copilot: HTML Tile Node content.

```json
{
  "version": 1
}
```

### JSON in the Copilot: Send Data Tile Node

This JSON configuration defines the updated content for the Copilot: HTML Tile Node.
The process works as follows:

1. The Copilot: Send Data Tile Node sends updated metadata to the Copilot: HTML Tile Node when triggered.
2. The listener script inside the Copilot: HTML Tile Node dynamically displays this metadata on the widget.

```json
{
  "version": 2,               // Version of the Copilot: HTML Tile Node
  "additionalInfo": "Updated metadata"  // The updated metadata that will be sent to the Copilot: HTML Tile Node
}
```

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Next Action Tile](next-action-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)