# Development
In order to keep the productivity high when working on the Cognigy documentation, we have prepared a convenient workflow which uses a `dockerized development server` which will instantly call mkdocs for you as soon as you change content in the markdown files of this repository.

In order to keep the productivity high when working on our product documentation, we have prepared a convenient workflow which uses a `dockerized development server` which will instantly call mkdocs for you as soon as you change content in the markdown files of this repository.

For this workflow to work properly, you need to install `Docker` or `Rancher Desktop` which is available for Linux, MacOSX and Windows. Read more about how you can install Docker on your machine: https://docs.docker.com/get-docker/ or Rancher Desktop: https://rancherdesktop.io/

## Building

This repository contains two Dockerfile in order to build the product:

- Dockerfile: Used to actual build a version of our documentation which we will server on `https://docs.cognigy.com` using an NGINX web-server
- Dockerfile.development: Used to build a hot-reloading server which can be used during development

Building the development Dockerfile can be accomplished with e.g. this command:

```
docker buildx build -t cognigydevelopment.azurecr.io/documentation-live:1 --file Dockerfile.development .
```

## Development server

Running the development server with Docker:

```
docker run --rm -it -p 8008:8008 -v ${PWD}:/app/ cognigydevelopment.azurecr.io/documentation-live:1 python ./scripts/docs.py live
```

Running the development server with nerdctl (Rancher Desktop):

```
nerdctl run --rm -it -p 8008:8008 -v ${PWD}:/app/ cognigydevelopment.azurecr.io/documentation-live:1 python ./scripts/docs.py live
```

Running the development server with nerdctl (Rancher Desktop) on MacOS (ARM M1-chip):

```
nerdctl run --rm -it -p 8008:8008 -v ${PWD}:/app/ cognigydevelopment.azurecr.io/documentation-live:arm.1 python ./scripts/docs.py live
```

**You need to make sure that you execute this command in this repository as it will bind-mount the current folder into the running container!**

Access the rendered mkdocs website under: http://localhost:8008/

## Writing Cognigy Docs

Check the other files in this directory for guidance on how to write the Cognigy docs, HTML templates for blockquotes and badges, MKDocs markdown syntax references.
A markdown files linter will help you when submitting changes to keep the standard.
