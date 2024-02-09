---
 title: "Set Translation" 
 slug: "set-translation" 
 hidden: false 
---
# Set Translation

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-translation.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node enables the override of real-time translation settings for the ongoing session. Translation settings are defined on the [Agent Settings](../../resources/manage/settings.md) page.

Note that translation is only supported for the output types of the [AI channel](../message/say.md) in your Nodes.
You cannot configure Alexa, Slack, WhatsApp, and other channels and expect translation to function.

## Settings

The configuration options and their functions are listed below.

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Translation Enabled                        | Whether translation is activated in the Endpoint or not.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| User Input Language                        | The language of the user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Flow Language                              | The language to translate to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Don't translate Payloads                   | Whether to preserve payloads so they aren't translated when they are returned.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                         |
| No-Translation Marker                      | Do not translate texts encapsulated in this marker (for example, 'I love the **Cognigy.AI** platform' will not translate 'Cognigy.AI').<br/>(** default)                                                                                                                                                                                                                                                                                                                                                                       |
| Set user input language on execution count | If the input language is set to 'Auto-Detect', it will be fixed to its current value on this execution count.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Always remove  No-translation Markers      | Whether we remove No-Translation Markers, even if a translation is not enabled.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Settings                                   | - **Label**: Enter a name for your choice to the Node. [Adding a Label](../../flow-nodes/node-usage.md#add-label) replaces the bottom text line of a Node.<br/>- **Comment**: [Additional information](../../flow-nodes/node-usage.md#add-comment) about the Node.<br/>- **Analytics step**: Enter a meaningful step name used as **[Annotation](../../../insights/step-explorer.md#annotations)** for the [Step Explorer](../../../insights/step-explorer.md) in [Insights](../../../insights/cognigy-insights.md) analytics. |
