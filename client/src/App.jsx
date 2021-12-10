import React, { useState } from "react";
import Button from "./shared/Button.jsx";
import Donation from "./shared/Donation.jsx";
import Input from "./shared/Input.jsx";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";

const App = () => {
  const [dashboardClicked, setDashboardClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {dashboardClicked ? (
        <Dashboard
          setDashboardClicked={setDashboardClicked}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Home
          setDashboardClicked={setDashboardClicked}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default App;
