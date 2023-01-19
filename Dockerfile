# Stage 1: build the app
FROM python:3.11

WORKDIR /app

# install cron:
RUN apt-get update && apt-get upgrade -y && apt-get install -y nginx

# add files:
COPY . /app

# prepare nginx:
RUN cp default.conf /etc/nginx/conf.d/default.conf

# python:
RUN python -m ensurepip --upgrade
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

# build the site and copy it to nginx html dir:
COPY downloads /usr/share/nginx/html/downloads
RUN python ./scripts/docs.py build-all \
    && cp -a ./site/. /usr/share/nginx/html/ \
    && chown -R www-data:www-data /usr/share/nginx/html \
    && chmod 664 /usr/share/nginx/html/*.*

# expose port 8000
EXPOSE 8000/tcp

CMD nginx;python3 services/indextool/indexer.py