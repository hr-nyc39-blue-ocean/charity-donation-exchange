const db = require('./index.js');


module.exports = {


  getListings: function (charityOnly = 'false', callback) { // always sorted by date since distance sort will be done on front-end
    db.promise().query(`SELECT * FROM Listings WHERE charityOnly='${charityOnly} ORDER BY date DESC'`)
    .then((responseData) => {
      console.log('grabbed all listings');
      callback(null, responseData[0]); // array of relevant entries
    })
    .catch(err => {
      console.log('error getListings >>>>', err);
      callback(err);
    })
  },

  createUser: function (body, callback) { //

  },

  getUserAllListings: function (userID, callback) { //
    db.promise().query(`SELECT * FROM Listings WHERE userID=${userID}`) // no sort
    .then((responseData) => {
      console.log('grabbed all listings of target user');
      callback(null, responseData[0]); // array of relevant entries
    })
    .catch(err => {
      console.log('error getUserAllListings >>>>', err);
      callback(err);
    })
  },


  getUserClaimedListings: function (userID, callback) { //
    db.promise().query(`SELECT * FROM Listings WHERE userID=${userID} AND claimed='true'`) // no sort
    .then((responseData) => {
      console.log('grabbed user specific listings that are claimed');
      callback(null, responseData[0]); // array of relevant entries
    })
    .catch(err => {
      console.log('error grabbing getUserClaimedListings >>>>', err);
      callback(err);
    })
  },

  postListing: function (body, callback) { // posts listing
    db.promise().query(`INSERT INTO Listings (name, category, date, location, photoURL, charityOnly, userID) VALUES ('${body.name}', '${body.category}', now(), ${body.location}, '${body.photoURL}', '${body.charityOnly}', ${body.userID})`)
      .then(() => {
        console.log('successfully posted new listing');
        callback(null);
      })
      .catch(err => {
        console.log('error posting listing >>>>', err);
        callback(err);
      })
  },

  deleteListing: function (listingID, callback) { // deletes listing that has the applicable listingID
    db.promise().query(`DELETE FROM Listings WHERE listingID = ${listingID}`)
    .then(() => {
      console.log('successfully deleted targetted listing');
      callback(null);
    })
    .catch(err => {
      console.log('error deleting listing >>>>', err);
      callback(err);
    })
  },

  markAsClaimed: function (listingID, claimerInfo, callback) { // listingID separate for now, claimerInfo = claimerName, claimerEmail, claimerPhone. Also updates claimed to 'true' and status to 'pending'
    const { claimerName, claimerEmail, claimerPhone } = claimerInfo;
    db.promise().query(`UPDATE Listings SET status='pending', claimed='true', claimerName='${claimerName}', claimerEmail='${claimerEmail}', claimerPhone='${claimerPhone}' WHERE listingID = ${listingID}`)
    .then(() => {
      console.log('successfully updated listing with claimer\'s info and marked it as claimed and status pending');
      callback(null);
    })
    .catch(err => {
      console.log('error updating listing after claim >>>>', err);
      callback(err);
    })
  },


  markAsComplete: function (listingID, callback) { // updates status to 'complete'
    db.promise().query(`UPDATE Listings SET status='closed' WHERE listingID = ${listingID}`)
    .then(() => {
      console.log('successfully marked listing status as closed');
      callback(null);
    })
    .catch(err => {
      console.log('error marking listing as closed >>>>', err);
      callback(err);
    })
  },
}