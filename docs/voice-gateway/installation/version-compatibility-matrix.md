---
title: "Version Compatibility Matrix"
slug: "voice-gateway-version-compatibility-matrix"
description: "Version compatibility matrix for Cognigy Voice Gateway and Infrastructure Components provides valuable insights and ensures seamless integration and upgrades for optimal performance."
hidden: false
---

# Voice Gateway: Version Compatibility Matrix

This matrix outlines the compatibility of Cognigy Voice Gateway versions with Cognigy infrastructure components,
such as Kubernetes, MongoDB, and Redis.

{! _includes/installation/on-prem-compatibility-matrix-note.md !}

| Voice Gateway /<br> Infra component | Kubernetes | PostgreSQL | Redis   | MySQL | Traefik | InfluxDB | Jaeger | Helm          |
|-------------------------------------|------------|------------|---------|-------|---------|----------|--------|---------------|
| 4.100                               | 1.23-1.32  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.99                                | 1.23-1.32  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.98                                | 1.23-1.32  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.97                                | 1.23-1.32  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.96                                | 1.23-1.32  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.95                                | 1.23-1.32  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.94                                | 1.23-1.31  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.92                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.91                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.90                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.89                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.88                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 3.1.6   | 1.8      | 1.61   | 3.9 or higher |
| 4.87                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 2.10    | 1.8      | 1.61   | 3.9 or higher |
| 4.86                                | 1.23-1.30  | 14.12      | 7.4[^*] | 8.0   | 2.10    | 1.8      | 1.61   | 3.9 or higher |
| 4.85                                | 1.23-1.30  | 14.12      | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.84                                | 1.23-1.30  | 14.12      | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.83                                | 1.23-1.29  | 14.12      | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.82                                | 1.23-1.28  | 14.12      | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.81                                | 1.23-1.28  | 14.12      | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.80                                | 1.23-1.28  | 14.12      | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.79                                | 1.23-1.28  | 14.9       | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.78                                | 1.23-1.28  | 14.9       | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.77                                | 1.23-1.28  | 14.9       | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.57   | 3.9 or higher |
| 4.76                                | 1.23-1.28  | 14.9       | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.54   | 3.9 or higher |
| 4.75                                | 1.23-1.28  | 14.9       | 7.2[^*] | 8.0   | 2.10    | 1.8      | 1.54   | 3.9 or higher |
| 4.74                                | 1.23-1.28  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.54   | 3.9 or higher |
| 4.73                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.54   | 3.9 or higher |
| 4.72                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.54   | 3.9 or higher |
| 4.71                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.47   | 3.9 or higher |
| 4.70                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.47   | 3.9 or higher |
| 4.69                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.47   | 3.9 or higher |
| 4.68                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.47   | 3.9 or higher |
| 4.67                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | 1.47   | 3.9 or higher |
| 4.66                                | 1.23-1.27  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.65                                | 1.23-1.26  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.64                                | 1.23-1.26  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.63                                | 1.23-1.26  | 14.9       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.62                                | 1.23-1.26  | 14.8       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.61                                | 1.23-1.26  | 14.8       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.60                                | 1.23-1.26  | 14.8       | 7.0[^*] | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.59                                | 1.23-1.26  | 14.8       | 7.0     | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.58                                | 1.23-1.26  | 14.8       | 7.0     | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.57                                | 1.23-1.26  | 14.8       | 7.0     | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.56                                | 1.23-1.26  | 14.8       | 7.0     | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.55                                | 1.23-1.26  | 14.7       | 7.0     | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.54                                | 1.19-1.25  | 14.7       | 7.0     | 8.0   | 2.10    | 1.8      | -      | 3.9 or higher |
| 4.53                                | 1.19-1.25  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.52                                | 1.19-1.25  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.51                                | 1.19-1.24  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.50                                | 1.19-1.24  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.49                                | 1.19-1.24  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.48                                | 1.19-1.24  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.47                                | 1.19-1.24  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |
| 4.46                                | 1.19-1.24  | 14.7       | 7.0     | 8.0   | 2.6     | 1.8      | -      | 3.8 or higher |

[^*]: Both stand-alone and High Availability (HA) with Sentinel deployments.

## More Information

Version Compatibility Matrix:

- [Cognigy.AI and Insights](../../ai/installation/version-compatibility-matrix.md)
- [Agent Assist Workspace](../../ai-copilot/installation/version-compatibility-matrix.md)
- [Live Agent](../../live-agent/installation/deployment/version-compatibility-matrix.md)