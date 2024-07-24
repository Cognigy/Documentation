---
 title: "Reject Intents" 
 slug: "reject-intents" 
 hidden: false 
---
# Reject Intents

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/reject-Intent.png" width="100%" />
</figure>

Reject intents give you the capability to intentionally prevent the NLU from recognizing any user inputs that are outside the scope of the AI Agent.

## Concept

Reject intents are created in the same way as [Machine Learning Intents](ml-intents.md) via the **NLU** tab in the flow editor. Select **Create 'Reject Intent'** from the extended menu available next to the creation intent butting. Then simply add example sentences to match the user input that should be ignored from the NLU.

Reject Intents require the following:

| Name              | Property type                                  |
|-------------------|------------------------------------------------|
| Intent Name       | Unique name of the Intent                      |
| Example Sentences | A set of sentences that predict the user input |

## What is a good use case for Reject Intents?


Let's imagine we have users looking for green space to take a breath of fresh air instead of a dirty parking lot.

"Where can I find a park nearby"

Say your app only deals with drivers, and you simply want to ignore such requests. In this case, you want to add the offending sentences to the Reject Intent.

As a best practice, simply treat the Reject Intent to capture utterances your bot should ignore with the same importance as any other intent essential to the functioning of your bot.

Alternatively, you may want to reconsider the design of your bot. If you encounter a class of out-of-scope utterances frequently in your logs then you likely want to add an additional intent. You can address the expressed user intent even if it only clarifies the scope of your bot.

If you require more advanced out-of-scope recognition you can also use a Rule or ML intent to capture out-of-scope sentences. This can be done if you ignore the intent otherwise in your Flow.

You will have to be mindful of your architecture when using Rule and ML intents to catch out-of-scope sentences, however, when using Attached Flows: an attached Flow is executed if and only if one of its intents is triggered - to avoid triggering false positives in other Flows you need to put the Flow that captures the out-of-scope intents at the top of the attached Flow ordering and possibly enable the 'Map global intents first' setting.