---
title: "Audit Logs"
slug: "audit-logs"
description: "Live Agent Audit Logs ensure transparency and accountability by recording user activities, system events, and configuration changes. They help answer key questions about actions taken in your Live Agent environment, enhancing security and auditing."
hidden: false
---

# Audit Logs

[![Version badge](https://img.shields.io/badge/Added in-v4.54-blue.svg)](../../release-notes/4.54.md)

_Audit Logs_ are a tool for maintaining transparency and accountability within your Live Agent resources. 

These logs record important user activities, system events, and configuration changes, providing details for security and auditing purposes. 

With audit logs, you can answer "Who did what, where, and when?" questions within your Live Agent environment. 

The logs include events such as `create`, `update`, and `delete` for:

- [Assist Bots](./../conversation/assist-bot.md)
- [Automation Rules](automation-rules.md)
- [Inboxes](inboxes.md)
- [Inbox Collaborators](inboxes.md#inbox-collaborators)
- [Inbox Webhooks](inboxes.md#inbox-settings)
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

To view audit logs, follow these steps:

1. Open the Live Agent interface.
2. Go to **Settings > Audit Logs**.

You will see a list of log entries containing user and system events.

### Activity Details

Clicking an event displays the advanced details of what occurred in an event:

- The activity name
- The agent who made the action
- The time the action was executed
- The type of action
- The ID of the Inbox affected by the action
- The changes made with the action
