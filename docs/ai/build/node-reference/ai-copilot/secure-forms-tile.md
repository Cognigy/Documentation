---
title: "Copilot: SecureForms Tile"
slug: "secure-forms-tile"
hidden: true
---

# Copilot: SecureForms Tile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/secure-forms.png" width="50%"/>
</figure>

## Description

This Node creates a widget in the AI Copilot workspace to securely request an end user's credit card information.
Once the SecureForms widget is integrated into the workspace,
human agents can request credit card information from end users by providing a pre-built xApp,
allowing the end user to enter credit card information in a graphical way.

Any credit card information will be securely stored within the [Cognigy PCI Vault](../../../../pci-vault/overview.md) product, which is PCI-certified.

The Node must be integrated into the AI Copilot Flow, requiring only the Tile ID for configuration.

## Parameters

| Parameter | Type          | Description                                              |
|-----------|---------------|----------------------------------------------------------|
| Tile ID   | CognigyScript | The ID that you created in the AI Copilot configuration. |

## Use Case

The usage scenario from the user's perspective is as follows:

1. A human agent initiates the process by clicking a button in the AI Copilot widget.
2. The end user (cardholder) receives a link to an xApp that displays a credit card form. The end user can then enter credit card data and submit it. The data will be securely stored in the Cognigy PCI Vault application, and the human agent will receive a notification confirming the successful storage of the data.
3. The human agent needs to request a PIN from the end user, which the end user has received after submitting the credit card data. The human agent can use the PIN to unlock and access the respective data.

## More Information

- [PCI Vault](../../../../pci-vault/overview.md)