# Once

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e0f473a-once.PNG" width="100%" />
</figure>

## Description
<div class="divider"></div>

The Once Node is used to execute the appended part of the Flow only once during a session. It can be reset using the Reset Context Node.

The first time in a given session that a **Once** node is activated, the **On First Time** branch will be taken. All future activations of the same once node will take the **Afterwards** branch. It is common to use a once node to deliver a single welcome message to a new user, and ensure that the same message is not delivered again throughout the conversation.