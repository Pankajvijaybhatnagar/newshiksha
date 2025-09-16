import React from "react";
import { Link, useLocation, matchPath, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const SideBarMenus = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
    },
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
      name: "Talent Registration",
      link: "/admin/talent-registration",
    },
    
    {
      name: "Settings",
      link: "/admin/settings",
    },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/signin")
  };

  return (
    <div
      style={{
        minWidth: "300px",
      }}
      className=" shadow shadow-lg d-flex flex-column "
    >
      <span className="fw-bold text-center px-3 mb fs-5  ">
        <img
          style={{ width: 150, marginBottom: 10, marginTop: 5 }}
          src="/img/logo_black.png"
          alt=""
        />
      </span>
      <ul className="list-group list-group-flush ">
        {SideBarMenus.map((item) => {
          const isActive = matchPath(
            { path: item.link, end: false },
            location.pathname
          );
          return (
            <li
              key={item.link}
              className={`list-group-item py-1   ${
                isActive ? "bg-white fw-bold" : "bg-danger-subtle"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <div className=" flex-grow-1 d-flex">
        <button
          style={{ width: "100%" }}
          className="align-self-end btn btn-danger m-2 "
          onClick={handleLogout}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
