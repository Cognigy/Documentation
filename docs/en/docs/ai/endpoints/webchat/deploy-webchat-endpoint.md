---
 title: "Deploy a Webchat Endpoint" 
 slug: "deploy-webchat-endpoint" 
 hidden: false 
---
# Deploy a Webchat Endpoint

## Creating a Webchat Endpoint

<div class="divider"></div>

First, create an Endpoint that uses the Webchat Channel. When you created the Endpoint and assigned the Flow that the Endpoint should use, then you can already click on the ``Open Webchat`` button in the upper right corner. This will open the configured Webchat in an [Integrated Demo Page]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/), and you can already start talking to your flow. Read on to figure out how you can configure the appearance of the Webchat to style it in your company colors, add a background image and much more. 


## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings) 

???+ success "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>

You can configure almost everything about the Webchat to personalize it just for your needs. This includes modifying the colors, adding functionality like file uploads and much more, so that you can present the Conversational AI that you have created in a very nice way. As soon as you have changed a setting, loading or reloading a Website with a Webchat pointing to this Endpoint will show the changes will already have taken effect.

### Webchat Layout

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout.png" width="100%" />
  <figcaption>Webchat Layout</figcaption>
</figure>

| Parameter |	Description |
| -- | -- |
| Webchat Title | The text to display within the webchat header |
| Color Scheme | The main colors for the Webchat, e.g. #008080 |
| Bot Avatar Logo URL | A URL linking to the logo that should be the bot's avatar |
| Header Logo URL | A URL linking to the logo that should be displayed in the Webchat header |
| Enable Typing Indicators | Enables a typing indicator while the Bot is replying |
| Input Placeholder Text | The text to display as a placeholder in the input field |

#### Advanced Layout Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout-advanced.png" width="100%" />
  <figcaption>Advanced Layout Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Input Autogrow | If this is enabled, the text input for Webchat users will grow automatically when the user types long texts. It also enables line breaks for user text inputs. |
| Maximum Number of Input Rows | Defines the number of text lines the text input can grow to. After the maximum line size is exceeded, a vertical scroll bar will appear in the text input. |
| Dynamic Image Aspect Ratio | Images from the 'gallery', 'attachment' or 'top list item' template will not have a forced aspect ratio and will be fully displayed full-width without cropping |
| Disable Input Autocomplete | Use this setting to disable the autocomplete functionality for everyone |
| Enable generic HTML Styling | If this is active, additional generic styling will be applied to HTML content inside regular text messages. |
| Allow JavaScript in HTML Message Content | By default, potentially malicious HTML content like 'onclick' or 'onload' attributes are removed before rendering. If this setting is enabled, they will not be removed. |
| Allow JavaScript in Button/Action URLs | By default, 'JavaScript URLs' starting with javascript: will get removed. If this setting is enabled, they will not be removed and the JavaScript code will get executed when the user clicks the button/element. |

???+ info "Text Input Sanitization"
    Text Input Sanitization is enabled by default for security reasons, before sending text from the Webchat to the NLU. This changes characters which are reserved by HTML (**",',&,<,>**) to an entity name. For example **&** will have **amp;** appended to the input.
    This can cause issues in your Agent, if a condition or Intent is only triggered by the reserved character in its original form. If you need to circumvent this issue, toggle **Allow JavaScript in HTML Message Content** to enabled.

#### Persistent Menu

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout-persistent.png" width="100%" />
  <figcaption>Persistent Menu Configuration</figcaption>
</figure>

The persistent menu is a great way to show your users all of the capabilites that your bot has. You can use it to switch to different conversation stages, to guide the user and much more. The user can open the menu at any time during the conversation through a small icon in the left corner:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/91c86d0-Screenshot_from_2019-04-16_11-06-25.png" width="100%" />
  <figcaption>Persistent Menu</figcaption>
</figure>

To create a``Persistent Menu`` like this, open the *Persistent Menu Panel*. The first thing you have to do is enabling the Persistent Menu. As soon as you do this, the menu icon will appear in the lower left corner of the Webchat. You can give the menu any title you want in the ``Title`` field in the Persistent Menu Panel.In order to actually add the Persistent Menu Items themselves, you click on the ``ADD`` button on the right. Clicking this will add a new ``Persistent Menu Item``, which consists of a ``Title`` and a ``Payload``. The text in the title field controls what the user can see in the Persistent Menu, while the text in the payload field is what is actually sent to your flow. This way, you can show a simple word to your user, but actually send a more complex query to your flow in order to process the request.The image below shows the configuration behind the webchat pictured above.

#### Webchat Plugins

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout-plugins.png" width="100%" />
  <figcaption>Webchat Plugins</figcaption>
</figure>

All plugins linked in this list field will be loaded by the Webchat Widget when started. To trigger the plugin, e.g. display an upload button for the file-upload plugin a plugin specific data payload is required.

Get sure all plugins are reachable for your whole audience!

### Webchat Behavior

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-behavior.png" width="100%" />
  <figcaption>Webchat Behavior</figcaption>
</figure>

| Parameter (main) |	Parameter (sub)	| Description |
| -- | -- | -- |
| Start Behavior	| Start Behavior <br>- Start with a Text Field<br>- Start with a Button<br>- Auto Send a Message to the Bot |	Start behavior when opening the Webchat. |
|| Payload | The text that is sent into your Flow |
|| Display Text | Text to display as a simulated user input bubble when the bot starts. |
|| Button Title | The text to display on the Start Button. |
| Additional Behavior | Message Delay | The amount of time to wait between sending bot replies. Measured in milliseconds. |
|| Focus Input after Postback | The message input field will receive focus after a Postback button or quick reply button is clicked. |
|| Enable Connection Status Indicator | Whether to show a warning if the connection is lost during a conversation. The warning will disappear when the connection is re-established. |

### Teaser Message Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-teaser-message.png" width="100%" />
  <figcaption>Teaser Message Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Teaser Message Text | The text of the message to display next to the webchat icon to get the user to engage. |
| Show Engagement Messages in Chat | Show Engagement Messages in Chat |

### Unread Message Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-unread-message.png" width="100%" />
  <figcaption>Unread Message Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Unread Message Title Indicator | Indicate the amount of unread messages in the page title every 1000ms. |
| Enable Unread Message Badge | The webchat shows a badge with the number of unread messages at the toggle button. |
| Enable Unread Message Preview | The webchat shows a message bubble with the latest retrieved bot message. |
| Enable Unread Message Sound Confirmation | Play a notification sound for each incoming unread message. |

### Conversation Rating Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-conversation-rating.png" width="100%" />
  <figcaption>Conversation Rating Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Rating Functionality | Select when a webchat user can give a rating. |
| Rating Title Text | The title displayed in the rating dialog prompt. |
| Rating Comment Text | The text displayed above the comment field in the rating dialog prompt |
| Message History Rating Text | The text displayed in the message history after giving a rating (text is followed by the icon representing the rating). |
| Message History Comment Text | The text displayed in the message history after giving a rating, if there was a comment sent (text is followed by the actual comment). |

### Demo Webchat Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-demo.png" width="100%" />
  <figcaption>Demo Webchat Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Demo Webchat | Enables or disables the integrated Demo Webchat for this Endpoint. |
| Enable Speech-to-Text | Toggle whether the Webchat should feature a microphone button. |
| Enable Text-to-Speech | Toggle whether the Webchat should read all bot messages aloud. |
| Background Image | The image that will be displayed behind the Webchat. |
| Center Webchat | Toggle whether the Webchat should be centered (`Yes`) or in the bottom right corner (`No`) |

### Webchat Custom Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-custom.png" width="100%" />
  <figcaption>Webchat Custom Settings</figcaption>
</figure>

This field can be used to configure additional settings not available in the GUI. These settings override GUI settings. Entering malformed JSON might result in crashing the webchat, so use with caution and at own risk!

## File Storage

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../../release-notes/4.45.md)

By default, users cannot attach files to a chat message. If you want to allow users to upload files via drag and drop or by clicking the attachment symbol, connect to one of the following file storage providers:

- Azure - specify a unique connection name and [Azure Blob Storage Container](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) credentials: containerName, account, and accountKey.
- AWS - specify a unique connection name and [Amazon S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) credentials: secretAccessKey, region, bucketName.
- Google Cloud - specify a unique connection name and [Google Cloud Storage Bucket](https://cloud.google.com/storage/docs/buckets) credentials: buketName, clientName, privateKey.


## More information

- [Cognigy Webchat]({{config.site_url}}ai/endpoints/webchat/webchat/)
- [Webchat Features ]({{config.site_url}}ai/endpoints/webchat/webchat-features/)
- [Triggering Webchat Plugins ]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/)
- [Integrated Demo Page ]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/)