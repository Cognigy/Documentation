---
 title: "Trigger Intent" 
 slug: "trigger-intent" 
 hidden: false 
---
# Trigger Intent
## Description
<div class="divider"></div>

The Trigger Intent feature allows you to manually trigger an Intent by writing `cIntent:`, followed by the desired intent name in your text input, the regular Intent mapping will be ignored.

As of Cognigy 3.4.1 you can additionally supply additional text for keyphrase parsing.

The full syntax is as follows. Note the pipe ***|*** separated text is optional, only the bold text is required. Replace the desired intent and text to parse for slots in the respective placeholders:

> **cIntent:intent name**|text to parse for slots

???+ info "Full NLU is not run"
    Note that full NLU logic is not run when using Trigger Intent. If the Intent named has Default Replies, or other advanced options, these are not enacted. Instead, a Flow input is always generated with the specified Intent and (optionally) the given text and derived slots.

???+ info "Trigger Intent Score"
    The Trigger Intent feature always leads to an Intent score of 1.

## Usage
<div class="divider"></div>
You use the Trigger Intent feature by sending a text input into your Flow that starts with `cIntent:`. Whatever follows will be your found Intent. If you want your intent to be named `myIntent` you'd send the text input `cIntent:myIntent` (do not leave any space). Here's an example:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/f2ba2e4-Screenshot_from_2019-09-12_15-33-12.png" width="100%" />
</figure>

You may supply additional text that will be parsed for keyphrases using the pipe operator. Here is an example that illustrates the functionality:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/08f251c-Screenshot_from_2019-10-28_13-48-19.png" width="100%" />
</figure>