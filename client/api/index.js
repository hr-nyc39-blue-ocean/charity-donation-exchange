import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://localhost:5000",
});

// get all donations
export const getAllDonations = () => {
  return axios.get("http://localhost:5000/v1/donations/");
};

// get non-charity donation listings
export const getNonCharityListings = () => {
  return baseURL({
    method: "GET",
    url: "/v1/noncharityListings",
  });
};

// get all user's donations for dashboard, input userId
export const getDonationsForDashboard = (userId) => {
  return baseURL.get(`/v1/donations/${userId}`);
};

// get all user's CLAIMED donations for dashboard, input userId
export const getClaimedDonationsForDashboard = (userId) => {
  return baseURL.get(`/v1/claimedDonations/${userId}`);
};

// get all user's CLOSED and CANCELLED donations for dashboard, input userId
export const getCancelledDonationsForDashboard = (userId) => {
  return baseURL.get(`/v1/cancelledDonations/${userId}`);
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
  return baseURL({
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
  return baseURL({
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
  return baseURL({
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
  return baseURL({
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
  return baseURL({
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
  return baseURL({
    method: "POST",
    url: "/login",
    data: {
      username: username,
      password: password,
    },
  });
};
//TODO: integrate jwt tokens in this if necessary, can be null while testing
