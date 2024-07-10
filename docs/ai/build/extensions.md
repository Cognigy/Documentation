---
title: "Extensions"
slug: "extensions"
hidden: false
---
# Extensions

Extensions are a way of extending the Cognigy Flow Editor with new Nodes. Extensions contain multiple Flow Nodes which appear in the Flow Editor once they have been installed.

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
    [Cognigy Hammer](https://github.com/tgbv/cognigy-hammer/), created by the Cognigy community, is an extension development suite designed for Cognigy.AI. It offers several tools and features to assist in development of Cognigy Extensions. Note that Cognigy Hammer is not a product of Cognigy and does not qualify for enterprise support.

### Handle Timeouts in an Extension
Extensions have a default timeout of 20 seconds, meaning if the time it takes for the Extension to complete is more than 20 seconds, the Extension will stop and an error will be returned to the Flow. The Flow execution will continue, and the error can be accessed under `input.extensionError.message`.

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

Cognigy.AI considers the code within an extension to be "un-trusted", meaning that the code will be executed in a secure and additional hardened environment by default. There is a certain overhead in bootstrapping this secure environment per execution - hence Flow Nodes from Extensions generally execute slower than our built-in ones (for example, our "Say"-Node).

With Cognigy.AI v4.1.6 we have introduced the ability to "trust" the code of an Extension by letting customers decide whether they want to execute the code in a secure environment or in the normal execution environment in which our own Flow Nodes run.

!!! warning "Feature availability"
    This feature is only available for our on-premise customers or dedicated SaaS customers with their own Cognigy.AI installation.

In order to enable the feature, the following additional environment variable can be used:

```txt
FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION=true
```

Our customers usually accomplish this, by adding the following to their "config-map_patch.yaml" in the "kubernetes" repository in which the manifest files for deployment are located:

```YML
- op: add
  path: /data/FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION
  value: "true"
```

Enabling the feature will not change anything automatically. Once the feature was activated, an additional API endpoint (see our RESTful API documentation) can be used in order to update the "trustedCode" property of an Extension.

!!! danger "Security considerations"
    There is a reason why Extensions and their code will be executed in the secure environment, by default! Never trust the code of an Extension without properly reviewing the code within it! Extensions can use external packages from NPM which might contain harmful code and routines - once an Extension runs in the "native context", it might be able to steal sensitive information. Make sure that you are aware of these implications before changing the execution context.

### Make an Extension Trusted

[![Version badge](https://img.shields.io/badge/Added in-v4.46-blue.svg)](../../release-notes/4.46.md)

All trusted Extensions are marked with the special icon ![trust-extensions](../../_assets/icons/trusted-extension.svg).

You can make your uploaded Extensions trusted. It could be preinstalled Extension or a custom one. To allow users to make Extensions trusted and update them, an admin must add the `extension_trust_admin` role in the [virtual agent project](../administer/access/members.md). The project admin has this role by default.

To mark an Extensions as trusted, follow these steps:

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

To enable the feature, the following additional environment variable can be used to update the GitHub **config.map** file:

**Environment variable for organization-wide extensions**
```txt
FEATURE_ADDITIONAL_SYSTEM_WIDE_EXTENSIONS_PATH
```

## Cache Extensions in local Directory

As of release v4.8 Extensions can be cached in the local directory, which improves the loading performance.
The path to that cache is stored in an extensions map together with a timestamp.

When the max dir size gets exceeded by an extension, the last X extensions (currently 10 - editable via an environment variable) are getting dropped from the extensions map as well as from the local filesystem.

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

Cognigy.AI v4.9.0 provides new functionality that allows our customers to use a new dynamic select field as a new field type in their Extensions. The feature can be used to dynamically fetch the content of a select field through for example, an external API call.

## Localization for Extensions

Cognigy.AI v4.12.0 provides new functionality that allows Extension builders to optionally include localized variations for user-facing texts, such as default Node Labels or Node Field Descriptions.
If configured, users will see the localized version for the UI language they chose.

These localization options are optional and can be configured text-by-text on-demand.
If no localization that matches the user-selected UI language was configured, the user will see a (mandatory) default option.

Developers can follow the [Localization for Extensions' Documentation](https://www.npmjs.com/package/@cognigy/extension-tools#extension-localization) to get started.