---
title: "HTTP Webhooks"
slug: "genesys-cloud-open-messaging-handover-end-detection"
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
  - http webhooks
---

# Genesys Cloud Open Messaging: Handover End Detection with HTTP webhooks

!!! warning
    The handover end detection with HTTP webhooks is applicable to Cognigy.AI 4.99 and earlier versions. 
    If you use Cognigy.AI 4.100 or later versions, migrate to [Amazon EventBridge](genesys-cloud-open-messaging-with-amazon-eventbridge.md). Remove the previous [configuration steps](#configuration-steps) after migration to Amazon EventBridge.
   
    In Cognigy.AI 4.100, the handover end detection configuration with HTTP webhooks will continue to work only if it was set up before updating to Cognigy.AI 4.100.

By default, to detect the end of a handover with Genesys Cloud Open Messaging, Cognigy.AI establishes a WebSocket connection that subscribes to a channel created through the [Notifications API](https://developer.genesys.cloud/notificationsalerts/notifications/notifications-apis). 
However,
this approach has [limitations](https://developer.genesys.cloud/notificationsalerts/notifications/#usage-limitations)
and may not always be reliable.
As an alternative, you can use HTTP webhooks,
which require creating Triggers within the Workflow and using the Web Services Data Actions extension on the Genesys platform
to send requests to Cognigy.AI.
This approach ensures that events from ongoing conversations are reliably captured,
especially during high volumes or complex flows with multiple queue transfers in Genesys.

In this guide, you will configure HTTP webhooks in Genesys Cloud Open Messaging for the following Genesys analytics events:

- [AfterCallWorkEvent](https://developer.genesys.cloud/analyticsdatamanagement/analytics/detail/analytics-detail-events#aftercallworkevent). The event is triggered when a user finishes after-call work by applying a wrap-up.
- [UserEndEvent](https://developer.genesys.cloud/analyticsdatamanagement/analytics/detail/analytics-detail-events#userendevent). The event is triggered when a user or human agent session ends, indicating that the interaction has been completed. Cognigy.AI uses this event to detect when a session ends, which helps avoid prematurely wrapping up the chat in the middle of a transfer or after receiving an `AfterCallWorkEvent` event.

## Prerequisites

- [Configured Genesys Cloud Open Messaging](genesys-cloud-open-messaging.md).
- Applicable to Cognigy.AI 4.99 and earlier versions. If you use Cognigy.AI 4.100 or later versions, migrate to [Amazon EventBridge](genesys-cloud-open-messaging-with-amazon-eventbridge.md).

## Configuration Steps

??? info "1. Install the Web Services Data Actions Extension"
    1. In the Genesys Cloud interface, go to **Admin > Integrations**.
    2. Click **+ Integrations**, find **Web Services Data Actions**, then click **Install**. 
    3. Enter a name for your connection: `Web Services Data Actions Integration`.
    4. Toggle the **Inactive** option next to the connection name to activate the connection, then save changes.

??? info "2. Create an Action"
    1. Go to **Admin > Integrations > Actions**.
    2. Click **+ Add Action** and select the integration you created.
    3. Enter a name for your connection: `Send Event to Cognigy`.

??? info "3. Configure the Action"
    1. On the **Setup** tab, go to the **Contracts** section.
    2. In **Input Contract > JSON**, paste the following JSON:
    ```json
    {
      "title": "properties",
      "type": "object",
      "properties": {
        "userId": {
          "type": "string"
        },
        "topic": {
          "type": "string"
        },
        "disconnectType": {
          "type": "string"
        }
      },
      "additionalProperties": true
    }
    ```
    4. In the **Configuration** section, follow these steps:
       1. Select **POST** from the **HTTP Method** list.
       2. In the **Request URL Template**, enter the Cognigy API URL in the following format: `https://endpoint-<cognigy-instance-domain>/handover/genesysCloudOM`. For example, `https://endpoint-trial.cognigy.ai/handover/genesysCloudOM`.
    5. Go to the **Test** tab, enter a value in the provided fields, for example `123`. Click **Run Test**.
    6. If the test is successful, click **Save & Publish**. Otherwise, review and correct the previous steps.

??? info "4. Create Workflows"
    1. Go to **Admin > Architect** and select **Workflow** from the **Flows** list.
    2. Create a new flow for the `AfterCallWorkEvent` event and name it `Workflow conversation.id.acw`. 
    3. In the left-side menu, select **Resources > Data** and create the following String-type variables:
        - `addressTo`
        - `disconnectType`
    4. Go to the **Initial State**, then select **Toolbox > Data**. Drag **Call Data Action** to the desired location in the flow editor.
    5. Name your action and select **Web Services Data Action** from the **Category** list.
    6. From the **Data Action** list, select the action you created previously.
    7. Fill in the following fields:
        - `userId` — select **Expression** and enter `Flow.addressTo`.
        - `topic` — select **Literal** and enter `v2.detail.events.conversation.id.acw`.
        - `disconnectType` — select **Expression** and enter `Flow.disconnectType`.
        Save and publish your flow.
    8. Create a new flow for the `UserEndEvent` event and repeat steps 1–7 with these changes:
        1. Name the workflow as `Workflow conversation.id.user.end`.
        2. For the `topic` field, select **Literal** and enter `v2.detail.events.conversation.id.user.end`.

??? info "5. Create Triggers"
    1. Go to **Admin > Architect > Triggers**.
    2. Create a trigger for the `AfterCallWorkEvent` event and name it `Trigger conversation.id.acw`.
    3. Configure the following fields:
        - **Topic Name** — select `v2.detail.events.conversation.{id}.acw`.
        - **Workflow Target** — select `Workflow conversation.id.acw`.
    4. Click **+ Add Condition** and define the criteria:
    ```txt
    | JSON Path   | Operator    | Value     |
    |-------------|-------------|-----------|
    | mediaType   | Equals (==) | "MESSAGE" |
    | messageType | Equals (==) | "OPEN"    |
    ```
    Save changes.
    5.  Create a new trigger for the `UserEndEvent` event and repeat steps 1–4 with these changes:
        - **Topic Name** — select `v2.detail.events.conversation.{id}.user.end`.
        - **Workflow Target** — select `Workflow conversation.id.user.end`.
    6. For both triggers, toggle the **Inactive** option next to the trigger name to activate them, then save changes.

The integration is complete, ensuring more reliable detection of conversation endings.

## More Information

- [Genesys Cloud Open Messaging Documentation: Create a flow](https://help.mypurecloud.com/articles/create-call-flow/)
- [Genesys Cloud Open Messaging Documentation: Create a custom action for integrations](https://help.mypurecloud.com/articles/create-custom-action-integrations/)
- [Genesys Cloud Open Messaging Documentation: Add a data actions integration](https://help.mypurecloud.com/articles/add-a-data-actions-integration/)