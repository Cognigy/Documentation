---
title: "RingCentral Engage" 
slug: "ringcentral-engage"
description: "The RingCentral Engage Endpoint enables you to connect your AI Agent to the RingCentral Engage platform."
hidden: false
tags:
  - ringcentral engage
  - ringcentral engage endpoint
---

# RingCentral Engage

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/ring-central-engage.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

The RingCentral Engage Endpoint enables you to connect your AI Agent to the [RingCentral Engage platform](https://www.ringcentral.com/engage/).

## Prerequisites

- Access to [RingCentral Engage](https://www.ringcentral.com/engage/).
- `Admin` role in RingCentral Engage.

## Generic Endpoint Settings

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "RingCentral Engage Setup"
    | **Parameter**      | **Description**                                                                                                                                |
    |--------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
    | API URL            | The URL determined by your application name and API version. The URL format is `https://api.ringcentral.com/restapi/v1.0/accounts/{accountId}` |
    | Access Token       | The token for API requests.                                                                                                                    |
    | Verification Token | The token that adds an extra layer of security to verify the authenticity of API requests to your RingCentral API domain.                      |
    | Secret             | The secret key matching the RingCentral Engage webhook configuration, used for the handshake process.                                          |
    | Bot Category ID    | The category ID used to identify the bot, obtained from the RingCentral Engage platform.                                                       |
    | Agent Category ID  | The category ID used to identify the agent, obtained from the RingCentral Engage platform.                                                     |

## How to Set Up

??? info "1. Create a RingCentral Engage Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **RingCentral Engage** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. Go to the **Configuration Information** section and copy the URL from the **Endpoint URL** field.
    5. In the **RingCentral Engage Setup** section, copy the **Secret** value for later use. 
    6. Create a verification token and paste it into the **Verification Token** field. The token can be any string, but must be kept secret and secure. Copy the value for later use. This token will be used to verify the authenticity of API requests to your RingCentral API domain.

??? info "2. Create API Access Token"
    1. Log in to your [RingCentral Engage account](https://www.ringcentral.com/engage/). 
    2. Go to **ADMIN > API Access Tokens**. Click **+** to create a new token. 
    3. Assign an Agent with permissions to read and reply to your source. 
    4. Copy the value from the **Access Token** field for later use.

??? info "3. Create Categories"
    1. Go to **ADMIN > Categories**.
    2. Create a new parent category. For example, `Cognigy`. Then, create two subcategories: `Bot` and `Agent`.
    4. Copy the category IDs from the URL for later use.

??? info "4. Configure Sources"
    1. Go to **ADMIN > Sources**.
    2. Select your source and under **MESSAGE SETTINGS**, set the **Default Category** to the **Bot** category.
    3. Save the configuration.

??? info "5. Create a Webhook"
    1. Go to **ADMIN > Webhooks**.
    2. Click **+** to create a new webhook. Configure the following settings:
        - **API Access Token** – use the token created earlier.
        - **Active** – enable the webhook.
        - **URL** – paste the Cognigy.AI Endpoint URL.
        - **Secret** – paste the secret from Cognigy.AI Endpoint.
        - **Sources Filtering Strategy** – select **No sources except**.
        - **Sources** – select your source.
        - **Registered Events** – enter `content.imported`.
        - **Verification Token** – paste the verification token from Cognigy.AI Endpoint.
    4. Save the webhook.

??? info "6. Complete the Endpoint Configuration"
    1. In the **RingCentral Engage Setup** section of your Endpoint, fill in the following fields:
        - **API URL** – enter the URL in the following format: `https://api.ringcentral.com/restapi/v1.0/accounts/{accountId}`.
        - **Access Token** – paste the Access Token copied earlier from RingCentral Engage.
        - **Bot Category ID** – paste the Bot Category ID copied earlier from RingCentral Engage.
        - **Agent Category ID** – paste the Agent Category ID copied earlier.
    2. Save changes. Test the connection by sending a message via RingCentral Engage chat.

## More Information

- [Cognigy Help Center: RingCentral Engage Deployment](https://support.cognigy.com/hc/en-us/articles/360016306779-RingCentral-Engage-Deploy-an-Endpoint)
- [Cognigy Help Center: RingCentral Engage Send Structured Content](https://support.cognigy.com/hc/en-us/articles/360016306859-RingCentral-Engage-Send-Structured-Content)
- [Cognigy Help Center: RingCentral Engage Handover Integration](https://support.cognigy.com/hc/en-us/articles/360016275260-RingCentral-Engage-Handover-Integration)