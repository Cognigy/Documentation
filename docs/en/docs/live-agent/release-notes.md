# Cognigy Live Agent

## 4.31.0
**Released** August 2nd, 2022

### Improvements

- Improved by redesigning the Whisper agent assist and adding new info cards to it
- Improved by making the conversation Cognigy Channel type field human readable
- Add the possibility to edit contact profiles by agents directly in the conversation information section, the change will be reflected in Cognigy.AI as well
- Improved by adding user ability to set their status to "away"
- Improved by adding an "Unassign" command in place of the "None" agent in the conversation action section, so that users can more easily unassign conversations
- Improved by adding inbox avatar to conversation list and having both upload and delete operations propagate immediately without needing a page refresh
- Improved by allowing rendering of info cards using the new JSON payload proportioned by Cognigy
- Improved by adding human-readable channel mapping to conversation filters and conversation information section
- Improved by fixing a memory leak while querying conversations
- Improved by making info card images' size more dynamic. It adds preview text for agent assist messages and the possibility to use line breaks in info card bodies. It fixes floating arrows when hovering and  galleries not working correctly when hovered

### Bugfixes

- Fixed a bug where availability status colors were not propagating correctly
- Fixed a bug where user who clicks on the assigned agent unassigns the conversation
- Fixed a bug where agent availability was set back to online after reloading the page

## 4.30.0
**Released** July 18th, 2022

### Improvements

- Add Cognigy.AI channel to the conversation information section and also add the possibility to filter conversations based on this field

### Bugfixes

- Fixed a bug where the Cognigy user profile in the conversation was emptied while receiving new incoming messages into the conversation


## 4.29.0
**Released** July 7th, 2022

### Improvements

- Improved by adding support to remember the first accessed URL path and redirecting to it after login successfully

- Improved by removing resolve functionality from the mute operation. Previously, whenever an agent would mute a conversation, the conversation would be automatically resolved

### Bugfixes

- Fixed a bug where conversations preview message for adaptive cards was not displayed properly

## 4.28.0
**Released** June 23rd, 2022

### Features

- Add the new supervisor dashboard under the "Reports" section, including information about agents' availability and conversations statuses.

- Add the new notification centre that makes it quick to access the latest notifications.

### Improvements

- Improved by adding the possibility to reply to conversations on behalf of the user when it has the agent inject option enabled

## 4.27.0
**Released** June 7th, 2022

### Improvements

- Improved the UI for agent assist by reducing the structured content messages and simple messages to 70% of their original size, changed the forward arrow icon and added functionality to forward the agent assist message by clicking the whole agent assist message container. Also augmented the size of non-forwardable informational elements like Lists and Text with buttons

- Improved by adding the possibility to render adaptive card messages in Live Agent as structured content and as agent assist messages, non-forwardable adaptive cards are shown in the original size so they can serve as informational elements

## 4.26.0
**Released** May 24th, 2022

### Improvements

- Improved by adding the capability to upload doc/docx files by agents and contacts

- Improved by including the Cognigy Session ID field in Live Agent as part of the conversation information and also as a filterable field for conversations

- Improved by adding support for trusting self-signed CA certificates and client certificates in the requests to Cognigy.AI. Have a look at the Helm Values SSL section

- Improved by removing UI parts related to custom attributes as they were not used

### Bugfixes

- Fixed a bug where the agent will not show its online status in the contact actions dropdown

- Fixed a bug where the website favicon didn't change, and the notification sound was not played while receiving new messages

- Fixed a bug where Cognigy.AI multitenant users were not able to login into the proper Cognigy.AI organisation using OAuth login

- Fixed a bug where agents were not notified about conversation assignment the first time the conversation was created and auto-assigned to them

## 4.25.0
**Released** May 10th, 2022

### Improvements
- Improved by fixing security vulnerability CVE-2022-28391 affecting the OData service
- Improved by adding optional antivirus scan with ClamAV on file uploads
- Improved by adding the section "Previous Conversations" to the conversations view right panel to allow agents see the rest of the conversations with the same contact

## 4.24.0
**Released** May 2nd, 2022

### Improvements
- Improved by polishing contact info section styling for displaying Cognigy.AI contact profile fields
- Improved by changing the color of the agent messages to a slightly lighter blue to differentiate them from the Cognigy.AI bot messages
- Improved by rendering Cognigy.AI contact profile data in the conversation view under the contact info section. 
    - A new value called `COGNIGY_AI_API_BASE_URL_WITH_PROTOCOL` must be added to the Helm values.yaml file to make it work. [More information here]({{config.site_url}}live-agent/installation/helm-values/helm-values/#urls).
- Improved by removing functionality related to adding agents as now Cognigy.AI is where the user management happens
- Improved by removing the ability to reopen resolved conversations at UI and API level
- Improved by adding Cognigy Logo for bot messages
- Ability to send multiple attachments from the agent dashboard

## 4.23.0

### Improvements
- Improved by having proper OAuth error pages design with links to receive support in the Live Agent documentation
- Improved by extending Cognigy.AI OAuth handler logic to update user fields while doing log in when they are changed in Cognigy.AI, such as the user name
- Improved by hiding inbox setting allow messages after a conversation is resolved as it was not working as expected
- Improved by hiding conversation section "previous conversations" as it was not working as expected