# Build Your Digital AI Agent in Minutes

In this tutorial, you will learn how to create a simple digital AI Agent from scratch that greets you by name.
Then you will test this agent using built-in Cognigy testing tools.

{! _includes/ai/overview/create-projects.md !}

## Build a Chat Agent

To build a chat agent, follow these steps:

1. In the left-side menu, navigate to **Build > Flows**.
2. Create a new Flow by clicking **+ New Flow** in the upper-right corner.
3. In the **New Flow** window, do the following:<br>
   3.1. Add a unique name, for example, `Getting Started`.<br>
   3.2. Add a relevant description, for example, `Getting Started Guide for chat agent`.<br>
   3.3. Click **Create**.<br>
4. In the Flow editor, create a new Node by clicking **+** and selecting a Question Node from the list.
5. Left-click the Question Node to open the Node editor.
6. In the Question Node editor, set up the following parameters:<br>
   5.1. From the **Question Type** list, select **Text**.<br>
   5.2. In the **Text** field, enter the following sentences: `Hello! What's your name?`<br>
   5.3. Click **Save Node**.<br>
7. Below the Question Node, add a Say Node. 
8. Left-click the Say Node to open the Node editor. 
9. In the Say Node editor, go to the **Text** field.
10. In the **Text** field, enter `Hello` and click ![token](../../_assets/icons/token.svg).
11. From the **Tokens** list, select **Answer**. This token lets reuse the user's answer in the virtual agent's response.
12. Click **Save Node**.

Once your virtual agent is created, you can test it via the Interaction Panel.

## Test your Chat Agent

To test your virtual agent, follow these steps:

1. In the existing Flow, open the Interaction Panel by clicking ![interaction-panel](../../_assets/icons/interaction-panel.svg) **Chat with your Agent** in the upper-right corner of the page. The Interaction panel appears on the right side of the Flow Editor.
2. Initiate a conversation by entering `Hello` in the **Text Message** field and press **Enter**.
3. Answer the virtual agent's question by entering your name. The virtual agent will greet you by your name.

<figure>
  <img class="image-center" src="../../../_assets/ai/overview/getting-started-chat.png" width="100%" />
</figure>

Now you can deploy the agent using the [Webchat v3](../../webchat/getting-started.md#create-an-endpoint) Endpoint, and see how conversations look on the production environment through Demo Webchat.

## What's Next?

- Familiarize yourself with the core concepts of building virtual agents, such as [Projects](../build/projects.md), [Flows](../build/flows.md), [Nodes](../build/nodes/overview.md), and [Cognigy Script](../build/cognigy-script.md).
- Enhance your agent's performance with AI features, such as [NLU](../empower/nlu/overview.md), [LLMs](../empower/llms.md) and [Generative AI](../empower/generative-ai.md), as well as [Knowledge AI](../empower/knowledge-ai/overview.md).
- Explore [test](../test/interaction-panel/overview.md) and [deploy](../deploy/endpoints/overview.md) features.
- Connect your agent to the [contact center](../escalate/handovers.md).










    