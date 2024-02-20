---
 title: "MS SQL" 
 slug: "ms-sql" 
 hidden: false 
---
# MS SQL

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/run-sql-query.png" width="80%" />
</figure>

## Description

The SQL Node lets you run queries, transactions or stored procedures on MS-SQL Server.

### Operation
---
Choose an Operation from the dropdown:

  * [Run Query](#run-query)
  * [Run Transaction](#run-transaction)
  * [Run Stored Procedure](#run-stored-procedure)

### Connection
---
Select or create a new database connection, see [Connections](../../resources/build/connections.md).

### Context Store
---
The SQL Node executes the configured operation on the database. The query response from the database will be stored in the Context. Specify the store location here.

## Run Query

Runs a single SQL query statement. Enter a valid SQL query in the Query field.

## Run Transaction

Runs a transaction. Enter a valid SQL transaction query in the Query field. You do not need to add the "BEGIN TRANSACTION" and "COMMIT" fields, since this will be done implicitly. If you want to work with Try / catch blocks and do more advanced transactions with rollbacks, then you might want to use the [Run Query](#run-query) instead.

## Run Stored Procedure

Runs a stored procedure. The stored procedure must exist in the database specified under Connection.

### Stored Procedure Name
---
The name of the stored procedure

### Inputs
---
Enter an array of input parameters of your stored procedure as defined in the database. You can forward parameters from the Context to the database, for example. Parameters must be specified in an array of objects that define the input parameter in the following format: `{name,value,type}`

### Outputs
---
Enter an array of output parameters of your stored procedure as defined in the database. You can forward parameters from the database to the Context, for example. Parameters must be specified in an array of objects that define the output parameter in the following format: `{name,value,type}`