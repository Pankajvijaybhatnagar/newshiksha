import React from "react";
import { Layout } from "../../layouts/Layout";
import { AcademicCouncil } from "../../components/academic/AcademicCouncil.jsx";

export const Academic = () => {
  return (
    <Layout
      breadcrumbTitle={"Academic Council"}
      breadcrumbSubtitle={"Team Members"}
    >
      <AcademicCouncil />
    </Layout>
  );
};
