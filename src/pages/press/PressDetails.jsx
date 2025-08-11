import React from "react";
import { Layout } from "../../layouts/Layout";
import { PressDetail } from "../../components/press/PressDetail";

export const PressDetails = () => {
  return (
    <Layout breadcrumbTitle="Event Details" breadcrumbSubtitle="Event Details">
      <PressDetail />
    </Layout>
  );
};
