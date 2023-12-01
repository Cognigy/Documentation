---
 title: "Using the API" 
 slug: "using-api" 
 hidden: false 
---
# Using the API

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

| Environment              | API Base URL                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| Trial (trial.cognigy.ai) | `https://api-trial.cognigy.ai`                                                                          |
| App (app.cognigy.ai)     | `https://api-app.cognigy.ai`                                                                            |
| On-Premise Installations | This is the url that has been defined as `BACKEND_BASE_URL_WITH_PROTOCOL` in your `production.env` file | 


## Manage API Keys

An API key is used to authenticate to the Cognigy.AI API as a user in the system without exposing the user's credentials.

To generate an API key, read [Create API Keys](../tools/user-menu/my-profile.md#create-api-keys).

To delete an API key, read [Revoke API Keys](../tools/user-menu/my-profile.md#revoke-api-keys).

<div style="margin-bottom: 120px"/>

## How do I use the API?

<div class="divider"></div>
Cognigy API includes an OpenAPI documentation which outlines all the different API operations in detail. For example for Cognigy trial environment it can be found at https://api-trial.cognigy.ai/openapi.

To do a call to the API, do an HTTP request and add either
- a query parameter `api_key` with your API key as value
- a header `X-API-Key`with your API key set as value

Let's assume I have a Cognigy.AI installation running at `https://api-dummy.cognigy.ai` and I created myself an API key which reads `myDummyApiKey123`. 

I can now open a new browser tab and go to `https://api-dummy.cognigy.ai/projects?api_key=myDummyApiKey123` to get a list of all the projects that are assigned to me, including meta-information about the resources within that project.
This call, for example, is used by the frontend when you load the **Projects** page.

## Super API-Key

<div class="divider"></div>

Most of the APIs in Cognigy.AI are agent-bound, meaning that a developer using our API can only request information from agents he actually has access to. There are certain use-cases where e.g. all Flows within a certain Organization should be listed. For such use-cases, we have introduced a feature called the "Super API-Key" with our 4.1.4 release.

!!! warning "Feature availability"
    This feature is only available for on-premise customers with separate Cognigy.AI installations.

This feature is, by default, disabled in all Cognigy.AI installations. Our on-premise customers can activate this feature by setting the following environment variable to "true":

````JavaScript
FEATURE_USE_SUPERAPIKEY_API
````

````
https://api-trial.cognigy.ai/openapi#post-/management/v2.0/organisations/{organisationId}/apikeys
````

This API-key is not bound to a specific user and lives within the scope of an Organization. It can be used to manipulate all assets and objects within the system.

!!! note "Super API-Key and TTL"
    This API-key has a default TTL (Time to life) of 15 minutes for security reasons. Once the key has been created, it will only be valid for 15 minutes.