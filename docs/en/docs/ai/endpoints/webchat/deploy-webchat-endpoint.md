# Deploy a Webchat Endpoint

## Creating a Webchat Endpoint

<div class="divider"></div>

First, create an Endpoint that uses the Webchat Channel. When you created the Endpoint and assigned the Flow that the Endpoint should use, then you can already click on the ``Open Webchat`` button in the upper right corner. This will open the configured Webchat in an [Integrated Demo Page](doc:integrated-demo-page), and you can already start talking to your flow. Read on to figure out how you can configure the appearance of the Webchat to style it in your company colors, add a background image and much more. 


## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/NLUconnectors)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/) 

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>

You can configure almost everything about the Webchat to personalize it just for your needs. This includes modifying the colors, adding functionality like file uploads and much more, so that you can present the Conversational AI that you have created in a very nice way. As soon as you have changed a setting, loading or reloading a Website with a Webchat pointing to this Endpoint will show the changes will already have taken effect.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/0d95ca3-EP_webchat_configuration.png" width="100%" />
  <figcaption>Webchat Configuration settings</figcaption>
</figure>

### Webchat Configuration
In the Webchat Configuration Panel, you can configure the colors of the Webchat, the Get Started Button, logos, images and much more. The table below shows a description of each setting that you can configure.

|Name	|Description|
|----|---|
|Center Webchat[^1]|	If this setting is toggled on, then the Webchat will appear in the center of the page. Otherwise it will appear in the bottom right corner.|
|Color Scheme	|This setting controls the main colors of the Webchat. Clicking on the pallete icon will open up a color picker that you can use to easily select which color your Webchat should have.|
|Webchat Title	|This setting controls the displayed Webchat title.|
|Input Placeholder Text	|This setting controls the text that will be rendered as a placeholder in the input field when the user is not writing anything.|
|Start Behavior	|This setting can be used to customize the way conversations will be initialized in this Webchat.<br><br>"Start with a Text Field" will display a regular text field to the user (default)<br><br>"Start with a Button" will instead render a Button instead of a text field. <br><br>Clicking the button will initialize the conversation, sending a preconfigured message. The label of the button, payload and shown text of the message can be customized.<br><br>"Auto Send a Message to the Bot" will automatically send a predefined message to the bot when the Webchat is initialized. The payload and shown text of the message can be customized.|
|Button Title	|The label to display on the Get Started Button. Only used if a Get Started Button is displayed.|
|Get Started Text	|The text that is displayed in the Webchat for the "Get Started" message (see start behavior).|
|Payload|	The text that is sent to your Flow with the "Get Started" message (see start behavior).|
|Bot Avatar Logo|	The logo to display as an avatar for the messages of the bot. |You normally put a URL linking to your company logo here.|
|Header Logo|	The logo to display in the header of the Webchat. You normally put a URL linking to your company logo here.|
|Background Image[^1]|	The image to display in the the backround.|
(only for Cognigy-hosted Webchats)
|Enable Speech-to-Text[^1]|	If true, then the Webchat has a microphone button that enables the user to use voice to send messages instead of only sending text messages.|
|Enable Text-to-Speech[^1]|	If true, then the Webchat will read messages from the Bot aloud.|
Enable Typing Indicatros	This settings controls whether animated dots are displayed while the bot is preparing an answer
|Message Delay|	This settings controls the interval between each bot output, simulating human typing delays|
|Webchat Plugins|	Here you define the links to your webchat plugings this Endpoint should use|

[^1]: This Setting is exclusive to or works differently on [Integrated Demo Pages]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page).

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)](https://shields.io/)

**Webchat Rating options**

As of Cognigy.AI 4.9.0, Cognigy introduces [Cognigy Insights]({{config.site_url}}insights) as a new analytics application. The introduction of Insights caused following additional rating options in the Webchat endpoint configuration settings:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/13c441a-Rating_settings_in_webchat_endpoint_settings_4.svg" width="100%" />
  <figcaption>Webchat Configuration "Rating Settings"</figcaption>
</figure>

|Name	|Description|
|---|---|
|**Enable Rating Functionality**|	Options are:<br>- Always <br>- Only when requested<br>- Once|
|**Rating Title Text**|"Example: Please rate your conversation"|
|**Rating Comment Text**|	Example: "Enter a comment"|
|**Message History Rating Text**|	Example: "Your rating"|
|**Message History Comment Text**	|Example:"Your comment"

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)](https://shields.io/)
### Further Webchat Settings

With Cognigy.AI 4.10.0 the webchat endpoints settings have been extended by new sections called "**Minimized Webchat Settings**", "**Webchat Layout**", and "**Additional Settings**".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/90a8590-Webchat_settings.svg" width="100%" />
  <figcaption>Webchat Settings</figcaption>
</figure>

#### Minimized Webchat Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/173148a-Webchat_minimized_settings_2.svg" width="100%" />
  <figcaption>Minimized Webchat Settings</figcaption>
</figure>


|Parameter (main)||	Parameter (sub)	Description|
|--|--|--|
|Enable Connection Status Indicator	||	Whether to show a warning if the connection is lost during a conversation. The warning will disappear when the connection is re-established.|
|Enable Unread Message Title Indicator	||	Indicate the amount of unread messages in the page title every 1000ms.|
|Show Engagement Messages in Chat		||Engagement messages will also be shown in the chat window.|
|Engagement Message Text||		The text of the message to display next to the webchat icon to get the user to engage.|
|Unread Messages	|Enable Unread Message Badge|	The webchat shows a badge with the number of unread messages at the toggle button.|
||Enable Unread Message Preview|	The webchat shows a message bubble with the latest retrieved bot message.|
||Enable Unread Message Sound Confirmation	Play a notification sound for each incoming unread message.

#### Webchat Layout

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c8a7357-Webchat_Layout.svg" width="100%" />
  <figcaption>Webchat Layout</figcaption>
</figure>


|Parameter (main)||	Parameter (sub)	Description|
|--|--|--|
|Enable Typing Indicators	||	Enables a typing indicator while the Bot is replying.|
|Enable generic HTML Styling||		If this is active, additional generic styling will be applied to HTML content inside regular text messages.|
|Dynamic Image Aspect Ratio	||	Images from the 'gallery', 'attachment' or 'top list item' template will not have a forced aspect ratio and will be fully displayed full-width without cropping.|
|Color Scheme	||	The main colors for the Webchat, e.g. #008080.|
|Logos and Images|	Bot Avatar Logo|	A URL linking to the logo that should be the bot's avatar.|
||Header Logo| https://image.url A URL linking to the logo that should be displayed in the Webchat header.|

#### Additional Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/60ab998-Webchat_additional_settings.svg" width="100%" />
  <figcaption>Additional Settings</figcaption>
</figure>

|Parameter (main)	||Parameter (sub)	Description|
|--|--|--|
|Content Settings	|Enable generic HTML Styling|	If this is active, additional generic styling will be applied to HTML content inside regular text messages.
||Allow JavaScript in HTML Message Content|	By default, potentially malicious HTML content like 'onclick' or 'onload' attributes are removed before rendering. If this setting is enabled, they will not be removed.|
||Allow JavaScript in Button/Action URLs|	By default, 'JavaScript URLs' starting with javascript: will get removed. If this setting is enabled, they will not be removed and the JavaScript code will get executed when the user clicks the button/element.
|Rating Settings|	Enable Rating Functionality <br>- Only when requested <br>- Once <br>- Always	Select when a webchat user can give a rating.|
||Rating Title Text	|The title displayed in the rating dialog prompt. <br>Rating Comment Text	The text displayed above the comment field in the rating dialog prompt.|
||Message History Rating Text|	The text displayed in the message history after giving a rating (text is followed by the icon representing the rating).|
||Message History Comment Text|	The text displayed in the message history after giving a rating, if there was a comment sent (text is followed by the actual comment).|
|Start Behavior	|Start Behavior <br>- Start with a Text Field<br>- Start with a Button<br>- Auto Send a Message to the Bot|	Start behavior when opening the Webchat.|
||Payload<br>-GET_STARTED|	The text that is sent into your Flow.|
||Display Text <br>- Get Started|	Text to display as a simulated user input bubble when the bot starts.|
||Button Title<br>- Get Started|	The text to display on the Start Button.
|Persistent Menu|	Enable Persistent Menu|	The title of the Persistent Menu.
||Title|	The title of the Persistent Menu.|
|General Functionality|	Webchat Title|	The text to display within the webchat header.|
||Message Delay|	The amount of time to wait between sending bot replies. Measured in milliseconds.|
||Focus Input after Postback|	The message input field will receive focus after a Postback button or quick reply button is clicked.|
||Input Placeholder Text|	The text to display as a placeholder in the input field.|
||Webchat plugins|	https://url.to/plugin.js|

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.11.0-blue.svg)](https://shields.io/)

#### Custom JSON

Cognigy has been added with Cognigy.AI v4.11.0  another field "**Custom JSON**" to the Webchat Endpoint Editor configuration. This field can be used to configure additional settings not available in the GUI.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/1195ad5-custom_JSON_field_2.svg" width="100%" />
  <figcaption>Custom JSON field with a configuration example of changing the color scheme</figcaption>
</figure>

- You can use the "Custom JSON" field to override parameters of the configuration.

- You can add parameters that were not included in the configuration before.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/5ee5e65-custom_JSON_field_4_250.svg" width="100%" />
  <figcaption>Changed color to #eb9419 using custom JSON field option</figcaption>
</figure>

### Persistent Menu
The persistent menu is a great way to show your users all of the capabilites that your bot has. You can use it to switch to different conversation stages, to guide the user and much more. The user can open the menu at any time during the conversation through a small icon in the left corner:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/91c86d0-Screenshot_from_2019-04-16_11-06-25.png" width="100%" />
  <figcaption>Persistent Menu</figcaption>
</figure>

To create a``Persistent Menu`` like this, open the *Persistent Menu Panel*. The first thing you have to do is enabling the Persistent Menu. As soon as you do this, the menu icon will appear in the lower left corner of the Webchat. You can give the menu any title you want in the ``Title`` field in the Persistent Menu Panel.In order to actually add the Persistent Menu Items themselves, you click on the ``ADD`` button on the right. Clicking this will add a new ``Persistent Menu Item``, which consists of a ``Title`` and a ``Payload``. The text in the title field controls what the user can see in the Persistent Menu, while the text in the payload field is what is actually sent to your flow. This way, you can show a simple word to your user, but actually send a more complex query to your flow in order to process the request.The image below shows the configuration behind the webchat pictured above.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/0c3448e-EP_webchat_persistent_menu.png" width="100%" />
  <figcaption>Persistent Menu Configuration</figcaption>
</figure>

## More information

- [Cognigy Webchat]({{config.site_url}}ai/endpoints/webchat/webchat)
- [Webchat Features ]({{config.site_url}}ai/endpoints/webchat/webchat-features)
- [Triggering Webchat Plugins ]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins)
- [Integrated Demo Page ]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page)