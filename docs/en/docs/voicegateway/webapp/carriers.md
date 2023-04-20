---
 title: "Carriers" 
 slug: "vg-webapp-carriers" 
 hidden: true 
---

# Carriers

*Carriers* allow you to connect your SIP Trunk with Voice Gateway. 

There are two options on how the SIP Trunk can be added:

- by going through the form and filling out all the fields.
- by clicking **Select a predefined carrier** and selecting one of the pre-configured carriers. That will pre-fill all the fields with standard values.

!!! warning
    Users with an Account scope can only edit carriers they have created, as well as carriers created by other users with the same scope. They can still use and view carriers shared by Service providers or Admins.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-carriers.png"  width="100%" />

## Settings

<div class="divider"></div>

| Settings                    | Description                                                                                        | Scope                           |
|-----------------------------|----------------------------------------------------------------------------------------------------|---------------------------------|
| Name                        | SIP Trunk Name.                                                                                    | Account, Service Provider, Admin |
| Select a predefined carrier | Pre-configured list of SIP Trunks.                                                                 | Account, Service Provider, Admin |
| Active                      | Enable or disable the carrier.                                                                     | Account, Service Provider, Admin |
| E.164 Syntax                | Defines a general format for international telephone numbers.                                      | Account, Service Provider, Admin |
| Outbound Authentication     | Using a username and a password for the authentication.                                            | Account, Service Provider, Admin |
| Prefix                      | Is used to match a specific pattern of digits in the dialed number and route the call accordingly. | Account, Service Provider, Admin |
| SIP Diversion Header        | Means a header used to support PSTN redirecting services such as Call Forwarding.                  | Account, Service Provider, Admin |
| SIP Gateways                | Add the Network Address / Port / Netmask of your carrier.                                          | Account, Service Provider, Admin |

