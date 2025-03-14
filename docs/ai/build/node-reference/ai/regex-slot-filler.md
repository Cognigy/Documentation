---
 title: "Regex Slot Filler" 
 slug: "regex-slot-filler" 
 hidden: false 
---
# Regex Slot Filler

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/regex-slot-filler.png" width="80%" />
</figure>

## Description

Use this Node to fill Slots using regular expressions. To learn more about Slots and Tags, see [Lexicons & Slots](../../../empower/nlu/slots-and-lexicons/lexicons.md).

## Settings

| Parameter | Type                                                | Description                                        |
|-----------|-----------------------------------------------------|----------------------------------------------------|
| Regex     | Regular expression                                  | The regular expression applied to input utterance. |
| Flags     | Regular expression flag characters in single string | Regular expression flags you want to set           |
| Tag       | CognigyScript                                       | The Tag/Slot you want to fill                      |

!!! warning "Regex"
    Make sure that your regular expression starts with `/` and ends with `/g`.
    
    Example: `/^1\d{​​​​7}​​​​$/g`