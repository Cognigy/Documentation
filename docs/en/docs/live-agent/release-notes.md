# Cognigy Live Agent

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