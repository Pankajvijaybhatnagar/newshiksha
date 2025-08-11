import React from "react";
import { Layout } from "../../layouts/Layout";
import { Sponsor } from "../../components/sponsor/Sponsor";

export const Sponsors = () => {
  return (
    <Layout
      breadcrumbTitle={"sponsor"}
      breadcrumbSubtitle={"contribute to our cause"}
    >
      <Sponsor />
    </Layout>
  );
};
