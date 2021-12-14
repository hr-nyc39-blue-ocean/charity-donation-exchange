import React, { useState, useEffect } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Modal from "./shared/Modal.jsx";

const App = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [initialModal, setInitialModal] = useState(true);
  const [seeAllListings, setSeeAllListings] = useState(null);

  const color = showDashboard ? "blue" : "yellow";

  const toggleInitialModal = () => {
    setInitialModal(!initialModal);
  };

  //console.log(seeAllListings);

  return (
    <div className={`global ${color}`}>
      {initialModal && (
        <Modal
          initialModal={initialModal}
          toggleModal={toggleInitialModal}
          seeAllListings={seeAllListings}
          setSeeAllListings={setSeeAllListings}
        />
      )}
      {showDashboard ? (
        <Dashboard
          userId={userId}
          showDashboard={showDashboard}
          setShowDashboard={setShowDashboard}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <Home
          seeAllListings={seeAllListings}
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
