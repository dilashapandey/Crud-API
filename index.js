const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const db = require("./config/db");
//const user_model = require("./models/user_model");
const product_model = require("./models/product_model");
const productRoute = require("./routes/productRoute");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products",productRoute)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 