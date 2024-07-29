---
 title: "Rule Intents" 
 slug: "rule-intents" 
 hidden: false 
---
# Rule Intents

Rule intents give you the capability to use advanced rules to understand what a user wants. You can often get by with only using our [Machine Learning Intents](ml-intents.md) that use various Machine Learning techniques to understand what your users are saying, but sometimes you need more power than this. 

For example, if you use the Universal Language and want to match an intent on a specific data input or if you want to make sure that you have a specific entry in the context before triggering the intent.

## Concept

Rule intents are created in the same way as [Machine Learning Intents](ml-intents.md) via the **NLU** tab in the flow editor. After you have created an intent, you can specify rules for this intent in the **Rules** section right below the section for **Example Sentences**.  When using rules in an intent, example sentences are not required and can be omitted. However, you can also use example sentences in combination with rules, but more on that later.

Rule Intents require the following:

| Item        | Description                                          |
|-------------|------------------------------------------------------|
| Intent Name | Unique name of the Intent                            |
| Rule(s)     | A set of rules for this Intent (Minimum of one rule) |

## Writing Rules

Each Intent can have any number of rules attached to it. The rules are written as Direct CognigyScript, meaning that you don't need the CognigyScript tags. You can therefore write your rules using the [Input Object](../../../test/interaction-panel/input.md) or [Context Object](../../../test/interaction-panel/context.md) (for example, input.text === "restart") and use free form JavaScript. You can create as many rules as you want, and if any one of them is matched, the intent will be returned with a score of 1.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/rules.png" width="100%" />
</figure>

!!! note "Rule Intent Example"
    The intent is `orderFood`. Rules could include.

    * input.text === "I want to order pizza"
    * input.slots.food[0].keyphrase === "pizza" && input.slots.food.length === 1
    * input.text === \`${input.slots.male_firstname[0].keyphrase} wants cake\`
    * input.text.split(" ")[0] === "Add" && input.text.match("to favorites")

## Which rules take priority?

Rule Intents take precedence over ML Intents. That means if the user said a sentence that would trigger both a Rule Intent **and** an ML Intent, then the Rule Intent wins.

In case rules of multiple intents simultaneously apply, the order of Rule Intents within the flow and its attached flows plays a role in which intent is triggered with priority. There are three principles to remember when working with rules:

1. Rule Intents lower in the list come first.
2. Children come second.
3. Attached Flows come third, in the order they were created or arranged.

To have an example, consider an AI Agent with a Flow having multiple intents on different hierarchy levels.
The Flow also has two Flows attached to it, each having its own intents:

```text
Main Flow
├── Intent A
│   └── Intent A.1
│       └── Intent A.2
└── Intent B

Attached Flow 1
└── Intent C
    └── Intent C.1
        └── Intent C.2

Attached Flow 2
└── Intent D
```

### 1. Rule Intents lower in the list come first

Imagine that both `Intent A.2` and `Intent B` have a rule `input.text.includes("foo bar")`. If we send the message *This text includes foo bar* to the agent, then the intent last in the list of intents will take precedence and be triggered, which is `Intent B`.
### 2. Children come second

Imagine that both `Intent A.1` and `Intent A.2` have a rule `input.text.includes("foo bar")`. If we send the message *This text includes foo bar* to the agent, then the child deepest in the hierarchy will take precedence and be triggered, which is `Intent A.2`.
### 3. Attached flows come third

Imagine that `Intent A`, `Intent B`, `Intent C`, and `Intent D` each have a rule `input.text.includes("foo bar")`. Remember the second principle. If we send the message *This text includes foo bar* to the agent, then the child last in the list will take precedence and be triggered, which is `Intent B` in this case.

Now imagine that we delete the rules in `Intent A` and `Intent B`. If we now send the above message to the agent, then `Intent C` will be triggered. This is because we consider the intents of attached flows last, but in their corresponding order. If we switched the places of `Intent C` and `Intent D` in the user interface, such that `Intent D` comes before `Intent C`, then `Intent D` would be triggered.

As a last example, imagine that both `Intent C.2` and `Intent D` have a rule `input.text.includes("foo bar")`. If we send the message *This text includes foo bar* to the agent, then `Intent C.2` will be triggered, because the entire `Attached Flow 1` takes precedence over any intent in `Attached Flow 2`.

## Thresholds

Rule intents will always have a score of 1 if they match. Therefore, thresholds do not apply.

## What is a good use case for Rule Intents?

Let's say we want to inform the user on a general level about a very specific topic. A good example would be information about a certain disease, for example,example, "diabetes". The disease name is very unlikely to show up in example sentences for other intents and should show up in the vast majority of user input for that intent. 

Additionally, it is very unlikely that "diabetes" will be mentioned when the user wants information about other diseases.

!!! note "Good Rule Example"
    For this use case the following rule should sufficiently cover a great variety of user input.

```js
ci.text.includes("diabetes")
```

With this rule, any user input that includes the character sequence "diabetes" will trigger the intent - even within word combinations that are not separated by " " !

!!! danger "Bad Rule Example"
    The following rule will be worse than an ML intent with only one example sentence.

```js
ci.text === "I want information about diabetes"
```

This will only work for this exact sentence, even a "  " (double space) instead of a " " (single space) or an exclamation mark at the end will prevent the intent from being triggered.

## What is a bad use case for Rule Intents?

Let's say we have multiple intents that are closely related and can be uttered with a wide variety of vocabulary. A fitting example would be reporting symptoms to a medical chatbot. 
It makes a huge difference whether you say "my chest hurts" or "it hurts when I am breathing" or "I have difficulties breathing". 
In this case using ML intents is superior to trying to create a fitting rule intent.