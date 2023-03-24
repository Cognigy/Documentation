---
 title: "Regex Slotfiller" 
 slug: "regex-slotfiller" 
 hidden: false 
---
# Regex Slotfiller

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/a862db9-RegexSlotFiller.PNG" width="100%" />
</figure>

## Description
<div class="divider"></div>
Use this Node to fill Slots using regular expressions. To learn more about Slots and Tags see [**Lexicons & Slots**]({{config.site_url}}ai/resources/build/lexicons/).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Regex | Regular expression | The regular expression applied to input utterance. |
| Flags | Regular expression flag characters in single string | Regular expression flags you want to set |
| Tag | CognigyScript | The Tag/Slot you want to fill |

!!! warning "Regex"
    Please make sure that your regular expression starts with a **/** and ends with** /g**.

    Example:
    * /^1\d{​​​​7}​​​​$/g 