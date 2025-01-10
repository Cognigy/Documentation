---
title: "Migration from v2 to v3"
slug: "migration-to-v3"
description: "Upgrade from Cognigy Webchat v2 to v3. Discover the improvements with our comprehensive comparison table highlighting key changes between chat versions. Use a step-by-step guide to seamlessly transition to the latest version."
hidden: false
---

# Migration From v2 to v3

{! _includes/webchat/deprecation-webchat-v2.md !}

The page includes a comparative table outlining the key changes between chat versions to assist you in migration to Webchat v3.

When migrating from Webchat v2 to v3, extensive testing is highly recommended. If you encounter any issues with v3, such as a feature you use not being supported in the new version or functionality not working as expected, contact [Cognigy technical support](../help/get-help.md).

## Feature Comparison

In the table, learn about the key differences between Webchat version 2 and version 3.
Features that are not available for any of the versions are marked as N/A (Not applicable).

| Feature                | v2 (Deprecated)                                                                                                                                                          | v3                                                                                                                                                                                           |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Webchat Design         | Basic design requiring additional CSS customization.                                                                                                                     | Enhanced design aligned with contemporary design principles and trends.                                                                                                                      |
| Plugin Compatibility   | Compatible with all plugins from Cognigy plugin collection.                                                                                                              | May not Compatible with all plugins from Cognigy plugin collection.                                                                                                                          |
| Embedding              | Includes all settings that Webchat Endpoint has.                                                                                                                         | Includes all settings that Webchat v3 Endpoint has.                                                                                                                                          |
| Demo Webchat           | Standard Demo Webchat.                                                                                                                                                   | Updated Demo Webchat according to the new Webchat v3 interface.                                                                                                                              |
| Endpoint Settings Menu | Basic menu with limited navigation.                                                                                                                                      | Updated menu with organized sections for easier navigation.                                                                                                                                  |
| Webchat Layout         | Standard set for customizing Webchat colors.                                                                                                                             | Advanced set for customizing Webchat colors.                                                                                                                                                 |
| Conversation Starters  | N/A; there is a simplified alternative, the Persistent Menu.                                                                                                             | You can use conversation starters to engage visitors with a teaser message, either as an introduction on the home screen.                                                                    |
| Teaser Message         | Simplified version with the option to specify only the Teaser Message Text.                                                                                              | Enhanced Teaser messages with ability to add Conversation Starters.                                                                                                                          |
| Conversation Rating    | The rating is displayed directly on the agent chat page.                                                                                                                 | The rating is displayed on a separate page in the chat options, allowing users to continue the conversation and evaluate it at any time during the session.                                  |
| Chat Options screen    | N/A                                                                                                                                                                      | Implemented a new Chat Options screen offering the ability to modify the page title, add quick replies, enhance conversation rating, and include a footer.                                   |
| Privacy Notice screen  | N/A                                                                                                                                                                      | Added the option to include a privacy notice screen containing notice text, title, submit button, and references to the privacy policy document.                                             |
| Home screen            | N/A                                                                                                                                                                      | Introduced a new Home screen, allowing customization of the welcome message, background color, and image, along with options to add conversation starters and enable previous conversations. |
| Chat History screen    | N/A; there is a simplified alternative, the Persistent History in the [embedding code](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md). | Enabled access to view conversations on the new screen via navigation from the home screen.                                                                                                  |
| xApp Overlay           | N/A                                                                                                                                                                      | Enabled opening xApp pages directly within the Webchat v3 interface.                                                                                                                         |
| Collect Metadata       | N/A                                                                                                                                                                      | Added the option to collect extra user data, such as language, location, device, and browser type.                                                                                           |
| RTL Support            | The configuration is possible but officially unsupported.                                                                                                                | Full RTL support.                                                                                                                                                                            |

## How to Migrate

For a smooth migration, follow these steps:

1. Upgrade to Cognigy.AI version 4.72 or later.
2. Create a [Webchat v3 Endpoint](v3/configuration.md) in Cognigy.AI.
3. Manually transfer the settings from the old Webchat Endpoint to the Webchat v3 Endpoint.
4. Update your embedding code according to the new [Embedding](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md) specification:
    - Replace the old bundle link with a new bundle for Webchat v3.
    - Within the `initWebchat()` function replace the old Endpoint Config URL with a new Webchat v3 Endpoint Config URL.
    - If you configure Webchat settings in the `initWebchat()` function, replace them with the [new ones](https://github.com/Cognigy/Webchat/blob/main/docs/embedding.md#client-side-configuration) according to the new Webchat v3 Endpoint settings structure.
5. Locally build Webchat and verify that everything functions as expected.
6. Publish Webchat on your website.

## More Information

- [Webchat v3: Embedding](v3/embedding.md)
- [Webchat v3](v3/overview.md)
- [Webchat v2](v2/overview.md)