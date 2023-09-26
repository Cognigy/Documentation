---
title: "Localization" 
slug: "localization" 
hidden: false 
---

# Localization

Cognigy.AI offers a robust Localization feature for easy customization and content reuse.

With the localization view, you can configure multiple locales.
If one locale doesn't have content configured, the system automatically falls back to another locale that does.

While you can add additional locales for content localization later on, note that once the primary locale is selected, it cannot be modified.

You can localize your Flow in two ways:

- [Standard Localization](#standard-localization)
- [Localization with machine translation](../../tools/auto-localization.md) (provider credentials are required)

## Standard Localization

Within standard localization, you manually localize Nodes and Intents without the use of machine translation.

### Add a Locale to an Agent

{! _includes/ai/localization/add-locales.md !}

### Localize a Flow

1. Go to the existing Flow by selecting **Build > Flows**.
2. In the upper-left corner of the Flow editor, select a locale that you recently created. 

When switching localization, the Flow will change its appearance.
Greyed-out Nodes indicate that they have not been localized yet. 

{! _includes/ai/localization/switch-a-locale.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/compare-localization-in-flows.jpg" width="100%" />
</figure>

Now you need to localize each Node separately.

#### Add a Locale to a Node

To localize a Node manually, follow these steps:

1. In the Flow editor, select a Node that you want to localize.
2. If the Node is not localized yet, click **Add Localization** in the Node editor. If the Node was localized before, delete a previous localization by clicking ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) **> Remove Localization**.
3. Select one of the following options:
    - **Add Empty Localization** — create a new locale for the selected Node without any content. It's useful when you want to provide a new translation or content for a specific Node.
    - **Copy from** — copy the content from an existing locale of the same Node or another source. It's useful when you want to reuse or duplicate content from a different locale.
4. Fill in the corresponding fields with text that matches the selected locale.
5. Click **Save Node**.

#### Add a Locale to an Intent

To localize an Intent, follow these steps:

1. In the upper-right corner of the Flow editor, select **NLU**.
2. On the **Intents** tab, select an Intent that you want to localize.
3. On the **Intent** page, click **Add Localization**. If the Intent was localized before, delete a previous locale by clicking ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) **> Remove Localization**.
4. Select one of the following options:
    - **Add Empty Localization** — create a new locale for the selected Intent without any content. It's useful when you want to provide a new translation or content for a specific Intent.
    - **Copy from** — copy the content from an existing locale of the same Intent or another source. It's useful when you want to reuse or duplicate content from a different locale.
5. Click **Build model**.
6. Click **Save**.

#### Add a Locale to Multiple Intents

To localize all Intents within your Flow, follow these steps:

1. In the upper-right corner of the Flow editor, select **NLU**.
2. On the **Intents** tab, on the right side of the **+ Create Intent** button, click ![vertical-ellipsis](../../../assets/icons/vertical-ellipsis.svg) **> Add Localisations to all Intents**.
3. In the **Add Localizations to all Intents** window, select one of the following options:
    - **Create empty** — create a new locale for the selected Intent without any content. It's useful when you want to provide a new translation or content for Intents.
    - **Copy from another locale** — copy the content from an existing locale of the same Intent or another source. It's useful when you want to reuse or duplicate content from a different locale.
4. _(Optional)_ Activate the **Overwrite already localized Intents** setting to apply changes to all existing Intents within the current Flow locale.
5. Click **Build model**. 
6. Click **Save**.

## More information

- [Automatic Translation](../../tools/auto-localization.md)
- [Switch Locale Node](../../flow-nodes/logic/switch-locale.md)