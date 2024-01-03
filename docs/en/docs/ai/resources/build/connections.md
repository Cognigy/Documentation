---
 title: "Connections" 
 slug: "connections" 
 hidden: false 
---
# Connections

Connections are encrypted credentials that can be used with [Extensions]({{config.site_url}}ai/resources/manage/extensions/). The Connections view can be used to update and delete existing Connections. New Connections are created directly within the [Extension]({{config.site_url}}ai/resources/manage/extensions/) Nodes that use them. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Connections.png" width="100%" />
</figure>

To learn more about Connections, head over to the Help Center tutorial: [Add new features to your Virtual Agent by uploading and activating Extensions](https://support.cognigy.com/hc/en-us/articles/360016409380).


# Create a Connection using a HTTP Request Node

To add a connection to the list (Connections view in Cognigy.AI), do the following:

1. Open Cognigy.AI, select your Agent and go to the Flow Chart you want to add the HTTP Request Node to.
2. Click **+** to open the Node selection list.
3. Select tabs **By Function > Service** to open the Service Nodes list. 
4. Click **HTTP Request**. The Node will be added to the Flow at the location you clicked **+**.
7. Click the HTTP Request Node to open the Node Editor. How to configure a HTTP Request Node, go to []().
8. To create a new connection including encrypted credentials, open section **Authentication**.
9. Select one of the following authentication types the new connection should have. You can create more than one connection to a single Node:
    - None
    - basic Auth
    - OAuth 2
    - API Key - 'Authorization:ApiKey'
    - API Key - 'X-Api-Key'
       
9. Depending on the selected authentication type you need to enter several parameters in the field below.
10. Click **Save Node** when the Node is configured. The new connection will be added to the Connections list.
10. To check, go to **Build > Connections**. The new connection of the previous configured Node will be listed as a new Connection in the "Connections view ".


# Using Connections with Extensions

Whenever your extension requires credentials for authentication a Connection should be used. This will allow the Extension users to adjust the credentials if necessary.
Link: https://support.cognigy.com/hc/en-us/articles/360016505740-Extensions-Best-Practices#2-1-outsource-helper-functions-0-5

To add a connection to the list (Connections view in Cognigy.AI), do the following:

1. Open Cognigy.AI  and go to **Manage > Extensions** 
2. Proceed with one of the following steps:
   a) Select one of the available extensions, diplayed in the "Marketplace" section.
   b) Click **+ Upload Extension** to select and upload your own extension of choice or a third party extension which is not listed in the Marketplace section.

3. Click **Install** to make the new extension available for your Flow Editor. When the Extension is installed you can add the corresponding Extension Node to your project in Cognigy.AI (use tab "Extensions"). 
4. Go to the Flow Chart you want to add the new Extension Node.
5. Click **+** to open the Node selection list.
6. Select in tab "Extensions" the previous installed extension. The corresponding extension Node will be added to the Flow.
7. Click the Extension Node to open the Node Editor.
8. Enter required credentials (API key,...) and change settings, if required to configure the Extension Node.
9. Click **Save Node**. The configured Extensions Node credentials will be added to the Connections list.
10. To check, go to **Build > Connections**. The credentials of the previous configured Extension Node will be listed as a new Connection in the "Connections view ".

For more general information how to create a connection, read the [Connection](https://www.npmjs.com/package/@cognigy/extension-tools#connectionts) article.



# Edit a Connection

To edit a connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit. 
2. Go to **Build > Connections** to open the Connections view with listed connections.
3. Click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to a Connection you want to edit to open a selection menu.
4. Select **Edit** to open the Connection editor window.
5. Change configuration settings and click **Save**. 


# Delete a Connection

To delete a connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit. 
2. Go to **Build > Connections** to open the Connections view with listed connections.
3. Click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the connection you want to delete to open a selection menu.
4. Select **Delete**. A confirmation window appears and prompts you to confirm  before the connection will be deleted.
5. Click **Confirm**.The selected connection will be deleted and is no longer available in the list. 

!!! warning "Delete Connections"
    Please note that features relying on a Connection will stop working. When you delete a  connection be aware that the Flow which uses the deleted connection in a Node will not be updated automatically. Execution of the Flow that uses a deleted connection hangs on that Node and can cause error messages!


# Export a Connection

To export a connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit. 
2. Go to **Build > Connections** to open the Connections view with listed connections.
3. Click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the connection you want to delete to open a selection menu.
4. Select **Export as package**.  

Where will the package be stored?


# Copy Reference ID

To copy the Reference ID of a connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit. 
2. Go to **Build > Connections** to open the Connections overview.
3. Click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the connection you want to delete to open a selection menu.
4. Select **Copy Reference ID**. The ID will be copied to the Clipboard. If the ID is required in any configuration field, you can paste the ID after a right-click action.


# More Information

- [Connection](https://www.npmjs.com/package/@cognigy/extension-tools#connectionts)
- [Extensions](../../../ai/resources/manage/extensions/)
- [Add new features to your Virtual Agent by uploading and activating Extensions](https://support.cognigy.com/hc/en-us/articles/360016409380)