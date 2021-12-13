import React from "react";
import Logo from "../../dist/img/DashboardLogo.jpeg";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div>
        <img id="logo" src={Logo} alt="logo" />
      </div>
      <div className="dashboard-title">
        <div>DASHBOARD</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
