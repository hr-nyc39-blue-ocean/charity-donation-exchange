import React, { useState, useEffect } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Modal from "./shared/Modal.jsx";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [showDashboard, setShowDashboard] = useLocalStorage(
    "showDashboard",
    false
  );
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [userId, setUserId] = useLocalStorage("userId", null);
  const [initialModal, setInitialModal] = useLocalStorage("initialModal", true);
  const [seeAllListings, setSeeAllListings] = useLocalStorage(
    "seeAllListings",
    null
  );
  const [username, setUsername] = useLocalStorage("username", null);

  const color = showDashboard ? "blue" : "yellow";

  const toggleInitialModal = () => {
    setInitialModal(!initialModal);
  };

  return (
    <div className={`global ${color}`}>
      {!isLoggedIn && initialModal && (
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
          setSeeAllListings={setSeeAllListings}
          username={username}
          setUsername={setUsername}
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
