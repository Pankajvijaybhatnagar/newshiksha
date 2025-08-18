import React from "react";
import { Layout } from "../../layouts/Layout";
import { Commit } from "../../components/comit/Commit";

export const Committee = () => {
  return (
    <Layout
      breadcrumbTitle={"Committee"}
      breadcrumbSubtitle={"contribute to our cause"}
    >
      <Commit />
    </Layout>
  );
};
