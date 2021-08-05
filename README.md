# Overview
This repository contains our new documentation for products like `Cognigy.AI`, `Cognigy Insights` and others. The repository stores product documentation as plain markdown files and uses `mkdocs` as a framework to render static HTML based on the simple markdown files.

You can read more about `mkdocs` by visiting their official page:
https://www.mkdocs.org/

## Theming
Mkdocs supports the concept of themes. As you might agree, the default mkdocs theme does not really look appealing - their actual product website is using mkdocs itself. We have picked one of the most famous themes called `mkdocs-material`.

This is the website of this theming project:
https://squidfunk.github.io/mkdocs-material/

---
# Development
In order to keep the productivity high when working on our product documentation, we have prepared a convenient workflow which uses a `dockerized development server` which will instantly call mkdocs for you as soon as you change content in the markdown files of this repository.

For this workflow to work properly, you need to install `Docker` which is available for Linux, MacOSX and Windows. Read more about how you can install Docker on your machine: https://docs.docker.com/get-docker/

## Development server
Once you have Docker installed, you can run the following command in order to start the development server which will reload once you have changed content:
```
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

We are using the following Docker image which includes a development server:
https://hub.docker.com/r/squidfunk/mkdocs-material

---
# Roadmap
We currently have our product documentation distributed and use multiple tools. Our goals is, that we can have a more homogenous documentation in the future.

**Current state**
- **product documentation**:
  The actual product documentation is currently located at `readme.io` (https://dash.readme.com/project/cognigy/v4.6/overview). Customers can reach the documentation by visiting https://docs.cognigy.com.

- **installation documentation**:
  Our installation documentation is currently living in a separate GIT repository () on Azure DevOps and uses `LaTeX` as its main format. We then render a PDF file from the LaTeX source and distribute this file as a zip-protected archive, here: https://docs.cognigy.com/docs/installation-and-dev-ops-guide

**Future state**

We want to migrate all of our product documentation into this repository and make it all markdown and mkdocs based. We will create an `Azure pipeline` which will automatically build the documentation and release it `fully containerized` into one of our production `Kubernetes clusters`.

Important topics to consider:
- **localization**:<br>
  The current documentation is English only. We want to have the ability to offer documentation in other languages as well.

- **multiple products**:<br>
  The documentation needs to work for multiple products, e.g. **Cognigy AI**, **Cognigy Live Agent**, **Cognigy Insights**

- **SEO & redirects**:<br>
  We already have quite some product documentation and Google already integrated our docs-pages into their search index. We need to make sure that we `configure redirects` so that the old links for the old documentation still works and simply points to the new pages.

**Iterations**

1. Migrate a small section of our product documentation for AI to this repository. Deal with images, other assets. Also deal with multiple languages.

2. Build a build-pipeline using Azure Pipelines which can build and deploy the state into a Kubernetes cluster.

3. Deal with re-directs so "old" links can be transparently redirected (302 Moved permanently) to the new links.

4. Migrate the whole content.

# Run Mkdocs multiple language build
## Requirements

- python3 3.8.10
- typer 0.3.2
- mkdocs 1.2.2
- mkdocs-material 7.2.1

## Commands to deploy

 pip install -r requirements.txt

### see live view
python3 ./scripts/docs.py live 

### build all languages
python3 ./scripts/docs.py build-all

### serve the site
python3 ./scripts/docs.py serve