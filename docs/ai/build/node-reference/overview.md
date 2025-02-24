---
title: "Overview"
slug: "nodes-overview"
hidden: false
---

# Node Reference

_Nodes_ are fundamental building blocks that are used to construct Flows and define the logic of AI Agents. Each Node represents a specific action, decision point, or interaction within the Flow. Users can create, configure, and connect Nodes to design complex conversational experiences.

Node Categories:

- [Basic](#basic-nodes)
- [Logic](#logic-nodes)
- [Voice](#voice-nodes)
- [Analytics](#analytics-nodes)
- [Service](#service-nodes)
- [AI](#ai-nodes)
- [Data](#data-nodes)
- [AI Copilot](#ai-copilot-nodes)
- [xApps](#xapp-nodes)
- [Other](other-nodes/overview.md)

If you want to create a custom Node, go to the [Extensions](../extensions.md) section.

Note that Nodes in the Cognigy.AI interface can belong to multiple categories for easy navigation.
For example, the Code Node is in Basic and Data categories,
the MongoDB Nodes are in Service and Data, and the Look up Node is in Logic and Basic.
In the Node reference below, each Node is assigned to a single category to avoid duplicates in descriptions.

## [Basic Nodes](basic/overview.md)

Basic Nodes are commonly used in basic conversational Flows. Included are typical Nodes like the [Say Node](basic/say.md), the [Question Node](basic/question.md).

### [Say](basic/say.md)

This Node can be used to send a message to the user on their current channel.

### [Question](basic/question.md)

This Node can be used to ask the user a question. When triggered, the Entry Point will shift to this Node so that the conversation can continue when the user answers, and a new [Input](../../test/interaction-panel/input.md) object is generated. By default, the [Entry Point](../flows/overview.md#entry-points) will remain at this Node until a valid answer is found.

### [Optional Question](basic/optional-question.md)

This Node works similar to the Question Node, except that the Entry Point is optional by default.

### [Send Text](basic/send-text.md)

This Node outputs simple text.

### [Debug Message](basic/debug-message.md)

This Node sends a debug message to the Interaction Panel. Debug messages can help you track the flow of data and diagnose issues by providing real-time information about what's happening during the Flow execution.

### [Code Node](basic/code/overview.md)

This Node enables the execution of custom JavaScript or TypeScript code within the Flow. The editor has full IntelliSense and exposes all Cognigy objects and actions. For better performance, the TypeScript code will be transpiled when the Node is saved. If the transpilation fails, the code will be saved, and an error icon will appear in the top right corner of the Code Node, indicating that there is a potential issue with the code.

## [Logic Nodes](logic/overview.md)

Logic Nodes can be used to execute a certain logic in the Flow. They include classical conditions, as well as specific Flow behavior like waiting for a user input.

### [Add To Context](logic/add-to-context.md)

This Node is used to store information in the Cognigy [Context](../../test/interaction-panel/context.md), so that it can be used throughout the session on subsequent user inputs.

### [Execute Flow](logic/execute-flow.md)

This Node can be used to execute another Flow, meaning that it will run that Flow and return to the initial Flow afterward. This means that the Entry Point will not switch to the new Flow. This operation can be compared to a function call.

### [Go To](logic/go-to.md)

This Node can be used to jump between Flows or between Nodes. If the Go To Node is used to switch to another Flow, the Entry Point will switch to that Flow altogether (until switched back).

### [If](logic/if.md)

This Node evaluates a statement, and depending on the outcome, the Then or Else child Nodes are triggered.
Conditions can be created using [CognigyScript](../cognigy-script.md) or using the built-in [Token System](../tokens.md).

### [Interval](logic/interval.md)

The Interval Node can be used to only allow certain Nodes to be executed if a given time (interval) has passed. It is configurable with a number of milliseconds.

### [Lookup](logic/lookup.md)

The Lookup Node acts as a switch between different options. A certain type of input (for example, Intents) is evaluated, and based on the value, a certain branch is executed.

### [Once](logic/once.md)

Everything below a Once Node will be executed only once per session.
This is useful
in case the AI Agent needs to greet the user or in case a database request needs to happen only once per session.

### [Remove From Context](logic/remove-from-context.md)

This Node is used to remove information from the Cognigy [Context](../../test/interaction-panel/context.md).

### [Reset State](logic/reset-state.md)

With the Reset State Node, the Flow's [State](../../test/interaction-panel/state.md) can be reset.

### [Set State](logic/set-state.md)

With the Set State Node, the Flow's [State](../../test/interaction-panel/state.md) can be changed.

### [Sleep](logic/sleep.md)

The Sleep Node pauses execution for a number of milliseconds. This Node used to be known as the Pause Node.

### [Stop and Return](logic/stop-and-return.md)

This Node stops Flow execution and returns to the Entry Point at the start Node.

### [Switch Locale](logic/switch-locale.md)

This Node is used to change to an alternate [Locale](../translation-and-localization/localization.md) during a conversation. It is common to use this Node after language detection or based on the region of the user to execute a change to the conversational language or structure based on an assessment of the user's region or spoken language.

### [Think](logic/think.md)

The Think Node can be used to deliberately inject a text into the Start Node of the Flow. This is useful in case it is necessary to start the Flow again, with a specific payload. The payload could, for example, correspond to a certain Intent.

### [Wait for Input](logic/wait-for-input.md)

The Wait for Input Node waits for user input and continues Flow execution.

## [Voice Nodes](voice/overview.md)

Voice Nodes are for developing voice AI Agents.

### [Generic Voice Nodes](voice/generic/overview.md)

The Generic Voice Nodes are a set of Nodes for creating voice Flows that are not specific to one Endpoint. These Voice Nodes are compatible with both voice integrations: AudioCodes and Voice Gateway.

#### [Barge In - Config](voice/generic/barge-in-config.md)

This Node is a session config that enables the interruption of the voice AI Agent.

When executed, the settings will apply for the remainder of the session.

#### [Continuous ASR - Config](voice/generic/continuous-asr-config.md)

Continuous ASR enables the system to concatenate multiple STT recognitions of the user
and then send them as a single textual message to the voice AI Agent.

#### [DTMF Collect - Config](voice/generic/dtmf-collect-config.md)

Enables capturing of DTMF signals by the voice AI Agent during the entire call session.

When executed, the settings will apply for the remainder of the session.

#### [Hang Up](voice/generic/hang-up.md)

This Node instructs the system to end the call.

#### [Mute Speech Input](voice/generic/mute-speech-input.md)

This Node controls when speech user inputs can be collected in your Flow.

#### [Play URL](voice/generic/play-url.md)

The Play URL Node lets you stream a sound file into the call with the ability to loop it. MP3 and WAV encoded files are supported.

#### [Send Metadata](voice/generic/send-metadata.md)

The Send Metadata Node sends metadata via SIP INFO messages to the connected SIP trunk.

#### [Session Speech Parameters - Config](voice/generic/session-speech-parameters-config.md)

This Node enables the change of speech parameters during the Flow.

#### [Transfer](voice/generic/transfer.md)

This Node lets pass an active call to a tel or sip target.

#### [User Input Timeout - Config](voice/generic/user-input-timeout-config.md)

This Node defines the action that the AI Agent should take if it does not receive any input from the user within a certain timeframe.

### [Voice Gateway Nodes](voice/voice-gateway/overview.md)

Voice Gateway Nodes help you build a voice AI Agent using [Voice Gateway configuration](../../../voice-gateway/overview.md).

#### [Call Recording](voice/voice-gateway/call-recording.md)

This Node initiates or terminates the recording of a conversation.

#### [DTMF](voice/voice-gateway/dtmf.md)

This Node plays the DTMF digits to the caller.

#### [Hang Up](voice/voice-gateway/hangup.md)

This Node instructs Voice Gateway to end the call.

#### [Mute Speech Input](voice/voice-gateway/mute-speech-input.md)

This Node controls when speech and DTMF user inputs can be collected in your Flow.

#### [Parameter Details](voice/voice-gateway/parameter-details.md)

Cognigy Voice Gateway has many configuration settings that are controlled directly from within your Flow. These settings can be applied individually to the scopes:

#### [Play](voice/voice-gateway/play.md)

This Node lets you stream a sound file into the call with the ability to loop it. MP3 and WAV encoded files are supported.

#### [Send Metadata](voice/voice-gateway/send-metadata.md)

This Node sends metadata via SIP INFO messages to the connected SIP trunk.

#### [Set Session Config](voice/voice-gateway/set-session-config.md)

This Node configures the Voice Gateway session. All parameters set here are valid for the remainder of the session unless overwritten, either directly or by activity parameters.

#### [Transfer](voice/voice-gateway/transfer.md)

This Node lets you transfer an ongoing call to a Tel or SIP target.

### [AudioCodes](voice/audiocodes/overview.md)

AudioCodes Nodes help you build a voice AI Agent using [AudioCodes configuration](https://www.cognigy.com/products/voice-gateway).

#### [Call Recording](voice/audiocodes/call-recording.md)

This Node controls the voice recording capabilities of the conversation.

#### [Hang Up](voice/audiocodes/hangup.md)

This Node instructs AudioCodes to end the call.

#### [Play URL](voice/audiocodes/play-url.md)

This Node lets you retrieve a WAV file from a URL location and play it back to the user.

#### [Send Message](voice/audiocodes/send-message.md)

This Node sends a text (optionally with SSML) to AudioCodes, which then turns this text into speech (TTS) and outputs it to the caller.

#### [Send Metadata](voice/audiocodes/send-meta-data.md)

This Node sends metadata via SIP INFO messages to the connected SIP trunk.

#### [Set Session Parameters](voice/audiocodes/set-session-params.md)

This Node configures the AudioCodes Session. All parameters set within this Node are valid for the remainder of the session unless overwritten, either directly or by activity parameters.

#### [Transfer](voice/audiocodes/transfer-vg.md)

This Node enables the forwarding of an active call to a Tel or SIP target.

## [Analytics Nodes](analytics/overview.md)

Analytics Nodes let you take advantage of Cognigy AI's comprehensive marketing functionality. Use and update [Contact Profiles](../../analyze/contact-profiles.md) within your Flow for personalized, adaptive Flows that connect with your audience.

### [Activate Profile](analytics/activate-profile.md)

This Node can be used to activate a [Contact Profile](../../analyze/contact-profiles.md) in case it has been deactivated. The Node is not configurable.

### [Add Memory](analytics/add-memory.md)

This Node stores memories within the Contact Profile. A memory entry can be any text, such as user input and other relevant details.

### [Blind Mode](analytics/blind-mode.md)

The Blind Mode disables all (or selected) logging. The Node can be used whenever the AI Agent handles sensitive data that should be excluded from the logs.

- Mask Login: Outputs XXXX in the output logs of the AI Agent.
- Mask Analytics: Outputs XXXX in the analytics (including Contact Profile conversations).
- Disable Conversations: Disables output analytics altogether.

### [Complete Task](analytics/complete-task.md)

This Node can be used to add a custom Goal to the [Contact Profile](../../analyze/contact-profiles.md).
Custom Tasks are KPIs that can be dynamically configured
and that show up in the output analytics as well as the [Contact Profile](../../analyze/contact-profiles.md) overview.

### [Deactivate Profile](analytics/deactivate-profile.md)

This Node can be used to deactivate the [Contact Profile](../../analyze/contact-profiles.md).

### [Delete Profile](analytics/delete-profile.md)

This Node deletes the currently active [Contact Profile](../../analyze/contact-profiles.md).

### [Merge Profile](analytics/merge-profile.md)

This Node can be used to merge the current session to an existing [Contact Profile](../../analyze/contact-profiles.md). The Node can be configured with an identifier that can be used as a user ID.

### [Overwrite Analytics](analytics/overwrite-analytics.md)

This Node provides the ability to selectively overwrite the Analytics data that will be stored in [Insights Analytics](../../../insights/overview.md).

### [Request Rating](analytics/request-rating.md)

This Node requests a rating. If the Node is triggered in your webchat conversation, you will see the rating dialog.

### [Track Goal](analytics/track-goal.md)

This Node lets you monitor the progress of a specific goal within a Flow and can be used only with Goals.

### [Set Rating](analytics/set-rating.md)

This Node extends the analytical capabilities of Cognigy.AI together with the [Insights](../../../insights/overview.md) application.

### [Update Profile](analytics/update-profile.md)

This Node is commonly used, as it helps update [Contact Profile](../../analyze/contact-profiles.md) information. It is configurable with a drop-down of all the [Contact Profile Schema](../../analyze/contact-profiles.md) attributes.

## [Service Nodes](service/overview.md)

Service Nodes can be used to trigger external services, like databases and email servers. Cognigy.AI ships with a number of built-in services. Additional services can be added through [Extensions](../extensions.md).

### [Add Transcript Steps](service/add-transcript-steps.md)

This Node lets you add a step for one of the conversation actors to simulate an input or output.

### [Check Agent Availability](service/check-agent-availability.md)

This Node checks the availability of agents with specific skills.
With this Node, you can manage your Flow,
for example, send notifications to the user that the agent is unavailable at the moment,
or suggest an alternative response.

### [Close Handover](service/close-handover.md)

This Node closes the handover conversation in the handover provider, such as Live Agent. If turned off, the user will only be returned to the AI Agent.

### [Get Transcript](service/get-transcript.md)

This Node lets you receive a real-time conversation transcript and store the result in the Input or Context object.

### [GPT Conversation](service/gpt-conversation.md)

The GPT Conversation Node processes and comprehends natural language input from users
and utilizes this input to generate relevant and contextual appropriate responses.
The Node configuration includes defining a persona, knowledge, and task for the agent,
allowing it to generate AI-based responses to user inputs and trigger actions.
The GPT Conversation Node can support the entire conversation using Large Language Models (LLMs).

### [Handover to Agent](service/handover-to-agent.md)

This Node enables AI Agents to pass on conversations to human agents in contact centers.

### [HTTP Request](service/http-request.md)

This Node is a very convenient Node that can execute HTTP requests to other interfaces (APIs). It can be configured with typical REST operations (GET, POST, PATCH, PUT, DELETE) and has configurable JSON or Text payloads.

### [LLM Prompt](service/llm-prompt.md)

The LLM Prompt Node lets you use prompts with different LLM models to generate text or structured content.

### [MongoDB Nodes](service/mongo-db.md)

Cognigy.AI has a built-in MongoDB connector that can be used directly within the Flow.

### [Microsoft SQL Nodes](service/ms-sql.md)

Cognigy.AI has a built-in Microsoft SQL connector that can be used directly within the Flow.

### [Set Handover Inactivity](service/set-handover-inactivity.md)

This Node detects and handles user inactivity, freeing up capacity for the human agent team. To configure this Node, specify the time in minutes during which the user can be inactive.

### [Trigger Function](service/trigger-function.md)

This Node is used to execute a [Function](../functions.md).

## [AI Nodes](ai/overview.md)

AI Nodes are a collection of Nodes
that are related to the Cognigy.AI [NLU](../../empower/nlu/overview.md) and [Agentic AI](../../empower/agentic-ai/overview.md).
It features a range of different Nodes.

### [Add Lexicon Keyphrase](ai/add-lexicon-keyphrase.md)

This Node can be used to dynamically create a [Lexicons](../../empower/nlu/slots-and-lexicons/lexicons.md) Keyphrase entry, either based on hardcoded or dynamic data.

### [AI Agent](ai/ai-agent.md)

This Node lets you assign an AI Agent to a job, provide instructions and tool actions for that job, and configure access to the knowledge the AI Agent can use when holding a conversation with a user.

### [AI Agent Handover](ai/ai-agent-handover.md)

This Node is used to transfer the conversation to another AI Agent Node or Flow, which will be triggered and executed as soon as this Node is activated.

### [Clean Text](ai/clean-text.md)

This Node enables a user to clean a provided text using the Text Cleaner class, which exposes various functions for cleaning text.

### [Copy Slots to Context](ai/copy-slots-to-context.md)

This Node can be used to copy Slots that were detected and published in the [Input](../../test/interaction-panel/input.md) object, to the conversation [Context](../../test/interaction-panel/context.md).

### [Disable Slot Fillers](ai/disable-slot-fillers.md)

This Node lets you disable any active Slot Fillers. For more information on Slot Fillers, refer to [NLU (Natural Language Understanding)](../../empower/nlu/overview.md).

### [Enable Slot Fillers](ai/enable-slot-fillers.md)

This Node lets you enable a particular Slot Filler. Use the drop-down menu to select the Slot Filler that you want to enable. For more information on Slot Fillers, refer to [NLU (Natural Language Understanding](../../empower/nlu/overview.md).

### [Execute Cognigy NLU](ai/execute-cognigy-nlu.md)

This Node can be used to explicitly execute [Cognigy NLU](../../empower/nlu/overview.md) at a certain point in the Flow. NLU execution happens automatically at the start of the Flow and with each new user input.

### [Fuzzy Search](ai/fuzzy-search.md)

This Node enables a Flow to search through a list (string array) of source data by providing a search pattern. It will return the best possible matches, based on a set of parameters.

### [Match Pattern](ai/match-pattern.md)

This Node enables a user to find patterns in text and expose them in the [Input Object](../../test/interaction-panel/input.md).

### [Regex Slot Filler](ai/regex-slot-filler.md)

This Node can be used to create a Slot based on a regex pattern. When the pattern is detected, a Slot will be published to the [Input](../../test/interaction-panel/input.md) object.

### [Resolve Tool Action](ai/resolve-tool-action.md)

This Node sends an answer as the response to a tool call to the AI Agent after completing a [tool action](ai/ai-agent.md#ai-agent-tool).

## [Data Nodes](data/overview.md)

Data Nodes are designed to manage, manipulate, process, or store data within a system.

### [Datepicker](data/datepicker.md)

This Node can be used to render a date selection widget in certain channels. It has an extensive list of configurable options.

### [Send SMTP Email](data/send-smtp-email.md)

This Node can be used to send an email message directly from within the Flow. IT requires a [Connection](../connections.md) in order to work.

### [Email Notification](data/email-notification.md)

This Node allows you to send quick and easy emails during sessions or for in-house communications without requiring any provider settings to be set up in the UI. Instead, you can configure the necessary provider settings in the environment variables and secrets. Only one provider can be set up at a time.

## [AI Copilot Nodes](ai-copilot/overview.md)

Nodes for creating the AI Copilot workspace.

### [Copilot: Adaptive Card Tile](ai-copilot/set-adaptive-card-tile.md)

This Node allows you to create and display adaptive cards in your AI Copilot Workspace. Adaptive cards can display rich content and interactive elements, such as images, text, buttons, and forms.

### [Copilot: HTML Tile](ai-copilot/set-html-tile.md)

This Node allows you to display customized HTML content in the AI Copilot Workspace. You can create custom layouts and designs for presenting information to a human agent. HTML content can include text, images, videos, and links. The Set HTML Tile Node is useful for displaying complex information.

### [Copilot: IFrame Tile](ai-copilot/set-iframe-tile.md)

This Node allows you to embed external websites directly into the AI Copilot Workspace. To do that, specify a URL for the external content you want to display. You can present web pages, forms, or applications within the AI Copilot workspace without redirecting human agents to an external site.

### [Copilot: Identity Tile](ai-copilot/identity-tile.md)

This Node is designed to display and process customer-specific information directly within the widget of your AI Copilot Workspace, enhancing the context and usability of the identity-related data.

### [Copilot: Knowledge Tile](ai-copilot/knowledge-tile.md)

This Node is designed to provide potential answers to human agents regarding customer questions.

### [Copilot: Next Action Tile](ai-copilot/next-action-tile.md)

This Node is designed
to determine the appropriate next step or action in a conversation or process based on the user's input or the current context.

#### [Copilot: Send Data](ai-copilot/send-data.md)

This Node lets you update the content within AI Copilot widgets (IFrame or HTML) without reloading the entire widget, making it easier to modify and refresh dynamic content in real time.

### [Copilot: Sentiment Tile](ai-copilot/sentiment-tile.md)

This Node performs sentiment analysis on the most recent input and provides insights into the emotional tone
(positive, negative, or neutral) of the last user inputs.

### [Copilot: Set Grid](ai-copilot/set-grid.md)

This Node updates the existing AI Copilot workspace grid in the AI Copilot Configuration that you created via an [API POST request](https://api-dev.cognigy.ai/openapi#post-/v2.0/agentassistconfigs). Additionally, you can use this Node to preview the grid before making this request.

### [Copilot: Transcript Tile](ai-copilot/transcript-tile.md)

This Node captures the most recent customer response and displays it on a designated Widget within the AI Copilot Workspace.

## [xApp Nodes](xApp/overview.md)

Nodes for creating xApps.

### [xApp: Init Session](xApp/init-xApp-session.md)

This Node initializes a new xApp session.

### [xApp: Get Session PIN](xApp/get-xApp-session-PIN.md)

This Node generates a new xApp session PIN. You can access it using the [xApp: Get Session PIN](../../../xApps/tokens.md#xapp-session-pin) token or via `input.apps.session.pin`.

### [xApp: Show Adaptive Card](xApp/set-AdaptiveCard-xApp-state.md)

This Node builds an xApp Page by providing an Adaptive Card in JSON format.

### [xApp: Show HTML](xApp/set-html-xApp-state.md)

This Node builds an xApp Page by providing custom HTML code.

## [Other Nodes](other-nodes/overview.md)

Nodes that did not fit into any category above.

### [Knowledge Search](other-nodes/knowledge-search.md)

This Node searches and retrieves content from data that was previously uploaded to the Knowledge AI solution.

### [LLM Entity Extract](other-nodes/llm-entity-extract.md)

This Node uses a chosen LLM to extract entities, such as product codes, booking codes, and customer IDs, from a given string.

### [Log Message](other-nodes/log-message.md)

The Log Message Node writes a message into the [Project Logs](../../test/logs.md).

### [Search Extract Output](other-nodes/search-extract-output.md)

This Node searches through data within the Knowledge AI solution, extracts a relevant answer via a Generative AI model, and creates an output.

### [Set Translation](other-nodes/set-translation.md)

This Node enables the override of real-time translation settings for the ongoing session. Translation settings are defined in the [Project Settings](../../administer/access/project-settings.md) page.
