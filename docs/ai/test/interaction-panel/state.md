---
 title: "State" 
 slug: "state" 
 hidden: false 
---
# State

States allow limitations to be placed on a conversation that restrict the valid Intents that the NLU has access to. 

Only Intents added to the **Whitelist** of the current State of the conversation can be detected. Conversely, Intents added to the **Blacklist** of the current State will not be recognized.

!!! note "Example of How States Work"
    The admin has defined three States:

    * start
    * ordering
    * finished

    The admin could now configure that the user can only say *"I want to order a pizza*" when they're in the `start` State, as it wouldn't make sense in another State. Similarly the sentence *"When will my order arrive"* could trigger different outputs depending on the State the conversation is in.