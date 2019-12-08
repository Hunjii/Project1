const express = require("express");
const app = express();
const morgan = require("morgan");

const mongoose = require("mongoose");

// Routes
const productRoutes = require("./api/routes/rooms.js");
const userRoustes = require("./api/routes/users.js");
const hostRoustes = require("./api/routes/hosts.js");
const oderRoustes = require("./api/routes/oders.js");

// Connect database
// mongoose.connect(
//   'mongodb+srv://hungji:hungvipka0912@mycluster-9ncca.mongodb.net/test?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true
//   }
// );

mongoose.connect("mongodb://127.0.0.1:27017/realstate", {
  useNewUrlParser: true
});

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/api/rooms", productRoutes);
app.use("/api/user", userRoustes);
app.use("/api/host", hostRoustes);
app.use("/api/oder", oderRoustes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
