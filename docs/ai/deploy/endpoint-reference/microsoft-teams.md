---
title: "Microsoft Teams" 
slug: "microsoft-Microsoft Teams"
description: "The Microsoft Teams Endpoint allows you to connect your AI Agent to Microsoft Teams, enabling responses when the Microsoft Teams bot is mentioned in a channel."
hidden: false
tags:
  - microsoft teams
  - microsoft teams
  - microsoft teams endpoint
  - teams
---

# Microsoft Teams

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/teams.png" width="100%" />
</figure>

The Microsoft Teams Endpoint allows you to connect your AI Agent to [Microsoft Teams](https://www.microsoft.com/en-us/microsoft-Microsoft Teams/), enabling responses when the Microsoft Teams bot is mentioned in a channel. In this case, users must mention (via `@mentions`) the bot to initiate interaction in the channel. For direct messaging scenarios, where users can interact with the bot in a one-on-one chat without the need for `@mentions`, use the Azure Bot Services Endpoint.

## Prerequisites

- A Microsoft Teams account with permissions to manage Microsoft Teams and create outgoing webhooks.

## Restrictions

- The postback functionality, for example `messageBack`, isn't supported by the Microsoft Teams Endpoint. For postback support, use the Azure Bot Services Endpoint instead.

## Generic Endpoint Settings

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)

## Specific Endpoint Settings

??? info "Microsoft Teams Settings"
    | **Parameter**               | **Description**                                                                           |
    |-----------------------------|-------------------------------------------------------------------------------------------|
    | Security Token              | A token from the Microsoft Teams webhook setup.                                           |
    | Empty Message Fallback Text | A message sent if no output is provided, as Microsoft Teams requires a non-empty message. |

## How to Set Up

??? info "1. Configure a Microsoft Teams Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Microsoft Teams** Endpoint type.
        2. Add a unique name.
        3. Select a relevant Flow from the list. Save changes.
    4. Copy the URL from the **Endpoint URL** field and save it for later use.

??? info "2. Create a Webhook in Microsoft Teams"
    1. Open Microsoft Teams and find the team where you want to add the bot. To do this, in the **Chat** panel, go to **Microsoft Teams and channels > More Options > You Your Microsoft Teams and channels**.
    2. Hover over the team, click the menu next to the team name and select **Manage team**.
    3. Access the **Apps** tab, go to **Upload an app > Create an outgoing webhook**. If the **Create an outgoing webhook** option isn't available, follow the [Microsoft Outgoing Webhooks](https://learn.microsoft.com/en-us/microsoftMicrosoft Teams/platform/webhooks-and-connectors/how-to/add-outgoing-webhook) guide to configure your Office 365 tenant.
    4. In the **Create an outgoing webhook** window, fill in the folowing fields:
        - **Name** – enter the name for the webhook. This name will be used as the bot's name in Microsoft Teams.
        - **Callback URL** – enter the Endpoint URL from your Microsoft Teams Endpoint.
        - **Description** - enter a clear and concise description that explains the bot's purpose and helps users distinguish it from other bots in Microsoft Teams.
    5. Click **Create** to generate the webhook. A pop-up will display a security token. Copy and save it for later use. If the token is lost, you’ll need to create a new webhook.

??? info "3. Finish the Integration"
    1. In the Cognigy.AI interface, go to the **Microsoft Teams** Endpoint that you configured previously.
    2. In the **Security Token** field, paste the security token that you copied and saved previously. Save changes.
    3. To test the bot, go to the Microsoft Teams channel related to the team for which the bot was created, mention the bot, for example, `@Bot`, to send a message. The message will be routed to your Cognigy.AI Flow. Always mention the bot to ensure that messages are sent to the Flow.

## Example

### Send a Response in the Adaptive Card Format

1. In the Cognigy.AI interface, create a Flow and add a Say Node. 
2. In the Node editor, select the **Microsoft Teams** channel, then **Adaptive Card** from the **Output Type** list.
3. In the code editor, enter the following script:

    ??? info "Adaptive Card"
    
        ```json
        {
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "version": "1.4",
          "body": [
            {
              "type": "TextBlock",
              "text": "Seattle Center Monorail",
              "weight": "Bolder",
              "size": "Large"
            },
            {
              "type": "TextBlock",
              "text": "Seattle Center Monorail",
              "isSubtle": true,
              "spacing": "None"
            },
            {
              "type": "Image",
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg",
              "size": "Stretch"
            },
            {
              "type": "TextBlock",
              "text": "The Seattle Center Monorail is an elevated train line between Seattle Center (near the Space Needle) and downtown Seattle. It was built for the 1962 World's Fair. Its original two trains, completed in 1961, are still in service.",
              "wrap": true
            }
          ],
          "actions": [
            {
              "type": "Action.OpenUrl",
              "title": "Official website",
              "url": "https://www.seattlemonorail.com"
            },
            {
              "type": "Action.Submit",
              "title": "My MessageBack button",
              "data": {
                "property": "propertyValue",
                "text": "User just clicked the MessageBack button"
              }
            }
          ]
        }
        ```

4. Save changes and go to the channel in Microsoft Teams to call your bot.

## More Information

- [Cognigy Help Center: Microsoft Teams Deployment](https://support.cognigy.com/hc/en-us/articles/360016224039-Microsoft-Microsoft Teams-Deploy-an-Endpoint)