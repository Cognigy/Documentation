---
 title: "Set Translation" 
 slug: "set-translation" 
 hidden: false 
---
# Set Translation

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/set-translation.png" width="50%" />
</figure>

## Description

This Node enables the override of real-time translation settings for the ongoing session. Translation settings are defined on the [Agent Settings](../../../administer/access/project-settings.md) page.

## Restrictions

- Translation with the Set Translation Node is supported only for the output types of the [AI channel](../basic/say.md) in your Nodes.

## Parameters

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Translation Enabled                        | Whether translation is activated in the Endpoint or not.<br>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| User Input Language                        | The language of the user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Flow Language                              | The language to translate to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Don't translate Payloads                   | Whether to preserve payloads so they aren't translated when they are returned.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                    |
| No-Translation Marker                      | Prevents the translation of text that the AI Agent sends to the user. By default, the text enclosed in the `**` no-translation marker is translated. For example, if you write `Willkommen, **Moin**!` in a Say Node of your Flow and the detected language is English, the AI Agent sends to the user `Welcome, Moin!` because `Moin` isn't translated to `Good Morning`.                                                                                                                                                |
| Set user input language on execution count | If the input language is set to 'Auto-Detect', it's fixed to its current value on this execution count.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Always remove  No-translation Markers      | Whether we remove No-Translation Markers, even if a translation isn't enabled.<br/>Can be enabled using the slide bar.                                                                                                                                                                                                                                                                                                                                                                                                    |
| Settings                                   | <ul><li>**Label**: Enter a name for your choice to the Node. [Adding a Label](../../../build/nodes/overview.md) replaces the bottom text line of a Node.</li><li>**Comment**: [Additional information](../../nodes/overview.md) about the Node.</li><li>**Analytics step**: Enter a meaningful step name used as [Annotation](../../../../insights/explorers/step.md#annotate-nodes) for the [Step Explorer](../../../../insights/explorers/step.md) in [Insights](../../../../insights/overview.md) analytics.</li></ul> |
