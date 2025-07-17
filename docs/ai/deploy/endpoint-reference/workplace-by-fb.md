---
title: "Workplace by Facebook (Meta)" 
slug: "workplace-by-fb"
description: "The WhatsApp Endpoint enables you to connect AI Agents to the Workplace platform."
hidden: false
tags:
   - workplace
   - workplace endpoint
   - workplace by facebook
   - workplace from meta
---

# Workplace by Facebook

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/workplace.png" width="100%" />
</figure>

!!! warning
    From September 1, 2025, to May 31, 2026, Workplace will be in read-only mode for viewing and downloading data. Workplace will be shut down on [June 1, 2026](https://www.workplace.com/help/work/1167689491269151). Ensure you migrate to an alternative service and a different Cognigy.AI endpoint before that date.

The WhatsApp Endpoint enables you to connect AI Agents to the [Workplace](https://www.workplace.com/) platform.

## Prerequisites

- A Workplace account at [workplace.com](https://www.workplace.com/).
- Admin access to the Workplace Admin Panel.

## Restrictions

- The Workplace by Facebook Endpoint is available only on app.cognigy.ai and dedicated environments.

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

### Workplace Settings

??? info "Workplace Setup"
    | Parameter          | Description                                                                                                                                              |
    |--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Recipient ID       | The ID from the URL of a conversation with your Workplace bot. It must be added after the bot has been installed in your Workplace instance.             |

## How to Set Up

### Setup on the Workspace Side

??? info "Create a Workplace"
    1. Go to workplace.com and set up a Workplace. 
    2. After adding the Cognigy bot, go to the Admin Panel in Workplace. 
    3. In the left-side menu, click **Integrations**. 
    4. Confirm the bot appears under **Added to Workplace > Added By Your Company**. 
    5. On the Workplace Home screen, scroll to the Bots section to locate your Cognigy.AI bot. 
    6. Start a conversation with the bot and copy the `Recipient Id` from the top bar.

### Setup on the Cognigy.AI Side

??? info "Create a Workplace Endpoint"
    1. In the left-side menu of the Cognigy.AI Project, go to **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Workplace** Endpoint type.
        2. Add a unique name.
        3. Select a relevant Flow from the list.
    4. In the **Workplace Settings** section, click **Install**. 
    5. In the window, review the Cognigy.AI Terms of Service and Privacy Policy.
    6. _(Optional)_ Click **Customize** to modify **Integration Name** and **Description**.
    7. _(Optional)_ Select **Specific groups** to restrict the bot to certain group chats. 
    8. Click **Add to Workplace** to integrate the bot. 
    9. Paste the copied `Recipient Id` into the **Workplace Recipient Id** field. Save changes.

## More Information

- [Help Center: Workplace by Facebook Deploy an Endpoint](https://support.cognigy.com/hc/en-us/articles/360016310379)