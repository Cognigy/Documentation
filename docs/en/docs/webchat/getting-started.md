---
title: "Getting Started"
slug: "getting-started"
description: "In the Getting Started Cognigy Webchat v3 tutorial, you will create a virtual agent from scratch, build a conversation using Basic Nodes, deploy this agent using Webchat v3, and test the Flow in Demo Webchat mode."
hidden: false
---

# Getting Started

In this tutorial, you will create a virtual agent from scratch, build a conversation using Basic Nodes, deploy this agent using Webchat v3, and test the Flow in Demo Webchat mode.

## Create an Agent

Create a project that involves building a virtual agent:

1. Open the Cognigy.AI interface.
2. In the upper-left corner, click **+ Create Agent**.
3. On the **Basic settings for your Virtual Agent** page, specify a name for your agent in the **Virtual Agent Name** field, for example, `AI Agent`.
4. Click **Create Empty Agent**.

Once the project creation is complete, you can proceed with building the virtual agent.

## Build a Flow

To build a virtual agent, follow these steps:

1. In the left-side **Agent** menu, navigate to **Build > Flows**.
2. Create a new Flow by clicking **+ New Flow** in the upper-right corner.
3. In the **New Flow** window, do the following:
   3.1. Add a unique name, for example, `Getting Started`.<br>
   3.2. Add a relevant description, for example, `Getting Started Guide for Webchat v3`.<br>
   3.3. Click **Create**.<br>
4. In the Flow editor, create a new Node by clicking **+** and selecting a **Question** Node from the list.
5. In the Question Node editor, set up the following parameters:
   5.1. From the **Question Type** list, select **Text**.<br>
   5.2. In the **Text** field, enter the following sentences: `Hello! Welcome to Cognigy Support. How can I assist you today?`
   5.3. Click **Save Node**.<br>
6. Below the Question Node, add a Say Node.
7. In the Say Node editor, go to the Text field and enter the following sentences: `The Cognigy Headquarters is located in Düsseldorf, Germany. Is there anything else I can help you with?`
8. Click **Save Node**.
9. Below the Say Node, add the second one.
10. In the second Say Node, set up the following parameters:<br>
    10.1. From the **Question Type** list, select **Gallery**.<br>
    10.2. Click **Add Card**.<br>
    10.3. Click an image card.<br>
    10.4. In the **Image URL** field, enter the `https://docs.cognigy.com/webchat/images/europe-office-cognigy.png` URL and click **Done**.<br>
    10.5. In the **Title** field, enter `Düsseldorf-Hafen`.<br>
    10.6. Click **Add**, then **Empty Tile**.<br>
    10.7. In the **Button Title** field, enter `Go to the Map`.<br>
    10.8. From the **Select Button Type** list, choose **URL**.<br>
    10.9. In the **URL** field, enter the `https://maps.app.goo.gl/nWgwUdgaPABkSFZC7` URL and click **Save**.<br>
11. Click **Save Node**.
12. Below the second Say Node, add a **Wait for Input** Node.
13. Below the **Wait for Input** Node, add the third Say Node.
14. In the Say Node editor, go to the Text field and enter the following sentences: `You're welcome! If you have a moment, please rate your experience with our support today in the Chat options.`
15. Click **Save Node**.

Once your virtual agent is created, you can deploy it via the Webchat v3 Endpoint.

## Create an Endpoint

To create a Webchat Endpoint v3, follow these steps:

1. In the left-side **Agent** menu, select **Deploy > Endpoints**.
2. On the **Endpoints** page, click **+ New Endpoint**.
3. In the **New Endpoint** section, do the following:<br>
   3.1. Select the **Webchat (v3)** Endpoint type.<br>
   3.2. Add a unique name.<br>
   3.3. Select a Flow that you created on the [previous step](#build-a-flow).<br>
4. Click **Save**.
5. Customize the Webchat settings within the Endpoint:<br>
   5.1. Go to the Home Screen settings.<br>
   5.2. In the **Change Welcome Text** field, enter the following text: `Welcome Cognigy User! How can we help you?`.<br>
   5.3. In the Conversation Starters section, activate **Enable Conversation Starters** and click **Add**.<br>
   5.4. In the **Title** field, enter `Who are Cognigy?`.<br>
   5.5. From the Type list, select **URL**.<br>
   5.6. In the **URL** field, enter `https://www.cognigy.com/`. <br>
   5.7. Click **Add**.<br>
   5.8. In the **Title** field, enter `Cognigy Blog`.<br>
   5.9. From the Type list, select **URL**.<br>
   5.10. In the **URL** field, enter `https://www.cognigy.com/blog`. <br>
   5.11. Go to the **Chat Options** section.<br>
   5.12. In the Conversation rating, select **Always** from the **Enable Rating Functionality** list.<br>
   5.13. In the **Title** field, enter `I need technical support`.<br>
   5.14. From the Type list, select **Postback Value**.<br>
   5.15. In the **Postback Value** field, enter `technical-support`.<br>
6. Click **Save**.

Once all the webchat settings are configured, proceed to test the virtual agent.

## Test your Virtual Agent

To test your virtual agent via Demo Webchat, follow these steps:

1. In the upper-right corner of the Endpoint Editor settings, select **Open Demo Webchat**. A Home screen of Webchat v3 will be opened. 
2. Click the **I need technical Support** button that triggers the conversation with the virtual agent.
    <figure>
      <img class="image-center" src="{{config.site_url}}webchat/images/getting-started/home-screen.png" width="100%" />
    </figure>
3. Reply to the virtual agent with the following message: `Hi! I'd like to know where the Cognigy Headquarters is located`.
   <figure>
      <img class="image-center" src="{{config.site_url}}webchat/images/getting-started/start-conversation.png" width="100%" />
    </figure>
4. The agent will send you the answer that contains the location and a link to the Map and asking for further assistance. Send the following message as a reply: `No, that's all. Thank you!`
   <figure>
      <img class="image-center" src="{{config.site_url}}webchat/images/getting-started/agent-reply.png" width="100%" />
    </figure>
5. When you send your reply, the virtual agent asks you to provide feedback on the Chat Options page. In the upper-right corner of the page, click ![vertical-ellipsis](../assets/icons/vertical-ellipsis.svg).
   <figure>
      <img class="image-center" src="{{config.site_url}}webchat/images/getting-started/finish-conversation.png" width="100%" />
    </figure>
6. On the Chat Options page, click ![thumbs-up](../assets/icons/thumbs-up.svg) (**thumbs up**) and leave the message `I appreciate the quick response` in the feedback field. Click **Send feedback**.
   <figure>
      <img class="image-center" src="{{config.site_url}}webchat/images/getting-started/feedback-sent.png" width="100%" />
    </figure>
7. After submitting feedback, a notification about the sent message will appear at the top of the window. The user can provide feedback an unlimited number of times. 
 
  <figure>
      <img class="image-center" src="{{config.site_url}}webchat/images/getting-started/feedback-confirmed.png" width="100%" />
  </figure>

You can return to the conversation you started and view previous conversations on the homepage. For navigation, use the button **<** in the upper-left corner of the chat.

## What's Next?

- [Explore the key features of Webchat v3](v3/features.md)
- [Familiarize yourself with the Endpoint settings for customization of Webchat v3](v3/configuration.md)
- [Learn how to deploy the application on your website](v3/embedding.md)