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

## Receiving JSON Data

JSON data is passed into the HTML code
using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method. To receive and process passed JSON in your tile, add an event listener and handle the data accordingly.

```js
window.addEventListener("message", function (event) {
  console.log("Content of message: " + event.data);
});
``` 

## Using React or Angular in the HTML Tile

You can use the HTML Tile to display [React](https://react.dev/) or [Angular](https://angular.dev/) pages. To do this, include the respective libraries in your code.

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