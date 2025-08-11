import React from "react";
import { Layout } from "../../layouts/Layout";
import { Press } from "../../components/press/Press";

export const PressRelease = () => {
  return (
    <Layout
      breadcrumbTitle={"Press Release"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Press />
    </Layout>
  );
};
