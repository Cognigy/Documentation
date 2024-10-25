## Set up a Flow

To provide additional real-time information to your agents, this assistant uses a Flow.

To set up an assistant, you need to have two separate flows:

- The Main Flow where the primary logic is defined.
- A Flow where the logic for your assistant will be implemented.

During an active Live Agent handover, this Flow will process all customer inputs and display the outputs as part of the conversation for the human agent.

Assistant's messages are only shown based on customer inputs received during an active handover after the human agent has initially responded.

!!! warning
    You don't need to include the Handover Node in the assistant's Flow, as using the Handover to Agent Node in the main Live Agent Flow is enough for the configuration process.

To provide helpful information to your agents, create Intents and use Lookup Nodes with Say Nodes based on customer inputs.

<figure>
  <img class="image-center" src="https://docs.cognigy.com/_assets/live-agent/la-agent-assist-flow-example.png" width="100%" />
</figure>
