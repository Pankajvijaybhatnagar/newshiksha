import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useWow } from "./lib/hooks/useWow";
import { HomeTwo } from "./pages/home/HomeTwo";
import { HomeThree } from "./pages/home/HomeThree";
import { HomeFour } from "./pages/home/HomeFour";
import { HomeFive } from "./pages/home/HomeFive";
import { HomeSix } from "./pages/home/HomeSix";
import { HomeSeven } from "./pages/home/HomeSeven";
import { HomeEight } from "./pages/home/HomeEight";
import { CoursesGridView } from "./pages/course/CoursesGridView";
import { CoursesListView } from "./pages/course/CoursesListView";
import { CoursesGridSidebar } from "./pages/course/CoursesGridSidebar";
import { CoursesDetails } from "./pages/course/CoursesDetails";
import { About } from "./pages/about/About";
import { Error } from "./pages/error/Error";
import { Event } from "./pages/event/Event";
import { PastEvent } from "./pages/event/PastEvent";
import { UpcomingEvent } from "./pages/event/UpcomingEvent";
import { Pic } from "./pages/photo/Pic";
import { Vid } from "./pages/video/Vid";
import { EventDetails } from "./pages/event/EventDetails";
import { TeamMembers } from "./pages/team/TeamMembers";
import { TeamMemberDetails } from "./pages/team/TeamMemberDetails";
import { StudentRegistration } from "./pages/auth/StudentRegistration";
import { InstructorRegistrations } from "./pages/auth/InstructorRegistrations";
import { Signup } from "./pages/auth/Signup";
import { Signin } from "./pages/auth/Signin";
import { Faq } from "./pages/faq/Faq";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { Blog } from "./pages/blogs/Blog";
import { BlogWithSidebar } from "./pages/blogs/BlogWithSidebar";
import { BlogDetails } from "./pages/blogs/BlogDetails";
import { Contact } from "./pages/contact/Contact";
import { PressRelease } from "./pages/press/PressRelease";
import { PressDetails } from "./pages/press/PressDetails";
import {MediaPage} from "./pages/mediaSection/MediaPage";
import {Submit} from "./pages/paper/Submit";
import {Sponsors} from "./pages/sponsor/Sponsors"; 
import {DigitalPage} from "./pages/mediaSection/DigitalPage";
import { Wishes } from "./pages/wishes/Wishes";
import { NewProgram } from "./pages/program/NewProgram";
import {ShikhsaKumbh} from "./pages/about/Shikshakumbh";
import { ShikhsaMahaKumbh } from "./pages/about/ShikshaMAhaKumbh";
import { ShikhsaVibhag } from "./pages/about/ShikshaVibhag";
import { VitVibhag } from "./pages/about/VitVibhag";
import { Prachar } from "./pages/about/Prachar";
import { SamparkVibhag } from "./pages/about/Sampark";
import { Prabandhan } from "./pages/about/Prabhandh";
import { Digital2023Page } from "./pages/mediaSection/Digital2023Page";
import { MahaDigital } from "./pages/mediaSection/MahaDigital";


function App() {
  useWow();

  // on route change to top of the page
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/home-v2" element={<HomeTwo />} />
      <Route path="/home-v3" element={<HomeThree />} />
      <Route path="/home-v4" element={<HomeFour />} />
      <Route path="/home-v5" element={<HomeFive />} />
      <Route path="/home-v6" element={<HomeSix />} />
      <Route path="/home-v7" element={<HomeSeven />} />
      <Route path="/home-v8" element={<HomeEight />} />
      <Route path="/courses-grid-view" element={<CoursesGridView />} />
      <Route path="/courses-list-view" element={<CoursesListView />} />
      <Route
        path="/courses-grid-with-sidebar"
        element={<CoursesGridSidebar />}
      />
      <Route path="/course-details" element={<CoursesDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/ShikshaKumbh" element={<ShikhsaKumbh />} />
      <Route path="/about/ShikshaMahaKumbh" element={<ShikhsaMahaKumbh />} />
      <Route path="/about/ShikshaVibhag" element={<ShikhsaVibhag />} />
      <Route path="/about/VitVibhag" element={<VitVibhag />} />
      <Route path="/about/pracharVibhag" element={<Prachar />} />
      <Route path="/about/SamparkVibhag" element={<SamparkVibhag />} />
      <Route path="/about/prabandhanVibhag" element={<Prabandhan />} />
      <Route path="/event" element={<Event />} />
      <Route path="/past-event" element={<PastEvent />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/upcoming-event" element={<UpcomingEvent />} />
      <Route path="/photos" element={<Pic />} />
      <Route path="/videos" element={<Vid />} />
      <Route path="/press-release" element={<PressRelease />} />
      <Route path="/press-release/:id" element={<PressDetails />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/media/digital-media" element={<DigitalPage />} />
      <Route path="/media/digital-media2023" element={<Digital2023Page />} />
      <Route path="/media/shikshaMahakumbh2024" element={<MahaDigital />} />
      <Route path="/paper-submission" element={<Submit />} />
      <Route path="/sponsor" element={<Sponsors />} />
      <Route path="/wishes-received" element={<Wishes />} />
      <Route path="/shikshaMahakumbh2025" element={<NewProgram />} />



      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/team-members" element={<TeamMembers />} />
      <Route path="/team-member-details" element={<TeamMemberDetails />} />
      <Route
        path="/students-registration"
        element={<StudentRegistration />}
      />
      <Route
        path="/instructor-registrations"
        element={<InstructorRegistrations />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-with-sidebar" element={<BlogWithSidebar />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
