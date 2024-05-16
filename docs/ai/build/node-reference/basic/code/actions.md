---
title: "Action" 
slug: "actions" 
hidden: false 
---

# Action

[![Version badge](https://img.shields.io/badge/Updated in-v4.68-blue.svg)](../../../../../release-notes/4.68.md)

Within a [Code Node](overview.md), you can use the functions of the `actions` and `api` classes.

!!! note "Available in Extensions"
    The following functions are available in Extensions as well. There, one can use the `api` object and, for example, execute an `api.say()`.

## Misc

### actions.output / actions.say || api.output / api.say

Executes a basic output to the contact, similar to the functionality of the [Say](../say.md) Node. 

**Parameters**

| Parameter | Type   | Description                                  |
|-----------|--------|----------------------------------------------|
| text      | string | The output text that is sent to the contact. |
| data      | any    | The output data that is sent to the contact  |

**Returns**

void

### actions.completeGoal || api.completeGoal

Adds a defined goal to the **completedGoals** array in the **Input Object**.

**Parameters**

| Parameter | Type   | Description                                                          |
|-----------|--------|----------------------------------------------------------------------|
| key       | string | The name of the goal that will be added to the completedGoals array. |

**Returns**

Promise<void>

### actions.setTimezoneOffset || api.setTimezoneOffset

Sets the time zone offset from UTC.

**Parameters**

| Parameter | Type     | Description               |
|-----------|----------|---------------------------|
| offset    | *number* | The time offset in hours. |

**Returns**

void

### actions.log || api.log

Writes a message to the project logs.

**Parameters**

| Parameter | Type   | Description                                    |
|-----------|--------|------------------------------------------------|
| level     | string | The log level, for example, `debug` or `info`. |
| text      | string | The message for the logs.                      |

**Returns**

void

### actions.think || api.think

Is used to re-execute the Flow within one invocation.

The Flow will stop and then restart executing at the Start Node.

**Parameters**

| Parameter | Type   | Description                             |
|-----------|--------|-----------------------------------------|
| text      | string | A simulated message text from the user. |
| data      | any    | Simulated message data from the user.   |

**Returns**

void

## Context

### actions.addToContext || api.addToContext

Is used to simplify storing information into the conversation's Context.

**Parameters**

| Parameter | Type   | Description                                                                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------|
| key       | string | Where to store the data in the Context.                                                                                                      |
| value     | string | The value to store in the Context.                                                                                                           |
| mode      | string | In `simple` mode, will replace existing values, in `array` mode, it will store information in an array and push new results into that array. |

**Returns**

void

### actions.getContext || api.getContext

Gets the data from the context by the key.

**Parameters**

| Parameter | Type   | Description                                  |
|-----------|--------|----------------------------------------------|
| key       | string | Where to retrieve the data from the context. |

**Returns**

any : The requested context data

### actions.getConversationTranscript || api.getConversationTranscript

Retrieves the current conversation transcript, including the last 10 user inputs and the associated outputs from the virtual agent.

**Parameters**

| Parameter | Type   | Description                                                                                                                                     |
|-----------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| mode      | string | - `json` — returns an array of conversation entries. This option is default. <br> - `string` — returns a stringified version of the transcript. |
| options   | object | Options to be passed to the function. The example is presented below.                                                                           |

Example Options:

```json
{
    "turnLimit": 3 // the number of turns to return
}
```

**Returns**

Either the JSON array of conversation entries or the string representation. 

Example JSON:

```json
[
    { "source":"user", "text":"hello" },
    { "source":"bot", "text":"You said: hello" },
    { "source":"user", "text":"you are an ai agent" },
    { "source":"bot", "text":"You said: you are an ai agent" },
    { "source":"user", "text":"show transcript" }
]
```

Example string:

```text
- USER: hello
- BOT: You said: hello
- USER: you are an ai agent
- BOT: You said: you are an ai agent
- USER: show transcript
```

### actions.resetContext || api.resetContext

Resets the context.

**Parameters**

none

**Returns**

Promise

### actions.removeFromContext || api.removeFromContext

Removes information from the conversation's Context.

**Parameters**

| Parameter | Type   | Description                                                                                                       |
|-----------|--------|-------------------------------------------------------------------------------------------------------------------|
| key       | string | The key in the Context to remove information from                                                                 |
| value     | string | The value to remove (in array mode)                                                                               |
| mode      | string | In simple mode will remove the property completely, in array mode it will remove matching values from that array. |

**Returns**

void

### actions.deleteContext || api.deleteContext

Deletes the key and its values from the conversation's Context.

**Parameters**

| Parameter | Type   | Description                                       |
|-----------|--------|---------------------------------------------------|
| key       | string | The key in the Context to remove information from |

**Returns**

void

## State


### actions .setState || api.setState

Is used to set the current State of this Conversation.

**Parameters**

| Parameter | Type   | Description                         |
|-----------|--------|-------------------------------------|
| state     | string | The State that should be activated. |

**Returns**

void

### actions .getState || api.getState

Returns the current state.

**Parameters**

none

**Returns**

string: The current state.

### actions .resetState || api.resetState

Resets the state of the flow to the *default* state

**Parameters**

none

**Returns**

Promise<string>

## Lexicon

### actions .setKeyphrase || api.setKeyphrase

**Parameters**

| Parameter             | Type       | Description                                  |
|-----------------------|------------|----------------------------------------------|
| keyphrase             | string     | The Keyphrase you want to set                |
| tags                  | *string[]* | Tags you want to attach to the Keyphrase     |
| synonyms *(optional)* | *string[]* | Synonyms you want to attach to the Keyphrase |

**Returns**

void

### actions.addLexiconKeyphrase || api.addLexiconKeyphrase

Adds a new keyphrase to a lexicon.

**Parameters**

| Parameter | Type   | Description                                  |
|-----------|--------|----------------------------------------------|
| lexiconId | string | The ID of the Lexicon you want to update     |
| keyphrase | string | The Keyphrase you want to add to the Lexicon |
| tags      | any    | Tags you want to attach to the Keyphrase.    |
| synonyms  | any    | Synonyms you want to attach to the Keyphrase |

**Returns**

Promise<string>

## Profile

### actions.activateProfile || api.activateProfile

Is used to reactivate a profile that has been deactivated, in case the user disabled data collection by mistake or wants to allow data collection again.

**Parameters**

None

**Returns**

Promise<any> 

### actions.updateProfile || api.updateProfile

Is used to update the users' Contact Profile.

**Parameters**

| Parameter | Type   | Description                                          |
|-----------|--------|------------------------------------------------------|
| key       | string | Which field in the user's Contact Profile to update. |
| value     | string | The value you want to set.                           |

**Returns**

Promise<any>

### actions.mergeProfile || api.mergeProfile

Is used to merge the profile of the contact who hits the node with another contact profile. 

This is useful in an omnichannel environment, where a contact can talk to your Flow on different platforms, but wants to be recognized as the same person on all platforms.

**Parameters**

| Parameter | Type   | Description                                                                        |
|-----------|--------|------------------------------------------------------------------------------------|
| contactId | string | The id of the contact you want to merge with the current contact who hit the Node. |

**Returns**

Promise<any> 

### actions.deactivateProfile || api.deactivateProfile

Is used to deactivate a specific contact profile in case a contact requests it.

**Parameters**

None

**Returns**

Promise<any>