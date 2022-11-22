---
sidebar_position: 2
---

# Anomaly Detection

Cito provides out-of-the-box anomaly detection capabilities covering a variety of testing scenarios (e.g. Distribution, Freshness, Nullness, Schema Changes, Custom SQL, etc.).
In a 1-click operation, you can set up anomaly detection test types relevant to your use case. Test executions can be performed based on a schedule defined by you (e.g. hourly, every 6 hours, or daily) or be triggered near real-time based on tables refreshing in Snowflake or an external event (e.g. an event in Airflow, communicated via our API).

You will instantly be alerted via Slack should an anomaly occur. In case you receive an anomaly alert about a false positive, you have the opportunity to provide feedback to the model via a 1-click operation to improve its accuracy going forward. Combined with our powerful visualizations, time-series insights, Slack alerting functionality and [column-level lineage](./column-level-lineage), you gain a powerful understanding of the big picture, which enables you to take action instantly.

Our model improves over time as it learns to understand your particular business context. Please allow 10 test executions for the model to detect the first anomalies.


Cito supports nine test types out-of-the-box:

| **Test Type** | **Valid Targets** | **Good Fits** | **Description** | **Example Alert** |
| :--- | :--- | :--- | :--- | :--- |
| **Column Freshness**	| Column |	Timestamp columns	| Tracks the time elapsed since the most recent value of a time column was updated | More time has elapsed since this column was last updated than expected
| **Cardinality**	| Column |	Enums, dimensions, categories	| Tracks the number of unique values in a column | The cardinality of this column is significantly lower than expected
| **Nullness** | Column	| IDs, any column you expect not to be null |	Tracks the nullness of a column defined as `(# null values / # total values)`. Ranges from `0` to `1`	| The nullness of this column is significantly higher than expected
| **Uniqueness** |	Column	| Primary keys, IDs	| Tracks the uniqueness of a column defined as `(# unique values / # total values)`. Ranges from `0` to `1`	| The uniqueness of this column is significantly lower than expected
| **Distribution** |	Numeric column | Business KPIs, input features into machine learning models	| Tracks five categories of summary statistics: <ul><li>Center: mean, median</li><li>Extent: min, max, range</li><li>Cut points: upper 75th percentile, lower 25th percentile</li><li>Spread: standard deviation, interquartile range (difference between 75th and 25th percentile)</li><li>Distribution: skew, kurtosis </li></ul>	| The mean of this column is significantly higher than expected
| **Row Count** | Table, View |	Regularly refreshed or incrementally updated tables/views	| Tracks the number of rows in a table/view	| The number of rows in this table is significantly lower than expected
| **Column Count** |	Table, View	| Tables/views that you expect to have a stable number of columns	| Tracks the number of columns in a table/view | The number of columns in this table is significantly higher than expected
| **Table Freshness** | Table, View	| Regularly updated tables/views | Tracks time elapsed since the last time a table/view was updated |	More time has elapsed since this table was last updated than expected
| **Schema Change**	| Table, View	| Important tables/views with upstream stakeholders who could make unnanounced schema changes | Monitors the schema of a table/view |	The schema of this table has changed


You can also set up **Custom SQL tests** using our API to monitor anything that is not natively supported.
- If your query returns a scalar numeric value, Cito tracks that value over time and alerts you on an outlier.
- If your query returns a result set, Cito tracks the number of rows returned over time and alerts you on an outlier.
