---
title: "Reset Initial Credentials"
slug: "reset-init-credentials"
hidden: false
---
# Resetting Initial User Credentials

In case,
you cannot obtain credentials from logs of `service-security` in the way it is described in the [Cognigy.AI installation process](installation-process.md) article,
for example,
because `service-security` service was restarted several times,
or you have deleted and recreated Cognigy.AI installation,
you need to drop `service-security` database to generate new initial credentials. 

!!! warning "Attention: Loss of Data"
    All Organizations and Users will be lost as a result of this operation. Perform this process only during initial Cognigy.AI setup. 

To generate new initial user credentials, run the following commands:

1. Drop the collections in `service-security` database by connecting to the _primary_ node of MongoDB. To determine the primary node, execute `rs.status()`:

    ```bash
    kubectl exec -it -n mongodb mongodb-0 bash
    mongosh -u $MONGODB_ROOT_USER -p $MONGODB_ROOT_PASSWORD --authenticationDatabase admin
    rs.status()
    ```

2. Connect to the primary node, for example, if `mongodb-0` is the primary node, and drop the collections in `service-security` database:

    ```bash
    kubectl exec -it -n mongodb mongodb-0 bash
    mongosh -u $MONGODB_ROOT_USER -p $MONGODB_ROOT_PASSWORD --authenticationDatabase admin
    use service-security
    db.users.drop()
    db.organisations.drop()
    exit
    exit
    ```

3. Restart the `service-security` deployment: 

    ```bash
    kubectl rollout restart -n=cognigy-ai deployment service-security
    ```

4. Obtain the newly generated initial credentials from the logs of `service-security` deployment as usual:

    ```bash
    kubectl logs -f -n=cognigy-ai --tail 100 deployment/service-security
    ```