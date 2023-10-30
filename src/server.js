const express = require("express");
const cors = require("cors");
const { getIPAddress } = require("./controllers/IpAddressController");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/:ip", getIPAddress);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(process.env.PORT || 3000);
  console.log(`Server is up and running on port ${process.env.PORT || 3000}`);
});
