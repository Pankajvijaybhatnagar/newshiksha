import React from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Maha2023 } from "../../components/mediaSection/Maha2023.jsx";

export const Maha2023Digital = () => {
  return (
    <Layout
      breadcrumbTitle={"Media"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Maha2023 />
    </Layout>
  );
};
