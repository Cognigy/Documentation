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
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/once.png" width="80%" />
</figure>

## Description

The Once Node is used to execute the appended part of the Flow only once during a session. It can be reset using the Reset Context Node.

The first time in a given session that a **Once** Node is activated, the **On First Time** branch will be taken. All future activations of the same once node will take the **Afterwards** branch. It is common to use a once node to deliver a single welcome message to a new user, and ensure that the same message is not delivered again throughout the conversation.