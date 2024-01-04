---
title: "Packages" 
slug: "packages" 
hidden: false 
---

# Packages

_Packages_ allow the export and import of individual resources, such as Flows or Lexicons, for the purpose of sharing these assets with other teams. Packages automatically include their direct dependencies and can be shared as a portable zip archive once downloaded.

You can either create a Package for a single resource or for multiple resources.

The following agent resources can be included in a Package:

- [Flows](../build/flows.md)
- [Intents](../../nlu/nlu-overview/overview.md#intents)
- [Lexicons](../build/lexicons.md)
- [NLU Connectors](../build/nlu-connectors.md)
- [Endpoints](../../endpoints/overview.md)
- [Playbooks](../test/playbooks.md)
- [Connections](../build/connections.md)

## Create Packages with a single Resource

To create a Package from a single resource, navigate to a resource list, e.g. **Flows**, click the **secondary menu button** on the right side of the item, then click **Export as package** in the menu.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Create_Package.png" width="80%" />
</figure>

This will start a **create package** task, and you will be notified the Package has been created. Once the task finished, you can download the Package by clicking the link in the task menu. Clicking the link will open a file-save dialog in your browser - select a location in order to start the download.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Download_Package.png" width="80%" />
</figure>

## Create Packages with multiple Resources

Besides exporting or importing single resources in Packages, you can also export multiple resources at the same time. Navigate to **Packaging** in the **Management** section of the Agent sidebar. This will open our packaging tool.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Import-Export_page.png" width="80%" />
</figure>

Here you can start Exporting or Importing a Package.

### Export
As of Release v4.5.0, you can select one / many / all resources by activating the corresponding checkboxes for each resource via click. Then set the name, create the package, and start the download. You can also use our search capability to quickly identify and search for the resource you want to export.

### Import
Similar to the export, the import of Packages is straightforward. Simply drag&drop a Package on the area at the top of the packaging tool or use the file selection functionality. Your package will be uploaded and processed by Cognigy.AI. Once analyzed, the packaging tool will display the contents of the package, and you can go forward and import them.

## Package Compatibility

Packages that were created in older versions of Cognigy.AI can be imported into newer versions of the platform without any issues, and are fully supported.

However, Packages created in newer versions may not be compatible with older versions, and are not supported.

Importing a Package from a newer version into an older version of Cognigy.AI is not recommended, as it can cause unexpected errors.

## Import Packages Created Prior v4.0.0

Packages created before v4.0.0 may contain special characters not allowed in the current version. 
In order to allow their importation, those characters will be removed, and in case this causes a name duplication an index iterator will be added.

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
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Import_Configuration.png" width="80%" />
</figure>

## Locale Mapping

If the Package contains a Flow for import, you will need to provide a Locale Mapping for each Locale from the Package. You can decide between mapping a Package Locale to an Agent Locale or not import it. The Primary Locale must be mapped to a Locale in the Agent. If you have a Secondary Locale in the Agent, you can choose to map any Locale from the Package to a Primary or Secondary Locale of the Agent, however you cannot map the Primary Locale to more than one Locale.

## Conflict Management

In case your Agent already contains the Resources from the Package, you will need to decide how Cognigy.AI should handle the duplicates. You can either select a conflict resolution method for all resources or for each resource independently. Currently, we support importing a resource **as a copy** or by **replacing** the existing version.

Once you have selected a conflict resolution strategy, click on **Import** in order to start the Package import.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Conflict_Import_handling.png" width="80%" />
</figure>

!!! warning "Using Packages As Templates: Node IDs and Importing Packages"
    Node IDs will not change on import, to ensure that hardcoded links between Flows and Nodes do not break.
    If you need to import a Flow multiple times to the same Project, you can delete and recreate a Node to prevent ID conflicts.