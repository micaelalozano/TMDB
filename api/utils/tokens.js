//Para poder hacer el login con Auth
const jwt = require("jsonwebtoken");
const SECRET = "TMDB";

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2days" });
  return token;
};

const validateToken = (token) => {
  console.log(token);
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
