import React from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import DashboardLogo from "../../dist/img/DashboardLogo.jpeg";
import Header from "./Header.jsx";

const Dashboard = ({
  userId,
  setShowDashboard,
  setIsLoggedIn,
  showDashboard,
}) => {
  return (
    <div className="dashboard global">
      <Header
        logo={DashboardLogo}
        headerTitle="DASHBOARD"
        colorClassName="blue"
      />
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
