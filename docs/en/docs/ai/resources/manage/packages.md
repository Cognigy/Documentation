---
title: "Packages" 
slug: "packages" 
hidden: false 
---

# Packages

[![Version badge](https://img.shields.io/badge/Updated in-v4.67-blue.svg)](../../../release-notes/4.67.md)

_Packages_ allow the export and import of individual resources, such as Flows or Lexicons, for the purpose of sharing these assets with other teams. Packages automatically include their direct dependencies and can be shared as a portable zip archive once downloaded.

You can either create a Package for a single resource or for multiple resources.

The following agent resources can be included in a Package:

- [Flows](../build/flows.md)
- [Lexicons](../build/lexicons.md)
- [NLU Connectors](../build/nlu-connectors.md)
- [Endpoints](../../endpoints/overview.md)
- [Playbooks](../test/playbooks.md)
- [Connections](../build/connections.md)

## Export Resources as a Package

You can export a single resource as a package, or you can export many resources at once.

### Export a Resource

Export one resource as a package using one of the following options:

=== "Via a Resource page"
     1. Go to the Cognigy.AI interface.
     2. In the left-side menu, select a section of the resource that you want to export. For example, if you want to export a Flow, select the **Flow** section.
     3. On the **Resource** page, select a specific resource from the list.
     4. On the right side of the resource, click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Export as package**. This action will trigger the **Create package** task in the Task Manager.
     5. Check the status of the **Create package** task by clicking ![task-menu](../../../assets/icons/task-menu.svg) in the upper-right corner.
     6. Once the creation is complete, click the link with the file name in the task. The package will be automatically downloaded to your computer.

=== "Via a Packages page"
     1. Go to the Cognigy.AI interface.
     2. In the left-side menu, navigate to **Settings > Packaging**.
     3. On the **Packages** page, go to the section that corresponds to your resource. For example, if you want to export a Flow, go to the Flow section. For quick searching, you can use the search bar.
     4. Select a resource from the list by activating the checkbox next to the chosen resource.
     5. Click **Next**.
     6. On the **Package Configuration** page, in the **Package Name** field, edit the existing name or leave it as is.
     7. Click **Export**. 
     8. Wait for the package creation to complete. Once the process finishes, a **Download Export** link with the package name will appear on the page.
     9. Download the package by clicking the link with the package name. The package will be automatically downloaded to your computer.
     10. Click **Start Over** to return to the page with the selection of resources for export.

### Export Multiple Resources

To export multiple resources as a package, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, navigate to **Settings > Packaging**. 
3. On the **Packages** page, select resources from the list by activating the checkboxes next to the specific resources or resource types. For example, if you want to export all existing flows within an agent, choose the Flows resource type. Alternatively, if you intend to export a larger set of resources, activate the checkbox next to the Select Resources for Export option. Then, deactivate the checkbox next to the resources you do not want to export. 
4. Click **Next**. 
5. On the **Package Configuration** page, in the **Package Name** field, edit the existing name or leave it as is. 
6. Click **Export**. 
7. Wait for the package creation to complete. Once the process finishes, a **Download Export** link with the package name will appear on the page. 
8. Download the package by clicking the link with the package name. The package will be automatically downloaded to your computer. 
9. Click **Start Over** to return to the page with the selection of resources for export.

### Export All Available Resources

To export all Available Resources as a package within your Agent, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, navigate to **Settings > Packaging**.
3. On the **Packages** page, activate the checkbox next to the **Select Resources for Export** option. 
4. Click **Next**. 
5. On the **Package Configuration** page, in the **Package Name** field, edit the existing name or leave it as is. 
6. Click **Export**. 
7. Wait for the package creation to complete. Once the process finishes, a **Download Export** link with the package name will appear on the page. 
8. Download the package by clicking the link with the package name. The package will be automatically downloaded to your computer. 
9. Click **Start Over** to return to the page with the selection of resources for export.

## Import Resources as a Package

!!! warning "Using Packages as Templates: Node IDs and Importing Packages"
    Node IDs will not change upon import to ensure that hardcoded links between Flows and Nodes do not break. If you need to import a Flow multiple times into the same Project, you can delete and recreate a Node to prevent ID conflicts.

### Check Package Compatibility on Import

Packages that were created in older versions of Cognigy.AI can be imported into newer versions of the platform without any issues, and are fully supported.

However, Packages created in newer versions may not be compatible with older versions, and are not supported.

Importing a Package from a newer version into an older version of Cognigy.AI is not recommended, as it can cause unexpected errors.

### Import a Package

To import resources as a package, follow these steps:

1. Go to the Cognigy.AI interface.
2. In the left-side menu, navigate to **Settings > Packaging**.
3. On the **Packages** page, go to the **Drop a Package here to Import or Browse File** section.
4. From your folder on your computer, select the package that you exported earlier, then drag it into the gray section. Alternatively, click the **Browse File** button and select the package from your working folder on your computer. 
5. Wait for the package to load.
6. In the **Resources to be imported** section, select the resources that you want to import. At this step, you may need to resolve a conflict if the package contains resources that match the names of resources in the agent into which you are importing the new package. If you are importing a package with Flows, you will also need to map the locales.
7. Click **Export**. 
8. When the package import is complete, click **Start Over**.

### Resolve Conflicts

To resolve conficts that occur during the importing package, use the following conflict strategies:

1. Go to the **Conflict Management** section.
2. From the **Duplicate handling for all resources**, select one of the following strategies:
    - Import as a copy — the uploaded resource will be imported as a duplicate. The original resource in the Agent will remain unaffected, and the imported copy will be added separately. This approach is useful when you want to keep both the original and the imported versions.
    - Replace existing resource — the uploaded resource will overwrite the existing one. This approach is useful when you want to update an existing resource with a newer version.
3. Click **Apply**. The selected strategy will be applied to all existing resources in the **Resources to be imported** section. 
4. _(Optional)_ If you want to change the strategy for a specific resource, select this strategy from the list next to the resource.
5. _(Optional)_ If you want to exclude a resource from the list, deactivate the checkbox next to the resource.
6. Click **Import**. The strategy will be applied only to the resources you have selected for import.

### Map Locales on Flow Import

Locales are not imported together with the Flow.
Locales from the package can be mapped to the Agent's locales into which the import occurs.
This means that the locales of the Agent into which you import will overwrite the locales from your package.

There are two recommended strategies:

- In the Agent where the import occurs, manually create locales in advance, similar to the locales in the package, and map them to the locales from the package.
- In the Agent where the import occurs, manually create locales in advance, similar to the locales in the package. Map only the primary locale and do not import the others.
 
 The Primary Locale must be mapped to a Locale in the Agent. If you have a Secondary Locale in the Agent, you can choose to map any Locale from the Package to a Primary or Secondary Locale of the Agent, however you cannot map the Primary Locale to more than one Locale.
