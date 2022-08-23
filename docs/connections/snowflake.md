---
sidebar_position: 2
---

# Snowflake

Cito seamlessly integrates with Snowflake to detect anomalies in your data and to provide you with column-level-lineage. In order to connect to your Snowflake instance please follow the steps below:

## Create a User and Role for Cito Data

```sql
CREATE ROLE CITOROLE;
CREATE USER CITO DEFAULT_ROLE = "CITOROLE" MUST_CHANGE_PASSWORD = FALSE;
GRANT ROLE CITOROLE TO USER CITO;
```

```sql
GRANT MONITOR EXECUTION ON ACCOUNT TO ROLE CITOROLE;
```

```sql
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE CITOROLE;
```
## Set User Authentication

```sql
ALTER USER CITO SET PASSWORD = 'PlaceholderForStrongPassword';
```

## Create Processing Environment
Create a new database to allow Cito to process the requested data within Snowflake for performance reasons. This is the only write permission required by Cito. It has no access to other resources in your Snowflake instance.

```sql
CREATE DATABASE CITO;
GRANT ALL ON DATABASE CITO TO CITOROLE;
```

## Define Access Rights for Cito Data Role
(Repeat this step for all databases you want to enable anomaly detection for)

```sql
GRANT USAGE ON WAREHOUSE <example_warehouse> TO ROLE CITOROLE;
GRANT USAGE ON DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT USAGE ON ALL SCHEMAS IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT SELECT ON ALL TABLES IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT SELECT ON FUTURE TABLES IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT SELECT ON ALL VIEWS IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT SELECT ON FUTURE VIEWS IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT SELECT ON ALL MATERIALIZED VIEWS IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN DATABASE EXAMPLEDB TO ROLE CITOROLE;
```
## Connect to Snowflake in your Cito Web App
1. Open the Integrations window in your Cito Web App.
2. Open The Snowflake tab an enter the required information.
3. Please enter the Account Id of you Snowflake instance. You can find it under 'Admin' -> 'Accounts'. Please select the account from the listed options and combine the 'Account' field value (the actual Account Id) of the row with your Organization Id which you can find on top of the page. Please enter the combination of '&#60;Organization-Id&#62;-&#60;Account-Id&#62;' into the 'Snowflake Account Id' field in your Cito Web App
3. Enter the credentials (username and password) you created in the previous step.
4. After clicking on 'Save' a connection to your Snowflake instance will be established.