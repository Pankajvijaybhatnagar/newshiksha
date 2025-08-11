import React from "react";
import { Layout } from "../../layouts/Layout";
import { Shiksha } from "../../components/about/Shiksha";

export const ShikhsaKumbh = () => {
  return (
    <Layout
      breadcrumbTitle={"Shiksha Mahakumbh 2025"}
      breadcrumbSubtitle={"contribute to our cause"}
    >
      <Shiksha />
    </Layout>
  );
};
