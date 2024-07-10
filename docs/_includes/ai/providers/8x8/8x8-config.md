1. Log in to the 8x8 Contact Center for admins.
2. On the **My Applications** page, select **Configuration Manager for Contact Center**. 
3. In the left-side menu, click **Integration**. 
4. Go to the **Webhooks** tab. 
5. On the **Webhooks List** tab, click **+ Add webhook**. 
6. Fill in the following fields:<br>
    - **Name** — specify a unique name.<br>
    - **URL** — paste the URL in the following pattern: `https://endpoint-your-environment/handover/eightByEight`. For instance, in a Cognigy trial environment, the URL would be `https://endpoint-trial.cognigy.ai/handover/eightByEight`.<br>
    - **Chat API Version** — select **Chat Gateway v1.0**.<br>
7. To check if the connection works, click **Test Connection**.
8. Click **Save**.
9. In the left-side-menu, click **Queues/Skills**.
10. On the **Queue List** tab, create a queue with a chat type by clicking **+ Chat**.
11. Fill in the following fields:<br>
    - **Queue name** — specify a unique name.<br>
    - **Queue description** — specify a unique description for the queue to differentiate it from others.<br>
12. Click **Save**.
13. On the **Members** tab, assign and enable human agents who will operate within your queue to assist end users.
14. Click **Save**. 
15. In the left-side menu, click **Channels**. 
16. On the **Chat API** tab, click **+ New Channel**. 
17. Fill in the following fields:
    - **Name** — specify a unique name.<br>
    - **Description** — specify a description of your channel specific.<br>
    - **Webhook** — select the webhook that you recently created.<br>
    - **Queue** — select the queue that you recently created..<br>
18. Click **Save**.