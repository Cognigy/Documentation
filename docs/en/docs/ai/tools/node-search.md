---
 title: "Node Search" 
 slug: "node-search" 
 hidden: false 
---
# Flow Node Search

[![Version badge](https://img.shields.io/badge/Added in-v4.16.0-blue.svg)]({{config.site_url}})

With the Node Search field, one can carry out a case-insensitive search through the flow nodes. Please take a look [here]({{config.site_url}}ai/tools/node-search/#searchable-contents) for a list of what can be searched within a flow.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/node-search-field.png" width="100%" />
</figure>

In order to search the flow nodes:

1. Click the **Search Icon** located among the other tools in the bottom left corner of the Chart Editor.
2. An input filed with a placeholder *Search Nodes* opens up, where you can enter the search text.
3. Alternatively, you can also open the search nodes input field by using **Ctrl + Alt + F** or **Command + Option + F** hotkeys.

### Node and Node Editor highlighting
<div class="divider"></div>

Once the search text is entered, all the Nodes that contain the search text will be highlighted in yellow and the page will automatically be scrolled to the first matching Node. Using the *up* and *down* arrows within the search field, one can scroll to the previous and next matching Nodes, respectively. In addition, the total number of Nodes that contain the search text will also be displayed within the search field. If you'd like to reset and clear the search text, click the *Clear Input* button in the search field.  

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-node.gif" width="100%" />
  <figcaption>Chart Editor after searching for the term 'Welcome'</figcaption>
</figure>

???+ info "Tip: Toggle Search Icon"
    In order to close the Node Search input field without resetting the search text, click on the *Search Icon* in the chart editor toolbar again. Doing this toggles the Node highlighting.

Further, when a highlighted Node is opened, the field that has the match will have its label highlighted.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/node-editor-with-highlighting.png" width="100%" />
  <figcaption>Say Node Editor after searching for the term 'Welcome'</figcaption>
</figure>

???+ info "*Section Label* and *Channel Tab* Highlighting"
	[![Version badge](https://img.shields.io/badge/Added in-v4.18.0-blue.svg)]({{config.site_url}})

    When the field that has the match is inside a collapsable section, the label of the section will also be highlighted. Similarly, when the field that has a match is inside a Channel tab form of a node, the Channel tab icon will have its border highlighted (See Example 5 in [Examples]({{config.site_url}}ai/tools/node-search/#examples) section).

### Searchable Content
<div class="divider"></div>

You can search for the following within the flow nodes:

| Searchable Node Value                                                                                               | Description                                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Node Label                                                                                                          | The actual label displayed on a Node (configurable in its settings)                                                                                 |
| Node Comment                                                                                                        | The optional comment attached to the Node                                                                                                           |
| Node Analytics Step [![Version badge](https://img.shields.io/badge/Added in-v4.36.0-blue.svg)]({{config.site_url}}) | The Analytics Step displayed on a Node                                                                                                              |
| Node Type                                                                                                           | The type of the Node                                                                                                                                |
| Node ID                                                                                                             | The unique database ID of the Node (usually not used by users)                                                                                      |
| Node Reference ID                                                                                                   | The ID that is used when referring to a node e.g. as entrypoint for a Go-To Node (this ID can be copied from the secondary menu in the Node editor) |
| Keys or Values in the JSON Editor                                                                                   | Matches a key or a value within a JSON object, e.g. POST Data object in a HTTP Request Node                                                         |
| Code in the Code Editor                                                                                             | Matches the text within a Code Node                                                                                                                 |
| Input fields for any Output type / Channel type in Say Node and Question Node                                       | Any type of Output throughout all Channel types is matched.                                                                                         |
| Custom button labels in Say Node and Question Node                                                                  | Button labels and values are matched and highlighted                                                                                                |
| Other relevant input fields in all Node types                                                                       | Matches relevant field types in all Cognigy and Extension Nodes                                                                                     |


### Examples
<div class="divider"></div>

**Example 1:**
Searching for all nodes of type 'Say' in the flow
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-by-type.png" width="100%" />

**Example 2:**
Code Node Editor after searching for the term 'Welcome'
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-code-node.png" width="100%" />

**Example 3:**
Alexa Channel after searching for the term 'Welcome'
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-alexa-channel.png" width="100%" />

**Example 4:**
Go To Node Editor after searching for the term 'Welcome'
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-goTo-node.png" width="100%" />

**Example 5:**
Say Node Editor Channel tabs with matching fields in 'Default' and 'Google Actions' form, with 'Alexa' as the selected tab 
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-say-node-channel-tabs.png" width="100%" />


### Search nodes with Analytics Step
<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.36.0-blue.svg)]({{config.site_url}})

 For finding nodes that have Analytics Step, you can search for the specific keyword "has:analyticsStep" with the Node Search field. 

 It highlights all the nodes where Analytics Step field is not empty or null.
 <img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-analytics-step.png" width="100%" />