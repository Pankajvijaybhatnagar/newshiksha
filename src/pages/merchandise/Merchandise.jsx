import React from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Sale } from "../../components/merchandise/Sale.jsx";

export const Merchandise = () => {
  return (
    <Layout
      breadcrumbTitle={"Merchandise"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Sale />
    </Layout>
  );
};
