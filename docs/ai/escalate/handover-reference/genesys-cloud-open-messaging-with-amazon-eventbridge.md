---
title: "Amazon EventBridge"
slug: "genesys-cloud-open-messaging-handover-with-amazon-bridge"
description: "By default, Cognigy.AI uses a WebSocket connection through the Notifications API to detect handover completion. Alternatively, you can use HTTP webhooks with Triggers and Web Services Data Actions to send requests to Cognigy.AI."
search:
boost: 2
hidden: false
tags:
- Genesys Cloud Open Messaging
- handover provider
- Genesys OM
- Genesys event detection
- handover end detection
- amazon eventbridge
- aws
---

# Genesys Cloud Open Messaging: Handover End Detection with Amazon EventBridge

[![Version badge](https://img.shields.io/badge/Added in-v4.100-blue.svg)](../../../release-notes/4.100.md)

The Amazon EventBridge integration offers a more reliable and stable solution for event handling compared to WebSocket. 
Unlike WebSocket, which can sometimes result in lost events due to connection instability, EventBridge ensures smooth and consistent event delivery, improving the reliability of the handover process between Cognigy.AI and Genesys Cloud Open Messaging.

In this guide, you will configure Amazon EventBridge connection for the following Genesys analytics events:

- [AfterCallWorkEvent](https://developer.genesys.cloud/analyticsdatamanagement/analytics/detail/analytics-detail-events#aftercallworkevent). The event is triggered when a user finishes after-call work by applying a wrap-up.
- [UserEndEvent](https://developer.genesys.cloud/analyticsdatamanagement/analytics/detail/analytics-detail-events#userendevent). The event is triggered when a user or human agent session ends, indicating that the interaction has been completed. Cognigy.AI uses this event to detect when a session ends, which helps avoid prematurely wrapping up the chat in the middle of a transfer or after receiving an `AfterCallWorkEvent` event.

The configuration depends on the Cognigy installation you have:

- [Shared and Dedicated SaaS](#cognigy-saas) – you need access to Genesys and must inform Cognigy technical support about the integration.
- [On-premises](#cognigy-on-premises) – you need access to both Genesys and [Amazon EventBridge](https://aws.amazon.com/eventbridge/).

## Prerequisites

- [Configured Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md). 
- Applicable to Cognigy.AI 4.100 and later versions. 
- If you want to migrate from [Handover End Detection with HTTP webhooks](genesys-cloud-open-messaging-handover-end-detection.md) to Amazon EventBridge, make sure you remove the [configuration steps](genesys-cloud-open-messaging-handover-end-detection.md#configuration-steps) after migration to Amazon EventBridge.
- For on-premises installations, activate the `FEATURE_USE_GENESYS_OM_HTTP_END_HANDOVER_REQUEST="true"` feature flag.

## Cognigy SaaS

??? info "1. Contact Cognigy Technical Support"
    1. Contact [Cognigy technical support](../../../help/get-help.md).
    2. Provide the `organisationId` for the Cognigy.AI organization where you want to enable the Amazon EventBridge integration. Cognigy technical support will provide you with the credentials needed to activate the Amazon EventBridge Source. If you need to create two integrations (one for each organization), provide both `organisationId` values in the same ticket.

??? info "2. Configure Amazon EventBridge in Genesys"
    1. In the Genesys interface, navigate to **Admin > Integrations**, select **Amazon EventBridge Source**, and click **Install**.
    2. On the **Configuration** tab, enter the following information:
        - **AWS Account ID** – enter the 12-digit AWS Account ID provided by Cognigy technical support.
        - **AWS Account Region** – enter the AWS region provided by Cognigy technical support.
        - **Event Source Suffix** – enter the `organisationId` of your Cognigy.AI organization.
        - **Topic Filtering** – add the following filters:
            - `v2.detail.events.conversation.{id}.user.end`
            - `v2.detail.events.conversation.{id}.acw`<br>
        Save changes and make sure that your integration is active.
    3. Click **Save**, go to the **Details** tab, and activate the integration.

??? info "3. Confirm the Integration Setup"
    1. Reply to the same support ticket to inform Cognigy technical support that the setup is complete.
    2. Cognigy technical support will verify the integration and contact you to confirm whether it was successful.

## Cognigy On-Premises

??? info "1. Configure Amazon EventBridge in Genesys"
    1. In the Genesys interface, navigate to **Admin > Integrations**, select **Amazon EventBridge Source**, and click **Install**.
    2. On the **Configuration** tab, fill in the following fields:
        - **AWS Account ID** – enter the 12-digit [AWS Account ID](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-identifiers.html) where the event source will be available for the event bus.
        - **AWS Account Region** – enter the [AWS region](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-saas.html) where the event source will be made available for the event bus. This parameter defines the geographical location of the AWS resources that will handle the event traffic.
        - **Event Source Suffix** – enter the `organisationId` of your Cognigy.AI organization.
        - **Topic Filtering** – add the following filters:
            - `v2.detail.events.conversation.{id}.user.end`
            - `v2.detail.events.conversation.{id}.acw`
    3. Save changes and make sure that your integration is active.

??? info "2. Set up an EventBridge Flow"
    1. Go to [Amazon EventBridge](https://console.aws.amazon.com/events).
    2. In the left navigation pane, go to **Integration > API destinations**, then click **Create API destination**.
    3. On the **Create API destination** page, fill in the following fields:
        - **Name** – enter `service-handover-api-destination`. 
        - **Endpoint** – enter `https://endpoint-<your-environment>/handover/genesysCloudOM`. For example, `https://endpoint-app.cognigy.ai/handover/genesysCloudOM`, where `your-environment` is `app.cognigy.ai`.
        - **HTTP Method** – select **POST**.
        - **Rate limit** – enter `300`.
    4. In the **Connection configuration** section, select **Create new connection**, then fill in the following fields:
        - **Name** – enter `service-handover-connection`.
        - **Description** – enter a meaningful description. This parameter is optional.
        - **Authorization Type** – select **API Key**.
        - **API Key Name** – enter `Authorization`. 
        - **API Key Value** – this value will be stored in your Kubernetes Secret. Use a securely generated random alphanumeric string (23 characters), base64-encoded for enhanced security.
    5. Save changes by clicking **Create**.

??? info "3. Create a Custom Event Bus"
    1. In the left navigation pane of the Amazon EventBridge console, go to **Integration > Partner event sources**.
    2. On the **Partner event sources** page, you will see a partner event source prefixed with `aws.partner/genesys.com/cloud` and suffixed with your Cognigy.AI `organisationId`. If it's missing, the Genesys setup was incorrect. Delete the EventBridge integration in Genesys and create it again.
    3. In the top-right corner, click **Associate with event bus** and confirm the integration.

??? info "4. Create a Rule"
    1. In the left navigation pane of the Amazon EventBridge console, go to **Buses > Event buses**.
    2. Select your custom event bus under **Custom event buses**.
    3. On the **Rules** tab, click **Create rule**.
    4. At the **Define rule detail** step, enter a rule name and its description. Make sure the correct event bus and event pattern are preselected.
    5. At the **Build event pattern** step, in the **Event source** section, select **Other**, then enter the following JSON in the **Event pattern** field:
        ```json
        {"source": [{"prefix": ""}]}
        ```
    6. At the **Select target(s)** step, proceed as follows:<br>
        6.1 Select **EventBridge API destination** in the **Target types** section.<br>
        6.2 In the **API destination** section, select **Use an existing API destination**.<br>
        6.3 In the **Execution role** section, create a role that uniquely identifies this integration, for example, `Amazon_EventBridge_Invoke_API_Destination_Genesys_Integration`.
    7. Skip the Configure tags step. At the **Review and create** step, complete the configuration.

??? info "5. Store your API Key as a Secret"
    You must expose the EventBridge API key to the Cognigy handover service.
    Run the following command by replacing `<your-key>` with the actual API key:
    ```bash
    kubectl create secret generic genesys-handover-secret \
    --from-literal=GENESYS_EVENTBRIDGE_HANDOVER_API_KEY=<your-key>
    ```
    Your Cognigy deployment must read this secret and inject the value into the service via environment variables:

    ```bash
    env:
      - name: GENESYS_EVENTBRIDGE_HANDOVER_API_KEY
        valueFrom:
          secretKeyRef:
            name: genesys-handover-secret
            key: GENESYS_EVENTBRIDGE_HANDOVER_API_KEY
    ```

    Now, your integration is complete.
    
## More Information

- [Genesys Cloud Open Messaging Documentation: About the Amazon EventBridge integration](https://help.mypurecloud.com/articles/about-the-amazon-eventbridge-integration/)
- [Genesys Cloud Open Messaging Documentation: Configure the Amazon EventBridge integration](https://help.mypurecloud.com/articles/configure-the-amazon-eventbridge-integration/)