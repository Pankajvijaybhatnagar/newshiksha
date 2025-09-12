import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

const SideBarMenus = [
  
  {
    name: "Conclave Registration",
    link: "/admin/conclave-registration",
  },
  {
    name: "Programs for School Student",
    link: "/admin/programs-school-student",
  },
  {
    name: "DHE English Olympiad",
    link: "/admin/dhe-english-olympiad",
  },
  {
    name: "Best Practices",
    link: "/admin/best-practices",
  },
  {
    name: "Project Display (HEI)",
    link: "/admin/project-display-hei",
  },
  {
    name: "Project Display (School)",
    link: "/admin/project-display-school",
  },
  {
    name: "Accommodation",
    link: "https://ac.shikshamahakumbh.com/",
    external: true,
  },
  {
    name: "General Registration Form",
    link: "/admin/general-registration",
  },
  {
    name: "Volunteer Registration",
    link: "/admin/volunteer-registration",
  },
  {
    name: "Organizer Registration",
    link: "/admin/organizer-registration",
  },
  {
    name: "Talent Registration (Teacher)",
    link: "/admin/talent-registration-teacher",
  },
  {
    name: "Talent Registration (Student)",
    link: "/admin/talent-registration-student",
  },
  {
    name: "Settings",
    link: "/admin/settings",
  },
];



  return (
    <div style={{
      fontSize:14
    }} className=" shadow shadow-lg ">
      <span className="fw-bold text-center px-3 mb fs-5  ">
        <img style={{width:150,marginBottom:10, marginTop:5}} src="/img/logo_black.png" alt="" />
      </span>
      <ul className="list-group list-group-flush ">
        {SideBarMenus.map((item) => {
          const isActive = matchPath({ path: item.link, end: false }, location.pathname);
          return (
            <li
              key={item.link}
              className={`list-group-item py-0  ${isActive ? "bg-white " : "bg-danger-subtle"}`}
              aria-current={isActive ? "true" : undefined}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
