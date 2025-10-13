#
# This Dockerfile builds a production version of our public documentation
# which will then be hosted on a given DNS name.
#

# STAGE 1 - build 'site' folder
FROM python:3.9.12-buster as build

WORKDIR /app

COPY ./build/requirements.txt /app

RUN python -m pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . /app

RUN mkdocs build

# STAGE 2 - 'build NGINX container serving site'
FROM nginx:1.28.0-alpine3.21-slim

COPY --from=build /app/site/ /usr/share/nginx/html/

COPY ./build/default.conf /etc/nginx/conf.d/default.conf