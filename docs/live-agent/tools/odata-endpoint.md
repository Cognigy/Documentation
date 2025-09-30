---
title: "Live Agent OData Endpoint"
slug: "live-agent-odata-endpoint"
hidden: false
---

# Live Agent OData Analytics Endpoint

[![Version badge](https://img.shields.io/badge/Updated in-v2025.20-blue.svg)](../../release-notes/2025.20.md)

Live Agent exposes an OData 4 analytics endpoint to retrieve analytics records. [OData](https://www.odata.org/), the best way to REST, is a powerful API framework. The OData endpoints allows you to retrieve the most relevant data models from Live Agent by using GET requests. It covers all your enterprise analytics needs to make fine-grained queries in your spreadsheets or build rich dashboards for your bots with your favorite data visualization tool.

The Live Agent OData endpoint supports only `GET` requests and doesn't support any other request types, such as `PATCH`, `DELETE`, or `POST`.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019467199-Cognigy-Sessions-Analytics-OData" target="_blank" >Technical video "Analytics &amp; OData"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

## Usage and Authentication

<div class="divider"></div>

To connect to the OData endpoint, get a Live Agent Access Token:

1. In the left-side menu of the Live Agent interface, go to **Profile Settings**.
2. In the **Access Token** section, copy the existing token.
3. Paste this token into your OData request.

An OData URL is composed of the service root, API version, service path, data collection, and Live Agent access token parameter as follows:

```txt
GET /<api-version>/odata/<OData data model>?<odata query> HTTP/1.1
Host: <odata domain>
Authorization: Bearer <Live Agent access token>
```

The authentication can also be done using a query param such as follows:

```
/<api-version>/odata/<OData data model>?<odata query>&$top=1&$skip=0&apikey=<Live Agent access token>
```

!!! note "OData Domain Name"
    The OData endpoint is available on a different domain from your Cognigy User Interface domain. For example, [https://odata-liveagent-trial.cognigy.ai/v1.0/odata](https://odata-dev-live-agent.cognigy.ai/v1.0/odata).

    For example, on our trial server, the OData endpoint URL for the Analytics Inputs Collection is `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Message?` For on-premises installations, replace the `odata-trial.cognigy.ai` domain name with the domain name configured for your local installation.

!!! note "Excel/Power BI"
    When using PowerBI or Excel, you might be asked to authenticate. Simply choose `anonymous authentication` and pass the Live Agent access token as a query parameter `&apikey=<Live Agent access-token>`

## Endpoint Versions

<div class="divider"></div>

=== "Live Agent OData Endpoint 1.1"

    This endpoint version is available for Live Agent 2025.18.0 onwards. In this version, the following OData collections are available:

    - [Message](#message) (`/Message`)
    - [Conversation](#conversation) (`/Conversation`)
    - [Inbox](#inbox) (`/Inbox`)
    - [Label](#label) (`/Label`)
    - [User](#user) (`/User`)

    To see all the available OData models, you can use the following Endpoint:
    `https://<hostname>/v1.1/odata/`

    The URL for accessing the OData endpoint 1.1 is the following:
    `https://<hostname>/v1.1/odata/<collection>`

=== "Live Agent OData Endpoint 1.0"

    This endpoint version is available for Live Agent 1.0.0 onwards. In this version, the following OData collections are available:

    - [Message](#message) (`/Message`)
    - [Conversation](#conversation) (`/Conversation`)
    - [Inbox](#inbox) (`/Inbox`)
    - [Label](#label) (`/Label`)
    - [User](#user) (`/User`)

    To see all the available OData models, you can use the following Endpoint:
    `https://<hostname>/v1.0/odata/`

    The URL for accessing the OData endpoint 1.0 is the following:
    `https://<hostname>/v1.0/odata/<collection>`

## Querying

<div class="divider"></div>

The Endpoint supports the following OData Query Language operators:

- `$skip`[^*]
- `$top`[^*]
- `$filter`
- `$select`
- `$orderby`
- `$expand`

[^*]: This parameter is required to make a request to the Live Agent OData endpoint.

### Example Queries

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Conversation(1)?$select=inbox_id,account_id&$top=1&$skip=0&apikey=<access-token>`
    Return the columns inbox_id and account_id for the Conversation with id=1.

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Conversation?$select=id,account_id&$top=1&$skip=0&apikey=<access-token>`
    Return the columns' ID and account_id for all Conversations.

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Conversation?$select=id,account_id&$top=1&$skip=0&$filter=created_at le '2021-11-23T00:00:00'&$top=1&$skip=0&apikey=<access-token>`
    Return the columns' ID and account_id for all the Conversations filtered by the created_at column being lower or equal to '2021-11-23T00:00:00'

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation(1)?$select=inbox_id,account_id&$top=1&$skip=0&apikey=<access-token>`
    Return the columns inbox_id and account_id for the Conversation with id=1.

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&$top=1&$skip=0&apikey=<access-token>`
    Return the columns' ID and account_id for all Conversations.

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&$top=1&$skip=0&$filter=created_at le '2021-11-23T00:00:00'&$top=1&$skip=0&apikey=<access-token>`
    Return the columns' ID and account_id for all the Conversations filtered by the created_at column being lower or equal to '2021-11-23T00:00:00'

## Reference Documentation

For complete reference documentation, refer to the [extensive collection of resources at OData.org](https://www.odata.org/) and the [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Data Protection & Analytics

<div class="divider"></div>

Only users with an admin role in Live Agent will be able to query OData Models.

## Live Agent OData Collections

<div class="divider"></div>

This section details the data types that exist within the OData Collections that can be retrieved from the OData endpoint. The following Collections are available:

- [Message](#message)
- [Conversation](#conversation)
- [User](#user)
- [Label](#label)
- [Inbox](#inbox)

### Message

**Description:**

A message is a single piece of communication between an Agent and a client, every time an Agent/user presses enter it will write that text as a new message row. In the Messages table, you can find all messages from all Inboxes and Conversations.

**Example Query:**

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Message?$top=1&$skip=0`

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Message?$top=1&$skip=0`

**Data Types:**

When retrieving this data model, the endpoint returns the following fields:

=== "Live Agent OData Endpoint 1.1"

    | Field Name            | Description                                                                                                                                                                                | Type    | Example                                       |
    |-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------|
    | `id`                  | Unique message ID                                                                                                                                                                          | Number  | 1                                             |
    | `content`             | The message sent                                                                                                                                                                           | String  | `Welcome to Live Agent`                       |
    | `account_id`          | Account ID                                                                                                                                                                                 | Number  | 1                                             |
    | `inbox_id`            | Inbox ID                                                                                                                                                                                   | Number  | 1                                             |
    | `conversation_id`     | Conversation ID                                                                                                                                                                            | Number  | 1                                             |
    | `message_type`        | Type of message `{ incoming: 0, outgoing: 1, activity: 2, template: 3 }`                                                                                                                   | Number  | 3                                             |
    | `created_at`          | Message Creation Date                                                                                                                                                                      | Date    | "2023-01-19T13:31:18.553Z"                    |
    | `updated_at`          | Message Updated Date                                                                                                                                                                       | Date    | "2023-01-19T13:31:18.553Z"                    |
    | `private`             | Message Visibility                                                                                                                                                                         | Boolean | false                                         |
    | `status`              | Message Status `{ sent: 0, delivered: 1, reade: 2, failed: 3 }`                                                                                                                            | Number  | 3                                             |
    | `source_id`           | Message source ID                                                                                                                                                                          | String  | default                                       |
    | `content_type`        | text: 0, input_text: 1, input_textarea: 2, input_email: 3, input_select: 4, cards: 5, form: 6, article: 7, incoming_email: 8, input_csat: 9, typescognigy: 2016, request_file_upload: 2017 | Number  | 0                                             |
    | `content_attributes`  | JSON Attribute/Value Definitions                                                                                                                                                           | JSON    | `{\"items\":[{\"title\":\"Acme Hardware\"}]}` |
    | `sender_type`         | Provides information on who originated the message                                                                                                                                         | String  | "cognigy"                                     |
    | `sender_id`           | Sender unique ID                                                                                                                                                                           | Number  | 1                                             |

=== "Live Agent OData Endpoint 1.0"

    | Field Name         | Description                                                                                                                                                                                | Type    | Example                                      |
    |--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------|
    | `id`                 | Unique message ID                                                                                                                                                                          | Number  | 1                                            |
    | `content`            | The message sent                                                                                                                                                                           | String  | `Welcome to Live Agent`                      |
    | `account_id`         | Account ID                                                                                                                                                                                 | Number  | 1                                            |
    | `inbox_id`           | Inbox ID                                                                                                                                                                                   | Number  | 1                                            |
    | `conversation_id`    | Conversation ID                                                                                                                                                                            | Number  | 1                                            |
    | `message_type`       | Type of message `{ incoming: 0, outgoing: 1, activity: 2, template: 3 }`                                                                                                                     | Number  | 3                                            |
    | `created_at`         | Message Creation Date                                                                                                                                                                      | Date    | "2023-01-19T13:31:18.553Z"                   |
    | `updated_at`         | Message Updated Date                                                                                                                                                                       | Date    | "2023-01-19T13:31:18.553Z"                   |
    | `private`            | Message Visibility                                                                                                                                                                         | Boolean | false                                        |
    | `content_type`       | text: 0, input_text: 1, input_textarea: 2, input_email: 3, input_select: 4, cards: 5, form: 6, article: 7, incoming_email: 8, input_csat: 9, typescognigy: 2016, request_file_upload: 2017 | Number  | 0                                            |
    | `content_attributes` | JSON Attribute/Value Definitions                                                                                                                                                           | JSON    | `{\"items\":[{\"title\":\"Acme Hardware\"}]}` |
    | `sender_type`        | Provides information on who originated the message                                                                                                                                         | String  | "cognigy"                                    |
    | `sender_id`          | Sender unique ID                                                                                                                                                                           | Number  | 1                                            |

### Conversation

**Description:**

A Conversation is the communication channel opened between an Agent and a client.

**Example Query:**

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Conversation?$top=1&$skip=0`

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$top=1&$skip=0`

**Data Types:**

When retrieving this data model, the endpoint returns the following fields:

=== "Live Agent OData Endpoint 1.1"

    | Field Name              | Description                                                                                             | Type   | Example                                        |
    |-------------------------|---------------------------------------------------------------------------------------------------------|--------|------------------------------------------------|
    | `id`                    | Unique conversation ID                                                                                  | Number | 1                                              |
    | `account_id`            | Account ID (where the conversation belongs)                                                             | Number | 1                                              |
    | `inbox_id`              | Inbox ID (where the conversation belongs)                                                               | Number | 1                                              |
    | `status`                | Conversation status: { open: 0, resolved: 1, pending: 2, snoozed: 3 }                                   | Number | 1                                              |
    | `assignee_id`           | Agent ID (assigned to the conversation)                                                                 | Number | 1                                              |
    | `created_at`            | Conversation creation date                                                                              | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `updated_at`            | Conversation updated date                                                                               | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `contact_id`            | Client unique identification                                                                            | Number | 3                                              |
    | `display_id`            | Display ID                                                                                              | Number | 3                                              |
    | `contact_last_seen_at`  | Contact/Client date last seen                                                                           | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `agent_last_seen_at`    | Agent date last seen                                                                                    | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `additional_attributes` | JSON containing any additional attributes                                                               | JSON   | {}                                             |
    | `contact_inbox_id`      | Contact Inbox ID                                                                                        | Number | 1                                              |
    | `uuid`                  | Unique identifier                                                                                       | String | `89f20666-e17d-427c-9283-268ba7870283`         |
    | `identifier`            | Identifier                                                                                              | String | `89f20666-e17d-427c-9283-268ba7870283`         |
    | `last_activity_at`      | Last activity date                                                                                      | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `team_id`               | Team ID (belonging to the conversation)                                                                 | Number | 1                                              |
    | `snoozed_until`         | Snoozed date end                                                                                        | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `custom_attributes`     | Extra add-on attributes                                                                                 | JSON   | `{}`                                           |
    | `assignee_last_seen_at` | Date of last time the assignee has been seen                                                            | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `cognigy_session_id`    | Unique session ID                                                                                       | String | "session-deedb62a-8062-490f-83ac-826de9ef94S3" |

=== "Live Agent OData Endpoint 1.0"

    | Field Name              | Description                                                                                             | Type   | Example                                        |
    |-------------------------|---------------------------------------------------------------------------------------------------------|--------|------------------------------------------------|
    | `id`                    | Unique conversation ID                                                                                  | Number | 1                                              |
    | `account_id`            | Account ID (where the conversation belongs)                                                             | Number | 1                                              |
    | `inbox_id`              | Inbox ID (where the conversation belongs)                                                               | Number | 1                                              |
    | `status`                | Conversation status: { open: 0, resolved: 1, pending: 2, snoozed: 3 }                                   | Number | 1                                              |
    | `assignee_id`           | Agent ID (assigned to the conversation)                                                                 | Number | 1                                              |
    | `created_at`            | Conversation creation date                                                                              | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `updated_at`            | Conversation updated date                                                                               | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `contact_id`            | Client unique identification                                                                            | Number | 3                                              |
    | `display_id`            | Display ID                                                                                              | Number | 3                                              |
    | `agent_last_seen_at`    | Agent date last seen                                                                                    | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `additional_attributes` | JSON containing any additional attributes                                                               | JSON   | {}                                             |
    | `contact_inbox_id`      | Contact Inbox ID                                                                                        | Number | 1                                              |
    | `uuid`                  | Unique identifier                                                                                       | String | "89f20666-e17d-427c-9283-268ba7870283"         |
    | `last_activity_at`      | Last activity date                                                                                      | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `team_id`               | Team ID (belonging to the conversation)                                                                 | Number | 1                                              |
    | `snoozed_until`         | Snoozed date end                                                                                        | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `custom_attributes`     | Extra add-on attributes                                                                                 | JSON   | `{}`                                           |
    | `assignee_last_seen_at` | Date of last time the assignee has been seen                                                            | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `cognigy_session_id`    | Unique session ID                                                                                       | String | "session-deedb62a-8062-490f-83ac-826de9ef94S3" |
    | `assigned_at`           | The date and time when the conversation was assigned to a human agent                                   | Date   | `2023-01-19T13:31:18.553Z`                     |
    | `ended_at`              | The date and time when the human agent closed the conversation (marked it as `Resolved` or `Abandoned`) | Date   | `2023-01-19T13:31:18.553Z`                     |

### Inbox

**Description:**

The Inbox is where all Conversations from a specific set of Agents will be placed.

**Example Query:**

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Inbox?$top=1&$skip=0`

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Inbox?$top=1&$skip=0`

**Data Types:**

When retrieving this data model, the endpoint returns the following fields:

=== "Live Agent OData Endpoint 1.1"

    | Field Name                 | Description                                                                | Type    | Example                    |
    |----------------------------|----------------------------------------------------------------------------|---------|----------------------------|
    | `id`                       | Unique record ID                                                           | Number  | 1                          |
    | `channel_id`               | Channel ID                                                                 | Number  | 1                          |
    | `name`                     | Inbox name                                                                 | String  | `Welcome to Live Agent`    |
    | `email_address`            | Email address                                                              | String  | `ai-agent@cognigy.com`     |
    | `account_id`               | Account ID                                                                 | Number  | 1                          |
    | `created_at`               | Inbox creation date                                                        | Date    | `2023-01-19T13:31:18.553Z` |
    | `updated_at`               | Inbox updated date                                                         | Date    | `2023-01-19T13:31:18.553Z` |
    | `channel_type`             | Communication channel, for example, API, Webchat, Facebook (Meta)          | String  | `Channel:Webchat`          |
    | `enable_auto_assignment`   | Feature that allows the agent to auto assign conversations                 | Boolean | `true`                     |
    | `greeting_enabled`         | Feature that allows an automatic greeting to be sent                       | Boolean | `false`                    |
    | `greeting_message`         | Automatic greeting message                                                 | String  | `Hi there!`                |
    | `working_hours_enabled`    | Feature that enables a working hours timetable                             | Boolean | `true`                     |
    | `out_of_office_message`    | Feature that enables a working hours timetable                             | Boolean | `true`                     |
    | `timezone`                 | Inbox timezone                                                             | String  | "UTC"                      |
    | `enable_email_collect`     | Allows email collection                                                    | Boolean | `true`                     |
    | `csat_survey_enabled`      | Allows CSAT survey                                                         | Boolean | `true`                     |
    | `cognigy_organization_id`  | Cognigy account ID                                                         | String  | 1                          |
    | `cognigy_project_id`       | Cognigy Project ID                                                         | String  | 1                          |
    | `enable_auto_reassignment` | Allows conversation reassignment                                           | Boolean | `true`                     |
    | `conversation_show_all`    | Allows to see all conversations in Inbox, even if they don't belong to you | Boolean | `true`                     |

=== "Live Agent OData Endpoint 1.0"

    | Field Name                 | Description                                                                | Type    | Example                    |
    |----------------------------|----------------------------------------------------------------------------|---------|----------------------------|
    | `id`                       | Unique record ID                                                           | Number  | 1                          |
    | `channel_id`               | Channel ID                                                                 | Number  | 1                          |
    | `name`                     | Inbox Name                                                                 | String  | `Welcome to Live Agent`    |
    | `account_id`               | Account ID                                                                 | Number  | 1                          |
    | `created_at`               | Inbox creation date                                                        | Date    | `2023-01-19T13:31:18.553Z` |
    | `updated_at`               | Inbox updated date                                                         | Date    | `2023-01-19T13:31:18.553Z` |
    | `channel_type`             | Communication channel, for example, API, Webchat, Facebook (Meta)          | String  | `Channel:Webchat`          |
    | `enable_auto_assignment`   | Feature that allows the agent to auto assign conversations                 | Boolean | `true`                     |
    | `working_hours_enabled`    | Feature that enables a working hours timetable                             | Boolean | `true`                     |
    | `out_of_office_message`    | Feature that enables a working hours timetable                             | Boolean | `true`                     |
    | `timezone`                 | Inbox Timezone                                                             | String  | `UTC`                      |
    | `enable_email_collect`     | Allows email collection                                                    | Boolean | `true`                     |
    | `csat_survey_enabled`      | Allows CSAT survey                                                         | Boolean | `true`                     |
    | `cognigy_organization_id`  | Cognigy Account ID                                                         | String  | 1                          |
    | `cognigy_project_id`       | Cognigy Project ID                                                         | String  | 1                          |
    | `enable_auto_reassignment` | Allows conversation reassignment                                           | Boolean | `true`                     |
    | `conversation_show_all`    | Allows to see all conversations in Inbox, even if they don't belong to you | Boolean | `true`                     |

### Label

**Description:**

Labels are used to mark, identify or group different Conversations.

**Example Query:**

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/Label?$top=1&$skip=0`

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Label?$top=1&$skip=0`

**Data Types:**

When retrieving this data model, the endpoint returns the following fields:

=== "Live Agent OData Endpoint 1.1"

    | Field Name        | Description                                 | Type    | Example                     |
    |-------------------|---------------------------------------------|---------|-----------------------------|
    | `id`              | Unique label ID                             | Number  | 1                           |
    | `title`           | Label title                                 | String  | `label-complain`            |
    | `description`     | Label description                           | String  | `labels used for complains` |
    | `color`           | Label color                                 | String  | `red`                       |
    | `show_on_sidebar` | Allows the label to be shown on the sidebar | Boolean | true                        |
    | `account_id`      | Account to which the label will belong      | Number  | 3                           |
    | `created_at`      | Label creation date                         | Date    | `2023-01-19T13:31:18.553Z`  |
    | `updated_at`      | Label updated date                          | Date    | `2023-01-19T13:31:18.553Z`  |

=== "Live Agent OData Endpoint 1.0"

    | Field Name         | Description                                            | Type             | Example                     |
    |--------------------|--------------------------------------------------------|------------------|-----------------------------|
    | `id`               | Unique label ID                                        | Number           | 1                           |
    | `title`            | Label title                                            | String           | `label-complain`            |
    | `description`      | Label description                                      | String           | `labels used for complains` |
    | `color`            | Label color                                            | String           | `red`                       |
    | `show_on_sidebar`  | Allows the label to be shown on the sidebar            | Boolean          | true                        |
    | `account_id`       | Account to which the label will belong                 | Number           | 3                           |
    | `created_at`       | Label creation date                                    | Date             | `2023-01-19T13:31:18.553Z`  |
    | `updated_at`       | Label updated date                                     | Date             | `2023-01-19T13:31:18.553Z`  |
    | `conversation_ids` | An array of conversation IDs associated with the label | Array of numbers | `[15628, 15964, 15965]`     |

### Reporting Event

**Description:**

The Reporting Event model represents actions or occurrences tracked in the system for reporting and analytics purposes.

**Example Query:**

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/ReportingEvent?$top=10&$skip=0`.

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/ReportingEvent?$top=10&$skip=0`.

**Data Types:**

When retrieving this data model, the endpoint returns the following fields:

| Field Name         | Description                                        | Type   | Example                                                                                                             |
|--------------------|----------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------|
| `id`               | Unique Reporting Event ID                          | Number | 4                                                                                                                   |
| `event_start_time` | Start time of the event                            | Date   | `2023-01-08T18:34:43.162Z`                                                                                          |
| `event_end_time`   | End time of the event                              | Date   | `2023-01-08T18:34:43.162Z`                                                                                          |
| `name`             | Name of the event                                  | String | `message_created`, `conversation_resolved`, `first_reply_created`, `assignee_changed`, `conversation_inbox_changed` |
| `value`            | Value associated with the event, such as timestamp | Number | 1                                                                                                                   |
| `created_at`       | The date and time when the event was created       | Date   | `2023-01-08T18:34:43.213Z`                                                                                          |
| `updated_at`       | The date and time when the event was last updated  | Date   | `2023-01-08T18:34:43.213Z`                                                                                          |
| `account_id`       | ID of the account associated with the event        | Number | 2                                                                                                                   |
| `conversation_id`  | ID of the conversation associated with the event   | Number | 1                                                                                                                   |
| `inbox_id`         | ID of the inbox associated with the event          | Number | 1                                                                                                                   |
| `user_id`          | ID of the user associated with the event           | Number | 3                                                                                                                   |

!!! note
    To avoid potential query timeouts due to large data volumes, use the `$top` query option to limit the number of returned records.

### User

**Description:**

This data model holds information regarding the Live Agent users, such as an Agent.

**Example Query:**

=== "Live Agent OData Endpoint 1.1"

    `https://odata-liveagent-trial.cognigy.ai/v1.1/odata/User?$top=1&$skip=0`

=== "Live Agent OData Endpoint 1.0"

    `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/User?$top=1&$skip=0`

**Data Types:**

When retrieving this data model, the endpoint returns the following fields:

=== "Live Agent OData Endpoint 1.1"
    | Field Name               | Description                                                       | Type   | Example                                                                                                         |
    |--------------------------|-------------------------------------------------------------------|--------|-----------------------------------------------------------------------------------------------------------------|
    | `id`                     | Unique record ID                                                  | Number | 1                                                                                                               |
    | `provider`               | For example, email                                                | String | `email`                                                                                                         |
    | `uid`                    | Provided unique identifier                                        | String | `some-email@cognigy.com`                                                                                        |
    | `encrypted_password`     | Encrypted password                                                | String | `$2a$11$L.610bE0k617uÜiXy9L3H0q8nn6kdjJK2/X4p7ghlxPC38hjovasd`                                                  |
    | `reset_password_token`   | Token used to reset the password                                  | String | `$2a$11$L.610bE0k617uÜiXy9L3H0q8nn6kdjJK2/X4p7ghlxPC38hjsvaru`                                                  |
    | `reset_password_send_at` | Date when a password reset was sent                               | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `remember_created_at`    | Date of remember creation                                         | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `sign_in_count`          | Nummber of times the user has signed in                           | Number | 3                                                                                                               |
    | `current_sign_in_ip`     | Current sign in IP address                                        | String | `120.0.0.1`                                                                                                     |
    | `last_sign_in_ip`        | Last sign in IP address                                           | String | `120.0.0.1`                                                                                                     |
    | `confirmation_token`     | Confirmation token                                                | String | `$2a$11$L.610bE0k617uÜiXy9L3H0q8nn6kdjJK2/X4p7ghlxPC38hjovasd`                                                  |
    | `confirmed_at`           | Confirmation token confirmed at date                              | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `confirmation_sent_at`   | Confirmation token sent at date                                   | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `unconfirmed_email`      | Unconfirmed email                                                 | String | `unconfirmed@cognigy.com`                                                                                       |
    | `name`                   | User name                                                         | String | `Francisco`                                                                                                     |
    | `display_name`           | User display name                                                 | String | `Paco`                                                                                                          |
    | `email`                  | User email                                                        | String | `fran@cognigy.com`                                                                                              |
    | `tokens`                 | User tokens                                                       | JSON   | `{"MN4iNP38tvwe5wer7pvpnAQ":{"token":"$2a$10$iA7Si0sBV9lMkO2mqvwiD.L90.uTCl27WQbEo/Kc0W","expiry":1644763988}}` |
    | `created_at`             | User creation date                                                | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `updated_at`             | User updated date                                                 | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `pubsub_token`           | User publish/subscribe token                                      | String | `MiVxY3FKry6oklambiuqL72nn`                                                                                     |
    | `availability`           | This represents the user's availability                           | Number | 1                                                                                                               |
    | `ui_settings`            | UI settings for user                                              | JSON   | `{"is_conv_actions_open": true, "is_contact_sidebar_open": true}`                                               |
    | `custom_attributes`      | Custom attributes                                                 | JSON   | `{}`                                                                                                            |
    | `cognigy_user_id`        | Cognigy user ID                                                   | string | `610bEOk617uPiXy9L3HOq8nn6kdjJK2`                                                                               |
    | `sign_in_count`          | The total number of times the user has logged in to Live Agent    | Number | 3                                                                                                               |
    | `current_sign_in_at`     | The date and time of the user's most recent login                 | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `last_sign_in_at`        | The date and time of the user's login previous to the current one | Date   | `2021-12-11 12:41:26.745`                                                                                       |

=== "Live Agent OData Endpoint 1.0"
    | Field Name             | Description                                                       | Type   | Example                                                                                                         |
    |------------------------|-------------------------------------------------------------------|--------|-----------------------------------------------------------------------------------------------------------------|
    | `id`                   | Unique record ID                                                  | Number | 1                                                                                                               |
    | `provider`             | For example, email                                                | String | `email`                                                                                                         |
    | `uid`                  | Provided unique identifier                                        | String | `some-email@cognigy.com`                                                                                        |
    | `confirmed_at`         | Confirmation token confirmed at date                              | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `confirmation_sent_at` | Confirmation token sent at date                                   | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `unconfirmed_email`    | Unconfirmed email                                                 | String | `unconfirmed@cognigy.com`                                                                                       |
    | `name`                 | User name                                                         | String | `Francisco`                                                                                                     |
    | `display_name`         | User display name                                                 | String | `Paco`                                                                                                          |
    | `email`                | User email                                                        | String | `fran@cognigy.com`                                                                                              |
    | `tokens`               | User tokens                                                       | JSON   | `{"MN4iNP38tvwe5wer7pvpnAQ":{"token":"$2a$10$iA7Si0sBV9lMkO2mqvwiD.L90.uTCl27WQbEo/Kc0W","expiry":1644763988}}` |
    | `created_at`           | User creation date                                                | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `updated_at`           | User updated date                                                 | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `pubsub_token`         | User publish/subscribe token                                      | String | `MiVxY3FKry6oklambiuqL72nn`                                                                                     |
    | `availability`         | This represents the user's availability                           | Number | 1                                                                                                               |
    | `ui_settings`          | UI settings for user                                              | JSON   | `{"is_conv_actions_open": true, "is_contact_sidebar_open": true}`                                               |
    | `custom_attributes`    | Custom attributes                                                 | JSON   | `{}`                                                                                                            |
    | `cognigy_user_id`      | Cognigy user ID                                                   | string | `610bEOk617uPiXy9L3HOq8nn6kdjJK2`                                                                               |
    | `sign_in_count`        | The total number of times the user has logged in to Live Agent    | Number | 3                                                                                                               |
    | `current_sign_in_at`   | The date and time of the user's most recent login                 | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `last_sign_in_at`      | The date and time of the user's login previous to the current one | Date   | `2021-12-11 12:41:26.745`                                                                                       |
    | `last_sign_out_at`     | The date and time of the user's last logout from Live Agent       | Date   | `2021-12-11 12:41:26.745`                                                                                       |

## Integrations

<div class="divider"></div>

### Excel

When connecting from Microsoft Excel 2016, you must use the Power Query feature, which can be found under **Data > Get & Transform > New Query > From Other Sources > From OData Feed**. This will connect to our OData 4 feed.

### Power BI

Follow the [instructions in the Power BI documentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).

### Tableau

!!! danger "Incompatible OData Version"
    Cognigy.AI supports OData 4.0, which implies that certain versions of Tableau aren't compatible.

Find instructions on how to connect an OData Feed in the [Tableau documentation](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).

## OData Consumer Ecosystem

For a full list of available OData Consumer options, [follow the link to Consumers on OData.org](https://www.odata.org/ecosystem/#consumers).

## Client Libraries in .NET, Java, JavaScript, C++, and Other Platforms

For a full list of available OData Libraries, [see the latest directory of available libraries on OData.org](https://www.odata.org/libraries/).
