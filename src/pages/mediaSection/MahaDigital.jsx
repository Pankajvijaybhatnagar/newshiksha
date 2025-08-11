import React from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Maha } from "../../components/mediaSection/Maha.jsx";

export const MahaDigital = () => {
  return (
    <Layout
      breadcrumbTitle={"Media"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Maha />
    </Layout>
  );
};
