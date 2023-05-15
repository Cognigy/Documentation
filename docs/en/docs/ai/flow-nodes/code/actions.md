---
 title: "Action" 
 slug: "actions" 
 hidden: false 
---
# Action
## Description
<div class="divider"></div>
Within a [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) you are able to use the functions of the **actions** / **api** class. 

!!! note "Available in Extensions"
    The following functions are available in Extensions as well. There, one can use the `api` object and, for example, execute an `api.say()`.

## Misc
<div class="divider"></div>

### actions.output / actions.say || api.output / api.say
---
Performs a simple output to the contact - similar to the [Say Node]({{config.site_url}}ai/flow-nodes/message/say/). 

#### Parameters
| Parameter | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| **text**  | *string* | The output text which is sent to the contact |
| **data**  | *any*    | The output data which is sent to the contact |

#### Returns
void

### actions.completeGoal || api.completeGoal
---
Adds a defined goal to the **completedGoals** array in the **Input Object**.

#### Parameters
| Parameter | Type     | Description                                                    |
|-----------|----------|----------------------------------------------------------------|
| **key**   | *string* | name of the goal the will be added to the completedGoals array |

#### Returns
Promise<void>

### actions.setTimezoneOffset || api.setTimezoneOffset
---
Sets the timezone offset from UTC.

#### Parameters
| Parameter  | Type     | Description              |
|------------|----------|--------------------------|
| **offset** | *number* | The time offset in hours |

#### Returns
void

### actions.setForwardDatesOnly || api.setForwardDatesOnly
---
Sets the NLU Parser to only detect dates in the future for DATE slots.

**Note: This setting will take effect on the next input only**

#### Parameters
| Parameter | Type      | Description                                        |
|-----------|-----------|----------------------------------------------------|
| **value** | *boolean* | Whether to only detect future dates for DATE slots |

#### Returns
void

### actions.log || api.log
---
Writes a message to the project logs.

#### Parameters
| Parameter | Type     | Description                           |
|-----------|----------|---------------------------------------|
| **level** | *string* | The log level, e.g. *debug* or *info* |
| **text**  | *string* | The message for the logs              |

#### Returns
void

### actions.think || api.think
---
Is used to re-execute the Flow within one invocation.

The Flow will stop and then restart executing at the Start Node.

#### Parameters
| Parameter | Type     | Description                             |
|-----------|----------|-----------------------------------------|
| **text**  | *string* | A simulated message text from the user. |
| **data**  | *any*    | Simulated message data from the user.   |

#### Returns
void


## Context
<div class="divider"></div>

### actions.addToContext || api.addToContext
---
 Is used to simplify storing information into the conversation's Context.

#### Parameters
| Parameter | Type     | Description                                                                                                                                  |
|-----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **key**   | *string* | Where to store the data in the Context.                                                                                                      |
| **value** | *string* | The value to store in the Context.                                                                                                           |
| **mode**  | *string* | In `simple` mode, will replace existing values, in `array` mode, it will store information in an array and push new results into that array. |

#### Returns
void

### actions.getContext || api.getContext
---
Gets the data from the context by the key.

#### Parameters
| Parameter | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| **key**   | *string* | Where to retrieve the data from the context. |

#### Returns
any : The requested context data

### actions.resetContext || api.resetContext
---
Resets the context.

#### Parameters
none

#### Returns
Promise

### actions.removeFromContext || api.removeFromContext
---
Removes information from the conversation's Context.

#### Parameters
| Parameter | Type     | Description                                                                                                       |
|-----------|----------|-------------------------------------------------------------------------------------------------------------------|
| **key**   | *string* | The key in the Context to remove information from                                                                 |
| **value** | *string* | The value to remove (in array mode)                                                                               |
| **mode**  | *string* | In simple mode will remove the property completely, in array mode it will remove matching values from that array. |

#### Returns
void

### actions.deleteContext || api.deleteContext
---
Deletes the key and its values from the conversation's Context.

#### Parameters
| Parameter | Type     | Description                                       |
|-----------|----------|---------------------------------------------------|
| **key**   | *string* | The key in the Context to remove information from |

#### Returns
void


## State
<div class="divider"></div>

### actions .setState || api.setState
---
 Is used to set the current State of this Conversation.

#### Parameters
| Parameter | Type     | Description                         |
|-----------|----------|-------------------------------------|
| **state** | *string* | The State that should be activated. |

#### Returns
void

### actions .getState || api.getState
---
Returns the current state.

#### Parameters
none

#### Returns
string: The current state.

### actions .resetState || api.resetState
---
Resets the state of the flow to the *default* state

#### Parameters
none

#### Returns
Promise<string>


## Lexicon
<div class="divider"></div>

### actions .setKeyphrase || api.setKeyphrase
---

#### Parameters
| Parameter                 | Type       | Description                                  |
|---------------------------|------------|----------------------------------------------|
| **keyphrase**             | *string*   | The Keyphrase you want to set                |
| **tags**                  | *string[]* | Tags you want to attach to the Keyphrase     |
| **synonyms** *(optional)* | *string[]* | Synonyms you want to attach to the Keyphrase |

#### Returns
void

### actions.addLexiconKeyphrase || api.addLexiconKeyphrase
---
Adds a new keyphrase to a lexicon.

#### Parameters
| Parameter     | Type     | Description                                  |
|---------------|----------|----------------------------------------------|
| **lexiconId** | *string* | The ID of the Lexicon you want to update     |
| **keyphrase** | *string* | The Keyphrase you want to add to the Lexicon |
| **tags**      | *any*    | Tags you want to attach to the Keyphrase.    |
| **synonyms**  | *any*    | Synonyms you want to attach to the Keyphrase |

#### Returns
Promise<string>



## Profile
<div class="divider"></div>

### actions.activateProfile || api.activateProfile
---
Is used to reactivate a profile that has been deactivated, in case the user disabled data collection by mistake or wants to allow data collection again.

#### Parameters
None

#### Returns
Promise<any> 

### actions.updateProfile || api.updateProfile
---
Is used to update the users' Contact Profile.

#### Parameters
| Parameter | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| **key**   | *string* | Which field in the user's Contact Profile to update. |
| **value** | *string* | The value you want to set.                           |

#### Returns
Promise<any>

### actions.mergeProfile || api.mergeProfile
---
s used to merge the profile of the contact who hits the node with another contact profile. 

This is useful in an omnichannel environment, where a contact can talk to your Flow on different platforms, but wants to be recognized as the same person on all platforms.

#### Parameters
| Parameter     | Type     | Description                                                                        |
|---------------|----------|------------------------------------------------------------------------------------|
| **contactId** | *string* | The id of the contact you want to merge with the current contact who hit the Node. |

#### Returns
Promise<any> 

### actions.deactivateProfile || api.deactivateProfile
---
Is used to deactivate a specific contact profile in case a contact requests it.

#### Parameters
None

#### Returns
Promise<any>


## Text Cleaner
<div class="divider"></div>

### actions.getTextCleaner
---
Is used to retrieve an instance of the [Text Cleaner](../../tools/text-cleaner.md) class, which exposes functions for cleaning text.


#### Parameters
| Parameter   | Type     | Description                                                                |
|-------------|----------|----------------------------------------------------------------------------|
| **locale**  | *string* | The locale for which to instantiate the class. For example, 'de' or 'en'). |
| **options** | *object* | See below for the config options.                                          |


Config Options
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

#### Returns
Instance of the Text Cleaner class.