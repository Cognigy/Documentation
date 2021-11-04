---
 title: "Attachments" 
 slug: "attachments" 
 hidden: false 
---
# Attachments

Agent Flows and Lexicons can be shared across multiple flows throughout the agent. This is achieved using the **Attachments** menu where lists of the respective resources are populated and can be enabled. 

The **Attachments Menu** is found in the **NLU** tab inside the Flow Editor.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/b585fa6-attachments.PNG" width="80%" />
</figure>

The **Attachments** feature means that duplication of intent and lexicon libraries is not required as multiple flows can be designed to reference single libraries.

???+ warning "Train Intents when Attaching"
    The NLU must be re-trained anytime a new flow or lexicon is attached.

## Attached Flows
<div class="divider"></div>
Flow attachment is an optional feature that allows virtual agents to access the intents of separate flows.

???+ info "Using Attached Flows"
    Find out more about flow attachment on the [Attached Flows Page]({{config.site_url}}ai/nlu/attachments/attached-flows/).

## Attached Lexicons
<div class="divider"></div>
Lexicon attachment is required in order to teach the NLU to understand the specific keyphrases added in the [Lexicon Editor](https://docs.cognigy.com/v4.11/docs/lexicons). This means that particular flows can recognize specified keyphrases where others will not, adding to the flexibility of Cognigy.AI virtual agents.

???+ info "Using Attached Lexicons"
    Find out more about lexicon attachment on the [Attached Lexicons Page]({{config.site_url}}ai/nlu/attachments/attached-lexicons/).