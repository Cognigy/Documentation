---
title: "Migration from Endpoint to Handover Provider Settings" 
slug: "migration"
description: "Starting from Cognigy.AI v4.97, you can migrate your handover provider settings to a new interface that provides more flexibility and better organization."
hidden: false
tags:
   - endpoint settings
   - handover provider settings
   - migration guide
---

# Migrate from Endpoint Settings to Handover Provider Settings

The **Handover Providers** section in the [Endpoint settings](../../ai/deploy/endpoints/handover-settings.md) has been deprecated in 4.97, with removal planned for September 2025. 

Starting from Cognigy.AI v4.97, you can migrate your handover provider settings to a new interface that offers more flexibility and better organization for managing integrations with contact centers.

The migration process is seamless and doesn't involve any downtime.

### Benefits of the New Handover Provider Interface

- **Multiple Handover Providers**. The new interface lets you use multiple handover providers in a single Flow, providing greater flexibility to route between different contact centers.
- **Isolated Logic**. The handover provider logic is now isolated from the Endpoint logic, simplifying AI Agent deployment.

### Migrate Handover Settings to the New Interface

1. Go to **Deploy > Endpoint** and select the desired Endpoint.
2. In the **Handover Settings** section, click **Migrate to Handover Providers**.
3. Enter the name for the new handover provider to migrate the settings to the **Handover Providers** page.
4. Confirm the migration. The handover settings will be copied to the new interface, and the old settings will be preserved.

Some providers may require adding the settings manually, such as adding secrets or API keys.
For example, for Genesys, you may need to select the existing connection or add a new one in the **Genesys Cloud Authentication** field.

### Update Flow Settings to Reflect Handover Provider Changes

1. Go to **Build > Flows** and select your Flow. Update the settings in the following Nodes:
    - **Handover to Agent Node**
    - **Check Agent Availability Node**
   
    In each of these Nodes, go to the settings for the handover provider you migrated and copy these settings for later use.

2. In each of these Nodes, go to the **Handover Provider** list and switch from the **Legacy** option to the name of the handover provider you created. Note that this option works if the handover settings are still present in the Endpoint. If they're deleted, the **Legacy** option won't function.
3. In the handover provider settings section, manually fill in the fields with the respective parameters using the values copied earlier.
4. Save your changes to apply them.

### Final Testing and Cleanup

1. Test your Flow to ensure it works as expected. 
2. Once you have tested your Flow, you can delete the **Handover to Agent Settings** from the Endpoint. Note that deleting old Handover settings from the Endpoint will result in permanent loss, and you can't perform a rollback.

## More Information

- [Handovers](handovers.md)