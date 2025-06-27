---
title: "Chat"
slug: "chat"
description: "The Interaction Panel's chat mode allows you to test, debug, and improve your AI Agent."
hidden: false
tags:
    - debug mode
    - nlu analysis
    - intent detection
    - flow execution
    - debug messages
---

# Chat

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../../release-notes/4.84.md)

With _Chat_ mode, you can chat with your AI Agent to test, [debug](#debug-mode), and improve it.

## How to Use Chat Mode

To open chat mode, click the ![chat](../../../_assets/icons/chat-interaction-panel.svg) tab in the [Interaction Panel](overview.md). Chat mode works as a common chat interface that simulates your [Flows](../../build/flows/overview.md) based on the [Interaction Panel settings](overview.md). You can also click ![record-audio](../../../_assets/icons/record-audio.svg) to activate your device's microphone and record voice input.

Additionally, you can use the [debug mode](#debug-mode) to analyze the [natural language understanding](../../empower/nlu/overview.md) (NLU) results, Flow transitions, and specific Node outputs.

### Debug Mode

Debug mode displays more information about the Flow execution than just user and AI Agent messages for better understanding of the conversation. Debug mode is activated by default. With this mode, you can check:

- Triggered [Intents](../../empower/nlu/intents/overview.md) and their [scores](../../empower/nlu/intents/intent-analyzer.md)
- Triggered [Yes/No Intents](../../empower/nlu/intents/yes-no-intents.md) and their [scores](../../empower/nlu/intents/intent-analyzer.md)
- Matched [Slots](../../empower/nlu/slots/overview.md)
- Found [Lexicon Keyphrases](../../empower/nlu/slots/user-defined/lexicon.md)
- [State](./state.md) changes
- Flow Transitions, for example, when executing a [Go To Node](../../build/node-reference/logic/go-to.md), an [Execute Flow Node](../../build/node-reference/logic/execute-flow.md), or triggering an [Attached Flow](../../empower/nlu/attachments.md)
- Node-specific output, for example, from an [HTTP Request Node](../../build/node-reference/service/http-request.md)

Some Nodes have settings that let you further configure their debug mode output. You can turn off node-specific outputs selectively in the [Interaction Panel settings](overview.md#configure-the-interaction-panel).

You can explicitly trigger debug messages either using the [Debug Message Node](../../build/node-reference/basic/debug-message.md) or [debug actions](../../build/node-reference/basic/code/actions.md#actions) in the Code Node.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/interaction-panel/interaction-panel-chat-tab-debug-mode.png" width="60%" />
</figure>

## More Information

- [Interaction Panel](overview.md)
- [Intents](../../empower/nlu/intents/overview.md)
- [Slots](../../empower/nlu/slots/overview.md)
- [Lexicons](../../empower/nlu/slots/user-defined/lexicon.md)
- [State](state.md)
