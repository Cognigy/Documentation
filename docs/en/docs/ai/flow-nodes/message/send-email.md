---
 title: "Send Email" 
 slug: "send-email" 
 hidden: false 
---
# Send Email

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8e3d3aa-Send_SMTP_Email.PNG" width="100%" />
</figure>

## Description
<div class="divider"></div>

Use the Send Email Node to send an email via [SMTP Connection]({{config.site_url}}ai/resources/smtp/) to a recipient. 
<!-- need to change the link-up [SMTP Connection] -->
## Properties
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/21bb6d2-Screenshot_2021-04-15_Flow_Chart_Editor_for_new_mail_Cognigy_AI1.png" width="75%" />
</figure>

### Authentication
#### Email Service

[![Version badge](https://img.shields.io/badge/Added in-v4.2.0-blue.svg)]({{config.site_url}})

Select the Email Provider of the address you want to send from. 
If yours is not listed, you can select "Other SMTP Service" to do a manual configuration.

!!! info "Email Service Configuration"
    Some Email Providers, such as Gmail, will require you to configure your mail account to allow sending mails via SMTP before you can use it.

#### Service Credentials / SMTP Settings
Depending on which Email Service selected above, you will be asked to either enter your login credentials for that service or for the full SMTP connection information in case you selected the "Other SMTP Service" option.

### Recipients & Sender Configuration
#### Recipient Email Address
The recipient of your email. Separate multiple recipients with a comma or semicolon.
#### CC Email Addresses (Advanced)
The CC recipients of your email.

#### BCC (Advanced)
The BCC recipients of your email.

#### Custom From Email Address (Advanced)
This email address will be displayed in the "from" field (sender's address).

#### Reply To Address (Advanced)
This email address is the target receiving mails when the recipients reply to your email.

### Content
#### Email Subject
The subject of the email.

#### Email Content
The content of the email.
The field supports basic rich text editing.

#### Custom Text Content (Advanced)
If your content contains non-text content, you can provide a customized text-only version of the mail content here for improved compatibility with limited devices.

#### Priority (Advanced)
You can use this to set your priority to "high", "normal" (default) or "low"

### Attachments
#### Attaching a File from the Web
If you set "Email Attachment" to "From URL", you can specify a public Web URL or a data URL.
The linked File will then be attached to that mail.
You can also pick a custom filename for the attached file.

#### Text Content Attachment
You can define a text that should be sent as an attachment by selecting "From Text Content" as an option.

#### Base64 String Attachment
If you have Base64-encoded data that should be attached, you can do so by selecting the "From Base64 String" option. 

#### Custom Content Attachment
If you need to send text content with a specific MIME-Type, you can select "From Custom Content Type", allowing you to define an own MIME-Type

#### Raw Attachment
For maximum control, you can select the "From Pregenerated MIME Node" Option, offering to send a fully customized attachment body manually.

### Behavior
#### Result Storage
Can be set to "Don't store result" (default), "Input" or "Context".
If set to "Input" or "Context", you can define a location for the result within "Input" or "Context.
The result of the sent mail response will then be put at that location.

#### Stop on Error
If switched on, the flow execution will halt in case the mail-sending fails.

#### Execute Request asynchronous (Advanced)
If switched on, the flow execution will **continue directly after** the Send Email Node was triggered. If turned-off, flow execution will **wait until the email is sent**.