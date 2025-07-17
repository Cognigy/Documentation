---
title: "Amazon Alexa" 
slug: "amazon-alexa"
description: "The Alexa Endpoint enables you to connect your AI Agent to the Amazon Alexa Skills."
hidden: false
tags:
  - amazon alexa
  - aws
  - alexa endpoint
  - alexa
---

# Amazon Alexa

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/alexa.png" width="100%" />
</figure>

The Alexa Endpoint enables you to connect your AI Agent to the [Amazon Alexa Skills](https://alexa.amazon.com).

## Prerequisites

- Access to [Amazon Alexa](https://alexa.amazon.com).

## Restrictions

- This Endpoint uses the [Alexa NLU Connector](../../empower/nlu/external/nlu-connector-reference/alexa.md), meaning all Natural Language Understanding (NLU) is processed by Amazon's NLU engine. Consequently, the Cognigy.AI NLU model can't be used in this configuration.
- Amazon Alexa passes only the intent name to the Cognigy.AI Flow, not the actual user input. Therefore, any Nodes that rely on user inputs, such as If Nodes, or Intent rules won't function as intended in this setup.

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)  

## Specific Endpoint Settings

??? info "Alexa Settings"
    | Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                           |
    |---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Reparse Alexa Slots | Allows slots detected by Alexa to be passed to Cognigy.AI and processed by the Cognigy NLU.                                                                                                                                                                                                                                                                                                           |
    | Deployment          | Select the Alexa skill you configured on the Amazon Alexa side. You can also log in to Amazon from the [My Profile](../../administer/user-menu/my-profile.md) page. Once logged in, you will be able to select the **Alexa Skill** you want to connect with your Cognigy.AI Endpoint. After selecting a skill, click the **Deploy** button to configure your skill to use this Endpoint when invoked. |

## How to Set Up

??? info "1. Create an Alexa Endpoint"
    1. In the left-side menu of your Agent, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Alexa** Endpoint type.
        2. Specify a unique name.
        3. Select a relevant Flow from the list. Save changes.
    4. In the Endpoint, go to the **Alexa Settings**.
    5. Click **Login With Amazon** and log in to your Amazon Developer Account.

??? info "2. Create an Alexa Skill"
    1. Go to the Amazon Developer Portal. 
    1. In the Amazon Developer Portal, click the **Alexa** tab and select **Create Skill**. 
    2. Name the skill and select the **Custom** model for flexibility in building the skill. Save and proceed to the Skill configuration.
    3. Add the following built-in intents to handle **Yes/No** questions in your Flow's Question Nodes. 
        - `AMAZON.YesIntent`
        - `AMAZON.NoIntent`
    You can use additional Amazon built-in intents and access them via `ci.intent` in Cognigy.AI.
    4. Go to the **Endpoints** page. In the **Service Endpoint Type** section, select **HTTPS**.
    5. In the **Default Region** field, enter the copied Endpoint URL. From the **Select SSL certificate type** list, select **My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority**. You can also configure another region if needed. Save the changes.

??? info "3. Finish Setup on the Cognigy.AI side"
    1. Go to the Alexa Endpoint that you created previously.
    2. Select the target Alexa skill from the **Deployment** list.
    3. Click **Deploy** to automatically configure the skill to use the Endpoint.

## More Information

- [Cognigy Help Center: Amazon Alexa Intro ](https://support.cognigy.com/hc/en-us/articles/360016192979)
- [Cognigy Help Center: Amazon Alexa Deployment ](https://support.cognigy.com/hc/en-us/articles/360016193099-Amazon-Alexa-Deploy-an-Endpoint)
- [Cognigy Help Center: Amazon Alexa Account Linking ](https://support.cognigy.com/hc/en-us/articles/360016153600-Amazon-Alexa-Account-Linking)