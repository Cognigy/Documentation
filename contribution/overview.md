# Contribution

To contribute to our product documentation, ensure that you have Docker installed on your machine.

You will also need to have credentials to connect to Cognigy's private container registry.
Log in with your credentials using the following command:

```sh
docker login \
    cognigydevelopment.azurecr.io \
    --username=<username> \
    --password=<your-password>
```

Once this worked, you can run the following command in the root of this repository in order to start the development server:

```sh
docker run \
    --rm \
    -it \
    -p 8000:8000 \
    --name tech-docs-dev-server \
    --mount type=bind,source="$(pwd)",target=/app \
    cognigydevelopment.azurecr.io/tech-docs-dev-server:2
```

Todo: Add more documentation on how to build, how to run a dev-server, etc.