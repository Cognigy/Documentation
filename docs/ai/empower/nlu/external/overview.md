---
 title: "External NLU" 
 slug: "external-nlu" 
 hidden: false 
---
# External NLU

Cognigy.AI is set up to handle all intent and slot mapping for agents with the built-in Cognigy NLU using the resources defined in flow [Intents](../intents/ml-intents.md) and [Lexicons](../slots-and-lexicons/lexicons.md). 

However, it is also possible to integrate an external NLU Provider to handle intent mapping within Cognigy.AI using the [NLU Connectors](nlu-connectors.md) feature. These external NLU Connectors will generate the same input object as Cognigy, which enables agents to easily switch NLU providers without having to change flows. 

Cognigy.AI natively supports NLU connections with **Dialogflow**, **LUIS**, **Watson Assistant** and **Alexa**. Any other third party NLU can be integrated using the "Code" type NLU connector.

## Creating NLU Connectors

To create a new NLU Connection, open an [Agent](../../../build/projects.md) and navigate to the [NLU Connectors](nlu-connectors.md) menu available from the menu on the left side of the interface under the **Build** section. 

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/NLU-connectors-menu.png" width="100%" />
</figure>

Inside this menu, click the **+ New NLU Connector** button, add a name for the connector and select the *NLU Connector Type* from the dropdown list.

A new NLU Connection will be added to the list of NLU Connectors, and by default, the settings for the newly added connector will be opened. In the instance of third party NLU's this is where the authentication credentials are entered to allow Cognigy.AI to connection with the external NLU service. 

!!! note "Want to learn how to connect an External NLU Service?"
    Find out how to connect to each supported external NLU service via the Help Center articles listed below:

    * Alexa NLU (Article coming soon)
    * [Watson Assistant: External NLU] (https://support.cognigy.com/hc/en-us/articles/360017484979-Watson-Assistant-External-NLU)
    * [Microsoft LUIS: External NLU] (https://support.cognigy.com/hc/en-us/articles/360017517319)
    * [Dialogflow: External NLU] (https://support.cognigy.com/hc/en-us/articles/360017466620)

!!! warning "Usage of external services"
    Note when using external NLU Connectors API quota limits, additional terms, conditions and/or charges may apply.

### Testing and Deploying with an External NLU

Cognigy.AI provides platform users with the opportunity to substitute the NLU service used for a given agent during both testing and deployment.

### Testing with an External NLU

An external NLU service that has been connected via the NLU connectors feature can be used for testing through the Interaction Panel. 
Open the Interaction Panel from within a Project and select the **Settings** tab to access the NLU Connector dropdown menu. 
This menu is populated with all the NLU connectors that have been added to the AI Agent.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/NLU-connectors-menu-ip.png" width="100%" />
</figure>

### Deploying with an External NLU
---
An external NLU service that has been linked via an [NLU Connectors](nlu-connectors.md) feature can be used to deploy to any [Endpoint](../../../deploy/endpoints/overview.md) that communicates with a deployment channel. This allows different conversational channels to use different NLU's when connected to the same agent in Cognigy.AI.

To change the NLU for a given endpoint, open the ***Endpoints*** menu found under the ***Deploy*** sub-menu in the resources panel. Select the endpoint that you wish to adjust by clicking on it to open the endpoint settings menu. Navigate to the **Natural Language Understanding** section of the endpoint settings and access the ***NLU Connector*** dropdown menu. This menu is populated with all the NLU connectors that have been added to the agent.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/external-nlu.png" width="100%" />
</figure>

Select an NLU connector to use the associated NLU service for any messages received via this endpoint.