---
 title: "Packages" 
 slug: "packages" 
 hidden: false 
---
# Packages

[![Version badge](https://img.shields.io/badge/Added in-v4.5.0-blue.svg)]({{config.site_url}})

## Introduction

<div class="divider"></div>

Packages allow you to export and import individual resources like Flows or Lexicons in order to share those assets with other teams. Packages automatically contain their direct dependencies and can be shared as a portable zip archive once downloaded. 

You either can create a Package for a single resource, or multiple resources.

Resources are for example Flows, Endpoints, Intents, Lexicons, Playbooks, Connections, NLU Connectors,…

!!! note "What resources can be Exported in a Package?"
    The following agent resources can be included in a Package:

    * [Flows]({{config.site_url}}ai/resources/build/flows/) 
    * [Lexicons]({{config.site_url}}ai/resources/build/lexicons/)
    * [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/) 
    * [Endpoints]({{config.site_url}}ai/endpoints/overview/)
    * [Playbooks]({{config.site_url}}ai/resources/test/playbooks/)

## Creating Packages with a single Resource

<div class="divider"></div>

To create a Package from a single resource, navigate to a resource list, e.g. "Flows", click the "secondary menu button" on the right side of the item, then click "Export as package" in the menu.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/ffebcd4-Create_Package.png" width="100%" />
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/2bb52a7-Success.png" width="100%" />
</figure>


This will start a "create package" task, and you will be notified the Package has been created. Once the task finished, you can download the Package by clicking the link in the task menu. Clicking the link will open a file-save dialog in your browser - select a location in order to start the download.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/f333cc6-Download_Package.png" width="100%" />
</figure>

## Creating Packages with multiple Resources

<div class="divider"></div>

Besides exporting or importing single resources in Packages, you can also export multiple resources at the same time. Navigate to "Packaging" in the "Management" section of the agent sidebar. This will open our packaging tool.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/526012a-Import-Export_page.png" width="100%" />
</figure>

Here you can start Exporting or Importing a Package.

[![Version badge](https://img.shields.io/badge/Added in-v4.5.0-blue.svg)]({{config.site_url}})

### Export
As of Release v4.5.0, you can select one / many / all resources by activating the corresponding checkboxes for each resource via click. Then set the name, create the package, and start the download. You can also use our search capability to quickly identify and search for the resource you want to export.


### Import
Similar to the export, the import of Packages is straightforward. Simply drag&drop a Package on the area at the top of the packaging tool or use the file selection functionality. Your package will be uploaded and processed by Cognigy.AI. Once analyzed, the packaging tool will display the contents of the package, and you can go forward and import them.


[![Version badge](https://img.shields.io/badge/Added in-v4.5.0-blue.svg)]({{config.site_url}})

## Package Compatibility
<div class="divider"></div>

Packages created in older versions of Cognigy.AI can be imported into newer versions of itself, and is fully supported.

However Packages created in newer versions of Cognigy.AI may not work with older versions, and is not supported.

Importing a Package from a newer version into an older version of Cognigy.AI is not recommended, as it can cause unexpected errors.

## Importing Packages Created Prior v4.0.0
[![Version badge](https://img.shields.io/badge/Added in-v4.26.0-blue.svg)]({{config.site_url}})

Packages created before v4.0.0 may contain special characters not allowed in the current version. 
In order to allow their importation, those characters will be removed, and in case this causes a name duplication
an index iterator will be added.

For example:

  * old package (prior v4.0.0)
    * intentName>2
    * intentName<2
  * current version
    * intentName 2
    * intentName 2 (2)

## Import Configuration

As of v4.5.0, importing a Package will show you conflict resolution options in case e.g. name conflicts occur. You can either select a conflict resolution strategy for the complete import or per resource.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/0af1303-Import_Configuration.png" width="100%" />
</figure>

## Locale Mapping

If the Package contains a Flow for import, you will need to provide a Locale Mapping for each Locale from the Package. You can decide between mapping a Package Locale to an Agent Locale or not import it. However, it is mandatory to map the Primary Locale from the Package to the Primary Locale of the Agent.


## Conflict Management

In case your Agent already contains the Resources from the Package, you will need to decide how Cognigy.AI should handle the duplicates. You can either select a conflict resolution method for all resources or for each resource independently. Currently, we support importing a resource "as a copy" or by "replacing" the existing version.

Once you have selected a conflict resolution strategy, click on **"Import"** in order to start the Package import.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/7478741-Conflict_Import_handling.png" width="100%" />
</figure>

!!! warning "Using Packages As Templates: Node IDs and Importing Packages"
    Node IDs will not change on import, to ensure that hardcoded links between Flows and Nodes do not break.
    If you need to import a Flow multiple times to the same Project, you can delete and recreate a Node to prevent ID conflicts.