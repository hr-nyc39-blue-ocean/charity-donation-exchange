import React, { useState } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";

const App = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const color = showDashboard ? "blue" : "yellow";

  return (
    <div className={`global ${color}`}>
      {showDashboard ? (
        <Dashboard
          userId={userId}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Home
          setUserId={setUserId}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};

export default App;
