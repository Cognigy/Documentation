# Extensions

Extensions enable anyone to build JavaScript modules and to expose them as Flow Nodes within Cognigy. There are no restrictions on node modules (NPM) or functionality.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/2f43014-extensions.png" width="100%" />
</figure>

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019893139-Cognigy-Sessions-Extensions" target="_blank" >Techinar video "Cognigy Extensions"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>


Extensions allow developers to extend the capabilities of Cognigy.AI by uploading JavaScript Modules into Cognigy.AI. These modules can expose Cognigy Flow Nodes and be used directly within Cognigy Flows.

Please have a look at the [**Extensions Github Repository**](https://github.com/Cognigy/Extensions) for more information. 

???+ warning "Extension Timeout"
    Extensions have a default time-out of 20 seconds. The time-out can be changed on dedicated Cognigy.AI installations.

## Extension Modules
If you're just after finding Cognigy's currently released Extensions to install into your Cognigy.AI instance, please see the link below.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">📘</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360016409380-Extensions-Overview" target="_blank" >Extension Overview</a>
      </div>
      <div class="callout-subtext">
            Cognigy Helpcenter article
      </div>
   </div>
</blockquote>

## Source Code

If you want to develop your own Extensions and would like to see examples, visit our GitHub repository.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/Extensions" target="_blank" >Cognigy Extensions</a>
      </div>
      <div class="callout-subtext">
            Reference to Cognigy repository on GitHub
      </div>
   </div>
</blockquote>

## Get Started

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">📘</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360016534459-Get-Started" target="_blank" >Get Started</a>
      </div>
      <div class="callout-subtext">
            Cognigy Helpcenter article
      </div>
   </div>
</blockquote>


???+ info "Where are Custom Modules?"
    Extensions are the successor to the Cognigy Integration Framework Custom Modules and replace them completely.

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.1.6-blue.svg)](https://shields.io/)

## Extension Performance
<div class="divider"></div>
Cognigy.AI considers the code within an extension to be "un-trusted", meaning that the code will be executed in a secure and additional hardened environment by default. There is a certain overhead in bootstrapping this secure environment per execution - hence Flow Nodes from Extensions generally execute slower than our built-in ones (e.g. our "Say"-Node).

With Cognigy.AI v4.1.6 we have introduced the ability to "trust" the code of an Extension by letting customers decide whether they want to execute the code in a secure environment or in the normal execution environment in which our own Flow Nodes run.

???+ warning "Feature availability"
    This feature is only available for our on-premise customers or dedicated SaaS customers with their own Cognigy.AI installation.

In order to enable the feature, the following additional environment variable can be used:

```
FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION=true
```

Our customers usually accomplish this, by adding the following to their "config-map_patch.yaml" in the "kubernetes" repository in which the manifest files for deployment are located:

```
- op: add
  path: /data/FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION
  value: "true"
```

Enabling the feature will not change anything automatically. Once the feature was activated, an additional API endpoint (see our RESTful API documentation) can be used in order to update the "trustedCode" property of an Extension.

???+ danger "Security considerations"
    There is a reason why Extensions and their code will be executed in the secure environment, by default! Never trust the code of an Extension without properly reviewing the code within it! Extensions can use external packages from NPM which might contain harmful code and routines - once an Extension runs in the "native context", it might be able to steal sensitive information. Please make sure that you are aware of these implications before changing the execution context.


<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.8.0-blue.svg)](https://shields.io/)

## Extension organization-wide embeddable
<div class="divider"></div>
With Cognigy.AI v4.8 we have introduced the ability for on-premise customers to embed certain extensions organization-wide.

To enable the feature, the following additional environment variable can be used to update the GitHub **config.map** file: 

```
FEATURE_ADDITIONAL_SYSTEM_WIDE_EXTENSIONS_PATH
```
<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.8.0-blue.svg)](https://shields.io/)
## Caching Extensions in local Directory
<div class="divider"></div>

As of release v4.8 Extensions can be cached in the local directory which improves the loading performance. 
The path to that cache is stored in an extensions map together with a timestamp.

When the max dir size gets exceeded by an extension, the last X extensions (currently 10 - editable via an environment variable) are getting dropped from the extensions map as well as from the local filesystem.

If required you can adjust the behavior by adding and configuring environment variables:

```
MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB
```

The default value of MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB is 512 MB.

The cache is within the [Kubernetes pod](https://kubernetes.io/docs/concepts/workloads/pods/) of service-execution. So it makes no difference if you are processing on-premises or trial, app, etc.

```
EXCEED_DIR_SIZE_AMOUNT_TO_DROP_FROM_MAP
```
## Marketplace
<div class="divider"></div>

Cognigy provides Marketplace as a tool to strengthen the usage of Extensions and to improve the developer user experience for customers using the product.

The Marketplace feature enables customers to search for tag-words like "CRM system" and then, when successful, be able with a single click to install the Extension (instead of uploading Extensions).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/391d3bc-Marketplace_5.svg" width="100%" />
</figure>

- You can install, uninstall, upload, drag, and drop Extensions from the Marketplace.

- When clicking on an Extension a sidebar panel will display details of the selected Extension:
     **Icon (avatar), name, and version**
     **Basic Information**
     **Connections**
     **Nodes **

- You can copy the URL and open it in another tab, also when reloading the page.

- You can search for Extensions using the "Search field".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/917a2b9-Marketplace_6.svg" width="100%" />
</figure>

## Dynamic Fields

Details about using dynamic fields in Flow Nodes can be found here: [Dynamic Node Fields]({{config.site_url}}ai/flow-nodes/dynamic-node-fields).