---
title: "Extensions"
slug: "extensions"
hidden: false
tags:
  - Cognigy.AI
  - Extensions
  - Extension
---
# Extensions

_Extensions_ are a way of extending the Cognigy Flow editor with new custom Nodes. Extensions contain multiple Nodes that appear in the Flow Editor once they have been installed.

## Extension Marketplace

A variety of pre-built Extensions can be installed with a single click from the Cognigy Extension Marketplace if configured.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/extensions/Marketplace.png" width="100%" />
  <figcaption>Extension Marketplace</figcaption>
</figure>

- Selecting an extension from the Marketplace section will reveal more information - similar to when selecting an already installed extension.
- You can copy the URL and open it in another tab, also when reloading the page.
- You can search for Extensions using the **Search** field.
- You can uninstall installed Extensions.

You may also browse available Marketplace Extensions online at the [Cognigy.AI Marketplace](https://www.cognigy.com/marketplace#/).

## Develop a custom Extension

Cognigy allows anyone to extend the capabilities of Cognigy.AI by developing their own Extensions. Extensions are JavaScript or TypeScript Modules that can be exposed as Flow Nodes within Cognigy.AI. Extensions could be used for integrating with third-party APIs, for executing complex logic, for performing long-running computations or for creating convenience Nodes using various npm modules.

- Watch our [Cognigy Sessions Episode](https://support.cognigy.com/hc/en-us/articles/360019893139-Cognigy-Sessions-Extensions) about Extensions for a technical deep dive.
- If you're keen to get started developing Extensions right away, see our [Get Started](https://support.cognigy.com/hc/en-us/articles/360016534459-Get-Started) documentation.
- All the required resources to build and upload the Extension to Cognigy.AI can be found in the [Readme](https://www.npmjs.com/package/@cognigy/extension-tools) of our @cognigy/extension-tools package.
- If you want to see examples of Extensions, visit our [GitHub repository](https://github.com/Cognigy/Extensions).

!!! tip "Extension Development Suite"
    [Cognigy Hammer](https://github.com/tgbv/cognigy-hammer/), created by the Cognigy community, is an extension development suite designed for Cognigy.AI. It offers several tools and features to assist in the development of Cognigy Extensions. Note that Cognigy Hammer is not a product of Cognigy and does not qualify for enterprise support.

### Handle Timeouts in an Extension

Extensions have a default 20-second timeout. If an extension takes longer than 20 seconds to complete, it will be terminated, and an error message will be returned to the flow. The flow execution will continue, and the error can be accessed using `input.extensionError.message`.

!!! warning "Extension Timeout"
    Extensions have a default time-out of 20 seconds. The time-out can be changed on dedicated Cognigy.AI installations.

## Install a custom Extension

You can install a custom Extension from the Extension Marketplace by using the **Upload Extension** button or by dragging and dropping.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/extensions/Installing-Custom-Extensions.png" width="100%" />
  <figcaption>Installing a custom Extension</figcaption>
</figure>

## Update a custom Extension

You can update a custom Extension by selecting the Extension either in the **Marketplace** section or in the **Installed** section and clicking **Update**. If you select an extension in the **Marketplace** section, then the latest version from the **Extension Marketplace** will replace your installed Extension. If you select the extension in the **Installed** section, you will be asked to upload the updated Extension.

[Trusted Extensions](#make-an-extension-trusted) can only be updated by admins or members with the `extension_trust_admin` project role.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/extensions/update-extension-package.png" width="100%" />
  <figcaption>Updating a custom Extension</figcaption>
</figure>

## Publish an Extension

If you want us to approve your developed extension and publish it on the Extension Marketplace, follow the approval procedure explained in the readme of our [GitHub repository](https://github.com/Cognigy/Extensions).

## Extension Performance

By default, Cognigy.AI considers extension code to be untrusted and executes it within a secure, isolated environment.
However, this additional security layer introduces some overhead during startup.
Consequently, Nodes from extensions typically run slower than Cognigy.AI built-in nodes, such as the [Say](node-reference/basic/say.md) Node.

Cognigy.AI introduces the feature to trust extension code.
This feature lets users choose whether to execute the code in a secure environment or the standard environment where Nodes run.

!!! warning "Feature availability"
    This feature is available for dedicated SaaS or on-premises installations.

To enable the feature, the following additional environment variable can be used:

```txt
FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION=true
```

Our customers usually achieve this by adding the following to their `config-map_patch.yaml` in the `kubernetes` repository where the deployment manifest files are stored:

```YML
- op: add
  path: /data/FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION
  value: "true"
```

Enabling the feature will not change anything automatically.
Once the feature is activated,
the Cognigy.AI API [PATCH](https://api-trial.cognigy.ai/openapi#patch-/v2.0/extensions/-extensionId-) request can be used to update the `trustedCode`
property of an Extension.

!!! danger "Security considerations"
    By default, extensions and their code are executed within a secure environment.
    It is crucial to never trust extension code without thoroughly reviewing it.
    Extensions can use external packages from NPM, which may contain malicious code or routines.
    Once an extension is executed in the native environment, it could potentially steal sensitive information.
    Consider these risks before modifying the execution environment.

### Make an Extension Trusted

[![Version badge](https://img.shields.io/badge/Added in-v4.46-blue.svg)](../../release-notes/4.46.md)

All trusted Extensions are marked with the special icon ![trust-extensions](../../_assets/icons/trusted-extension.svg).

You can make your uploaded Extensions trusted.
It could be a preinstalled Extension or a custom one.
To allow users to make Extensions trusted and update them,
an admin must add the `extension_trust_admin` role in the [Project](../administer/access/members.md).
The project admin has this role by default.

To mark the Extensions as trusted, follow these steps:

1. On the Extensions page, install the existing Extension from Marketplace or add a custom one.
2. Open the Extension pane by clicking the Extension card.
3. On the right-side pane, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg), then **Trust Extension**.
   The Extension will be marked as trusted.

To mark an Extension as untrusted, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg), then **Untrust Extension**.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/extensions/trust-extension.png" width="100%" />
  <figcaption> Making an Extension Trusted</figcaption>
</figure>

## Extension organization-wide embeddable

With Cognigy.AI v4.8, we have introduced the ability for on-premise customers to embed certain extensions organization-wide.

To enable the feature, the following additional environment variable can be used to update the GitHub `config.map` file:

**Environment variable for organization-wide extensions**

```txt
FEATURE_ADDITIONAL_SYSTEM_WIDE_EXTENSIONS_PATH
```

## Cache Extensions in local Directory

Extensions can be cached in the local directory, which improves the loading performance.
The path to that cache is stored in an extensions map together with a timestamp.

When the max dir size gets exceeded by an extension, the last X extensions (currently 10 – editable via an environment variable) will be removed from both the extension map and the local filesystem.

If required, you can adjust the behavior by adding and configuring environment variables:

```txt
MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB
```

The default value of `MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB` is 512 MB.

The cache is within the [Kubernetes pod](https://kubernetes.io/docs/concepts/workloads/pods/) of service-execution. So it makes no difference if you are processing on-premises or trial, app, etc.

```txt
EXCEED_DIR_SIZE_AMOUNT_TO_DROP_FROM_MAP
```

## Dynamic Fields

Cognigy.AI provides functionality that allows our customers to use a new dynamic select field as a new field type in their Extensions. The feature can be used to dynamically fetch the content of a select field, for example, through an external API call.

## Localization for Extensions

Cognigy.AI provides functionality that allows Extension builders to optionally include localized variations for user-facing texts, such as default Node Labels or Node Field Descriptions.
If configured, users will see the localized version for the UI language they chose.

These localization options are optional and can be configured text-by-text on-demand.
If no localization that matches the user-selected UI language was configured, the user will see a (mandatory) default option.

Developers can follow the [Localization for Extensions' Documentation](https://www.npmjs.com/package/@cognigy/extension-tools#extension-localization) to get started.

## Error Handling for Extensions

If an Extension Node times out or sends too many events, the Flow execution will not stop.
Instead, an error message will be written to the `input.extensionError` Input object.
This change does not affect Snapshots created before Cognigy.AI v4.22.