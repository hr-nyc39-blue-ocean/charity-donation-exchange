import React from "react";
import DonationList from "../shared/DonationList.jsx";
import DashboardHeader from "./DashboardHeader.jsx";

const Dashboard = ({ setDashboardClicked, setIsLoggedIn }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DashboardHeader
        setDashboardClicked={setDashboardClicked}
        setIsLoggedIn={setIsLoggedIn}
      />
      <DonationList width={100} height={70} />
    </div>
  );
};

export default Dashboard;
