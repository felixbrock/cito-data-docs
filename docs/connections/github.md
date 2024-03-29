---
sidebar_position: 2
---

# Github

You want to setup your Snowflake integration beforehand, so we can provide you with data lineage all the way down to your BI tools.

Cito seamlessly integrates with GitHub to read dbt metadata. In order to connect to your dbt repository please follow the steps below:

Compatibility: dbt version 0.19.0 and above

1. Open the Integrations window in your Cito web app.
2. Open the Github tab and click on ‘Install Cito Data Github App’. A GitHub OAuth window appears to grant Cito read access to dbt metadata. You may need to log in.
3. If you have admin rights within your GitHub organization, an option to grant access should appear. If the corresponding button indicates to request access, an admin will be contacted who will need to approve your request. For more information please see:  [Approving OAuth Apps for your organization - GitHub Docs](https://docs.github.com/en/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
4. After selecting a repository (the coverage of multiple repositories will be introduced soon) that holds a dbt project and a corresponding catalog.json and manifest.json file you will automatically be redirected to the web-app lineage screen. Webhooks will automatically be added to your repository to trigger the generation of a new column-level lineage once new changes are pushed to the repository. Please make sure to run `dbt docs generate` and to actually push the catalog.json and manifest.json to your remote repository. Please give the lineage some time to appear in your Cito Web App.

