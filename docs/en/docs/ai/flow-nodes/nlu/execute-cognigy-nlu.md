# Execute Cognigy NLU

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b08ba8c-ExecuteCognigyNlu.PNG" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Execute Cognigy NLU Node is used to execute the COGNIGY.AI NLU Pipeline with specified text input and update the [Input Object](link me!). After updating the Input Object the Flow continues further processing. For example, a Code Node can be used to adjust a user's input and then run the NLU Pipeline with the modified sentence to get new NLU results.

???+ warning "Note"
    Flow execution continues by flowing to the next Node after processing the Execute Cognigy NLU Node. This Node does not trigger standard responses in intents, nor does it execute the Flow, based on a triggered intent. This Node only updates the input or context objects as described below.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Text | CognigyScript | The text that will be performed NLU on. Can be { { input.text } } to run the NLU Pipeline with the user's message. |
| Data | JSON | Data to send to the NLU Pipeline. Can be used to modify input.data |
| Mode | Select | There are three modes available which control how the output of the NLU Pipeline will be stored. The available selections are<br/>**Overwrite:** This selection will overwrite the Input Object with the result of the NLU Pipeline.<br />**Input:** This selection will store the result of the NLU Pipeline into the Input Object under a different key as specified in the store field. This is useful if you are e.g. running the NLU Pipeline a second time with a completely different text than the user input.<br />**Context:** This selection will store the result of the NLU Pipeline into the Context under the key specified in the store field |
| Store | CognigyScript | Where to store the result of the NLU Pipeline in either the Context or the Input Object, depending on the selected mode.<br />**NOTE** If the mode is set to ``overwrite`` then the store field doesn't do anything|