# Overview
This repository is home for our brand-new product documentation which is located on https://docs.cognigy.com. The repository stores documentation for all Cognigy products like Cognigy.AI, Cognigy Insights and the Cognigy WebchatWidget. Documentation is written as Markdown files and compiled to static HTML using the [MKDocs framework](https://www.mkdocs.org/).

We use a modified theme based on [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) which we have extended in order to match our own corporate identity.

# Contribution
You want to contribute to the contents shown on https://docs.cognigy.com and want to help us to improve our product documentation? Great - check the "contribution" folder for more info!

# Services
There are currently two services running alongside the Documentation:
1. Indextool
2. Searchtool

## Indextool
The Indextool is a small python application that scans the markdown files of the documentation  
and creates an index out of it. It makes use of the nltk-library to identify and filter words to keep the index  
meaningfully. The index is stored in a database for later use.  
  
In order to start the application, make sure it can access the /docs folder and run it with ```python indexer.py```.
  
  
## Searchtool
The Searchtool is a microservice api written in typescript to make the generated index queryable.  
This can be another api, a bot or someone using postman.  
It requires no specific authentication since it can only work with the index-data and since this is based on the documentation  
that is already online, there is no risk in privacy breach.  
  
For more information on the Tool, please read the respective [Readme](services/searchtool/README.md).

## Setup
Prerequisite: having docker installed and running.
After this is checked, perform the following steps:
1. create a user-defined bridge network by running ``` docker network create doc-net ```   
   This will create a network called doc-net with hostname access enabled.  
   The default-bridge-network only supports access via IP-Address.
2. create a mongodb container by running ``` docker run -d --name mongodb --network doc-net --restart always mongo ```  
   This would create a mongodb container accessible via mongodb from the network doc-net.  
   To have a secured installation run ``` docer run -d --name mongodb --network doc-net -e "MONGO_INITDB_ROOT_USERNAME=<user>" -e "MONGO_INITDB_ROOT_PASSWORD=<pass>" --restart always mongo```  
   This would create a mongodb container with authentication enabled. 
3. Go into the searchtool directory and run ``` docker build -t doc-search . ```
4. Go back into the project root directory and run ``` docker build -t documentation . ```
5. Steps 3 and 4 are interchangeable and create an image for the documentation including the index tool and on for the search tool.
6. Containerize both images:  
   documentation: ``` docker run -d --name documentation --network doc-net -e "MONGODB_HOST=mongodb" --restart always documentation ```  
   doc-search: ``` docker run -d --name doc-search --network doc-net -e "MONGODB_HOST=mongodb" --restart always doc-search ```  
   This will spin up two more containers in the network and complete the process.  
   In case database authentication is needed, add the following two environment variables with -e: MONGODB_USER and MONGODB_PASS.

Alternatively there is also a docker-compose file to boot up the whole application with its required services.  
Important: While using the compose file, it could happen that the microsoft translation api is not callable due to port-errors.