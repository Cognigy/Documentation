---
title: "Amazon Lex"
slug: "amazon-lex"
description: "The Amazon Lex NLU connector allows you to connect to Amazon Lex and use its language understanding results to power AI Agents within Cognigy.AI."
hidden: false
tags:
  - Amazon Lex
  - external NLU
  - Amazon Lex NLU connector
---

# Amazon Lex

The Amazon Lex NLU connector enables integration with [Amazon Lex](https://aws.amazon.com/lex/) to use its language understanding results for powering AI Agents in Cognigy.AI.

## Prerequisites

- Access to Amazon Lex.

## Configuration on the NLU Provider Side

1. Log in to the **AWS Console**, then go to the **Lex Start page** to create a new bot.
2. Make sure to configure the languages that the bot will support, based on the Locale in Cognigy.AI. This step is important for proper integration.
3. After configuring the bot, save your changes and build the bot. Ensure all languages are built, especially if you intend to use multiple languages in Cognigy.AI.
4. In the **Lex Console**, navigate to **Bot versions** and create a new version for your bot. 
5. Create a **Bot Alias** and associate it with the new version. Copy the **Bot ID** and **Bot Alias ID** from the URL for later use in Cognigy.AI. 
6. Create a new **IAM user** in the **AWS IAM Console**, ensuring the user has the appropriate permissions. Make sure the AWS user has the following permissions:

    ??? info "User Permissions"
        ```txt
        iam:CreateUser
        iam:CreatePolicy
        iam:AttachUserPolicy
        lex:ListBotAliases
        lex:ListBotLocales
        lex:ListBots
        lex:ListBotVersions
        lex:ListBuiltInIntents
        lex:ListBuiltInSlotTypes
        lex:ListSlots
        lex:ListSlotTypes
        lex:DescribeBot
        lex:DescribeBotAlias
        lex:DescribeBotLocale
        lex:DescribeBotVersion
        lex:DescribeSlot
        lex:DescribeSlotType
        lex:CreateBot
        lex:CreateBotAlias
        lex:CreateBotLocale
        lex:CreateBotVersion
        lex:CreateIntent
        lex:CreateSlot
        lex:RecognizeText
        lex:StartConversation
        ```
7. Once the user is created, retrieve the **Access Key ID** and **Secret Access Key**.

## Configuration on the Cognigy.AI Side

1. In **Cognigy.AI**, go to **Build > NLU Connectors** and create an Amazon Lex NLU connector.
2. _(Optional)_ Toggle **Reparse Lex Slots** if you want to use reparse Lex Slots.
3. Enter the retrieved credentials.
   
   | **Parameter**     | **Description & How to Find**                                                |
   |-------------------|------------------------------------------------------------------------------|
   | Access Key        | The Access Key ID you retrieved when creating the IAM user.                  |
   | Secret Access Key | The Secret Access Key you retrieved when creating the IAM user.              |
   | AWS Region        | The AWS region in which your Lex bot was created (for example, `us-east-1`). |
   | Bot ID            | The Bot ID copied from the URL in the Lex Console.                           |
   | Bot Alias ID      | The Bot Alias ID copied from the URL in the Lex Console.                     |

{! _includes/ai/empower/nlu/nlu-connectors.md !}

## More Information

- [All NLU Connectors](all-nlu-connectors.md)
- [Cognigy Help Center: Amazon Lex](https://support.cognigy.com/hc/en-us/articles/4408910240530-Amazon-Lex-External-NLU)