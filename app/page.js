"use client";
import React from "react";
import {HeroOne} from "../components/hero/HeroOne";
// import {VideoTwo} from "../components/videos/VideoTwo";
// import {VideoOne} from "../components/videos/VideoOne";
import { AboutOne } from "../components/about/AboutOne";
import { DepartmentOne } from "../components/departments/DepartmentOne";
import { AboutSix } from "../components/about/AboutSix";
import { EventOne } from "../components/events/EventOne";



const HomePage = () => {
  return (
    <>
      <HeroOne />
      {/* <VideoOne />
      <VideoTwo /> */}
      <AboutOne />
      <DepartmentOne />
      <AboutSix />
      <EventOne />
    </>
     
   
  );
};

export default HomePage;