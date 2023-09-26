---
title: "Localization" 
slug: "localization" 
hidden: false 
---

# Localization

Cognigy.AI offers a robust Localization feature for easy customization and content reuse.

With the Localization view, you can configure multiple localizations. If one Locale doesn't have content configured, the system automatically falls back to another Locale that does.

When setting up an Agent, you must select the primary locale, which serves as the initial language for creating content for your virtual agent. While you can later add more locales for content localization, it's important to note that you cannot modify the primary locale once it's chosen.

You can localize your Flow in two ways:

- [Manually](#manual-localization)
- [Automatically](../../tools/auto-localization.md)

## Manual Localization

### Add a Locale

{! _includes/ai/localization/add-locales.md !}

### Localize a Flow

1. Go to the existing Flow by selecting **Build > Flows**.
2. In the upper-left corner of the Flow editor, select a locale that you recently created. 

When switching localization, the flow will change its appearance.
Greyed-out Nodes indicate that they have not been localized yet. Now you need to localize each node separately.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/compare-localization-in-flows.jpg" width="100%" />
</figure>

!!! tip "Switch Locale during a conversation"
    It is possible to change the locale of a Flow during a conversation by using the [Switch Locale](../../flow-nodes/logic/switch-locale.md) Node.

### Add a Locale to a Node

To localize a Node manually, follow these steps:

1. In the Flow editor, select a Node that you want to localize.
2. If the Node is not localized yet, click **Add Localization** in the Node editor. If the Node was localized before, delete a previous localization by clicking [vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Remove Localization**.
3. Select one of the following options:
    - **Add Empty Localization** — create a new localization for the selected node without any content. It's useful when you want to start fresh and provide a new translation or content for a specific node.
    - **Copy from** — copy the content from an existing localization of the same node or another source. This is helpful when you want to reuse or duplicate content from a different localization.
    - Add Translated Localization — add a new localization to the Node with translated content by using [auto-translation](../../tools/auto-localization.md) option.
4. Fill in the corresponding fields with text that matches the selected localization.
5. Click **Save Node**.

### Add a Locale to an Intent

To localize an Intent, follow these steps:

1. In the Flow editor, select NLU in the upper-right corner.
2. On the **Intents** tab, select an Intent that you want to localize.
3. On the Intent page, click **Add Localization**. If the Intent was localized before, delete a previous localization by clicking [vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Remove Localization**.
4. Select one of the following options:
    - Add Empty Localization — create a new localization for the selected Intent without any content. It's useful when you want to start fresh and provide a new translation or content for a specific Intent.
    - Copy from — copy the content from an existing localization of the same Intent or another source. This is helpful when you want to reuse or duplicate content from a different localization.
    - Add Translated Localization — add a new localization to the Node with translated content by using [auto-translation](../../tools/auto-localization.md) option.
5. Click **Build model**.
6. Click **Save**.

## Add a Locale to Multiple Intents

To localize all Intents within your Flow using machine translation, follow these steps:

1. In the Flow editor, select NLU in the upper-right corner.
2. On the **Intents** tab, on the right side of the **+ Create Intent** button, click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Add Localisations to all Intents**.
3. In the **Add Localizations to all Intents** window, select one of the following options:
   - Create empty — create a new localization for the selected Intent without any content. It's useful when you want to start fresh and provide a new translation or content for a specific Intent.
   - Copy from another locale — copy the content from an existing localization of the same Intent or another source. This is helpful when you want to reuse or duplicate content from a different localization.
   - Auto-Translate from another locale - add a new localization to the Node with translated content by using [auto-translation](../../tools/auto-localization.md) option.
4. _(Optional)_ Activate the **Overwrite already localized Intents** setting to apply changes to all existing intents within the current Flow locale.
6. Click **Build model**. 
7. Click **Save**.

## More information

- [Automatic Translation](../../tools/auto-localization.md)