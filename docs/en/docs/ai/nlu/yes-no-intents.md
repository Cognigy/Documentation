---
 title: "Yes/No Intents" 
 slug: "yes-no-intents" 
 hidden: false 
---

# Yes/No Intents

The **Yes/No Intents** feature enables machine learning to determine `yes` and `no` confirmations similar to regular intent matching. That allows a small set of example sentences to train a model capable of understanding various `yes` and `no` confirmation phrases, introducing a more fluent natural language experience.

In the previous **Confirmation words** feature, you have a low range of `yes,` and `no` variations, and you have to customize this by manually adding a list of synonyms. With the **Yes/No Intents** feature, you have a preinstalled vocabulary with the opportunity to add new words, which helps a virtual agent recognize different variations of `yes` and `no` intents.

Before using Yes/No Intents:

```txt
User: Hello! 
Virtual agent: Welcome to the Star Wars quiz!
Virtual agent: Was Darth Vader once known as Anakin Skywalker?
User: Certainly
Virtual agent: Not sure I understood this correctly. Try again.
```

After using Yes/No Intents:

```txt
User: Hello! 
Virtual agent: Welcome to the Star Wars quiz!
Virtual agent: Was Darth Vader once known as Anakin Skywalker?
User: Certainly
Virtual agent: That's right, Anakin Skywalker was known as Darth Vader.
```

## How to set up

1. Select a proper locale or use a default one.
2. Choose whether you want to use local for a specific flow o for all flows. You can use this feature for a specific flow or for all flows in the virtual agent project.
3. Test your flow by using Iteraction Pannel


### Select locale

There are three levels of settings for Yes/No Intents, as described in the following subsections.
Localization

A separate Yes/No Intents model is trained for each locale configured for the project. Therefore, the Yes/No Intents training is configured separately for each locale. 

1. To see the project's configured locales, click **Manage > Localization**.
2. Select a locale and click ![clock](images/icons/vertical-ellipsis.svg) > **Edit Yes/No Intents**.
3. In the pane, you can configure intents for the current locale:
      - Yes Intent - by default, the setting is toggled on.
      - No Intent - by default, the setting is toggled on. 
      - Reject Intent - the setting is toggled on.
