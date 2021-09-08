# How to write Cognigy Docs?

Clone repository from Documentation [repo on Azure DevOps](https://cognigy.visualstudio.com/Documentation/_git/documentation) with SSH authentication.
Find here on how to do [SSH authentication on Ubuntu Linux](https://www.thomas-krenn.com/en/wiki/SSH_public_key_authentication_under_Ubuntu).

<div class="divider"></div>
## Running Cognigy documentation on your PC

**Requirements:**

* python3 3.8.10
* typer 0.3.2
* mkdocs 1.2.2
* mkdocs-material 7.2.1
* mkdocs-macros-plugin
* mkdocs-section-index

### Commands to deploy
cd into documentation directory and run command **pip install -r requirements.txt**

Commands to run MKdocs:

- See live view for EN version: **python3 ./scripts/docs.py live**
- Build all languages: **python3 ./scripts/docs.py build-all**
- Build one language: **python3 ./scripts/docs.py build de**
- Serve the site for testing all languages **python3 ./scripts/docs.py serve**

<div class="divider"></div>
## Publishing pipeline

## Pulling/Pushing changes to the repository

<div class="divider"></div>
## Creating a new page

### New .md file location in the directory tree

### Adding page to navigation in YML file

### Naming the files

### Adding meta data yo Markdown files

Meta data is an important part of the Search Engine Optimization (SEO), thus it is really important to set it in the beggining of every Markdown file, especially for the pages we want to be easily/best listed in the results fot he search engines.

<figure>
  <img class="image-center" src="{{config.site_url}}img/metadata-add.png" width="100%" />
</figure>

Meta data template to add in the very bedinning of your new .md page:
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

 All images are stored directly in the repository. Every section will have an image directory that stores images from all files of that section.

 **Example of Developer Guides Section image storage:**
 <figure>
  <img class="image-center" src="{{config.site_url}}img/Dev_guide_images.png" width="100%" />
</figure>

### Image reference in the markdown file
<figure>
  <img class="image-center" src="/img/logo_prod.jpeg" width="30%" />
  <figcaption>Image caption</figcaption>
</figure>

`````
<figure>
  <img class="image-center" src="{{config.site_url}}img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>
`````

???+ info "Image without any caption"
    Remove ````<figcaption>Image caption</figcaption>```` from the image reference in HTML to have an image without any caption.

### Image positioning

#### Left positioning
**Use no class to position the image left:**
`````
<figure>
  <img src="{{config.site_url}}img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>
`````
**Use class ```class="image-center"``` to position the image in the center:**
````
<figure>
  <img class="image-center" src="{{config.site_url}}img/logo_prod.jpeg" width="30%" />
  <figcaption>Image caption</figcaption>
</figure>
````

### Image sizing

```width="50%"``` Is the part of the HTML code that controls the size of the image in the page. Use percentage to asjust to the correct proportion.
Example: 30%, 50%, 100%
````
<figure>
  <img class="image-center" src="{{config.site_url}}img/logo_prod.jpeg" width="100%" />
  <figcaption>Image caption</figcaption>
</figure>
````

## Using link variable

All links have to have a variable config.site_url for easy localization. When adding links to any Markdown file, make sure to use this variable.

**Example of the variable usage:**
`````
"{{config.site_url}}img/logo_prod.jpeg"
`````

## Additional styling 

The "en" version of the documentation has a css directory that contains extra.css file that can be used to add aditional classes to be used in the HTML snippets in the Markdown files.

**Example of adding a class into the extra.css file:**
`````
/* image */
.image-center {
  margin: auto;
}
`````

**Example of using the class in the Markdown file**
`````
<figure>
  <img class="image-center" src="img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>
`````

## Docs Translations

- Make a copy of the en directory and rename it to another language abbreviation (e.g. de, ru, ja, fr)
- Delete unnescesarry directories (css, js, img)
- Modify the YML file located in the directory of the specific language
  - Add the language to the Language changer drop down by adding the language to the "alternate" section of YML file

<figure>
  <img class="image-center" src="{{config.site_url}}img/alternate language.png" width="100%" />
</figure>

  - Change the language of the template language abbreviations and [languages available for MKDocs material template](https://squidfunk.github.io/mkdocs-material/setup/changing-the-language/#site-language)

<figure>
  <img class="image-center" src="{{config.site_url}}img/localizing_nav_sections.png" width="100%" />
</figure>

  - Localize the Section names in the nav section of the YML file
<figure>
  <img class="image-center" src="{{config.site_url}}img/template language.png" width="100%" />
</figure>

???+ warning "Make sure to:"
    - Have H1 (#) heading in every document
    - Not rename markdown files
    - Adjust meta data in the befinning of the Markdown file

- Build the all the languages by running the command: **python3 ./scripts/docs.py build-all**
- Serve then on a locally hosten server: **python3 ./scripts/docs.py serve**