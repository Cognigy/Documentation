---
title: "LLM Fallback (Beta)"
slug: "llm-fallback"
description: "LLM Fallback is a mechanism designed to maintain continuous service when a main model fails to respond or encounters an error."
hidden: false
tags:
   - llms
   - llm fallback
---

# LLM Fallback (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.90(Beta)-purple.svg)](../../../release-notes/4.90.md)

{! _includes/ai/beta.md !}

_LLM Fallback_ is a mechanism designed to maintain continuous service when a main model fails to respond or encounters an error. 
In such cases, the system automatically activates an alternative model to handle the request,
minimizing disruptions for AI Agents during [design](../generative-ai.md#design-time-generative-ai-features) and [run-time](../generative-ai.md#run-time-generative-ai-features) operations.
The fallback model is selected for its similar capabilities to the main model, providing redundancy and improving the reliability of the connection.

Using a fallback model provides the following benefits:

- **Improved User Experience**. Automatically switching to a fallback model ensures uninterrupted service, minimizing disruptions when the main model encounters issues.
- **Quick Recovery**. The fallback mechanism allows the system to recover quickly during failures, such as model outages or updates. This approach prevents extended delays and ensures operations resume smoothly without significant downtime.
- **Greater Flexibility**. Fallback models can be deployed in different regions or configured to meet varying resource requirements, providing adaptability. For example, they can serve as regional backups or handle workloads during high-demand periods.

Note that the fallback model serves as a temporary replacement for the main model.
If the system switches to the fallback model, it indicates that the main model requires attention.
This model failure can occur if the credentials are outdated or incorrectly modified, or if the LLM provider doesn't respond.

## Restrictions

- Creating fallbacks for embedding models is not supported.
- Using a fallback model overrides the [default retry mechanism](overview.md#retry-mechanism).
- You can add only one fallback to a main model.

## Create a Fallback Model

Creating a fallback model works the same way as creating a main model.
If your Project has only one model, you can add another by choosing one [from the same LLM provider or another provider](providers/all-providers.md) with similar capabilities.

Some providers, such as [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=python-secure%2Cglobal-standard%2Cstandard-chat-completions) and [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/models-regions.html), allow you to use the same model across different regions.  
For example, if you are using Azure OpenAI `gpt-4o` in the West US region as your main model, you can also use`gpt-4o` as a fallback model in the Sweden Central region.

## Add a Fallback Model

To add a fallback model, follow these steps:

1. In the left-side menu of the Project, go to **Build > LLM**.
2. Select the model to which you want to add a fallback.
3. Go to the **Fallback** section and activate the **Enable Fallback** setting.
4. Configure the following fields:
    - **Select a Fallback Model** — select a model from the list. If no model is available, [create a new one](#create-a-fallback-model).
    - **Number of failed requests** — specify the number of failed requests to the main model before the fallback model is triggered. You can specify up to 5 attempts. The default value is `1`.
    - **Duration in minutes of active fallback** — define how long the system should use the fallback model instead of the main model. After the specified time, the fallback will deactivate, and the main model will resume. The duration can be up to 30 minutes. The default value is `30`.
    - **Email Notifications** — add up to 5 email addresses to receive notifications when the fallback model is triggered. Enter each email in a separate input field using the format `example@domain.com`.
5. Click **Save**.

## More Information

- [Overview](overview.md)
- [LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
- [Other Operations](other-operations.md)