# Cognigy.AI

## 4.29.0
**Released** July 7, 2022

### Improvements

- Improved by making the tooltips and toggles accessible
- Improved by adding the option to disable collection of Intent Trainer Records in the Blind Mode Node
- Improved by forwarding profile information to Ring Central Engage platform
- Improved by routing to the run step details panel from task menu
- Improved by adding a collapsible panel to show resource details of a playbook run
- Improved by adding an option to the Match Pattern Node, to use the full text of a system slot in match patterns
- Improved by not allowing the last admin of an organization to get deleted from the system

### Bug Fixes

- Fixed a bug where e.g. "zweimal" would not be recognized as a number in German
- Fixed a bug where e.g. "den 4.5." would not be recognized as a date in German
- Fixed a bug where e.g. "before the 28.03.2000" would not be recognized as a date in English
- Fixed a bug where you might see an unexpected value for timezoneOffset in the Input object
- Fixed a bug where Chatwoot did not get the "Handover Resolved" status and conversation would not go back to the flow
- Fixed a bug where exporting multiple times same lexicon threw a conflictError
- Fixed a bug where the Question node escalations would not respect the forget question threshold
- Fixed a bug where money slots could not be used in match patterns
- Fixed a bug where a task did not fail properly during a playbook run when the resources are unavailable (locale, flow, project/snapshot)
- Fixed a bug where console.error and console.info logs are not getting forwarded to service-logs
- Fixed a bug where the endpoint client was called several times in a short time frame and got a hiccup which could lead to the wrong order of messages when the inject API gets utilized
- Fixed a bug where endpoints with Live Agent handover provider that were built before agent assist and autoconfigure showed a dirty state when opened in the endpoint editor

## 4.28.1
**Released** June 29, 2022

### Bug Fixes

- Fixed a bug where the handover status conversation "resolved" is not working when handing over to Cognigy Live Agent

## 4.28.0
**Released** June 23, 2022

### Improvements

- Improved by making UX better for extension installation and upload
- Improved by refreshing Contact Profiles on each new input by default
- Improved by adding the organisationId to the url after logout so that multi-org users also can log in again right away
- Improved by forwarding the say node settings including the forwardable flag to the Live Agent provider
- Improved by adding a query parameter to retrieve the proper threads without pagination in Ring Central Engage
- Improved by allowing attachments to be forwarded in "as-is" format for the webhook channel to be handled in output transformer
- Improved by making changes to meet accessibility standards
- Improved by providing a better UX for our Playbook Player in the Interaction Panel
- Improved by adding realtime translation for adaptive cards

### Bug Fixes

- Fixed a bug where the incorrect text and data would be set after using executeCognigyNLU with mode Overwrite Input
- Fixed a bug where the Question node of type RegExp would fail on a data-only input
- Fixed a bug where the Execute Cognigy NLU node would not recognize rule intents which were testing properties that were added to the input object during the Flow execution!9498, ticket: #26191)
- Fixed a bug where delete button is displayed when hovering over disabled example sentences
- Fixed a bug where the Form Data payload would not work in HTTP Request nodes
- Fixed a bug where Allow Insecure SSL would not work in HTTP Request nodes
- Fixed a bug where exact matching results differed between training runs
- Fixed a bug where exact matching did not apply when "Flow Mapping Order" was set to "Main First" or "Attached First"
- Fixed a bug where every-time a user deletes an intent trainer record, two records get removed instead of one from the UI
- Fixed a bug where last activity date in Access Control displays values in an inconsistent way
- Fixed a bug where confirmation words were registered case-sensitive. They are now case-insensitive, such that a positive confirmation word "CORRECT" would be recognized with the input text "correct"
- Fixed a bug where all AI Agents deployed on the Slack channel would return the same responses
- Fixed a bug where validation for threads was missing for Ring central Engage
- Fixed a bug where OpenAPI request for management POST users and PATCH organisation did not work
- Fixed a bug where a new agent bot was created for each session when using Live Agent
- Fixed a bug where default 'translate to' in Norwegian localization shows "Afrikaans" instead of "Norwegian"
- Fixed a bug in flow editor UI where you could not create multiple tokens without refreshing the page

## 4.27.0
**Released** June 7, 2022

### Features

This release of Cognigy.AI adds a new user interface for inspecting Playbook Runs. This allows our customers to see the status of Playbooks they ran server side. Take a look at our product documentation for more information.

### Improvements

- Improved by adding 'Automatically move Flow Editor' setting to interaction Panel
- Improved by enabling Live Agents to send a message to the AI Agent on behalf of the user
- Improved by adding a setting for handover assist to the say node default tab
- Improved by sending a helper email to those user who fail to log in due missing the organisationId in URL
- Improved by adding a "test mode" to REST Endpoints
- Improved by providing an additional Flow Select Field for Intent Selection in Case Nodes
- Improved by adding the possibility to configure a Whisper Assist Init Message
- Improved storage of session states by adding the possibility to add a debounce by time or counter
- Improved by adding an environmental variable NLP_ANYSLOT_RETURN_MODE=all/exact/default specifying which Any Slot matches shall be returned to the agent, see documentation
- Improved by adding an overwrite webchat bundle URL setting to endpoint
- Improved by allowing user to override the default InboxId for the LiveAgent

### Bug Fixes

- Fixed a bug where extension was not removed from UI after deleting it
- Fixed a bug where fields in Interaction Panel received keyboard focused even when IP is closed
- Fixed a bug where no IP address was added to inject messages
- Fixed a bug where drag&dropping an intent would not immediately show the new build status
- Fixed a bug where adaptive cards were not forwarded to Live Agent
- Fixed a bug where the page scroll bar pops up once the interactive tooltip of the last displayed message in chat history reaches the bottom of the page
- Fixed a bug where Any Slot matching failed when Lexicon Slots were annotated without the Lexicon attached
- Fixed a bug where the same Any Slot was detected multiple times
- Fixed a bug where seemingly an incorrect Any Slot was detected
- Fixed a bug where Microsoft Teams endpoint (webhook api) cannot handle "empty message response"

## 4.26.1
**Released** May 31, 2022

### Bug Fixes

- Fixed a bug where messages from ABS Endpoints could be incorrectly answered
- Fixed a bug where webhook endpoint notify is not working by creating missing generic endpoint instance using channel type "webhook"

## 4.26.0
**Released** May 24, 2022

### Features

#### Create Flows from child-branches in Flows

This release of Cognigy.AI adds the ability to create entirely new Flows from child-branches of already existing Flows. This new functionality helps to reduce the overall size of big Flows into more managable smaller fragments

### Improvements

- Improved by making the UI better for Follow User feature
- Improved by upgrading the webchat widget in service-webchat and service-ui to version 2.41.0
- Improved by allowing 3rd party client cognigy-live-agent to query user data
- Improved by forwarding the sessionId to Live Agent
- Improved by displaying appropriate extension label in Uninstall/Update dialog box
- Improved by automatically filling question node fields with Cognigy Live Agent inbox ID
- Improved by removing special characters from intents names, hence allowing to import packages created in previous versions of Cognigy.AI v4
- Improved by introducing a frustration property to the input object, which increases when the user repeatedly takes the same path through the Flow
- Improved by limiting access to sensitive data for user without followUser permissions
- Improved by adding support for pre-chat entities and details to the Salesforce Handover Provider

### Bug Fixes

- Fixed a bug where "hangup" event would be marked same as the client-side "disconnect" in AudioCodes
- Fixed a bug where the field text shows the characters from the IME window doubled on a Windows machine
- Add missing database indices to various collections in service-resources db to improve performance of various APIs
- Fixed a bug where some keyphrases where not found when followed by a dot
- Fixed a bug where misusing the limit parameter with a value 0, returned all the items in the collection
- Fixed a bug where slots were not properly reparsed when coming from Alexa skill

## 4.25.0
**Released** May 10, 2022

### Improvements
- Improved by adding possibility to update an extension in the agent
- Improved by adding support for SSO logout for Azure AD initiated from service provider

### Bug Fixes
- Fixed a bug where data messages were showing up as UNSUPPORTED_DATA_MESSAGE in Live Agent
- Fixed a bug where SSO login was not working for multi-org users, who are not explicitly part of Cognigy user list

## 4.24.1
**Released** May 5, 2022

### Bug Fixes
- Fixed a bug where rankedBarChart were freezing dashboards screen

## 4.24.0
**Released** May 2, 2022

### Features
#### Server side Playbook execution
This release of Cognigy.AI adds the ability to execute Playbooks server side. We have added new RESTful API endpoints allowing our customers to start Playbook runs and inspect their results

#### Jump to Flow Node capabilities
This release of Cognigy.AI adds the ability to inspect individual outputs within the Interaction Panel and understand which Flow Node has created a specific output. Our customers can jump to the respective Flow and Flow Node in order to further understand where an output is coming from

### Improvements
- Improved by tracking handover information by session and not by user - this allows our customers to have multiple handovers for the same user when different session identifiers will be provided
- Improved by adding a small talk German language skill template to the agent creation wizard
- Improved the API to get conversation counters by retrieving it by channel
- Improved by updating the webchat and it's widgets in service-webchat to the newest version (2.40.7)
- Improved by making the handover escalation in Question Nodes up to date with the new HandoverToAgent Node
- Improved by adding an option to question nodes to ignore non-escalation intents in an active question
- Improved by adding basic & advanced tags to the templates in the Agent Creation Wizard
- Improved by renaming Templates to Solution Accelerators in the Agent Creation Wizard
- Improved by reading the filtered logs from backend
- Improved by modifying the Agent wizard step titles

### Bug Fixes
- Fixed a bug where messages in the Live Chat were missing when a conversation is "Taken over" by one agent and then later the other
- Fixed a bug where a user assigned to multiple organizations could not log in to one of the assigned organizations
- Fixed a bug where slots were not always found in executed Flows (with executeFlow node or Go To node), when parseSlots option was disabled
- Fixed a bug where adding image tag in SMTP Email Node Content field did not work as expected
- Fixed a bug where list output type in messenger channel crashed node editor
- Fixed a bug where one of our info logs was missing the name of a flow
- Fixed a bug where sometimes attached flow intents are not scored when "Attach Flow Intent Mapping Priority" is set to "Map Main Flow first" in a flow's settings
- Fixed a bug where the main or attached flow thresholds would be overridden with the threshold that is defined agent-wide, when the agent-wide threshold is lower than the other thresholds
- Fixed a bug where the message history after a Handover would sometimes be incomplete
- Fixed a bug where the agent settings page crashed due to incomplete data in the cache
- Fixed a bug where sometimes page titles were not correctly displayed after page load
- Fixed a bug where wrong answer escalation was not working correctly for intent questions when an intent reconfirmation was negated
- Fixed a bug where handover triggers only on the second user input

## 4.23.3
**Released** April 20, 2022

### Bug Fixes
- Fixed a bug where the headers from the http request node are overwritten with the default content-type application/json

## 4.23.2
**Released** April 14, 2022

### Bug Fixes
- Fixed a bug where the timeouts of HTTP Requests were no longer configurable on an infrastructure level

## 4.23.1
**Released** April 13, 2022

### Bug Fixes
- Fixed a bug where the URL would be double encoded for HTTP Requests

## 4.23.0
**Released** April 12, 2022

### Features
#### New Agent templates
This release of Cognigy.AI contains new templates for our Agent creation wizard. We have introduced a variety of new templates in order to support our customers with getting starter quicker

### Improvements
- Improved by allowing to set the handoverEscalations in the analytics data from a Code Node or from the Overwrite Analytics Node
- Improved by allowing customers to be notified through log when the license has 3 months left or less

### Bug Fixes
- Fixed a bug where localizing a node was not translating the voice-gateway channel text.
- Fixed a bug where the timezone was not always correct after using the setTimezoneOffset action.
- Fixed a bug where the session state could not be saved when the Flow would output JSON with a $ in the key
- Fixed a bug where some executed nodes were not getting green border
- Fixed a bug where basic user with member manager roles didn't have correct permissions
- Fixed a bug where a Flow Editor UI refresh was needed after new extension have been installed in order to be able to add Flow Nodes of these extensions in Flows

## 4.22.2
**Released** March 31, 2022

### Bug Fixes
- Fixed a bug where data from Microsoft Azure Bot Services endpoint would not get properly forwarded to the Flow

## 4.22.1
**Released** March 30, 2022

### Bug Fixes
- Fixed a bug where inject and notify didn't work for Microsoft Azure Bot Services endpoints

## 4.22.0
**Released** March 28, 2022

### Features
This release of Cognigy.AI gives customers the ability to override the Connections of a Snapshot with those of the Agent via an Endpoint setting

### Improvements
- Improved the performance of the Flow Chart Editor
- Improved by adding support for embedding the Webchat via an iFrame by configuring an environment variable
- Improved by adding a new region field to the Microsoft translation settings. When the region is set, all the subsequent requests to the Azure Cloud Translator will include the set region
- Improved by showing a warning indicator when more than 100 example sentences are provided for an Intent
- Improved by no longer stopping the Flow execution when an Extension times out. Instead, the error will be available to the Flow in the input object. This change does not impact existing Snapshots#23106)
- Improved performance by loading contact profiles in parallel with scoring the NLU model

### Bug Fixes
- Fixed a bug where the userId when using our Azure Bot Services Endpoint would reset after one hour
- Fixed a bug where the "Alternate Input" of a Match Pattern is mistakenly not used
- Fixed a bug where incomplete transcripts are shown in Salesforce Service Cloud Live Chat after a handover is performed
- Fixed a bug where the NLU does not separate text into tokens at the correct places when Chinese is used as NLU language
- Fixed a bug where whitespaces and ampersands are not encoded correctly in URLs when HTTP requests are made using the HTTP Request Node
- Fixed a bug where a too high number of "user quit/joined" events are displayed in Live Chat and Live Agent
- Fixed a bug in Live Chat where the last message would not always be displayed in the sidebar
- Fixed a bug where the input.intentLevel object is not available after an Intent reprompt, a Question Node with reconfirmation or a Question Node with reprompt and reconfirmation
- Fixed a bug where user-generated logs from Adaptive Cards metadata with keys starting with a dollar $ symbol are incorrectly not persisted
- Fixed a bug where Merge Profile does not work via API
- Fixed a bug where the user ID is cut off and cannot be copied in Live Chat
- Fixed a bug where large Lexicons could not be downloaded properly

## 4.21.2
**Released** March 22, 2022

### Bug Fixes
- Fixed a bug where the injectContext API would not work as the Context would not get properly deserialized after loading from the database

## 4.21.1
**Released** March 22, 2022

### Bug Fixes
- Fixed a bug where the new session state management introduced in 4.21.0 would not properly work in certain conditions

## 4.21.0
**Released** March 22, 2022

### Improvements
- Improved by removing flickering from agent switcher in Cognigy Insights
- Improved by making sure that pressing tab in the Intent Editor will move focus to the next example sentence
- Improved by implementing new session-state management which increases platform throughput of up to 25%

### Bug Fixes
- Fixed a bug where the Intent Editor would show unsaved changes when switching the Intent after clicking the save button
- Fixed a bug where conversation-consumption reporting would not be working in a reliable way
- Fixed a bug where the UI would display an error when quickly switching between attached Lexicons
- Fixed a bug where the UI would display an error when quickly switching between attached Flows
- Fixed a bug where Intent training could fail due to empty example sentences
- Fixed a bug in Cognigy LiveChat / Live Agent lite where users with access to multiple Organizations could not log in
- Fixed a bug where using a "wait for input" and "execute flow" Node after each other would lead to the wrong Cognigy Input object getting used
- Fixed a bug where our NLU engine would detect a distance instead of a money-slot for a certain input
- Fixed a bug in the Cognigy Insights Transcript Explorer where using the expert mode would time out due to a missing database index
- Fixed a bug on Cognigy Insights dashboards where the time-resolution was incorrect (displayed data in hours instead of minutes)
- Fixed a bug where the Intent Editor would not display the "build model required" indicator after changing Agent settings

## 4.20.1
**Released** March 9, 2022

### Bug Fixes
- Fixed a bug where the Flow Editor could crash

## 4.20.0
**Released** March 9, 2022

### Features
#### Merging Cognigy Packages
This release of Cognigy.AI adds the ability to merge Flow from Packages with the Flows already existing in your Agent. The functionality can also be used through our RESTful API.

#### Additional Filter for Cognigy Insights Transcript Explorer
This release of Cognigy.AI adds an additional "Flow Filter" to the Transcript Explorer in Cognigy Insights.

#### Additional Filter for Cognigy Insights Message Explorer
This release of Cognigy.AI adds an additional "Flow Filter" to the Message Explorer in Cognigy Insights.

### Improvements
- Improved by adding descriptions to settings section in Flow Node Editor
- Improved by adding autofocus to Say-Node text field in Flow Node Editor
- Improved by adding optional (opt-in) cache for Flow execution
- Improved by activating a new Lexicon Slot matcher by default - improving Intent training and making training of larger Intent models possible
- Improved by updating internal http-request library which is exposed in Endpoint Transformers
- Improving oauth-based login experience for Cognigy Live Agent when users are part of multiple Cognigy Organizations
- Improved by reducing Snapshot size and NLU Training time by re-using fallback locale
- Improved by preventing unnecessary re-render of our UI in the Endpoint Editor when Flow changes


### Bug Fixes
- Fixed a bug where copying a Flow as part of a Cognigy Package prevent Intent Training
- Fixed a bug where importing a Flow from a Cognigy Package could trigger Intents from the original Flow during Flow execution
- Fixed a bug where an old Intent model could be used during Flow execution when the Locale is not explicitely selected in the Endpoint
- Fixed a bug with Slotfillers when triggering the DATE Slot at the same time
- Fixed a bug where Steps in the Cognigy Insights Step Explorer would not appear in the Step-dropdown when Steps come from a Snapshot
- Fixed a bug where localized content in Flows would get lost during Package import when set to "do not import"
- Fixed errors in our UI which would appear in the browsers console when navigating to the Flow Editor
- Fixed a bug where Date recognition in our Cognigy NLU engine would stop working when api.setTimezoneOffset has been used in a Code Flow Node
- Fixed a bug where updating Lexicon entries would not work in certain situations
- Fixed a bug where uploading Lexicon CSV with an empty 4th column would not work
- Fixed a bug regarding our Lookup Flow Node and its label
- Fixed a bug in our Intent Editor where the view was out of sync and would display wrong data of another Intent
- Fixed a bug where huge lexicons could not be downloaded

## 4.19.1
**Released** February 25, 2022

### Bug Fixes
- Fixed a bug where the Socket endpoint event-buffer mechanism would not work properly when used in combination with handover functionality
- Fixed a bug where additional connections to the Redis data-store would not be closed when using the Socket endpoint event-buffering mechanism

## 4.19.0
**Released** February 25, 2022

### Features
#### Last activity tracking
This release of Cognigy.AI adds the functionality to track the last activity of users in the Cognigy.AI user interface. The data will be displayed to administrators of the platform in the access control tool

### Improvements
- Improved by adding the option to collate and concatenate multiple user inputs into one message to Webchat Endpoint settings
- Improved by adding icons to the handover provider menu
- Improved by adding a sidebar to Insights to navigate to Cognigy.AI
- Improved by reordering the User Menu items by introducing separate sections for navigation to further Cognigy products
- Improved by adding dynamic page titles to Cognigy Insights
- Improved by updating Cognigy Journeys with up-to-date content
- Improved by preselecting the current Flow in the Go To Node
- Improved by adding the option to configure a get started message data payload for the Webchat Endpoint which is sent to the Flow

### Bug Fixes
- Fixed a bug where a wrong Locale is assigned to the Endpoint after a Snapshot is restored
- Fixed a bug where the Transcript Explorer incorrectly indicated that more transcripts are being loaded
- Fixed a bug where errors are incorrectly logged once inactive “Cognigy Livechat” handover sessions are closed
- Fixed a bug where the transcripts in the Transcript Explorer are not correctly filtered in all cases if the global Endpoint filter is used
- Fixed a bug where the translation of outputs of Webchat channel does not work correctly
- Fixed a bug where wrong Intents and Slots are part of analytics data, if executeFlow is used either with parseIntents or parseSlots enabled
- Fixed a bug where the number of Intent matches is not consistent between different widgets of Insights in some cases
- Fixed a bug where Inject/Notify does not work for Ringcentral Engage Endpoints
- Fixed a bug where service-nlp-ner crashes when there is a timeout in getting results from duckling
- Fixed a bug where no analytics data are stored in case of an error in a Flow
- Fixed accessibility issues related to Intent Level select of Lookup Nodes
- Fixed an accessibility issue by adding shadow to switch buttons
- Fixed a bug where the Extension details sidebar mistakenly stays open after an Extension is deleted
- Fixed a bug where the Insights Understood Messages widget shows incorrect numbers
- Fixed a bug related to duplicate training records in the Intent Trainer in case Flows are switched
- Fixed a bug where the wrong Flow name and Flow ID is stored in analytics if an Intent is triggered in an attached Flow
- Fixed a bug related to incorrect chart labels within the “Understood Messages” and the “Average Execution Time” widgets of Cognigy Insights
- Fixed a bug related to pagination not properly working in Message Explorer of Cognigy Insights
- Fixed a bug where changing the setting "Use Thresholds of the attached Flows" results in different Intent Scores
- Fixed a bug where Message Explorer does not show user rating data as well as AI Agent rating request data
- Fixed a bug where structured content is not translated when adding Node Localization by using translation
- Fixed a bug where the loading of the Transcript Explorer does not work properly after filters are changed or reset
- Fixed a bug where the Time to live (TTL) as well as the expiry message for a LiveChat Lite handover request is not configurable
- Fixed a bug where “user quit/joined” notifications are not shown in Cognigy LiveChat Lite
- Fixed a bug where users being part of multiple organizations could not log in to LiveChat Lite
- Fixed a bug regarding authorization and file downloads
- Fixed a bug where our UI would break when navigating from Endpoints to Localization

## 4.18.2
**Released** February 10, 2022

### Bug Fixes
- Fixed a bug where the "Wait for Input" Flow Node would keep waiting after an Intent with Default Reply was recognized

## 4.18.1
**Released** February 10, 2022

### Bug Fixes
- Fixed a bug where the default "/" route for the WebchatWidget demo-page would return "HTTP 404" instead of "HTTP 200 Ok"


## 4.18.0
**Released** February 10, 2022

### Improvements
- Improved by adding more sophisticated highlighting of search results within the Edit Node sidebar
- Improved by allowing to close the Journey wizard by pressing the Escape key
- Improved by adding more meaningful descriptions to fields of the Send SMTP Email Node
- Upgrade internal WebchatWidget to v2.39.0

### Bug Fixes
- Fixed a bug related to conversation statements not showing up in the right order in the Transcript Viewer
- Fixed a bug where conversations with a contactId containing a slash character could not be opened
- Fixed a bug where the Insights toolbar is improperly displayed when the filter sidebar is opened
- Fixed a bug causing Insights to not display the data of the most recent conversations in some cases.
- Fixed a bug where a Go To Node with injected text is used and a matched Intent is incorrectly not available in the Input object
- Fixed a bug where copying transcript messages from the Transcript Explorer does not work sufficiently
- Fixed a bug related to the default label of a Node not displaying correctly in the Edit Node sidebar
- Fixed a bug related to Step filter of Transcript Explorer not resetting properly
- Fixed a bug where Lexicons with more than 500 Keyphrases having synonyms could not be uploaded
- Fixed a bug related to an incorrectly logged error message when the Agent Settings page is refreshed
- Fixed a bug where an error is incorrectly thrown if there is a DATE slot match but no start date in the slot match
- Fixed accessibility issues related to too small sizes of some icons and texts
- Fixed accessibility issues in Agent dashboard
- Fixed accessibility issues related to keyboard focus visibility
- Fixed accessibility issues related to the language attribute value not changing when the language of the application is switched by the user
- Fixed accessibility issues related to color contrasts in AI as well as in Insights
- Fixed accessibility issues related to the Node comment dialog
- Fixed a bug where, after Wait for Input Node with reconfirmation, it is still waited for input even if is already answered Yes or No
- Fixed a bug related to CognigyScript conditions not being correctly evaluated when Output Type List is used
- Fixed a bug where the screen reader text in the Flow Chart Editor is not properly composed
- Fixed a bug where Task Manager related errors are mistakenly generated
- Fixed a bug where errors are not properly handled when non-existing processes are killed
- Fixed a bug where an invalid json is generated when a period for which no data exists is specified via the OData interface using $filter
- Fixed a bug regarding our Think Node when using Go To to jump into a sub-Flow
- Fixed a bug where the entrypoint was wrong when using our Think Node together with the Execute-Flow Node and a Question Node
- Fixed a bug where Execute-Cognigy-NLU Node would use the wrong Flow

## 4.17.2
**Released** January 31, 2022

### Bug Fixes
- Fixed a bug where the history in Cognigy Live Agent would be incomplete in certain situations

## 4.17.1
**Released** January 20, 2022

### Bug Fixes
- Fixed an issue regarding the Cognigy voice-gateway endpoint when using the "async" mode together with output Transformers

## 4.17.0
**Released** January 17, 2022

### Features
#### New Handover to Agent Node
The new “Handover to Agent” Node allows users to configure different AI Agent behaviors depending on whether a Handover has been finished, a Handover has been canceled, or an error has occurred. The new Node replaces the existing "Handover" node, although the latter will continue to work.

#### Intent handling in Lookup Nodes
This release allows users to set the Intent hierarchy level in Lookup Nodes of type Intent. Only Intents of the selected hierarchy level are looked up. The current behavior that Intents are matched on the most detailed level remains the default behavior.

### Improvements
- Improved by allowing to filter Transcripts based on selected steps in the Step Explorer
- Improved by adding a new global “Rating” filter to Insights
- Improved by structuring the Webchat Endpoint settings more clearly
- Improved by adding a “Go to Extensions Marketplace” tooltip to the Node Selection Menu
- Improved the Flow Node Search by highlighting the fields with matching search results within the Edit Node sidebar, by including JSON keys of custom json fields in the search results and by enhancing the performance of the search
- Improved by supporting 10 custom fields exposed in the Analytics records instead of three
- Improved by allowing vertical scrolling on the rows of the Step Explorer
- Improved by allowing to delete Intent Example Sentences with a single click
- Improved the loading behavior after saving Intent Example Sentences

### Bug Fixes
- Fixed a bug related to Endpoint Transformers not working when Inject/Notify APIs are used
- Fixed a bug related to the Insights “Live Agent Escalations” graph showing inaccurate data
- Fixed a bug related to headers in the HTTP Request Node are incorrectly set when oAuth2 is enabled
- Fixed a bug where “lakh” is incorrectly not recognized as a number
- Fixed a bug where timestamps of bot and user messages are incorrectly displayed in chatwoot
- Fixed a bug where users can select a custom date range with end date before start time
- Fixed a bug related to a misleading label in the configuration of the “Salesforce Handover Provider”
- Fixed a bug where Keyphrase matching does not properly work when Slots are added or removed as long as the model is not retrained.
- Fixed a bug where the search result would not be properly highlighted in certain situations
- Fixed a bug where handover on first message was not possible
- Fixed a bug where rating details were not shown on the Step Explorer page
- Fixed a bug where the Transcript Explorer steps would not get cleared on Agent change and could crash the UI
- Fixed a bug where "open conversations that took this path" would not show the correct conversations list when the direction is set to "backward"

## 4.16.1
**Released** January 6, 2022

### Bug Fixes
- Fixed a bug in the Input Transformer for our Webhook endpoint where the message would not get processed when the Transformer would return null and already sent a response to the original HTTP call

## 4.16.0
**Released** January 6, 2022

### Features
#### Flow Node Search
This release adds the ability to search through Flows in the Flow Editor. Customers can already
search through a couple of properties within their nodes - more properties will be
added in the future

#### Users in multiple Organizations
This release of Cognigy.AI allows users to be part of multiple Organizations. Users
can specify an organisationId as part of their sign-in process which allows them
to pick the Organization for which they want to perform a sign-in

#### Salesforce Service Cloud - Handover Provider
This release of Cognigy.AI adds Salesforce Service Cloud as a new Handover provider

#### Train on Default Replies
This release of Cognigy.AI adds the ability to include the data of Default Replies in
Intents into the training of Intent models. This change can improve the accuracy
of your Intent models

#### Match Pattern- & Fuzze-Search Flow Nodes
This release of Cognigy.AI adds two new Flow Nodes into Cognigy Flows. One lets you
match specific patterns within the input utterances of users, the other one allows
you to conduct a search against an array of strings and return the one with the highest
likelihood

### Improvements
- Improved by adding “Open Node” to the context menu of the Insights Step Explorer, allowing users to navigate directly to the Node defining the particular step in the Flow Editor
- Improved by adding support for custom light themes
- Improved by explicitly displaying the timeframe for which data is shown in Insights
- Improved by adding a “Reset Filters” button to the Transcript Explorer
- Improved by adding fields for the key value pairs to the Headers section of HTTP Request Nodes
- Improved by adding an explicit link to Cognigy Insights to the analytics widget of the Cognigy.AI dashboard
- Improved by adding links to the Extensions Marketplace from the Node Selection Menu of the Flow Editor
- Improved by adding a filter to Step Explorer, so that only results including a specified step are shown
- Improved by enabling the “Set Rating” Node by default
- Improved by renaming tiles in Insights to better describe what is being displayed
- Improved by renaming the “Generic” NLU language option to “Universal”
- Improved by making button labels in Agent Creation Wizard clearer
- Improved Insights dashboard performance
- Improved by adding a redirect to the login page from Insights for unauthorized users
- Improved by adding an optional custom base url field to the Translation Provider settings. This allows users to set the region for Microsoft and Google translation services and also to use the DeepL free API instead of the pro API
- Improved by adding a setting to enable and disable the “Demo Webchat” functionality on a per-endpoint basis
- Improved by adding the “Autogrow Text Input” setting to the Webchat Endpoint. If it is activated the text area expands for longer inputs. It is configurable by how many lines text inputs are maximally expanded
- Improved by adding the ability to have a Question Node reconfirm an answer with the user before proceeding
- Improved by adding the ability to specify the time of day when defining a custom period for which Insights data are to be displayed
- Improved by displaying error notifications when users try to navigate to a Node that does not exist in a Flow
- Improved by adding a Service Desk Template for NLU language Japanese

### Bug Fixes
- Fixed a bug where messages could be sent twice to customers when using Chatwoot as a Handover Provider
- Fixed a bug where the "Set Session Params" Flow Node would not properly work when using our VG Endpoint and the async-mode
- Fixed a bug where question escalation is incorrectly not reset
- Fixed a bug related to timeout issues when headers are of type array in HTTP request Nodes
- Fixed a bug related to accessibility issues on the Profile page
- Fixed a bug where Slots could not be changed during Flow execution, e.g. in a Code node
- Fixed a bug where a “Wait for Input” Node is incorrectly skipped
- Fixed a bug where executing a Flow from a substructure of itself does not work
- Fixed a bug where a Question Node of type text is implicitly answered when triggered twice
- Fixed a bug related to labels of Insights bar charts not being fully displayed
- Fixed a bug where escalation with an Intent is not working in Intent Questions
- Fixed a bug where text content from Voice Gateway sendMessage Nodes is incorrectly available in the Webchat
- Fixed a bug related to the Duration Slot “time in seconds” being incorrectly calculated
- Fixed a bug related to uploading Intents with Default Replies
- Fixed a bug where users do not get error notifications when translation for a Node or Intent fails
- Fixed a bug where the renaming of Intents does not trigger build notifications
- Fixed a bug where interactive postback messenger elements do not work in the “agent helper chat” of Live Agent Lite
- Fixed a bug where Voice Gateway messages are not correctly shown in the Interaction Panel
- Fixed a bug related to freezing Insights dashboards
- Fixed a bug where the Step Explorer does not load if no Steps are found
- Fixed a bug related timeout errors on the Logs page
- Fixed a bug where users are not able to enter data within the Token creation dialog
- Fixed a bug where the original Input object is restored after a question, where it should not
- Fixed a bug related to REST Endpoints not supporting Error
- Fixed a bug where Insights dashboard number widgets rely on data that are not scoped to the selected timeframe
- Fixed an issue related to a missing postback value in the Japanese NLU Restaurant Template

## 4.15.3
**Released** December 8, 2021

### Bug Fixes
- Fixed a bug where the "Set Session Params" Flow Node would not properly work when using our VG Endpoint and the async-mode
- Fixed a bug where our delete Profile API could time out

## 4.15.2
**Released** November 26, 2021

### Bug Fixes
- Fixed an issue where an internal component used in paginated API calls would be less performant

## 4.15.1
**Released** November 18, 2021

### Bug Fixes
- Fixed a bug where the Intent Editor would experience a slowdown

## 4.15.0
**Released** November 18, 2021

### Features
#### Cognigy Insights: Show data for all Snapshots
This release adds a branch new filter option for Snapshots - customers will now be able to select "All" Snapshots in the global filters.

#### Cognigy Insights: Expert mode for Transcript Explorer
This release adds a so-called Expert Mode to the Transcript Explorer in Cognigy Insights. Similar to the Expert Mode in Cognigy.AI Interaction Panel, this mode shows additional information such as detected Slots and the classified Intent in addition to the actual transcript of conversations.

### Improvements
- Improved by adding a Tourist Guide Template for NLU language Japanese
- Improved by properly delivering Endpoint messages to socket clients if they are temporarily disconnected to improve stability in suboptimal networks. Note: The changes are only effective when configuring the “FEATURE_USE_SOCKETENDPOINT_EVENTBUFFER” flag.
- Update internal WebchatWidget to version v2.38.1

### Bug Fixes
- Fixed a bug related to authentication problems for OData v2.1 endpoint in Excel/PowerBI
- Fixed a bug where data specified as part of the Default Reply are not emitted
- Fixed a bug where the calendar in Insights, used to filter for custom timeframes, shows incorrect dates
- Fixed a bug related to timeout response errors occurring in Insights Transcript Explorer, Message Explorer and Step Explorer
- Fixed a bug related to incorrect time zone suffix and locale formatting
- Fixed a bug related to Live Agent (lite) mistakenly showing a large number of error messages
- Fixed a bug where long text outputs of Say or Question Nodes are displayed truncated in Microsoft Teams
- Fixed a bug where an infinite loop is triggered when a Flow with Parse Intents enabled and a “cIntent” input is used
- Fixed a bug where you are unable to edit any Nodes in the Flow Editor
- Fixed a bug related to a unusually high number of MongoDB connections
- Fixed a bug where Intents cannot be uploaded and models cannot be built while a large file with Intents is uploaded
- Fixed a bug where errors are mistakenly logged when cancelling an already cancelled task
- Fixed a bug where, after adding a new user under Access Control, a user cannot be added to an Agent as a member without reload
- Fixed a bug where, after uploading a package with a Flow, it is not possible to select the Flow in the Interaction Panel without reloading
- Fixed a bug related to regex patterns, defined in the Regex Slot Filler Node, not being recognized
- Fixed a bug related to dates not being recognized correctly when the Voice Gateway is used
- Fixed a bug where endpoint scroll bar blinks at certain zoom levels/screen resolutions
- Fixed a bug where the import of packages containing some old Flows fails
- Fixed a bug related to RPC call timeouts when CLI is used
- Fixed a bug related to incorrectly displayed transcripts in Transcript Explorer when Azure Bot Services is used as Endpoint
- Fixed a bug related to empty message bubbles rendered by the Webchat, when “sync data with facebook” option from the Webchat tab is used
- Fixed a bug where lines containing long words are not wrapped in the Logs view
- Fixed a bug where a “Unable to fetch flows” error message is mistakenly shown while large snapshots are restored
- Fixed a bug where you do not get consistent results, when a list of items is paginated using nextCursor
- Fixed a bug related to API requests and paginated data in the Cognigy Insights Message Explorer
- Fixed a bug in Cognigy Insights where the Step Explorer would show wrong uncollapsed steps
- Fixed a bug where Flow Node localizations would not be copied when using copy-paste
- Fixed a bug regarding timezone offsets in Cognigy Insights filters

## 4.14.1
**Released** November 9, 2021

### Bug Fixes
- Fixed a bug where the "inject" and "notify" RESTful API endpoint would not work


## 4.14.0
**Released** November 5, 2021

### Features
#### Timezones for Cognigy Insights
This release of Cognigy.AI introduces timezones for Cognigy Insights. Customers will be able to select their timezone in their user profile which will be used when generating reports and data.

#### Async output handling for Voice Gateway
This release of Cognigy.AI introduces asynchronous output handling for Cognigy Voice Gateway. Previously, outputs from Cognigy Flows would get buffered and send to Cognigy Voice Gateway once your Flows have been processed entirely. It was not possible to use concepts like "Sleep Nodes" or our inject- and notify-APIs. Customers can now activate asynchronous output handling in the Cognigy Voice Gateway Endpoint configuration form.

### Improvements
- Improved by adding a tooltip to the starting step in the Step Explorer
- Improved by adding a new setting to the Webchat Endpoint configuration to disable autocomplete in the input field

### Bug Fixes
- Fixed a bug where empty Intents without example sentences could not be downloaded
- Fixed a bug where Intents with default replies could not be uploaded properly
- Fixed a bug where data of existing Keyphrases are not overwritten when a Lexicon csv file is uploaded and the “overwrite” strategy is used
- Fixed a bug related to error text not being descriptive when white-labelling is enabled but a theme for Insights UI is not provided
- Fixed a bug related to pagination not working when chart/nodes API is called
- Fixed a bug where the incorrect text is stored in the detailed context for different Question Output Types
- Fixed a bug related to wrongly encoded translation responses from third-party translation providers
- Fixed a bug related to date ranges not stored in the Context when date questions are used
- Fixed a bug related to the Lexicon editor not resetting the page position when the filter field is used
- Fixed a bug related to Intents not being sorted in alphabetic order
- Fixed a bug related to messages getting stuck when Extensions use the Think API
- Fixed a bug where German time interval inputs are parsed in unexpected ways
- Fixed a bug regarding slotfillers and our DATE slot
- Fixed a style regression bug in the Intent training feedback tooltips
- Fixed a style regression bug in the Intent trained indicator section


## 4.13.1
**Released**: October 28, 2021

### Improvements
- Expose additional metrics for one of our microservices and further prepare our application to get monitored with our new monitoring solution we are currently working on
- Improve system stability by adding a maximum TTL for a message defining how long it can reside in the system


## 4.13.0
**Released:** October 28, 2021

### Features
#### Avaya CPaaS
This release of Cognigy.AI contains the new Avaya CPaaS endpoint which is an essential rewrite of the currently existing one. We have added many new capabilities and e.g. made TTS/STT language configurable.

#### Amazon Lex NLU Connector
This release of Cognigy.AI adds a new NLU Connector for Amazon Lex.

### Improvements
- Improved by adding additional filters to the Transcript Explorer allowing to filter transcripts by message count and rating
- Improved by adding the ability to set the starting and ending step from the context menu of a step in the Step Explorer
- Improved by allowing to select and copy text of messages in the Transcript Explorer
- Improved by appropriately rendering datepicker messages in the Transcript Explorer
- Improved by adding information about the required Cognigy version to use option resolvers and localization to the Extension tools documentation

### Bug Fixes
- Fixed a bug where the confirmation and disambiguation sentence are not translated when automatically translating an intent on the NLU tab
- Fixed a bug where an Agent does not disappear from the list of Agents after deleting it
- Fixed a bug related to the layout of the Member select dropdown
- Fixed a bug where the language and Intent dropdown menus automatically scroll to the top by mistake
- Fixed a bug where duplicate Synonyms within a Lexicon and duplicate Slots within a Keyphrase could be created by adding leading or trailing spaces
- Fixed a bug where training fails if an empty Lexicon is attached to a Flow
- Fixed a bug where opening a message in Message Explorer from the Transcript Explorer is broken
- Fixed a bug where intents with multiple localizations cannot be deleted
- Fixed a bug related to Intent reconfirmation not properly working after using an Execute Flow Node
- Fixed a bug related to opening large Lexicons
- Fixed a bug where the Transcript Explorer crashes on certain messages
- Fixed a bug where search functionality in Transcript Explorer does not work when a Snapshot is selected
- Fixed a bug where “Switchboard pass” events from the “Sunshine Conversations” Endpoint are not handled properly
- Fixed a bug related to incorrect filtering of found keyphrases based on attached flows, when service-nlp-matcher is activated


## 4.12.0
**Released:** October 11, 2021

### Features
#### Localization for Extensions
Added option to allow extension creators to provide localized display values in Node descriptor

#### Management-UI authentication
Added support for multiple credential pairs for the Cognigy Management UI

#### Non-conversational Endpoint
This release of Cognigy.AI adds a non-conversational Endpoint. The feature needs to be enabled using an additional environment variable. It allows customers to create an Endpoint that will not process inputs using NLU enginers. The Endpoint can e.g. be used if Cognigy.AI is being used as a process orchestration tool

### Improvements
- Improved by adding the Node type to the error logs when Node execution fails
- Improved by merging the extension tools basic documentation with the option resolvers and localization documentation into one document

### Bug Fixes
- Fixed a bug where Webhook Endpoint Inject calls cannot be made without errors
- Fixed a bug where the FROM variable is not used in password reset request emails
- Fixed a bug where a Say node with an empty string breaks the Insights UI
- Fixed a bug where Flow Node comments could be accessed without the necessary read permissions
- Fixed a bug where the “Select Flow” and “Select Node” fields in Go To and Execute Flow Nodes are editable for users without the necessary permissions
- Fixed accessibility issues in Marketplace
- Fixed a bug where Lexicon Slots are not deleted once they are no longer used in Lexicons
- Fixed a bug where the Transcript Explorer crashed upon opening a certain chat log
- Fixed a bug where ranked bar charts erroneously display the least frequent values instead of most frequent values in Insights
- Fixed a bug related to breaking Code Nodes for old Endpoints having no translation settings set
- Fixed a bug where the “Top Goals” tile in Insights is displayed inappropriately for Flows with more than 10 goals
- Fixed a bug where Flows crash when Say Nodes succeed Reset Context Nodes
- Fixed a bug where output transformers do not process all messages
- Fixed a bug related to Intent reconfirmation in Question Nodes
- Fixed a bug where the removal of a custom Contact Profile schema field does not lead to the deletion of the actual data for the field in allContact Profiles
- Fixed a bug where postback buttons send title instead of payload for Sunshine Conversations
- Fixed a bug where incorrect Flow Names would be displayed in the Endpoints Flow dropdown
- Fixed a bug where a "Code Transpile Error" would pop up when enabling "enableUnreadMessageTitleIndicator" in the Webchat Endpoint
- Fixed a bug where the "Jump to Flow" button would be disabled immediately after restoring a Snapshot
- Fixed a bug where creating a Package would block one of our microservices


## 4.11.0
**Released:** September 20, 2021

### Features
#### Custom theme for Cognigy Insights
Added the ability to apply a custom theme as well as white labeling to the Cognigy Insights user interface

#### Custom configuration for WebchatWidget
Added a JSON field to Webchat Endpoint Editor to configure additional settings not available in the GUI

### Improvements
- Added tooltips to the items in the top toolbar
- Added the ability to sort the conversation list of Contact Profiles
- Refined the documentation of the extension tools

### Bug Fixes
- Fixed a bug where HTTP Request Nodes could not be saved after making changes to a URL field
- Fixed a bug where user is unable to switch Flows when Node sidebar is open
- Fixed a bug related to inaccurate page titles in “Packaging” section
- Fixed a bug where injectContext API causes a flood of error logs
- Fixed a bug where an error notification is inadvertently displayed when editing a connection via the Node Editor
- Fixed a bug where the secondary action menu to edit a Connection is invisible
- Fixed a bug where the use of certain regular expressions to filter Contact Profiles leads to a crash
- Fixed a bug where an index in service-resources is missing, limiting the overall MongoDB query performance
- Fixed a bug where case sensitivity in Rules of Intents is mistakenly ignored
- Fixed a bug related to an application freeze when URLs are pasted into Say Nodes of type Image
- Fixed a bug where an error message is mistakenly shown when an Intent is selected on the NLU tab and the Flow is switched


## 4.10.1
**Released:** September 15, 2021

This release activates "Cognigy Insights" by default - Cognigy.AI v4.10.0 did not do that. An opt-out is available for customers that do not want to use Cognigy Insights right now. This opt-out will be removed with one of the next releases.


## 4.10.0

**Released:** September 14, 2021

### Features
#### Cognigy Insights
This release of Cognigy.AI makes Cognigy Insights the default tool for inbuilt analytics.
Insights is a totally new way to explore usage information about our AI Agents.
Take a look at our product website for Insights:
https://www.cognigy.com/products/overview

#### Machine translation for enhanced agent building
This release of Cognigy.AI allows to select an external translation provider in the settings menu.

#### Cognigy Marketplace
This release of Cognigy.AI contains the ability to configure a marketplace from which additional Cognigy Extensions can be installed on the Extensions page

### Improvements
- Updated integrated WebchatWidget to version 2.35.0 which improves performance
- Improved by adding new snippet called “Answer” which will have the same value as “Last Question Result”
- Improved by adding the functionality to record "unauthorized" events in our audit-trail for all operations through our RESTful API
- Added deep linking to the Chart which allows user to open the sidebar and scrolls the viewport to the node
- Updated Chatwoot API to version 1.19.0
- Improved behavior where user can switch Flows by staying in same tab in NLU
- Improved Endpoint settings menu by adding new sections
- Improved exact matching by using exact match comparison string

### Bug Fixes
- Fixed an issue where Adaptive Cards preview editor is missing from say node
- Fixed a bug where the Lists are not saving in the default replies from intents
- Fixed a bug where Cognigy AI seems to do not recognize some lexicon slots when the letter case doesn't match
- Fixed an issue where Project members panel in the dashboard takes time to update on project creation or change
- Fixed accessibility issue in the newly added filters in Intent Trainer
- Fixed an issue where “Attached Lexicon” change includes “Attached Flows” in request
- Fixed a bug where DataOnly input causes score timeout with case-sensitive intent mapping disabled
- Fixed a layout issue in the Contact Profile viewer
- Fixed a bug where localized Intents do not trigger "NLU is out of date" alert
- Fixed file system permission issues for some of our NLU services when running Cognigy.AI on top of restricted OpenShift platforms
- Fixed a bug that prevents customers from disabling the RSS feed in the UI
- Fixed a bug where only one slot is found for keyphrases with multiple slots if service-matcher is being utilized

## 4.9.1
**Released:** August 27, 2021

### Bug Fixes
- Fixed a bug to resolve system slots correctly in optional questions in an executed flow

## 4.9.0
**Released:** August 24, 2021

### Features
#### Extension performance
This release uplifts the Extension execution performance massively. We have implemented a new caching concept that will
cache Extensions in the local container file system. Extensions will be preferably loaded from this local cache instead of the remote storage location

#### Webchat embed code
This release of Cognigy.AI adds an embed code for our WebchatWidget onto the Endpoint configuration page for Webchats

#### Jump to Flow functionality
This release of Cognigy.AI adds a "Jump to Flow" button in our Endpoint editor. This allows users to quickly access Flows their Endpoints point to

#### Dynamic Fields in Flow Nodes
This release of Cognigy.AI adds new functionality that allows our customers to use a new dynamic select field as a new field type in their Extensions. The feature can be used to dynamically fetch the content of a select field through e.g. an external API call

### Improvements
- Updated RSS feed link in index dashboard and updated hyperlink in “Go to blog” button in the news section
- Improved the autofocus which allows user to use enter key to go to the next NLU example sentence field
- Improved Flow Editor by adding a warning which will be displayed when Flows have more than 100 Flow nodes
- Improved the Intent upload functionality by skipping the import options dialog when the list of Intents is empty
- Improved our MS Teams channel integration by adding the functionality to display the title of a postback button when clicked

### Bug Fixes
- Fixed a bug where outputs from Flows could arrive in the wrong order
- Fixed a bug where the scroll bar in Intent Trainer list flickers under some conditions
- Fixed a bug in Intent Editor when a user adds a new synonym, the drop-down shows “no-options” while it takes several minutes to load the information
- Fixed a bug where webchat plugins without options do not render in Interaction Panel
- Fixed a bug where analytics records cannot be deleted
- Fixed a bug where uploading an encrypted zip archive to package crashes service resources
- Fixed a bug where the clear button for selecting a Cognigy Connection would not clear the field
- Fixed a bug where certain keyphrases would not be detected properly
- Fixed a bug where the steps for Start- and disabled Flow Nodes would not be tracked
- Fixed an issue where the label of an extension is not used in the extension details view
- Fixed a bug where a random text would appear after uploading a Package


## 4.8.1
**Released:** August 9, 2021

### Bug Fixes
- Fixed a bug where uploading a Package would create a situation where extensions would no longer load properly on the extensions page


## 4.8.0
**Released:** August 5, 2021

### Features
#### Intent Trainer filters
This release of Cognigy.AI adds a set of filters to our Intent Trainer to simplify the workflow of reviewing records

#### Descriptive API-Keys
More customers than ever are using our API-key feature in the product to automate certain aspects of their day-to-day developer life. In order to make it easier to distinguish different API keys, we have added the ability to name your API-keys

#### Hotkey for expert mode
Developers can use the so-called expert mode in the Interaction Panel to get more verbose output about certain events (e.g. when an Intent has been found) when talking to their Agents. This release adds the ability to use ++ctrl+shift+f++ to toggle the expert mode without visiting the settings panel

#### Embeddable extensions
This release of Cognigy.AI adds the ability for on-premises customers to embed certain extensions into the baseline of Cognigy.AI

### Improvements
- Added the ability to select a Locale Reference ID in a couple of nodes where this has not been possible before
- Improved the order of fields for the Say-Node
- Updated integrated WebchatWidget to version v2.31.0

### Bug Fixes
- Fixed OpenAPI documentation that contains the word “Cognigy” which is not white-labeled
- Fixed a bug where the re-prompt message in Question node does not allow new lines
- Fixed a bug where the user is unable to delete their own user account
- Fixed a bug in side panel where Lexicons are wrongly highlighted
- Fixed a bug where the gallery for the WebchatWidget fails to display anything if the gallery title is blank
- Fixed a bug where the Intent Trainer layout would not properly be displayed in Edge 18
- Fixed a bug by removing the role Snapshots from the product, as it is not assigning correct rights
- Fixed an issue where case-sensitive Intent mapping would not work properly
- Fixed a bug where the user is unable to restore snapshot with many Extensions
- Fixed a bug where OData could not filter for null values
- Fixed a bug where German dates ending with a dot “20.10.2020.” would be ignored
- Fixed a bug where System Slots contain the sum of ordinal and number instead of separate values


## 4.7.1
**Released:** July 26, 2021

### Bug Fixes
- Fixed a bug where the NLU-Connector list would not properly render all items


## 4.7.0
**Released:** July 22, 2021

### Features
#### Hiding Endpoints
This release adds the possibility to hide integrated Endpoints (channel types) by defining an additional blacklist of technical Endpoint names. This can be used by our on-premises customers to hide certain Endpoints they don't want to offer to their customers.

#### Alternative Playbook creation
This release adds the ability to create playbooks from the transcript stored in Contact Profiles.

#### Dependencies in Packages
This release adds automatic dependency recognition when you select the resources you want to include in a Package. For all the resources you selected to Export, we will show all the dependencies and allow you to choose which dependencies you still want in the Package

### Improvements
- Improved the order of the fields in the quick reply overlay form
- Changed the order of zoom controls in the Flow Editor
- Visual changes to the upload Snapshot button
- Changed labels for data management and NLU language

### Bug Fixes
- Fixed a bug where Lexicon Slots without reference could not be deleted and would show up as still existing Slot annotations in omnibox
- Fixed a bug where analytics conversations would not being stored for Sunshine conversations
- Fixed a bug where a fallback text disappears when other properties are being edited in default channel forms
- Fixed a bug where our UI would crash in the contact conversation view
- Fixed an issue where buffered output is not sent when output transformer returns null
- Fixed a bug where the last edited username would be set to “00000...” after a package has been created and fixed a bug where the entry point of Endpoint and Flow properties would not get reset after package import
- Fixed an issue of inconsistent Intent recognition when “full-parse both system & Lexicon slots implicitly” is set in the Flow settings
- Removed unnecessary error notifications when user opens deleted flow
- Fixed a visual bug in a Case Node label
- Fixed a bug where the JSON field is not being updated for MS Teams output type
- Fixed access rights for “restore snapshot” action
- Fixed a bug where Intents would not save properly
- Fixed a bug where deleting Extensions would sometimes not work properly
- Fixed a bug where quick replies could not be re-ordered in our Say-Node
- Fixed a bug where buttons for the RingCentralEngange channel would use the wrong payload

## 4.6.0
**Released:** July 7, 2021

### Features
#### Platform performance
Changed caching of core object used while processing user inputs - this leads to a huge performance improvement of the platform.

### Improvements
- Improved message styles in Webchat
- Updated integrated WebchatWidget and some WebchatWidget plugins to the latest version v2.30.1
- Added “Voice Gateway” message previews to Interaction Panel
- Removed auto-increment functionality for switch- (lookup) and if-node in the Flow Editor
- Added an option to train Intents from the Flow list and Flow editor
- Improved the way how our nlp services cache certain data which will improve their memory pressure

### Bug Fixes
- Fixed a bug where the save button is enabled in our node editor even if nothing has been changed
- Fixed a bug where our  UI would crash when accessing the “Access control” page
- Fixed a bug where profile fields of type “yes/no” could not be edited in the contact profiles
- Fixed a bug where time intervals would be parsed in a wrong way for en-GB Flows
- Fixed a bug where the members list would scroll up when adding a new member
- Fixed a problem in our Microsoft Teams integration where the “default”-channel in our Say-Node would not get properly converted to the payload Microsoft Teams expects – this would result in an error being shown
- Fixed a bug where “SO” would be recognized as “Sunday” for German Flows


## 4.5.1
**Released:** July 1, 2021

### Bug Fixes
- Fixed a bug where certain messages could crash one of our analytics services which lead to user transcripts no longer being stored
- Fixed a bug where the Cognigy Live Agent conversation history would be incomplete
- Fixed a bug where duplicate input-ids could be generated by the system and would break some analytics reports when using our OData interface
- Fixed a bug where training certain NLU languages would not work
- Fixed a bug where our user interface would not properly work in Microsoft Edge


## 4.5.0
**Released:** June 29, 2021

## Features
#### Cognigy Packages
With Cognigy packages,
we have introduced the ability to export/import individual resources in order to move them between AI Agents.
With this release, we have added the ability for you to select multiple resources when exporting a package.
We have also added the ability to resolve conflicts
and pick resolution strategies when importing those packages once again.

### Improvements
- Allows the user to open URL in a new or existing browser tab in our WebchatWidget
- Changed contents of our “Get Started” cards on our dashboards
- Added support for new structured-content types for the Userlike Unidifed Messaging integration
- Improve Intent training performance by featurizing sentences on a separate thread
- Improve stability of our NLU services

### Bug Fixes
- Fixed a bug where certain metadata for Endpoints would be cached forever which would blow up the storage space required in one of our caches
- Fixed a bug where Question Nodes would get repeated
- Fixed a bug where Context could not be used in Code Nodes
- Fixed a bug where Default replies could not access the Context
- Fixed a bug where training with implicit slot parsing failed when an example sentence has Keyphrase without Slot
- Fixed a bug where input.data would be undefined instead of an empty object during e.g. Rule-Intent evaluation
- Fixed a bug where an empty text (text input which only contains spaces) could break the Intent Trainer
- Fixed a bug where time input is not captured in Japanese System Slot
- Fixed a bug where our Intent exact-matcher would always return a null-Intent when a disabled Intent won
- Fixed a bug where default replies for Intents could not be triggered by using the cIntent capability
- Fixed a bug where certain Slots would still be detected even if they have been disabled
- Fixed a bug where training empty Intent collection would fail
- Fixed a bug where the wrong Flow name would be stored for Analytics Steps
- Fixed a bug where uploading a Package with Slot annotations in the Example Sentences of Intents would not work
- Fixed a bug where service-nlp-ner could be unstable

## 4.4.0
**Released:** June 10, 2021

### Features
#### Intent Trainer refresh
We have invested quite some time in refreshing the Cognigy.AI Intent Trainer in order to improve the UX and simplify handling review tasks for our customers. More specifically, we have added the following new features:
- endless-scrolling mode now helps our customers to simply scroll through all trainer records
- the UI won't let you change filters/sorting when un-submitted changes still exist
- customers can now dismiss unsubmitted changes altogether
- improved styling for the currently selected row
- improved translations for customers using our UI in a language different from English

#### New Twilio Voices
We have added new Twilio Voice options to our Twilio Endpoint(s).

#### Configurable CORS for Cognigy.AI endpoint
We have added the ability to configure CORS origins for the Cognigy.AI endpoint microservice. This allows our customers to additional protect their endpoints by only allowing certain browser clients to connect. The default behavior of allowing all origins ('*') has not been changed.

#### Question escalation to handover
We have now added the ability to escalate questions by creating handovers to real human agents.

### Improvements
- Huge performance improvements in our Intent Editor
- Upgraded internal WebchatWidget to v2.29.0
- Improve auto-completion in Code-Nodes
- Properly display error in Task Manager when a broken Cognigy Package has been uploaded
- Include Intent scores below the Intent threshold
- Clean up inconsistent colors for messages in the Interaction Panel
- Add health-endpoint to our OData microservice
- Add feature compatibility with Voice Gateway version 2.6

### Bug Fixes
- Fixed OpenAPI documentation for connections
- Fixed performance issue in Task-Manager menu when many tasks are present
- Fixed a bug where Default Replies and nodes could not be saved when they contain a '$'-sign in Microsoft adaptive cards
- Fixed a bug where changing Flow-Node descriptions would not work even if the user would have the appropriate role
- Fixed a bug where our handover functionality would not work when custom-channel names would be used for e.g. the Webchat
- Fixed a bug in the Flow-List context menu
- Fixed a bug where restoring a snapshot would break Extension icons
- Fixed issue where certain rich-media elements would not properly work for Teams/Bot Framework channels
- Fixed a bug where our create-user API would not accept a role for the user
- Fixed a bug where an attached Flow would not properly work in second level
- Fixed a bug where not all Lexicons would be displayed in the "attach Lexicon" section within the Flow Editor (NLU)
- Fixed a bug where certain numbers would get parsed as a money-slot instead of a number, Cognigy NLU
- Fixed a bug where our NLU system would not detect a money slot when mixed with a date slot in the same sentence
- Fixed a bug in the Flow-Editor where long previews on nodes would not use ellipsis
- Fixed a bug where wrong data would be displayed on various Cognigy.AI analytics dashboards
- Fixed a bug where our Datepicker would miss non-us English locale options
- Fixed a bug where loading deleted resources in our UI would lead to a stack of error notifications
- Fixed a bug where changing an Intents name would mark the Intents as "retrain required"
- Fixed a bug where the updateProfile-Node would not work properly when used on a custom profile-schema field of type "complex"
- Fixed a bug where our httpRequest-Node would not use the insecureSSL setting when OAuth authentication is used
- Fixed a bug where our intent mapper results would have an inconsistent structure (part of Input Object)
- Fixed a bug where adaptive cards would not save
- Fixed a bug where our NLU system would detect a DATE slot when using "eines", "einem" or "einen" in German
- Fixed a bug where the Cognigy "Blind mode" would not mask bot outputs

## 4.3.1
**Released:** May 31, 2021

### Bug Fixes
- Fixed instability in our service-nlp-ner microservice where the service could crash in a loop
- Fixed an issue where VG Endpoints would not get a response when using our Think-Node

## 4.3.0
**Released:** May 18, 2021

### Features
#### Packages
Packages allow our customers to export individual resources like Flows or Lexicons in order to share those assets with other teams. Packages automatically contain their direct dependencies and can be shared as a portable zip archive once downloaded. Customers can also upload packages and get merge resolution steps displayed.

#### Chatwoot integration
Cognigy has integrated "Chatwoot" as an additional handover provider that can be used by our customers to connect their users with real agents. Chatwoot is an open-source solution and free to use.

#### Cognigy Functions
Cognigy Functions are a big leap forward when it comes to running asynchronous code in the background. Functions allow you to schedule long-running code (e.g. 10 minutes!) in the background. Functions can be triggered and started via our RESTful API or from within your Flows. Your code in Functions will be executed in a save containment and can inject results back into your user's conversational sessions. Check the Cognigy documentation for more info on Functions.

#### OpenID Connect
Cognigy.AI already supports SSO (Single Sign-On) through the usage of our SAML 2.0 integration. With this release, we have now added support for OpenID Connect. Customers can now select which type of strategy they want to use in order to implement their corporate SSO strategy.

#### Email notification Node
Customers can now use a "much simpler to configure" way to send email notifications. The new Flow Node will use the system-wide configured SMTP server for outgoing emails. The content of emails sent using this Node will be embedded into a template indicating the origin of the email. The template can be customized by or OEM customers.

#### Warnings for NLU issues
The product will now show warning notifications when the system detects issues in Intent-rules, Intent-Conditions as well as generic issues while executing NLU on user inputs. Warnings will only be generated and forwarded to our user interface when the Interaction Panel is used during testing.

#### Copy Agent ID
We have added the ability to copy the Agent ID to the context menu on the Index Dashboard in which you can select one of your Agents.

### Improvements
- Revised and optimized the core messaging pattern which will be used to route and process end-user messages in order to heavily increase the maximum throughput of our platform - performance increase by a factor of up to 2!
- Revised and improved caching strategy of core components in order to increase the performance of the platform
- Added autofocus for the first example sentence when creating a new Intent
- Upgraded internal WebchatWidget to v2.28.0
- Improved UX in the Flow Node edit sidebar as we have added real-time validation for the new analytics label field
- Improved extension installation-time
- Added proper Japanese localizations for the endpoint-selection step in the agent creation wizard
- Added a display name to Extensions which will be used instead of the package name
- Make sure that the InputObject will also get updated when an error occurred - this helps with debugging issues in Flows
- Added the ability to install Extensions via download

### Bug Fixes
- Fixed a bug where the delete-functionality in the Intent Trainer would not properly work
- Fixed a bug where one of our vital microservices (service-ai) could crash
- Fixed a stability issue in our service-nlp-ner microservice

## 4.2.5
**Released:** May 7, 2021

### Bug Fixes
- Fixed issue regarding project-manager

## 4.2.4

**Released:** May 7, 2021

### Bug Fixes
- Fixed a bug where certain Arabic inputs into an English Flow could crash one of our NLU services

## 4.2.3
**Released:** May 5, 2021

### Bug Fixes
- Fixed a bug where Flow nodes with children could lead to problems in one of our microservices
- Fixed a request timeout issue in our Sunshine-Conversations Endpoint

## 4.2.2
**Released:** April 29, 2021

### Bug Fixes
- Fixed a bug in our Slot-Fillers frontend where the save-button could not be used in certain situations
- Fixed a bug where our OpenAPI-viewer could not be used when CORS-origins were configured
- Fixed an API compatibility issue in our Sunshine Conversations V2 endpoint
- Fixed a stability issue in the microservices that executes Cognigy Extensions
- Fixed a bug where the NLUConnector selection in our Interaction Panel would not properly persist
- Fixed a bug regarding user feedback when deleting an AI Agent
- Fixed a bug regarding Optional Questions and their order when multiple will be used
- Fixed a bug while importing Intents through a file upload
- Fixed a stability issue when deleting Extensions where certain artifacts would not get deleted properly
- Fixed a bug related to date parsing
- Fixed a bug where the permissions derived from the "project admin" role would not be sufficient for most operations in AI Agents
- Fixed a stability issue in our NLU microservices regarding their health checks
- Fixed a bug in our voice-gateway integration where certain calls would get dropped
- Fixed a bug where certain emails could not be used as answers in Question Nodes
- Fixed a bug in our Alexa Form Editor in our Say Node
- Fixed a bug where our Lookup Node would always require an additional "Save"
- Fixed incorrect mapping of Arabic Lexicons
- Fixed a bug where our user interface would not handle network errors properly

## 4.2.1
**Released:** April 20, 2021

### Bug Fixes
- Fixed a bug where Intents could not be updated if the new analytics label would contain certain special characters
- Fixed a bug where Cognigy.AI would find the wrong Intent when our cIntent feature is used in conjunction with executeFlow

## 4.2.0
**Released:** April 14, 2021

### Features
#### Email Node improvements
We have added the ability to select well-known SMTP providers in our "send email" Flow-Node. This helps our customers to configure their target SMTP servers more easily when using one of these well-known services for sending emails. We have also added new functionality in the form of attachments as well as the ability to put contacts on CC.

#### Think Node enhancements
We have added the ability to "think" Intents within our Think Flow-Node. This option will exist next to the already existent "text" option. It helps developers to more easily trigger an Intent directly.

#### Analytics Steps for nodes and Intents
One of our larger missions for 2021 is various analytics enhancements. Adding analytics steps is one of the first building blocks on this journey. It allows our customers to define analytics labels for nodes and Intents. All of our Question-Nodes will automatically get those analytics labels assigned. The labels can be used to understand when customers drop off within a conversation. We have also enhanced our OData interface to expose those data points.

#### Contact Profile Explorer enhancements
We have added the ability to filter inactive Contact Profiles in the Contact Profile Explorer. This will help our customers to more easily search through their Contact Profiles while focusing only on the active ones.

### Improvements
- The downloadable package of a Snapshot will now only be downloadable for a limited time

### Bug Fixes
- Fixed that clicking on another Node while editing a Node would close the edit menu without a warning message
- Fixed that the default category tags would show up in search in the create Node menu
- Changed the user ID for the Dialogflow Endpoint when using the chat in the Dialogflow console
- Fixed that empty default replies would still be triggered
- Fixed that "activeQuestion" was not available in the input object for rule intents
- Fixed a bug where a basic user without any Agents assigned would see a blank page
- Fixed that Attached Flows would not be triggered when using Execute Flow
- Fixed a bug related to Arabic inputs
- Fixed that System Slots were still detected when they were turned off in the Flow Settings
- Fixed a bug that a user with the flowNodeComments and flowNodeDescription roles could not edit comments and labels of a Node
- Fixed a bug in the annotations when exporting Intents
- Fixed that data only messages would not be filtered in the Reject Intent
- Fixed a performance-critical bug in one of our analytics services
- Fixed a bug where extremely long input messages could break Intent scoring

## 4.1.6
**Released:** March 31, 2021

### Improvements
- added support for the Userlike-Unified-Messaging API in our Userlike integration
- added a tiny rich-text editor to our send email Nodes content field
- added the ability to bulk-create Intent Localizations
- added tooltips to our handover- and httpRequest-Flow Nodes in order to better explain the individual properties
- added the ability for our on-premises customers to "trust" the code within an Extensions in order to execute them in a less secure, but highly performant way
- product alignment with voice-gateway v2.4 features
- improve NLU training stability by adjusting the TTL for Training Jobs and adjust the concept of how Training Jobs will time out
- improve UX by removing the "Delete all Intents" functionality from the Intent Editor when a non-primary Locale is selected
- increase the size of drop zones when dragging Flow Nodes in the Flow Editor
- improve error message when a Lexicon with duplicate data was uploaded

### Bug Fixes
- fixed a bug in the Date-Picker so our customers can use named-dates such as "tomorrow"
- fixed a bug in our OpenAPI specification for the Import-Lexicon API
- fixed a bug where the Go To Flow Node auto-selects "Start"-Node each time the Node Edit Panel will be visited
- fixed a problem in our sidebar where e.g. the build menu sits
- fixed a bug where the main/attached-Flow priority setting was broken

## 4.1.5
**Released:** March 22, 2021

### Improvements
- improve Intent-Training performance when States and Intent-Conditions are used
- various UX-improvements related to the user interface for creating, selecting, and editing Connections
- added the ability to create Case-Nodes to Lookup-Nodes with a single click
- improved the Agent-Creation-Wizard by adding descriptions to all endpoints, reordered the Endpoints in the channel-selection step
- added the ability to make a Flow-Node an entry point by using the context menu (right-click on a Node)
- improve UX in our Endpoint-Editor for the Cognigy WebchatWidget by separating the actual WebchatWidget configuration from the WebchatWidget demo-webpage configuration
- added the ability to use CognigyScript in Intent confirmation sentences
- updated internal dependencies of our NLU services in order to support certain DNS schemes when e.g. using MongoDB Atlas for a Cognigy.AI installation

### Bug Fixes
- fixed a bug in our user interface where context-menus would sometimes jump
- fixes a small visual issue in language-select dropdowns in certain Channel-Endpoints
- fixed a bug where our Intent-Feedback report would not work for non-primary Locales
- fixed a bug where enabling/disabling Intents would not trigger the "training required" indicator in our user interface
- fixed a bug where Webhook-Endpoints would not properly work
- fixed a bug where nodes could be appended to the End-Node using our copy&paste functionality
- fixed a bug where Intent-Training would not succeed for larger training-sets as an internal mechanism would time out

## 4.1.4
**Released:** March 8, 2021

### Improvements
- added the ability to disable implicit Slot parsing for System- and Lexicon Slots
- added the ability to use nested conditions in Flow node fields
- added the ability to create a "super-API-key" for our on-premises customers in order to use our RESTful API without project-wide restrictions
- improved various sections in our RESTful API documentation (OpenAPI spec)
- added the new validation concepts which we have recently introduced into Question Nodes for Slot Fillers as well
- improved tooltips and wording of such in various locations within our user interface
- update our integrated WebchatWidget to version 2.25.2 which brings in multiple improvements; check the changelog in the WebchatWidget GitHub repository for more details
- improved the look and feel of various selects and autocomplete-fields and make them more consistent
- improved our documentation for applying a custom theme to the Cognigy.AI user interface

### Bug Fixes
- Fixed a bug where whitespaces at the end of example sentences with annotated slots would break our NLU
- Fixed a bug where certain keys would not be displayed for the contact profile within the Interaction Panel
- Fixed a bug where creating Playbooks from within the Interaction Panel would have an incorrect name
- Fixed a bug where the context menu could jump to the top left corner on list views
- Fixed a bug where established connections when using our MongoDB Flow nodes would not get properly closed
- Fixed a bug where errors while un-assigning a project would not be properly displayed in our user interface
- Fixed a bug where merging Contact Profiles would not properly work for default Profile fields
- Fixed a bug related to Default Replies when using negative confirmation
- Fixed a bug where only users with the global "admin" role could perform a read operation on Contact Profiles
- Fixed a bug where only users with the global "admin" role could perform index operations on various resources like Flows
- Fixed a bug related to Optional Questions and entry points
- Fixed a bug where "stopping" Flow nodes would show a visual gap behind them
- Fixed a bug in our NLU pipeline where our Money Slot would not properly work
- Fixed a bug in our Management UI where users created by the Management UI would not have proper meta-data
- Fixed a bug where the "styling" attributes would have no effect on certain Flow nodes (e.g. Case nodes)
- Fixed a bug where the collapse/un-collapse button would not be displayed for Flow nodes that are disabled
- Fixed a bug where neither CognigyScript nor Localization would work for confirmation sentences in Intents
- Fixed a bug where Rules within Intents could not contain special characters

## 4.1.3
**Released:** February 18, 2021

### Improvements
- improved our question-nodes by adding the ability to define exit-conditions
- improved the reliability of parallel intent training jobs
- improved the ability for white-labeling by exchanging the default messages for our endpoint- and API-services
- add full TLS/SSL support for Redis and the ability to use fully-managed service for Redis
- improve various selects (e.g. flow select, node select) and add an option to also provide ids manually
- improved various file-select menus and only allow files of correct file-types
- improved Typescript typings in Code-node
- improved German translations in our user interface
- expose the real client IP in the Cognigy Input Object

### Bug Fixes
- Fixed a bug in our voice-gateway endpoint where the userId was incorrect for outbound calls
- Fixed a bug where a Go To Node would not execute all nodes that follow the node that you jump to in certain conditions
- Fixed a bug where tasks would not be cancelable for non-admin users
- Fixed a bug related to old projects and attached Flows
- Fixed an issue and bring back real-time analytics tiles
- Fixed a bug where the incorrect intent would be used when using a Go To node
- Fixed a bug where the create-agent journey step would only get completed when using the create function, not the creation wizard

## 4.1.2
**Released:** February 8, 2021

### Improvements
- Added the Avaya CPAAS endpoint
- Improved the capability of our snapshotting feature and improved support for large assets (e.g. lexicons with > 70.000 entries)
- Improved user experience in the Flow Editor by adding a suffix when creating e.g. two Say-Nodes
- Update our integrated WebchatWidget to version 2.25.1 which brings in multiple improvements. Consult the changelog in the WebchatWidget GitHub repository
- Added snapshot description as a tooltip when hovering the snapshots in the list view
- Improved our pre-defined tokens and adopted them to use the newer syntax for input, context & profile
- Added support to reparse Google Dialogflow slots
- Added support to reparse system slots for Amazon Alexa
- Improved Typescript typings for our @cognigy/extension-tools package (version 0.11.0 on NPM)
- Improved the support for white-labeling our product by adding support to exchange the favicon and the content displayed in the "news" section on our dashboards
- Increased the limit of fields a single section can have in Flow Nodes

### Bug Fixes
- Fixed a bug where attached Flows would not use their own settings, but the settings from the Flow they are attached to
- Fixed a bug where the error-highlighting for nodes was not properly displayed
- Fixed a bug where our Interaction Panel would crash when using Playbooks
- Fixed a bug where selecting our holidays-skill in the agent creation wizard would result in an error
- Fixed a bug where our inject API would not work for real-time/socket sessions after reconnects
- Fixed a security-related issue regarding role-management
- Fixed a bug for Facebook Messenger where an empty default action web-URL would return an error
- Fixed various issues related to our "list"-type in the default-tab of the Say-Node
- Fixed a bug where "disable conversation" and our "blind mode" would not work properly
- Fixed a bug where our Flow Editor would crash
- Fixed a bug where one of our analytics services (`service-analytics-conversations`) could crash under some circumstances

## 4.1.1
**Released:** January 22, 2021

### Improvements
- Improved the performance of the Flow Editor for large Flows
- Added tooltips to the Intent form
- Improved the workflow for creating multiple new users
- Added colors to node comments
- Improved displayed content for small screens
- Added a new Trigger Intent button type to the Say Node
- Added a warning to Endpoints that have no Flow selected
- Added the ability to upload Extensions with dependencies (node_modules)
- Added a Log-Message Node
- Added an Overwrite-Analytics Node
- Add support for using self-signed SSL/TLS certificates with our httpRequest node
- Add support to see HTTP response headers when using our httpRequest node

### Bug Fixes
- Fixed a bug where the plus button for creating case nodes was visible in read-only mode
- Fixed a bug where the Lexicon page count would be incorrect when changing the number of keyphrases to show
- Fixed a bug where duplicate Handover nodes would appear in the Create Node Menu
- Fixed a bug where the STT/TTS language of the interaction panel was always English
- Fixed a bug where you could not use _cognigy directly in outputs from Code Nodes
- Fixed a bug where the enforced password policy in the management-ui was not working
- Fixed a bug where several text fields in nodes did not support multiline input
- Fixed a bug where dragging nested intents would generate wrong previews
- Fixed a security vulnerability in our Lexicon editor regarding keyphrases
- Fixed a bug where the entry point markers would be displayed for manually set entry point nodes
- Fixed a bug where a "Forbidden Error" would be displayed briefly after creating a new Agent
- Fixed a bug where the date picker fields in the edit Node menu would overflow
- Fixed a bug where "Continue Execution after Default Reply" setting would not work in executeFlow
- Fixed a bug in Alexa slot reparsing
- Fixed a bug with legacy any-slots
- Fixed a bug where the UI could crash when switching Flows with the node editor menu open
- Fixed a bug where the size of Snapshots would increase
- Fixed a bug in conditions with broken left side operators in e.g. If-Nodes
- Fixed a bug where Slot annotations in Intents were not included in the intent download
- Fixed a layout issue in our Interaction Panel for the Apple Safari web-browser
- Fixed a bug in our OData service where the service would not start
- Reduced the length of a token related the Single Sign On process
- Fixed a bug where an NLU-transformer could crash one of our system components
- Fixed a bug where deleting a Flow could improperly update endpoints using that Flow
- Fixed a bug related to data-validation and endpoint-transformers for our REST endpoint

## 4.1.0
**Released:** December 23, 2020

### Features

#### Cognigy Live Agent (lite)
Cognigy Live Agent (lite) is here! The Cognigy Live Agent replaces the old Cognigy Livechat in Cognigy.AI version 4. Live Agent comes as a more de-coupled product and will be extended in the future.

#### Quick NLU training
We have introduced a quicker way for you to train your Intents. If users do not use states and conditions in their Intents, they can now use the new quick training method in order to train their Intents way faster. Users can still decide whether they want to go with the slower training approach which will take states and conditions into consideration.

#### Indian languages
These release of Cognigy.AI introduces support for the following new languages:

- Hindi
- Bengali
- Tamil

We are always happy to extend the capabilities of our product and would love to get feedback on the quality of the language support for these new languages.

#### WebchatWidget WCAG 2.0 Level A Compliance
We added full support for WCAG 2.0 Level A Compliance to our WebchatWidget. Release 2.24.0 of our WebchatWidget offers accessibility features we did not support, yet. We have also added the ability to specify the necessary alternative text for all sorts of rich-media elements our users can compose in the 'default' and 'webchat' Channels within our Say-Node editor.

Take a look at our release-page on GitHub:
https://github.com/Cognigy/WebchatWidget/releases/tag/v2.24.0

#### Additional Question Node Features
We have extended our Question-Nodes to make them more powerful. Cognigy.AI 4.1.0 adds features like `extra validation`, `optional re-prompt validation`, a `configurable forget threshold` as well as a new `type of question` for data inputs. We have also added the ability to specify an `optional result location` for the result of your questions.

### Improvements
- Add Intent- and Slot-parsing to our Go To Node
- Uploading intents in non-primary locales is now possible
- Improved Input-Transformers by allowing partial results
- Improve client-side validation on various fields (e.g. required, needs at least x characters, can't contain certain characters) in our user interface to improve user experience
- Improved performance while training Intents through composing data in batches
- Improved finding various slots when using NLU Connectors
- Adjust the scroll bar size when hovering scroll bars in order to improve the user experience
- Add a 'loading state' to our Lexicon Editor which will be displayed when loading larger Lexicons
- Allow users to hide the settings displayed on the Logs page
- Add an 'admin' indicator to project members who are global administrators
- Sort agents by their 'last changed' value
- Improvements in the first step of the creation wizard
- Improve the way how we display/render long Flow-Node names
- Improve the OpenAPI documentation for security-related REST API endpoints
- Removed unnecessary API calls when leaving resource list views
- Add product version number into the user menu so users don't need to log out to see the version number
- Adjust example regular expression displayed in Question-Nodes of type 'regex'
- Improve the position of our 'Help' button to make it more visible

### Bug Fixes
- Fixed a bug where the create-profile RESTful API would not work properly
- Fixed a bug where deleting and re-creating extensions would not invalidate a cache which would result in errors during Flow execution
- Fixed a problem where deleting a Snapshot or Locale could break the configuration of existing Endpoints which would reference these
- Fixed a layout-related problem for JSON and XML code editors
- Fixed a bug where the 'Login with Amazon' button on the Alexa-Endpoint would not work
- Fixed a permission-related problem with extensions
- Fixed a bug where Code-Nodes could not get copy/pasted within Flows
- Fixed Japanese translations in our user interface
- Fixed right-to-left selection in fields where customers can select CognigyScript
- Fixed a couple of small issues regarding our List view in the default Channel of our Say-Node
- Fixed a bug where URL-encoded properties could not be used in our Code-Node (e.g. %-sign)
- Fix spelling mistake in the Alexa channels editor
- Fixed a bug in our SSML-Editor related to an incorrect 'prosody' closing tag
- Fixed a bug where the callback URL configuration would be missing in our Webhook-Endpoint
- Fixed misleading error message when updating Lexicon Keyphrases in the Lexicon Editor
- Fixed a bug where comments would not be shown hon hexagonal nodes (e.g. our If-Node)
- Fixed a bug that would crash the Logs page
- Fixed a bug where the voice property in our Twilio-Endpoint would not get properly persisted
- Fixed a memory leak in our OData interface which leads to performance and stability issues
- Fixed a performance issue in the Lexicon Editor
- Fixed a bug where the internal IDs would not get properly replaced with the names of users on the Lexicons list view
- Fixed a bug where the name of an Agent would not get properly displayed after creating a new Agent
- Fixed a bug where the 'speech output' field for Google Actions was not required
- Fixed a bug where the more explicit names 'input', 'context' and 'profile' (instead of 'ci', 'cc' and 'cp') could not be used in Rule-Intents
- Fixed a bug where the Facebook Messenger converter was not being used for our Workplace Endpoint
- Fixed a bug related to date-parsing
- Fixed a bug where audio and video icons would not be centered in Say-Node previews
- Fixed a bug regarding Intent- and Lexicon-Uploads
- Fixed a bug in our REST API regarding pagination. This would lead to multiple API endpoints not returning the correct data
- Fixed a bug where the Journey icon was not theme-able

## 4.0.3
**Released:** December 1, 2020

### Improvements
- Introduce a new List-type for our Say-Node
- Add an automatic number-lookup which will provide meta-data (country, etc.) for Voice Gateway Endpoints
- Add new Tokens for exposing information about the caller (Voice Gateway)
- Improve our Task Manager and add more details to it
- Improve performance of Snapshots and decrease their size
- Add documentation for how to apply a custom theme to our User Interface (dedicated only)
- Improve labels for Watson NLU Connector
- Increase the allowed number of characters a Readme file can have within an Extension
- Improve the usage of our search box when pasting content
- Add a graphical inspector for the Conversation Counter to the management UI
- Improve the Flow selection UX while creating an Endpoint/editing an Endpoint
- Implement Voice Gateway Endpoint verification
- Removed duplicate library which provides type information in Code-Nodes and in Typescript-based fields in Nodes. This greatly decreases the size of our User Interface and improves initial page-load speed

### Bug Fixes
- Fix a bug where conversion from our Default-Tab in Say-Nodes would not work for Google Actions
- Fix a bug where fields with a custom schema could not get updated in Contact Profiles
- Fix a bug where the set/reset Context functionality in the Interaction Panel would not work
- Fix a bug where deleting an Extension would lead to Flows being broken that would use a Node from this Extension
- Fix a bug where we would not display an image preview for quick replies
- Fix a bug where long Flow names in the attached Flows section would overlap
- Fix a bug where text asserts and partial data/context matching would not work properly in Playbooks
- Fix a bug where Tokens would not have previews in quick replies
- Fix a bug where Tokens would not have a proper preview for our If-Node
- Fix a bug where a potential Gravatar icon would not be used in the menu
- Fix a bug where default replies would not work if an Intent will be specified in an NLU Transformer
- Fix a bug where the list view was broken in the Say-Node editor for our Webchat
- Fix a bug where users with +-sign in their email address could not log in
- Fix a bug where deleting a Flow would lead to broken attachments in e.g. other Flows
- Fix a bug where Single Sign-On login would not work when emails contain uppercase characters
- Fix a bug where Input Transformers could break our Inject-API
- Fix a bug where resources from another agent would be shown when switching agents

## 4.0.2

**Released:** November 12, 2020

### Improvements
- Improve our management-ui and add the ability to be able to change passwords for users
- Improve intra-service caching which leads to a big performance improvement of the overall platform
- Improve positioning of "send message" button in our Interaction Panel in the Edge 18 browser
- Publish revision 2 of our "Installation- and DevOps documentation"
- Improve Endpoint- and NLU-Connector select field
- Add missing translations keys and improve the translation of our User Interface
- Add conditions to Webchat- & Messenger button templates
- Add Flow selection dropdown to Flow Editor
- Improve feedback in our User Interface when customers upload Snapshots
- Improve styling of various select menus in our User Interface
- Add optional text/data for our GotTo-Node
- Add a localeSwitch-Node as well as an action that can be used in e.g. Code-Nodes
- Add the ability for users with the "admin" role to change passwords of other users in our User Interface
- Improve error handling when an NLU-service would crash while training Intents - the train tasks would now properly report an "error"
- Improve error messages in various edit/create dialogs - e.g. when creating a user, the User Interface will now display conflicts with the configured password policy
- Integrate Cognigy Voice Gateway Extension natively

### Bug Fixes
- Fix a bug which leads to inconsistencies in the task-managers list of running tasks
- Fix a bug where the "license has expired" notification on login would not get displayed
- Fix a bug which leads to our nodes look weird while they got dragged in the Flow-Editor on Chrome
- Fix cc/cp autocomplete in Code-Node editor
- Fix condition for "get started text" field for the Webchat endpoint
- Fix problem where the Dialogflow console could no longer be used to talk to a Dialogflow Cognigy Endpoint
- Fix a bug where the Interaction Panel would not get properly reset when changing the selected Snapshot
- Fix a bug where the system message (e.g. used for maintenance purpose) would not get properly displayed
- Fix a bug where long sentences with line breaks would get cut-off when pasted into a Cognigy-Script field
- Fix a bug where customers could not create a button of type "Phone Number" in the Messenger channel
- Fix a bug where roles would not get properly mapped when Single Sign On (SSO) is used
- Fix a bug where our Question-Nodes would not work when the "type" is set to "regex" and "store detailed results" was disabled
- Fix a bug where the platform would send hidden content of e.g. Say-Nodes to end-users/the WebChat widget
- Fix a bug where users with the `projectManager` role could not properly create projects
- Fix a bug in our NLU system where exact matching would not take precedence over slot-replaced matches
- Fix a bug where "slots" would not appear in analytics data produced by the system
- Fix a bug where the OAuth2 token-refresh of the platform could fail after system hibernate/suspend
- Fix a bug where attached Flows could no longer get sorted properly in our User Interface
- Fix a bug where large Snapshots got invalid when getting compressed
- Fix a bug where the multiple functionalities would not properly work in our Interaction Panel (context reset, reset state)

## 4.0.1
**Released:** October 22, 2020

### Improvements
- Improve styling of our create-button used within several places of our UI
- Improve styling for slots within example sentences in our FlowEditor
- Improve styling for our notifications in our UI
- Make sure "headers" are typed in Transformer code-boxes in the Endpoints
- Improve feedback when uploading an Extension
- Improve OpenAPI documentation for managing project members and remove non-exposed fields from documentation
- Increase FlowNode limit to 512 Nodes in a single Flow

### Bug Fixes
- Fix bug where deep object comparisons for playbook data- and context-asserts would not properly work
- Fix bug where the Intent feedback report would not be properly working when using attached Flows
- Fix compatibility issues with Microsoft Edge 18
- Fix issues where certain data would not get loaded in various places in our UI
- Fix year-limits for date parsing in our NLU sub-system
- Fix issue where CognigyScript parsing or Code-Node execution could break when legacy Node actions will be used
- Fix bug for SunshineConversation and RingCentralEngange Endpoints which was related to storing session information

## 4.0.0
**Released:** October 2, 2020

This is our ``latest`` major release. We changed a lot, fixed a lot of issues, and added many new features that make Cognigy.AI the most advanced conversational AI platform on the market. Feel free to explore our new documentation and sign up for your free product trial:
https://signup.cognigy.ai/

### Features
- Improved `NLU System` that was introduced in `3.0.3` for german language
- Improved `Cognigy.UIs` error handling so users do not reload the page if a component crashes
- Improved `actions.output` so the second parameter is `optional`
- Improved the way how the `endpoint` is handling connections - `websockets` and `fallback http polling` is possible now
- Changed the default value of the `keep alexa session open` to true
- Changed the default values for `stop after childFlow` in `question nodes`
- Changed `save buttons` to have more consistent placing in Cognigy.UI

### Bug Fixes
- Fixed a bug where the `system would not answer` sometimes
- Fixed a bug where we had no `confirmation screen` in the `intent editor`
- Fixed a bug in the `facebook preview` where `vertical images` would not get displayed the correct way
- Fixed a bug in the `webchat` where the `persistent menu` was broken
- Fixed a race-condition within the `endpoint` that sometimes would result in an `incorect order of messages`
- Fixed a bug in `realtime analytics`
- Fixed a bug where the `flow service` would throw timeouts
- Fixed a bug within the `connection editor` - the type of the previously selected ``connection`` would be used for new connections
- Fixed a bug where the `state` would not be shown in the `Interaction Panel` when displayed on the ``projects page``
- Fixed a bug that resulted in a `blank page` on an `empty gallery element` for Facebook
- Fixed a bug where the `UI element to create projects` was shown even if users with a certain role could not create projects
- Fixed a bug where the `vertical image` within an `alexa card` had a broken preview within the `Cognigy.UI`
- Fixed a race-condition in the `Flow Editor` that resulted in a `stack of errors` if the page was reloaded in some circumstanceshttps://dash.readme.com/project/cognigy/v4.11/docs/release-notes
- Fixed a bug where the `bot` would always have the name `CognigyBot` for the `Slack channel`

### Documentation
- Improved documentation on `how to reach the api service` in an on-prem installation
- Improved documentation for `facebook profile` and `update profile` settings for endpoints