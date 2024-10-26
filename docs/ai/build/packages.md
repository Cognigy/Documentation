---
title: "Packages" 
slug: "Packages"
description: "Cognigy.AI Packages are a useful tool for exporting and importing a Project's resources, such as Flows or Lexicons, to share with other teams. The Packages allow you to transfer resources from one Project to another. When you create a Package, it automatically includes its direct dependencies. Once downloaded, it can be shared as a portable zip archive."
hidden: false 
tags:
  - Cognigy.AI
  - Packages
  - Packaging
---

# Packages

[![Version badge](https://img.shields.io/badge/Updated in-v4.68-blue.svg)](../../release-notes/4.68.md)

_Packages_ are a useful tool for exporting and importing a Project's resources, such as Flows or Lexicons, to share with other teams. The Packages allow you to transfer resources from one Project to another. When you create a Package, it automatically includes its direct dependencies. Once downloaded, it can be shared as a portable zip archive.

Compared to [Snapshots](../deploy/snapshots.md),
which export the entire Project, working with Packages provides more flexibility.
With Packages, you have control over which resources are included or excluded.

The following Project resources can be included in a Package:

- [Flows](../build/flows.md) (including Nodes and Intents)
- [Lexicons](../empower/nlu/slots-and-lexicons/lexicons.md)
- [NLU Connectors](../empower/nlu/external/nlu-connectors.md)
- [Endpoints](../deploy/endpoints/overview.md)
- [Playbooks](../test/playbooks.md)
- [Connections](../build/connections.md)
- [Knowledge Stores](../empower/knowledge-ai/overview.md#knowledge-store)

## Export Resources as a Package

You can export a single resource as a Package, or you can export many resources at once.

### Export a Resource

Export one resource as a Package using one of the following options:

=== "Via the Resource page"
     1. Go to the Cognigy.AI interface.
     2. In the left-side menu, select a section of the resource that you want to export. For example, if you want to export a Flow, select the **Flow** section.
     3. On the **Resource** page, select a specific resource from the list.
     4. On the right side of the resource, click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Export as Package**. This action will trigger the **Create Package** task in the Task Manager.
     5. Check the status of the **Create Package** task by clicking ![task-menu](../../_assets/icons/task-menu.svg) in the upper-right corner.
     6. Once the creation is complete, click the link with the file name in the task. The Package will be automatically downloaded to your computer.

=== "Via the Packages page"
     1. Go to the Cognigy.AI interface.
     2. In the left-side menu, navigate to **Settings > Packaging**.
     3. On the **Packages** page, go to the section that corresponds to your resource. For example, if you want to export a Flow, go to the Flow section. For quick searching, you can use the search bar.
     4. Select a resource from the list by activating the checkbox next to the chosen resource.
     5. Click **Next**.
     6. On the **Package Configuration** page, in the **Package Name** field, edit the existing name if necessary.
     7. Click **Export**. 
     8. Wait for the Package creation to complete. Once the process finishes, a **Download Export** link with the Package name will appear on the page.
     9. Download the Package by clicking the link with the Package name. The Package will be automatically downloaded to your computer.
     10. Click **Start Over** to return to the page with the selection of resources for export.

### Export Multiple Resources

To export multiple resources as a Package, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, navigate to **Settings > Packaging**. 
3. On the **Packages** page, select resources from the list by activating the checkboxes next to the specific resources or resource types. For example, if you want to export all existing Flows within a Project, select the **Flows** resource type. Alternatively, if you intend to export a larger set of resources, activate the checkbox next to the **Select Resources for Export** option. Then, deactivate the checkbox next to the resources you do not want to export. 
4. Click **Next**. 
5. On the **Package Configuration** page, in the **Package Name** field, edit the existing name if necessary. 
6. Click **Export**. 
7. Wait for the Package creation to complete. Once the process finishes, a **Download Export** link with the Package name will appear on the page. 
8. Download the Package by clicking the link with the Package name. The Package will be automatically downloaded to your computer. 
9. Click **Start Over** to return to the page with the selection of resources for export.

### Export All Available Resources

To export all available resources as a Package within your Project, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, navigate to **Settings > Packaging**.
3. On the **Packages** page, activate the checkbox next to the **Select Resources for Export** option. 
4. Click **Next**. 
5. On the **Package Configuration** page, in the **Package Name** field, edit the existing name if necessary. 
6. Click **Export**. 
7. Wait for the Package creation to complete. Once the process finishes, a **Download Export** link with the Package name will appear on the page. 
8. Download the Package by clicking the link with the Package name. The Package will be automatically downloaded to your computer. 
9. Click **Start Over** to return to the page with the selection of resources for export.

## Import Resources as a Package

Make sure to familiarize yourself with the essential considerations before initiating the Package import process. Once you have completed that, proceed with the import.

### Before you Import a Package

Before you import a Package, review these essential considerations:

- Ensure to verify [Package compatibility](#check-package-compatibility) before importing. Similarly to the export process, you can specify the number of resources to import. During the import, you may need to resolve conflicts if a resource from the Package duplicates an existing one. Note that the specifics of importing resources may vary. For example, for a Flow, you need to [map locales](#map-locales-during-flow-import).
- Do not use Packages for deploying Knowledge.AI resources to a production Project. AI Agents' knowledge may be temporarily unavailable during the replacement of Knowledge Stores in the import process.
- Node IDs will remain unchanged upon import to ensure that hardcoded links between Flows and Nodes are not broken. If you need to import a Flow multiple times into the same Project, you can delete and re-create a Node to prevent ID conflicts.
- If your Package contains any resources that are not supported in new Projects, they will be skipped and not imported. For example, removed Endpoints or LLMs with outdated configuration schemas will not be imported.

#### Check Package Compatibility

Packages that were created in older versions of Cognigy.AI can be imported into newer versions of the platform without any issues, and are fully supported.

However, Packages created in newer versions may not be compatible with older versions, and are not supported.

Importing a Package from a newer version into an older version of Cognigy.AI is not recommended, as it can cause unexpected errors.

### Import a Package

To import resources as a Package, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, navigate to **Settings > Packaging**.
3. On the **Packages** page, go to the **Drop a Package here to Import or Browse File** section.
4. From your folder on your computer, select the Package that you exported earlier, then drag it into the gray section. Alternatively, click the **Browse File** button and select the Package from your folder on your computer. 
5. Wait for the Package to load.
6. In the **Resources to be imported** section, select the resources that you want to import. At this step, you may need to [resolve a conflict](#resolve-conflicts) if the Package contains resources that match the names of resources in the Project into which you are importing the new Package. If you are importing a Package with Flows, you will also need to [map the Locales](#map-locales-during-flow-import).
7. Click **Export**. 
8. When the Package import is complete, click **Start Over**.

### Resolve Conflicts

To resolve conflicts that occur during the importing Package, use the following conflict strategies:

1. Go to the **Conflict Management** section.
2. From the **Duplicate handling for all resources**, select one of the following strategies:
    - **Import as a copy** — the uploaded resource will be imported as a duplicate. The original resource in the Project will remain unaffected, and the imported copy will be added separately. This approach is useful when you want to keep both the original and the imported versions. Note if you import a Knowledge Store, it cannot be imported as a copy. Imported Stores will replace the current version.
    - **Replace existing resource** — the uploaded resource will overwrite the existing one. This approach is useful when you want to update an existing resource with a newer version.
3. Click **Apply**. The selected strategy will be applied to all existing resources in the **Resources to be imported** section. 
4. _(Optional)_ If you want to change the strategy for a specific resource, select this strategy from the list next to the resource.
5. _(Optional)_ If you want to exclude a resource from the list, deactivate the checkbox next to the resource.
6. Click **Import**. The strategy will be applied only to the resources you have selected for import.

### Map Locales during Flow Import

Locales as separate resources are not imported along with the Flow.
However, the localized content, such as Node configurations,
default replies, and Intent sentences, is included in the import process.

Locales from the Package can be mapped to the Project's Locales into which the import occurs.
This means that the Locales of the Project into which you import will overwrite the Locales from your Package.
In this case, we recommend the following strategy: In the Project where the import occurs, manually create Locales in advance, similar to the Locales in the Package, and map them to the Locales from the Package.

The Primary Locales must be mapped. You can choose not to import the remaining Locales.

Starting from version 4.67, you can map any Locale from the Package to the Primary Locale of the Project into which the Package is being imported.

If you link a Non-Primary Locale from the Package to the Primary Locale of the existing Project, and the Non-Primary Locale does not have a complete configuration, the system will copy the missing settings from the Primary Locale of the Package.

## FAQ

**Q1**: What should I do if I encounter errors during Knowledge Store Import?

**A1**: Try to upload the Package again. During the reupload, select only the Knowledge Stores that were not fully imported.

**Q2:** How can I avoid browser request timeouts during Knowledge Store Package upload?

**A2:** To avoid browser request timeouts, keep the Package size low. Separate your resources into smaller Packages.

## More Information

- [Localization](translation-and-localization/localization.md)