---
 title: "Applications" 
 slug: "vg-webapp-applications" 
 hidden: true 
---

# Voice Gateway Web App - Applications

The **Applications** overview will give a quick look on all created Applications for your **Account**.

<img src="{{config.site_url}}voicegateway/images/VG-webapp-applications-overview.png" alt="VoiceGateway WebApp Applications" />

## Overview

<div class="divider"></div>

An **Application** represents an Endpoint in Cognigy.AI. By creating an Application in the VoiceGateway Web App the Endpoint is being routed to VoiceGateway. It is possible to add multiple Applications, dependend on the amount of the Endpoints created in Cognigy.AI.

<img class="image-center" src="{{config.site_url}}voicegateway/images/VG-webapp-applications-new-app.png" width="VoiceGateway WebApp Applications New Application" />

| Settings                 | Description                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------ |
| Name                     | Application Name                                                                     |
| Calling Webhook          | Cognigy.AI Endpoint URL for the Web Application that will handle calls               |
| Call Status Webhook      | Cognigy.AI Endpoint URL for the Web Application that will receive the call status    |
| Messaging Webhook        | Cognigy.AI Endpoint URL for the Web Application that will receive SMS, if configured |
| Speech Synthesis Vendor  | Default Vendor, Language and Voice Settings for Text-To-Speech output                |
| Speech Recognizer Vendor | Default Vendor and Language Settings for Speech-To-Text recognition                  |
