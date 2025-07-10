---
title: "Analytics Steps"
slug: "analytics-steps"
description: "Analytics Steps are progress markers that help you monitor the Flow paths users take during interactions with the AI Agent."
tags:
  - analytics steps
  - insights
  - odata
  - node steps
  - intent steps
hidden: false
---

In Cognigy.AI, _Analytics Steps_ are progress markers that help you monitor the Flow paths users take during interactions with AI Agents. These steps are recorded in the Analytics database and can be analyzed in [Insights](insights.md) or retrieved through the [OData Endpoint](odata.md).

There are two types of Analytics Steps:

- [Node Steps](#node-steps)
- [Intent Steps](#intent-steps)

## Working with Analytics Steps

You can create Analytics Steps in your Flows in **Build > Flows**.

### Node Steps

Node Steps are Analytics Steps that record Node executions in the Analytics database:

1. In the Flow editor, click the Node for which you want to add an Analytics Step.
2. In **Settings > Analytics Step** in the Node editor, enter a name for the step in the **Analytics Step** field and save the Node. The step name can't:
    - Contain the following characters: `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`, `¥`, `!`, `&`, `$`, `§`, `%`, `{`, `}`, `=`, `»`, `,`, `.`, `;`, `+`, `~`, `#`, `` ` ``, `'`, `°`, `µ`, `€`.
    - Start or end with a whitespace.
    - Be longer than 128 characters.

### Intent Steps

Intent Steps are Analytics Steps that record Intent recognition in the Analytics database:

1. In the Flow editor, navigate to **NLU > Intents** and select an Intent.
2. In **Advanced > Analytics step**, enter a name for the step in the **Analytics step** field. The step name can't:
    - Contain the following characters: `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`, `¥`, `!`, `&`, `$`, `§`, `%`, `{`, `}`, `=`, `»`, `,`, `.`, `;`, `+`, `~`, `#`, `` ` ``, `'`, `°`, `µ`, `€`.
    - Start or end with a whitespace.
    - Be longer than 128 characters.

!!! note "Analytics Steps in the OData Records"
    Analytics Steps exist in the OData records only after a conversation has triggered them at least once.

## More Information

- [Collecting Data](collecting-data.md)
- [Insights](insights.md)
- [OData Endpoint](odata.md)
- [Flows](../build/flows/overview.md)