---
title: "Version Compatibility Matrix"
slug: "version-compatibility-matrix"
description: "Version compatibility matrix for Cognigy Products and Infrastructure Components provides valuable insights and ensures seamless integration and upgrades for optimal performance."
hidden: false
---

# Version Compatibility Matrix: Cognigy Products and Infrastructure

This matrix outlines the compatibility of different Cognigy product versions with Cognigy infrastructure components,
such as Kubernetes, MongoDB, and Redis. 

It enables users to make informed decisions about system integrations and upgrades.
The matrix is a valuable resource
for ensuring the smooth and successful deployment of Cognigy products within an environment.

## Cognigy.AI and Insights

| Cognigy / Infrastructure component | Kubernetes | MongoDB | Redis / Redis Persistent                    | Traefik | RabbitMQ | Helm |
|------------------------------------|------------|---------|---------------------------------------------|---------|----------|------|
| v4.46                              | 1.19-1.24  | 4.2-4.4 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.47                              | 1.19-1.24  | 4.2-4.4 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.48                              | 1.19-1.24  | 4.4-5.0 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.49                              | 1.19-1.24  | 4.4-5.0 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.50                              | 1.19-1.24  | 4.4-5.0 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.51                              | 1.19-1.25  | 4.4-5.0 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.52                              | 1.19-1.25  | 4.4-5.0 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.53                              | 1.19-1.25  | 4.4-5.0 | 7.0 (stand-alone)                           | 2.6     | 3.9      | 3.8+ |
| v4.54                              | 1.19-1.25  | 4.4-5.0 | 7.0 (both stand-alone and HA with Sentinel) | 2.10    | 3.9      | 3.9+ |
| v4.55                              | 1.19-1.26  | 4.4-5.0 | 7.0 (both stand-alone and HA with Sentinel) | 2.10    | 3.9      | 3.9+ |


## Cognigy Live Agent

| Cognigy / Infrastructure component | Kubernetes | PostgreSQL | Redis                                       | Helm |
|------------------------------------|------------|------------|---------------------------------------------|------|
| v4.46                              | 1.19-1.24  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.47                              | 1.19-1.24  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.48                              | 1.19-1.24  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.49                              | 1.19-1.24  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.50                              | 1.19-1.24  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.51                              | 1.19-1.25  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.52                              | 1.19-1.25  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.53                              | 1.19-1.25  | 15.1       | 7.0 (stand-alone)                           | 3.8+ |
| v4.54                              | 1.19-1.25  | 15.1       | 7.0 (both stand-alone and HA with Sentinel) | 3.9+ |
| v4.55                              | 1.19-1.26  | 15.1       | 7.0 (both stand-alone and HA with Sentinel) | 3.9+ |

## Cognigy Agent Assist Workspace

| Cognigy / Infrastructure component | Kubernetes | Redis                                       | MongoDB    | Helm |
|------------------------------------|------------|---------------------------------------------|------------|------|
| v4.51                              | 1.22-1.25  | 7.0 (stand-alone)                           | Same as AI | 3.8+ |
| v4.52                              | 1.22-1.25  | 7.0 (stand-alone)                           | Same as AI | 3.8+ |
| v4.53                              | 1.22-1.25  | 7.0 (both stand-alone and HA with Sentinel) | Same as AI | 3.8+ |
| v4.54                              | 1.22-1.25  | 7.0 (both stand-alone and HA with Sentinel) | Same as AI | 3.9+ |
| v4.55                              | 1.22-1.26  | 7.0 (both stand-alone and HA with Sentinel) | Same as AI | 3.9+ |

## Cognigy Voice Gateway

| Cognigy / Infrastructure component | Kubernetes | PostgreSQL | Redis | MySQL | Traefik | InfluxDB | Helm |
|------------------------------------|------------|------------|-------|-------|---------|----------|------|
| v4.50                              | 1.19-1.24  | 14.7       | 7.0   | 8.0   | 2.6     | 1.8      | 3.8+ |
| v4.51                              | 1.19-1.24  | 14.7       | 7.0   | 8.0   | 2.6     | 1.8      | 3.8+ |
| v4.52                              | 1.19-1.25  | 14.7       | 7.0   | 8.0   | 2.6     | 1.8      | 3.8+ |
| v4.53                              | 1.19-1.25  | 14.7       | 7.0   | 8.0   | 2.6     | 1.8      | 3.8+ |
| v4.54                              | 1.19-1.25  | 14.7       | 7.0   | 8.0   | 2.10    | 1.8      | 3.9+ |
| v4.55                              | 1.23-1.26  | 14.7       | 7.0   | 8.0   | 2.10    | 1.8      | 3.9+ |