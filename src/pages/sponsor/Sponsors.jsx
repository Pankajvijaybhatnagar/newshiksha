import React from "react";
import { Layout } from "../../layouts/Layout";
import { Sponsor } from "../../components/sponsor/Sponsor";

export const Sponsors = () => {
  return (
    <Layout
      breadcrumbTitle={"Sponsor"}
    >
      <Sponsor />
    </Layout>
  );
};
