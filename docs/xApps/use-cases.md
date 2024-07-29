---
title: "Use Cases"
slug: "use-cases"
hidden: false
---

# xApp Use Cases

The xApps can be used in two different ways:

- [As a multichannel solution](#multichannel)
- [As a standalone solution](#standalone)

## Multichannel

You can use an xApp in addition to the main communication channels, such as voice, Webchat Widget, Teams, WhatsApp, and others. The full list is provided in [Supported Channels](supported-browsers-and-channels.md#supported-channels).

To learn how it works, follow [Build an xApp with multiple channels](build/xApp-with-multi-channels.md).

### Power up AI Agents

Enhance the capabilities of AI Agents
by supporting use cases that go beyond the limitations of the current communication channel.
This improvement helps AI Agents to handle more complex tasks and provide better assistance to users.

### Power up human agents

Enable AI Copilot to suggest xApps to human agents. These xApps can be shared with users to simplify tasks like form completion or perform actions that the agent cannot handle alone, such as fingerprint authentication or collecting payments.

## Standalone

You can use an xApp as a standalone application. The xApp can be built to address specific tasks or processes that don't require a conversation. These xApps can be accessed via a URL, allowing users to interact with them directly without the need for another communication channel.

To learn how it works, follow [Create a Standalone xApp](build/standalone-xApp.md).

## Examples

xApps are infinitely flexible. Below examples illustrate some specific use cases where an xApp can provide convenient and efficient solutions, enhancing user experiences and improving process workflows. 

### Authentication via Credentials

With xApps, you can allow users to authenticate using various methods such as email addresses, user numbers, or other identification details.

Users can securely verify their identity and gain access to specific services or information.

<figure>
    <img class="image-center" src="../../../_assets/xApps/use-cases/microsoft-login.png" width="70%">
    <figcaption>Authentication via Credentials</figcaption>
</figure>

### Select a flight seat

With xApps, you can offer users an interface to choose their preferred seat for their flight.

Users can view the available seats and select the seat of their choice, enhancing their travel experience.

You can find an example of implementation in the [Cognigy GitHub](https://github.com/Cognigy/xApps/tree/main/xapps/flight-seat-picker) repository.

<figure>
    <img class="image-center" src="../../../_assets/xApps/use-cases/select-seat.png" width="70%">
    <figcaption>Select a flight seat</figcaption>
</figure>

### Share location 

With xApps, you can allow users to share their device's location information.

This use case can be useful in various scenarios, such as providing location-based services, tracking deliveries, or finding nearby resources.

<figure>
    <img class="image-center" src="../../../_assets/xApps/use-cases/share-location.png" width="70%">
    <figcaption>Share device location</figcaption>
</figure>

### Take a picture via a mobile camera

With xApps, you can provide users an interface to capture images of metering devices using their mobile camera.

This use case can be useful for utility companies or service providers to remotely monitor and analyze metering data.

<figure>
    <img class="image-center" src="../../../_assets/xApps/use-cases/energy-meter.png" width="70%">
    <figcaption>Take a picture via a mobile camera</figcaption>
</figure>

### Add a boarding pass to a wallet

With xApps, you can allow users to add their boarding pass to a digital wallet.

This use case enables users to easily access their boarding information, simplifies the check-in process, and eliminates the need for printed boarding passes.

<figure>
    <img class="image-center" src="../../../_assets/xApps/use-cases/boarding-pass.png" width="70%">
    <figcaption>Add a boarding pass</figcaption>
</figure>

### Create a signature

With xApps, you can provide a digital signature functionality.

Users can sign documents or forms electronically, eliminating the need for physical signatures and streamlining paperwork processes.

You can find an example of implementation in the [Cognigy GitHub](https://github.com/Cognigy/xApps/tree/main/xapps/signature) repository.

<figure>
    <img class="image-center" src="../../../_assets/xApps/use-cases/signature-pad.png" width="70%">
    <figcaption>Create a signature</figcaption>
</figure>

## More Information

- [Overview](overview.md)
- [Build an xApp](build/overview.md)
- [Architecture](architecture.md)
- [xApp Nodes](../ai/build/node-reference/xApp/overview.md)
- [xApp Tokens](tokens.md)
- [xApp Flow API](api.md)