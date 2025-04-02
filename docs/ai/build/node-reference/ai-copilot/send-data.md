---
title: "Copilot: Send Data"
slug: "send-data"
description: "The Copilot: Send Data Node lets you update the content within AI Copilot widgets (IFrame or HTML) without reloading the entire widget, making it easier to modify and refresh dynamic content in real time."
hidden: false
---

# Copilot: Send Data

[![Version badge](https://img.shields.io/badge/Added in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/send-data.png" width="50%"/>
</figure>

## Description

This Node updates the content within AI Copilot widgets (IFrame or HTML) without reloading the entire widget, making it easier to modify and refresh dynamic content in real time.

## Parameters

| Parameter | Type          | Description                                                                                                                               |
|-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID   | CognigyScript | The ID of the [Copilot: IFrame Tile](set-iframe-tile.md) or [Copilot: HTML Tile](set-html-tile.md) Node you want to update with new data. |
| JSON Data | JSON          | The data to send to the [Copilot: IFrame Tile](set-iframe-tile.md) or [Copilot: HTML Tile](set-html-tile.md) Node as a postMessage event. |

## Example

This example shows how to dynamically update metadata in the Copilot: HTML Tile Node using the Copilot: Send Data and a processing script.

??? info "Update metadata in the Copilot: HTML Tile Node using the Copilot: Send Data"

    **Copilot: HTML Tile Node**

    1. Enter the following script in the **HTML Content** field:

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

        The JavaScript in the `<script>` tag listens for messages sent via the `postMessage` API. Once a message is received, the content of the message (stored in `event.data`) is logged to the browser's console. If the message contains data, the content of the `metadataDisplay` div updates to show the received data.

    2. Define the current version of the Copilot: HTML Tile Node content on the **JSON** field:

        ```json
        {
          "version": 1
        }
        ```

    **Copilot: Send Data Node**

    Configure the Copilot: Send Data Node:

    1. Below the Copilot: HTML Tile Node, add a Copilot: Send Data Node.
    2. Open the Node editor and enter the Tile ID of the Copilot: HTML Tile Node in the **Tile ID** field.
    3. In the **JSON** field, enter the following JSON:

        ```json
        {
          "version": 2,  // Version of the Copilot: HTML Tile Node
          "additionalInfo": "Updated metadata"  // The updated metadata that will be sent to the Copilot: HTML Tile Node
        }
        ```

    The Copilot: Send Data Node sends updated metadata to the Copilot: HTML Tile Node when triggered. The listener script inside the Copilot: HTML Tile Node dynamically displays this metadata on the widget.

## More Information

- [Copilot: HTML Tile](set-html-tile.md)
- [Copilot: IFrame Tile](set-iframe-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)