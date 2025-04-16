---
 title: "No NLU" 
 slug: "no-nlu" 
 hidden: false 
---
# No NLU

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/nlu/no-nlu.png" width="100%" />
</figure>

## Description


The No NLU Connector is not an NLU Connector that can be created, but one that can always be selected in an Endpoint. Setting the No NLU Connector in an Endpoint completely disables the NLU pipeline of Cognigy.AI for that Endpoint, meaning that no Intents or Slots are found.

## Flow-based NLU execution

Although the Code NLU Connector is the recommended tool for connecting to a non-native NLU service, the No NLU Connector is useful in a scenario where the NLU process is conducted by flow logic (calling an external NLU from a flow node). For example, it is possible to use an HTTP Request node at the beginning of a Flow to find an Intent for the user's sentence. It is also possible to use Extensions to create a reusable Node that connects to an NLU system from within a flow.

!!! tip "Creating Extensions for NLU execution"
    Building Extensions that connect to an external NLU system allows an easy connection to external NLU processing from many Flows without having to worry about duplicate information stored in HTTP Request Nodes across Flows.

## Flow-based NLU execution

The No NLU Connector can also be used to control the timing of NLU Execution. By default, the Cognigy.AI NLU Pipeline is run before the Flow is executed, but it may be required to execute certain parts of a Flow before running the NLU to have greater control of when e.g. an Intent is triggered. This can be achieved by using the No NLU Connector in an Endpoint and then the Execute Cognigy NLU Node in a Flow when execution of the Cognigy.AI NLU pipeline is required.