import React from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import DashboardHeader from "./DashboardHeader.jsx";

const Dashboard = ({
  userId,
  setShowDashboard,
  setIsLoggedIn,
  showDashboard,
}) => {
  return (
    <div className="dashboard global">
      <DashboardHeader />
      <NavBar
        userId={userId}
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
        setIsLoggedIn={setIsLoggedIn}
      />
      <DonationList showDashboard={showDashboard} />
    </div>
  );
};

export default Dashboard;
