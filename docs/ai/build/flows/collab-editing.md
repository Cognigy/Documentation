---
title: "Collaborative Editing"
description: "Collaborative editing allows multiple users to edit a Flow simultaneously. With Collaborative Editing, you can see the avatars of other users editing the Flow and Nodes. Their changes appear in the Flow and Node editors in real time."
slug: "collaborative-editing"
hidden: false
tags:
  - collaborative editing
  - flow editor
  - nodes
  - node editor
---

# Collaborative Editing

[![Version badge](https://img.shields.io/badge/Added in-v2025.12.0-blue.svg)](../../../release-notes/2025.12.md)

The _Collaborative Editing_ feature allows multiple users to edit a Flow simultaneously. With Collaborative Editing, you can see the avatars of other users editing the Flow and Nodes. Their changes appear in the Flow and Node editors in real time.

<div style="text-align:center">
   <video width="650" height="400" controls="" alt="type:video" style="border: 1px solid #ccc; border-radius: 12px;" autoplay>
      <source src="https://docscognigyassets.blob.core.windows.net/assets/collab-editing.mov">
   </video>
</div>

## Key Benefits

- **Visual Indication of User Presence**. You can see what users are working on in the Flow editor.
- **Easy Collaboration**. You can start discussions on Nodes to ask questions, make suggestions, or share ideas. Additionally, you can mention other users directly in discussion threads. Mentioning other users triggers an email notification to them.
- **Simultaneous Editing**. The Flow and Node editors show when users are working simultaneously on the same Flows and Nodes to prevent users from overwriting each other's changes.

## User Presence

The Flow editor shows the presence of other users with icons including initials:

- in the upper-right corner of the Flow editor when other users have the same Flow open.
- attached to the upper-right corner of Nodes when other users are currently editing them.

## Mouse Cursors

Mouse cursors show the position of other users editing the same Flow.

## Discussions

To start a discussion, right-click the Node and select **Start Discussion**. You can enter the first comment in the **Start Discussion** field.

Nodes with discussions display ![discussion-icon](../../../_assets/icons/discussion.svg) attached to them. In a discussion thread, you can add comments and mention other users. To mention other users, type `@` and select the user from the list of suggestions. Only Project members are included in the list of suggestions. Mentioning other users triggers an email notification to them.

You can start multiple discussion threads on a Node. This way, you can open multiple discussions on a Node and separate the topics if necessary. To start a new discussion thread, follow these steps:

1. Right-click the Node and select **Open Discussions**. The discussion menu opens.
2. Enter a comment in the **Start Discussion** field.

## Simultaneous Editing

### Flow Editor

The Flow editor shows when other users make changes to the Flow you are working on. Whenever other users make changes to the Flow, for example, by adding or editing a Node, the Flow editor displays the following:

- A refresh button in the upper-right corner. Click the refresh button to view the latest changes.
- The number of changes made by other users next to the refresh button.

### Node Editor

The Node editor shows the following:

- When multiple users open the same Node, the user icon appears in the upper-right corner.
- When another user makes changes, the Node editor is locked for all other users and displays ![lock-icon](../../../_assets/icons/node-lock.svg).
- When the changes are saved, the Node editor displays the ![refresh-icon](../../../_assets/icons/refresh.svg) button. Then, you can:
  - Click the ![refresh-icon](../../../_assets/icons/refresh.svg) button to refresh the Node editor and view the latest changes.
  - Select ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Edit** to unlock and keep editing the Node. The changes you save after unlocking the Node overwrite the changes other users previously made.

## More Information

- [Flows](overview.md)
- [Flow Editor](editor.md)
- [Nodes](../nodes/overview.md)
