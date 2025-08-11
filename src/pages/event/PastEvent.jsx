import React from "react";
import { Layout } from "../../layouts/Layout";
import { Past } from "../../components/events/Past";

export const PastEvent = () => {
  return (
    <Layout breadcrumbTitle={"Event"} breadcrumbSubtitle={"Event"}>
      <Past />
    </Layout>
  );
};
