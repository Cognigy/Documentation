---
title: "Copilot: HTML Tile"
slug: "set-html-tile"
description: "The Copilot: HTML Tile Node enables you to showcase HTML content in the AI Copilot Workspace. You can design custom layouts to present information to a human agent. HTML content may include text, images, videos, links, and scripts."
hidden: false
---

# Copilot: HTML Tile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-html-tile.png" width="80%" />
</figure>

## Description

This Node allows you to display HTML content in the AI Copilot Workspace. You can design custom layouts to present information to a human agent. HTML content may include text, images, videos, links, and scripts. The Set HTML Tile Node is useful for displaying complex information.

Technically, the HTML content will be injected into an [iFrame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) on the workspace side, so any general restrictions on iFrames also apply to this case.

## Settings

| Parameter    | Type          | Description                                              |
|--------------|---------------|----------------------------------------------------------|
| Tile ID      | CognigyScript | The ID that you created in the AI Copilot configuration. |
| HTML Content | HTML          | The HTML content to render inside the Widget.            |
| JSON Data    | JSON          | The Data to send to the IFrame as a postMessage event.   |

## Receiving JSON Data from the Flow

When a HTML Tile Node is used, JSON data is passed into the HTML code using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method.
To receive and process the passed JSON in your tile, add an event listener and handle the data accordingly.

```js
window.addEventListener("message", function (event) {
  console.log("Content of message: " + event.data);
});
```

> If you want to send data to your tile without updating the content, simply send the same content without changes again, together with the data. The tile will only update if the html content has changed.

## Sending JSON Data back to the Flow

You can send data back to the Flow by using the following code in your HTML:

```js
// sending a string back to the Flow
SDK.postback('yes');

// sending an object back to the Flow
SDK.postback({ "key": "value" });
```

This will send the following payload back to your Flow:

```json
{
  "data": {
    "_cognigy": {
      "_agentAssist": {
        "type": "submit",
        "payload": "yes"
      }
    }
  }
}
```

## Using React or Angular

In the Copilot: HTML Tile Node, you can enhance your HTML content by utilizing the [React](https://react.dev/) or [Angular](https://angular.dev/) libraries.
These libraries allow you to seamlessly display dynamic widgets within your workspace. 
To use these libraries in the Copilot: HTML Tile Node, you need to include them in your HTML code.

Example of using React:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

## More Information

- [Copilot: Adaptive Card Tile](set-adaptive-card-tile.md)
- [Copilot: IFrame tile](set-iframe-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)