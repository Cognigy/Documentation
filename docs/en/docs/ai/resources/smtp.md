---
 title: "SMTP" 
 slug: "smtp" 
 hidden: false 
---
# SMTP

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/ff4901d-Screenshot_from_2018-11-27_09-09-42.png" width="100%" />
</figure>

## Description

<div class="divider"></div>

An SMTP Connection can be used to easily connect to an SMTP server. You'll need the following credentials for connecting to the server:
* SMTP server URL
* SMTP port
* A valid username
* A valid password
* TLS Option

It is important that the TLS option matches what the server expects - otherwise you won't be able to connect. For **Port 587** one need to choose **STARTTLS** as TLS option; for **Port 465** use **TLS** as TLS option.

Use the **Send Email** button to send an email to the entered account.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/10491ff-smtpConnection.PNG" width="100%" />
</figure>

<div class="divider"></div>

After you've set up the SMTP Connection, you can use it in a [Send Email Node]({{config.site_url}}ai/flow-nodes/message/send-email-notification/) within a Flow.