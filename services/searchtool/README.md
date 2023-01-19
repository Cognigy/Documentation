# Introduction 
The microservice is build to serve as an entrypoint for searching the index created based on the .md-files 
docs.cognigy.com is based on.  
The application also uses mongodb to store the search results in order to speed up the 
process. 
***
# Getting Started
To get started just follow the steps outlined below:
1.	Make sure you have NodeJS and Mongodb running on your machine.
2.	Install the packages listed in package.json and create a database named "documentation_index"  
    This database is also used by the indexing tool residing in the documentation repo.
3.	In case you want to run the application in a docker-environment, just type docker build <name> and create the image.  
    Make sure though that the application can reach the database instance.
4.  Read the instructions given under "Running the App in Docker".
***
# Build and Test
To build the application, use the script ```npm run build```.  
This script will first run the test suite available, then build the application and at last, create a docker image.
  
To just test the application, use the script ```npm run test```.  
``` 
If you are useing the build and test script, make sure you have a reachable 
MongoDB running! Since the test-suite will also test the database services.  
```
***
# Running the App:
## Docker:
To run the app in a docker container environment, make sure the database is on the same network or  
fully reachable by the application. Also make sure, that the container can reach the outside world because  
it consumes a third party api to translate incoming queries to english.

## Local Machine:
To run the microservice locally, cd into the searchtool-directory and run ``` npm run dev ```  
***
# Query options:
The section describes all the parameters the respective endpoint/route will accept, including indications for required params and default values.  
  
## Search Endpoint:
This endpoint is used for running a search against the index of the documentation.  
  
### Search
Type: GET-Request  
Path: ``` /search ```  
  
The search route accepts the following search parameters:

| param                | description                                                                                    | type    | defaults | required |
|:---------------------|:-----------------------------------------------------------------------------------------------|:--------|:---------|:---------|
| term                 | the actual search phrase                                                                       | string  |          | x        |
| offset               | set the starting point in the result set                                                       | integer | 0        |          |
| limit                | set the actual amount of results returned                                                      | integer | 10       |          |
| addScoringToResponse | enables or disables adding scoring data to the results returned.                               | boolean | true     |          |
| scoringFilter        | enables or disables filtering the resultset by a score limit the result has at least to match. | boolean | true     |          |
| scoreLimit           | the given number describes the score a result has be equal to or greater than.                 | integer | 50       |          |
  
## Ignored Endpoint 
This endpoint is used for adding certain documents to an ignored list that could be left out in the actual search query or be added as some sort of FAQ shortcut in the bot itself.  
The routes below this endpoint can also be added to the bot itself for querying the list or maybe add certain titles to it depending on their frequency.  
But the last part is mere theory. The main purpose is to have an endpoint to fill and manipulate the list with tools like Postman or Insomnia.  
  
### Add Ignored
Type: POST-Request  
Path: ``` /ignored ```

The route does not require any parameters nor can it handle any given one.  
It expects a body in json-format in order to add one or more documents to the list.  
The expected payload looks like:
Add one title:  
```json
[
  {
    "title": "some title"
  }
]
```  
  
Add more than one title:
```json
[
  {
    "title": "some title"
  },
  {
    "title": "some other title"
  }
]
```
### Get Ignored
Type: GET-Request  
Path: ``` /ignored ```  
  
The rout does not require any parameters nor can it handle any given one.    
Its purpose is to hand out the full list of currently ignored documents.   
  
### Delete Ignored
Type: DELETE-Request  
Path: ``` /ignored ```  
  
The 'delete' route accepts the following parameters:  

| param     | description                                | default | required |
|:----------|:-------------------------------------------|:--------|:---------|
| deleteAll | delete the whole list of ignored documents | false   |          |


This route is used to remove either a single document, a couple of documents or all documents from the List of ignored documents.  
In case every entry in the list should be deleted, no request body needs to be provided.  
On the other options, the expected payload should look like this:  
Delete one title:  
```json
[
  {
    "title": "some title"
  }
]
```  
  
Delete more than one title:
```json
[
  {
    "title": "some title"
  },
  {
    "title": "some other title"
  }
]
```
 
# Error Messages:
The application can emmit the following error messages and status codes:  

## Search Endpoint:

| code | description           | reason                                                                                                         | message                                                      |
|:-----|:----------------------|:---------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
| 500  | Internal Server Error | The app caches because of an internal error. In this case, have a look at the logs.                            | Something went wrong while processing the query.             |
| 400  | Bad Request           | First: Any query that does not match the regex ```^[a-zA-Z ,.!?]+$```<br> Second: If no search query is given. | First: Nice try dude ;)<br>Second: No search term submitted. |
| 404  | Not Found             | The search tool did not find anything in the index regarding the query words.                                  | No documents found for the search term: <query>              |
  
  
Currently, the messages are only relevant if someone queries the api with postman.  
The Cognigy.AI Bot though is currently not capable of handling these messages and can't communicate them to the user.

## Ignored Endpoint
### Add Ignored
| code | description           | reason                                                                                                                                           | message                                                                                                                |
|:-----|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| 500  | Internal Server Error | The app caches because of an internal error. In this case, have a look at the logs.                                                              | Something went wrong while processing the query.                                                                       |
| 400  | Bad Request           | First: Any title that does not match the regex ```^[a-zA-Z ,.!?]+$```<br> Second: If no title is provided. <br> Third: If the JSON is malformed. | First: Nice try dude ;)<br>Second: At least one title has to be provided.<br>Third: The body needs to be a JSON array. |
  
### Delete Ignored
| code   | description             | reason                                                                                                                                             | message                                                                                                                  |
|:-------|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| 500    | Internal Server Error   | The app caches because of an internal error. In this case, have a look at the logs.                                                                | Something went wrong while processing the query.                                                                         |
| 400    | Bad Request             | First: Any title that does not match the regex ```^[a-zA-Z ,.!?]+$```<br> Second: If no title is provided. <br> Third: If the JSON is malformed.   | First: Nice try dude ;)<br>Second: At least one title has to be provided.<br>Third: The body needs to be a JSON array.   |
| 404    | Not Found               | The search tool did not find anything in the ignored list regarding the queried title and could not remove anything.                               | No document found that matches the request.                                                                              |
  
# TODO
Increasing the coverage of the test suite.  
Adding a health check endpoint to monitor the application.