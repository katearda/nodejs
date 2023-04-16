const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const dbUrl = process.env.DB_URI;

const connect = async () => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on("error", () => {
    console.log("Could not connect");
  });
  db.once("open", () => {
    console.log("Successfully connected to database");
  });
};
module.exports = { connect };
