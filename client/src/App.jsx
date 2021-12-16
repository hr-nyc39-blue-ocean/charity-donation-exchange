import React, { useState, useEffect } from "react";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Modal from "./shared/Modal.jsx";
//import Cookies from 'js-cookie';


const App = () => {
  //const cookies = Cookies.get("access-token");
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [initialModal, setInitialModal] = useState(true);
  const [seeAllListings, setSeeAllListings] = useState(null);
  const [username, setUsername] = useState(null);

  const color = showDashboard ? "blue" : "yellow";

  const toggleInitialModal = () => {
    setInitialModal(!initialModal);
  };

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
