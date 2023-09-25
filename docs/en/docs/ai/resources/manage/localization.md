---
title: "Localization" 
slug: "localization" 
hidden: false 
---

# Localization

Cognigy.AI offers a robust Localization feature for easy customization and content reuse.

With the Localization view, you can configure multiple localizations. If one Locale doesn't have content configured, the system automatically falls back to another Locale that does.

When setting up an Agent, you must select the primary locale, which serves as the initial language for creating content for your virtual agent. While you can later add more locales for content localization, it's important to note that you cannot modify the primary locale once it's chosen.

You can localize your Flow two ways:

- [Manually](#manual-localization)
- [Automatically](../../tools/auto-localization.md)

## Manual Localization

### Using localization in Flows

Localizations act as groupings of specific content and can be applied in [Flows](../../resources/build/flows.md) by using the Localization drop-down functionality.

When switching Localization, the Flow will change its appearance. **Greyed out** Nodes indicate that they have not been localized yet. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/8c88b22-localization-inflows-compare.jpg" width="100%" />
</figure>

!!! tip "Switch Locale during a conversation"
    It is possible to change the locale of a Flow during a conversation
by using the [Switch Locale](../../flow-nodes/logic/switch-locale.md) Node.

### Add a Locale to a Node

When a different Locale is activated in the Flow (by using the drop-down at the top), individual [**Flow Nodes**]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/) can be overwritten with a specific Locale.

This can be done by click on a specific Node and then selecting **Add Localization** at the top of a Node. As soon as a localization has been added, the Node will be colored again in the Flow Chat, indicating that a localization has taken place.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/a6dac29-localization-inflows-node.jpg" width="100%" />
</figure>
