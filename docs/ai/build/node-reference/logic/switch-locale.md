---
 title: "Switch Locale" 
 slug: "switch-locale" 
 hidden: false 
---
# Switch Locale

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/switch-locale.png" width="50%" />
</figure>

## Description

The Switch Locale Node changes the [Locale](../../translation-and-localization/localization.md) of the Flow during a conversation. It is common to use this Node after language detection or based on the region of the user to execute a change to the conversational language or structure based on an assessment of the user's region or spoken language. 

## Prerequisites

- A [Locale](../../translation-and-localization/localization.md) must be configured in order to populate the options available for selection in the **Locale** list.

## Parameters

[![Version badge](https://img.shields.io/badge/Updated in-v4.80-blue.svg)](../../../../release-notes/4.80.md)

| Parameter         | Description                                                                                                |
|-------------------|------------------------------------------------------------------------------------------------------------|
| Use CognigyScript | Toggle to use CognigyScript to switch the Locale using the Locale reference ID in the **Locale** field.    |
| Locale            | Select the Locale to switch to or enter the Locale reference ID if the **Use CognigyScript** is activated. |

## Usage

To switch the Locale for the current execution, you need to use a [Think](think.md) Node after the Switch Locale Node. With this functionality, the current Flow is triggered again, but the new Locale is used.
