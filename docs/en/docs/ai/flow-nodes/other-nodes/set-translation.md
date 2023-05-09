---
 title: "Set Translation" 
 slug: "set-translation" 
 hidden: false 
---
# Set Translation

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

## Description
<div class="divider"></div>

This Node adds the ability to override the realtime translation settings for the currently running session. Translation Settings are defined on the [Agent Settings]({{config.site_url}}ai/resources/manage/settings/) page in our user interface.

Currently, we support AI Default output translation as well as Adaptive Cards translation.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3e47a2f-Set_Translation.svg" width="100%" />
  <figcaption>Node selection menu</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3f04af8-Set_Translation_Node_1.svg" width="100%" />
  <figcaption>Set Translation"-Node in a Flow</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9401abe-Set_Translation_Node_2.svg" width="100%" />
  <figcaption>"Set Translation"-Node configuration</figcaption>
</figure>

## Options
The configuration options and their functions are listed below:

| Parameter                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Translation Enabled**                        | Whether translation is activated in the Endpoint or not.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **User Input Language**                        | The language of the user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Flow Language**                              | The language to translate to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Don't translate Payloads**                   | Whether to preserve payloads so they aren't translated when they are returned.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **No-Translation Marker**                      | Do not translate texts encapsulated in this marker (e.g. 'I love the **Cognigy.AI** platform' will not translate 'Cognigy.AI').<br/>(** default)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Set user input language on execution count** | If the input language is set to 'Auto-Detect', it will be fixed to its current value on this execution count.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Always remove  No-translation Markers**      | Whether we remove No-Translation Markers, even if a translation is not enabled.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Settings**                                   | - **Label**: Enter a name for your choice to the Node. [Adding a Label]({{config.site_url}}ai/flow-nodes/node-usage/#add-label) replaces the bottom text line of a Node.<br/>- **Comment**: [Additional information]({{config.site_url}}ai/flow-nodes/node-usage/#add-comment) about the Node.<br/>- **Analytics step**: Enter a meaningful step name used as **[Annotation]({{config.site_url}}insights/step-explorer/#annotations)** for the [Step Explorer]({{config.site_url}}insights/step-explorer/) in [Insights]({{config.site_url}}insights/cognigy-insights/) analytics. |
