---
title: "Copilot: HTML Tile"
slug: "set-html-tile"
hidden: false
---

# Copilot: HTML Tile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-html-tile.png" width="80%" />
</figure>

## Description

This Node allows you to display any HTML content in the AI Copilot Workspace. You can create custom layouts and designs for presenting information to a human agent. HTML content can for exmaple include text, images, videos, links, but also scripts. The Set HTML Tile Node is useful for displaying complex information.

Technically, the HTML content will be injected into an [iFrame](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) on the workspace side, so any restrictions pertaining to iFrames in general also apply here.



## Settings

| Parameter    | Type          | Description                                              |
|--------------|---------------|----------------------------------------------------------|
| Tile ID      | CognigyScript | The ID that you created in the AI Copilot configuration. |
| HTML Content | HTML          | The HTML content to render inside the Widget.            |
| JSON Data    | JSON          | The Data to send to the IFrame as a postMessage event.   |

## Receiving JSON Data

JSON Data is passed into the HTML code by using the [postMessage method](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). In order to receive and process passed JSON in your tile, you need to add an event listener and handle the data accordingly.

```JavaScript
window.addEventListener("message", function (event) {
  console.log("Content of message: " + event.data);
});
``` 

## Using React or Angular in the HTML Tile

It is possible to use the HTML Tile to display React or Angular pages. To do this, simply include the respective libraries in your code.

See below for a simple example with React.

```HTML
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