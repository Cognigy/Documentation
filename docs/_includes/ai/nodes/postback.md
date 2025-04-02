    The Postback feature allows you
    to send data either back to the Flow or chat, or directly to the widget interface.
    This feature can be useful for updating the state of your widget based on human agent interactions.
    These interactions can include actions such as submitting forms,
    updating display elements, or notifying the system of changes made by the human agent.

    The Postback feature can be configured in the following ways:

    - [Using SDK.postback](#using-sdkpostback)
    - [Using the Copilot: Send Data](#using-the-copilot-send-data)

    ### Using SDK.postback

    Follow these steps to implement postback for your widget:

    1. Add the `SDK.postback` function to the HTML page. Make sure this code is included after the SDK script is loaded:

        === "Send a String"
            ```html
            <button type="button" onclick="SDK.postback('value');">Yes</button>
            ```
        === "Send an Object"
            ```js
            <button type="button" onclick="SDK.postback({ "key": "value" });">Yes</button>
            ```

    2. Click the button in the widget in the AI Copilot workspace. Triggering this action will send an injected message formatted as follows:
        ```json
        {
        "data": {
            "_cognigy": {
            "_agentAssist": {
                "type": "submit",
                "payload": "value"
            }
            }
        }
        }
        ```

    To allow human agents to view this object, add `{{ input.data._cognigy._agentAssist }}` to the **Text** field in the Say Node of your Copilot Flow. 
    This Node should be placed below the Node with the `SDK.postback` function. 
    The output will be available in the chat message and visible only to human agents.

    #### Example

    In this example, the `SDK.postback` function sends the value of `name` back to the user.
    If `name` is falsy, meaning the user did not enter a name, the `else` block is executed, and the function calls `setMessage('Please enter your name.');`.
    This message will appear in the widget, prompting the user to provide their name and reminding them of the required input.

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

            // This event listener processes incoming data updates
            window.addEventListener("message", function (event) {
                console.log("Content of message: " + event.data);
            });

            function ReactWidget() {
                const [name, setName] = useState('');
                const [message, setMessage] = useState('');

                const handleData = () => {
                    if (name) {
                        setMessage('Your name is ' + name);
                        SDK.postback(name);
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
    <button type="button" onclick="SDK.postback('yes');">yes</button>
    </body>
    </html>
    ```

    ### Using the Copilot: Send Data