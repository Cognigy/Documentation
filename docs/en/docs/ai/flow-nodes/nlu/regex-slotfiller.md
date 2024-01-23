---
 title: "Regex Slot Filler" 
 slug: "regex-slot-filler" 
 hidden: false 
---
# Regex Slot Filler

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/nlu/regex-slot-filler.png" width="80%" />
</figure>

## Description
<div class="divider"></div>
Use this Node to fill Slots using regular expressions. To learn more about Slots and Tags see [**Lexicons & Slots**]({{config.site_url}}ai/resources/build/lexicons/).

| Parameter | Type                                                | Description                                        |
|-----------|-----------------------------------------------------|----------------------------------------------------|
| Regex     | Regular expression                                  | The regular expression applied to input utterance. |
| Flags     | Regular expression flag characters in single string | Regular expression flags you want to set           |
| Tag       | CognigyScript                                       | The Tag/Slot you want to fill                      |

!!! warning "Regex"
    Make sure that your regular expression starts with `/` and ends with `/g`.
    
    Example: `/^1\d{​​​​7}​​​​$/g`