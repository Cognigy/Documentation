---
title: "Once" 
slug: "once" 
hidden: false 
tags:
  - Cognigy.AI
  - Nodes
  - Once
---

# Once

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/once.png" width="50%" />
</figure>

## Description

The Once Node is used to execute a part of the Flow only once during a session. It can be reset using the Reset Context Node.

The Once Node has two child Nodes: an On First Time Node and an Afterwards Node. The first time that a Once Node is activated in a session, the On First Time Node is executed. All future activations of the same Once Node execute the Afterwards Node. It is common to use a Once Node to deliver a single welcome message to a new user, and ensure that the same message is not delivered again throughout the conversation.