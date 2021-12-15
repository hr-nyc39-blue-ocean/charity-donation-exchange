const { sign, verify } = require("jsonwebtoken");

const createTokens = (userid) => {
  const accessToken = sign({ id: userid }, "examplesecretchangethis");

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User forbidden, please log in" });

  try {
    const validToken = verify(accessToken, "examplesecretchangethis");
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };
