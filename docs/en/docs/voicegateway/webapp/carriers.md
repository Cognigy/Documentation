---
title: "Carriers" 
slug: "vg-webapp-carriers"
hidden: false 
---

# Carriers

[![Version badge](https://img.shields.io/badge/Updated in-v4.69-blue.svg)](../../release-notes/4.69.md)

*Carriers* allow you to connect your SIP Trunk with Voice Gateway. 

There are two options on how the SIP Trunk can be added:

- by going through the form and filling out all the fields.
- by clicking **Select a predefined carrier** and selecting one of the pre-configured carriers. That will pre-fill all the fields with standard values.

!!! warning
    Users with an Account scope can only edit carriers they have created, as well as carriers created by other users with the same scope. They can still use and view carriers shared by Service providers or Admins.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-carriers.png"  width="100%" />

## Settings

<div class="divider"></div>

| Settings                    | Description                                                                                                                                                                                                 | Scope                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Register status             | The current registration state of the Voice Gateway Carrier (client) with the SIP trunk provider (server). <br> This option is activated if ypu set up [Outbound Authentication](#outbound-authentication). | Account, Service Provider, Admin |
| Name                        | SIP Trunk Name.                                                                                                                                                                                             | Account, Service Provider, Admin |
| Select a predefined carrier | Pre-configured list of SIP Trunks.                                                                                                                                                                          | Account, Service Provider, Admin |
| Active                      | Enable or disable the carrier.                                                                                                                                                                              | Account, Service Provider, Admin |
| E.164 Syntax                | Defines a general format for international telephone numbers.                                                                                                                                               | Account, Service Provider, Admin |
| Outbound Authentication     | Using a username and a password for the [authentication](#outbound-authentication).                                                                                                                         | Account, Service Provider, Admin |
| Prefix                      | Is used to match a specific pattern of digits in the dialled number and route the call accordingly.                                                                                                         | Account, Service Provider, Admin |
| SIP Diversion Header        | Means a header used to support PSTN redirecting services such as Call Forwarding.                                                                                                                           | Account, Service Provider, Admin |
| SIP Gateways                | Add the Network Address / Port / Netmask of your carrier. You can select the direction of calls: Outbound, Inbound, or both.                                                                                | Account, Service Provider, Admin |

## Outbound Authentication

_Outbound authentication_ is helpful in SIP setups where security and access control are crucial.
It prevents unauthorized users from initiating calls or accessing SIP servers.

The process of authentication in SIP involves verifying the identity of the Voice Gateway Carrier (client) as it attempts to access the [SIP trunk provider](../references/sip-trunk-providers.md) (server). This access includes registering with a SIP server and initiating calls.

To set up the outbound authentication process, follow these steps:

1. Open the Cognigy Voice Gateway Self-Service Portal. 
2. In the left-side menu, select **Carriers**. 
3. Go to the **Outbound Authentication** section and activate its setting.
4. Fill in the following fields:
    - **Username** — the name of the user required for outbound call authentication.
    - **Password** — the user password required for outbound call authentication.<br> These credentials are used by the SIP client to authenticate with the SIP trunk provider when making outbound calls.
5. Activate the **Require SIP Register** setting. This setting indicates whether the SIP trunk provider requires SIP registration before allowing outbound calls. SIP registration is the process where the SIP client registers its location and availability with the SIP server.
6. In the **SIP Realm** field, specify the domain associated with the SIP server's, for example, `sip.nexmo.com`.
7. _(Optional)_ In the **SIP From User** field, specify the user of the SIP From header, indicating the message's sender. This field can contain the name or telephone number of the Voice Gateway Carrier.
8. _(Optional)_ In the **SIP From Domain** field, specify the domain of the SIP From header, indicating the message's sender. This field can contain the domain of your Voice Gateway installation.
9. Activate the **Use Public IP in Contact** field to determine whether to use the public Voice Gateway IP address when establishing contact with the SIP server. The public address will be transferred in the Contact header field.
10. Click **Save**. 
11. At the top of the **Edit carrier** page, check whether the connection is established. If the registration is successful, you will see the Register status `200` and a `.pcap` file.