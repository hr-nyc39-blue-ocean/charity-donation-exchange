import React, { useState, useEffect } from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import DashboardLogo from "../../dist/img/DashboardLogo.jpeg";
import Header from "./Header.jsx";
import { getAllDonations } from "../../api/index.js";

const Dashboard = ({
  userId,
  setShowDashboard,
  setIsLoggedIn,
  showDashboard,
  donations,
}) => {
  const [userDonations, setUserDonations] = useState([]);

  useEffect(() => {
    getAllDonations().then((r) => setUserDonations(r.data));
  }, []);

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
      <DonationList donations={userDonations} showDashboard={showDashboard} />
    </div>
  );
};

export default Dashboard;
