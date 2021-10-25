# Overview
This repository contains the new documentation for Cognigy products.

## Powered by MKDocs
You can read more about `mkdocs` by visiting their official page:
https://www.mkdocs.org/

## Theming
Mkdocs supports the concept of themes. Cognigy uses one of the most famous themes called `mkdocs-material` with some customization.

This is the website of this theming project:
https://squidfunk.github.io/mkdocs-material/
---
# Development
In order to keep the productivity high when working on our product documentation, we have prepared a convenient workflow which uses a `dockerized development server` which will instantly call mkdocs for you as soon as you change content in the markdown files of this repository.

For this workflow to work properly, you need to install `Docker` which is available for Linux, MacOSX and Windows. Read more about how you can install Docker on your machine: https://docs.docker.com/get-docker/

## Development server
Once you have Docker installed, you can run the following command in order to start the development server which will reload once you have changed content:
```
docker run --rm -it -p 8008:8008 -v ${PWD}:/app/ cognigydevelopment.azurecr.io/documentation-live:1 python ./scripts/docs.py live
```
You need to make sure that you execute this command in this repository as it will bind-mount the current folder into the running container!
---

## Writing Cognigy Docs

Check helpers/ dir for guidance for information on how to write the Cognigy docs, HTML templates for blockquotes and badges, MKDocs markdown syntax references.
A markdown files linter will help you when submitting changes to keep the standard.