---
 title: "Regex Slot Filler" 
 slug: "regex-slot-filler" 
 hidden: false 
---
# Regex Slot Filler

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai/regex-slot-filler.png" width="40%" />
</figure>

## Description

Use this Node to fill Slots using regular expressions. To learn more about Slots and Tags, see [Lexicons & Slots](../../../empower/nlu/slots-and-lexicons/lexicons.md).

## Parameters

| Parameter | Type                                                | Description                                                                                                                          |
|-----------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Regex     | Regular expression                                  | The regular expression applied to input utterance. The regular expression must start with `/` and end with `/g`. For example, `/^1\d{​​​​7}​​​​$/g`. |
| Flags     | Regular expression flag characters in single string | Regular expression flags you want to set.                                                                                            |
| Tag       | CognigyScript                                       | The Tag or Slot you want to fill.                                                                                                    |
