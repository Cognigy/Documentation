---
title: "Outbound Call Routing"
slug: "outbound-call-routing"
description: "Voice Gateway Outbound Call Routing lets you choose a SIP trunk for outbound calls and set up specific rules for call routing."
hidden: false
---

# Outbound Call Routing

_Outbound Call Routing_ allows you to select a [carrier](carriers.md) (SIP trunk) for outbound calls and configure specific rules for call routing.

## How it Works

When a user initiates an outbound call, the Outbound Call Routing feature determines the preferred carrier (SIP trunk) to use based on the following cases:

- **Caller's phone number registered in Voice Gateway**. If the caller's phone number is registered in Voice Gateway, the system will automatically use the SIP Trunk linked to that phone number for the outbound call.
- **Caller's phone number matches a created outbound routing rule**. If the caller's phone number matches one of the created rules, the system will use the SIP Trunk specified in the rule for the outbound call.
- **Caller's phone number does not match any rule**. If the caller's phone number does not match any created outbound routing rules, the system will randomly select one of the available SIP Trunks to route the outbound call.

## Configure Outbound Routing Rules

Before configuring the outbound routing rules, ensure that the **Outbound** option is activated in the **SIP Gateways** settings of the carrier.

To set up a rule for outbound calls, follow these steps:

1. In the left-side menu of the Cognigy Voice Gateway Self-Service Portal, select **Outbound Call Routing**. 
2. On the **Outbound Call Routing** page, click **Add outbound call routes**. 
3. On the **Add Outbound Call Routing** page, in the Name field, specify a unique name that complies with the requirements for your rule. 
4. Enable the **Active** setting to start applying this rule. If you want to save this rule as a draft, deactivate this setting. 
5. Select a default outbound carrier through which the outbound calls will route when no rules are applied. 
6. Select accounts to which the rule should belong from the Used by list. By default, All accounts are selected. 
7. In the **Route based on first match** section, configure a set of rules:
    - **Digit pattern** — specify a code number of the country, for example, 49 for Germany, 46 for Sweden, or 1 for the United States.<br>If you need to capture a specific area, you can also use a regular expression (regex). For example, `^\d{2}41\d{8}` maps only Brazilian numbers with the country code `55` and area code `41`, which covers several cities in Brazil. Alternatively, using the digit combination `5541` gives the same mapping result.
    - **Carrier** — select a carrier from the list.
8. Click **Save**.

The rule will be applied.

You create multiple rules and assign the same carrier to several of them. 
These rules are applied in the sequence they are listed. 
The rule positioned at the top takes precedence, followed by the subsequent ones in order. 
To modify the order of the rules, hover over a rule, hold it, and move it to the desired position.


