import React from "react";
import { Layout } from "../../layouts/Layout";
import { ShikshaMaha } from "../../components/about/ShikshaMaha";

export const ShikhsaMahaKumbh = () => {
  return (
    <Layout
      breadcrumbTitle={"Shiksha Mahakumbh 2025"}
      breadcrumbSubtitle={"contribute to our cause"}
    >
      <ShikshaMaha />
    </Layout>
  );
};
