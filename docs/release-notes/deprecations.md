---
title: "Deprecations and Removals"
slug: "deprecations-and-removals"
hidden: false
---

# Deprecations and Removals

Starting with release 4.84, upcoming removals and deprecations are listed on this page.

This page provides an overview of native Cognigy features as well as those that rely on third-party dependencies, such as LLMs (Large Language Models), endpoints, and channels.

## Terminology

- **Deprecations.** Deprecation marks a feature as outdated and no longer recommended, with support limited to critical fixes. It begins with an announcement and ends when the feature is removed in a future major release.
- **Removals**. A feature is completely removed and no longer supported after the specified removal date.

## Cognigy Products

| Feature                                                                                                                                                     | Deprecation Date | Removal date      | Next Steps                                                                                                                                                                                     |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Any Slots                                                                                                                                                   | -                | September 3, 2024 | Use the [LLM Entity Extraction Node](../ai/build/node-reference/other-nodes/llm-entity-extract.md) to identify Slots in the user input via LLMs.                                               |
| [Webchat v2](../webchat/v2/overview.md)                                                                                                                     | August 20, 2024  | February 2026     | Migrate to new [Webchat v3](../webchat/migration.md)                                                                                                                                           |
| [AudioCodes Nodes](../ai/build/node-reference/voice/audiocodes/overview.md) and [Generic Voice Nodes](../ai/build/node-reference/voice/generic/overview.md) | February 2025    | Not defined yet   | After the end of February 2025, you won't be able to create new Nodes, but you can still edit or clone existing ones. Flows with these Nodes will continue to work after the deprecation date. |

## Third-Party Products

| Models                                                                  | Deprecation Date | Shutdown date          | Next Steps                                                                                               |
|-------------------------------------------------------------------------|------------------|------------------------|----------------------------------------------------------------------------------------------------------|
| **OpenAI**                                                              |                  |                        |                                                                                                          |
| `gpt-3.5-turbo-0301`, `gpt-3.5-turbo-0613` and `gpt-3.5-turbo-16k-0613` | January 10, 2024 | September 13, 2024     | We strongly recommend that you switch to [newer models](../ai/empower/llms.md) before the Shutdown date. |
| `gpt-4-vision-preview`, `gpt-4-1106-vision-preview`                     | June 17, 2024    | December 6, 2024       | We strongly recommend that you switch to [newer models](../ai/empower/llms.md) before the Shutdown date. |
| **Azure OpenAI**                                                        |                  |                        |                                                                                                          |
| `gpt-35-turbo` and `gpt-35-turbo-16k`                                   | -                | No earlier than Nov 17 |                                                                                                          |
|                                                                         |                  |                        |                                                                                                          |

