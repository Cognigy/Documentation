---
title: "Mongo DB" 
slug: "mongo-db" 
description: "The MongoDB Nodes allow you to execute a range of operations on your MongoDB database, such as find, update, and remove operations."
hidden: false 
---
# Mongo DB

[![Version badge](https://img.shields.io/badge/Updated in-v4.88-blue.svg)](../../../../release-notes/4.88.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/mongo-db-find.png" width="80%" />
</figure>

## Description

The MongoDB Nodes let you execute a range of operations on your [MongoDB](https://www.mongodb.com/docs/).

## Restrictions

- MongoDB Nodes are compatible with MongoDB 3.6 or later versions.

## Nodes

### Find

#### Collection

The name of the MongoDB collection.

#### Query

The MongoDB query in JSON format.

[MongoDB Documentation: Find](https://docs.mongodb.com/manual/reference/method/db.collection.find/)

#### Result Storage

This section lets you configure where to store the result of the MongoDB request.

#### Advanced

The advanced section exposes a number of extra settings.

##### Projection

Read the MongoDB documentation for more information on Projection.
 
 [MongoDB Documentation: Projection](https://docs.mongodb.com/manual/reference/operator/projection/){:target="_blank"}

##### Options

Read the MongoDB documentation for configurable options.
 
 [MongoDB Documentation](https://docs.mongodb.com/manual){:target="_blank"}

##### Index 

Refer to the MongoDB documentation on Indexes.
 
 [MongoDB Documentation: Indexes](https://docs.mongodb.com/manual/indexes/){:target="_blank"}

##### Stop on Error

Lets you configure whether to stop flow execution when an error occurs or not.

#### Caching

##### Cache Response from MongoDB Operation

Whether to cache the MongoDB responses to optimize performance.

### Find One

#### Collection

The name of the MongoDB collection.

#### Query

The MongoDB query in JSON format.

 [MongoDB Documentation: FindOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/){:target="_blank"}

#### Result Storage

This section lets you configure where to store the result of the MongoDB request.

#### Advanced

The advanced section exposes a number of extra settings.

##### Projection

Read the MongoDB documentation for more information on Projection.
 
 [MongoDB Documentation: Projection](https://docs.mongodb.com/manual/reference/operator/projection/){:target="_blank"}

##### Options

Read the MongoDB documentation for configurable options.
 
 [MongoDB Documentation](https://docs.mongodb.com/manual){:target="_blank"}

##### Index 

Read the MongoDB documentation on Indexes.
 
 [MongoDB Documentation: Indexes](https://docs.mongodb.com/manual/indexes/){:target="_blank"}

##### Stop on Error
Lets you configure whether to stop flow execution when an error occurs or not.

#### Caching

##### Cache Response from MongoDB Operation

Whether to cache the MongoDB responses to optimize performance.

### Update One

#### Collection

The name of the MongoDB collection.

#### Query

The MongoDB query in JSON format.

#### Update

The MongoDB update payload in JSON format.

 [MongoDB Documentation: UpdateOne](https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/){:target="_blank"}

#### Result Storage

This section lets you configure where to store the result of the MongoDB request.

#### Advanced

The advanced section exposes a number of extra settings.

[https://docs.mongodb.com/manual/reference/operator/projection/](https://docs.mongodb.com/manual/reference/operator/projection/){:target="_blank"}

##### Use Operators

If enabled, then you can use operators like $push in the update query. If not, then we will automatically $set everything that you write in the update query into the database.

##### Options

Read the MongoDB documentation for configurable options.
 
 [MongoDB Documentation](https://docs.mongodb.com/manual){:target="_blank"}

### Update Many

 [MongoDB Documentation: UpdateMany](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/){:target="_blank"}

### Insert

 [MongoDB Documentation:  Insert](https://docs.mongodb.com/manual/reference/method/db.collection.insert/){:target="_blank"}

### Remove

 [MongoDB Documentation: Remove](https://docs.mongodb.com/manual/reference/method/db.collection.remove/){:target="_blank"}

### MongoDB Aggregate

 [MongoDB Documentation: Aggregate](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/){:target="_blank"}
