import React from "react";
import { Layout } from "../../layouts/Layout.jsx";
import { Firstform } from "../../components/forms/Firstform.jsx";

export const Newform = () => {
  return (
    <Layout
      breadcrumbTitle={"Event Resistration"}
      breadcrumbSubtitle={""}
    >
      <Firstform />
    </Layout>
  );
};
