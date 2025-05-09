---
title: "Alexa"
slug: "alexa"
description: "The Alexa NLU Connector allows you to connect to Amazon Alexa and use its language understanding results to power AI agents within Cognigy.AI."
hidden: false
tags:
  - Amazon Alexa
  - external NLU
  - Alexa NLU connector
---

# Alexa

The Alexa NLU connector enables integration with [Amazon Alexa](https://www.alexa.com/) to use its language understanding results for powering AI Agents in Cognigy.AI.

## Prerequisites

- Access to Amazon Alexa.

## Configuration on the NLU Provider Side

1. Log in to the [Amazon Developer Console](https://developer.amazon.com/alexa), 
2. In the **Alexa Skills Kit** section, click **Create Skill**. 
3. Select a skill type and click **Create Skill**. 
4. Provide a name for your skill, for example, `Cognigy Skill`.
5. During the setup, define an Invocation Name, for example, `Cognigy Bot` that users will say to activate the skill on Alexa.
6. Select the default language and region where you want the skill to be available.
7. Configure the Intents and Slots according to the type of interaction your skill should handle. You can use built-in intents, for example, `AMAZON.HelpIntent`, or create custom intents.

## Configuration on the Cognigy.AI Side

In **Cognigy.AI**, go to **Build > NLU Connectors**, create an Alexa NLU connector, and configure the following settings.

| **Parameter**       | **Description**                                                                                                     |
|---------------------|---------------------------------------------------------------------------------------------------------------------|
| Invocation Name     | The phrase users will say to activate your Alexa skill. For example, `Alexa, ask [Skill Name] to [perform action]`. |
| Skills              | A list of skills that you configured.                                                                               |
| Reparse Alexa Slots | Allow Cognigy NLU to process the Slots provided by Alexa and extract structured data accordingly.                   |

{! _includes/ai/empower/nlu/nlu-connectors.md !}