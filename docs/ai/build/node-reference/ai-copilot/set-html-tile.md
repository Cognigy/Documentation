---
title: "Copilot: HTML Tile"
slug: "set-html-tile"
description: "The Copilot: HTML Tile Node enables you to showcase HTML content in the AI Copilot workspace. You can design custom layouts to present information to a human agent. HTML content may include text, images, videos, links, and scripts."
hidden: false
---

# Copilot: HTML Tile

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-html-tile.png" width="50%" />
</figure>

## Description

This Node displays HTML content in the AI Copilot workspace. You can design custom layouts to present information to a human agent. HTML content may include text, images, videos, links, and scripts. The Set HTML Tile Node is useful for displaying complex information.

Technically, the HTML content will be injected into an [iFrame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) on the workspace side, so any general restrictions on iFrames also apply to this case.

## Parameters

| Parameter    | Type          | Description                                              |
|--------------|---------------|----------------------------------------------------------|
| Tile ID      | CognigyScript | The ID that you created in the AI Copilot configuration. |
| HTML Content | HTML          | The HTML content to render inside the Widget.            |
| JSON Data    | JSON          | The data to send to the IFrame as a postMessage event.   |

## Using React or Angular

In the Copilot: HTML Tile Node, you can enhance your HTML content by utilizing the [React](https://react.dev/) or [Angular](https://angular.dev/) libraries.
These libraries allow you to seamlessly display dynamic widgets within your workspace. 
To use these libraries in the Copilot: HTML Tile Node, you need to include them in your HTML code.

??? info "Example"

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Minimal React Widget</title>
        <!-- External React libraries -->
        <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>
        <div id="root"></div>

        <script type="text/babel">
          const { useState } = React;

          // this event listener processes incoming data updates
          window.addEventListener("message", function (event) {
            console.log("Content of message: " + event.data);
          });

          function ReactWidget() {
            const [name, setName] = useState('');
            const [message, setMessage] = useState('');

            const handleData = () => {
              if (name) {
                setMessage('Your name is ' + name);
              } else {
                setMessage('Please enter your name.');
              }
            };

            return (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <button onClick={handleData}>Submit</button>
                <p>{message}</p>
              </div>
            );
          }

          ReactDOM.render(<ReactWidget />, document.getElementById('root'));
        </script>
      </body>
    </html>
    ```

## Receiving JSON Data from the Flow

When you use a Copilot: HTML Tile, JSON data is passed into the HTML code using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method.
To receive and process the passed JSON in your widget, add an event listener into the Copilot: HTML Tile Node and handle the data accordingly.

```js
window.addEventListener("message", function (event) {
  console.log("Content of message: " + event.data);
});
```

## Sending JSON Data back to the Flow

You can send data back to the Flow by using the Postback feature.

??? info "Postback"
{! _includes/ai/nodes/postback.md !}

    In the AI Copilot Flow, below the Copilot: HTML Tile Node, add a [Copilot: Send Data](send-data.md).
    In the **JSON** field of the Copilot: Send Data Node,
    specify the parameters you want to pass as metadata to the Copilot: HTML Tile Node to update the content.

## More Information

- [Copilot: Adaptive Card Tile](set-adaptive-card-tile.md)
- [Copilot: IFrame Tile](set-iframe-tile.md)
- [Copilot: Send Data](send-data.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)