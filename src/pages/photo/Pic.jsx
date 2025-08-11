import React from "react";
import { Layout } from "../../layouts/Layout";
import { Photo } from "../../components/photo/Photo";

export const Pic = () => {
  return (
    <Layout
      breadcrumbTitle={"Photos"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Photo />
    </Layout>
  );
};
