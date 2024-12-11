Displays the percentage of messages understood and misunderstood by the system over a selected time span.

A message is considered `understood` if any of the following conditions are met:

- An Intent or Slot is identified.
- It is marked as understood through one of the following Nodes: [Code](https://docs.cognigy.com/ai/build/node-reference/basic/code/analytics-data/), [Overwrite Analytics](https://docs.cognigy.com/ai/build/node-reference/analytics/overwrite-analytics/), [Search Extract Output](https://docs.cognigy.com/ai/build/node-reference/other-nodes/search-extract-output/), or [AI Agent](https://docs.cognigy.com/ai/build/node-reference/ai/ai-agent/).
- The sentence type is `pAnswer`, `nAnswer`, or `Greeting` (if **Confirmation Word logic** is activated).

A message is considered `not understood` if any of the following conditions are met:

- It is marked as `Don't count` or `Null` in the [Overwrite Analytics Node](https://docs.cognigy.com/ai/build/node-reference/analytics/overwrite-analytics/).
- It is sent during an active handover without configuring the [AI Copilot Whisper](https://docs.cognigy.com/live-agent/assistants/ai-copilot-whisper/) Flow.

By clicking ![vertical-ellipsis](https://docs.cognigy.com/_assets/icons/vertical-ellipsis.svg),
you can select the **Go to Intent Trainer**,
which will take you to the application in Cognigy.AI for improving your Flow.