// TODO: Anonymous user types into search bar
// TODO: Anonymous user sorts by distance
// TODO: Anonymous user sorts by newest
// TODO: Anonymous user sorts by distance and newest
// TODO: Anonymous user registers
// TODO: Anonymous user logs in
// TODO: Donator user logs out
// TODO: Donator user sorts by newest
// TODO: Donator user filters by open, pending (claimed), completed

import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:3000",
});

// get all donations, can specify charityOnly
export const getAllDonations = () => {
  return baseURL({
    method: "GET",
    url: "/v1/donations",
  });
};

// get all user's donations for dashboard, input userId
export const getDonationsForDashboard = (userId) => {
  baseURL.get(`/v1/donations/${userId}`);
};
// logged in user adds new donation to their listings
export const createDonationListing = ({
  item,
  category,
  location,
  photoUrl,
  charityOnly,
  userId,
}) => {
  baseURL({
    method: "POST",
    url: "/v1/donations",
    data: {
      item: item,
      category: category,
      location: location,
      photoUrl: photoUrl,
      charityOnly: charityOnly,
      userId: userId,
    },
  });
};

// charity/anonymous user claim existing donation. Changes status to pending
export const claimDonationListing = ({
  listingId,
  claimed,
  claimerName,
  claimerPhone,
  claimerEmail,
  status,
}) => {
  baseURL({
    method: "PUT",
    url: `/v1/donations/${listingId}`,
    data: {
      listingId: listingId,
      claimed: claimed,
      claimerName: claimerName,
      claimerPhone: claimerPhone,
      claimerEmail: claimerEmail,
      status: status,
    },
  });
};

// complete existing donation. Changes status to complete
export const markDonationListingStatusComplete = (listingId) => {
  return baseURL({
    method: "PUT",
    url: `/v1/donations/${listingId}`,
    data: {
      listingId: listingId,
    },
  });
};

// cancels/deletes existing donation
export const cancelDonationListing = (listingId) => {
  return baseURL({
    method: "PUT",
    url: `/v1/donations/${listingId}`,
    data: {
      listingId: listingId,
    },
  });
};
//**helpers for sign up and sign in */
//TODO: implement tokens
export const signupUser = ({ name, username, email, password, phone }) => {
  baseURL({
    method: "POST",
    url: "/signup",
    data: {
      name: name,
      username: username,
      email: email,
      password: password,
      phone: phone
    },
  });
};

export const loginUser = ({ username, password }) => {
  baseURL({
    method: "POST",
    url: "/login",
    data: {
      username: username,
      password: password,
    },
  });
};
//TODO: integrate jwt tokens in this if necessary, can be null while testing
