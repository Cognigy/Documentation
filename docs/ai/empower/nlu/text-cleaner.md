---
title: "Text Cleaner" 
slug: "text-cleaner" 
hidden: true 
---

# Text Cleaner

[![Version badge](https://img.shields.io/badge/Updated in-v4.58-blue.svg)](../../../release-notes/4.58.md)

Cognigy.AI offers various functions to assist in preprocessing user inputs, such as text messages or transcribed voice messages. These functions make it easier to process data in Cognigy.AI.

An example would be when a user spells out a part number as `alpha tango hotel double seven three nine minus L for London and C for Canada`, resulting in `ath 7739 - lc`.

These functions support the English (`en`) and German (`de`) locales.

The functions are available in the following entities:

- [Clean Text Node](../../build/node-reference/ai/clean-text.md)
- [Question Nodes](../../build/node-reference/basic/question.md)
- [Code Node](../../build/node-reference/basic/code/modules.md)
- [Transformers](../../deploy/endpoints/transformers/transformers.md#text-cleaner-class)

## Functions

| Function Name                      | Description                                                                                                                                                                                       |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cleanDisallowedSymbols             | Removes all symbols that are not explicitly allowed. All letters and numbers are allowed by default, and additional allowed symbols can be set.                                                   |
| resolveSpelledOutNumbers           | Replaces all number words with their numerical representation. For example, "five and three hundred nineteen" > "5 319".                                                                          |
| resolvePhoneticAlphabet            | Detects and replaces all words that are part of the phonetic alphabet. For example, "alpha tango lima" > "a t l".                                                                                 |
| replaceSpecialWords _(Deprecated)_ | Replaces specifically set words with their replacements. For example, "lufthansa" > "lh". <br><br> This function has been deprecated since v4.58. Use the replaceSpecialPhrases function instead. |
| replaceSpecialPhrases              | Replaces specific words or phrases with replacements. For example, "Conversational AI" is changed to "CAI", "New York" to "NY", and "lufthansa" to "lh".                                          |                                               |
| resolveSpelledOutAlphabet          | Resolves phrases like "a for anton b as in bertram" to "a b".                                                                                                                                     |
| resolvePhoneticCounters            | Resolves strings like "3 times 2" to "222" or "double 4" to "44". Learn more about special rules in the [Rules for resolvePhoneticCounters](#rules-for-resolvephoneticcounters) section.          |
| contractSingleCharacters           | Joins all single characters standing alone into a full string. For example, "my name is c o g n i g y" > "my name is cognigy".                                                                    |
| contractNumberGroups               | Joins all numbers standing next to each other. For example, "his number is 333 43 22 44" > "his number is 333432244".                                                                             |
| trimResult                         | Trims the start and end of the string and replaces all double (or more) spaces with single spaces.                                                                                                |

### Rules for resolvePhoneticCounters

This function is designed to convert phrases like "3 times 2" into their numeric representation, such as "3 times 2" to "222" or "double 4" to "44." The function handles sentences that include both a multiplier (for example, "3 times" or "double") and a multiplicand (for example, "2" or "4"). The multiplicand can be either a number or a character.

Some examples can be ambiguous. For instance, consider the phrase "double ap 3 4", which could be interpreted as either "aap34" or "apap34."

To avoid this ambiguity, Cognigy defined the following rules for multiplicand types:

| Multiplicand type                                                        | Rule                                                                                                                                                                                  | Example                                                                                      |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Number**                                                               |                                                                                                                                                                                       | 2 times **3**, 2 times **16**                                                                |
| Multiplicand is a number less than 13                                    | The multiplicand is repeated itself.                                                                                                                                                  | "2 times 3" will return "33" <br> "2 times 11" will return "1111"                            |
| Multiplicand is a number greater than or equal to 13                     | Only the first digit is repeated. <br><br> The first digit is given priority due to the more common usage of phrases like "3 times 4" or "3 times 12," compared to "3 times 25".      | "2 times 16" will return "116"                                                               |
| **Character**                                                            |                                                                                                                                                                                       | 2 times **alpha**, 2 times **ox**                                                            |
| Multiplicand is a phonetic character                                     | It is resolved, and the character is repeated.                                                                                                                                        | "2 times alpha" will return "aa"                                                             |
| Multiplicand has more than one character and is not a phonetic character | Only the first character is repeated. <br><br> Cognigy assumes that the speech-to-text (STT) system transcribed the user input incorrectly and that the user intended to say another. | "2 times ox" will return "oox" <br> (we assume that the user intended to say "2 times o, x") |