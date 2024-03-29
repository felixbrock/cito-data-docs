import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";
import { Redirect } from "@docusaurus/router";

export default function Home(): JSX.Element {
  return <Layout><Redirect to={"docs/overview/welcome"} /></Layout>;
}
