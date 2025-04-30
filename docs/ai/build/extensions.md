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

_Extensions_ are [Nodes](nodes/overview.md) for specific use cases that you can install from the Marketplace or develop yourself to extend your Flows' capabilities. You can use Extensions to:

- Integrate with third-party APIs.
- Execute custom logic for lightweight operations.
- Create convenience Nodes using various NPM modules.

## Limitations

- Extensions have a default 20-second timeout. You can change the timeout by doing the following:
    - For dedicated SaaS installations, contact [Cognigy technical support](../../help/get-help.md) to change the timeout.
    - For on-premises installations, change the environment variable as described in the [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml).
- Extensions can make up to 10 API calls per execution.

## Working with Extensions

=== "GUI"
    In **Manage > Extensions**, you can install, update, and uninstall Extensions from the Marketplace or [custom Extensions](#custom-extensions). Also, you can [mark your custom Extensions as trusted](#extension-performance).

    The Extension Marketplace is also available on [Cognigy's website](https://www.cognigy.com/marketplace#/).

=== "CLI"
    You can pull Extensions using the [Cognigy.AI CLI](https://github.com/Cognigy/cognigy-cli).

=== "API"
    You can view, delete, upload, and update Extensions using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Extensions-v2.0). Also, you can [mark your custom Extensions as trusted](#extension-performance).

After you have installed an Extension, you can add it as a Node in the [Flow editor](flows/editor.md).

### Custom Extensions

Cognigy allows anyone to extend the capabilities of Cognigy.AI by developing their own Extensions. Custom Extensions are JavaScript or TypeScript modules that you can use as Nodes. After developing a custom Extension, you can install it by uploading it in **Manage > Extensions**.

Extensions are designed for lightweight operations. When developing a custom Extension, avoid implementing CPU-intensive computations, high memory operations, or large loops in the Extensions code, or code issues, for example, that lead to infinite loops or unresolved promises. These practices can impact the performance of your AI Agents.

Additionally, you can publish your custom Extension on the Marketplace so that other Cognigy users have access to it.

??? info "Develop Custom Extensions"

    The following materials will provide you with in-depth information to develop a custom Extension:

    - [Readme](https://www.npmjs.com/package/@cognigy/extension-tools) of the `@cognigy/extension-tools` package for requirements.
    - [Get Started](https://support.cognigy.com/hc/en-us/articles/360016534459-Get-Started) documentation for the first steps.
    - [Cognigy Sessions Episode](https://support.cognigy.com/hc/en-us/articles/360019893139-Cognigy-Sessions-Extensions) about Extensions for a technical deep dive.
    - [GitHub repository](https://github.com/Cognigy/Extensions) for Extensions examples.

    !!! tip "Extension Development"
        [Cognigy Hammer](https://github.com/tgbv/cognigy-hammer/), created by the Cognigy community, is an Extension development suite designed for Cognigy.AI. Cognigy Hammer offers several tools and features to assist in the development of Cognigy Extensions. Note that Cognigy Hammer isn't a product of Cognigy and doesn't qualify for enterprise support.

    **Best Practices for Developing Custom Extensions**

    To guarantee the [performance](#extension-performance-and-security) of a custom Extension, make sure the Extension code:

    - Undergoes review by experienced developers.
    - Avoids handling very complex logic and use cases.
    - Is tested both independently and in Flows before production rollout.
    - Provides error handling across all potential error cases, for example, with try/catch blocks and by resolving promises.

    **Code Example for Error Handling**

    ```JavaScript
    function: async ({ cognigy, config }) => {
        const { api } = cognigy;
        const { contextKey, inputKey } = config;

        const endpoint = `API_TO_CALL`;

        try {
            const result = await axios.get(endpoint);

            // store in context
            api.addToContext(contextKey, result.data, 'simple');

            // store in input 
            api.addToInput(inputKey, result.data);
        }
        catch (error) {
            api.addToContext(contextKey, { error: error.message }, 'simple');
        }
    }
    ```

??? info "Publish Custom Extensions"
    If you want to publish a custom Extension on the Marketplace, follow the approval procedure in the [Extensions GitHub repository](https://github.com/Cognigy/Extensions).

## Extension Performance and Security

[![Version badge](https://img.shields.io/badge/Added in-v4.46-blue.svg)](../../release-notes/4.46.md)

By default, Cognigy.AI considers Extension code untrusted and runs it in a secure, isolated environment. This additional security layer introduces some overhead during startup. For this reason, Extensions usually run slower than default Nodes in Flows.

Cognigy.AI ensures that Extensions code runs in a secure context by:

1. Executing the Extension code in a separate microservice. This approach ensures that, in a worst-case scenario, a breakout affects only the dedicated microservice, but not the rest of the system.

2. Using a dedicated child process that the system spawns for each execution of the Extension code within the separate microservice. This approach ensures that the Extension code can access only a defined set of environment variables and allows Cognigy.AI to terminate this code if it runs for too long.

3. Creating a separate JavaScript virtual machine within the child process in which the Extension code is executed. This approach restricts usability of certain APIs from the underlying Node.js execution context, limiting what the code can do when running on the Cognigy.AI infrastructure.

API calls made by the Extension code are proxied back to the rest of the system through synchronous events via the Cognigy.AI internal event bus.

### Make Extensions Trusted

!!! danger "Security considerations"
    Never trust Extension code without thorough review. Extensions can use external packages from NPM, which may contain malicious code or routines. An Extension can steal sensitive information when executed in the standard environment.

A trusted Extension is an Extension that is considered safe to run in the standard environment. This means that trusted Extensions may offer less latency but need to be handled more carefully to avoid [performance issues](#custom-extensions).

To make Extensions trusted and let them run in the standard environment, you have two options:

??? info "Make Extensions Trusted"
    - Mark an Extension as trusted in **Manage > Extensions**. Trusted Extensions display the ![trust-extensions](../../_assets/icons/trusted-extension.svg) icon. Only admins and users with the `extension_trust_admin` [role](../administer/access/members.md) can mark Extensions as trusted and update them.
    - For dedicated SaaS or on-premises installations: 
        1. Set the `FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION` environment variable to `true` by adding the following code to your `config-map_patch.yaml` in the `kubernetes` repository where the deployment manifest files are stored:
        ```YML
        - op: add
          path: /data/FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION
          value: "true"
        ```
        2. Use the Cognigy.AI API [PATCH](https://api-trial.cognigy.ai/openapi#patch-/v2.0/extensions/-extensionId-) request to update the `trustedCode` property of an Extension.

## Install Extensions for All Organizations

On-premises customers can install Extensions in all organizations of their installation. To do so, add the `FEATURE_ADDITIONAL_SYSTEM_WIDE_EXTENSIONS_PATH` environment variable to `values.yaml` under the `cognigyEnv` mapping key and enter the path to the Extension.

## Cache Extensions in your Local Directory

You can cache Extensions in your local directory to improve the Extensions' loading performance.

??? info "Maximum cache storage"
    By default, when Extensions exceed the maximum cache directory size, the last 10 Extensions are removed from the local directory. On premises and dedicated SaaS customers can change the number of Extensions that are removed when the maximum cache directory size is exceeded using the `EXCEED_DIR_SIZE_AMOUNT_TO_DROP_FROM_MAP` environment variable.

    On-premises and dedicated SaaS customers can change the maximum directory size by adding the `MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB` environment variable to `values.yaml`. By default, the maximum directory size is 512 MB.

    The cache is in the `service-execution` [Kubernetes pod](https://kubernetes.io/docs/concepts/workloads/pods/).

## Dynamic Fields

You can use a dynamic selection field as a field type in Extensions. This feature can be used to dynamically fetch the content of a selection field, for example, through an external API call.

## Localization for Extensions

Extension builders can include localized UI texts, such as default Node labels or Node field descriptions.

For more details, read the [Localization for Extensions](https://www.npmjs.com/package/@cognigy/extension-tools#extension-localization) documentation.

## Error Handling

[![Version badge](https://img.shields.io/badge/Added in-v4.22-blue.svg)](../../release-notes/earlier-versions/cognigy-ai-pre-4.30.md)

If an Extension [times out or sends too many API calls](#limitations), the Flow execution doesn't stop. Instead, an error message is written to the `input.extensionError` Input object.