# Release notes

<div class="divider"></div>
## 4.9.0
Released: August 24th, 2021

### Features
Extension performance
This release uplifts the Extension execution performance massively. We have implemented a new caching concept that will
cache Extensions in the local container file system. Extensions will be preferably loaded from this local cache instead of the remote storage location

### Webchat embed code
This release of Cognigy.AI adds an embed code for our WebchatWidget onto the Endpoint configuration page for Webchats

### Jump to Flow functionality
This release of Cognigy.AI adds a "Jump to Flow" button in our Endpoint editor. This allows users to quickly access Flows their Endpoints point to

### Dynamic Fields in Flow Nodes
This release of Cognigy.AI adds new functionality that allows our customers to use a new dynamic select field as a new field type in their Extensions. The feature can be used to dynamically fetch the content of a select field through e.g. an external API call

### Improvements
Updated RSS feed link in index dashboard and updated hyperlink in “Go to blog” button in the news section
Improved the autofocus which allows user to use enter key to go to the next NLU example sentence field
Improved Flow Editor by adding a warning which will be displayed when Flows have more than 100 Flow nodes
Improved the Intent upload functionality by skipping the import options dialog when the list of Intents is empty
Improved our MS Teams channel integration by adding the functionality to display the title of a postback button when clicked
Bugfixes
Fixed a bug where outputs from Flows could arrive in the wrong order
Fixed a bug where the scrollbar in Intent Trainer list flickers under some conditions
Fixed a bug in Intent Editor when a user adds a new synonym, the drop-down shows “no-options” while it takes several minutes to load the information
Fixed a bug where webchat plugins without options do not render in Interaction Panel
Fixed a bug where analytics records cannot be deleted
Fixed a bug where uploading an encrypted zip archive to packages crashes service resources
Fixed a bug where the clear button for selecting a Cognigy Connection would not clear the field
Fixed a bug where certain keyphrases would not be detected properly
Fixed a bug where the steps for Start- and disabled Flow Nodes would not be tracked
Fixed an issue where the label of an extension is not used in the extension details view
Fixed a bug where a random text would appear after uploading a Package

<div class="divider"></div>
## 4.8.1
Released: August 9th, 2021

### Bugfixes
Fixed a bug where uploading a Package would create a situation where extensions would no longer load properly on the extensions page

<div class="divider"></div>
## 4.8.0
Released: August 5th, 2021

### Features
Intent Trainer filters
This release of Cognigy.AI adds a set of filters to our Intent Trainer to simplify the workflow of reviewing records

### Descriptive API-Keys
More customers than ever are using our API-key feature in the product to automate certain aspects of their day-to-day developer life. In order to make it easier to distinguish different API keys, we have added the ability to name your API-keys

### Hotkey for expert mode
Developers can use the so-called expert mode in the Interaction Panel to get more verbose output about certain events (e.g. when an Intent has been found) when talking to their Agents. This release adds the ability to use CTRL+SHIFT+F to toggle the expert mode without visiting the settings panel

### Embeddable extensions
This release of Cognigy.AI adds the ability for on-premise customers to embed certain extensions into the baseline of Cognigy.AI

### Improvements
Added the ability to select a Locale Reference ID in a couple of nodes where this has not been possible before
Improved the order of fields for the Say-Node
Updated integrated WebchatWidget to version v2.31.0

### Bugfixes
Fixed OpenAPI documentation that contains the word “Cognigy” which is not white-labeled
Fixed a bug where the re-prompt message in Question node does not allow new lines
Fixed a bug where the user is unable to delete their own user account
Fixed a bug in side panel where Lexicons are wrongly highlighted
Fixed a bug where the gallery for the WebchatWidget fails to display anything if the gallery title is blank
Fixed a bug where the Intent Trainer layout would not properly be displayed in Edge 18
Fixed a bug by removing the role Snapshots from the product, as it is not assigning correct rights
Fixed an issue where case sensitive Intent mapping would not work properly
Fixed a bug where the user is unable to restore snapshot with many Extensions
Fixed a bug where OData could not filter for null values
Fixed a bug where German dates ending with a dot “20.10.2020.” would be ignored
Fixed a bug where System Slots contain the sum of ordinal and number instead of separate values
