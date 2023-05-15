---
 title: "Text Cleaner" 
 slug: "text-cleaner" 
 hidden: true 
---

# Text Cleaner

Cognigy.AI offers various functions to assist in preprocessing user inputs, such as text messages or transcribed voice messages. These functions make it easier to process data in Cognigy.AI.

An example would be when a user spells out a part number as `alpha tango hotel double seven three nine minus L for London and C for Canada`, resulting in `ath 7739 - lc`.

These functions support the English (`en`) and German (`de`) locales.

The functions are available in the following entities:

- [Clean Text Node](../flow-nodes/nlu/clean-text.md)
- [Question Nodes](../flow-nodes/message/question.md#answer-pre-processing)
- [Code Node](../flow-nodes/code/actions.md#text-cleaner)
- [Transformers](../endpoints/transformers/transformers.md#text-cleaner-class)

## Functions


| Function Name             | Description                                                                                                                                                                                                               |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cleanDisallowedSymbols    | Removes all symbols that are not explicitly allowed. All letters and numbers are allowed by default, and additional allowed symbols can be set.                                                                           |
| resolveSpelledOutNumbers  | Replaces all number words with their numerical representation. For example, "two hundred and one five seven" > "201 5 7".                                                                                                 |
| resolvePhoneticAlphabet   | Detects and replaces all words that are part of the phonetic alphabet. For example, "alpha tango lima" > "a t l".                                                                                                         |
| replaceSpecialWords       | Replaces specifically set words with their replacements. For example, "lufthansa" > "lh".                                                                                                                                 |
| resolveSpelledOutAlphabet | Resolves phrases like "a for anton b as in bertram" to "a b".                                                                                                                                                             |
| resolvePhoneticCounters   | Resolves strings like "three times 2" to "222" or "double 4" to "44". Only takes the last number of the counter and the first of the repeater. For example, "352 times 355" becomes "35 and 2 times 3 55" > "35 333 55"). |
| contractSingleCharacters  | Joins all single characters standing alone into a full string. For example, "my name is c o g n i g y" > "my name is cognigy".                                                                                            |
| contractNumberGroups      | Joins all numbers standing next to each other. For example, "his number is 333 43 22 44" > "his number is 333432244".                                                                                                     |
| trimResult                | Trims the start and end of the string and replaces all double (or more) spaces with single spaces.                                                                                                                        |                                                                                                                                 