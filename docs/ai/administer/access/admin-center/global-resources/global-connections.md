---
title: "Global Connections"
slug: "global-connections"
description: "Global Connections are Cognigy.AI Connections at organization level."
hidden: false
tags:
    - Global resources
    - Global Connections
    - Admin Center
---

# Global Connections

[![Version badge](https://img.shields.io/badge/Added in-v4.97-blue.svg)](../../../../../release-notes/4.97.md)

_Global Connections_ are [Connections](../../../../build/connections.md) established when you create [global LLMs](../../../../empower/llms/overview.md).

## Working with Global LLMs

=== "GUI"

    You can view, edit, and delete global Connections in the [Admin Center](../overview.md) under **Resources > Connections** as well as copy their Reference ID.

=== "API"

    You can view, edit, and delete global Connections using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--Connections-v2.0). To do so, set the `resourceLevel` parameter to `organisation` in the JSON body.
