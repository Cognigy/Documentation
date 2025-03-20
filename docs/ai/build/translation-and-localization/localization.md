---
title: "Localization" 
slug: "localization" 
hidden: false
description: "Cognigy.AI offers a robust localization feature for easy customization and content reuse. You can configure multiple Locales and add localized content to your Flow. Alternatively, you can use machine translation to automatically translate content."
tags:
    - Translation
    - Localization
    - Locales
---

# Localization

Cognigy.AI offers a robust localization feature for easy customization and content reuse. You can configure multiple Locales and add localized content to your Flow. Alternatively, you can use [machine translation to automatically translate content](auto-translation.md). If one Locale doesn't have configured content, Cognigy.AI automatically falls back to another Locale.

## Restrictions

- You can't change the primary Locale after you've selected it.

## How to Use

=== "GUI"
    You can add, edit, and delete Locales in **Manage > Localization**. Also, you can copy their Reference ID.

=== "API"
    You can view, create, edit, and delete Locales using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--Locales-v2.0).

### Localize a Flow

You can localize [Nodes](../nodes/overview.md) and [Intents](../../empower/nlu/intents/ml-intents.md) in the [Flow editor](../flows/editor.md) after selecting a Locale in the top bar.

{! _includes/ai/localization/switch-a-locale.md !}

## More Information

- [Automatic Translation](auto-translation.md)
- [Switch Locale Node](../node-reference/logic/switch-locale.md)