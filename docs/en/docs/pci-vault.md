---
title: "PCI Vault"
slug: "pci-vault"
hidden: false
---

# PCI Vault

_PCI DSS_ (Payment Card Industry Data Security Standard) establishes a comprehensive framework of requirements to protect cardholder data. These mandatory standards apply to all entities engaged in processing data from major payment systems such as Visa, MasterCard, American Express, and JCB.

To enable our clients to use the capability for virtual agents to process payment card data with a proven and reliable security system, we have developed the _PCI Vault_ service.

The PCI Vault application is a specialized solution designed for contact center staff to securely collect confidential information from end users, including credit card details. PCI Vault is a shared Software as a Service (SaaS) product and can be utilized only if you have shared or dedicated SaaS Cognigy installations.

Cognigy's PCI Vault is extensively audited to meet PCI standards, ensuring strict adherence to PCI DSS guidelines.
In the Cognigy Trust Center, you can view our [PCI DSS v3.2.1 compliance certificate](https://trust.cognigy.com/overview/05e85d7e-e354-413e-853f-a95b217c0e85/pci-dss),
showcasing our commitment to top-notch security.

## Architecture

The PCI Vault application is hosted within a dedicated AWS (Amazon Web Services) account,
a strategic choice
that enhances security by minimizing the potential attack surface and isolating PCI Vault from other systems.
Within PCI Vault, two key components are crucial: `service-secure-forms`,
which is responsible for managing external interactions, and `Redis`, which is dedicated to in-memory storage.
The application ensures an extra layer of security through the Advanced Encryption Standard (AES),
making it a robust solution for managing and safeguarding sensitive payment-related information.

The image below represents a high-level interaction diagram with PCI Vault.
The PCI Vault interacts with components of the Cognigy.AI system, the contact center, as well as end users.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/pci-dss.png"/>
</figure>

High-level description of the process:

1. End user initiates a conversation with the virtual agent, expressing the intent to make a payment.
2. Virtual agent detects the user's handover request and triggers a handover to the contact center using Cognigy Runtime components.
3. Human agent in the contact center receives the handover and engages with the user.
4. Human agent requests a payment link using the AI Copilot UI.
5. A POST API call is made to the secure-forms backend via Cognigy Runtime to generate a unique ID and link for the secure payment form.
6. Cognigy service-app-session-manager transmits the unique ID to the end user.
7. End user accesses the secure form through the provided link and enters sensitive payment information.
8. API call to the secure-forms backend for form storage; form fields are AES encrypted using a symmetric encryption key from a Kubernetes secret.
9. Credit card credentials are temporarily stored in Redis for the duration of the transaction for security.
10. PIN is generated and returned to the end user.
11. End user provides the PIN to the human agent via chat. 
12. Human agent uses the PIN as an authentication token and requests clear-text data from secure-forms backend.

Secure-forms backend verifies the PIN and checks the transaction status;
if correct and the status is valid, it returns the actual clear-text form to the human agent.
Then, human agent processes the payment or addresses further user queries related to the transaction.

## How to Configure

### Prerequisites

- A main Flow is created with a Handover to the Agent Node.
- AI Copilot is configured in a separate Flow.
- Contact Center Integration is set up. For example, Live Agent is selected as a handover provider.
- An Endpoint is created. It should include the Main Flow, Handover Provider, and the flow for AI Copilot.



