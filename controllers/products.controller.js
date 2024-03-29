const Product = require("../models/product.model.js");

const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();
    response.status(200).send(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const addProduct = async (request, response) => {
  try {
    const product = await Product.create(request.body);
    response.status(200).send(product);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getSingleProduct = async (request, response) => {
  const {
    params: { name },
  } = request;
  const product = await Product.findOne({ name: `${name}` });
  if (!product) return response.status(404).send("Product Not Found");
  response.status(200).send(product);
};

const updateProduct = async (request, response) => {
  const {
    params: { name },
    body,
  } = request;
  try {
    // const product = await Product.updateOne({ name: `${name}` }, { $set: { quantity: 10 } })
    const product = await Product.findOneAndUpdate({ name: `${name}` }, body);
    if (!product)
      return response.status(404).json({ message: "Product Not Found" });
    response.status(200).send(product);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const deleteProduct = async (request, response) => {
  const {
    params: { name },
  } = request;
  try {
    const product = await Product.findOneAndDelete({ name: `${name}` });
    if (!product) return response.status(404).send("Product Not Found");
    response.status(200).send(product);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getSingleProduct,
};
