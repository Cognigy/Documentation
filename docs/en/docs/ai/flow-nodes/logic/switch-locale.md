---
 title: "Switch Locale" 
 slug: "switch-locale" 
 hidden: false 
---
# Switch Locale

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/switch-locale.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

The **Switch Locale** node is used to change to an alternate [Locale]({{config.site_url}}ai/resources/manage/localization/) during a conversation. It is common to use this node after language detection or based on the region of the user to execute a change to the conversational language or structure based on an assessment of the user's region or spoken language. 

A locale must be pre-configured in order to populate the options available for selection in the Locale dropdown menu.

## Usage
<div class="divider"></div>

In order to switch the locale for the current execution, one needs to use a [Think]({{config.site_url}}ai/flow-nodes/logic/think/) Node after the Switch Locale Node. With this functionality, the current Flow will be triggered again -- the new locale will be used instead of the old one.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0c5b7fe-switchLocaleThinkNode.PNG" width="100%" />
</figure>

## Locale Reference ID

[![Version badge](https://img.shields.io/badge/Added in-v4.8.0-blue.svg)]({{config.site_url}})

As of release v4.8 Cognigy Script can be used to switch to another locale by using the locale reference ID. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/d22f5e3-Switch_Locale_example.svg" width="100%" />
  <figcaption>Switch locale using Cognigy Script</figcaption>
</figure>

The reference ID you can find in the "**Localization**" of the "**Manage**" application in Cognigy.AI.

Click on the 'three dots' button on the right side of any available locale to copy the respective reference ID. 
Then open the Switch Locale Node configuration editor and enter the reference ID in the  "Locale ID" field when Cognigy Script is activated.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/cda3717-copy_reference_ID_00.svg" width="100%" />
  <figcaption>Copying locale reference ID</figcaption>
</figure>

!!! note "More information on Localization"
    Find out about building multilingual and regional specific bots on the [Localization Page]({{config.site_url}}ai/resources/manage/localization/).