---
title: "Voice"
slug: "quickstart-guide-for-voice-ai-agent"
description: "Build Your Voice AI Agent in Minutes: In this tutorial, you will learn how to create a voice agent that uses dial logic. Dial logic lets users select options by pressing the corresponding numbers on a dial pad. This way, the voice agent can guide users through predefined paths based on their choices."
hidden: false
---

# Guide for Voice AI Agents

In this tutorial, you will learn how to create a voice agent that uses dial logic. Dial logic lets users select options by pressing the corresponding numbers on a dial pad. This way, the voice agent can guide users through predefined paths based on their choices.

## Prerequisites

- You need to have access to a Cognigy.AI account.
- One of the following speech provider credentials is required for testing a voice agent: Microsoft Azure Speech Services, Google Speech Services, or Amazon Polly.

## Log in to Cognigy.AI

You can login with your Cognigy.AI credentials or, optionally, with single sign-on (SSO), if you have [set up login with SSO](../../ai/installation/single-sign-on-saml2.md). If you have [enforced login with SSO](../../ai/installation/single-sign-on-saml2.md#enforce-login-with-sso), you can only log in with SSO.

### Log in with Credentials

{! _includes/ai/overview/log-in-with-credentials.md !}

### Log in with SSO

{! _includes/ai/overview/log-in-with-sso.md !}

{! _includes/ai/overview/create-projects.md !}

## Add Speech Provider Credentials

To add credentials for a speech provider, follow these steps:

{! _includes/ai/voice-providers.md !}

After adding credentials for the speech provider, you can create your first voice agent.

## Build a Voice AI Agent

To build a voice AI Agent, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. Create a new Flow by clicking **+ New Flow** in the upper-right corner.
3. In the **New Flow** window, do the following:<br>
    1. Add a unique name, for example, `Getting Started`.<br>
    2. Add a relevant description, for example, `Getting Started Guide for voice agent`.<br>
    3. Click **Create**.<br>
4. In the Flow editor, click **+** and select **Extensions > VG**.
5. Create a new Node by selecting **Set Session Config** from the list. The Node appears in the Flow editor.
6. Left-click the **Set Session Config** Node to open the Node editor.
7. In the Node editor, go to the **DTMF** section.
8. In the DTMF section, activate the **Capture DTMF Signals** setting and remove `#` from the **DTMF Submit Digit** field.
9. Click **Save** Node.
10. Below the Set Session Config Node, add a Question Node.<br>
11. In the Question Node editor, configure the following settings:<br>
    1. From the **Question Type** list, select **Number**.<br>
    2. From the **Output Type** list, select **Text**.<br>
    3. In the **Text** field, enter the following sentences:`Welcome to our customer service line. To learn about payment options, press 1. To contact technical support, press 2.`<br>
    4. Click **Save Node**.<br>
12. Below the Question Node, add a Lookup Node.
13. In the Lookup Node editor, select the **Text** type and click **Save Node**.
14. Click the **Case** Node. In the **Value** field, specify `1`, then click **Save Node**.
15. Below the **Case** Node, add a Say Node. 
16. In the Say Node editor, go to the Text field and in specify the following sentences: `We accept the following payment methods:Credit Card (Visa, Mastercard, American Express), PayPal for secure online payments, or Bank Transfer for direct transfers from your bank account. Thank you for contacting us! Have a great day! Goodbye.`
17. Click **Save Node**.
18. Click the second **Case** Node. In the **Value** field, specify `2`. 
19. Below the second **Case** Node, add a Say Node.
20. In the Say Node editor, go to the Text field and in specify the following sentences: `Apologies, all support members are busy. Try to contact us later. Thank you for your patience.`
21. Click **Save Node**.
22. At the end of the Flow, add a Hang Up Node.

Once the voice agent is created, you can test it using the Interaction Panel.

## Test your Voice AI Agent

To test your voice AI Agent, follow these steps:

1. In the existing Flow, open the Interaction Panel by clicking ![interaction-panel](../../_assets/icons/interaction-panel.svg) **Chat with your Agent** in the upper-right corner of the page. The Interaction panel appears on the right side of the Flow Editor.
2. Initiate a call by clicking ![phone](../../_assets/icons/phone.svg) **> Start Call** at the bottom of the Interaction Panel. 
3. Listen to the message from the voice agent and then select either number 1 or 2 on the dial pad ![dialpad](../../_assets/icons/dialpad.svg) located in the bottom-right corner of the Interaction Panel.
4. The voice agent will respond with a voice message according to the number you selected, and then finish the conversation. If you want to listen to a specific voice output again, hover your cursor over the message in the Interaction Panel and click **Voice Preview**.

<figure>
  <img class="image-center" src="../../../_assets/ai/overview/getting-started-voice.png" width="100%" />
</figure>

To deploy your Flow in production, you will need to create a Voice Gateway Endpoint and set up a SIP Trunk provider.
For these steps, refer to the [Voice Gateway](../../voice-gateway/overview.md) documentation.

## What's Next?

- Familiarize yourself with the core concepts of building AI Agents, such as [Projects](../build/projects.md), [Flows](../build/flows/overview.md), [Nodes](../build/nodes/overview.md), and [Cognigy Script](../build/cognigyscript.md).
- Enhance your agent's performance with AI features, such as [NLU](../empower/nlu/overview.md), [LLMs](../empower/llms/overview.md) and [Generative AI](../empower/generative-ai.md), as well as [Knowledge AI](../empower/knowledge-ai/overview.md).
- Explore [test](../test/interaction-panel/overview.md) and [deploy](../deploy/endpoints/overview.md) features.
- Connect your agent to the [contact center](../escalate/handovers.md).