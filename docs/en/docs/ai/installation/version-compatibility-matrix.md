---
title: "Version Compatibility Matrix"
slug: "cognigy-ai-version-compatibility-matrix"
description: "Version compatibility matrix for Cognigy.AI and Infrastructure Components provides valuable insights and ensures seamless integration and upgrades for optimal performance."
hidden: false
---

# Cognigy.AI, Insights, and AI Copilot: Version Compatibility Matrix

This matrix outlines the compatibility of Cognigy.AI, Insights, and AI Copilot product versions with Cognigy infrastructure components,
such as Kubernetes, MongoDB, and Redis. 

{! _includes/installation/on-prem-compatibility-matrix-note.md !}

| Cognigy.AI + Insights /<br> Infra component | Kubernetes | MongoDB | Redis / Redis Persistent | Traefik | RabbitMQ | Helm          |
|---------------------------------------------|------------|---------|--------------------------|---------|----------|---------------|
| 4.46                                        | 1.19-1.24  | 4.2-4.4 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.47                                        | 1.19-1.24  | 4.2-4.4 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.48                                        | 1.19-1.24  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.49                                        | 1.19-1.24  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.50                                        | 1.19-1.24  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.51                                        | 1.19-1.25  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.52                                        | 1.19-1.25  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.53                                        | 1.19-1.25  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |
| 4.54                                        | 1.19-1.25  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.55                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.56                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.57                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.58                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.59                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.60                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.61                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.62                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.63                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.64                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |
| 4.65                                        | 1.19-1.26  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9 or higher |
| 4.66                                        | 1.19-1.26  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9+          |
| 4.67                                        | 1.19-1.26  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9+          |

[^*]: Stand-alone deployment.

[^**]: Both stand-alone and High Availability (HA) with Sentinel deployments.

[^***]: High Availability (HA) with Sentinel deployment.

## More Information

Version Compatibility Matrix:

- [Live Agent](../../live-agent/installation/deployment/version-compatibility-matrix.md)
- [Agent Assist Workspace](../../ai-copilot/installation/version-compatibility-matrix.md)
- [Voice Gateway](../../voicegateway/installation/version-compatibility-matrix.md)