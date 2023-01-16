---
 title: "Set HTML xApp State" 
 slug: "Set-HTML-xApp-State" 
 hidden: true 
---

# Set HTML xApp State

The xApp Page can be built by providing custom HTML code. 

## Content 

You can either provide an HTML document or an HTML body only. Once this Node is executed, this xApp Page is displayed in the xApp Session.

Within the HTML Code, you will be able to access the App Page SDK through a global `SDK` variable.
To submit a result back to the Flow, you can call `SDK.submit({ name: "John" });`.
The submitted payloads need to be JSON serializable objects.

You can use the `submit` function without React. An example of a button that submits on click would be the following:
`<button type="button" onclick="SDK.submit({ variant: 'button1' })">button 1</button>`.


## More information

- [xApp SDK](../../xApp/sdk.md)
- [xApp](../../xApp/overview.md)
- [xApp Nodes](overview.md)