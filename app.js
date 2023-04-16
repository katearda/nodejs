require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const db = require("./config/db");
const itemRouter = require("./modules/item/routes");
const authRouter = require("./modules/auth/routes");

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
app.use("/api/items", itemRouter);
app.use("/auth", authRouter);

if (process.env.DEBUG) {
  // Documentation
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
}

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!`);
});
