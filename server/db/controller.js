const db = require('./index.js');


module.exports = {


  getListings: function (charityOnly = 'false', secondSort = 'newest', callback) { // secondSort = location or newest
    let result = {};
    let sortKeyword = '';

  },

  createUser: function (body, callback) { //

  },

  getUserListings: function (userID, callback) { //
    let result = {};
    let sortKeyword = '';

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

  },

  markAsClaimed: function (body, callback) { // body will contain listingID, claimerName, claimerEmail, claimerPhone, also updates claimed to 'true' and status to 'pending'

  },

  markAsComplete: function (listingID, callback) { // updates status to 'complete'

  },

}