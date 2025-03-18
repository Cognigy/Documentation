---
title: "Packages" 
slug: "Packages"
description: "Cognigy.AI Packages are a useful tool for exporting and importing a Project's resources, such as Flows or Lexicons, to share with other teams. The Packages allow you to transfer resources from one Project to another. When you create a Package, it automatically includes its direct dependencies. Once downloaded, it can be shared as a ZIP file."
hidden: false 
tags:
  - Cognigy.AI
  - Packages
  - Packaging
---

# Packages

[![Version badge](https://img.shields.io/badge/Updated in-v4.97-blue.svg)](../../release-notes/4.97.md)

_Packages_ are a useful tool for exporting and importing Project resources, such as Flows or Lexicons, to share with other teams. With Packages, you can transfer resources from one Project to another. When you create a Package, it automatically includes its direct dependencies. Once a Package has been downloaded, you can share it as a ZIP file.

Compared to [Snapshots](../deploy/snapshots.md), working with Packages provides more flexibility. With Packages, you have control over which resources you import and export.

Packages can include the following Project resources:

- [Flows](../build/flows/overview.md) (including Nodes and Intents)
- [Lexicons](../empower/nlu/slots-and-lexicons/lexicons.md)
- [NLU Connectors](../empower/nlu/external/nlu-connectors.md)
- [Endpoints](../deploy/endpoints/overview.md)
- [Playbooks](../test/playbooks.md)
- [Connections](../build/connections.md)
- [Knowledge Stores](../empower/knowledge-ai/overview.md#knowledge-store)

## Restrictions

- Importing Packages from a newer version of Cognigy.AI into an older version may cause unexpected errors.
- Cognigy.AI skips unsupported resources while importing a Package. For example, deprecated Endpoints or LLMs with outdated configuration schemas.
- If you export a Package from a Project with [Extensions](extensions.md), you must install the respective Extensions in the target Project as well before importing the Package.

## Working with Packages

=== "GUI"
     You can export and import Packages in **Manage > Packaging**. You can also export a resource as a Package from the respective resource page by selecting ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) **> Export as Package**.

=== "API"
     You can view, create, and delete Packages using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#tag--Packages) as well as download and upload them.

!!! warning "Package Import"

     - During the import, you may need to [resolve conflicts](#resolve-import-conflicts) if the Package contains a duplicate of a Project resource.
     - Don't import Packages for deploying Knowledge.AI resources in a production Project. AI Agents' knowledge may be temporarily unavailable during the import.
     - Node IDs remain unchanged during the import to ensure that hardcoded links between Flows and Nodes don't break. If you need to import a Flow multiple times into a Project, delete and re-create the Nodes before importing the Package to prevent Node ID conflicts.

### Map Locales Before Importing Flows

Locales aren't imported with the Flow. However, you can include the localized content in the import process by mapping the Locales.

??? info "Map Locales"
     Before importing the Flow, create the necessary Locales in the target Project and then import the Package. You can map the Locales during the import. The localized content from the Package overwrites the Project content if you replace the Flow.

     For version 4.67 and later, you can map any Locale from the Package to the target Project's primary Locale.

     If you map a non-primary Locale from the Package with incomplete localized content to the Project's primary Locale, Cognigy.AI copies the missing content from the Package's primary Locale.

### Resolve Import Conflicts

You can resolve conflicts in the **Conflict Management** section that appears during the import.

??? info "FAQ"

    **Q1**: What should I do if I encounter errors during Knowledge Store Import?

    **A1**: Try to upload the Package again. During the reupload, select only the Knowledge Stores that were not fully imported.

    **Q2:** How can I avoid browser request timeouts during Knowledge Store Package upload?

    **A2:** To avoid browser request timeouts, keep the Package size low. Separate your resources into smaller Packages.

## More Information

- [Localization](translation-and-localization/localization.md)