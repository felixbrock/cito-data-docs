---
sidebar_position: 1
---

# Actionability through Column-Level Lineage

Cito provides you with automated column-level lineage. Not only does it x-ray your data environment and makes hidden dependencies between data resources visible, but it also serves as the underlying infrastructure for handling alerts provided through our [data observability](./anomaly-detection) capabilities. Instead of having to figure out the details of an anomaly manually, our automated column-level lineage instantly provides you with the big picture:

* It helps you to understand whether there is a parent dependency that might have caused the anomaly in the first place and if so which exact parent column is the culprit.
* It instantly provides you with an overview of the downstream impact of an anomaly all the way down to the BI layer. This enables you to quickly understand the severeness of the incident and helps you to prioritize your work accordingly.
* In-app SQL code accessibility enables you to instantly start looking for a corresponding root cause. Here, you can easily access the underlying SQL models to check if some recent logic change, e.g. a new calculation of a column value that led to the anomaly at hand.

Despite covering most of the Snowflake query syntax and cases between different statements,there are some exceptions that are not handled by our lineage as of now. We are continuously improving our solution and hence the list of exceptions will shorten soon:

* Keywords as identifier names: If a column is named as a Snowflake reserved or limited keyword (eg. date, status, current_time) we will not take this into account in the lineage.
* Inlined user defined functions: If an SQL file contains an inlined user defined function, our lineage will not take this into account.
* Dashboard names: Currently our lineage will only display a link to a dashboard and not the name.


