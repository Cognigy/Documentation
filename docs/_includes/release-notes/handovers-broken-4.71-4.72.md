!!! danger "Cognigy.AI Handovers broken in versions v4.71 and v4.72"
    With Release v4.71.0, we have introduced an incorrect default behavior for how meta-data for Cognigy.AI Handovers are cached. This leads to flaky behavior in Handover sessions for Cognigy.AI in all versions of our v4.71 and v4.72 lineup. Immediately update to the newest patch versions or set the configuration below:
    ```yaml
    cognigyEnv:
    LRU_CACHE_ENABLED: "false"
    ```