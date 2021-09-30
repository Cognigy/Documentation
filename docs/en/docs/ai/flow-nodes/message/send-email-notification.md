# Send Email Notification

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/36b6341-Screenshot_from_2021-05-17_15-55-12.png" width="100%" />
</figure>

## Description
<div class="divider"></div>

Using the Email Notification Node you can send quick and easy emails in presentation sessions or for inhouse communications without any e.g. provider settings. 
Further on you can use the Email Notification Node to send an email from your Cognigy installation to users. This can be helpful if you want to e.g. trigger a report for your Flow architects. 

## Properties
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/463d0cb-Screenshot_from_2021-05-17_15-58-55.png" width="75%" />
</figure>

### Recipients & Sender Configuration
#### Recipient Email Address
The recipient of your email. Separate multiple recipients with a comma or semicolon.

#### CC Email Addresses (Advanced)
The CC recipients of your email.

#### BCC (Advanced)
The BCC recipients of your email.

### Content
#### Email Subject
The subject of the email.

#### Email Content
The content of the email.
The field supports basic rich text editing.

#### Priority (Advanced)
You can use this to set your priority to "high", "normal" (default) or "low"

### Behavior
#### Result Storage
Can be set to "Don't store result" (default), "Input" or "Context".
If set to "Input" or "Context", you can define a location for the result within "Input" or "Context.
The result of the sent mail response will then be put at that location.

#### Stop on Error
If switched on, the flow execution will halt in case the mail-sending fails.

#### Execute Request asynchronous (Advanced)
If switched on, the flow execution will **continue directly after** the Send Email Node was triggered. If turned off, flow execution will** wait until the email is sent**.

## Email Template
<div class="divider"></div>

The email will be sent with templating around it, looking roughly like this:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/eccd2bc-Screen_Shot_080.PNG" width="100%" />
</figure>

The recipient will get the email notification


### Please consider:

   *  **Your SMTP Server settings need to be adjusted to use the internal Cognigy Email notification!**
   *  **Email attachments are restricted (e.g. files, images). If required use  Send Email Node.**