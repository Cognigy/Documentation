## Description
<div class="divider"></div>

This Node controls when speech user inputs can be collected in your Flow.
It prevents speech interruptions in specific cases, such as [xApp Flows](https://docs.cognigy.com/ai/build/node-reference/xApp/overview/), allowing for a smoother conversation experience.
By enabling or disabling speech gathering as needed,
you can maintain better control and ensure a seamless workflow in your application.

## Settings

!!! warning
    Do not turn off a speech user input throughout the call to receive additional messages from the user, especially when the AI Agent needs to send multiple messages with time gaps in between.  

| Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mute Speech Input | Toggle | Disables speech input recognition for the current call. By default, the setting is deactivated, allowing the Nodes below the Mute Speech Input Node to accept speech inputs. <br><br> When this setting is activated, the Nodes below the Mute Speech Input Node will not accept speech inputs or digits as the answer.  It affects all speech inputs made through the following Nodes:<br> - Nodes with Set Activity Parameters. <br> - Say and Play Nodes with enabled barge-in can no longer be interrupted.<br> - Question and Optional Question Nodes. |

## Example

In the following example, the Mute Node allows you to control when speech input is accepted or disabled within the Flow:

1. Say Node: `Hello, you will receive an xApp`.
2. xApp: Init Session Node.
3. Mute Speech Input (enabled).
4. Question Node: `Please rate your experience with the xApp on a scale of 1 to 5`.<br>When the Mute Node STT is enabled, the question node will not accept speech inputs or digits as the answer. The user must provide the rating through other means, such as selecting a number using buttons or typing the response. This process ensures that the speech gathering is temporarily turned off during the rating question to avoid unintended interference from background speech.
5. Mute Node STT (disabled). <br> After the rating question, the Mute Node STT is disabled, allowing the subsequent Nodes to accept speech inputs normally.