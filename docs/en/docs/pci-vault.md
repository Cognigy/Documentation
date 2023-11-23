---
title: "PCI Vault"
slug: "pci-vault"
hidden: false
---

# PCI Vault

_PCI DSS_ (Payment Card Industry Data Security Standard) establishes a comprehensive framework of requirements to protect cardholder data. These mandatory standards apply to all entities engaged in processing data from major payment systems such as Visa, MasterCard, American Express, and JCB.

To enable our clients to use the capability for virtual agents to process payment card data with a proven and reliable security system, we have developed the _PCI Vault_ service.

The PCI Vault application, offered exclusively as a shared Software as a Service (SaaS) product, is a specialized solution for contact center staff to securely collect confidential information from end-users, including credit card details.

PCI Vault by Cognigy has undergone a rigorous audit to comply with PCI standards, ensuring full adherence to PCI DSS standards. Our possession of a certificate of compliance with PCI DSS v3.2.1 underscores our commitment to maintaining the highest security standards.

## How it Works

1. The user initiates the conversation. 
2. The Human Agent receives a tile with the Start Payment Process button in the Agent Assist Workspace. 
3. The Human Agent clicks on this button, and the user receives a link to enter their card details. (Specify how they receive it.)
4. The user enters their card information. 
5. After inputting the information, the user receives a secret code.
6. The user shares the code with the human agent. 
7. The human agent enters this code into the request window on the Agent Assist Workspace. 
8. The human agent receives the card details in the Agent Assist Workspace. If the agent switches to another conversation, the data immediately disappears.

## Architecture
