## Set up a Flow

To provide additional real-time information to your agents, Agent Assist uses a Flow.

To set up Agent Assist, you need to have two separate flows:

- The Main Flow where the primary logic is defined.
- A Flow where the logic for Agent Assist will be implemented.

During an active Live Agent handover, this Flow will process all customer inputs and display the outputs as part of the conversation for the human agent.

Agent Assist messages are only shown based on customer inputs received during an active handover after the human agent has initially responded.

!!! warning
    You don't need to include the Handover Node in the Agent Assist Flow, as using the Handover Node in the main Live Agent Flow is enough for the configuration process.

To provide helpful information to your agents, create Intents and use Lookup Nodes with Say Nodes based on customer inputs.

<figure>
  <img class="image-center" src="https://docs.cognigy.com/ai/handover-providers/images/la-agent-assist-flow-example.png" width="100%" />
</figure>
