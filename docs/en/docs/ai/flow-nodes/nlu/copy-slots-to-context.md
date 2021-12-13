---
 title: "Copy Slots to Context" 
 slug: "copy-slots-to-context" 
 hidden: false 
---
# Copy Slots to Context

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9f952e8-copySlotsToContextNode.PNG" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Copy Slots to Context Node is used to store a found Slot in a specific place in the Context.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Key | CognigyScript | The place in the Context where the found Slot should be stored. |
| Tag | CognigyScript | The tag of the Slot that should be stored in the Context if found (e.g a food). |
| Mode | Select | Can be either ``simple`` or ``array``. If ``simple`` then only the last found Slot will be stored, and if the mode is ``array`` then all found Slots with the correct tag will be stored as an array. |
| UseNeg | Toggle | If `true`, then only positive Slots will be added to the Context. This means that in the sentence "I don't like pizza", "pizza" will not be stored in the Context because it is negated. If the toggle is `false`, then "pizza" will be stored.|

???+ info "Handling Multiple Slots with Arrays"
    Let's say you create a Copy Slots To Context Node with a ``key`` of "foods", a ``tag`` of "food", a ``mode`` of "array", and ``UseNeg`` as `false`. You then attach a Lexicon that has the Keyphrases "salad" and "pizza" with a Tag of "food". If a user then says "I want to order a pizza and a salad", then the Keyphrases "pizza" and "salad" will be stored in an array in the Context under the key "foods".
