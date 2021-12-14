const db = require("./index.js");

/* TODO: account for new status flag ('inactive' for cancelled listings) when retrieving general listings (dont pull inactive)
vs dashboard listings (pull inactive as well but show it as cancelled)
*/

module.exports = {
  getAllListings: function (callback) {
    // always sorted by date since distance sort will be done on front-end
    db.promise()
      .query(`SELECT * FROM Listings ORDER BY date DESC`)
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

  createUser: function (body, callback) {
    // create user with null token at beginning, and then need another function that just updates token
    db.promise()
      .query(
        `INSERT INTO Users (username, password, name, email, phone) VALUES ('${body.username}', '${body.password}', '${body.name}', '${body.email}', '${body.phone}')`
      )
      .then(() => {
        console.log("successfully created new User");
        callback(null);
      })
      .catch((err) => {
        console.log("error creating User>>>", err);
        callback(err);
      });
  },

  updateToken: function (token, username, callback) {
    db.promise()
      .query(`UPDATE Users SET token='${token}' WHERE username='${username}'`)
      .then(() => {
        console.log("successfully updated user's token");
        callback(null);
      })
      .catch((err) => {
        console.log("error updating token >>>>", err);
        callback(err);
      });
  },

  checkIfUserExists: function (email, callback) {
    // checks if user exists already in db (via email)
    db.promise()
      .query(`SELECT EXISTS(SELECT 1 FROM Users WHERE email='${email}')`)
      .then((responseData) => {
        callback(null, responseData[0]);
      })
      .catch((err) => {
        console.log("error checkIfUserExists >>>>", err);
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
    //
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
    //
    db.promise()
      .query(`SELECT * FROM Listings WHERE userID=${userID} AND claimed='true'`) // no sort
      .then((responseData) => {
        console.log("grabbed user specific listings that are claimed");
        callback(null, responseData[0]); // array of relevant entries
      })
      .catch((err) => {
        console.log("error grabbing getUserClaimedListings >>>>", err);
        callback(err);
      });
  },

  getUserCancelledListings: function (userID, callback) {
    //
    db.promise()
      .query(
        `SELECT * FROM Listings WHERE userID=${userID} AND status='cancelled'`
      ) // no sort
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
        `INSERT INTO Listings (name, category, quantity, date, location, photoURL, charityOnly, userID) VALUES ('${body.name}', '${body.category}', ${body.quantity}, now(), ${body.location}, '${body.photoURL}', '${body.charityOnly}', ${body.userID})`
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
    // update listing so status=inactive
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
    // updates status to 'complete'
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
