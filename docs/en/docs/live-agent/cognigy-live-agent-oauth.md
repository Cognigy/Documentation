---
 title: "Cognigy Live Agent OAuth" 
 slug: "labels" 
 hidden: false 
---
# Cognigy Live Agent OAuth

It is possible to perform a login into Live Agent with your Cognigy.AI account. This is done by using the OAuth2 protocol. The configuration must be done following the instructions under the installation section [Helm Values]({{config.site_url}}live-agent/installation/helm-values/).

The OAuth URL to use is: https://live-agent-domain/login-oauth

<figure>
<img src="{{config.site_url}}live-agent/images/LA-cognigy-oauth.png" width="100%" alt="Live Agent OAuth screen and Cognigy Login" />
  <figcaption>Live Agent OAuth screen and Cognigy Login</figcaption>
</figure>


Once you have entered your credentials, you will be redirected to the Live Agent Dashboard, with the Cognigy.AI account logged in.

>Note: Remember that the user needs to have the proper roles in order to login into Live Agent. Otherwise, an unauthorized error will be thrown.