---
sidebar_position: 1
---

# GitHub

Cito Data seamlessly integrates with GitHub to read dbt meta-data. In order to connect to your dbt repository please follow the steps below:
1. Open the Integrations window in your Cito Data web app.
2. Click on ‘Connect to GitHub’. A GitHub OAuth window appears to grant Cito Data read access to dbt meta-data. You may need to log in.
3. In case you have admin rights within your GitHub organization, an option to grant access should appear. If the corresponding button indicates to request access, an admin will be contacted who will need to approve your request. For more information please see:  [Approving OAuth Apps for your organization - GitHub Docs](https://docs.github.com/en/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
4. After selecting the corresponding repository, webhooks will automatically be added to your repository to trigger the generation of a new column-level lineage upon the occurrence of a pull request.

