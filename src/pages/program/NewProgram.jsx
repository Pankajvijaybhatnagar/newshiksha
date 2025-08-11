import React from "react";
import { Layout } from "../../layouts/Layout";
import { NewOne } from "../../components/program/NewOne";

export const NewProgram = () => {
  return (
    <Layout
      breadcrumbTitle={"Shiksha Mahakumbh 2025"}
      breadcrumbSubtitle={"contribute to our cause"}
    >
      <NewOne />
    </Layout>
  );
};
