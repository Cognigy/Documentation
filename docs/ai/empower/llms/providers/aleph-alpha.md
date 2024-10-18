
# Aleph Alpha

1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**.
3. Click **+New LLM**.
4. In the **New LLM** window, select a model from the **Model Type** list.
5. Add a unique name and description for your model.
6. From the **Provider** list, select an LLM's provider:
6.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
    - **Model Type** — select the **Completion** type.<br>
    - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Aleph Alpha](https://docs.aleph-alpha.com/docs/Deprecated%20Luminous/Deprecated-Luminous/model-card/) documentation.<br>
  6.2 Click **Save**.<br>
  6.3 Fill in the following fields:<br>
    - **Connection name** — create a unique name for your connection.<br>
    - **Token** — specify a key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/docs/account/).<br>
  6.4 Click **Create**.<br>
  6.5 Fill in the remaining field:<br>
    - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Aleph Alpha provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the base URL. For example, `https://api.aleph-alpha.com`.
7. To apply changes, click **Save**.
8. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy.AI features, go to the settings by clicking **Manage LLM Features**.