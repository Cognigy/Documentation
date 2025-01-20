---
title: "Audit Logs"
slug: "audit-logs"
description: "Live Agent Audit Logs ensure transparency and accountability by recording user activities, system events, and configuration changes. They help answer key questions about actions taken in your Live Agent environment, enhancing security and auditing."
hidden: false
---

# Audit Logs

[![Version badge](https://img.shields.io/badge/Updated in-v4.57-blue.svg)](../../release-notes/4.57.md)

_Audit Logs_ are a tool for maintaining transparency and accountability within your Live Agent resources. 

These logs record important user activities, system events, and configuration changes, providing details for security and auditing purposes. 

With audit logs, you can answer "Who did what, where, and when?" questions within your Live Agent environment. 

The logs include events such as `create`, `update`, and `delete` for the following entities:

- [AI Copilot Bot](../assistants/ai-copilot-bot.md)
- [Automation Rules](automation-rules.md)
- [Inboxes](inboxes.md)
- [Inbox Collaborators](inboxes.md)
- [Inbox Webhooks](inboxes.md)
- [Teams](teams.md)

Only users with the `Administrator` role can access these logs. 

## Structure of Audit Log Entries

Every audit log entry provides a structured format that includes the user responsible for the activity, the specific action performed, and the timestamp of the event.

```txt
| User             | Activity                          | Time                  |
| ---------------- | --------------------------------- | --------------------- |
| System           | Created a new inbox (#24725)      | Jun 22, 2023 03:06 PM |
| user@cognigy.com | Deleted an automation rule (#376) | Jun 22, 2023 12:48 PM |
```
In the first log entry, the system created a new inbox with the identifier `#24725`. The activity occurred on `Jun 22, 2023, at 03:06 PM`.

In the second log entry, the user with the `user@cognigy.com` login deleted an automation rule with the identifier `#376`. The activity occurred on `Jun 22, 2023, at 12:48 PM`.

## View Audit Logs

To view audit logs, go to **Settings > Audit Logs** in the Live Agent interface.

You will see a list of log entries containing user and system events.

### View Changes

For actions, you can view details on any changes that were made.

To do this, follow these steps:

1. In the Live Agent interface, go to **Settings > Audit Logs**.
2. Select a log from the list by clicking on it.

A window will open displaying the details of the changes.

For an `update` action, the **Before** section presents the original values or configuration, while the **After** section displays the new values after the update.

<figure>
<img src="../../../_assets/live-agent/LA-audit-logs-update-inbox-changes.png" width="100%" alt="Audit Logs Changes" />
  <figcaption>Audit Logs Changes</figcaption>
</figure>