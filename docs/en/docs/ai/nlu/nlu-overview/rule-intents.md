# Rule Intents

Rule intents gives you the capability to use advanced rules to understand what a user wants. You can often get by with only using our [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ML-intents/) that use various Machine Learning techniques to understand what your users are saying, but sometimes you need more power than this. 

For example, if you use the Generic Language and want to match an intent on a specific data input or if you want to make sure that you have a specific entry in the context before triggering the intent.

## Concept
<div class="divider"></div>
Rule intents are created in the same way as [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ML-intents/) via the **NLU** tab in the flow editor. However, example sentences are not required for Rule Intents. The rule intents field can be found in the intent editor below the machine learning intents.

Rule Intents require the following:

| Item | Description |
|-------|-------------|
| Intent Name | Unique name of the Intent |
| Rule(s) | A set of rules for this Intent (Min 1 rule) |

## Writing Rules
<div class="divider"></div>
Each Intent can have any number of rules attached to it. The rules are written as Direct CognigyScript, meaning that you don't need the CognigyScript tags. You can therefore write your rules using the [Input Object]({{config.site_url}}ai/tools/interaction-panel/input/) or [Context Object]({{config.site_url}}ai/tools/interaction-panel/context/) (e.g. input.text === "restart") and use free form JavaScript.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/b23c4c5-rules.PNG" width="100%" />
</figure>

You can create as many rules as you want, and if any one of them is matched, the intent will be returned with a score of 1. Rule Intents take precedence over ML Intents, meaning that if the user says a sentence that would trigger a Rule Intent AND an ML Intent, then the Rule Intent will win.

???+ info "Rule Intent Example"
    The intent is `orderFood`. Rules could include.

    * input.text === "I want to order pizza"
    * input.slots.food[0].keyphrase === "pizza" && inut.slots.food.length === 1
    * input.text === \`${input.slots.male_firstname[0].keyphrase} wants cake\`
    * input.text.split(" ")[0] === "Add" && input.text.match("to favorites")

## Thresholds
<div class="divider"></div>
Rule intents will always have a score of 1 if they match. Therefore, thresholds do not apply.

## What is a good use case for Rule Intents?
<div class="divider"></div>
Let's say we want to inform the user on a general level about a very specific topic. A good example would be information about a certain disease, e.g. "diabetes". The disease name is very unlikely to show up in example sentences for other intents and should show up in the vast majority of user input for that intent. 

Additionally, it is very unlikely that "diabetes" will be mentioned when the user wants information about other diseases.

???+ info "Good Rule Example"
    For this use case the following rule should sufficiently cover a great variety of user input.

```js
ci.text.includes("diabetes")
```

With this rule, any user input that includes the character sequence "diabetes" will trigger the intent - even within word combinations that are not separated by " " !

???+ danger "Bad Rule Example"
    The following rule will be worse than a ML intent with only one example sentence!

```js
ci.text === "I want information about diabetes"
```

This will only work for this exact sentence, even a "  " (double space) instead of a " " (single space) or an exclamation mark at the end will prevent the intent from being triggered.

## Thresholds
<div class="divider"></div>
Let's say we have multiple intents that are closely related and can be uttered with a wide variety of vocabulary. A fitting example would be reporting symptoms to a medical chatbot. 
It makes a huge difference whether you say "my chest hurts" or "it hurts when I am breathing" or "I have difficulties breathing". 
In this case using ML intents is superior to trying to create a fitting rule intent.