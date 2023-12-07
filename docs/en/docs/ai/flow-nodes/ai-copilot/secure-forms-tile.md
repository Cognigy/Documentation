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

This Node creates a widget in the AI Copilot workspace for requesting credit-card information securely from an end user. Once integrated into a workspace, human agents will have the ability to request credit-card information from end-users by providing a pre-built xApp which let's the end-user enter credit-card information in a graphical way.

Any credit-card information will be stored securely within our secure forms product which has been PCI certified.

The Node must be integrated into the AI Copilot Flow, requiring only the Tile ID for configuration.

## Settings

| Parameter                | Type          | Description                                                                                                                                    |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID                  | CognigyScript | The ID that you created in the Agent Assist configuration.                                                                                     |

## Use Case

The usage scenario from the user's perspective is as follows:

1. A human agent initiates the process by clicking a button in the AI Copilot widget.
2. The end user (cardholder) receives a link to an xApp which will show a credit-card form. The end-user can enter credit-card data and submit it. The data will be stored in our PCI certified secure forms application and the human agent will receive a notification that the data has been stored.
3. The human agent needs to ask the end-user for a passphrase which the end-user has received after submitting the credit-card data. The human agent can unlock and read respective data via the passphrase.

## More Information

- [PCI Vault](../../../pci-vault/overview.md)