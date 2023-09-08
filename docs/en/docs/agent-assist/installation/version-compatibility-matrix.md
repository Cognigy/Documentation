---
title: "Version Compatibility Matrix"
slug: "agent-assist-version-compatibility-matrix"
description: "Version compatibility matrix for Cognigy Agent Assist Workspace and Infrastructure Components provides valuable insights and ensures seamless integration and upgrades for optimal performance."
hidden: false
---

# Agent Assist: Version Compatibility Matrix

This matrix outlines the compatibility of Cognigy Agent Assist Workspace versions with Cognigy infrastructure components,
such as Kubernetes, MongoDB, and Redis.

{! _includes/installation/on-prem-compatibility-matrix-note.md !}

| Agent Assist /<br> Infra component | Kubernetes | Redis    | MongoDB | Helm          |
|------------------------------------|------------|----------|---------|---------------|
| 4.51                               | 1.22-1.25  | 7.0[^*]  | 4.4-5.0 | 3.8 or higher |
| 4.52                               | 1.22-1.25  | 7.0[^*]  | 4.4-5.0 | 3.8 or higher |
| 4.53                               | 1.22-1.25  | 7.0[^**] | 4.4-5.0 | 3.8 or higher |
| 4.54                               | 1.22-1.25  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.55                               | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.56                               | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.57                               | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.58                               | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |
| 4.59                               | 1.22-1.26  | 7.0[^**] | 5.0     | 3.9 or higher |


[^*]: Stand-alone deployment.

[^**]: Both stand-alone and High Availability (HA) with Sentinel deployments.

## More Information

Version Compatibility Matrix:

- [Cognigy.AI and Insights](../../ai/installation/version-compatibility-matrix.md)
- [Live Agent](../../live-agent/installation/deployment/version-compatibility-matrix.md)
- [Voice Gateway](../../voicegateway/installation/version-compatibility-matrix.md)