---
sidebar_position: 2
---

# Anomaly Detection

Cito provides out-of-the-box anomaly detection capabilities covering a variety of testing scenarios (e.g. Distribution, Freshness, Nullness, Schema Changes, Custom SQL, etc.).
In a 1-click operation, you can set up anomaly detection test types relevant to your use case. Test executions can be performed based on a schedule defined by you (e.g. hourly, every 6 hours, or daily) or be triggered near real-time based on tables refreshing in Snowflake or an external event (e.g. an event in Airflow, communicated via our API).

You will instantly be alerted via Slack should an anomaly occur. In case you receive an anomaly alert about a false positive, you have the opportunity to provide feedback to the model via a 1-click operation to improve its accuracy going forward. Combined with our powerful visualizations, time-series insights, Slack alerting functionality and [column-level lineage](./column-level-lineage), you gain a powerful understanding of the big picture, which enables you to take action instantly.

Our model improves over time as it learns to understand your particular business context. Please allow 10 test executions for the model to detect the first anomalies.