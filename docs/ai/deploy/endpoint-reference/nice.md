---
title: "NICE CXone"
slug: "nice-cxone"
description: "The NICE CXone Endpoint connects AI Agents to the NICE CXone platform."
hidden: false
---

# NICE CXone

[![Version badge](https://img.shields.io/badge/Added in-v4.82-blue.svg)](../../../release-notes/4.82.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/nice.svg" width="100%" />
</figure>

The NICE CXone Endpoint connects AI Agents to the [NICE CXone](https://www.nice.com) platform.

## Prerequisites

- Registered an account on the [NICE CXone](https://cxone.niceincontact.com/) platform.
- Gained access to the [Virtual Agent Hub](https://help.nice-incontact.com/content/aiassistantsandbots/virtualagenthub/virtualagenthub.htm) in NICE CXone.
- Created a Cognigy.AI Flow.

## Generic Endpoint Settings

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)

## Specific Endpoint Settings

### NICE CXone Setup

| Parameter    | Description                                                                                                                                                              |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Verify Token | A verification token for connecting the NICE CXone Endpoint to the CXone Virtual Agent Hub. This token is generated on the Cognigy.AI side and unique for each Endpoint. |

## How to Set up

To set up a connection between NICE CXone and Cognigy.AI, follow these steps:

1. [Configure a NICE CXone Endpoint](#configure-a-nice-cxone-endpoint)
2. [Create an App in NICE CXone](#create-an-app-in-nice-cxone)

### Configure a NICE CXone Endpoint

1. Go to the Cognigy.AI interface.
2. In the left-side menu of the Project, go to **Deploy > Endpoints**.
3. On the **Endpoints** page, click **+ New Endpoint**.
4. In the **New Endpoint** section, do the following: <br>
    1. Select the **NICE CXone** Endpoint type.<br>
    2. Add a unique name.<br>
    3. Select a relevant Flow from the list.<br>
    4. Click **Save**.<br>
5. In the **Configuration Information** section, copy the Endpoint URL and save it for later use in NICE CXone.
6. Activate the **Enable Endpoint** setting.
7. In the **NICE CXone Setup** section, copy the token from the **Verify Token** field and save it for later use in NICE CXone.

### Create an App in NICE CXone

1. Go to the [NICE CXone](https://cxone.niceincontact.com/) platform.
2. In the upper-left corner, click the **Applications** app selector.
3. Go to **Others > Automation & AI**. A new window opens.
4. In the left-side **Hubs** menu, select **Virtual Agent Hub**. The **Virtual Agents** panel appears.
5. Click **Add Bot**.
6. At **Step 1: General Information**, do the following:<br>
    1. Enter a unique name in the **Virtual Agent (Bot) Name** field.<br>
    2. In the **Select Bot Provider** field, choose the **Cognigy Bot** card. If this card is not present, contact NICE support to activate this feature for your account.<br>
    3. In the upper-right corner, click **Next**.<br>
7. At **Step 2: Configuration**, fill in the following fields:
    - **URL** — enter the Endpoint URL that you saved and copied previously.
    - **Verify Token** — enter the Verify Token that you saved and copied previously.
8. In the upper-right corner, click **Next**.
9. At **Step 3: Voice**, in the **Voice Integration Options** section, activate the **Text Only** option. With this option, you can only use chat AI Agents. Click **Next**.
10. At **Step 4: Transcript**, leave the **Transcript** field with the **Nothing** value and click **Next**.
11. At **Step 5: Test + Add**, test the bot by sending a welcome message to the chat. If you receive a response from the Cognigy.AI Agent, the connection is established correctly.
12. Click **Add** to complete the virtual agent configuration.

For further integration,
you will need [NICE CXone Desktop Studio](https://help.nice-incontact.com/content/studio/fundamentals/fundamentals.htm) and the [channel](https://help.nice-incontact.com/content/acd/channels/acdchannels.htm?tocpath=ACD%7CACD%7CACD%20Channels%7C_____0)
through which end users will communicate with the Cognigy.AI Agent.
This logic is configured on the NICE CXone side.

For more information, read the following articles in the NICE CXone documentation:

- [Cognigy in NICE CXone](https://help.nice-incontact.com/content/aiassistantsandbots/virtualagenthub/cognigy.htm) 
- [Integrate Cognigy with NICE CXone](https://help.nice-incontact.com/content/aiassistantsandbots/virtualagenthub/integratecognigy.htm?tocpath=Virtual%20Agent%20Hub%7CVirtual%20Agent%20Hub%7CVirtual%20Agent%20Integrations%7CCognigy%7C_____1)