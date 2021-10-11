# Mongo DB

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/bb0d0a8-service-mongodb.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
The MongoDB nodes lets you execute a range of operations on your MongoDB.

## Nodes
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1f1446e-mongo-operations.jpg" width="100%" />
</figure>

### Find
#### Collection
The name of the MongoDB collection.
#### Query
The MongoDB query in JSON format.

 [MongoDB Documentation: Find](https://docs.mongodb.com/manual/reference/method/db.collection.find/){:target="_blank"}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
</figure>

#### Result Storage
This section lets you configure where to store the result of the MongoDB request.

#### Advanced
The advanced section exposes a number of extra settings.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37fb69f-mongodb-projection.jpg" width="100%" />
</figure>

##### Projection
Please refer to the MongoDB documentation for more information on Projection.
 
 [MongoDB Documentation: Projection](https://docs.mongodb.com/manual/reference/operator/projection/){:target="_blank"}

##### Options
Please refer to the MongoDB documentation for configurable options.
 
 [MongoDB Documentation](https://docs.mongodb.com/manual){:target="_blank"}

##### Index 
Please refer to the MongoDB documentation on Indexes.
 
 [MongoDB Documentation: Indexes](https://docs.mongodb.com/manual/indexes/){:target="_blank"}

##### Stop on Error
Lets you configure whether to stop flow execution when an error occurs or not.

#### Caching
##### Cache Response from MongoDB Operation. 
Whether or not to cache the MongoDB responses to optimize performance.

### Find One
#### Collection
The name of the MongoDB collection.
#### Query
The MongoDB query in JSON format.

 [MongoDB Documentation: FindOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/){:target="_blank"}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
</figure>

#### Result Storage
This section lets you configure where to store the result of the MongoDB request.

#### Advanced
The advanced section exposes a number of extra settings.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37fb69f-mongodb-projection.jpg" width="100%" />
</figure>

##### Projection
Please refer to the MongoDB documentation for more information on Projection.
 
 [MongoDB Documentation: Projection](https://docs.mongodb.com/manual/reference/operator/projection/){:target="_blank"}

##### Options
Please refer to the MongoDB documentation for configurable options.
 
 [MongoDB Documentation](https://docs.mongodb.com/manual){:target="_blank"}

##### Index 
Please refer to the MongoDB documentation on Indexes.
 
 [MongoDB Documentation: Indexes](https://docs.mongodb.com/manual/indexes/){:target="_blank"}

##### Stop on Error
Lets you configure whether to stop flow execution when an error occurs or not.

#### Caching
##### Cache Response from MongoDB Operation. 
Whether or not to cache the MongoDB responses to optimize performance.


### Update One

#### Collection
The name of the MongoDB collection.

#### Query
The MongoDB query in JSON format.

#### Update
The MongoDB update payload in JSON format.

 [MongoDB Documentation: UpdateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/){:target="_blank"}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
</figure>

#### Result Storage
This section lets you configure where to store the result of the MongoDB request.

#### Advanced
The advanced section exposes a number of extra settings.

##### Use Operators
If enabled, then you can use operators like $push in the update query. If not, then we will automatically $set everything that you write in the update query into the database.

##### Options
Please refer to the MongoDB documentation for configurable options.
 
 [MongoDB Documentation](https://docs.mongodb.com/manual){:target="_blank"}

### Update Many
 [MongoDB Documentation: UpdateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/){:target="_blank"}

### Insert
 [MongoDB Documentation:  Insert](https://docs.mongodb.com/manual/reference/method/db.collection.insert/){:target="_blank"}

### Remove
 [MongoDB Documentation: Remove](https://docs.mongodb.com/manual/reference/method/db.collection.remove/){:target="_blank"}

### MongoDB Aggregate
 [MongoDB Documentation: Aggregate](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/){:target="_blank"}
