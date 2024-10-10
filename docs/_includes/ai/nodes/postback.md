The Postback feature allows you
to send data either back to the system to view [logs](https://docs.cognigy.com/ai/test/logs/) or directly to the widget interface.
This feature can be useful for updating the state of your widget based on human agent interactions.
These interactions can include actions such as submitting forms,
updating display elements, or notifying the system of changes made by the human agent.

Follow these steps to implement postback for your widget:

1. Copy the SDK source code:
    ```js
    constu=(n)=>({__INTER_FRAME_SOCKET_MESSAGE:!0,workspaceEvent:n}),h=(n,e)=>({type:n,payload:e}),w=(n)=>{vare;return!!((e=n.data)!=null&&e.__INTER_FRAME_SOCKET_MESSAGE);};classb{constructor(e,a,d){(this.sourceWindow=e),(this.targetWindow=a),(this.targetOrigin=d),(this.unsubscribers=newSet()),(this.emit=(s,i)=>{constt=h(s,i),r=u(t);this.targetWindow.postMessage(r,this.targetOrigin);}),(this.on=(s,i)=>{constt=(o)=>{if(o.source===this.targetWindow&&w(o)&&o.data.workspaceEvent.type===s)try{i(o.data.workspaceEvent);}catch{}};this.sourceWindow.addEventListener("message",t);constr=()=>{this.sourceWindow.removeEventListener("message",t),this.unsubscribers.delete(r);};returnthis.unsubscribers.add(r),r;}),(this.once=(s,i)=>{constt=this.on(s,(r)=>{i(r),t();});returnt;}),(this.cleanup=()=>{for(constsofthis.unsubscribers)s();});}}classc{constructor(){(this._ready=!1),(this.socket=newb(window,window.parent,"*")),(this.sendReady=()=>{this._ready||(this.socket.emit("ready"),c.log("ready!"),(this._ready=!0));}),(this.postback=(e)=>newPromise((a,d)=>{consts=[],i=()=>{s.forEach((t)=>{t();});};s.push(this.socket.once("postback-accepted",()=>{i(),a();})),s.push(this.socket.once("postback-rejected",()=>{i(),d();})),this.socket.emit("postback",e);})),window.addEventListener("load",()=>{this.sendReady();}),this.socket.emit("sdk-loaded"),c.log("initialized");}staticlog(...e){console.log("[AgentAssistWidgetSDK]",...e);}}constg=newc();window.SDK=g;
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
   
### Example

In this example, the `SDK.postback` function sends the value of `name` back to the user.
If `name` is falsy, meaning the user did not enter a name, the `else` block is executed, and the function calls `setMessage('Please enter your name.');`.
This message will appear in the widget, prompting the user to provide their name and ensuring they are aware of the required input.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Minimal React Widget</title>
    <script type="text/javascript">
    constu=(n)=>({__INTER_FRAME_SOCKET_MESSAGE:!0,workspaceEvent:n}),h=(n,e)=>({type:n,payload:e}),w=(n)=>{vare;return!!((e=n.data)!=null&&e.__INTER_FRAME_SOCKET_MESSAGE);};classb{constructor(e,a,d){(this.sourceWindow=e),(this.targetWindow=a),(this.targetOrigin=d),(this.unsubscribers=newSet()),(this.emit=(s,i)=>{constt=h(s,i),r=u(t);this.targetWindow.postMessage(r,this.targetOrigin);}),(this.on=(s,i)=>{constt=(o)=>{if(o.source===this.targetWindow&&w(o)&&o.data.workspaceEvent.type===s)try{i(o.data.workspaceEvent);}catch{}};this.sourceWindow.addEventListener("message",t);constr=()=>{this.sourceWindow.removeEventListener("message",t),this.unsubscribers.delete(r);};returnthis.unsubscribers.add(r),r;}),(this.once=(s,i)=>{constt=this.on(s,(r)=>{i(r),t();});returnt;}),(this.cleanup=()=>{for(constsofthis.unsubscribers)s();});}}classc{constructor(){(this._ready=!1),(this.socket=newb(window,window.parent,"*")),(this.sendReady=()=>{this._ready||(this.socket.emit("ready"),c.log("ready!"),(this._ready=!0));}),(this.postback=(e)=>newPromise((a,d)=>{consts=[],i=()=>{s.forEach((t)=>{t();});};s.push(this.socket.once("postback-accepted",()=>{i(),a();})),s.push(this.socket.once("postback-rejected",()=>{i(),d();})),this.socket.emit("postback",e);})),window.addEventListener("load",()=>{this.sendReady();}),this.socket.emit("sdk-loaded"),c.log("initialized");}staticlog(...e){console.log("[AgentAssistWidgetSDK]",...e);}}constg=newc();window.SDK=g;
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
  </body>
</html>
```