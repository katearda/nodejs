const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers["token"];
  if (token === null) return res.status(401).json({ msg: "Not Authorized" });
  jwt.verify(token, process.env.SESSION_SECRET, (err, user) => {
    if (err) return res.status(401).json({ msg: err });
    req.user = user;
    next();
  });
};

module.exports = {
  isAuthenticated,
};
