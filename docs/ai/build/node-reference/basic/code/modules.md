---
 title: "Modules" 
 slug: "modules" 
 hidden: false 
---
# Modules

In a Code Node, you can use a selection of predefined NPM modules. On this page, you'll find all the necessary information to run these modules in a Code Node.

??? info "Moment.js"

    You can use the moment.js module for parsing, validating, manipulation and displaying dates.

    **Usage**
    ---
    In a Code Node, call the following function:
    ```javaScript
    moment(inp?:any, format?: any, strict?: boolean);
    ``` 

    **Example**
    ---
    the following example gets the current UTC time and date and outputs it back to the contact.
    ```javaScript
    const utc = moment.utc();
    actions.output(utc);
    ```

    For more information, see the [Moment.js Documentation](https://momentjs.com/docs/).


??? info "Lodash"
    [Lodash Documentation](https://lodash.com/docs/4.17.10)

    Cognigy.AI also supports the utility library Lodash within Code Nodes.

    **Usage**
    ---
    You can call functions of the Lodash module by using the following syntax:
    ```javaScript
    _.keys(<OBJECT>);
    ``` 
    You can use any Lodash function within a Code Node. See their [documentation](https://lodash.com/docs/4.17.10) for further information.

    **Example**
    ---
    The following example shows a typical use-case and syntax of the Lodash module.
    ```javaScript
    const favouriteFoods = ["pizza", "spaghetti", "burger"];
    const last = _.last(favouriteFoods);
    actions.output(last);
    ``` 
    In this example we're extracting the last element of the `favouriteFoods` array and sending it as an output message.

??? info "Messenger Platform"
    [XML-js Documentation](https://www.npmjs.com/package/xml-js)

    In case you want to parse XML data, you can use this module.

    **Usage**
    ---
    Within a Code Node, you can call the following method: 
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

??? info "Text Cleaner"
    **Usage**
    ---
    Within a Code Node, you can invoke the `getTextCleaner` function, which retrieves an instance of the [Text Cleaner](../../../../empower/nlu/text-cleaner.md) class. 
    This class provides access to various text-cleaning functions.

    **Parameters**

    | Parameter | Type   | Description                                                               |
    |-----------|--------|---------------------------------------------------------------------------|
    | locale    | string | The locale for which to instantiate the class. For example, 'de' or 'en'. |
    | options   | object | See below for the config options.                                         |


    **Config Options**

    ```json
    {
        // additional characters which won't be cleaned by cleanDisallowedSymbols
        additionalAllowedCharacters: string[], 

        // additional symbols which are replace (for example, "minus": "-")
        additionalMappedSymbols: { [key: string]: string }, 

        // additional phrases which are replaced
        additionalSpecialPhrases: { [key: string]: string }, 

        // additions to the phonetic alphabet (for example, "cognigy": "c")
        additionalPhoneticAlphabet: { [key: string]: string } 
    }
    ```

    **Returns**

    Instance of the Text Cleaner class.