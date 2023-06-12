---
 title: "Recent Calls" 
 slug: "vg-webapp-recent-calls" 
 hidden: true 
---

# Recent Calls

*Recent Calls* are calls of your [account](accounts.md). Voice Gateway provides general data about the calls, such as the Date, Direction, From, To, SIP Trunk, and Call Duration. 

Account, Date, Direction, and Status can filter these calls. Note that you can only filter by a maximum of the last 30 days.

To view detailed information about the call, click the **Details** tab.

Additionally, Voice Gateway provides PCAP files which can be downloaded in the detailed information overview.

For inbound calls, you can analyze the captured media stream to diagnose and troubleshoot voice quality issues by clicking the **Tracing** tab and viewing the report. This feature provides valuable insights into the duration of different actions during the call, such as speech recognition and connections. By reviewing the report, you can identify any delays or issues that occurred during these actions, helping you pinpoint potential areas of improvement in terms of performance and efficiency.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-recent-calls.png"  width="100%" />

## PCAP fields

| Settings             | Description                                                                                                                             |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| attempted_at         | The time of the attempt.                                                                                                                |
| account_sid          | Identifies the account this phone belongs to.                                                                                           |
| answered             | Determines whether a call was answered or not.                                                                                          |
| answered_at          | The time when an answer was given.                                                                                                      |
| application_sid      | A unique identifier for the application.                                                                                                |
| call_sid             | A unique identifier for the call. Specific for the call SIP sessions.                                                                   |
| direction            | Determines whether a call was inbound or unbound.                                                                                       |
| duration             | The duration of the call in seconds.                                                                                                    |
| from                 | A phone number of the party who made the call.                                                                                          |
| host                 | An SBC SIP server that handled the incoming calls.                                                                                      |
| remote_host          | Displays the IP address of carrier/SIP trunk.                                                                                           |
| service_provider_sid | A unique identifier for the service provider.                                                                                           |
| sip_callid           | A unique session identifier that you can use for several purposes, including call logging and billing correlation.                      |
| sip_status           | A [SIP code response](https://en.wikipedia.org/wiki/List_of_SIP_response_codes).                                                        |                                                       |
| terminated_at        | The time of the call was ended.                                                                                                         |
| termination_reason   | The reason why the call was ended.                                                                                                      |
| to                   | A phone number of the party to whom the call was made.                                                                                  |
| trace_id             | A unique identifier for the call. Can be used to track any type of call or session as it passes through different parts of the network. |
| trunk                | A [carrier](carriers.md) name.                                                                                                          |
