// require("dotenv").config();
import axios from "axios";

// const baseURL = axios.create({
//   baseURL: `http://${process.env.HOST}:${process.env.PORT}`,
// });

// get all donations
export const getAllDonations = () => {
  return axios.get("/v1/donations/");
};

// get non-charity donation listings
export const getNonCharityListings = () => {
  return axios.get("/v1/noncharityListings");
  // return baseURL({
  //   method: "GET",
  //   url: "/v1/noncharityListings",
  // });
};

// get all user's donations for dashboard, input userId
export const getDonationsForDashboard = (userId) => {
  return axios.get(`/v1/donations/${userId}`);
};

// get all user's CLAIMED donations for dashboard, input userId
export const getClaimedDonationsForDashboard = (userId) => {
  return axios.get(`/v1/claimedDonations/${userId}`);
};

// get all user's CLOSED and CANCELLED donations for dashboard, input userId
export const getCancelledDonationsForDashboard = (userId) => {
  return axios.get(`/v1/cancelledDonations/${userId}`);
};

// logged in user adds new donation to their listings
export const createDonationListing = ({
  name,
  category,
  zipcode,
  photoURL,
  charityOnly,
  userID,
  quantity,
}) => {
  return axios({
    method: "POST",
    url: "/v1/donations",
    data: {
      name: name,
      category: category,
      zipcode: zipcode,
      photoURL: photoURL,
      charityOnly: charityOnly,
      userID: userID,
      quantity: quantity,
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
  return axios({
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
export const markDonationListingStatusComplete = (
  listingId,
  status = "closed"
) => {
  return axios({
    method: "PUT",
    url: `/v1/donations/${listingId}`,
    data: {
      listingId: listingId,
      status: status,
    },
  });
};

// cancels/deletes existing donation
export const cancelDonationListing = (listingId, status = "cancelled") => {
  return axios({
    method: "PUT",
    url: `/v1/donations/${listingId}`,
    data: {
      listingId: listingId,
      status: status,
    },
  });
};

//**helpers for sign up and sign in */
//TODO: implement tokens
export const signupUser = ({ name, username, email, password, phone }) => {
  return axios({
    method: "POST",
    url: "/signup",
    data: {
      name: name,
      username: username,
      email: email,
      password: password,
      phone: phone,
    },
  });
};

export const loginUser = ({ username, password }) => {
  return axios({
    method: "POST",
    url: "/login",
    data: {
      username: username,
      password: password,
    },
  });
};

export const getUserId = (username) => {
  return axios({
    method: "PUT",
    url: "/getID",
    data: {
      username,
    },
  });
};
