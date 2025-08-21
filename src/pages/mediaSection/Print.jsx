import React from "react";
import { Layout } from "../../layouts/Layout";
import { PrintPage } from "../../components/mediaSection/PrintPage.jsx";

export const Print = () => {
  return (
    <Layout
      breadcrumbTitle={" Print Media"}
      breadcrumbSubtitle={"Team Members"}
    >
      <PrintPage />
    </Layout>
  );
};
