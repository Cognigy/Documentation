---
title: "Complete Text"
slug: "complete-text"
hidden: false
---

## Complete Text (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.44(Beta)-purple.svg)](../../../release-notes/release-notes.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/complete-text.png" width="100%" />
  <figcaption>Log Messages</figcaption>
</figure>

## Description
<div class="divider"></div>

The Complete Text Node allows using Generative AI for creating relevant content. To do that, you need to add a text prompt that helps Generative AI continue the text.

| Parameter | Type | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ---- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Prompt    | CognigyScript | The prompt to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.                                                                                                                                                                                                                                                                                 |
| Sampling Method | Select | Methods:<br/>- Temperature - determines the level of randomness in the generated text. A higher temperature allows for more diverse and creative outputs, while a lower temperature leads to more predictable and consistent outputs with the training data.<br> - Top Percentage - specifies the percentage of the most probable outputs for generation, resulting in more consistent output. |
| Maximal Tokens | Indicator| The maximum number of tokens to generate in the completion.                                                                                                                                                                                                                                                                                                                                               |
| Presence Penalty | Indicator | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood of talking about new topics.                                                                                                                                                                                                                             |
| Frequency Penalty | Indicator  | Number between -2.0 and 2.0. The penalty assigns a lower probability to tokens frequently appearing in the generated text, encouraging the model to generate more diverse and unique content.                                                                                                                                                                                            |
| Use Stops  | Toggle  | Whether to use a list of stop words to let Generative AI know where the sentence stops.                                                                                                                                                                                                                                                                                                                   |
| Stops  | Text  | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                                                                                                                                                                                |
| Timeout  | Number  | The maximum amount of milliseconds to wait for a response from the Generative AI Provider.                                                                                                                                                                                                                                                                                                                |
| Where to store the result | Select  | You can store the result in the Input or Context.                                                                                                                                                                                                                                                                                                                                                         |
| Input Key to store Result  |  CognigyScript  | Filled in by default.                                                                                                                                                                                                                                                                                                                                                                                     |

## More Information

- [Generative AI](../../generative-ai.md)


