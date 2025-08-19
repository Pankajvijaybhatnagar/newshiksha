import React from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Conf } from "../../components/confer/Conf.jsx";

export const Conference = () => {
  return (
    <Layout
      breadcrumbTitle={"Conference"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Conf />
    </Layout>
  );
};
