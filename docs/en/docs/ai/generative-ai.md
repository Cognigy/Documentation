---
title: "Generative AI"
slug: "Generative AI"
hidden: false
---

# Generative AI

[![Version badge](https://img.shields.io/badge/Updated in-v4.52-blue.svg)](../release-notes/4.52.md)

{! _includes/ai/terms-of-use.md !}

Generative AI refers to a type of artificial intelligence that creates new, original content, such as images, video, audio, and text, using machine learning algorithms. It works by learning from existing data and producing new content based on that learning.

Cognigy.AI integrates with the [Generative AI providers](#prerequisites) that allow text generation based on user input. That involves utilizing [Large Language Models (LLMs)](resources/build/llm.md) to analyze data and generate contextually relevant and personalized content.

In the Cognigy.AI interface, LLMs generate human-like and personalized content for a bot. It can be used for the following purposes:

- [Generating Lexicons](#generate-lexicons)
- [Creating new Flows with pre-configured Nodes](#generate-flows)
- [Generating new Intent sentences](#generate-intent-sentences)
- [Rephrasing bot outputs](#rephrase-bot-outputs)
- [Completing texts](#complete-texts)

To know more about the benefits of integrating Conversational AI with Generative AI platforms, watch this webinar:

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/g_ntrz52BLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Prerequisites

Before using this feature, you need to create an account in one of the Generative AI Providers:

- [OpenAI](https://platform.openai.com/). You need to have a paid account or be a member of an organization that provides you access. Open your OpenAI user profile, copy the existing API Key, or create a new one and copy it.
- [Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). You need to have a paid account or be a member of an organization that provides you access. Ask your Azure Administrator to provide API Key, resource name, and deployment model name.
- [Anthropic Claude](https://console.anthropic.com/docs). You need to be a [member of an organization](https://console.anthropic.com/docs/access) that provides you access.
- [Google Vertex AI](https://cloud.google.com/vertex-ai). You need to have a paid account or be a member of an organization that provides you access.

## Set up Generative AI

To set up the connection between Cognigy.AI and the Generative AI Provider, do the following:

- [Add a model](#add-a-model)
- [Apply the model](#apply-the-model)

### Add a Model

{! _includes/ai/generative-ai/credentials.md !}

### Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

You can check if the connection works by creating a new generative AI Flow.

## Generate Lexicons

Note that the generation of Lexicons for primary NLU languages besides German and English is not fully supported.

To use Generative AI technology for creating a new Lexicon, do the following:

1. In the left-side menu of the Cognigy.AI interface, click **Build > Lexicons**.
2. Click **+ New Lexicon**.
3. In the **New Lexicon** window, specify the name covering the Lexicon's general main topic and add a relevant description. It helps generate a more accurate result. To ensure that the generated content meets the desired expectations, fill in both fields. Relying solely on the title without using the description field will not produce the intended results.
4. Go to the **Lexicon Entry Generation** setting, and activate **Generate Lexicon Entries**.
5. Select **Lexicon language** from the list.
6. Set the number of entries (lexicon units).
7. *(Optional)* Add the default [Slot](../ai/nlu/slot-mapping/slot-mapping.md).
8. *(Optional)* Activate **Generate Synonyms**. Synonyms help virtual agent understand and recognize different variations of the same concept. Up to five synonyms will be generated for each keyphrase.
9. Click **Create**.

When Lexicon Editor with new keyphrases is opened, you can edit, delete, or add new ones manually.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-lexicons.png" width="90%" />
</figure>

## Generate Flows

Note that the generation of Flows for primary NLU languages besides German and English is not fully supported.

To use Generative AI technology for creating a new Flow with pre-configured Nodes based on your scenario, do the following:

1. In the left-side menu of the Cognigy.AI interface, click **Build > Flows**.
2. Click **+ New Flow**.
3. In the **New Flow** window, go to the **Flow Generation** section and select one of the options:
    - **None** — the Generative AI will not be applied to this Flow. This setting is activated by default.
    - **Name and Description** — the Generative AI will use the Name and Description fields for generating Flow.
    - **Name and Transcript** — the Generative AI will use the Name and Transcript fields for generating Flow. For this setting, you need to create a scenario and put it in the Transcript field. Use the Transcript field template as an example for your scenario.
4. Generate the Flow by clicking **Create**.

In the existing Flow, you can edit Nodes created based on your scenario. Generate new Intent sentences or responses for a chatbot.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-flows.png" width="90%" />
</figure>

## Generate Intent sentences

Note that the generation of Intent sentences for primary NLU languages besides German and English is not fully supported.

To use Generative AI technology for creating Intent example sentences, do the following:

1. Open the existing Flow.
2. In the upper-right corner of the **Flow Editor** page, select **NLU**.
3. On the **Intent** tab, click **Create Intent**.
4. Specify a unique name for the Intent and add a relevant description. It helps generate a more accurate result. To ensure that the generated content meets the desired expectations, fill in both fields. Relying solely on the title without using the description field will not produce the intended results.
5. Activate the **Generate Example Sentences** setting.
6. Set the number of generative sentences.
7. Generate new sentences by clicking **Create**.
8. Click **Build Model**, to learn the existing sentence.

If you want to add more examples automatically, use the **Generate Sentences** button. New sentences will be marked in light blue. The system generates specific numbers of sentences. Save changes and build your model again.

You can also use Generative AI in the Node configuration.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-intent-sentences.png" width="90%" />
</figure>

## Rephrase bot outputs

Generative AI is supported by the [Say](../ai/flow-nodes/message/say.md), [Question](../ai/flow-nodes/message/question.md), and [Optional Question](../ai/flow-nodes/message/optional-question.md) Nodes.

To use AI-enhanced bot output rephrasing, do the following:

1. Open the existing Flow.
2. Add one of the Nodes: Say, Question, or Optional Question.
3. Go to the AI-enhanced output section.
4. In the Rephrase Output setting, select one of the options:
    - **None** — the Generative AI will not be applied to this Node. This setting is activated by default.
    - **Based on Custom Input** — specify custom values for the Input. Use the **Custom Inputs** field that allows the bot developer to input information for contextualizing and rephrasing the output.
    - **Based on previous user inputs** — set the last `x` user Inputs considered.
5. Set the score in the Temperature setting. The temperature range determines the extent of variation in Generative AI's response.
6. Click **Save Node**.

Check in the interactive panel if your Flow works as expected.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/generating-output.png" width="90%" />
</figure>

## Complete texts

You can use the following Nodes for completing tasks.

- [LLM Prompts](#llm-prompt)
- [GPT Conversations](#gpt-conversation)

These Nodes support only text output in the [AI channel](flow-nodes/message/say.md#description).

### LLM Prompt

The [LLM Prompt Node](./flow-nodes/other-nodes/llm-prompt.md) feature enables the creation of relevant content using Generative AI. To use this feature, simply provide a text prompt that guides the AI in continuing the generated text.

### GPT Conversation 

!!! warning
    This Node is part of Cognigy's large-language-model research efforts and is intended solely as a preview feature. The GPT Conversation Node is not intended for production use.

The [GPT Conversation Node](./flow-nodes/other-nodes/gpt-conversation.md) feature enables the creation of relevant content using Generative AI based on your scenario. By default, this node has already pre-filled fields with a scenario.


## FAQ

**Q1:** Can I use my OpenAI free account for the Generative AI feature in Cognigy.AI?

**A1:** A paid account is required to get an API Key, which is necessary for using Generative AI. A free account does not provide this key.

**Q2**: Why doesn't Generative AI work with AudioCodes Nodes?

**A2:** Generative AI output supports only text messages in the [AI channel](#complete-texts).

## More Information

- [Flows](../ai/resources/build/flows.md)
- [Flow Nodes](../ai/flow-nodes/flow-nodes-overview.md)
- [Intents](../ai/nlu/nlu-overview/overview.md#intents)
- [Lexicons](../ai/resources/build/lexicons.md)
- [LLM](../ai/resources/build/llm.md)
- [Cognigy.AI Settings](../ai/resources/manage/settings.md)