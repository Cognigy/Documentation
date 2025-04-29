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

| Cognigy.AI + Insights /<br> Infra component | Kubernetes | MongoDB | Redis / Redis Persistent | Traefik | RabbitMQ | Helm          | Qdrant     |
|---------------------------------------------|------------|---------|--------------------------|---------|----------|---------------|------------|
| 4.100                                       | 1.19-1.32  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.99                                        | 1.19-1.32  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.98                                        | 1.19-1.32  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.97                                        | 1.19-1.32  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.96                                        | 1.19-1.31  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.95                                        | 1.19-1.31  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.94                                        | 1.19-1.31  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.93                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.92                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 3.1     | 4.0      | 3.9 or higher | 1.8[^****] |
| 4.91                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 3.1     | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.90                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 3.1     | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.89                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 3.1     | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.88                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 3.1     | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.87                                        | 1.19-1.30  | 6.0     | 7.4[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.86                                        | 1.19-1.30  | 5.0/6.0 | 7.4[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.85                                        | 1.19-1.30  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.84                                        | 1.19-1.30  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.83                                        | 1.19-1.29  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.82                                        | 1.19-1.29  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.81                                        | 1.19-1.29  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.80                                        | 1.19-1.29  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.79                                        | 1.19-1.28  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.78                                        | 1.19-1.28  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.77                                        | 1.19-1.28  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.76                                        | 1.19-1.28  | 5.0     | 7.2[^***]                | 2.10    | 3.13     | 3.9 or higher | 1.8[^****] |
| 4.75                                        | 1.19-1.28  | 5.0     | 7.2[^***]                | 2.10    | 3.12     | 3.9 or higher | 1.8[^****] |
| 4.74                                        | 1.19-1.28  | 5.0     | 7.2[^***]                | 2.10    | 3.12     | 3.9 or higher | 1.8[^****] |
| 4.73                                        | 1.19-1.27  | 5.0     | 7.2[^***]                | 2.10    | 3.12     | 3.9 or higher | 1.8[^****] |
| 4.72                                        | 1.19-1.27  | 5.0     | 7.2[^***]                | 2.10    | 3.9      | 3.9 or higher | 1.7[^****] |
| 4.71                                        | 1.19-1.27  | 5.0     | 7.2[^***]                | 2.10    | 3.9      | 3.9 or higher | 1.7[^****] |
| 4.70                                        | 1.19-1.27  | 5.0     | 7.2[^***]                | 2.10    | 3.9      | 3.9 or higher | 1.7[^****] |
| 4.69                                        | 1.19-1.27  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9 or higher |            |
| 4.68                                        | 1.19-1.27  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9 or higher |            |
| 4.67                                        | 1.19-1.26  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9 or higher |            |
| 4.66                                        | 1.19-1.26  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9 or higher |            |
| 4.65                                        | 1.19-1.26  | 5.0     | 7.0[^***]                | 2.10    | 3.9      | 3.9 or higher |            |
| 4.64                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.63                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.62                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.61                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.60                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.59                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.58                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.57                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.56                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.55                                        | 1.19-1.26  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.54                                        | 1.19-1.25  | 5.0     | 7.0[^**]                 | 2.10    | 3.9      | 3.9 or higher |            |
| 4.53                                        | 1.19-1.25  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.52                                        | 1.19-1.25  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.51                                        | 1.19-1.25  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.50                                        | 1.19-1.24  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.49                                        | 1.19-1.24  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.48                                        | 1.19-1.24  | 4.4-5.0 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.47                                        | 1.19-1.24  | 4.2-4.4 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |
| 4.46                                        | 1.19-1.24  | 4.2-4.4 | 7.0[^*]                  | 2.6     | 3.9      | 3.8 or higher |            |

[^*]: Stand-alone deployment.

[^**]: Both stand-alone and High Availability (HA) with Sentinel deployments.

[^***]: High Availability (HA) with Sentinel deployment.

[^****]: Only when [Knowledge AI](../empower/knowledge-ai/overview.md) is enabled.

## More Information

Version Compatibility Matrix:

- [Live Agent](../../live-agent/installation/deployment/version-compatibility-matrix.md)
- [AI Copilot (4.64 and earlier versions)](../../ai-copilot/installation/version-compatibility-matrix.md)
- [Voice Gateway](../../voice-gateway/installation/version-compatibility-matrix.md)