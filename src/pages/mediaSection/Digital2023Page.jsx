import React from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Digital2023 } from "../../components/mediaSection/Digital2023.jsx";

export const Digital2023Page = () => {
  return (
    <Layout
      breadcrumbTitle={"Media"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Digital2023 />
    </Layout>
  );
};
