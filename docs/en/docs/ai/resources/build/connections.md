---
title: "Connections" 
slug: "connections" 
hidden: false 
---

# Connections

_Connections_ are configurations that empower Cognigy virtual agents to securely interact with external services, systems, or APIs. These configurations involve the encryption, storage, and management of credentials for seamless communication between Cognigy and external resources.

In contrast to other components in Cognigy, you cannot create a connection from scratch on the Connections page.
This page only lists connections that you have already created,
either when adding a new LLM, translation, handover,
or voice provider within the [Settings](../manage/settings.md) or when adding them within a Node.

The Connections page can be used to edit and delete existing Connections.
You can copy a Reference ID here or export the Connection as a Package.

## View Connections

To view available connections, do the following:

1. Open the Cognigy.AI interface.
2. Select the Agent in which you want to view connections. 
3. In the left-side menu, navigate to **Build > Connections**.

On the **Connections** page, a list of available connections will be displayed.

## Edit a Connection

To edit a Connection, do the following:

1. Open the Cognigy.AI interface.
2. Select the Agent you want to edit. 
3. Go to **Build > Connections** to open the Connections view with listed Connections. 
4. Click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to a Connection you want to edit. 
5. Select **Edit** to open the Connection editor window. 
6. Change configuration settings and click **Save**. 

## Copy the Connection Reference ID

Reference IDs can be helpful if you want to edit Connections via API.

To copy the Reference ID of a Connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit.
2. In the left-side menu, navigate to **Build > Connections**.
3. On the **Connections** page, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the Connection you want to delete.
4. Select **Copy Reference ID**. The ID will be copied to the clipboard.

## Export a Connection

To export a Connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit.
2. In the left-side menu, navigate to **Build > Connections**.
3. On the **Connections** page, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to the Connection you want to delete.
4. Select **Export as package**.  

## Delete a Connection

!!! warning
    If you delete a Connection, features relying on this Connection will stop working. When you delete a Connection, be aware that the Flow that uses a deleted Connection in a Node will not be updated automatically. Execution of the Flow that uses a deleted Connection hangs on that Node and can cause error messages.

To delete a Connection, do the following:

1. Open Cognigy.AI and select the Agent you want to edit.
2. In the left-side menu, navigate to **Build > Connections**.
3. On the **Connections** page, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) on the right side next to a Connection you want to delete.
4. Select **Delete**. A confirmation window appears and prompts you to confirm before the Connection will be deleted.
5. Click **Confirm**. The selected Connection will be deleted and is no longer available in the list.

## More Information

- [Extensions](../../../ai/resources/manage/extensions.md)
- [Flow Nodes](../../../ai/flow-nodes/flow-nodes-overview.md)
- [HTTP Request](../../../ai/flow-nodes/services/http-request.md)