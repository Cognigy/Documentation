---
title: "Glossary"
slug: "glossary"
description: "Voice Gateway Glossary provides a reference for users, administrators, and anyone involved in the operation or understanding of Voice Gateway software and practices."
hidden:  false
---

# Voice Gateway Glossary

Voice Gateway terms listed in alphabetical order. All terms in the glossary are given for informational purposes.

## A

_**Account (scope)**_
: A user role (scope) within the Voice Gateway Self-Service Portal. This scope includes basic operations with Voice Gateway entities, such as creating, editing, and deleting entities. Note that only Users with the Account role can be authorized in the Voice Gateway Self-Service Portal via their Cognigy.AI user credentials.
For more information, read the [Users](webapp/users.md#account) documentation.

_**Accounts**_
: Containers for resources such as applications, carriers, and speech services that are used to create and manage voice applications.
In Voice Gateway, an Account may represent a specific customer organization and can have multiple users associated with it. For more information, read the [Accounts](webapp/accounts.md) documentation.

_**Admin (scope)**_
: A user role (scope) within the Voice Gateway Self-Service Portal. This scope is only available for on-premises Cognigy Voice Gateway installations. It includes all operations in the Account and Service Provider scopes, allowing for performing all operations in the Voice Gateway. For more information, read the [Users](webapp/users.md#admin) documentation.

_**Alerts**_
: Alerts are created when errors happen in your account configuration. For example, your credentials from the speech provider need to be updated. For more information, read the [Alerts](webapp/alerts.md) documentation.

_**Applications**_
: Connectors that allow the Endpoint to be routed to the Voice Gateway. For more information, read the [Applications](webapp/applications.md) and [Create Voice Gateway Endpoint](getting-started.md#create-a-voice-gateway-endpoint) documentation.

_**Atmosphere Sounds**_
: A parameter within the Session Config Node, which allows the user to configure a background track to be played during the conversation. An Atmosphere Sounds track can be played, silenced, or stopped at any point during the Voice Gateway conversation. You can lower the volume of the track if it's too loud and might overwhelm the conversation, or increase it if it's not audible enough. For more information, read the [Voice Gateway Parameter Details](../ai/build/node-reference/voice/voice-gateway/parameter-details.md) documentation.

## C

_**Carriers**_
: Telecommunications service providers are responsible for operating the networks that transmit voice traffic. Within the Voice Gateway Self-Service Portal, you can use different providers such as Voxbone, Twilio, and Simwood. These providers are also known as [SIP Trunk providers](#s). For more information, read the [Carriers](webapp/carriers.md) documentation.

_**Cognigy VG**_
: See [Voice Gateway](#V).

## O

_**Outbound Call Routing**_
: Outbound Call Routing allows you to select a Carrier (SIP Trunk) for outbound calls and configure specific rules for call routing. Outbound call routing is used to select a Carrier when there are multiple Carriers available. For more information, read the [Outbound Call Routing](webapp/outbound-call-routing.md) documentation.

## P

_**Phone Numbers**_
: Phone Numbers are routed to your Endpoints. Phone number helps route incoming voice calls to the Cognigy Flows. To assign applications to phone numbers, you need to select both an Account and a Carrier. For more information, read the [Phone Numbers](webapp/phone-numbers.md) documentation.

## R

_**Recent Calls**_
: A feature that enables you to analyze the calls in your Voice Gateway account, providing valuable insights into the duration of various actions during the call, such as speech recognition and connections. For more information, read the [Recent Calls](webapp/recent-calls.md) documentation.

_**Roles**_
: See [Scopes](#S).

## S

_**Scopes**_
: Depending on Cognigy Voice Gateway installation, members can have the following roles (scopes): Account, Service Provider, Admin. For more information, read the [Scopes](webapp/users.md#scopes) documentation.

_**Service Provider (scope)**_
:  A user role (scope) within the Voice Gateway Self-Service Portal. This scope is only available for on-premises Cognigy Voice Gateway installations. It includes all operations in the Account scope and provides the ability to edit user profiles, carriers, and speech services belonging to users with either the Account scope or the Service Provider scope. For more information, read the [Users](webapp/users.md#service-provider) documentation.

_**Settings**_
: Options to configure your Voice Gateway Account. See [Accounts](#A).

_**Silence Overlay**_
: A parameter within the Session Config Node, which allows playing an MP3 track wherever an extended silence occurs. This can happen while the AI Agent is waiting for the customer's response or looking for specific results in the database. Silence Overlay can be used to simulate common call center ambient noise, such as typing the customer's information into the system and clicking the mouse. With the Silence Overlay track, the customer is notified that the agent is working. For more information, read the [Silence Overlay](../ai/build/node-reference/voice/voice-gateway/parameter-details.md) documentation.

_**SIP Hop**_
: A path the SIP message takes between two SIP elements in a network. Each time a SIP message is forwarded from one SIP device to another, it is called a hop. SIP hops can occur between various SIP network elements, such as proxy servers, registrar servers, phones, and softphones. For more information on SIP connections, read the [Wikipedia Session Initiation Protocol](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) documentation.

_**SIP Trunk**_
: A mechanism that allows connecting phone systems to the public telephone network using the Session Initiation Protocol (SIP) over an IP network. To route your Contact Center or Phone Number to your Voice Gateway Endpoint, your SIP Trunk needs to be set up. Get in touch with [Cognigy Technical Support](../help/get-help.md) to configure your SIP Trunk and route your number to the right Endpoint. For more information, read the [SIP trunking](https://en.wikipedia.org/wiki/SIP_trunking) documentation.

_**SIP Trunk Providers**_
: Providers offering services enable the connection of phone systems to the public telephone network
using the Session Initiation Protocol
(SIP) over an IP network.
These providers enable them to make and receive calls over the Internet.
Cognigy Voice Gateway can support any SIP trunk provider
and includes preinstalled configurations for the following SIP trunk providers:
Voxbone, Twilio, Simwood, TelecomsXChange.
These providers are also known as [Carriers](#c). For more information, read the [SIP Trunk Providers](references/sip-trunk-providers.md) and [Carriers](webapp/carriers.md) documentation.

_**Speech Services**_
: Settings that serve for integrating Speech-to-Text (STT) or Text-to-Speech (TTS) providers in the Voice Gateway Portal. Speech Services allow you to add various Speech Vendors to the Voice Gateway. You can create a speech service application by selecting a speech service vendor, provided in a list. Get credentials from your provider and add them to the speech service provider settings. For more information, read the [Speech Services](webapp/speech-services.md) documentation.

_**STT**_
: STT (Speech-to-Text) is a technology that consistently converts spoken language into written text. It involves the recognition of spoken words by computers, enabling applications like voice assistants and transcription services to interpret and transcribe verbal communication. For more details, see [Wikipedia: Speech recognition](https://en.wikipedia.org/wiki/Speech_recognition). An STT Vendor is a system provider that offers this speech service. For more information, see [STT Vendors](references/tts-and-stt-vendors.md) supported by Cognigy Voice Gateway.

## T

_**Tracing**_
: Tracing logs are valuable for diagnosing issues, optimizing performance, and understanding the flow of operations for inbound calls. The Tracing tab for recent calls serves to identify delays in various steps, such as speech recognition, connection attempts, and other processing tasks. For more information, read the [Recent Calls](webapp/recent-calls.md) documentation.

_**TTS**_
: TTS (Text-to-Speech) is a technology that transforms written text into spoken words. It allows computers to generate artificial speech, facilitating applications such as voice response systems by consistently translating written language into audible communication. For more details, see [Wikipedia: Speech synthesis](https://en.wikipedia.org/wiki/Speech_synthesis). A TTS Vendor is a system provider that offers this speech service. For more information, see [TTS Vendors](references/tts-and-stt-vendors.md) supported by Cognigy Voice Gateway.

## U

_**Users**_
: Members in your account. You can create new members, edit, or delete existing ones. For more information, read the [Users](webapp/users.md) documentation.

## V

_**Voice Gateway**_
: An AI-based solution to deploy voice AI Agents for automated phone conversations. It seamlessly integrates with the Cognigy.AI platform, empowering you to connect your AI Agent to your contact center. Voice Gateway provides you with voice-based services, such as phone calls, voice assistants, and smart speakers. Also, Voice Gateway can perform various functions, such as speech recognition, natural language understanding, dialogue management, text-to-speech, and speech-to-text conversion. For more information, read the [Voice Gateway](../ai/deploy/endpoint-reference/voice-gateway.md) and [Voice Gateway Overview](overview.md) documentation.

_**Voice Gateway Endpoint**_
: A connector within Cognigy.AI that enables seamless interaction between the AI Agent and external systems or platforms. To route your contact center to your Voice Gateway Endpoint, your SIP Trunk needs to be set up. Get in touch with Cognigy technical support to configure your SIP Trunk and route your number to the right Endpoint. For more information, read the [Endpoints](../ai/deploy/endpoints/overview.md) and [Create Voice Gateway Endpoint](getting-started.md#create-a-voice-gateway-endpoint) documentation.

_**Voice Gateway Events**_
: Events that refer to specific occurrences or incidents during a voice call that are recorded by Voice Gateway. These events can give valuable information about the progress and status of the call. For more information, read the [Voice Gateway Events](references/events/overview.md) documentation.

_**Voice Gateway Flow**_
: A structured sequence of interactions designed for voice-enabled applications within the Cognigy.AI platform.
You can start your Voice Gateway project by creating a voice Flow in Cognigy.AI.
Every Node that offers text-based messages can be used in a Voice Flow.
In a voice conversation, the AI Agent responds with a text-based message for every user input.
Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs triggered by the Flow will be bundled into one message and delivered across the phone line.
For more information, read the [Create Voice Gateway Flow](getting-started.md#create-a-voice-gateway-flow) documentation.

_**Voice Gateway Flow Nodes**_
: Cognigy Voice Gateway Nodes expose the functionality provided by Cognigy Voice Gateway directly in the Flow Editor. For more information, read the [Voice Gateway: Nodes Overview](../ai/build/node-reference/voice/voice-gateway/overview.md) documentation.

_**Voice Gateway Self-Service Portal**_
: A web-based interface that empowers users to manage their accounts, settings, and preferences for Cognigy Voice Gateway. For more information, read the [Voice Gateway Self-Service Portal](webapp/overview.md) documentation.