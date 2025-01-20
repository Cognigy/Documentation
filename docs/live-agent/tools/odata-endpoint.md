---
title: "Live Agent OData Endpoint"
slug: "live-agent-odata-endpoint"
hidden: false
---

# Live Agent: OData Analytics Endpoint

[![Version badge](https://img.shields.io/badge/Updated in-v4.83-blue.svg)](../../release-notes/4.83.md)

Live Agent exposes an OData v4 analytics Endpoint to retrieve analytics records. [OData](https://www.odata.org/), the best way to REST, is a powerful API framework. The OData Endpoints allows you to retrieve the most relevant data models from Live Agent by using GET requests. It covers all your enterprise analytics needs to make fine-grained queries in your spreadsheets or build rich dashboards for your bots with your favorite data visualization tool.

Note that the Live Agent OData Endpoint only supports `GET` requests and does not support any other request types, such as `PATCH`, `DELETE`, or `POST`.

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

To connect to the OData Endpoint, get a Live Agent Access Token:

1. In the left-side menu of the Live Agent interface, go to **Profile Settings**.
2. In the **Access Token** section, copy the existing token.
3. Paste this token to your OData request.

An OData URL is composed of the service root, API version, service path, data collection, and Live Agent access token parameter as follows:

```txt
GET /<api-version>/odata/<OData data model>?<odata query> HTTP/1.1
Host: <odata domain>
Authorization: Bearer <Live Agent access token>
```

The authentication can also be done using a query param such as follows:

```
/<api-version>/odata/<OData data model>?<odata query>&apikey=<Live Agent access token>
```

!!! note "OData Domain Name"
    The OData endpoint is available on a different domain to your Cognigy User Interface domain. For example, [https://odata-liveagent-trial.cognigy.ai/v1.0/odata](https://odata-dev-live-agent.cognigy.ai/v1.0/odata).

    For example, on our trial server, the OData Endpoint URL for the Analytics Inputs Collection is `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Message?`. For on-premises installations, replace the `odata-trial.cognigy.ai` domain name with the domain name configured for your local installation.

!!! note "Excel/Power BI"
    When using PowerBI or Excel, you might be asked to authenticate. Simply choose `anonymous authentication` and pass the Live Agent access token as a query parameter `&apikey=<Live Agent access-token>`

## Endpoint Version

<div class="divider"></div>

### Version 1.0

The current version of the OData Endpoint is `v1.0`. This Endpoint version is available from LiveAgent Version 1.0.0 onwards. In this version, the following OData collections are available:

- [Message](#message) (`/Message`)
- [Conversation](#conversation) (`/Conversation`)
- [Inbox](#inbox) (`/Inbox`)
- [Label](#label) (`/Label`)
- [User](#user) (`/User`)

To see all the available OData models, you can use the following Endpoint:
`https://<hostname>/v1.0/odata/`

The URL for accessing the V1.0 OData Endpoint is as follows:
`https://<hostname>/v1.0/odata/<collection>`

## Querying

<div class="divider"></div>

The Endpoint supports the following OData Query Language operators:

- `$filter`
- `$select`
- `$skip`
- `$top`
- `$orderby`
- `$expand`

### Example Queries

`https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation(1)?$select=inbox_id,account_id&apikey=<access-token>`
Return the columns inbox_id and account_id for the Conversation with id=1.

`https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&apikey=<access-token>`
Return the columns' ID and account_id for all Conversations.

`https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2021-11-23T00:00:00'&apikey=<access-token>`
Return the columns' ID and account_id for all the Conversations filtered by the created_at column being lower or equal to '2021-11-23T00:00:00'

## Reference Documentation

For complete reference documentation, refer to the [extensive collection of resources at OData.org](https://www.odata.org/) and the [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Data Protection & Analytics

<div class="divider"></div>

Only users with an admin role in Live Agent will be able to query OData Models.

## Live Agent OData Collections

<div class="divider"></div>

This section details the data types that exist within the OData Collections that can be retrieved from the OData Endpoint. The following Collections are available:

- [Message](#message)
- [Conversation](#conversation)
- [User](#user)
- [Label](#label)
- [Inbox](#inbox)

### Message

**Description:**

A message is a single piece of communication between an Agent and a client,
every time an Agent/user presses enter it will write that text as a new message row.
In the Messages table, you can find all messages from all Inboxes and Conversations.

**Example Query:**

- V1.0 Endpoint: `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Message?`.

**Data Types:**

When retrieving this data model, the Endpoint will return the following fields:

| Field Name          | Description                                                                                                                                                                                | Type    | Example                                      |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------------|
| id                  | Unique Message ID                                                                                                                                                                          | Number  | 1                                            |
| content             | The Message Sent                                                                                                                                                                           | String  | Welcome to Live Agent                        |
| account_id          | Account ID                                                                                                                                                                                 | Number  | 1                                            |
| inbox_id            | Inbox ID                                                                                                                                                                                   | Number  | 1                                            |
| conversation_id     | Conversation ID                                                                                                                                                                            | Number  | 1                                            |
| message_type        | Type of Message { incoming: 0, outgoing: 1, activity: 2, template: 3 }                                                                                                                     | Number  | 3                                            |
| created_at          | Message Creation Date                                                                                                                                                                      | Date    | 2021-12-11 12:41:26.745                      |
| updated_at          | Message Updated Date                                                                                                                                                                       | Date    | 2021-12-11 12:41:26.745                      |
| private             | Message Visibility                                                                                                                                                                         | Boolean | false                                        |
| status              | Message Status { sent: 0, delivered: 1, read: 2, failed: 3 }                                                                                                                               | Number  | 3                                            |
| source_id           | Message Source                                                                                                                                                                             | String  | default                                      |
| content_type        | text: 0, input_text: 1, input_textarea: 2, input_email: 3, input_select: 4, cards: 5, form: 6, article: 7, incoming_email: 8, input_csat: 9, typescognigy: 2016, request_file_upload: 2017 | Number  | 0                                            |
| content_attributes  | JSON Attribute/Value Definitions                                                                                                                                                           | JSON    | "{\"items\":[{\"title\":\"Acme Hardware\"]}" |
| sender_type         | Provides information of who originated the message                                                                                                                                         | String  | cognigy                                      |
| sender_id           | Sender unique ID                                                                                                                                                                           | Number  | 1                                            |
| external_source_ids | External Source IDs                                                                                                                                                                        | JSON    | "{\"items\":[{\"title\":\"Acme Hardware\"]}" |

### Conversation

**Description:**

A Conversation is the communication channel opened between an Agent and a client.

**Example Query:**

- V1.0 Endpoint: `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Conversation?`.

**Data Types:**

When retrieving this data model, the Endpoint will return the following fields:

| Field Name            | Description                                                           | Type   | Example                                      |
|-----------------------|-----------------------------------------------------------------------|--------|----------------------------------------------|
| id                    | Unique Conversation ID                                                | Number | 1                                            |
| account_id            | Account ID (where the conversation belongs)                           | Number | 1                                            |
| inbox_id              | Inbox ID (where the conversation belongs)                             | Number | 1                                            |
| status                | Conversation Status: { open: 0, resolved: 1, pending: 2, snoozed: 3 } | Number | 1                                            |
| assignee_id           | Agent ID (assigned to the conversation)                               | Number | 1                                            |
| created_at            | Conversation Creation Date                                            | Date   | 2021-12-11 12:41:26.745                      |
| updated_at            | Conversation Updated Date                                             | Date   | 2021-12-11 12:41:26.745                      |
| contact_id            | Client Unique Identification.                                         | Number | 3                                            |
| display_id            | Display ID                                                            | Number | 3                                            |
| contact_last_seen_at  | Contact/Client Date Last Seen                                         | Date   | 2021-12-11 12:41:26.745                      |
| agent_last_seen_at    | Agent Date Last Seen                                                  | Date   | 2021-12-11 12:41:26.745                      |
| additional_attributes | JSON Containing Any Additional Attributes.                            | JSON   | {}                                           |
| contact_inbox_id      | Contact Inbox ID                                                      | Number | 1                                            |
| uuid                  | Unique Identifier                                                     | String | 89f20666-e17d-427c-9283-268ba7870283         |
| identifier            | Identifier                                                            | String | "89f20666-e17d-427c-9283-268ba7870283"       |
| last_activity_at      | Last Activity Date.                                                   | Date   | 2021-12-11 12:41:26.745                      |
| team_id               | Team ID (belonging to the conversation)                               | Number | 1                                            |
| campaign_id           | Campaign ID                                                           | Number | 1                                            |
| snoozed_until         | Snoozed Date End                                                      | Date   | 2021-12-11 12:41:26.745                      |
| custom_attributes     | Extra Add-on Attributes                                               | JSON   | "{}"                                         |
| assignee_last_seen_at | Date Of Last Time The Assignee Has Been Seen                          | Date   | 2021-12-11 12:41:26.745                      |
| cognigy_session_id    | Unique Session ID                                                     | String | session-deedb62a-8062-490f-83ac-826de9ef94S3 |

### Inbox

**Description:**

The Inbox is where all Conversations from a specific set of Agents will be placed.

**Example Query:**

- V1.0 Endpoint: `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Inbox?`.

**Data Types:**

When retrieving this data model, the Endpoint will return the following fields:

| Field Name               | Description                                                                 | Type    | Example                                   |
|--------------------------|-----------------------------------------------------------------------------|---------|-------------------------------------------|
| id                       | Unique Record ID                                                            | Number  | 1                                         |
| channel_id               | Channel ID                                                                  | Number  | 1                                         |
| name                     | Inbox Name                                                                  | String  | Welcome to Live Agent                     |
| account_id               | Account ID                                                                  | Number  | 1                                         |
| created_at               | Inbox Creation Date                                                         | Date    | 2021-12-11 12:41:26.745                   |
| updated_at               | Inbox Updated Date                                                          | Date    | 2021-12-11 12:41:26.745                   |
| channel_type             | Communication Channel, for example, API, Webchat, Facebook (Meta)           | String  | "Channel:Webchat"                         |
| enable_auto_assignment   | Feature That Allows The Agent To Auto Assign Conversations                  | Boolean | true                                      |
| greeting_enabled         | Feature That Allows An Automatic Greeting To Be Sent                        | Boolean | false                                     |
| greeting_message         | Automatic Greeting Message                                                  | String  | "Hi there!"                               |
| email_address            | Email Address                                                               | String  | default                                   |
| working_hours_enabled    | Feature That Enables A Working Hours Timetable                              | Boolean | true                                      |
| out_of_office_enabled    | Default Message That Will Be Displayed During Out Of Office Hours           | String  | "Out of office hours, try again tomorrow" |
| timezone                 | Inbox Timezone                                                              | String  | "UTC"                                     |
| enable_email_collect     | Allows To Email Collection                                                  | Boolean | true                                      |
| csat_survey_enabled      | Allows CSAT Survey                                                          | Boolean | true                                      |
| cognigy_organization_id  | Cognigy Account ID                                                          | Number  | 1                                         |
| cognigy_project_id       | Cognigy Project ID                                                          | Number  | 1                                         |
| enable_auto_reassignment | Allows To Reassign Conversation                                             | Boolean | true                                      |
| conversation_show_all    | Allows To See All Conversations In Inbox, Even If They Do Not Belong To You | Boolean | true                                      |

### Label

**Description:**

Labels are being used to mark, identify or group different Conversations.

**Example Query:**

- V1.0 Endpoint: `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/Label?`.

**Data Types:**

When retrieving this data model, the Endpoint will return the following fields:

| Field Name      | Description                                 | Type    | Example                     |
|-----------------|---------------------------------------------|---------|-----------------------------|
| id              | Unique Label ID                             | Number  | 1                           |
| title           | Label Title                                 | String  | "label-complain"            |
| description     | Label Description                           | String  | "labels used for complains" |
| color           | Label Color                                 | String  | "red"                       |
| show_on_sidebar | Allows The Label to Be Shown On The Sidebar | Boolean | true                        |
| account_id      | Account To Which The Label Will Belong      | Number  | 3                           |
| created_at      | Label Creation Date                         | Date    | 2021-12-11 12:41:26.745     |
| updated_at      | Label Updated Date                          | Date    | 2021-12-11 12:41:26.745     |

### Reporting Event

**Description:**

The Reporting Event model represents actions or occurrences tracked in the system for reporting and analytics purposes.

**Example Query:**

- V1.0 Endpoint: `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/ReportingEvent?$top=10`.

**Data Types:**

When retrieving this data model, the Endpoint will return the following fields:

| Field Name       | Description                                        | Type   | Example                                                                                                             |
|------------------|----------------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------|
| id               | Unique Reporting Event ID                          | Number | 4                                                                                                                   |
| event_start_time | Start time of the event                            | Date   | "2023-01-08T18:34:43.162Z"                                                                                          |
| event_end_time   | End time of the event                              | Date   | "2023-01-08T18:34:43.162Z"                                                                                          |
| name             | Name of the event                                  | String | "message_created", "conversation_resolved", "first_reply_created", "assignee_changed", "conversation_inbox_changed" |
| value            | Value associated with the event, such as timestamp | Number | 1                                                                                                                   |
| created_at       | Timestamp when the event was created               | Date   | "2023-01-08T18:34:43.213Z"                                                                                          |
| updated_at       | Timestamp when the event was last updated          | Date   | "2023-01-08T18:34:43.213Z"                                                                                          |
| account_id       | ID of the account associated with the event        | Number | 2                                                                                                                   |
| conversation_id  | ID of the conversation associated with the event   | Number | 1                                                                                                                   |
| inbox_id         | ID of the inbox associated with the event          | Number | 1                                                                                                                   |
| user_id          | ID of the user associated with the event           | Number | 3                                                                                                                   |

!!! note
    To avoid potential query timeouts due to large data volumes, use the `$top` query option to limit the number of returned records.### User

### User

**Description:**

This data model holds information regarding the Live Agent users, such as an Agent.

**Example Query:**

- V1.0 Endpoint: `https://odata-liveagent-trial.cognigy.ai/v1.0/odata/User?`.

**Data Types:**

When retrieving this data model, the Endpoint will return the following fields:

| Field Name             | Description                              | Type   | Example                                                                                                                   |
|------------------------|------------------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------|
| id                     | Unique Record ID                         | Number | 1                                                                                                                         |
| provider               | e.g Email                                | String | "email"                                                                                                                   |
| uid                    | Provided Unique Identifier               | String | "some-email@cognigy.com"                                                                                                  |
| encrypted_password     | Encrypted Password                       | String | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38hjovasd"                                                            |
| reset_password_token   | Token Used To Reset The Password         | String | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38rjsvaru"                                                            |
| reset_password_send_at | Date When A Password Reset Was Sent      | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| remember_created_at    | Remember Created At Date                 | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| sign_in_count          | Number Of Times User Has Signed In       | Number | 3                                                                                                                         |
| current_sign_in_at     | Current Sign In Date                     | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| last_sign_in_at        | Last Sign In Date                        | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| current_sign_in_ip     | Current Sign In IP Address               | String | "120.0.0.1"                                                                                                               |
| last_sign_in_ip        | Current Sign In IP Address               | String | "120.0.0.1"                                                                                                               |
| confirmation_token     | Confirmation Token                       | String | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38hjovasd"                                                            |
| confirmed_at           | Confirmation Token Confirmed At Date     | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| confirmation_sent_at   | Confirmation Token Sent At Date          | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| unconfirmed_email      | Unconfirmed Email                        | String | "unconfirmed@cognigy.com"                                                                                                 |
| name                   | User Name                                | String | "Francisco"                                                                                                               |
| display_name           | User Display Name                        | String | "Paco"                                                                                                                    |
| email                  | User Email                               | String | "fran@cognigy.com"                                                                                                        |
| tokens                 | User Tokens                              | JSON   | ""{\"MN4iNP38tvwe5wer7pvpnAQ\":{\"token\":\"$2a$10$iA7Si0sBV9lMkO2mqvwiD.L90.uTCl27WQbEo/Kc0W\",\"expiry\":1644763988}}"" |
| created_at             | User Creation Date                       | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| updated_at             | User Updated Date                        | Date   | 2021-12-11 12:41:26.745                                                                                                   |
| pubsub_tokens          | User Publish/Subscribe Token             | String | "MiVxY3FKry6oklambiuqL72nn"                                                                                               |
| availability           | This Represents The User's Availability. | Number | 1                                                                                                                         |
| ui_settings            | UI Settings For User                     | JSON   | "{"is_conv_actions_open": true, "is_contact_sidebar_open": true}"                                                         |
| custom_attributes      | Custom Attributes                        | JSON   | "{}"                                                                                                                      |
| cognigy_user_id        | Cognigy User ID                          | string | "610bEOk617uPiXy9L3HOq8nn6kdjJK2"                                                                                         |

## Integrations

<div class="divider"></div>

### Excel

When connecting from Microsoft Excel 2016, you must use the PowerQuery feature, which can be found under `Data > Get & Transform > New Query > From Other Sources > From OData Feed`. This will connect to our OData v4 feed.

### Power BI

Follow the [instructions in the Power BI documentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).

### Tableau

!!! danger "Incompatible OData Version"
    Cognigy.AI supports OData version 4.0, which implies that certain versions of Tableau are not compatible.

Find instructions on how to connect an OData Feed in the [Tableau documentation](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).

## OData Consumer Ecosystem

For a full list of available OData Consumer options, [follow the link to Consumers on OData.org](https://www.odata.org/ecosystem/#consumers).

## Client Libraries in .NET, Java, JavaScript, C++ and Other Platforms

For a full list of available OData Libraries, [see the latest directory of available libraries on OData.org](https://www.odata.org/libraries/).
