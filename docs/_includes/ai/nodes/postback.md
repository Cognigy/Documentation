The Postback feature allows you
to send data either back to the Flow or chat, or directly to the widget interface.
This feature can be useful for updating the state of your widget based on human agent interactions.
These interactions can include actions such as submitting forms,
updating display elements, or notifying the system of changes made by the human agent.

Follow these steps to implement postback for your widget:

1. Copy the SDK source code:

    ```js
     const u = (n) => ({
         __INTER_FRAME_SOCKET_MESSAGE: true,
         workspaceEvent: n,
     });

     const h = (n, e) => ({
         type: n,
         payload: e,
     });

     const w = (n) => {
         var e;
         return !!((e = n.data) != null && e.__INTER_FRAME_SOCKET_MESSAGE);
     };

     class b {
         constructor(e, a, d) {
             this.sourceWindow = e;
             this.targetWindow = a;
             this.targetOrigin = d;
             this.unsubscribers = new Set();

             this.emit = (s, i) => {
                 const t = h(s, i);
                 const r = u(t);
                 this.targetWindow.postMessage(r, this.targetOrigin);
             };

             this.on = (s, i) => {
                 const t = (o) => {
                     if (o.source === this.targetWindow && w(o) && o.data.workspaceEvent.type === s) {
                         try {
                             i(o.data.workspaceEvent);
                         } catch {}
                     }
                 };

                 this.sourceWindow.addEventListener("message", t);

                 const r = () => {
                     this.sourceWindow.removeEventListener("message", t);
                     this.unsubscribers.delete(r);
                 };

                 this.unsubscribers.add(r);
                 return r;
             };

             this.once = (s, i) => {
                 const t = this.on(s, (r) => {
                     i(r);
                     t();
                 });
                 return t;
             };

             this.cleanup = () => {
                 for (const s of this.unsubscribers) s();
             };
         }
     }

     class c {
         constructor() {
             this._ready = false;
             this.socket = new b(window, window.parent, "*");

             this.sendReady = () => {
                 if (!this._ready) {
                     this.socket.emit("ready");
                     c.log("ready!");
                     this._ready = true;
                 }
             };

             this.postback = (e) =>
                 new Promise((a, d) => {
                     const s = [];
                     const i = () => {
                         s.forEach((t) => {
                             t();
                         });
                     };

                     s.push(
                         this.socket.once("postback-accepted", () => {
                             i();
                             a();
                         })
                     );

                     s.push(
                         this.socket.once("postback-rejected", () => {
                             i();
                             d();
                         })
                     );

                     this.socket.emit("postback", e);
                 });

             window.addEventListener("load", () => {
                 this.sendReady();
             });

             this.socket.emit("sdk-loaded");
             c.log("initialized");
         }

         static log(...e) {
             console.log("[AgentAssistWidgetSDK]", ...e);
         }
     }

     const g = new c();
     window.SDK = g;    
    ```
2. Paste the copied source code into a `<script>` section within your HTML page.
3. Add the `SDK.postback` function to the HTML page. Make sure this code is included after the SDK script is loaded:
    ```html
    <button type="button" onclick="SDK.postback('yes');">Yes</button>
    ```
4. Clicking the button in the widget will send an injected message formatted as follows:
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

To allow human agents to view this object, add `{{ input.data._cognigy._agentAssist }}` to the **Text** field in the Say Node of your Copilot Flow. 
This Node should be placed below the Node with the SDK.postback function. 
The output will be available in the chat message and visible only to human agents.

### Example

In this example, the `SDK.postback` function sends the value of `name` back to the user.
If `name` is falsy, meaning the user did not enter a name, the `else` block is executed, and the function calls `setMessage('Please enter your name.');`.
This message will appear in the widget, prompting the user to provide their name and reminding them of the required input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Minimal React Widget</title>
   <script type="text/javascript">
        const u = (n) => ({
            __INTER_FRAME_SOCKET_MESSAGE: true,
            workspaceEvent: n,
        });

        const h = (n, e) => ({
            type: n,
            payload: e,
        });

        const w = (n) => {
            var e;
            return !!((e = n.data) != null && e.__INTER_FRAME_SOCKET_MESSAGE);
        };

        class b {
            constructor(e, a, d) {
                this.sourceWindow = e;
                this.targetWindow = a;
                this.targetOrigin = d;
                this.unsubscribers = new Set();

                this.emit = (s, i) => {
                    const t = h(s, i);
                    const r = u(t);
                    this.targetWindow.postMessage(r, this.targetOrigin);
                };

                this.on = (s, i) => {
                    const t = (o) => {
                        if (o.source === this.targetWindow && w(o) && o.data.workspaceEvent.type === s) {
                            try {
                                i(o.data.workspaceEvent);
                            } catch {}
                        }
                    };

                    this.sourceWindow.addEventListener("message", t);

                    const r = () => {
                        this.sourceWindow.removeEventListener("message", t);
                        this.unsubscribers.delete(r);
                    };

                    this.unsubscribers.add(r);
                    return r;
                };

                this.once = (s, i) => {
                    const t = this.on(s, (r) => {
                        i(r);
                        t();
                    });
                    return t;
                };

                this.cleanup = () => {
                    for (const s of this.unsubscribers) s();
                };
            }
        }

        class c {
            constructor() {
                this._ready = false;
                this.socket = new b(window, window.parent, "*");

                this.sendReady = () => {
                    if (!this._ready) {
                        this.socket.emit("ready");
                        c.log("ready!");
                        this._ready = true;
                    }
                };

                this.postback = (e) =>
                    new Promise((a, d) => {
                        const s = [];
                        const i = () => {
                            s.forEach((t) => {
                                t();
                            });
                        };

                        s.push(
                            this.socket.once("postback-accepted", () => {
                                i();
                                a();
                            })
                        );

                        s.push(
                            this.socket.once("postback-rejected", () => {
                                i();
                                d();
                            })
                        );

                        this.socket.emit("postback", e);
                    });

                window.addEventListener("load", () => {
                    this.sendReady();
                });

                this.socket.emit("sdk-loaded");
                c.log("initialized");
            }

            static log(...e) {
                console.log("[AgentAssistWidgetSDK]", ...e);
            }
        }

        const g = new c();
        window.SDK = g;
    </script>

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