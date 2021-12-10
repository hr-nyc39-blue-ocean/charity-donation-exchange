import React, { useState } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";

const App = () => {
  const [dashboardClicked, setDashboardClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {dashboardClicked ? (
        <Dashboard
          dashboardClicked={dashboardClicked}
          setDashboardClicked={setDashboardClicked}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Home
          dashboardClicked={dashboardClicked}
          setDashboardClicked={setDashboardClicked}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default App;
