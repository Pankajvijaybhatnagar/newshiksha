import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={{width:'100%', minHeight:'80vh'}} className="d-flex bg-danger-subtle ">
      <Sidebar />
      <div className="px-3 bg-white flex-grow-1 pt-4">{children}</div>
    </div>
  );
};

export default AdminLayout;
