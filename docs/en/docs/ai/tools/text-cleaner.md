---
 title: "Text Cleaner" 
 slug: "text-cleaner" 
 hidden: true 
---

# Text Cleaner

[![Version badge](https://img.shields.io/badge/Added in-v4.51-blue.svg)](../../release-notes/4.51.md)

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
| resolveSpelledOutNumbers  | Replaces all number words with their numerical representation. For example, "five and three hundred nineteen" > "5 319".                                                                                                  |
| resolvePhoneticAlphabet   | Detects and replaces all words that are part of the phonetic alphabet. For example, "alpha tango lima" > "a t l".                                                                                                         |
| replaceSpecialWords       | Replaces specifically set words with their replacements. For example, "lufthansa" > "lh".                                                                                                                                 |
| resolveSpelledOutAlphabet | Resolves phrases like "a for anton b as in bertram" to "a b".                                                                                                                                                             |
| resolvePhoneticCounters   | Resolves strings like "3 times 2" to "222" or "double 4" to "44". See special rules below. |
| contractSingleCharacters  | Joins all single characters standing alone into a full string. For example, "my name is c o g n i g y" > "my name is cognigy".                                                                                            |
| contractNumberGroups      | Joins all numbers standing next to each other. For example, "his number is 333 43 22 44" > "his number is 333432244".                                                                                                     |
| trimResult                | Trims the start and end of the string and replaces all double (or more) spaces with single spaces.                                                                                                                        |                                                                                                                                 

### Rules for resolvePhoneticCounters

resolvePhoneticCounters resolves strings like "3 times 2" to "222" or "double 4" to "44". It resolves sentences containing a multiplier (e.g. "3 times" or "double") and a multiplicant (e.g. "2" or "4" in the examples above). 

*Multiplicants can be numbers and characters.*

Some strings can be ambiguous - For example "double ap 3 4" could be "aap34" or "apap34" - so we set the following rules:

**If the multiplicant is a number** (e.g. "2 times 3")
- If the multiplicant is a number below 13, the multiplicant is repeated itself (e.g., "2 times 3" will return "33" and "2 times 11" will return "1111")
- If the multiplicant is a number higher or equal to 13, only the first digit is considered the multiplicant (e.g., "2 times 16" is "116"). This is because it is common to say "3 times 4" or "3 times 12", but not "3 times 25".

**If the multiplicant is a character**
- If the multiplicant is a phonetic character, it is resolved and the character is repeated (e.g. "2 times alpha" is "aa")
- If the multiplicant has more than one character and is not a phonetic character, only the first character is repeated (e.g., "2 times ox" is "oox"), because we assume it was transcribed incorrectly by STT and the user actually say "2 times o, x"