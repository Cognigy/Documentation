---
 title: "MS SQL" 
 slug: "ms-sql" 
 hidden: false 
---
# MS SQL

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/run-sql-query.png" width="50%" />
</figure>

## Description

The SQL Node lets you run queries, transactions, or stored procedures on MS SQL Server.

## Run Query

Runs a SQL a single query statement. 

| Parameter         | Type          | Description                                                                                                              |
|-------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| MS SQL Connection | List          | Select MS SQL database connection. To create a new connection, click ![plus](../../../../_assets/icons/plus-simple.svg). |
| SQL Query         | CognigyScript | Enter a valid SQL query in the Query field.                                                                              |

??? info "Result Storage"

    | Parameter                 | Type          | Description                                                                                                                         |
    |---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | Where to store the result | List          | <ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result | CognigyScript | Enter the key where the result should be stored.                                                                                    |

??? info "Advanced"

    | Parameter     | Type   | Description                                                                                                                                                                     |
    |---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Stop on Error | Toggle | Lets you configure whether to stop Flow execution when an error occurs or not.                                                                                                  |

## Run Transaction

Runs a transaction.

| Parameter         | Type          | Description                                                                                                                                                                                                                                                                                        |
|-------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MS SQL Connection | List          | Select MS SQL database connection. To create a new connection, click ![plus](../../../../_assets/icons/plus-simple.svg).                                                                                                                                                                           |
| Query             | CognigyScript | Enter a valid SQL transaction query in the Query field. You do not need to add the "BEGIN TRANSACTION" and "COMMIT" fields, since this will be done implicitly. If you want to work with Try / catch blocks and do more advanced transactions with rollbacks, use [Run Query](#run-query) instead. |

??? info "Result Storage"

    | Parameter                 | Type          | Description                                                                                                                         |
    |---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | Where to store the result | List          | <ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result | CognigyScript | Enter the key where the result should be stored.                                                                                    |

??? info "Advanced"

    | Parameter     | Type   | Description                                                                                                                                                                     |
    |---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Stop on Error | Toggle | Lets you configure whether to stop Flow execution when an error occurs or not.                                                                                                  |

## Run Stored Procedure

Runs a stored procedure. The stored procedure must exist in the database specified under Connection.

| Parameter             | Type          | Description                                                                                                                                                                                                                                                                                          |
|-----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MS SQL Connection     | List          | Select MS SQL database connection. To create a new connection, click ![plus](../../../../_assets/icons/plus-simple.svg).                                                                                                                                                                             |
| Stored Procedure Name | CognigyScript | Enter the name of the stored procedure.                                                                                                                                                                                                                                                              |
| Inputs                | JSON          | Enter an array of input parameters of your stored procedure as defined in the database. You can forward parameters from the Context to the database, for example. Parameters must be specified in an array of objects that define the input parameter in the following format: `{name,value,type}`   |
| Outputs               | JSON          | Enter an array of output parameters of your stored procedure as defined in the database. You can forward parameters from the database to the Context, for example. Parameters must be specified in an array of objects that define the output parameter in the following format: `{name,value,type}` |

??? info "Result Storage"

    | Parameter                 | Type          | Description                                                                                                                         |
    |---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | Where to store the result | List          | <ul><li>**Input** — stores the result in the Input object.</li><li>**Context** — stores the result in the Context object.</li></ul> |
    | Input Key to store Result | CognigyScript | Enter the key where the result should be stored.                                                                                    |

??? info "Advanced"

    | Parameter     | Type   | Description                                                                                                                                                                     |
    |---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Stop on Error | Toggle | Lets you configure whether to stop Flow execution when an error occurs or not.                                                                                                  |
