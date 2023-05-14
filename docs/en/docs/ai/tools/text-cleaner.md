---
 title: "Text Cleaner" 
 slug: "text-cleaner" 
 hidden: true 
---

# Text Cleaner

Cognigy.AI contains a series of functions to help pre-process user inputs, such as text messages or transcribed voice messages, for easier processing in Cognigy.AI afterwards.

An example would be a user spelling out a part number as "alpha tango hotel double seven three nine minus L for london and C for Canada", resulting in "ath 7739 - lc".

Right now the functions are only available for the following locales:

- en
- de

The functions are available:

- in the [Clean Text Node]({{config.site_url}}/ai/flow-nodes/nlu/clean-text/)
- in [Question Nodes]({{config.site_url}}/ai/flow-nodes/message/question/#answer-pre-processing)
- in [Code Nodes]({{config.site_url}}/ai/flow-nodes/code/actions/#text-cleaner)
- in [Transformers]({{config.site_url}}/ai/endpoints/transformers/transformers/#text-cleaner-class)

## Available Functions

| Function Name          | Description                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| cleanDisallowedSymbols | Remove all symbols which are not explicitly allowed. All letters and numbers are allowed by default and additional allowed symbols can be set. |
| resolveSpelledOutNumbers | Replaces all number words with their numerical representation. (e.g. "two hundred and one five seven" -> "201 5 7") |
| resolvePhoneticAlphabet | Detects and replaces all words which are part of the phonetic alphabet (e.g. "alpha tango lima" > "a t l") |
| replaceSpecialWords | Replaces specifically set words with their replacements (e.g. "lufthansa" > "lh") |
| resolveSpelledOutAlphabet | Resolves phrases like "a for anton b as in bertram" to "a b" |
| resolvePhoneticCounters | Resolves strings like "three times 2" to "222" or "double 4" to "44". Only takes the last number of the counter and first of the repeater. (e.g. "352 times 355" becomes "35 and 2 times 3 55" > "35 333 55") |
| contractSingleCharacters | Joins all single characters standing alone into a full string (e.g. "my name is c o g n i g y" > "my name is cognigy") |
| contractNumberGroups | Joins all numbers standing next to each other (e.g. "his number is 333 43 22 44" > "his number is 333432244") |
| trimResult | Trims the start and end of the string and replaces all double (or more) spaces with single spaces |