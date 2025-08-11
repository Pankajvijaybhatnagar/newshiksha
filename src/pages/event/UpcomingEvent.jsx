import React from "react";
import { Layout } from "../../layouts/Layout";
import { Upcoming } from "../../components/events/Upcoming";

export const UpcomingEvent = () => {
  return (
    <Layout breadcrumbTitle={"Event"} breadcrumbSubtitle={"Event"}>
      <Upcoming />
    </Layout>
  );
};
