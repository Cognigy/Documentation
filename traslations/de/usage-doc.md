# How to write Cognigy Docs?

Clone repository from https://cognigy.visualstudio.com/Documentation/_git/documentation with SSH authentication.
Find here on how to do SSH authentication: LINK
## Running documentation on your PC

**Requirements**
- python3 3.8.10
- typer 0.3.2
- mkdocs 1.2.2
- mkdocs-material 7.2.1
- mkdocs-macros-plugin
- mkdocs-section-index

### Commands to deploy
cd into documentation directory and run command 
**pip install -r requirements.txt**
#### See live view for EN version
python3 ./scripts/docs.py live 
### Build all languages
python3 ./scripts/docs.py build-all
### serve the site for testing all languages
python3 ./scripts/docs.py serve

## Publishing pipeline

## Pulling/Pushing changes to the repository

## Creating new pages

### Adding page to navigation

## Adding images
<figure>
  <img class="image-center" src="/img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>

`````
<figure>
  <img class="image-center" src="{{config.site_url}}img/logo_prod.jpeg" width="50%" />
  <figcaption>Image caption</figcaption>
</figure>
`````



 ### adjusting yaml file


 ### md file location
 ### naming the file
 ### meta data
 ### image positioning
<div class="right-image"></div>
<div class="center-image"></div>

### Image storage

## Using link variable

## Additional styling 

## Docs Translations