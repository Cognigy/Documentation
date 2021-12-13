---
 title: "LA OData Endpoint" 
 slug: "la-odata-endpoint" 
 hidden: false 
---
# LA OData Analytics Endpoint

Live Agent exposes an OData v4 analytics endpoint to retrieve analytics records. OData, *the Best Way to REST* is a powerful API framework, see more at [OData.org](https://www.odata.org/). The OData Endpoints allows you to retrieve some of the most relevant data models from the Live Agent. It has all your enterprise analytics needs covered to make fine grained queries in your spreadsheets or build rich dashboards for your bots with your favorite data visualization tool.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019467199-Cognigy-Sessions-Analytics-OData" target="_blank" >Techinar video "Analytics &amp; OData"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

## Usage and Authentication

<div class="divider"></div>

You can connect to the OData endpoint using your Access Token  by connecting to respective OData URL on your server.

An OData URL is combined of the service root, api version, service path, the data collection and the access token parameter as follows:

```
    GET /<api-version>/odata/<OData data model>?<odata query> HTTP/1.1
    Host: <odata domain>
    Authorization: Bearer <access token>
```


???+ info "OData Domain Name"
    Please note that the OData endpoint is available on a different domain to your Cognigy User Interface domain. e.g. If you login to Cognigy via [https://trial.cognigy.ai](https://trial.cognigy.ai) then your odata domain will be [https://odata-trial.cognigy.ai](https://odata-trial.cognigy.ai)).


For example, on our trial server, the OData endpoint URL for the Analytics Inputs Collection is `https://odata-trial.cognigy.ai/v1.0/odata/Message?`. For On-Prem installations please replace the `odata-trial.cognigy.ai` domain name with the domain name configured for your local installation.

???+ info "Excel/Power BI"
    When using PowerBI or Excel, you might be asked to authenticate. Simply choose `anonymous authentication`.

## Endpoint Version

<div class="divider"></div>

## Version 1.0
The current version of the OData endpoint is `v1.0`. This endpoint version is available from LiveAgent Version 1.0.0 onwards. In this version, the following OData collections are available:

- [Message]({{config.site_url}}live-agent/tools/la-odata-endpoint/#Message/) (`/Message`)
- [Conversation]({{config.site_url}}live-agent/tools/la-odata-endpoint/#Conversation/) (`/Conversation`)
- [User]({{config.site_url}}live-agent/tools/la-odata-endpoint/#User/) (`/User`)
- [Tag]({{config.site_url}}live-agent/tools/la-odata-endpoint/#Tag/) (`/Tag`)
- [Tagging]({{config.site_url}}live-agent/tools/la-odata-endpoint/#Tagging/) (`/Tagging`)
- [Label]({{config.site_url}}live-agent/tools/la-odata-endpoint/#Label/) (`/Label`)
- [Inbox]({{config.site_url}}live-agent/tools/la-odata-endpoint/#Inbox/) (`/Inbox`)

To see all the available OData model you can ping the following endPoint:
`https://<hostname>/v1.0/odata/`

The URL for accessing the V1.0 OData endpoint is as follows:
`https://<hostname>/v1.0/odata/<collection>`

## Querying

<div class="divider"></div>

The endpoint supports following the OData Query Language operators:

- $filter
- $select
- $skip
- $top
- $orderby
- $expand

## Example Queries

`https://odata-trial.cognigy.ai/v1.0/odata/Conversation(1)?$select=inbox_id,account_id`
Return the columns inbox_id and account_id for the conversation with id=1

`https://odata-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id`
Return the columns id and account_id for all Conversations.

`https://odata-trial.cognigy.ai/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2021-11-23T00:00:00'`
Return the columns id and account_id for all the Conversations filtered by the created_at column being lower or equal to '2021-11-23T00:00:00'


## Reference documentation

For a full reference please refer to the [extensive collection of resources at OData.org](https://www.odata.org/) and the [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Data Protection & Anylytics

<div class="divider"></div>

Just the users with an admin role in the Live Agent will be able to query the OData Models.

## Live Agent OData Collections

<div class="divider"></div>

This section details the data types that exist within the OData Collections that can be retrieved from the OData Endpoint. The following Collections are available:

  * Message
  * Conversation
  * User
  * Tag
  * Tagging
  * Label
  * Inbox

## Message
#### Description:
A message is a single peace of communication between and agent and a client, every time an agent/user hits enter it will persist that text as a new message row. In the Messages table you can find all the messages from all the inboxes and all the conversations.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/Message?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                      | Type     | Example                      |
|-----------------------|----------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique Message ID                                                                | Number   | 1  |
| content               | The message sent                                                                 | String   | Welcome to live agent    |
| account_id            | Account ID                                                                       | Number   | 1  |
| inbox_id              | Inbox ID                                                                         | Number   | 1  |
| conversation_id       | Conversation ID                                                                  | Number   | 1  |
| message_type          | Type of message { incoming: 0, outgoing: 1, activity: 2, template: 3 }           | Number   | 3  |
| created_at            | Message creation date                                                            | Date     | 2021-12-11 12:41:26.745     |
| updated_at            | Message updated date                                                             | Date     | 2021-12-11 12:41:26.745     |
| private               | Message visibility                                                               | Boolean  | false  |
| status                | Message status { sent: 0, delivered: 1, read: 2, failed: 3 }                     | Number   | 3   |
| source_id             | Message source                                                                   | String   | default |
| content_type          | text: 0, input_text: 1, input_textarea: 2, input_email: 3, input_select: 4, cards: 5, form: 6, article: 7, incoming_email: 8, input_csat: 9, typescognigy: 2016, request_file_upload: 2017                                                                                  | NUmber   | 0  |
| content_attributes    | Json attibute/values definitions                                                 | Json     | "{\"items\":[{\"title\":\"Acme Hardware\"]}" |
| sender_type           | Provides information of who originated the message                               | String   | cognigy    |
| sender_id             | Sender unique ID                                                                 | Number   | 1   |
| external_source_ids   | External source ids                                                              | Json     | "{\"items\":[{\"title\":\"Acme Hardware\"]}"  |


## Conversation
#### Description:
A conversation is the communication channel opened between an agent and a client.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/Conversation?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                     | Type     | Example                      |
|-----------------------|---------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique Conversation ID                                                          | Number   | 1  |
| account_id            | Account Id where the conversation belongs                                       | Number   | 1  |
| inbox_id              | Inbox id where the conversation belongs                                         | Number   | 1  |
| status                | Conversation status: { open: 0, resolved: 1, pending: 2, snoozed: 3 }           | Number   | 1  |
| assignee_id           | Agent id assigned to the conversation                                           | Number   | 1  |
| created_at            | Conversation creation date                                                      | Date     | 2021-12-11 12:41:26.745     |
| updated_at            | Conversation updated date                                                       | Date     | 2021-12-11 12:41:26.745     |
| contact_id            | Client unique identification.                                                   | Number   | 3  |
| display_id            | Display ID                                                                      | Number   | 3  |
| contact_last_seen_at  | Contact/client date last seen                                                   | Date     | 2021-12-11 12:41:26.745     |
| agent_last_seen_at    | Agent date last seen                                                            | Date     | 2021-12-11 12:41:26.745     |
| additional_attributes | Json containing any additional attributes.                                      | Json     | {}  |
| contact_inbox_id      | Contact Inbox Id                                                                | Number   | 1   |
| uuid                  | Unique identifier                                                               | String   | 89f20666-e17d-427c-9283-268ba7870283    |
| identifier            | Identifier                                                                      | String   | "89f20666-e17d-427c-9283-268ba7870283"   |
| last_activity_at      | Last activity date.                                                             | Date     | 2021-12-11 12:41:26.745     |
| team_id               | Belonging team id                                                               | Number   | 1  |
| campaign_id           | Campaign ID                                                                     | Number   | 1  |
| snoozed_until         | Snoozed date end                                                                | Date     | 2021-12-11 12:41:26.745     |
| custom_attributes     | Extra add-on attributes                                                         | Json     | "{}"  |
| assignee_last_seen_at | Date of last time the assignee has been seen                                    | Date     | 2021-12-11 12:41:26.745     |

## Inbox
#### Description:
The inbox is where all the conversations from a specific set of agents will be placed.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/Inbox?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                     | Type     | Example                      |
|-----------------------|---------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique record ID                                                                 | Number   | 1  |
| channel_id            | Channel ID                                                                       | Number   | 1  |
| name                  | Inbox nane                                                                       | String   | Welcome to live agent   |
| account_id            | Account ID                                                                       | Number   | 1  |
| created_at            | Inbox creation date                                                              | Date     | 2021-12-11 12:41:26.745 |
| updated_at            | Inbox updated date                                                               | Date     | 2021-12-11 12:41:26.745 |
| channel_type          | Communication channel, i.e. api, webWidget, facebook, ...                        | String   | "Channel:WebWidget" |
| enable_auto_assignment | Feature that allows the agent to auto assign conversations                      | Boolean  | true    |
| greeting_enabled      | Feature that allows an authomatic greting to be sent.                            | Boolean  | false   |
| greeting_message      | Authomatic greating message                                                      | String   | "Hi there!" |
| email_address         | Email Address                                                                    | String   | default |
| working_hours_enabled | Feature that enables a working hours timetable                                   | Boolean  | true  |
| out_of_office_enabled | Default message that will be displayed during out of office hours                | String   | "Out of office hours, please try again tomorrow" |
| timezone              | Inbox timezone                                                                   | String   | "UTC" |
| enable_email_collect  | Allows to collect email                                                          | Boolean  | true  |
| csat_survey_enabled   | Allows csat survey                                                                | Boolean  | true  |
| cognigy_organization_id | Cognigy account Id                                                             | Number   | 1  |
| cognigy_project_id    | Cognigy project Id                                                               | Number   | 1  |
| enable_auto_reassignment | Allows to reassign conversation                                                | Boolean  | true  |
| conversation_show_all | Allows to see all conversations in Inbox even if they do not belong to you.      | Boolean  | true  |

## Label
#### Description:
Labels are being used to mark, identify or group different converstations.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/Label?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                     | Type     | Example                      |
|-----------------------|---------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique Label ID                                                                 | Number   | 1  |
| title                 | Label title                                                                     | String   | label-complain"    |
| description           | Label description                                                               | String   | "labes used for complains"  |
| color                 | Label color                                                                     | String   | "red"    |
| show_on_sidebar       | Allow to show it on the sidebar                                                 | Boolean  | true |
| account_id            | Account to which the label will belong                                          | Number   | 3  |
| created_at            | Label creation date                                                           | Date     | 2021-12-11 12:41:26.745     |
| updated_at            | Label updated date                                                            | Date     | 2021-12-11 12:41:26.745     |

## Tagging
#### Description:
The tagging model contains the relation when a label is being used.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/Tagging?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                     | Type     | Example                      |
|-----------------------|---------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique record ID                                                                | Number   | 1  |
| tag_id                | Relation with the tag table metadata                                            | Number   | 1  |
| taggable_type         | What has been tagged, i.e. Conversation                                         | String   | "Conversation"  |
| taggable_id           | e.g. Conversation id                                                            | Number   | 1  |
| tagger_type           | who did the action                                                              | String   | "User"  |
| tagger_id             | e.g. user          id                                                           | Number   | 1  |
| context               | What has been used for the tagging, i.e. labes                                  | String   | "labels" |
| created_at            | Tagging creation date                                                           | Date     | 2021-12-11 12:41:26.745  |

## Tag
#### Description:
Tags metadata such number of times a tag has been used.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/Tag?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                     | Type     | Example                      |
|-----------------------|---------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique Tag ID                                                                   | Number   | 1  |
| name                  | laber title                                                                     | String   | testing-label    |
| tagging_counts        | #times used                                                                     | Number   | 1  |


## User
#### Description:
This data model holds information regarding the liveAgen users such an angent.

#### Example Query:
 * V1.0 Endpoint: `https://odata-trial.cognigy.ai/v1.0/odata/User?`.

#### Data Types:
When retrieving this data model, the endpoint will return the following fields:

| Field Name            | Description                                                                     | Type     | Example                      |
|-----------------------|---------------------------------------------------------------------------------|----------|------------------------------|
| id                    | Unique record ID                                                                 | Number   | 1  |
| provider              | e.g email                                                                        | String   | "email"    |
| uid                   | Provided unique identifier                                                       | String   | "some-email@cognigy.com"  |
| encrypted_password    | Encrypted password                                                               | String   | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38hjovasd"  |
| reset_password_token  | Token used to reset the password                                                 | String   | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38rjsvaru"  |
| reset_password_send_at | Date when a password reset was sent                                             | Date     | 2021-12-11 12:41:26.745  |
| remember_created_at   | Remember created at date                                                         | Date     | 2021-12-11 12:41:26.745  |
| sign_in_count         | Number of times user has signed in                                               | Number   | 3   |
| current_sign_in_at    | Current sign in date                                                             | Date     | 2021-12-11 12:41:26.745  |
| last_sign_in_at       | Last sign in date                                                                | Date     | 2021-12-11 12:41:26.745  |
| current_sign_in_ip    | Current sign in ip                                                               | String   | "120.0.0.1" |
| last_sign_in_ip       | Current sign in ip                                                               | String   | "120.0.0.1" |
| confirmation_token    | Confirmation token                                                               | String   | "$2a$11$L.610bEOk617uPiXy9L3HOq8nn6kdjJK2/X4p7ghlxPC38hjovasd"  |
| confirmed_at          | Confirmation token confirmed at                                                  | Date     | 2021-12-11 12:41:26.745  |
| confirmation_sent_at  | Confirmation token sent at                                                       | Date     | 2021-12-11 12:41:26.745  |
| unconfirmed_email     | Unconfirmed email                                                                | String   | "unconfirmed@cognigy.com"  |
| name                  | User name                                                                        | String   | "Francisco"  |
| display_name          | User display name                                                                | String   | "Paco"  |
| email                 | User email                                                                       | String   | "fran@cognigy.com"  |
| tokens                | User Tokens                                                                      | Json     | ""{\"MN4iNP38tvwe5wer7pvpnAQ\":{\"token\":\"$2a$10$iA7Si0sBV9lMkO2mqvwiD.L90.uTCl27WQbEo/Kc0W\",\"expiry\":1644763988}}""  |
| created_at            | User creation date                                                               | Date     | 2021-12-11 12:41:26.745     |
| updated_at            | User updated date                                                                | Date     | 2021-12-11 12:41:26.745     |
| pubsub_tokens         | User publish/subcribe token                                                      | String   | "MiVxY3FKry6oklambiuqL72nn"  |
| availability          | It represents the user's availability.                                           | Number   | 1  |
| ui_settings           | UI settings for user                                                             | Json     | "{"is_conv_actions_open": true, "is_contact_sidebar_open": true}"  |
| custom_attributes     | Custom attributes                                                                | Json     | "{}"  |
| cognigy_user_id       | Cognigy user id                                                                  | string   | "610bEOk617uPiXy9L3HOq8nn6kdjJK2"  |


## Integrations

<div class="divider"></div>

## Excel

When connecting from Microsoft Excel 2016, you must use the PowerQuery feature, which can be found under `Data > Get & Transform > New Query > From Other Sources > From OData Feed`. This will connect to our OData v4 feed.

## PowerBI

Please follow the [instructions in the Power BI documentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).

## Tableau

???+ danger "Incompatible OData Version"
    At the moment, Cognigy.AI supports OData version 4.0, which means that certain versions of Tableau are not compatible.

Please find instructions on how to connect an OData Feed in Tableau [here](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).

## OData Consumer Ecosystem

For a full list of available OData Consumer options please [follow the link to Consumers on OData.org](https://www.odata.org/ecosystem/#consumers).

## Client Libraries in .NET, Java, JavaScript, C++ and other platforms

For a full list of available OData Libraries please [see the latest directory of available libraries on OData.org](https://www.odata.org/libraries/).