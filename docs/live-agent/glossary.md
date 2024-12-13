---
title: "Glossary"
slug: "glossary"
description: "Live Agent Glossary provides a reference for users, agents, and anyone involved in the operation or understanding of Live Agent software and practices."
hidden: false
---

# Live Agent Glossary

Live Agent terms listed in alphabetical order. All terms in the glossary are given for informational purposes.

## A

_**Abandoned (conversations)**_
:  The status that indicates that a conversation is closed because the user left the conversation. It is configurable under the Account Settings section.

_**Account**_
:  A separate Live Agent instance that represents the entire organization or company. In this context, all the resources, data, and users related to the organization are managed centrally at the org level. In other alternative Live Agent systems, this entity may also be referred to as Tenant.

_**Account Settings**_
:  You can change the general settings for an account, such as name and language. You will find access via the dashboard sidebar of Live Agent. For more information, read the [Account Settings](settings/account-settings.md) documentation.

_**Agents**_
:  Members of your Customer Support team. Agents will be able to view and reply to messages from your users. On the Live Agent sidebar you can click Settings > Agents to configure it. To differentiate between AI agents and human agents in the Live Agent documentation, we primarily use the [Human Agent](#h) term to denote members of the support team. For more information, read the [Agent](settings/agents.md) documentation.

_**Agent Queue**_
:  A list of conversations waiting for attention from Agents. In Live Agent, a queue is similar to the waiting area, where conversations are held until the Agent has not sent the first reply. The queue is visible to Agents on the Mine tab of the Conversation page, where they can see the conversations assigned to them and wait for their attention. For more information, read the [Agent Queue](conversation/conversation-queue/overview.md) documentation.

_**Agent Status**_
:  Agent statuses help manage the availability and workload of human agents, ensure consistent and efficient customer service, and provide transparency regarding the agent's availability to handle chat requests. For more information, read the [Agent Statuses](settings/agents.md) documentation.

_**AI Copilot Bot**_
:  A tool for assisting the Agents while talking to the customers. It consists of a dedicated Flow to provide information to the Agent. Therefore, it needs to be configured as a separate Flow in Cognigy.AI.
For more information, read the [AI Copilot Bot](assistants/ai-copilot-bot.md) documentation.

_**AI Copilot Whisper**_
:  A virtual assistant that helps human agents improve their performance. It displays AI-powered suggested replies and next-action suggestions directly in the chat box. When a user sends a message, a suggested reply will appear in a centered frame inside the chat. A human agent can ignore it or click the reply arrow icon to send. For more information, read the [AI Copilot Whisper](./assistants/ai-copilot-whisper.md) documentation.

_**AI Copilot Workspace**_
:  A virtual assistant that helps human agents improve their performance. It consists of an embedded or standalone collection of interactive widgets arranged in a customizable grid. The widgets actively support the human agent by displaying various information, including user data, user sentiment, suggesting next action, providing chat transcription, and more. For more information, read the [AI Copilot](../ai-copilot/index.md) documentation.

_**API Access Token**_
:  A data structure that contains authentication and authorization information to use an application. It can be used if you are building an API-based integration and its actions are limited by the user role. For more information, read the [Profile Settings](profile-settings.md) documentation.

_**Assigned (conversations)**_
:  Every Conversation in Live Agent can have an assignee. An assignee can be manually added to the Conversation via the UI, the API, or automatically via an available round-robin assignment system.
For more information, read the [Conversation Routing](conversation/conversation-routing/overview.md) documentation.

_**Attachments**_
:  In an ongoing Live Agent conversation, both the user and the agent can send files such as images, videos, documents, and forms directly during the conversation. All attachments within account conversations are accessible in the Settings menu.
For more information, read the [Attachments](settings/attachments.md) documentation.

_**Audit Logs**_
:  A tool for maintaining transparency and accountability within your Live Agent resources. These logs record important user activities, system events, and configuration changes, providing details for security and auditing purposes. With audit logs, you can answer "Who did what, where, and when?" questions within your Live Agent environment. The logs include events such as create, update, and delete for Inboxes and Automation Rules. Only users with the Administrator role can access these logs.
For more information, read the [Audit Logs](settings/audit-logs.md) documentation.

_**Automation (Rules)**_
:  Automation rules can replace and automate existing processes that require manual effort. You can do many things with automation, including adding labels and assigning conversations to the best agent. So the team focuses on what they do best and spends less time on manual tasks.
For more information, read the [Automation](settings/automation-rules.md) documentation.

_**Away (Agents)**_
:  One of four possible Live Agent statuses.
This status indicates that the Agent is temporarily unavailable or not actively monitoring the chat system. Agents in this status cannot handle customer conversations.
For more information, read the [Agent Statuses](settings/agents.md) documentation.

## B

_**Busy (Agents)**_
:  One of four possible Live Agent statuses.
This status indicates that the Agent is currently engaged in productive activities or actively assisting a customer. Agents in the Busy status temporarily defer new customer interactions.
For more information, read the [Agent Statuses](settings/agents.md) documentation.

## C

_**Canned Responses**_
: Pre-saved reply templates allow human agents to respond to a conversation quickly.
Canned Response templates provide support for HTML formatting.
For creating a Canned Response, just click the Add Canned Response.
Canned responses are used with the help of Short Codes. Agents can access canned responses while on a chat by typing `/` followed by the short code.
For more information, read the [Canned Responses](settings/canned-responses.md) documentation.

_**Cognigy Live Agent OAuth**_
: You can log in to Live Agent using your Cognigy.AI account by utilizing the OAuth2 protocol. To configure this, follow the instructions provided in the Helm Values section.
For more information, read the [Live Agent OAuth](installation/deployment/cognigy-live-agent-oauth.md) documentation.

_**Conversation**_
: Your chats with various customers are referred to as conversations in Live Agent.
This includes all session messages, including the customer, bot or human agent responses.
A Conversation is the communication channel opened between an Agent and a customer.
For more information, read the [OData Analytics Endpoint](tools/odata-endpoint.md#conversation) and the [Conversation workflow](conversation/overview.md) documentation.

_**Conversation Routing**_
: The process of directing customer or user inquiries to the right agent or team. It matches inquiries with agent skills, languages, and workload, and ensures efficient issue resolution. How you can assign an Agent to a Conversation is described in the [Conversation Routing](conversation/conversation-routing/overview.md) documentation.

_**Conversation Status**_
: Communication between customer and operator in Live Agent can get different statuses:
Unassigned, Assigned, Pending, Snoozed, Open, Resolved and Abandoned.

_**Conversation Workflow**_
: A structured sequence of steps that guide a conversation, from initiation to conclusion. It outlines how interactions progress, often involving greeting, information gathering, responses, problem resolution, and closing. For more information, read the [Conversation Workflow](conversation/overview.md) documentation.

## H

_**Human Agents**_
: Human members of your Customer Support team. They will be able to view and reply to messages from your users directly or, for example, when an AI Agent is asked to forward a customer request to a human support member.

## I

_**Inboxes**_
: Workspaces where human agents manage real-time chat interactions with customers and handle related tasks. In your Live Agent account, you can have unlimited inboxes, and you can view conversations specific to an inbox by clicking on it. Additionally, you can modify settings for already existing inboxes. For more information, read the [Inboxes](settings/inboxes.md) documentation.

_**Inbox ID**_
: A unique identifier that represents the connection between Cognigy.AI and Live Agent. It is used to link and manage the integration between these two systems, enabling seamless communication and data exchange.

## L

_**LA Copilot**_
: LA Copilot allows human agents using Cognigy Live Agent to be assisted by AI-powered agents when conversing with the customer. Using this functionality, during an active handover, fully configurable AI Agent messages can be displayed to the human agent based on customer messages to best assist the customer. For more information, read the [LA Copilot](assistants/overview.md) documentation.

_**Labels**_
: Tags that help you to categorize and prioritize conversations, providing additional context and information about the content or status of each conversation. For more information, read the [Labels](settings/labels.md) documentation.

_**Live Agent**_
: Cognigy is a product that combines conversational AI and human agents to enhance customer experiences and improve support team productivity. It allows a smooth transition between customer-AI Agent conversations and human support, making it easier to handle customer inquiries effectively. For more information, read the [Live Agent](overview.md) documentation.

_**Live Agent Settings**_
: Cognigy Live Agent settings offer many features, such as team and inbox management, automation rules, canned responses, attachments, audit logs, and account settings. These capabilities can significantly improve customer interactions and enhance support efficiency. Note that these settings overwrite all Profile settings. For more information, read the [Live Agent settings](settings/overview.md) documentation.

## M

_**Mentions**_
: You have the option to tag a teammate in private notes to bring their attention to a specific topic for discussion. Additionally, you can access conversations that specifically mention you through the Mentions view.

## N

_**Notifications**_
: Messages or alerts that are generated to inform human agents about new events, activities, or interactions within a conversation chat system in Live Agent. For more information, read the [Notifications](notifications.md) documentation.

## O

_**OData Analytics Endpoint**_
: Live Agent exposes an OData v4 analytics Endpoint to retrieve analytics records. OData, the best way to REST, is a powerful API framework. The OData Endpoints allows you to retrieve the most relevant data models from Live Agent by using GET requests. It covers all your enterprise analytics needs to make fine-grained queries in your spreadsheets or build rich dashboards for your bots with your favorite data visualization tool. Note that the Live Agent OData Endpoint only supports GET requests and does not support any other request types, such as `PATCH`, `DELETE`, or `POST`. For more information, read the [OData Endpoint](tools/odata-endpoint.md) documentation.

_**Offline (Agents)**_
: One of four possible Live Agent statuses. This status indicates that the agent is not currently logged in to the Live Agent system. Agents in this status cannot handle customer interactions. For more information, read the [Agent Statuses](settings/agents.md) documentation.

_**Online (Agents)**_
: One of four possible Live Agent statuses. This status indicates that the Agent is available and actively handling customer interactions. For more information, read the [Agent Statuses](settings/agents.md) documentation.

_**Open (conversations)**_
: This conversation status indicates that a conversation is prepared for a handover to a human agent.

## P

_**Pending (conversations)**_
: This status reflects the quantity of conversations that were temporarily paused, awaiting a response from either the customer or a human agent.

_**Profile Settings**_
: A group of settings defined by an end user that are important for configuration in Live Agent. Basic User Profile Settings can be changed or updated. For more information, read the [Profile Settings](profile-settings.md) documentation.

## R

_**Reports**_
: The conversation reports which have occurred over time. They can be viewed in the Reports section. Click Reports in the Live Agent Dashboard sidebar to get an overview displayed. A graph will show the Conversations that have occurred during the selected days. For more information, read the [Reports](reports/overview.md) documentation.

_**Resolved (conversations)**_
: This conversation status means that a conversation is closed because the user's problem has been fixed.

_**Roles**_
: A method of granting permissions to specific users for data access. These permissions are based on a user role profile. In Live Agent users can have three different Single Roles: `Agents`, `Supervisors`, and `Administrators`. You can also assign more than one role to a human agent. For more information, read the [Roles](roles.md) documentation.

## S

_**Skills**_
: Specific abilities possessed by Agents, such as language proficiency or expertise in a particular domain. You can add Skills using the Agents dashboard of Live Agent.

_**Snoozed (conversations)**_
: This conversation status is applied when you need to wait for a specific period or require a reply from the customer to continue the conversation. In a conversation workflow, it indicates that the issue will be set aside for now, and the status will change to Open when a time trigger or customer response trigger was activated.

## T

_**Teams**_
: Groups based on human agents' responsibilities. A user can be part of multiple Teams. You can assign conversations to a team when you are working collaboratively. For more information, read the [Teams](settings/teams.md) documentation.

## U

_**Unassigned (conversations)**_
:  This conversation status is applied when a conversation has not yet been assigned to a human agent.