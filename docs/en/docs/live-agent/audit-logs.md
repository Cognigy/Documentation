---
title: "Audit Logs"
slug: "audit-logs"
description: "Live Agent Audit Logs ensure transparency and accountability by recording user activities, system events, and configuration changes. They help answer key questions about actions taken in your Live Agent environment, enhancing security, auditing, and compliance."
hidden: false
---

# Audit Logs

_Audit Logs_ is a tool for maintaining transparency and accountability within your Live Agent resources. These logs record important user activities, system events, and configuration changes, providing details for security, auditing, and compliance purposes. With audit logs, you can answer questions like "Who did what, where, and when?" within your Live Agent environment. The logs include events like `create`, `update`, and `delete` for [Inboxes](inboxes.md) and [Automation Rules](automation-rules.md).

Only users with the `Administrator` role can access these logs. 

To read the audit logs, go to **Settings > Audit Logs**.

## Audit Log Entry

Every audit log entry provides a structured format that includes the user responsible for the activity, the specific action performed, and the timestamp of the event.

```txt
| USER             | Activity                          | Time                  |
| ---------------- | --------------------------------- | --------------------- |
| System           | Created a new inbox (#24725)      | Jun 22, 2023 03:06 PM |
| user@cognigy.com | Deleted an automation rule (#376) | Jun 22, 2023 12:48 PM |
```
In the first log entry, the system created a new inbox with the identifier `#24725`. The activity occurred on `Jun 22, 2023, at 03:06 PM`.

In the second log entry, the user with the `user@cognigy.com` login deleted an automation rule with the identifier `#376`. The activity occurred on `Jun 22, 2023, at 12:48 PM`.