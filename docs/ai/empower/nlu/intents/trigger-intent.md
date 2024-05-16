---
 title: "Trigger Intent" 
 slug: "trigger-intent" 
 hidden: false 
---
# Trigger Intent

The Trigger Intent feature allows you to manually trigger an Intent by writing `cIntent:`, followed by the desired intent name in your text input, the regular Intent mapping will be ignored.

As of Cognigy 3.4.1 you can additionally supply additional text for keyphrase parsing.

The full syntax is as follows. Note the pipe ***|*** separated text is optional, only the bold text is required. Replace the desired intent and text to parse for slots in the respective placeholders:

> **cIntent:intent name**|text to parse for slots

!!! note "Full NLU is not run"
    Note that full NLU logic is not run when using Trigger Intent. If the Intent named has Default Replies, or other advanced options, these are not enacted. Instead, a Flow input is always generated with the specified Intent and (optionally) the given text and derived slots.

!!! note "Trigger Intent Score"
    The Trigger Intent feature always leads to an Intent score of 1.

## Usage

To use the Trigger Intent feature, send a text into your Flow starting with `cIntent:`. 
Whatever follows will be your identified Intent.
For instance, if you want your intent to be named `my Intent`, you'd send the text input `cIntent:my Intent`. Ensure no space is left behind the colon; however, including a space within the intent name is allowed.

Here's an example:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intent-trigger.png" width="100%" />
</figure>

You may supply additional text that will be parsed for keyphrases using the pipe operator. Here is an example that illustrates the functionality:

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/intent-trigger-usage.png" width="100%" />
</figure>