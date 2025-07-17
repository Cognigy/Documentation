---
title: "Slack" 
slug: "slack"
description: "The Slack Endpoint enables you to connect your AI Agent to the Slack platform."
hidden: false
tags:
  - slack
  - slack endpoint
---

# Slack

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/slack.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

The Slack Endpoint enables you to connect your AI Agent to the [Slack platform](https://api.slack.com/apps/).

## Prerequisites

- Access to the [Slack API](https://api.slack.com/apps/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "Slack Setup"
    | Parameter          | Description                                                                                                                        |
    |--------------------|------------------------------------------------------------------------------------------------------------------------------------|
    | OAuth Access Token | The token for your Slack app's workspace, obtained from the **OAuth & Permissions** page of your Slack app.                        |
    | Verification Token | The token of your Slack app, obtained from the **Basic Information** page of your Slack app under the **App Credentials** section. |

## How to Set Up

??? info "1. Create a Slack Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Slack** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. Go to the **Configuration Information** section and copy the URL from the **Endpoint URL** field.

??? info "2. Create a Slack app"
    1. Go to the [Slack API](https://api.slack.com/apps) and click **Create New App**.
    2. Select **From scratch**. Enter a name for your app and select the workspace where you want to install it. Click **Create App**. Make sure your app is installed in the workspace.
    3. After creating the app, you will be redirected to the **Basic Information** page of your Slack app.
    4. In the **App Credentials** section, you will find the **Client ID** and **Client Secret**. You will need these later for OAuth configuration.
    5. In the left sidebar, go to **OAuth & Permissions**. Configure the necessary permissions for your app. Under **Scopes**, add the following app token scopes:
        - `app_mentions:read`
        - `chat:write`
        - `im:write`
        - `incoming-webhook`
    6. Go to **Settings > Basic Information** in your Slack app. In the **App Credentials** section, copy the value from the **Verification Token** field and save it for later use.
    7. Go to the **OAuth & Permissions** page of your Slack app and scroll to the **Tokens for Your Workspace** section. Copy the **Bot User OAuth Access Token** (it starts with `xoxb-`) and save it. You can also use the OAuth Access Token; in this case, the app will have the same permissions as your user account.
    8. In the **Event Subscriptions** section, enable events and set the **Request URL** to the Cognigy.AI Endpoint URL. In the **Subscribe to Bot Events** section, add the following events:
        - `app_mention`
        - `message.im`
    9. To enable Quick Reply messages, follow Slack's official guide on [Interactivity & Shortcuts](https://api.slack.com/interactivity/handling#setup).

??? info "3. Complete the Slack Endpoint Configuration"
    1. In the Cognigy.AI interface, go to the Slack Endpoint you created. Go to the **Slack Setup** section.
    2. In the **OAuth Access Token** field, paste the access token you copied from Slack.
    3. In the **Verification Token** field, paste the verification Token you copied from Slack. Save changes.

## More Information

- [Help Center: Slack Deployment](https://support.cognigy.com/hc/en-us/articles/360016307039-Slack-Deploy-an-Endpoint)
- [Help Center: Slack Renaming a Bot](https://support.cognigy.com/hc/en-us/articles/360016271340-Slack-Rename-your-bot)