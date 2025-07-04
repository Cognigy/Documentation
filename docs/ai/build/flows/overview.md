---
title: "Overview"
slug: "flows"
description: "Cognigy.AI Flows are conversational structures consisting of Nodes that define how AI Agents interact with users. With Flows, you can customize the behavior of AI Agents and design tailored and dynamic conversational experiences."
hidden: false
tags:
  - Cognigy.AI
  - Flows
---

# Flows

[![Version badge](https://img.shields.io/badge/Updated in-v4.80-blue.svg)](../../../release-notes/4.80.md)

A _Flow_ is a conversational structure consisting of [Nodes](../nodes/overview.md) that defines how AI Agents interact with users. With Flows, you can customize the behavior of AI Agents and design tailored and dynamic conversational experiences. AI Agents can access the [Input](../../build/ai-agent-memory/input.md), [Context](../../build/ai-agent-memory/context.md), and [Profile](../../build/ai-agent-memory/profile.md) objects from the Flow to provide context-aware responses.

Flows include:

- [Nodes](../nodes/overview.md) — the Flow's building blocks.
- [Intents](../../empower/nlu/intents/overview.md) — user input mapping with natural language understanding (NLU).
- [Lexicons](../../empower/nlu/slots/user-defined/lexicon.md) — keyphrases to improve Intent recognition.
- [Locales](../translation-and-localization/localization.md) — language settings for a multilingual AI Agent.
- [States](../../test/interaction-panel/state.md) — control over Intents.
- [Slot Fillers](../../empower/nlu/slot-fillers.md) — automatic information extraction from user input.

You can also connect different [Flows](../../empower/nlu/attachments.md) and switch between them with a [Go To Node](../node-reference/logic/go-to.md) to create more complex conversational experiences.

## Working with Flows

=== "GUI"
    You can create, clone, and delete Flows in **Build > Flows**. Also, you can export Flows as a Package, copy their Reference ID. To build and configure Flows, use the [Flow editor](editor.md).

    You can create Flows using [Generative AI](../../empower/generative-ai.md) to automatically generate Nodes with predefined configurations and content. For this approach, you need to add a [large language model](../../empower/generative-ai.md#prerequisites) (LLM).

    To test Flows, click ![interaction-panel-icon](../../../_assets/icons/interaction-panel.svg) and use the [Interaction Panel](../../test/interaction-panel/overview.md).

=== "API"
    You can view, create, and edit Flows using the [Cognigy API](https://api-trial.cognigy.ai/openapi#tag--Charts-v2.0).

=== "CLI"
    You can manage Flows using the [Cognigy CLI](https://github.com/Cognigy/Cognigy-CLI).

### Settings

Besides the Nodes, you can customize Flows further on the **Settings** tab of the [Flow editor](editor.md). For example, you can add Yes/No logic and personalized confirmation responses. Also, you can fine-tune the AI Agent's confidence in understanding Intents and activate recognition of specific details, including age, date, and email addresses, to ensure more accurate responses.

??? info "General Flow Logic"
    | Parameter                                 | Description                                                                                                                                                                                                                                           |
    |-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Yes/No logic                              | Add a specific [Yes/No logic](../../empower/nlu/intents/yes-no-intents.md) within your Flow to confirm and reject an [Intent](../../empower/nlu/intents/overview.md) or the **Yes/No** type in [Question Nodes](../node-reference/basic/question.md). |
    | Positive confirmation words               | Add customized responses to confirm an [Intent](../../empower/nlu/intents/overview.md) and [Question Nodes](../node-reference/basic/question.md).                                                                                                     |
    | Negative confirmation words               | Add customized responses to reject an [Intent](../../empower/nlu/intents/overview.md) and [Question Nodes](../node-reference/basic/question.md).                                                                                                      |
    | Continue main Flow after attached Flow    | Enable this setting to continue the main Flow after an attached Flow has been executed. Disabled by default.                                                                                                                                          |
    | Continue Flow after Default reply         | Enable this setting to continue executing the Flow logic after a default reply has been delivered. Disabled by default.                                                                                                                               |
    | Continue Flow after negative confirmation | Enable this setting to continue the Flow logic after a negative response to an Intent confirmation sentence. Disabled by default.                                                                                                                     |
    | Pass Default Reply into Flow              | Enable this setting to have the AI Agent store the default reply in the input instead of using it directly. This setting allows you to use the reply within the Flow logic. Disabled by default.                                                      |
    | Include Default Reply in NLU Training     | Enable this setting to include default replies in NLU training. The default replies serve as example sentences for matching Intents. You can also configure this setting individually for each Intent. Enabled by default.                            |

??? info "Intent Mapper"
    | Parameter                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    |---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Attached Flow Intent Mapping Priority | <ul><li>**Jointly Map Main and Attached Flow** — treats Main and Attached Flow Intents as if they were a single Intent collection, finding the best matching Intent and executing the corresponding Flow.</li><li>**Map Main Flow first** — maps the Main Flow Intents separately. If no Intent is found in the Main Flow, then the Attached Flow is mapped.</li><li>**Map Attached Flow first** — maps the Attached Flow Intents separately. If no Intent is found in the Attached Flow, then the Main Flow is mapped.</li></ul>                                                                                          |
    | Implicit Slot Parsing                 | Determine whether Slots in NLU example sentences should be parsed implicitly or if only Slot annotations should be used for training:<ul><li>**Disabled — only use slot annotations** — use only Slot annotations.</li><li>**Full - Parse both System and Lexicon slots implicitly** — parse both system- and user-defined Slots implicitly.</li><li>**System Slots - No Lexicon Slots** — parse only system-defined Slots implicitly. All Slot annotations will be considered.</li><li>**Lexicon Slots - No System Slots** — Parse only user-defined Slots implicitly. All Slot annotations will be considered.</li></ul> |

??? info "Thresholds"
    | Parameter                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    |--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Intent threshold         | Determine the level of confidence required for the AI Agent to understand what the user is trying to communicate. The level of confidence accepts values ranging from 0 to 1.                                                                                                                                                                                                                                                                                                              |
    | Reconfirmation Threshold | Determine a score from which an Intent is considered confirmed or marked for reconfirmation if a reconfirmation sentence is set. By default, the value is `0.2`. Note that the confidence threshold has **no effect unless the Intent uses confirmation sentences**. The Reconfirmation Threshold is the lower confidence threshold. You must set it in addition to the Confidence Threshold. Intent scores above the reconfirmation threshold are confirmed or marked for reconfirmation. |
    | Confidence Threshold     | Determine a score from which an Intent is considered confirmed if a confirmation sentence is set. By default, the value is `0.4`.                                                                                                                                                                                                                                                                                                                                                          |

??? info "Attached Flows specific settings"
    | Parameter                                                             | Description                                                                                                       |
    |-----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
    | Use Thresholds of the attached Flows                                  | Determine whether the thresholds configured in the attached Flows are applied. Enabled by default.                |
    | Use "Continue Flow after Default Reply" setting of the attached Flows | Determine if the conversation continues after giving a default reply in the attached Flows. Enabled by default.   |
    | Use "Pass Default Reply into Flow" of the attached Flows              | Determine if the default reply from attached Flows affects the ongoing conversation. Enabled by default.          |
    | Use "Implicit Slot Parsing" setting of the attached flows             | Determine if the system should try to understand Slot values even if not directly mentioned. Disabled by default. |

??? info "Lexicon Slots"
    | Parameter                           | Description                                                                                                                                                                                                                                                                                                                                             |
    |-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Parse Lexicon Slots with submatches | Enable the parsing of Lexicon Slots with submatches. This setting allows more detailed understanding of user input by identifying not just the primary match but also submatches within the Lexicon. This feature can improve accuracy in language understanding tasks, especially when dealing with complex or ambiguous phrases. Disabled by default. |

??? info "System Slots"
    | Parameter                | Description                                                                                                                                     |
    |--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
    | Enable Age Slots         | Enable the recognition of age-related terms. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).      |
    | Enable Date Slots        | Enable the recognition of date-related terms. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).     |
    | Enable Distance Slots    | Enable the recognition of distance-related terms. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md). |
    | Enable Duration Slots    | Enable the recognition of duration-related terms. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md). |
    | Enable Email Slots       | Enable the recognition of email addresses. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).        |
    | Enable Money Slots       | Enable the recognition of monetary values. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).        |
    | Enable Number Slots      | Enable the recognition of numerical values. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).       |
    | Enable Percentage Slots  | Enable the recognition of percentage values. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).      |
    | Enable Temperature Slots | Enable the recognition of temperature values. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).     |
    | Enable URL Slots         | Enable the recognition of URLs. For more information, read [System-Defined Slots](../../empower/nlu/slots/system-defined.md).                   |

## More Information

- [Flow editor](editor.md)
- [Nodes](../nodes/overview.md)
- [Interaction Panel](../../test/interaction-panel/overview.md)
- [Agents](../../overview/ai-workforce.md)