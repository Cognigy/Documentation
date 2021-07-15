# Cognigy Documentation Migration Specs
 
### Responsible developers 
- Egle Helms 
- Adel Hanifa 
- Willi Steinheuser 
- Sisir Madanu 
 
## Overview 

This page contains a full description of the Cognigy Documentation migration from Readme.io to MKDocs. This migration will improve the workflow of the technical writers, enable localization of the documentation website, ease versioning issues, enable external suggestions to documentation from users with a GitHub account.  

## Background 

Readme.io is a documentation solution that makes it complicated to control the growing documentation of Cognigy will needs a different setup regarding localization and different products. Also, the template wastes space on the webpage. 

 ## Goals / Acceptance criteria 

**Milestone 1 - Migrate a small section of Cognigy.AI docs to the Documentation repository.** 

- As a customer, I want the documentation page to be easy to understand/navigate, not waste space
- As a customer, I want to be able to change the language of the website/content 
- As a customer, I want to be able to make suggestions to the documentation 
- As a customer, I want to easily find the documentation of the software version I am using 
- As a technical writer, I want it to be easy to create/edit documentation pages 

**Milestone 2 - Build a build pipeline using Azure Pipelines which can build and deploy the state into a Kubernetes cluster.**

- As a technical writer, I want to publish content with pull requests and easily build the updated pages. 
(Not clear, if possible)
- As a technical writer, I want to be able to make changes to multiple versions at once 

**Milestone 3 - Deal with re-directs so "old" links can be transparently redirected (302 Moved permanently) to the new links.**

- As a customer, I want all links I used to use still to be reachable 
- As a Support team member, I want all docs links to be the same for the Knowledge base articles 

**Milestone 4 - Migrate the whole content and test.**

- As a user, I want to have full Cognigy documentation available and comfortable to use. 

## Details 

### TASK: Setup MKdocs pages 

* Wireframe of the page - (consider localization/versioning and customization, different products, links to help center, the possibility of contributing to the documentation) 
* Yml doc setup (meta data etc - https://ibm.github.io/workshop-setup/MKDOCS/ ) https://www.mkdocs.org/user-guide/configuration/  
* Folder structure creation (consider localization/versioning and customization, different products) https://squidfunk.github.io/mkdocs-material/customization/#setup-and-theme-structure 
* Customization of the template: [Mockups](https://cognigy-my.sharepoint.com/:p:/p/e_helms/ERmzmCBm6yRCvzeoO2lWWXgBVDmxG63AN8B0bemyePyg-w?e=ocrF9x)
	* Basic - YML doc 
	* Deep - extra CSS 
* Markdown extensions needed for the theme: https://squidfunk.github.io/mkdocs-material/reference/abbreviations/ Formatting options: https://www.mkdocs.org/user-guide/configuration/  

### TASK: Readme.io content transformation to MKDocs 

* Export markdown files from ReadMe.io 
* Run scripts to convert to normal MD files (https://github.com/phantombuster/readme.io-to-markdown)  
* Image migration/storage to MKDocs 
 
### TASK: Localization setup 

* Localization of the template – MK Docs integrated languages 
* Integrate translations of the theme into MKDocs Cognigy (https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language) - Consider using a Unicode-aware slug function 
* Localization of the content 
* Set up at least one translation directory - Consider: Separation of languages to single MKDocs instances (because of bandwidth) 

### TASK: Content carry over 

* Carrying over the installation docs from pdf to markdown 
* Carrying overall content from CDocs in ReadMe.io 

### TASK: SEO & Redirecting links 

* Redirect prototype creation (link structure e.g. /ai/en/intents) Azure reverse proxy 
* Create a list/map of links to redirect (maybe with site crawl) add priority (best ranking pages) 
* Set up redirects according to priority (1:1 redirect, no loops, no chains) 
* Testing redirects, crawling for 404 

### TASK: Publication pipeline build 

* Deploy containerized Documentation website 

### TASK: Cross-checking and updating the pages that were updated since the start of the migration 

### TASK: Testing 

* Links and content on the website 
* Redirects 
* Workflow for the Technical writer 
* Publishing pipeline 
* Suggesting edits 
 
### TASK: Manual/documentation to use 

## Out of Scope 
Legacy documentation – disabled sections 
Versions until 3.6

## Timeline

Estimated completion of the project: max 10 weeks
[Calculations](https://cognigy-my.sharepoint.com/:w:/p/e_helms/EVVQbFjLDJFAp1N2Idy2Jl8BiJxcayCFH2MUqDWIiLzigQ?e=KAX8xD)
