??? info "Configure 8x8"
    1. Log in to the 8x8 Contact Center for admins.
    2. On the **My Applications** page, select **Configuration Manager for Contact Center**. 
    3. In the left-side menu, click **Integration**, then go to the **Webhooks** tab. 
    4. On the **Webhooks List** tab, click **+ Add webhook**. 
    5. Fill in the following fields:
        - **Name** — specify a unique name.
        - **URL** — paste the URL in the following pattern: `https://endpoint-your-environment/handover/eightByEight`. For instance, in a Cognigy trial environment, the URL would be `https://endpoint-trial.cognigy.ai/handover/eightByEight`.
        - **Chat API Version** — select **Chat Gateway v1.0**.
    6. To check if the connection works, click **Test Connection** and save changes.
    7. In the left-side-menu, click **Queues/Skills**.
    8. On the **Queue List** tab, create a queue with a chat type by clicking **+ Chat**.
    9. Fill in the following fields:
        - **Queue name** — specify a unique name.
        - **Queue description** — specify a unique description for the queue to differentiate it from others.
        Save changes.
    10. On the **Members** tab, assign and enable human agents who will operate within your queue to assist end users. Save changes.
    11. In the left-side menu, click **Channels**. 
    12. On the **Chat API** tab, click **+ New Channel**. 
    13. Fill in the following fields:
        - **Name** — specify a unique name.
        - **Description** — specify a description of your channel specific.
        - **Webhook** — select the webhook that you recently created.
        - **Queue** — select the queue that you recently created.
    Save changes.