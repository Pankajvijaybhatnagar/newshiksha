import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={{width:'100%', minHeight:'80vh'}} className="d-flex ">
      <Sidebar />
      <div className="px-5 bg-white flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout;
