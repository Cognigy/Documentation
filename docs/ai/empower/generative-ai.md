---
title: "Generative AI"
slug: "Generative AI"
hidden: false
---

# Generative AI

[![Version badge](https://img.shields.io/badge/Updated in-v4.99-blue.svg)](../../release-notes/4.99.md)

{! _includes/ai/terms-of-use.md !}

Generative AI refers to a type of artificial intelligence that creates new, original content, such as images, video, audio, and text, using machine learning algorithms. It works by learning from existing data and producing new content based on that learning.

Cognigy.AI integrates with various [Large Language Models (LLM) Providers](#prerequisites) to enable Generative AI functionality. This functionality is broadly classified as using [LLMs](llms/overview.md) to:

- [Support the AI Agent builder](#design-time-generative-ai-features) (Design-Time)
- [Enhance the customer experience](#run-time-generative-ai-features) (Run-Time)

To know more about the benefits of integrating Conversational AI with Generative AI platforms, watch this webinar:

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/g_ntrz52BLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Prerequisites

Before using Generative AI, you need to have access to an LLM of the following providers:

- [OpenAI](llms/providers/openai.md). You need to have a paid account or be a member of an organization that provides you access. Open your OpenAI user profile, copy the existing API Key, or create a new one and copy it.
- [Azure OpenAI](llms/providers/microsoft-azure-openai.md). You need to have a paid account or be a member of an organization that provides you access. Ask your Azure administrator to provide API Key, resource name, and deployment model name.
- [Anthropic Claude](llms/providers/anthropic.md). You need to be a [member of an organization](https://console.anthropic.com/docs/access) that provides you access.
- [Google Vertex AI](llms/providers/google-vertex-ai.md) or [Google Gemini](llms/providers/google-gemini.md). You need to have a paid account or be a member of an organization that provides you access.
- [Aleph Alpha](llms/providers/aleph-alpha.md). You need to have an [Aleph Alpha account](https://docs.aleph-alpha.com/).
- [Amazon Bedrock](llms/providers/amazon-bedrock.md). You need to have an [AWS account](https://aws.amazon.com/resources/create-account/) and access to the [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html) service.
- [Mistral](llms/providers/mistral.md). You need to have a [Mistral AI account](https://docs.mistral.ai/getting-started/quickstart/#account-setup) and activate payments for the LLM usage.
- Cognigy's built-in LLM. A free-of-charge LLM for [design-time](#design-time-generative-ai-features) features and available only to customers with SaaS installations.

## Design-Time Generative AI Features

{! _includes/ai/generative-ai/deprecation-of-individual-design-time-features.md !}

### Configure LLMs for Design-Time Features

1. In **Manage > Settings**, activate **Enable Generative AI Features** in the **Generative AI Settings** section.
2. From the **Design-Time Generative LLM Features** list, select:

    - **Platform-Provided LLM** to use the built-in LLM for the design-time features.
    - a third-party LLM you want to use.

### Generate Cognigy.AI Resources

During the design phase of creating AI Agents, LLMs can be used to generate a variety of Cognigy.AI resources:

??? info "Generate Lexicons"

    !!! note
        - The generation of Lexicons for primary NLU languages besides German and English is not fully supported.
        - The model may not always generate the exact number of Lexicon entries requested, as its output can vary based on interpretation and model behavior.

    To use Generative AI technology for creating a new Lexicon, do the following:

    1. In the left-side menu of the Cognigy.AI interface, click **Build > Lexicons**, then **+ New Lexicon**.
    2. In the **New Lexicon** window, specify the name covering the Lexicon's general main topic and add a relevant description. It helps generate a more accurate result. To ensure that the generated content meets the desired expectations, fill in both fields. Relying solely on the title without using the description field will not produce the intended results.
    3. Go to the **Lexicon Entry Generation** setting, and activate **Generate Lexicon Entries**.
    4. Select **Lexicon language** from the list and set the number of entries (lexicon units).
    5. *(Optional)* Add the default [Slot](nlu/slots-and-lexicons/slots.md).
    6. *(Optional)* Activate **Generate Synonyms**. Synonyms help AI Agents understand and recognize different variations of the same concept. Up to five synonyms will be generated for each keyphrase.

    When the Lexicon Editor with new keyphrases is opened, you can edit, delete, or add new ones manually.

    <figure>
      <img class="image-center" src="../../../_assets/ai/empower/generative-ai/generating-lexicons.png" width="90%" />
    </figure>

??? info "Generate Flows"

    Note that the generation of Flows for primary NLU languages besides German and English is not fully supported.

    To use Generative AI technology for creating a new Flow with pre-configured Nodes based on your scenario, do the following:

    1. In the left-side menu of the Cognigy.AI interface, click **Build > Flows**, then **+ New Flow**.
    2. In the **New Flow** window, go to the **Flow Generation** section and select one of the options:
       
        - **None** — the Generative AI will not be applied to this Flow. This setting is activated by default.
        - **Name and Description** — the Generative AI will use the Name and Description fields for generating Flow.
        - **Name and Transcript** — the Generative AI will use the Name and Transcript fields for generating Flow. For this setting, you need to create a scenario and put it in the Transcript field. Use the Transcript field template as an example for your scenario.

    In the existing Flow, you can edit Nodes created based on your scenario. Generate new Intent sentences or responses for a chatbot.

    <figure>
      <img class="image-center" src="../../../_assets/ai/empower/generative-ai/generating-flows.png" width="90%" />
    </figure>

??? info "Generate Intent Sentences"

    !!! note
        - The generation of Intent example sentences for primary NLU languages besides German and English is not fully supported.
        - The model may not always generate the exact number of sentences requested, as its output can vary based on interpretation and model behavior.

    To use Generative AI technology for creating Intent example sentences, do the following:

    1. Open the existing Flow.
    2. In the upper-right corner of the **Flow Editor** page, select **NLU**.
    3. On the **Intent** tab, click **Create Intent**.
    4. Specify a unique name for the Intent and add a relevant description. It helps generate a more accurate result. To ensure that the generated content meets the desired expectations, fill in both fields. Relying solely on the title without using the description field will not produce the intended results.
    5. Activate the **Generate Example Sentences** setting and set the number of generative sentences.
    6. Generate new sentences by clicking **Create**, then click **Build Model**.

    If you want to add more examples automatically, use the **Generate Sentences** button. New sentences will be marked in light blue. The system generates specific numbers of sentences. Save changes and build your model again.

    You can also use Generative AI in the Node configuration.

    <figure>
      <img class="image-center" src="../../../_assets/ai/empower/generative-ai/generating-intent-sentences.png" width="90%" />
    </figure>

??? info "Generate Adaptive Cards"

    LLMs can create Adaptive Cards based on the prompt you provide in the description field for the **Adaptive Card** output type in the [Say](../build/node-reference/basic/say.md#adaptive-card) or [Copilot: Adaptive Card Tile](../build/node-reference/ai-copilot/set-adaptive-card-tile.md) Nodes.

## Run-Time Generative AI Features

In Cognigy.AI, the run-time Generative AI features enrich AI Agents with dynamic interactions using LLMs.
These features include running prompts, orchestrating conversations, rephrasing outputs,
dynamic question reprompts, and generative knowledge retrieval.

### Configure LLMs for Run-Time Features

1. In **Manage > Settings**, activate **Enable Generative AI Features** in the **Generative AI Settings** section.
2. Go to the [run-time feature](llms/model-support-by-feature.md) you want to configure and select the LLM you want to use.

### Use Run-Time Features

In the [Flow editor](../build/flows/editor.md), you can use the following run-time Generative AI features:

??? info "LLM Prompt Node"

    The [LLM Prompt Node](../build/node-reference/service/llm-prompt.md) enables you to run a prompt against an LLM and either output the message or store it in the Input or Context objects.

??? info "GPT Conversation Node"

    !!! warning
        This Node is part of Cognigy's large-language-model research efforts and is intended solely as a preview feature. The GPT Conversation Node is not intended for production use.
        The GPT Conversation Node is deprecated and can no longer be created in Cognigy.AI v4.85 and later.
        Use the [LLM Prompt Node](#llm-prompt-node) to generate messages with LLM services.
    
    The [GPT Conversation Node](../build/node-reference/service/gpt-conversation.md) enables an LLM to orchestrate a complete conversation, including determining the next best action and outputting relevant messages to the customer.

??? info "Rephrasing AI Agent Outputs"

    To use AI-enhanced bot output rephrasing in [Say](../build/node-reference/basic/say.md), [Question](../build/node-reference/basic/question.md), and [Optional Question](../build/node-reference/basic/optional-question.md) Nodes, do the following:

    1. Open the existing Flow.
    2. Add one of the Nodes: Say, Question, or Optional Question.
    3. Go to the **AI-enhanced output** section.
    4. In the **Rephrase Output** setting, select one of the options:
       
        - **None** — the Generative AI will not be applied to this Node. This setting is activated by default.
        - **Based on Custom Input** — specify custom values for the Input. Use the **Custom Inputs** field that allows the bot developer to input information for contextualizing and rephrasing the output.
        - **Based on previous user inputs** — set the last `x` user Inputs considered.

    5. Set the score in the Temperature setting. The temperature range determines the extent of variation in Generative AI's response.
    6. Click **Save Node**.

    Check in the Interaction Panel if your Flow works as expected.

    <figure>
      <img class="image-center" src="../../../_assets/ai/empower/generative-ai/generating-output.png" width="90%" />
    </figure>

??? info "LLM-powered Question Reprompts"

    The [Question Node](../build/node-reference/basic/question.md#reprompt-methods) includes a feature to output a prompt to the user when they have answered a question incorrectly. Instead of using static text, you can use LLMs to generate a more dynamic and personalized output.

??? info "Search Extract Output Node"

    The [Search Extract Output Node](../build/node-reference/other-nodes/search-extract-output.md) uses Cognigy [Knowledge AI](knowledge-ai/overview.md)
    to execute a search within a Knowledge Store,
    extracts a relevant answer via a Generative AI model, and creates an output.

??? info "LLM Entity Extract Node"

    The [LLM Entity Extract Node](../build/node-reference/other-nodes/llm-entity-extract.md) retrieves specific entities from user inputs,
    such as product or booking codes and customer IDs.
    For example, if a user input is `I would like to book flight AB123 from New York to London`,
    the LLM can extract the booking code `AB123` from this input.

??? "FAQ"

    **Q1:** Can I use my OpenAI free account for the Generative AI feature in Cognigy.AI?
    
    **A1:** A paid account is required to get an API Key, which is necessary for using Generative AI. A free account does not provide this key.
    
    **Q2**: Why doesn't Generative AI work with AudioCodes Nodes?
    
    **A2:** Generative AI output supports only text messages in the AI channel.

## More Information

- [Flows](../build/flows/overview.md)
- [Flow Nodes](../build/node-reference/overview.md)
- [Intents](nlu/overview.md#intents)
- [Lexicons](nlu/slots-and-lexicons/lexicons.md)
- [LLMs](llms/overview.md)
- [Cognigy.AI Settings](../administer/access/project-settings.md)