---
title: "Skills"
slug: "skills"
description: "Live Agent Skills are specific abilities that human agents possess, such as language proficiency and expertise in particular domains."
hidden: false
---

# Skills

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../release-notes/4.60.md)

_Skills_ are specific abilities that human agents possess, such as language proficiency and expertise in particular domains.

Only users with the Administrator and Supervisor roles can configure and assign skills.

## Create a Skill

To create a skill, follow these steps:

1. In the Live Agent interface, go to **Settings > Skills**.
2. In the upper-right corner, click **Add Skill**.
3. In the **Add Skill** window, fill in the following fields:
    - **Type** — select one of the following types:
        - **Language** — a skill that refers to language expertise.
        - **Skill** — a skill that refers to specific knowledge.
    - **Name** — specify a unique name that reflects the skill. For example, `English`, `Spanish`, `German` for the **Language** type, or specific skills like `IT`, `HR`, `Customer Service` for the **Skills** type.
4. Click **Submit**.

The skill will appear in the list on the **Skills** page.
Afterward, you can edit or delete the added skill.

## Assign a Skill 

To assign a skill to a human agent, follow these steps:

1. In the Live Agent interface, go to **Settings > Agents**.
2. In the row with the agent, click **Skills**.
3. In the **Skills** window, click **Add skill**.
4. Select a skill type and its value. You can add multiple skills.
5. Click **Add Skills**.

The skills will appear in the **Skills** column of the row with the agent.

If you want to remove a skill from the row with the agent, open the **Skills** window and click ![cross](../../_assets/icons/cross.svg) on the right side of the selected skill.

## Apply Skills

To start using skills in conversation routing, you need to specify your created skills in the [Handover to Agent](../../ai/build/node-reference/service/handover-to-agent.md) Node.

If you want to assign conversations only to agents relevant to their skills, in addition to the Handover to Agent Node, you can add the [Check Agent Availability](../../ai/build/node-reference/service/check-agent-availability.md) Node.
In this case, if a relevant agent is not found, you can notify the user. This Node checks only online agents with the relevant skills and performs routing.