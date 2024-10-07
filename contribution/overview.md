# Contribution

To contribute to Cognigy product documentation, ensure that you've Docker installed on your machine. 

1. Build the documentation server image locally: 

    ```bash
    docker build -f Dockerfile.development --platform linux/amd64 -t doc-local .
    ```

2. Run the image that was built in the previous step:

    ```bash
    docker run \
    --rm \
    -it \
    -p 8000:8000 \
    --name doc-server \
    --mount type=bind,source="$(pwd)",target=/app \
    doc-local:latest
    ``` 
3. If you are a Mac user, then run it with `--platform linux/amd64` 

    ```bash
    docker run \
    --rm \
    -it \
    -p 8000:8000 \
    --name doc-server \
    --mount type=bind,source="$(pwd)",target=/app --platform linux/amd64\
    doc-local:latest
    ```