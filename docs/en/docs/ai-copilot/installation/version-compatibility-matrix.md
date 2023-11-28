---
title: "Version Compatibility Matrix"
slug: "agent-assist-version-compatibility-matrix"
description: "Version compatibility matrix for Cognigy AI Copilot Workspace and Infrastructure Components provides valuable insights and ensures seamless integration and upgrades for optimal performance."
hidden: false
---

# AI Copilot: Version Compatibility Matrix

!!! note
    If you are a new user of AI Copilot and are starting to use it from [Cognigy version 4.65](../../release-notes/4.65.md), you don't need this installation guide. From 4.65 onwards, AI Copilot is included with the [Cognigy.AI installation](../../ai/installation/overview.md).

This matrix outlines the compatibility of Cognigy AI Copilot Workspace versions with Cognigy infrastructure components,
such as Kubernetes, MongoDB, and Redis.

{! _includes/installation/on-prem-compatibility-matrix-note.md !}

| AI Copilot /<br> Infra component | Kubernetes | Redis    | MongoDB | Helm          |
|----------------------------------|------------|----------|---------|---------------|
| 4.51                             | 1.22-1.25  | 7.0[^*]  | 4.4-5.0 | 3.8 or higher |
| 4.52                             | 1.22-1.25  | 7.0[^*]  | 4.4-5.0 | 3.8 or higher |
| 4.53                             | 1.22-1.25  | 7.0[^**] | 4.4-5.0 | 3.8 or higher |
| 4.54                             | 1.22-1.25  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.55                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.56                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.57                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.58                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.59                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.60                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.61                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.62                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.63                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.64                             | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |

[^*]: Stand-alone deployment.

[^**]: Both stand-alone and High Availability (HA) with Sentinel deployments.

## More Information

Version Compatibility Matrix:

- [Cognigy.AI and Insights](../../ai/installation/version-compatibility-matrix.md)
- [Live Agent](../../live-agent/installation/deployment/version-compatibility-matrix.md)
- [Voice Gateway](../../voicegateway/installation/version-compatibility-matrix.md)