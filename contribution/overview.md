# Contribution

To contribute to our product documentation, ensure that you have Docker installed on your machine. 

- Build the documentation server image locally 

```bash
docker build -f Dockerfile.development --platform linux/amd64 -t doc-local .
```

- Run the image which has build in previous step

```bash
docker run \
--rm \
-it \
-p 8000:8000 \
--name doc-server \
--mount type=bind,source="$(pwd)",target=/app \
doc-local:latest
``` 
If you are a Mac user then run it with `--platform linux/amd64` 

```
docker run \
--rm \
-it \
-p 8000:8000 \
--name doc-server \
--mount type=bind,source="$(pwd)",target=/app --platform linux/amd64\
doc-local:latest
```