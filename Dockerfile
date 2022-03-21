#
# Stage 1: build 'site' folder
#
FROM python:3.9.7-buster as build

WORKDIR /app

COPY requirements.txt /app

RUN pip install -r requirements.txt

COPY . /app

RUN python ./scripts/docs.py build-all

#
# Stage 2: build container serving 'site'
#
FROM nginx:1.20.2-alpine

COPY --from=build /app/site/ /usr/share/nginx/html/

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY downloads /usr/share/nginx/html/downloads