---
sidebar_position: 1
---

# Column-Level Lineage

Cito Data provides you with automated end-to-end column-level lineage. Not only does it x-ray your data environment and makes hidden dependencies between data resources like columns visible, but it also serves as the underlying infrastructure for handling alerts raised by our [data observability](./anomaly-detection) capabilities. Instead of having to figure out the details of an anomaly manually, our automated column-level lineage instantly provides you with the big picture:

* It helps you to understand whether there is a parent dependency that might have caused the anomaly in the first place and if so which exact parent column is the culprit.
* It instantly provides you with an overview of the downstream impact of the anomaly all the way down to the BI layer. This enables you to quickly understand the severeness of the incident and helps you to prioritize your work accordingly.
* Our built-in SQL viewer enables you to instantly start looking for a corresponding root cause. Here, you can easily access the underlying SQL models to check if some recent logic change, e.g. a new calculation of a column value, led to the anomaly at hand.
