---
 title: "Input" 
 slug: "input" 
 hidden: false 
---
# Input

The Input is a short term JSON data object that is generated each time a message is sent to Cognigy.AI. 

The input object contains general information about the message such as the **Time** the message was received and the **Channel** from where the message was sent. More specific results from the NLU intent mapping process are also available such as the **Intent** that was selected, the **Slots** that were identified and many other useful pieces of information.

The input object is passed to the agent's [Flow]({{config.site_url}}ai/resources/build/flows/) to decide on the next action to take. For more information about the lifespan of the input, see the [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) page.

???+ info "Intent Default Replies override flow logic"
    If an intent is configured with a default reply, this will override the agent's flow logic and automatically be delivered as the response.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/d2f39be-interaction-input.jpg" width="100%" />
  <figcaption>Inspect the current Input object from the INFO tab of the Interaction Panel

</figcaption>
</figure>

## Properties
<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../../../release-notes/4.45.md)

The Input object contains the following properties (for text input).

| Key | 	Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|text| 	The text of the message received.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|intent	| The detected Intent, can be null.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|intentScore| 	The detected Intent's score.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|intentFlow| 	The flow containing the detected intent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|slots| 	Contains the detected slots ranging from automatic to custom lexicon libraries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|nlu| 	Contains the detailed NLU processing results. See [NLU Properties]({{config.site_url}}ai/tools/interaction-panel/input/#nlu-properties) for detailed information.                                                                                                                                                                                                                                                                                                                                                                                     |
|mode	| The type of input received by Cognigy.AI. Can be either "TextOnly" or "TextData".                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|type| 	The type of input sentence as determined by the NLU (Statement, Command, Greeting, BGreeting, whQuestion, howQuestion, ynQuestion, pAnswer, nAnswer) question	States if a question was received as the input text and what type of question was asked.                                                                                                                                                                                                                                                                                                |
|intentOutOfState| 	If a state is active, this property contains the detected intent that has been excluded by the state.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|currentTime| 	The timestamp of when the message was received by Cognigy.AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
|state| 	The current state within the session. By default, it will contain the value "default". Other states can be defined. See State for more information.                                                                                                                                                                                                                                                                                                                                                                                                   |
|channel| 	The channel from which the message was received, for example, a Facebook endpoint has the value "facebook".<br>For our more generic endpoint types like "socket", "webhook" and "rest", this value can be defined. This property will also be available in the OData records to enable channel based analytics filtering.                                                                                                                                                                                                                             |
|endpointType| 	The type of endpoint through which the message was received, for example, Alexa, Facebook, Dialogflow, etc. This value cannot be changed.                                                                                                                                                                                                                                                                                                                                                                                                             |
|entrypoint| 	The flow node id that will receive and process the input object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
|userId	| The current user's ID. This is what Cognigy.AI uses to identify each user as a reference to their individual contact profile.<br>See Contact Profiles for more information.                                                                                                                                                                                                                                                                                                                                                                            |
|inputId	| A unique ID that is generated for each message received by Cognigy.AI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
|sessionId| 	The current session ID. This is either provided by a channel or generated by Cognigy.AI. Most endpoints allow defining an individual session expiration (TTL).                                                                                                                                                                                                                                                                                                                                                                                        
|flowName| 	The name of the active flow which will process the input data and decide the next action to take.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|URLToken| 	A unique ID used to identify the specific endpoint .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|completedGoals| 	An object containing the names of the goals completed on execution of the flow logic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|execution| 	The number of messages rec'recievedieved so far in the current session.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|data| 	The data object that was sent as a payload to the user input. This object can contain a "request" property that stores the original request from the external channel, for example, If a Facebook endpoint is used, input.data.request will contain the original HTTP request content from Facebook.                                                                                                                                                                                                                                                  |
|understood| 	A boolean flag which determines whether the NLU understood the users message. An input is counted as understood if an Intent or a Slot is found. <br> The input is marked as understood via the Code Node or Overwrite Analytics Node, or the type of sentence is pAnswer, nAnswer, or Greeting (if Confirmation Word logic is activated). In all other cases, it is marked as not understood, except if there is an active handover (without activation of an agent Assist Flow) or a message has been explicitly marked as `Don't count` or `Null`. |
|language| 	The locale language that was used to process the input message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|traceId| 	A unique identifier for the specific user input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|intentLevel| 	The matched Intent, per [Intent Hierarchy]({{config.site_url}}ai/nlu/nlu-overview/intent-hierarchy/) level.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|localeId| 	The unique ID for the current locale used to process the input message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
|conditionalEntrypointWasExecuted| 	A boolean variable that displays "true" if the flow was executed on a conditional node.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|activeQuestion| 	Optional: Information on question execution when a question is active.<br>The following properties are available:<br>nodeId: The question node's ID.<br>type: The type of question<br>lastExecutedAt: Index of last execution.<br>forgetQuestionThreshold: Configured threshold to forget the question.<br>repromptCount: Count of reprompts.<br>escalationCount: Count of escalations.                                                                                                                                                               |

### NLU Properties

The detailed NLU results are published to the **nlu** variable which contains the following properties:

|Key|	Description|
|--|--|
|intentMapperResults|	Provides specific details about the NLU intent mapping results that includes a summary of the intent scoring for each of the trained intents located in the scores child property.|
|intentFlow|	A unique id assigned to the flow containing the selected intent.|
|intentId	|A unique id assigned to the intent that was selected by the NLU.|
|detailedSlots|	Contains the detected slots ranging from automatic to custom lexicon libraries.|
|tokens|	Provides an array containing each word of the input sentence as a string element.|

???+ info "NLU Properties are available after NLU only"
    The below properties below are computed by the NLU Connector.

    Consequently they are published **after** the NLU.

    **They are thus not available inside Cognigy NLU Rules and Conditions.**

    Properties written by the NLU into the Input:
    
      * intent
      * intentScore
      * nlu
      * type
      * intentLevel
      * localeId
      * understood
      * conditionalEntrypointWasExecuted

## Accessing the Input Object
<div class="divider"></div>


Flow nodes can dynamically access Input properties via [Tokens]({{config.site_url}}ai/resources/manage/tokens/) or [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) i.e. `{{ " {{input.property}}" }}`. The Cognigy Script used to access the input object follows the dot-notation `property.child.child`.

**Example**: `{{ " {{input.text}}" }}` would return the text message that was sent to the Flow.

???+ info "Copy JSON Path from the Input Object"
    You can copy the exact JSON path you need to reference a certain value in the Input object by right-clicking it and selecting "Copy JSON Path" from the context menu. 


## More information

- [State]({{config.site_url}}ai/tools/interaction-panel/state/)