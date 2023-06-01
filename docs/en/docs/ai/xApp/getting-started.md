---
title: "Getting Started"
slug: "getting-started"
hidden: false
---

# Getting started with xApps

In this tutorial, you will learn how to create a basic xApp using Cognigy. The xApp will collect email addresses from users via a voice channel and display an Adaptive Card for data entry. We will also implement SMS functionality to send a link to the xApp via text message. 

This tutorial contains two parts:

- [Basic](#form-data-collection--basic). You will create a basic xApp using xApp Nodes. No credentials are required.
- [Advanced](#form-data-collection--advanced). You will extend the existing Flow through voice channel settings and add an SMS Node. Voice provider credentials are required.

## Form data collection: Basic

In this part of the tutorial, you will learn how to build and test an xApp from scratch and display an Adaptive Card for email entry.

### Configure a Basic xApp Flow

1. Create a new Flow in Cognigy and name it **Basic App Tutorial**.
2. In the Flow editor, add an **xApp: Init Session** Node to initialize the xApp session.
3. Below the **xApp: Init Session** Node, add an **xApp: Show Adaptive Card** Node to update the initialized xApp session with a new Adaptive Card-based xApp page.
4. In the **AdaptiveCard Definition** field, paste the following JSON:

      ```json
       {
           "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
           "type": "AdaptiveCard",
           "version": "1.5",
           "body": [
               {
                   "type": "TextBlock",
                   "text": "Demo xApp form",
                   "weight": "Bolder",
                   "size": "Medium",
                   "wrap": true,
                   "style": "heading"
               },
               {
                   "type": "Input.Text",
                   "id": "myEmail",
                   "label": "Your email",
                   "regex": "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z0-9-]{2,4}$",
                   "isRequired": true,
                   "errorMessage": "Please enter a valid email address",
                   "style": "Email"
               }
           ],
           "actions": [
               {
                   "type": "Action.Submit",
                   "title": "Submit",
                   "style": "positive"
               }
           ]
       }
      ```
   
5. Click **Save Node**. 
6. Below **xApp: Show Adaptive Card** Node, add a **Question** Node. This Node will be used to prompt the user, via the primary channel, to provide data through the xApp. It will then wait for the xApp's submit input before proceeding with further Flow execution.
7. Set the **Question** type to **xApp** to ensure only data from the xApp will be accepted as a valid answer. 
8. Select the **Text with Buttons** output type to display a button with the xApp URL. 
9. Configure the prompt message to instruct users to enter their email using the xApp. In the **Text** field, paste the following text:

    ```txt
    Welcome to the xApp tutorial. Please enter your email in the xApp using the link which I texted you via SMS
    ```
   
10. Click **Add button**. Fill in the following fields:
    - **Button Title** — enter **Open xApp**.
    - **Selection Button Type** — select **URL** from the list.
    - **URL** — click ![token](../../assets/icons/token.svg) and select the **xApp Session URL** Token.
    - **URL Target** — select **Open URL in a new tab**.
11. If a user types anything in the chat, inform them that they need to use the xApp URL to enter their email. To do that, go to the **Reprompt Options** section and paste the following reprompt message:
    
    ```txt
    I can't continue before you enter the email in the xApp
    ```
    
12. Click **Save**.
13. Click **Save Node**.
14. Below the **Question** Node, add a **Say** Node.
15. In the Text field, paste the following text:
    ```txt
    I received the following email: {{ "{{ input.data._cognigy._app.payload.myEmail }}" }}

    Goodbye!
    ```
16. Click **Save Node**.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/getting-started-basic.png" width="100%">
</figure>

Now you can test your xApp via the Interaction Panel.

### Test the App via the Interaction Panel

1. Open the Interaction Panel and enter a message like "Hi" to trigger the Flow.
2. In the Interaction Panel, click "Open xApp" to access the xApp session. By the way, you can also check the **Info** tab to see the xApp's URL in the `input.apps.url` input object.
   <figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/demo-xApp-form.png" width="80%">
   </figure>
3. Open the URL in a new tab to view the xApp with the Adaptive Card.
4. Submit data in the email entry field and observe the behavior, for example, `dan@cognigy.com`. Note that the email validation is basic at this stage.
5. Check the input result via the Interaction Panel.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/getting-started-basic-interaction-panel-test.png" width="100%">
</figure>

## Form data collection: Advanced

In this part of the tutorial, you will learn how to collect email addresses from users via a voice channel and implement SMS functionality to send a link to the xApp via SMS.

### Prerequisites

- Access to a [voice provider](../../ai/tools/voice-preview.md), for example, Microsoft Azure Speech Services.
- [Twilio API Key](https://www.twilio.com/docs/glossary/what-is-an-api-key#how-can-i-create-api-keys).
- Twilio Extension preinstalled from [Cognigy Marketplace](../../ai/resources/manage/extensions.md).
- [Voice Gateway Endpoint](../endpoints/cognigy-vg.md) configured in Cognigy.

### Configure Voice Channel Support

1. Go to the **Question** Node.
2. Copy and paste the text from the **Text with Buttons** setting to the **Fallback Text**, as voice channel does not support the **Text with Buttons** setting:
   ```txt
   Welcome to the xApp tutorial. Please enter your email in the xApp using the link which I texted you via SMS
   ```
3. Click **Save Node**. 
4. Below the **Say** Node, add a **Hang Up** Node at the end of the Flow to terminate the conversation after email confirmation.
5. In the **Reason for hang up** field, specify `Bot ended the call`.
6. Click **Save Node**.

### Implement SMS Functionality

1. Below the **xApp: Show Adaptive Card** Node, add an **IF** Node to check if the caller number is available in the input metadata. This step is optional but helps distinguish between different channels in testing scenarios.
2. In the If Node, add the **VG: Caller Number** condition.
3. Click **Save Node**.
4. If the caller number is available, add a **Send SMS** Node using a service like Twilio.
5. In the **Send SMS** Node, fill in the following fields:
    - **Twilio Connection** — specify an API key that you previously got from your Twilio account.
    - **Sender Number** — set the sender number.
    - **Receiver Number** — specify the **VG: Caller Number** condition.
    - **Message Body** — customize the SMS message to include the xApp session URL. 
6. Click **Save Node**.

You have successfully created a basic xApp and implemented a Flow to collect email data through the xApp.

Test your Flow via the Interaction Panel.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/getting-started-advanced-tutorial.png" width="100%">
</figure>

## Test the Flow with a Voice Channel

1. Use the Interaction Panel's voice call feature to test the Flow. Ensure the voice preview settings in the agent's settings are properly configured.
2. Call the specified voice gateway number from your phone.
3. Follow the conversation prompts and observe the Flow's behavior.

Note that the voice fallback text will be used instead of buttons.

The conversation should progress only when the user enters data through the xApp.

## More information

- [Twilio SMS API](https://www.twilio.com/docs/sms/api#sms-api-authentication)
- [xApp Tutorials](tutorials.md)
- [xApp Nodes](../flow-nodes/xApp/overview.md)