## Description
<div class="divider"></div>

The Mute Node controls when speech user inputs can be collected in your Flow.
It prevents speech interruptions in specific cases, such as [xApp Flows]({{config.site_url}}ai/xApp/overview.md), allowing for a smoother conversation experience.
By enabling or disabling speech gathering as needed,
you can maintain better control and ensure a seamless workflow in your application.

## Settings

!!! warning
    Speech user input should not be disabled for the entire call duration to allow receiving additional messages from the user. It is particularly important when the virtual needs to send multiple messages with a time gap between them.

| Parameter          | Type   | Description                                                      |
|--------------------|--------|------------------------------------------------------------------|
| Mute Speech Input  | Toggle | Disable or enable speech input recognition for the current call. |

## Example

In the following example, the Mute Node allows you to control when speech input is accepted or disabled within the Flow:

1. Say Node: "Hello, you will receive an xApp."
2. xApp: Init Session Node.
3. Mute Speech Input (enabled).
4. Question Node: "Please rate your experience with the xApp on a scale of 1 to 5."  When the Mute Node STT is enabled, the question node will not accept speech input or digits as the answer. The user must provide the rating through other means, such as selecting a number using buttons or typing the response. This process ensures that the speech gathering is temporarily turned off during the rating question to avoid unintended interference from background speech.
5. Mute Node STT (disabled). After the rating question, the Mute Node STT is disabled, allowing the subsequent nodes to accept speech input normally.
