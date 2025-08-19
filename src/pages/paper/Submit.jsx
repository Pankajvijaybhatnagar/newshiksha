import React from "react";
import { Layout } from "../../layouts/Layout";
import { Submission } from "../../components/paper submission/Submission";
// import Img from "../../assets/img/breadcrumb/paper.jpg";

export const Submit = () => {
  return (
    <Layout
          breadcrumbTitle={"Paper Submission"}
        >
          <Submission />
        </Layout>
  );
};
