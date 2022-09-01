---
sidebar_position: 1
---

# API Reference

In addition to Cito's web app, you can also access resources via our REST API. The REST API allows you to interact with test objects in the same way you would via the web app. Every created and activated test will be executed based on the specified test configuration. To make use of the Cito REST API, please make sure you set up your GitHub, Snowflake and Slack integrations first.

## Authorization

To send requests from an API client like Postman or Insomnia, please use OAuth2 authorization of Grant Type 'Implicit' with the following attributes:

- **Authorization URL**: https://auth.citodata.com/oauth2/authorize
- **Client ID**: 2akprujgt5esskoerrdo5rqjmc
- **Redirect URL**: http://localhost

The login context of https://auth.citodata.com will appear, which you have to use in order to log in.

## Endpoints

The following endpoints are available via https://api.citodata.com:

**GET** /custom-test-suite/:customTestSuiteId

- **Description**: Returns a custom test suite object that is describing a custom SQL test
- **URL Parameters**:
  - customTestSuiteId (required; The id of the custom test suite to return)
- **Returns**: Custom test suite object under status code 200

**GET** /custom-test-suites

- **Description**: Returns all custom test suite objects that match the given query parameters
- **Query Parameters**:
  - executionFrequency (optional; the execution frequency of a test in h)
  - activated (optional; the activation status of a test (true or false))
- **Returns**: Custom test suite objects under status code 200

**POST** /custom-test-suite

- **Description**: Creates a custom test suite object that is describing a custom SQL test
- **Body Parameters** (JSON):

```json
{
  "activated": "boolean (state that defines if a test is activated (and executed) or not)",
  "threshold": "number (to make a model more or less sensitive against anomalies)",
  "executionFrequency": "number (the frequency of test execution (1, 3, 6, 12 or 24) [in h])",
  "name": "string (the name of the custom test)",
  "description": "string (the description of the custom test)",
  "sqlLogic": "string (the underlying test sql logic that is executed)",
  "targetResourceIds": "string[] (can be an empty array; The ids of columns that are referenced/used in this test)"
}
```

- **Returns**: Custom test suite object under status code 201

**PATCH** /custom-test-suite/:testSuiteId

- **Description**: Updates a test suite object that is describing a column-level test (e.g. Distribution Test)
- **URL Parameters**:
  - testSuiteId (required; The id of the test suite id to update)
- **Body Parameters** (JSON):
```json
{
  "id": "string (The object's id)",
  "activated": "boolean (optional; state that defines if a test is activated (and executed))",
  "threshold": "number (optional; to make a model more or less sensitive against anomalies)",
  "frequency": "number (optional; the frequency of test execution (1, 3, 6, 12 or 24) [in h])",
  "name": "string (optional; the name of the custom test)",
  "description": "string (optional; the description of the custom test)",
  "sqlLogic": "string (optional; the underlying test sql logic that is executed)",
  "targetResourceIds": "string[] (optional; can be an empty array; The ids of columns that are referenced/used in this test)"
}
```
- **Returns**: Id of updated custom test suite object under status code 200

**GET** /test-suite/:testSuiteId

- **Description**: Returns a test suite object that is describing a column-level test (e.g. Distribution Test)
- **URL Parameters**:
  - testSuiteId (required; The id of the test suite to return)
- **Returns**: Test suite object under status code 200

**GET** /test-suites

- **Description**: Returns all test suite objects that match the given query parameters
- **Query Parameters**:
  - executionFrequency (optional; the execution frequency of a test in h)
  - activated (optional; the activation status of a test (true or false))
- **Returns**: Test suite objects under status code 200

**POST** /test-suite

- **Description**: Creates a test suite object that is describing a column-level test (e.g. Distribution Test)
- **Body Parameters** (JSON):

```json
{
  "activated": "boolean (state that defines if a test is activated (and executed))",
  "type": "string (['ColumnFreshness', 'ColumnCardinality', 'ColumnUniqueness', 'ColumnNullness' or 'ColumnDistribution'])",
  "threshold": "number (to make a model more or less sensitive against anomalies)",
  "executionFrequency": "number (the frequency of test execution (1, 3, 6, 12 or 24) [in h])",
  "databaseName": "string (the name of the test target's database)",
  "schemaName": "string (the name of the test target's schema name)",
  "materializationName": "string (the test target's name or the name test target's (column) materialization)",
  "materializationType": "string ('Table' | 'View')",
  "columnName": "string (optional; the test target's name)"
}
```

- **Returns**: Test suite object under status code 201

**PATCH** /test-suite/:testSuiteId

- **Description**: Updates a test suite object that is describing a column-level test (e.g. Distribution Test)
- **URL Parameters**:
  - testSuiteId (required; The id of the test suite id to update)
- **Body Parameters** (JSON):

```json
{
  "id": "string (The object's id)",
  "activated": "boolean (optional; state that defines if a test is activated (and executed))",
  "threshold": "number (optional; to make a model more or less sensitive against anomalies)",
  "frequency": "number (optional; the frequency of test execution (1, 3, 6, 12 or 24) [in h])"
}
```

- **Returns**: Id of updated test suite object under status code 200