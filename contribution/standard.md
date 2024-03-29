# How to write Cognigy Docs?
<div class="divider"></div>

## Running Cognigy documentation 
**Requirements:**

  - docker
  - VS Code

### On for all OS systems
**Steps to start:**
  1. Clone repository from Documentation [repo on Azure DevOps](https://docs.docker.com/engine/install/ubuntu/) with SSH authentication
  2. Run command ```docker run --rm -it -p 8008:8008 -v ${PWD}:/app/ cognigydevelopment.azurecr.io/documentation-live:1 python ./scripts/docs.py live```
  3. The documentation will be accessible via http://0.0.0.0:8008

#### Logging in to Azure
Run command: 
- docker login cognigydevelopment.azurecr.io
- enter your user name, e.g. ehelms for Egle Helms
- enter your token provided by Azure registry manager of Cognigy (Benjamin Mayr)
<div class="divider"></div>

## Working on the Documentation repository
**Steps for starting working on new feature**

  1. Create a working branch for your work, e.g. for a new feature: ```git checkout -b feature/0-name-of-feature```
  2. Make changes to the repository
  3. Add files and folders to GIT, e.g. to add all files ```git add .```
  4. Commit files to GIT ```git commit -m "Meaningful commit message"```
  5. Push changes to your branch in GIT ```git push origin feature/0-name-of-feature```
  6. Go to [repository on Azure DevOps](https://cognigy.visualstudio.com/Documentation/_git/documentation) and click on "make a Pull Request"
  7. Fill in the "Pull Request form" with a good Subject name and as much detail as possible about the changes you made and assign at least one Reviewer and a AzureDevOps Work item.

<div class="divider"></div>


## Structure of the repository
See below the sample of the file tree for the Documentation explaining the structure logic.

```
docs/                         # main containing files available for changes
┗ en/                         # English translation directory
  ┣ docs/                     # Main directory for English translation - Products level
┃ ┣ index.md                  # Main Documentation landing page
┃ ┃ ┣ ai/                     # Product directory
┃ ┃ ┃ platform-overview.md     # Landing page for AI Section                            
┃ ┃ ┃ ┣ developer-guides/     # Section directory
┃ ┃ ┃ ┃ ┣ images/             # Images of the section
┃ ┃ ┃ ┃ ┣ api-reference.md    # .md files for the section
┃ ┃ ┃ ┣ endpoints/            # Another section for AI product
┃ ┃ ┃ ┃ ┣ images/             # images for the "Endpoint" section
┃ ┃ ┃ ┃ ┣ transformers/       # subsection for "Endpoints"
┃ ┃ ┣ assets/                 # Assets folder where theme files are stored
┃ ┃ ┃ ┣ css/                  # Directory where custom styling served from
┃ ┃ ┃ ┃ ┣ extra.css
┃ ┃ ┃ ┣ img/                  # Where Theme images are served from, e.g. logos, favicons etc.
┃ ┃ ┃ ┃ ┣ AI-black.svg
┃ ┃ ┃ ┗ js/                   # Directory where custom JavaScript served from
┃ ┃ ┃   ┣ custom.js
┃ ┃ ┣ insights/               # Another product 
┃ ┃ ┃ ┗ index.md              # Landing page for Insights product
┃ ┃ ┗ usage-doc.md
  ┣ overrides/                # custom Theme files
┃ ┃ ┗ .gitignore              
  ┗ mkdocs.yml                # Main configuration file for the Documentation
```

### Adding new sections and pages

**Steps to follow**

1. Following the example of the file tree above add the directories and files to the Documentation.
2. Then add the Section names and paths to your files as in the example below and save the document to see it in the live version of the Documentation right a way.

```
  - NLU:                                      # Section name
    - index.md                                # Page that will appear while clicking on NLU Section
    - NLU Overview:                           # Subsection name (optional)
      - ai/nlu/overview.md                    # Page that will appear while clicking on NLU Overview section
      - ai/nlu/nlu-overview/ml-intents.md     # Another page under the NLU Overview section
```

### Naming the files
Naming files in short, yet descriptive names is very important, since the link slugs depend on these file names. Do not use any capital letters. We use "-" for separating the words in the file name.

Example of a good name for .md file - e.g. "add-to-context"
Example of a bad name for .md file - e.g. "addToContext-1"

Example of a good name for an image - e.g. "0-agent-dashboard"
Example of a bad name for an image - e.g. "Screenshot-2021-06-04-1254566"

### Adding meta data yo Markdown files

Meta data is an important part of the Search Engine Optimization (SEO), thus it is really important to set it at the beginning of every Markdown file, especially for the pages we want to be easily/best listed in the results fot he search engines.

<figure>
  <assets/img class="image-center" src="./docs/en/docs/assets/img/metadata-add.png" width="100%" />
</figure>

Meta data template to add in the very beginning of your new .md page:
`````
---
title: "Page title"
slug: "slug"
hidden: false
metadata: 
  title: "Page title"
  description: "Page description"
---
`````
<div class="divider"></div>

## Adding images to pages
### Image storage

 All images are stored directly in the repository. Every "Section" will have an "images" directory that stores images from all .md files of that section.

 **Example of Developer Guides Section image storage:**

 <figure>
  <img class="image-center" src="./docs/en/docs/assets/img/Dev_guide_images.png" width="100%" />
</figure>

## Image standard
All images should be:

  1. in .png format
  2. should be taken with the best resolution possible
  3. should be stores in a directory of the "images" of the relevant section
  4. should be named in small-cap letters, "-" used as a separator and the names should be meaningful to make the search of the image easy

  Examples:
  Good image name: "snapshot-upload-button"
  Bad image names: "snap1", "snapshot_button123"

### Adding an image to the .md file

<figure>
  <img class="image-center" src="./docs/en/docs/assets/img/logo_prod.jpeg" width="30%" />
  <figcaption>Image caption</figcaption>
</figure>

`````
<figure>
  <assets/img class="image-center" src="{{config.site_url}}assets/img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>
`````

!!! note "Image without any caption"
    Remove ````<figcaption>Image caption</figcaption>```` from the image reference in HTML to have an image without any caption.

### Image positioning

To position the image change ```class="image-center"``` in the image reference to these classes:

  1. ```class="image-center"```
  2. ```class="image-right"```
  3. remove completely to position it on the left

### Image sizing

```width="50%"``` Is the part of the HTML code that controls the size of the image in the page. Use percentage to asjust to the correct proportion.
Example: 30%, 50%, 100%

## Defining links 
All links have to have a variable config.site_url for easy localization. When adding links to any Markdown file, make sure to use this variable.
**Example of the variable usage:**
`````
"{{config.site_url}}assets/img/logo_prod.jpeg"
`````
## Additional styling 

The "en/docs" directory contains a "css/extra.css" file that can be used to add additional classes to be used in the HTML snippets in the Markdown files.

**Example of adding a class into the extra.css file:**
`````
/* image */        # best to make a comment for what this styling is for
.image-center {    # make a new class
  margin: auto;    # apply css rules
}
`````

**Example of using the class in the Markdown file**
`````
<figure>
  <img class="image-center" src="assets/img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>
`````
You can combine multiple classes by separating them with spaces ```class="image-center crop"```
## Docs Translations
**Steps to make a new translation for the Documentation**

  - Make a copy of the en directory and rename it to another language abbreviation (e.g. de, ru, ja, fr)
  - Modify the YML file located in the directory of the specific language
  - Add the language to the Language changer drop down by adding the language to the "alternate" section of YML file

<figure>
  <img class="image-center" src="./docs/en/docs/assets/img/alternate language.png" width="100%" />
</figure>

  - Change the language of the template language abbreviations and [languages available for MKDocs material template](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language)

<figure>
  <img class="image-center" src="./docs/en/docs/assets/img/localizing_nav_sections.png" width="100%" />
</figure>

  - Localize the Section names in the "nav" section of the YML file
<figure>
  <img class="image-center" src="./docs/en/docs/assets/img/template language.png" width="100%" />
</figure>

!!! warning "Make sure to:"
    - Have H1 (#) heading in every document
    - Not rename markdown files
    - Adjust meta data in the beginning of the Markdown file

## Markdown cheat sheet
Markdown syntax usage documentation.
Be aware, that Markdown files accept HTML code, thus this opens possibilities to lots of customization. 
More information here: [MKDocs Material theme documentation](https://squidfunk.github.io/mkdocs-material/reference/abbreviations/)
### Basics
See more under this link: [ https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)
### Complex Lists
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/lists/](https://squidfunk.github.io/mkdocs-material/reference/lists/)
### Code snippets
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/code-blocks/](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/)
### Admonitions
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#usage)

TYPES: quote, cite, example, bug, danger, error. failure, fail, missing, warning, caution, attention, question, help, faq, success, check, done
tip, hint, important, info, todo, note

### Tables
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/data-tables/](https://squidfunk.github.io/mkdocs-material/reference/data-tables/)
```
| Method   | Description     |
| -------- | ----------------|
| GET      | Fetch resource  |
| PUT      | Update resource |
| DELETE   | Delete resource |
```
### Alignment example
```
| :---------- | :----------------------------------- |   - LEFT ALIGNMENT
| :---------: | :----------------------------------: |   - CENTER ALIGNMENT
| ----------: | -----------------------------------: |   - RIGHT ALIGNMENT
```
### Images
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/images/](https://squidfunk.github.io/mkdocs-material/reference/images/)
### Abbreviations 
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/abbreviations/#snippets ](https://squidfunk.github.io/mkdocs-material/reference/abbreviations/#snippets )

### Formatting
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/formatting/#smartsymbols](https://squidfunk.github.io/mkdocs-material/reference/formatting/#smartsymbols)

### Content tabs
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/content-tabs/#linking-content-tabs](https://squidfunk.github.io/mkdocs-material/reference/content-tabs/#linking-content-tabs)

### Buttons
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/buttons/](https://squidfunk.github.io/mkdocs-material/reference/buttons/)

### Footnotes
See more under this link: [https://squidfunk.github.io/mkdocs-material/reference/footnotes/#adding-footnote-references](https://squidfunk.github.io/mkdocs-material/reference/footnotes/#adding-footnote-references)

## Standard structure sections for a new product documentation

  1. Landing page for the product
  2. Release notes
  3. Getting started
  4. Installation
  5. Other sections