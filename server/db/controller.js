const db = require('./index.js');

// https://storage.googleapis.com/plos-corpus-prod/10.1371/journal.pone.0194799/1/pone.0194799.s001.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wombat-sa%40plos-prod.iam.gserviceaccount.com%2F20211210%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20211210T164719Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=ce0e6812177cc609df5d6f7650cda204dfc70d789e7eb1ef41b6b23eb663f4368fa852ca7d0d80a242ce36bff9739da072be8a4f77f9dfe4b12d42c8248110d06fd12d2b5343cedfb6b2f93bc3aeeeac9d0fdcfc873975827447a8138e2fb320afbafe360f987de75e5d4ea57f8cf79415ab937b3ba7358e11acdfcc0673c524e949ede02d8ddb67eae2af600d40c40e611bbb6987deeff5c9697c0960ef8d6fb85163485d01e0322938e3f455088b058e7f7ffa62bdfe4a2a3ec3d03dea623f996d887b50a8d5bb77f551cbdb6d968d76ba8ff8d6c1bf5b93cb162b872c4edc16b5017bfa4d82e57916d8266d04b7f88b82ce2c03956b0859ffd717b19166de
// zip code list by borough


module.exports = {


  getListings: function (userID, sort, callback) { // charityOnly/location(borough) or date /// default: newest extra: borough?
    let result = {};
    let sortKeyword = '';

  },

  createUser: function (product_id, callback) { //

  },

  getUserListings: function (userID, callback) { // default: newest extra: borough?
    let result = {};
    let sortKeyword = '';

  },

  postListing: function (body, callback) { // posts listing, maybe need to process location (zip) into borough and add it to table/DB
    db.promise().query(`INSERT INTO Listings (name, category, date, location, photoURL, charityOnly, userID) VALUES ('${body.name}', '${body.category}', now(), ${body.location}, '${body.photoURL}', '${body.charityOnly}', ${body.userID})`)
      .then(() => {
        callback(null);
      })
      .catch(err => {
        console.log('error posting listing >>>>', err);
        callback(err);
      })
  },

  deleteListing: function (listingID, callback) {

  },

  markAsClaimed: function (body, callback) { // body will contain listingID, claimerName, claimerEmail, claimerPhone, also updates claimed and status

  },

}