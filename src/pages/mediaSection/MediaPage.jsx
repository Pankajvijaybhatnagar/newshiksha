import React from "react";
import { Layout } from "../../layouts/Layout";
import { Media } from "../../components/mediaSection/Media.jsx";

export const MediaPage = () => {
  return (
    <Layout
      breadcrumbTitle={"Media"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Media />
    </Layout>
  );
};
