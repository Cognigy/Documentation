1. Log in to the 8x8 Configuration Contact Center (admin panel).
2. In the left-side menu, click **Integration**.
3. On the tab, select **Webhooks**.
4. On the **Webhooks List** tab, click **+ Add webhook**.
5. Fill in the following fields:<br>
    - **Name** — specify a unique name.<br>
    - **URL** — paste the Endpoint URL that you copied from the **Endpoint URL** field.<br>
    - **Chat API Version** — select **Chat Gateway v1.0**. <br>
6. To check if the connection works, click **Test Connection**. If it does not work, check your Endpoint URL or contact your 8x8 administrator.
7. Click **Save**.
8. In the left-side menu, click **Channels**.
9. On the **Chat API** tab, click **+ New Channel**.
10. Fill in the following fields:
    - **Name** — specify a unique name.<br>
    - **Description** — specify a description of your channel specific.<br>
    - **Webhook** — select the webhook that you recently created.<br>
    - **Queue** — select the queue that your administrator set up.<br>
11. Click **Save**.