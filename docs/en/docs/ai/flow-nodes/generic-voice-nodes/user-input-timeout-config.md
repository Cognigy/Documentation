---
 title: "User Input Timeout Config" 
 slug: "user-input-timeout-config" 
 hidden: false 
---

# Transfer

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../../../release-notes/4.45.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/user-input-timeout-config.png" width="80%" />
  <figcaption>Generic User Input Timeout - Config Node</figcaption>
</figure>

## Description

<div class="divider"></div>

The User Input Timeout - Config Node defines what should happen if a user does not provide input to the Virtual Agent in time.


When executed, the settings will apply for the remainder of the session.

| Parameter             | Type     | Description                                                                                                                                 |
|-----------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| User No Input Mode    | Dropdown | Define the action if a user does not provide input to the Virtual Agent in time.                                                            |
| User No Input Timeout | Number   | Define the timeout for user input in ms.                                                                                                    |
| User No Input Retries | Number   | Define the number of retries for the Virtual Agent to request input from the user before ending the call. The maximum value is 999 retries. |