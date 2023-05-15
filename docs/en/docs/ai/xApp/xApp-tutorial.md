---
title: "Tutorial: Creating a Basic xApp"
slug: "tutorial"
hidden: true
---

# Tutorial: Creating a Basic xApp
In this tutorial, we will learn how to create a basic app using Cognigy. The app will collect email addresses from users through a voice channel and display an adaptive card for data entry. We will also implement SMS functionality to send a link to the app via SMS. 

## Prerequisites

- Access to a voice provider, for example, Microsoft Azure Speech Services.
- Twilio API Key.
- Twilio Extension preinstalled.

## Configure a Basic xApp Flow

1. Create a new flow in Cognigy and name it **Basic App Tutorial**.
2. In the Flow editor, add an **xApp: Init Session** Node to initialize the app session.
3. Below the **xApp: Init Session** Node, add an **xApp: Show Adaptive Card** Node.
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
6. Below the **xApp: Init Session** Node, add a **Say** Node.
7. In the Text field, past the following text:
   ```txt
   I received the following email: {{ "{{ input.data._cognigy._app.payload.myEmail }}" }}

   Good bye!
   ```
8. Click **Save Node**.

## Testing the App via the Interaction Panel

1. Open the Interaction panel and enter a message like "Hi" to trigger the flow.
2. In the Interaction panel, check the **Info** tab to locate the app's URL in the input object.
3. Open the URL in a new tab to view the app with the adaptive card.
4. Submit data in the email entry field and observe the behavior, for example `dan@cognigy,com`. Note that the email validation is basic at this stage.

## Configure Voice Channel Support

1. Above the **Say** Node, add a **Question** Node.
2. Set the **Question** type to **xApp** to ensure only data from the app will be accepted as a valid answer.
3. Select the **Text with Buttons** output type to display a button with the app URL.
4. Configure the prompt message to instruct users to enter their email using the app. In the Text field, paste the following text:
   ```txt
   Welcome to the xApp tutorial. Please enter your email in the xApp using the link, which I texted you via SMS
   ```
5. Add the same text to the **Fallback Text** field to instruct users to use the app and provide the URL via SMS.
6. Click **Add button**. Fill in the following fields:
    - **Button Tile** — enter **Open xApp**.
    - **Selection Button Type** — select **URL** from the list.
    - **URL** — select **xApp Session URL**.
    - **URL Target** — select **Open URL in a new tab**.
7. Click **Save**.
8. Click **Save Node**. 
9. Below the **Say** Node, add a **Hang Up** Node at the end of the Flow to terminate the conversation after email confirmation.
10. In the **Reason for hang up** field, specify `Bot ended the call`.
11. Click **Save Node**.

## Test the Flow with Voice Channel

1. Use the Interaction panel's voice call feature to test the flow.
2. Ensure the voice preview settings in the agent's settings are properly configured.
3. Call the specified voice gateway number from your phone.
4. Follow the conversation prompts and observe the flow's behavior.

Note that the voice fallback text will be used instead of buttons.

The conversation should progress only when the user enters data through the app.

## Implement SMS Functionality

1. Below the **xApp: Show Adaptive Card** Node, add an **IF** Node to check if the caller number is available in the input metadata. This step is optional but helps distinguish between different channels in testing scenarios.
2. In the If Node, add the **VG: Caller Number** condition.
3. Click **Save Node**.
4. If the caller number is available, add a **Send SMS** Node using a service like Twilio.
5. In the **Send SMS** Node, fill in the following fields:
    - **Twilio Connection** — specify an API key that you previously get from your Twilio account.
    - **Sender Number** — set the sender number.
    - **Receiver Number** — specify **VG: Caller Number**.
    - **Message Body** — customize the SMS message to include the xApp session URL. 
6. Click **Save Node**.

You have successfully created a basic app and implemented a flow to collect email data through the app.

Test your Flow via the Interaction Panel.
