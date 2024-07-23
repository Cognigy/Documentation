---
title: "Carriers" 
slug: "vg-webapp-carriers"
hidden: false 
---

# Carriers

[![Version badge](https://img.shields.io/badge/Updated in-v4.80-blue.svg)](../../release-notes/4.80.md)

*Carriers* allow you to connect your SIP Trunk with Voice Gateway. 

There are two options on how the SIP Trunk can be added:

- by going through the form and filling out all the fields.
- by clicking **Select a predefined carrier** and selecting one of the pre-configured carriers. That will pre-fill all the fields with standard values.

!!! warning
    Users with an Account scope can only edit carriers they have created, as well as carriers created by other users with the same scope. They can still use and view carriers shared by Service providers or Admins.

<figure>
  <img class="image-center"  src="../../../_assets/voice-gateway/VG-webapp-carriers.png"  width="60%" />
  <figcaption>Carriers</figcaption>
</figure>

## Settings

| Settings                    | Description                                                                                                                                                                                                 | Scope                            |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Register status             | The current registration state of the Voice Gateway Carrier (client) with the SIP trunk provider (server). <br> This option is activated if ypu set up [Outbound Authentication](#outbound-authentication). | Account, Service Provider, Admin |
| Name                        | SIP Trunk Name.                                                                                                                                                                                             | Account, Service Provider, Admin |
| Select a predefined carrier | Pre-configured list of SIP Trunks.                                                                                                                                                                          | Account, Service Provider, Admin |
| Active                      | Enable or disable the carrier.                                                                                                                                                                              | Account, Service Provider, Admin |
| E.164 Syntax                | Defines a general format for international telephone numbers.                                                                                                                                               | Account, Service Provider, Admin |
| Outbound Authentication     | Using a username and a password for the [authentication](#outbound-authentication).                                                                                                                         | Account, Service Provider, Admin |
| Prefix                      | Is used to match a specific pattern of digits in the dialed number and route the call accordingly.                                                                                                         | Account, Service Provider, Admin |
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

## SIP Encryption for Outbound Calls

Voice Gateway supports various methods of encryption for outbound calls:

- **SIP over TLS**: the standard Session Initiation Protocol (SIP) is used for signaling and establishing VoIP calls and the SIP messages are encrypted with TLS. This provides a secure channel for the signaling information. SIP over TLS is often considered more flexible as it allows for the use of existing SIP infrastructure and clients with TLS capabilities.
- **SIPS**: SIPS is a URI scheme specifically designed for secure SIP communication. It indicates that the SIP signaling should be encrypted with TLS from the start. SIPS is simpler to set up as it's a dedicated scheme for secure SIP, but it might require more specific client and server configurations.
- **Crypto padding**: serves as an additional security layer when using SIP over TLS/SRTP. The **Pad crypto** option adds random strings of data to the encrypted voice packets, making them even harder to decrypt. Padding may make traffic analysis harder, as it obscures the actual size of the voice packets.

Before 4.80 release, all connections were encrypted with SIPS by default. Starting from release [4.80](../../release-notes/4.80.md), the users can choose whether they want SIP, SIP over TLS, or SIP over TLS with an additional SIPS encryption. All new carriers have SIP connection scheme by default. The existing carriers will retain their SIPS scheme.

To set up an SIP encryption, follow these steps:

1. Open the Cognigy Voice Gateway Self-Service Portal. 
2. In the left-side menu, select **Carriers**.
3. Select the carrier you want to use for outbound communication.
4. Go to the **SIP Gateways** section.
5. Select an existing gateway you want to use for outbound communication or create a new one by clicking <button class="btnty" type="button" title="Add SIP Gateway"><div class="ico ico--teal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fdb71e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div></button>.
6. Enter the Network Address.
7. Enter the Port number. The assigned Port is 5060 by default. For SIPS and SIP/TLS, set the Port to 5061.
8. Select the **Outbound** option.
9. Select from the available netmasks:

=== "UDP"
    - SIP over UDP. UDP doesn't require an established connection or authentication to send information. It's most suitable for video or audio streaming.
=== "TCP"
    - SIP over TCP. TCP requires a connection between the sender and the receiver. It's the most commonly used Internet protocol, facilitating e-mails, messaging and file transfer, among others.
=== "TLS"
    - SIP over TLS. TLS prevents third party eavesdropping and tampering with communication. The most common use for TLS is the HTTPS encryption.
    - The **Use sips scheme** setting will appear. Select this setting if you want to use the SIPS scheme.
=== "TLS/SRTP"
    - SIP over TLS/SRTP. This option provides TLS encryption to both the connection and the audio stream. 
    - The **Use sips scheme** setting will appear. Select this setting if you want to use the SIPS scheme.
    - The **Pad crypto** setting will appear. Select this setting if you want to add crypto padding to your connection.

Click **Save.**

To check the connection, make an outbound call. To check the encryption type, download the PCAP file, which can be found in **Recent Calls > Outbound Call > Details**.
