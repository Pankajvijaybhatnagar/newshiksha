import React from "react";
import { Layout } from "../../layouts/Layout";
import { Wish } from "../../components/wishes/Wish";
// import wishesImg from "../../assets/img/breadcrumb/wishes.jpg";

export const Wishes = () => {
  return (
    <Layout
          breadcrumbTitle={"Wishes Received"}
        >
          <Wish />
        </Layout>
  );
};
