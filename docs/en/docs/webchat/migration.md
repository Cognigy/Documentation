---
title: "Migration from v2 to v3"
slug: "migration-to v3"
description: ""
hidden: false
---

# Migration from v2 to v3

## Feature Comparison

In the comparison table, learn about the key differences between Webchat version 2 and version 3.

| Feature                | v2                                                         | v3                                                                                                                                                          |
|------------------------|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Webchat Design         | Initial design requiring additional UI/UX customization    | Enhanced webchat design aligned with contemporary design principles and trends.                                                                             |
| Plugin Compatibility   | Compatible with all plugins from Cognigy plugin collection | May not Compatible with all plugins from Cognigy plugin collection                                                                                          |
| Embedding              | Includes all settings that Webchat Endpoint has.           | Includes all settings that Webchat v3 Endpoint has.                                                                                                         |
| Demo Webchat           | Standard Demo Webchat                                      | Updated Demo Webchat according to the new Webchat v3 interface.                                                                                             |
| Endpoint Settings Menu | Basic menu with limited navigation                         | Updated menu with organized sections for easier navigation.                                                                                                 |
| Webchat Layout         | Standard set for customizing Webchat colors.               | Advanced set for customizing Webchat colors.                                                                                                                |
| Conversation Starters  | Not Applicable.                                            | You can use conversation starters to engage visitors with a teaser message, either as an introduction on the homepage.                                      |
| Conversation Rating    | The rating is displayed directly on the agent chat page.   | The rating is displayed on a separate page in the chat options, allowing users to continue the conversation and evaluate it at any time during the session. |

## How to Migrate

For a smooth migration, follow these steps:

1. Create a [Webchat v3 Endpoint](v3/configuration.md) in Cognigy.AI.
2. Manually transfer the settings from the old Webchat Endpoint to the Webchat v3 Endpoint.
3. Update your embedding code according to the new [Embedding](https://github.com/Cognigy/WebchatWidget/blob/v3/docs/embedding.md) specification.
4. Use the new bundle for Webchat v3 found on the GitHub Releases page in your embedding code.
5. Replace the old Endpoint Config URL in the embedding code with the new one from the Webchat v3 Endpoint.
