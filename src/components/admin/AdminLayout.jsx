import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={{width:'100%', minHeight:'80vh'}} className="d-flex bg-danger-subtle ">
      <Sidebar />
      <div style={{
        maxHeight:'85vh',
        fontSize:13
      }} className="px-3 bg-white flex-grow-1 pt-4 overflow-y-auto">{children}</div>
    </div>
  );
};

export default AdminLayout;
