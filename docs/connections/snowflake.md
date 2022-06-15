---
sidebar_position: 2
---

# Snowflake

Cito Data seamlessly integrates with Snowflake to detect anomalies in your data and to provide you with true end-to-end column-level-lineage. In order to connect to your Snowflake instance please follow the steps below:

## Create a User and Role for Cito Data

```sql
CREATE ROLE CITODATAROLE;
CREATE USER CITODATA DEFAULT_ROLE = "CITODATAROLE" MUST_CHANGE_PASSWORD = FALSE;
GRANT ROLE CITODATAROLE TO USER CITODATA;
```

```sql
GRANT MONITOR EXECUTION ON ACCOUNT TO ROLE CITODATAROLE;
```

```sql
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE CITODATAROLE;
```
## Set User Authentication

```sql
ALTER USER CITODATA SET PASSWORD = 'PlaceholderForStrongPassword';
```

## Create Processing Environment
Create a new schema to allow Cito Data to process the requested data within Snowflake for performance reasons. This is the only write permission required by Cito Data. It has no access to other resources in your Snowflake instance.

```sql
CREATE SCHEMA EXAMPLEDATABASE.CITODATA_TMP;
GRANT ALL ON SCHEMA EXAMPLEDATABASE.CITODATA_TMP TO CITODATAROLE;
```

## Define Access Rights for Cito Data Role
(Repeat this step for all databases you want to enable anomaly detection for)

```sql
GRANT USAGE ON WAREHOUSE <example_warehouse> TO ROLE CITODATAROLE;
GRANT USAGE ON DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT USAGE ON ALL SCHEMAS IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT SELECT ON ALL TABLES IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT SELECT ON FUTURE TABLES IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT SELECT ON ALL VIEWS IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT SELECT ON FUTURE VIEWS IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT SELECT ON ALL MATERIALIZED VIEWS IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE;
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN DATABASE EXAMPLEDB TO ROLE CITODATAROLE
```
## Connect to Snowflake in your Cito Data Web App
1. Open the Integrations window in your Cito Data web app.
2. Click on ‘Connect to Snowflake’.
3. Enter the credentials you created in the previous step.
4. Your credentials will automatically be saved and a connection to your Snowflake instance will be established.