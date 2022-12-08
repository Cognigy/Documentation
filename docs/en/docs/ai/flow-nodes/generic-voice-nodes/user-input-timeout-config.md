---
 title: "User Input Timeout Config" 
 slug: "user-input-timeout-config" 
 hidden: false 
---

# Transfer

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/user-input-timeout-config.png" width="80%" />
  <figcaption>Generic User Input Timeout - Config Node</figcaption>
</figure>

## Description

<div class="divider"></div>
The User Input Timeout - Config Node defines what should happen if a user does not provide input to the bot in time.
<br/><br/>
When executed, the settings will apply for the remainder of the session.


| Parameter             | Type     | Description                                                                                   |
| --------------------- | -------- | --------------------------------------------------------------------------------------------- |
| User No Input Mode    | Dropdown | Define the action if a user does not provide input to the bot in time                         |
| User No Input Timeout | Number   | Define the timeout for user input in ms                                                       |
| User No Input Retries | Number   | Defines how often the bot should retry to get an input from a user before completing the call |