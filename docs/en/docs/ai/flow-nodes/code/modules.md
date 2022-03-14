---
 title: "Modules" 
 slug: "modules" 
 hidden: false 
---
# Modules

## Description
<div class="divider"></div>
In a code node you're able to use a selection of predefined NPM modules. 
On this page you'll find all the necessary information to run these modules in a code node.

## moment.js
<div class="divider"></div>
[Moment.js Documentation](https://momentjs.com/docs/)

You can use the moment.js module for parsing, validating, manipulation and displaying dates.

### Usage
---
In a code node call the following function:
```javaScript
moment(inp?:any, format?: any, strict?: boolean);
``` 

### Example
---
the following example gets the current UTC time and date and outputs it back to the contact.
```javaScript
const utc = moment.utc();
actions.output(utc);
``` 


## Lodash
<div class="divider"></div>
[Lodash Documentation](https://lodash.com/docs/4.17.10)

COGNIGY.AI also supports the utility library Lodash within code nodes.

### Usage
---
You can call functions of the Lodash module by using the following syntax:
```javaScript
_.keys(<OBJECT>);
``` 
You can use any Lodash function within a code node. See their [documentation](https://lodash.com/docs/4.17.10) for further information.

### Example
---
The following example shows a typical use-case and syntax of the Lodash module.
```javaScript
const favouriteFoods = ["pizza", "spaghetti", "burger"];
const last = _.last(favouriteFoods);
actions.output(last);
``` 
In this example we're extracting the last element of the `favouriteFoods` array and sending it as an output message.

## Messenger Platform
<div class="divider"></div>
[Messenger Documentation](https://github.com/snlangsuan/facebook-bot-messenger)

For building Facebook Messenger messages (quick replies, buttons, lists, generic templates etc.) you can use the **facebook-bot-messenger** module within a Code Node.

### Usage
---
In a Code Node you can create a message type of your choice by using the **MessengerPlatform** namespace. For a list of possible message types, please visit the [facebook-bot-messenger documentation](https://github.com/snlangsuan/facebook-bot-messenger).

### Example
---
The following snippet can be used to generate a quick reply message. Please keep in mind that the built message (`builder.buildMessage()`) must be the value of the **message** property of the **_facebook** object. 
```javaScript
// use facebook-bot-messenger to compile reply
const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Pick a color:');
builder.addImageOption('Red', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'http://petersfantastichats.com/img/red.png')
       .addImageOption('Green', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'http://petersfantastichats.com/img/green.png');

// output the reply
actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
``` 

## Messenger Platform
<div class="divider"></div>
[XML-js Documentation](https://www.npmjs.com/package/xml-js)

In case you want to parse XML data, you can use this module.

### Usage
---
Within a Code Node you can call the following method: 
```javaScript
const xml =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<note importance="high" logged="true">' +
    '    <title>Happy</title>' +
    '    <todo>Work</todo>' +
    '    <todo>Play</todo>' +
    '</note>';

const result = xmljs.xml2json(xml, { compact: true, spaces: 4 });

// result will now contain a JSON representation of the xml above
``` 
