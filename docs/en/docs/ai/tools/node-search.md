---
 title: "Node Search" 
 slug: "node-search" 
 hidden: false 
---
# Flow Node Search

With the Search Node field, one can carry out a case-insensitive search through the flow nodes. Please take a look [here]({{config.site_url}}ai/tools/node-search/#test) for a list of what can be searched within a flow.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/node-search-field.png" width="100%" />
</figure>

In order to search the flow nodes:

1. Click the **Search Icon** located among the other tools at the bottom left corner of the Chart Editor.
2. An input filed with a placeholder *Search Nodes* opens up, where you can enter the search text.
3. Alternatively, you can also open the search nodes input field by using **Ctrl + Alt + F** or **Command + Option + F** hotkeys.

### Node and Node Editor highlighting
<div class="divider"></div>

Once the search text is entered, all the nodes that contain the search text will be highlighted in yellow and the page will automatically be scrolled to the first matching node. Using the *up* and *down* arrows within the search field, one can scroll to the previous and next matching nodes, respectively. In addition, the total number of nodes that contain the search text will also be displayed within the search field. If you like to reset and clear the search text, click the *Clear Input* button in the search field.  

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-node.gif" width="100%" />
  <figcaption>Chart Editor after searching for the term 'Welcome'</figcaption>
</figure>

???+ info "Tip: Toggle Search Icon"
    In order to close the search nodes input field without resetting the search text, click on the *Search Icon* in the chart editor toolbar again. Doing this toggles the node highlighting.

Futher, when a highlighted node is opened, the field that has the match will have its label highlighted.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/node-editor-with-highlighting.png" width="100%" />
  <figcaption>Say Node Editor after searching for the term 'Welcome'</figcaption>
</figure>


### Searchable Contents
<div class="divider"></div>

You can search for the following within the flow nodes:

* Node Label
* Node Comment
* Node type 
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-by-type.png" width="100%" />
  <figcaption>Searching for all nodes of type 'Say' in the flow</figcaption>
</figure>
* Node ID 
* Node reference ID
* Key or Value in the JSON Editor
* Piece of code in the Code Editor
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-in-code-node.png" width="100%" />
  <figcaption>Code Node Editor after searching for the term 'Welcome'</figcaption>
</figure>
* Input fields for any Output type / Channel type in Say Node
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-in-alexa-channel.png" width="100%" />
  <figcaption>Alexa Channel after searching for the term 'Welcome'</figcaption>
</figure>
* Input fields for any Output type / Channel type in Question Node
* Custom button labels in Say Node and Question Node
* Fallback Text in Say Node and Question Node
* Other relevant input fields in other node types
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-in-goTo-node.png" width="100%" />
  <figcaption>Go To Node Editor after searching for the term 'Welcome'</figcaption>
</figure>