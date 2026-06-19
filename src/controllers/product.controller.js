// Controllers para manejar las rutas de los productos

// Controller para crear un producto

export const createProduct = async (req, res) => {
  try {
    const { name, category, price } = req.body;

    if (!name || !category || !price) {
      return res
        .status(422)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {}
};

// Controller para obtener todos los productos

import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().select("-description -__v");
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

//Controller para obtener un producto por su ID

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    // console.log(error.message);

    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

// Controller para actualizar un producto por su ID

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (typeof req.body.name != 'string') {
        return res
        .status(422)
        .json({message: "Error: el nombre debe ser un string"});
    }

    const product = await Product.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.json(product);
  } catch (error) {
    console.log(error);
  
  if (error.name === "ValidatorError") {
    return res
    .status(422)
    .json({message: error.message});
  }

    if (error.name === "CastError") {
    return res
    .status(404)
    .json({message: error.message});
  }

  res.status(500).json({message: "Error al actualizar el producto"});
}
};

// Controller para borrar un producto 

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Producto no encontrado"});
        }

        res.json({message: "Producto eliminado"});
    } catch (error) {
        return res.status(500).json({message: "Error al eliminar el producto"});
    }
}
