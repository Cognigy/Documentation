---
title: "Connections"
slug: "connections"
hidden: false
---

# Connections

_Connections_ are configurations that empower Cognigy AI Agents to securely interact with external services, systems, or APIs. These configurations involve the encryption, storage, and management of credentials for seamless communication between Cognigy and external resources.

In contrast to other components in Cognigy, you cannot create a Connection from scratch on the Connections page.
This page only lists Connections you have already created
when adding a Node that requires credentials or adding a new provider for [LLM](../empower/llms/providers/all-providers.md),
[translation](translation-and-localization/auto-translation.md), [voice](../test/voice-preview.md),
[handover](../escalate/handovers.md), or [file storage](../deploy/endpoints/file-storage.md).

The Connections page can be used to edit and delete existing Connections.
You can copy a Reference ID here or export the Connection as a Package.

## View Connections

To view available Connections, do the following:

1. Select a Project in which you want to view Connections.
2. In the left-side menu, navigate to **Build > Connections**.

On the **Connections** page, a list of available Connections will be displayed.

## Edit a Connection

To edit a Connection, do the following:

1. Go to **Build > Connections** to open the Connections view with listed Connections.
2. Click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) on the right side next to a Connection you want to edit.
3. Select **Edit** to open the Connection editor window.
4. Change configuration settings and click **Save**.

## Copy the Connection Reference ID

Reference IDs can be helpful if you want to edit Connections via API.

To copy the Reference ID of a Connection, do the following:

1. In the left-side menu, navigate to **Build > Connections**.
2. On the **Connections** page, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) on the right side next to the Connection you want to copy the reference ID.
3. Select **Copy Reference ID**. The ID will be copied to the clipboard.

## Export a Connection

To export a Connection, do the following:

1. In the left-side menu, navigate to **Build > Connections**.
2. On the **Connections** page, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) on the right side next to the Connection you want to export.
3. Select **Export as package**.

## Delete a Connection

!!! warning
    If you delete a Connection, features relying on this Connection will stop working. When you delete a Connection, the Flow that uses the deleted Connection in a Node will not be updated automatically. Execution of the Flow that uses this Connection hangs on that Node and can cause error messages.

To delete a Connection, do the following:

1. In the left-side menu, navigate to **Build > Connections**.
2. On the **Connections** page, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) on the right side next to a Connection you want to delete.
3. Select **Delete**.  A confirmation window appears and prompts you to confirm deleting the Connection.
4. Click **Confirm**. The selected Connection will be deleted and is no longer available in the list.

## More Information

- [Extensions](extensions.md)
- [Nodes](nodes/overview.md)
- [Service Nodes](node-reference/service/overview.md)