---
sidebar_position: 1
---

# Snowflake

Cito seamlessly integrates with Snowflake to detect anomalies in your data and to provide you with column-level-lineage. In order to connect to your Snowflake instance please follow the steps below:

## Create a dedicated Cito Warehouse

```sql
CREATE WAREHOUSE CITO_WH;
```

## Create a User and Role for Cito Data

```sql
CREATE ROLE CITOROLE;
CREATE USER CITO DEFAULT_ROLE = CITOROLE DEFAULT_WAREHOUSE CITO_WH MUST_CHANGE_PASSWORD = FALSE;
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

**Note:** _To work with the `CITO` database by interacting the Snowflake UI itself (e.g. by running queries from 'Worksheets') you either need to use the `CITO` user, grant the `CITOROLE` to another executing user or give another role access to this database._

## Define Access Rights for Cito Data Role

(Repeat this step for all databases you want to enable anomaly detection for)

```sql
GRANT USAGE ON WAREHOUSE CITO_WH TO ROLE CITOROLE;
GRANT USAGE ON DATABASE <example_database> TO ROLE CITOROLE;
GRANT USAGE ON ALL SCHEMAS IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT USAGE ON FUTURE SCHEMAS IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT SELECT ON ALL TABLES IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT SELECT ON FUTURE TABLES IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT SELECT ON ALL VIEWS IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT SELECT ON FUTURE VIEWS IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT SELECT ON ALL MATERIALIZED VIEWS IN DATABASE <example_database> TO ROLE CITOROLE;
GRANT SELECT ON FUTURE MATERIALIZED VIEWS IN DATABASE <example_database> TO ROLE CITOROLE;
```

## Connect to Snowflake in your Cito Web App

1. Open the Integrations window in your Cito Web App.
2. Open The Snowflake tab an enter the required information.
3. Please enter the Account Id (&#60;organization-id&#62;.&#60;account-name&#62;, e.g. WQLQHFA.YI75157) of your Snowflake. You can find the corresponding information via
   1. your Snowfalke web UI (new console) by clicking on the displayed account info at the bottom left corner
   2. your Snowflake web UI by accesssing 'Admin' -> 'Accounts'. Please select the account from the listed options and copy the account name (&#60;organization-id&#62;-&#60;account-id&#62;) from the account URL ('https://&#60;organization-id&#62;-&#60;account-id&#62;.snowflakecomputing.com') which you can access when clicking the Copy button of 'Account' field. Please enter the account name into the 'Snowflake Account Id' field in your Cito Web App.
4. Enter username (name of the user you created for Cito), the user's password and the name of the warehouse you want to monitor from your earlier Snowflake setup.
5. (Optional) Select your BI layer tool from the 'BI Layer tool' dropdown.
6. After clicking on 'Save' a connection to your Snowflake instance will be established and resources in the Cito database will be created.
7. In case you are not planning on setting up a GitHub integration, please hit the 🔄️ (refresh) button once you have set up the Snowflake integration. This will trigger the initial processing of your Snowflake instance, which can take a few minutes. Once the initial processing is complete, you will be able to access all your Snowflake resources in Cito and start your data observability journey by setting up anomaly detection tests. To receive the latest snapshot of your Snowflake environment please hit the refresh button again.
