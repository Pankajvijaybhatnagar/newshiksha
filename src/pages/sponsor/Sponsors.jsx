import React from "react";
import { Layout } from "../../layouts/Layout";
import { Sponsor } from "../../components/sponsor/sponsor";

export const Sponsors = () => {
  return (
    <Layout
      breadcrumbTitle={"Sponsor"}
    >
      <Sponsor />
    </Layout>
  );
};
