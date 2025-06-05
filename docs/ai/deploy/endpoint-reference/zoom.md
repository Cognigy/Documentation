---
title: "Zoom Contact Center"
slug: "zoom-contact-center"
description: "The Zoom Contact Center Endpoint enables you to connect your AI Agent to the Zoom Contact Center platform."
hidden: false
tags:
  - zoom
  - zoom contact center
  - zoom contact center endpoint
---

# Zoom Contact Center

[![Version badge](https://img.shields.io/badge/Added in-v2025.12-blue.svg)](../../../release-notes/index.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/zoom.svg" width="80%" />
</figure>

The Zoom Contact Center Endpoint enables you to connect your AI Agent to the [Zoom Contact Center platform](https://www.zoom.com/en/products/contact-center/).

## Prerequisites

- Access to [the Zoom Contact Center platform](https://www.zoom.com/en/products/contact-center/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)

## Specific Endpoint Settings

### Zoom Contact Center Settings

| **Parameter** | **Description**                                                                                                                                                                                                                  |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Verify Token  | A secret token defined in the Zoom Contact Center integration to ensure secure communication between Zoom and Cognigy.AI. You can obtain this token from your Zoom admin or support representative during the integration setup. |

## How to Set up

### Setup on the Zoom Contact Center Side

Contact your Zoom representative or support to provide you with the Verify Token (secret token) and further instructions on how to set up the integration on the Zoom Contact Center side.

### Setup on the Cognigy.AI Side

1. In the left-side menu of your Project, click **Deploy > Endpoints**.
2. On the **Endpoints** page, click **+ New Endpoint**.
3. In the **New Endpoint** section, do the following:
    1. Select the **Zoom Contact Center** Endpoint type.
    2. Specify a unique name.
    3. Select a relevant Flow from the list and save changes.
4. In the Endpoint settings, go to the **Zoom Contact Center Settings** section.
5. In the **Verify Token** field, enter the token that Zoom support provided your previously.
6. Save changes, then verify the integration with your Zoom representative or support to finalize the setup.

## More Information

- [Overview](overview.md)
- [Zoom Contact Center Documentation](https://support.zoom.com/hc/en/category?id=kb_category&kb_category=1e16b2d68720391089a37408dabb3553)
- [Zoom Marketplace](https://marketplace.zoom.us/)
