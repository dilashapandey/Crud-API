const express = require('express');
const router = express.Router();
const product_model = require('../models/product_model');
const product_controller = require('../controllers/productController');
const { getProductByID, getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:id',getProductByID);

//update product
router.put('/:id',updateProduct);

//delete product
router.delete('/:id',deleteProduct);

module.exports = router;