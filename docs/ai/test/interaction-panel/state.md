---
 title: "State" 
 slug: "state" 
 description: "States are a set of limitations you can place on a Cognigy.AI Flow that restrict the Intents the AI Agent can recognize."
 hidden: false 
 tags:
    - states
    - flow control
    - flow execution
    - conditions
---
# State

_States_ are a set of limitations you can apply to a [Flow](../../build/flows/overview.md). They restrict the Intents an AI Agent can recognize. States help control the Flow execution. You can use States to define which Intents the AI Agent should recognize or not at specific stages. You can switch between States using the [Set State](../../build/node-reference/logic/set-state.md) and [Reset State](../../build/node-reference/logic/reset-state.md) Nodes.

States are stored in the [Input object](../../build/ai-agent-memory/input.md) and you can use them as an [Intent condition](../../empower/nlu/intents/conditions.md) to control the Flow execution.

States include the following lists:

- **Whitelist** — Intents that the AI Agent can detect.
- **Blacklist** — Intents that the AI Agent can't detect.

## Working with States

=== "GUI"
    You can create, edit, and delete States, as well as set the default State in the **NLU** tab in the [Flow editor](../../build/flows/editor.md).

=== "API"
    You can create, edit, and delete States, as well as set the default State using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--FlowStates-v2.0).

## Examples

For the following examples, consider you have defined three States:

- `start`
- `ordering`
- `finished`

### Example 1

You can set the `start` State as default and allow recognition of the `order` Intent only for this State for sentences like `I want to order a pizza`. Then, you can use a Set State Node after the `order` Intent is recognized to switch to the `ordering` State. This approach can prevent the user from placing different orders before the first order is finished.

### Example 2

You can use the `state` property stored in the Input object to trigger different outputs for the question `When will my order arrive?` according to the State of the Flow execution. For example, in the `start` State, the required information might not be available yet, but in the other States, there might be a time estimate to answer the user question.

## More Information

- [Intents](../../empower/nlu/intents/overview.md)