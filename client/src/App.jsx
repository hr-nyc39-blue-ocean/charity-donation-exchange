import React, { useState } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./styles/shared/Logo.scss";
import "./styles/Global.scss";

const App = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {showDashboard ? (
        <Dashboard
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Home
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default App;
