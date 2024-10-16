---
title: "Migration from AudioCodes to Voice Gateway"
slug: "migrate-from-ac-to-vg"
description: "Before the deprecation date, we strongly recommend migrating from the third-party AudioCodes service to the native Cognigy Voice Gateway product."
hidden: false
---

# Migration from AudioCodes to Voice Gateway

Starting in February 2025,
you will no longer be able
to create new [AudioCodes Nodes](../ai/build/node-reference/voice/audiocodes/overview.md),
but you can still edit or clone existing ones.
Flows using these Nodes will continue to operate after the deprecation date.

Before that date, we strongly recommend migrating from the third-party AudioCodes service to the native Cognigy product,
[Voice Gateway](index.md), for smoother integration with your voice AI Agents.

## Prerequisites

- Add the `FEATURE_VG_AC_COMPATIBILITY_MODE` feature flag to the Cognigy.AI `values.yaml` file to activate the compatibility mode.
- Note that when transferring settings from AudioCodes Nodes to Voice Gateway:
    - Some parameter names may differ slightly, as well as the names of the Nodes.
    - The values of some parameters may also vary slightly. If you notice a significant difference in the configuration, contact [Cognigy technical support](../help/get-help.md).

## Install Voice Gateway

1. Install the [Voice Gateway Self-Service Portal](overview.md) as a SaaS or on-premises solution.
2. Follow the [Getting Started Guide](getting-started.md) for further actions. For additional assistance, keep in touch with the customer success manager to help you with configuration.

## Create a Voice Gateway Endpoint

1. Open the Cognigy.AI interface.
2. In the left-side menu, select the Project where you want to create a Voice Gateway Endpoint.
3. In the left-side menu of the Project, select **Deploy > Endpoints**.
4. On the **Endpoints** page, click **+ New Endpoint**.
5. In the **New Endpoint** section, do the following:
    5.1 Select the **Voice Gateway** Endpoint type.<br>
    5.2 Add a unique name.<br>
    5.3 Select a relevant voice Flow from the list.<br>
6. Click **Save**.
7. In the Endpoint, go to the **AudioCodes Compatibility Mode** section.
8. Activate the **Enable AudioCodes Compatibility Mode** setting. This setting allows the Voice Gateway to treat your Flow with the AudioCodes Node as if it were a Flow with Voice Gateway Nodes, ensuring that the voice AI Agent works smoothly without interruptions.
9. Manually move the required settings from your previous AudioCodes Endpoint to the Voice Gateway Endpoint.
10. Save your changes.

You can use the AudioCodes Endpoint alongside the Voice Gateway Endpoint. First, test the AI Agent with the Voice Gateway Endpoint, and if the tests are successful, you can switch to the Voice Gateway Endpoint permanently.

With Compatibility Mode enabled, you can simultaneously use both Voice Gateway and AudioCodes Nodes in a Flow.

## More Information

- [AudioCodes Nodes](../ai/build/node-reference/voice/audiocodes/overview.md)
- [AudioCodes Endpoint](../ai/deploy/endpoint-reference/audiocodes.md)
- [Voice Gateway Nodes](../ai/build/node-reference/voice/voice-gateway/overview.md)
- [Voice Gateway Endpoint](../ai/deploy/endpoint-reference/voice-gateway.md)