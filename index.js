const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL ;
//const user_model = require("./models/user_model");
const product_model = require("./models/product_model");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/products', async(req, res) => {
  try {
    const product = await product_model.find();
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');    
  }
});

app.get('/api/product/:id', async(req, res) => {
  try {
    const product = await product_model.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');    
  }
});

app.post('/api/products', async(req, res) => {
  try {
    const product = await product_model.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');    
  }
});

//update product
app.put('/api/product/:id', async(req, res) => {
  try {
    const product = await product_model.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    const updatedProduct = await product_model.findById(req.params.id);
    res.status(200).json(updatedProduct);  
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

mongoose.connect(MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 