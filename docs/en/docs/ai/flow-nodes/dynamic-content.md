# Daynamic Content in Nodes

Inside most Cognigy Flow Nodes you can use what we call [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) . In most text fields for example, you can use CognigyScript notation <span>{</span>{ }<span>}</span> to insert dynamic content from the [Input]({{config.site_url}}ai/tools/interaction-panel/input/), [Context]({{config.site_url}}ai/tools/interaction-panel/context/) and [Profile]({{config.site_url}}ai/tools/interaction-panel/profile/) objects.

See below for an example.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e3c8d1e-cognigyscript.jpg" width="90%" />
</figure>

If the user for example says "hi there", Cognigy would parse the CognigyScript at runtime and change the text above to "You said HI THERE".

CognigyScript is essentially JavaScript with access to our input, context and profile objects built in, so you can do all the things you can do in JavaScript, like the .toUpperCase() function above. See our [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) page for more information.
