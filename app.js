require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");

const db = require("./config/db");
const router = require("./modules");

// Express App
const app = express();

// Connect to DB
db.connect();

// Middlewares
// To be able to access request body
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(session({ secret: process.env.SESSION_SECRET }));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use("/api/items", router.itemRouter);
app.use("/auth", router.authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!`);
});
