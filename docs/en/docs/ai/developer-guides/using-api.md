---
 title: "Using the API" 
 slug: "using-api" 
 hidden: false 
---
# Using the API

<!-- table styling -->
<style>
table {
  width: 100%;
}
table th {
  background: #3b6cac;
  color: white;
  padding: 11px; 
  font-size: 16px; 
  text-align: left; 
  font-weight: lighter;
}
 table td {
  padding: 20px;
  font-size: 15px;
}
 table .type {
   font-weight: bold;
   font-size: 16px;
 }
</style>

## What is the Cognigy API?

<div class="divider"></div>


For communication with the Cognigy.AI installation, the frontend uses an HTTP-based API.
This API can also be used by developers to build custom integrations with Cognigy.AI. We also offer a library in the form of an NPM package called the "rest-api-client" which helps to lower the burden of consuming our APIs. This library is available on NPM and is written in modern JavaScript including Typescript definitions.

## What are the API capabilities?

<div class="divider"></div>

Any kind of information that is visible and any kind of action that can be performed in the frontend is queried or triggered through this API, which is 100% exposed for developers, too. 

## What do I need to access the API?

<div class="divider"></div>


To use the API, you will need to have two things:

## The API baseurl
This is the url which the API is available at.

<table>
	<tbody>
		<tr>
			<th>Environment</th>
			<th>API Base URL</th>
		</tr>
		<tr>
			<td class="type" style="vertical-align: middle; padding: 10px;">Trial (trial.cognigy.ai)</td>
			<td style="padding: 20px;"><p>https://api-trial.cognigy.ai</p>
			</td>
		</tr>
		<tr>
			<td class="type" style="vertical-align: middle; padding: 10px;">App (app.cognigy.ai)</td>
			<td style="padding: 20px;"><p>https://api-app.cognigy.ai</p>
			</td>
		</tr>
		<tr>
			<td class="type" style="vertical-align: middle; padding: 10px;">On-Premise Installations</td>
			<td style="padding: 20px;">This is the url that has been defined as BACKEND_BASE_URL_WITH_PROTOCOL in your production.env file</td>
		</tr>
	</tbody>
</table>

## Valid API key

An API key is used to authenticate to the Cognigy.AI API as a user in the system without exposing the user's credentials.

You can get an API key by logging into the frontend, going to your own user profile by clicking your avatar in the top right, then click "My Profile" in the menu.

From here, provided that you have sufficient rights assigned, you can see an API key section where you can create a new API key. Click the + button to generate a new API Key. When you create a new API key, you will be prompted to enter a name. The name will be displayed together with the API key in the list.
By clicking an API key, you can copy the API key to your clipboard.

<div style="margin-bottom: 120px"/>

## How do I use the API?
<div class="divider"></div>
Cognigy API includes an OpenAPI documentation which outlines all the different API operations in detail. For example for Cognigy trial environment it can be found at https://api-trial.cognigy.ai/openapi.

To do a call to the API, do an HTTP request and add either
- a query parameter `api_key` with your API key as value
- a header `X-API-Key`with your API key set as value

Let's assume I have a Cognigy.AI installation running at `https://api-dummy.cognigy.ai` and I created myself an API key which reads `myDummyApiKey123`. 

I can now open a new browser tab and go to `https://api-dummy.cognigy.ai/projects?api_key=myDummyApiKey123` to get a list of all the projects that are assigned to me, including meta-information about the resources within that project.
This call, for example, is used by the frontend when you load the "Projects" page.

## Super API-Key

<div class="divider"></div>

Most of the APIs in Cognigy.AI are agent-bound, meaning that a developer using our API can only request information from agents he actually has access to. There are certain use-cases where e.g. all Flows within a certain Organization should be listed. For such use-cases, we have introduced a feature called the "Super API-Key" with our 4.1.4 release.

!!! warning "Feature availability"
    This feature is only available for on-premise customers with separate Cognigy.AI installations!

This feature is, by default, disabled in all Cognigy.AI installations. Our on-premise customers can activate this feature by setting the following environment variable to "true":

````JavaScript
FEATURE_USE_SUPERAPIKEY_API
````

````
https://api-trial.cognigy.ai/openapi#post-/management/v2.0/organisations/{organisationId}/apikeys
````

This API-key is not bound to a specific user and lives within the scope of an Organization. It can be used to manipulate all assets and objects within the system.

!!! note "Super API-Key and TTL"
    Note that this API-key has a default TTL (=Time to life) of 15 minutes for security reasons. Once the key has been created, it will only be valid for 15 minutes.