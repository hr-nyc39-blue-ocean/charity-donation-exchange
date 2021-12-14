import React, { useState, useEffect } from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import DashboardLogo from "../../dist/img/DashboardLogo.jpeg";
import Header from "./Header.jsx";
import { getDonationsForDashboard } from "../../api/index.js";

const Dashboard = ({
  userId,
  setShowDashboard,
  setIsLoggedIn,
  showDashboard,
}) => {
  const [userDonations, setUserDonations] = useState([]);

  useEffect(() => {
    getDonationsForDashboard(3).then((r) => setUserDonations(r.data));
  }, []);

  const fetchUserDonations = () => {
    getDonationsForDashboard(3).then((r) => setUserDonations(r.data));
  };

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
      <DonationList
        fetch={fetchUserDonations}
        donations={userDonations}
        showDashboard={showDashboard}
      />
    </div>
  );
};

export default Dashboard;
