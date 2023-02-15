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

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-carriers.png"  width="100%" />

## Settings

<div class="divider"></div>

| Settings         | Description                                               |
| ---------------- | --------------------------------------------------------- |
| Name             | SIP Trunk Name.                                            |
| Select a predefined carrier| Pre-configured list of SIP Trunks.               |
| Active           | Enable or disable the carrier.                             |
| E.164 Syntax     | Defines a general format for international telephone numbers.|
| Outbound Authentication|  Using a username and a password for the authentification.|
| Prefix | Is used to match a specific pattern of digits in the dialed number and route the call accordingly.|
| SIP Diversion Header| Means a header used to support PSTN redirecting services such as Call Forwarding.|
| SIP Gateways | Add the Network Address / Port / Netmask of your carrier. |
