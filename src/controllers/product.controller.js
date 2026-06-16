// Controllers para manejar las rutas de los productos

// Controller para obtener todos los productos

import Product from "../models/product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().select("-description -__v");
        res.json(products);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "Error al obtener los productos"});
    }
};

//Controller para obtener un producto por su ID

export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if(!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(product);

    } catch (error) {
        // console.log(error.message);

        res.status(500).json({message: "Error al obtener el producto"});
    }
}