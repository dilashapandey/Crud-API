const product_model = require("../models/product_model");

const getProducts = async (req,res) => {
try {
    const product = await product_model.find();
    res.status(200).json(product);
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');    
    }
}

const getProductByID = async (req,res) => {
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
}

const createProduct = async (req,res) => {
    try {
    const product = await product_model.create(req.body);
    res.status(200).json(product);
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');    
    }
}

const updateProduct = async (req,res) => {
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
}

const deleteProduct = async (req,res) => {
try {
    const product = await product_model.findByIdAndDelete(req.params.id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
    }
}


module.exports= {
    getProducts,getProductByID,createProduct,updateProduct,deleteProduct
}