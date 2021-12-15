import React, { useState, useEffect } from "react";
import DonationList from "../shared/DonationList.jsx";
import NavBar from "../shared/NavBar.jsx";
import DashboardLogo from "../../dist/img/DashboardLogo.jpeg";
import Header from "./Header.jsx";
import {
  getDonationsForDashboard,
  getClaimedDonationsForDashboard,
  getCancelledDonationsForDashboard,
} from "../../api/index.js";

const Dashboard = ({
  userId,
  setShowDashboard,
  setIsLoggedIn,
  showDashboard,
}) => {
  const [userDonations, setUserDonations] = useState([]);
  const [claimedDonations, setClaimedDonations] = useState([]);
  const [inactiveDonations, setInactiveDonations] = useState([]);
  const [currentView, setCurrentView] = useState("all");

  const fetchUserDonations = () => {
    getDonationsForDashboard(userId).then((r) => setUserDonations(r.data));
    getClaimedDonationsForDashboard(userId).then((r) =>
      setClaimedDonations(r.data)
    );
    getCancelledDonationsForDashboard(userId).then((r) =>
      setInactiveDonations(r.data)
    );
  };

  useEffect(() => {
    fetchUserDonations();
  }, []);

  useEffect(() => {
    fetchUserDonations();
  }, [currentView]);

  const donations = {
    all: userDonations,
    claimed: claimedDonations,
    inactive: inactiveDonations,
  };

  return (
    <div className="dashboard global">
      <Header
        logo={DashboardLogo}
        headerTitle="DASHBOARD"
        colorClassName="blue"
      />
      <NavBar
        setCurrentView={setCurrentView}
        userId={userId}
        showDashboard={showDashboard}
        setShowDashboard={setShowDashboard}
        setIsLoggedIn={setIsLoggedIn}
        fetchUserDonations={fetchUserDonations}
      />
      <DonationList
        fetch={fetchUserDonations}
        donations={donations[currentView]}
        showDashboard={showDashboard}
      />
    </div>
  );
};

export default Dashboard;
