import React from "react";
import { Layout } from "../../layouts/Layout";
import { Video } from "../../components/videos/Video";

export const Vid = () => {
  return (
    <Layout
      breadcrumbTitle={"Videos"}
      breadcrumbSubtitle={"Team Members"}
    >
      <Video />
    </Layout>
  );
};
