import React from "react";
import { Layout } from "../../layouts/Layout";
import { Digital } from "../../components/mediaSection/Digital.jsx";

export const DigitalPage = () => {
  return (
    <Layout
      breadcrumbTitle={"Media"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Digital />
    </Layout>
  );
};
