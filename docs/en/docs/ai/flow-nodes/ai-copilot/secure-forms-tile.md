---
title: "Copilot: SecureForms Tile"
slug: "secure-forms-tile"
hidden: true
---

# Copilot: SecureForms Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/secure-forms.png" width="80%"/>
</figure>

## Description

This Node creates a widget in the AI Copilot workspace for safely entering card details by the end user.

The Node must be integrated into the AI Copilot Flow, requiring only the Tile ID for configuration.

## Settings

| Parameter                | Type          | Description                                                                                                                                    |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID                  | CognigyScript | The ID that you created in the Agent Assist configuration.                                                                                     |

## Use Case

The usage scenario from the user's perspective is as follows:

1. A human agent initiates the process by clicking a button in the AI Copilot widget.
2. The end user (cardholder) receives a link via conversation chat, opens it in a new browser window, and completes the card form.
3. The human agent needs to ask the end-user for a passphrase which the end-user has received after submitting the credit-card data. The human agent can unlock and read respective data via the passphrase.

## More Information

- [PCI Vault](../../../pci-vault/overview.md)