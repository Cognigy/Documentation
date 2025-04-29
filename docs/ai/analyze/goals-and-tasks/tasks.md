---
title: "Tasks"
slug: "tasks"
description: "Tasks let you monitor when specific events occur within your Flow."
hidden: false
---

# Tasks

[![Version badge](https://img.shields.io/badge/Updated in-v4.100-blue.svg)](../../../release-notes/4.100.md)

_Tasks_ let you monitor when specific events occur within your Flow. 

To track these specific events within a Flow, use a [Complete Task](../../build/node-reference/analytics/complete-task.md) Node.

Once the Node is triggered,
the task is recorded in the Analytics database and can be monitored in the [Contact Profile](../contact-profiles.md),
viewed in Insights [reports](../../../insights/reports/overview.md) and [explorers](../../../insights/explorers/transcript.md#session-transcript-details), and accessed through the [OData Endpoint](../odata.md) for further analysis.

For more information, read the [Complete Task Node](../../../ai/build/node-reference/analytics/complete-task.md) article.

## `profile.goals`: your Compatibility Alias to `profile.tasks`

In the [Profile](../../test/interaction-panel/profile.md) object, `profile.goals` has been renamed to `profile.tasks`.
To ensure your existing code still works in Flows, `profile.goals` now functions as a compatibility alias that points to `profile.tasks`. This means you can still use `profile.goals`, it's value will be stored in the `profile.tasks` object. Accessing `profile.goals` will provide the value from `profile.tasks` in places like:

- CognigyScript expressions `{{"{{profile.goals}}"}}` or `{{"{{cp.goals}}"}}`.
- Code Nodes, Extensions, Functions.

The `profile.goals` alias is available for existing implementations to maintain continuity. However, for new Flows, use the new `profile.tasks` naming convension in your CognigyScript expressions and code. This approach ensures that your Flows comply with the latest platform standards and best practices.

### Restrictions of the Alias

This compatibility alias for `profile.goals` isn't a standard property of the Profile object. 
This alias limits how you can use or inspect it:

- **Property Listing** – `profile.goals` won't appear when you list the object's properties, for example, using `Object.keys(profile)`.
- **JSON Serialization** – `profile.goals` won't be included when you turn the Profile object into JSON, for example, `JSON.stringify(profile)`.

## More Information

- [Goals](goals.md)
- [Overview](overview.md)