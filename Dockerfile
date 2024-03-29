#
# Stage 1: build 'site' folder
#
FROM python:3.9.12-buster as build

WORKDIR /app

COPY requirements.txt /app

RUN python -m pip install --upgrade pip

RUN pip install -r requirements.txt

COPY . /app

RUN python ./scripts/docs.py build-all

#
# Stage 2: build container serving 'site'
#
FROM nginx:1.24.0-alpine

COPY --from=build /app/site/ /usr/share/nginx/html/

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY downloads /usr/share/nginx/html/downloads