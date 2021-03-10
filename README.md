# Overview
This repo contains a prototype of how we can use `mkdocs` in order to write our product documentation.

# Usage
In order to work on the documentation and generate new static pages, you can use the following `docker run` statement in order to start a container with the current folder being bind-mounted - so you don't need to install mkdocs on your machine.

We are using the following Docker image which includes a development server:
https://hub.docker.com/r/squidfunk/mkdocs-material


```
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

# Theming
We are using `mkdocs` with the theme `material ui`:
https://squidfunk.github.io/mkdocs-material/