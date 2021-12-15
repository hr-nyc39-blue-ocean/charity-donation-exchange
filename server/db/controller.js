const db = require("./index.js");

module.exports = {
  getAllListings: function (callback) {
    // this is for charities so show active only
    // always sorted by date since distance sort will be done on front-end
    db.promise()
      .query(`SELECT * FROM Listings WHERE status='open' ORDER BY date DESC`)
      .then((responseData) => {
        console.log("grabbed all listings");
        callback(null, responseData[0]); // array of relevant entries
      })
      .catch((err) => {
        console.log("error getListings >>>>", err);
        callback(err);
      });
  },

  getNonCharityListings: function (callback) {
    db.promise()
      .query(
        `SELECT * FROM Listings WHERE charityOnly='false' ORDER BY date DESC`
      )
      .then((responseData) => {
        console.log("grabbed all listings");
        callback(null, responseData[0]); // array of relevant entries
      })
      .catch((err) => {
        console.log("error getListings >>>>", err);
        callback(err);
      });
  },

  createUser: function (body, hash, callback) {
    // create user with null token at beginning
    db.promise()
      .query(
        `INSERT INTO Users (username, password, name, email, phone) VALUES ('${body.username}', '${hash}', '${body.name}', '${body.email}', '${body.phone}')`
      )
      .then(() => {
        console.log("successfully created new User with null token");
        callback(null);
      })
      .catch((err) => {
        console.log("error creating User>>>", err);
        callback(err);
      });
  },

  updateToken: function (token, email, callback) {
    db.promise()
      .query(`UPDATE Users SET token='${token}' WHERE email='${email}'`)
      .then(() => {
        console.log("successfully updated user's token");
        callback(null);
      })
      .catch((err) => {
        console.log("error updating token >>>>", err);
        callback(err);
      });
  },

  checkIfUsernameExists: function (username, callback) {
    // checks if user exists already in db (via username)
    db.promise()
      .query(`SELECT EXISTS(SELECT 1 FROM Users WHERE username='${username}')`)
      .then((responseData) => {
        callback(null, responseData[0]);
      })
      .catch((err) => {
        console.log("error checkIfUserExists >>>>", err);
        callback(err);
      });
  },

  checkIfEmailExists: function (email, callback) {
    // checks if user exists already in db (via email)
    db.promise()
      .query(`SELECT EXISTS(SELECT 1 FROM Users WHERE email='${email}')`)
      .then((responseData) => {
        callback(null, responseData[0]);
      })
      .catch((err) => {
        console.log("error checkIfEmailExists >>>>", err);
        callback(err);
      });
  },

  checkUserAtLogin: function (username, callback) {
    // Lamia/Rich when you login, send back encrypted password
    db.promise()
      .query(`SELECT password FROM Users WHERE username='${username}'`)
      .then((responseData) => {
        callback(null, responseData[0]);
      })
      .catch((err) => {
        console.log("error checkUserAtLogin >>>>", err);
        callback(err);
      });
  },

  sendBackUserID: function (username, callback) {
    db.promise()
      .query(`SELECT userID FROM Users WHERE username='${username}'`)
      .then((responseData) => {
        callback(null, responseData[0]);
      })
      .catch((err) => {
        console.log("error sendBackUserID >>>>", err);
        callback(err);
      });
  },

  getUserAllListings: function (userID, callback) {
    // shows all listings by User, even cancelled listings
    db.promise()
      .query(`SELECT * FROM Listings WHERE userID=${userID}`) // no sort
      .then((responseData) => {
        console.log("grabbed all listings of target user");
        callback(null, responseData[0]); // array of relevant entries
      })
      .catch((err) => {
        console.log("error getUserAllListings >>>>", err);
        callback(err);
      });
  },

  getUserClaimedListings: function (userID, callback) {
    // User's claimed but not closed/cancelled listings
    db.promise()
      .query(
        `SELECT * FROM Listings WHERE userID=${userID} AND claimed='true' AND status='pending'`
      ) // no sort
      .then((responseData) => {
        console.log(
          "grabbed user specific listings that are claimed with pending status"
        );
        callback(null, responseData[0]); // array of relevant entries
      })
      .catch((err) => {
        console.log("error grabbing getUserClaimedListings >>>>", err);
        callback(err);
      });
  },

  getUserCancelledListings: function (userID, callback) {
    // cancelled listings only
    db.promise()
      .query(
        `SELECT * FROM Listings WHERE userID=${userID} AND status='cancelled'`
      )
      .then((responseData) => {
        console.log("grabbed user specific listings that are claimed");
        callback(null, responseData[0]); // array of relevant entries
      })
      .catch((err) => {
        console.log("error grabbing getUserClaimedListings >>>>", err);
        callback(err);
      });
  },

  postListing: function (body, callback) {
    db.promise()
      .query(
        `INSERT INTO Listings (name, category, quantity, date, zipcode, photoURL, charityOnly, userID) VALUES ('${body.name}', '${body.category}', ${body.quantity}, now(), ${body.zipcode}, '${body.photoURL}', '${body.charityOnly}', ${body.userID})`
      )
      .then(() => {
        console.log("successfully posted new listing");
        callback(null);
      })
      .catch((err) => {
        console.log("error posting listing >>>>", err);
        callback(err);
      });
  },

  cancelListing: function (listingID, callback) {
    // update listing status=inactive
    db.promise()
      .query(
        `UPDATE Listings SET status='cancelled' WHERE listingID = ${listingID}`
      )
      .then(() => {
        console.log("successfully cancelled targetted listing");
        callback(null);
      })
      .catch((err) => {
        console.log("error cancelling listing >>>>", err);
        callback(err);
      });
  },

  markAsClaimed: function (listingID, claimerInfo, callback) {
    // listingID separate for now, claimerInfo = claimerName, claimerEmail, claimerPhone. Also updates claimed to 'true' and status to 'pending'
    const { claimerName, claimerEmail, claimerPhone } = claimerInfo;
    db.promise()
      .query(
        `UPDATE Listings SET status='pending', claimed='true', claimerName='${claimerName}', claimerEmail='${claimerEmail}', claimerPhone='${claimerPhone}' WHERE listingID = ${listingID}`
      )
      .then(() => {
        console.log(
          "successfully updated listing with claimer's info and marked it as claimed and status pending"
        );
        callback(null);
      })
      .catch((err) => {
        console.log("error updating listing after claim >>>>", err);
        callback(err);
      });
  },

  markAsComplete: function (listingID, callback) {
    // updates listing status to 'closed'
    db.promise()
      .query(
        `UPDATE Listings SET status='closed' WHERE listingID = ${listingID}`
      )
      .then(() => {
        console.log("successfully marked listing status as closed");
        callback(null);
      })
      .catch((err) => {
        console.log("error marking listing as closed >>>>", err);
        callback(err);
      });
  },
};
