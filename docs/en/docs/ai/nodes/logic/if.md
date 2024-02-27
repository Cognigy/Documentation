---
 title: "If" 
 slug: "if" 
 hidden: false 
---
# If

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/logic/if.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node is used to execute either one or another part of a [Flow](../../resources/build/flows.md), based on a condition. An If Node has two children: a **Then Node** and an **Else Node**. The condition is evaluated during the execution of the Flow. If the condition evaluates to `true`, the Flow will take the path of the **Then Node**, if it evaluates to `false` the path of the **Else Node** will be executed. 

## Creating a Condition
<div class="divider"></div>

!!! note "Direct CognigyScript"
    In the condition field, direct [CognigyScript](../../tools/cognigy-script.md) should be used. This means that you don't have to use `{{ " {{ }}" }}`. Therefore, `input.slots.city` is all that is required. This will evaluate to `true`, if an Input Keyphrase with the tag `city` was found.
## Rule Editor


The Rule Editor allows you to quickly create simple conditions.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/db4d06f-if-conditions.jpg" width="100%" />
</figure>

## Advanced Editor


The Advanced Editor allows you to write Conditions that go beyond one comparison.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/48b7a3f-if-conditions-rule.jpg" width="100%" />
</figure>