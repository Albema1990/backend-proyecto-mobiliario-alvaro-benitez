import dotenv from "dotenv"
dotenv.config();

import connectDB from "../config/db.js"
import Product from "../models/Product.js";

const products = [
  {
    name: "Etiopia",
    category: "Café",
    price: 16.95,
    oldPrice: 20.95,
    description: "Café de especialidad con notas florales y cítricas",
    origin: "Etiopía, África",
    roast: "Medio",
    weight: "250g",
    // image: coffeImage,
    bestSeller: true,
    onSale: true
  },

  {
    name: "Colombia",
    category: "Café",
    price: 14.95,
    oldPrice: 23.95,
    description: "Café de especialidad con notas cítricas y tostadas",
    origin: "Colombia, América",
    roast: "Medio",
    weight: "300g",
    // image: coffeImage,
    bestSeller: false,
    onSale: true
  },

  {
    name: "Kenya",
    category: "Café",
    price: 18.95,
    oldPrice: 18.95,
    description: "Café de especialidad con notas afrutadas y tostadas",
    origin: "Kenya, África",
    roast: "Medio",
    weight: "250g",
    // image: coffeImage,
    bestSeller: true,
    onSale: false
  },

  {
    name: "Guatemala",
    category: "Café",
    price: 15.95,
    oldPrice: 21.95,
    description: "Café de especialidad con notas cítricas y tostadas",
    origin: "Guatemala, América",
    roast: "Medio",
    weight: "500g",
    // image: coffeImage,
    bestSeller: false,
    onSale: true
  },

  {
    name: "Brasil",
    category: "Café",
    price: 12.95,
    oldPrice: 20.95,
    description: "Café de especialidad con notas de chocolate y nueces",
    origin: "Brasil, América",
    roast: "Medio",
    weight: "250g",
    // image: coffeImage,
    bestSeller: true,
    onSale: true
  },

  {
    name: "Te rojo",
    category: "Té",
    price: 10.95,
    oldPrice: 12.95,
    description: "Té rojo de calidad superior",
    origin: "China, Asia",
    roast: "Medio",
    weight: "250g",
    // image: teaimage,
    bestSeller: true,
    onSale: true
  },

  {
    name: "Te negro",
    category: "Té",
    price: 6.95,
    oldPrice: 7.95,
    description: "Té negro de aroma intenso",
    origin: "China, Asia",
    roast: "Medio",
    weight: "250g",
    // image: teaImage2,
    bestSeller: true,
    onSale: true
  },

  {
    name: "Te verde",
    category: "Té",
    price: 12.95,
    oldPrice: 12.95,
    description: "Té verde con notas florales",
    origin: "China, Asia",
    roast: "Medio",
    weight: "350g",
    // image: teaImage3,
    bestSeller: false,
    onSale: false
  },

  {
    name: "Molinillo de café",
    category: "Accesorios",
    price: 30.95,
    oldPrice: 35.95,
    description: "Molinillo de café calidad premium",
    origin: "Hamburg, Alemania",
    roast: "",
    weight: "",
    // image: molinilloImage,
    bestSeller: false,
    onSale: true
  },

  {
    name: "Kit accesorios para espresso",
    category: "Accesorios",
    price: 32.95,
    oldPrice: 40.95,
    description: "Kit de accesorios para preparar espresso",
    origin: "Hamburg, Alemania",
    roast: "",
    weight: "",
    // image: kitImage,
    bestSeller: true,
    onSale: true
  },

  {
    name: "Tapete bandeja",
    category: "Accesorios",
    price: 10.95,
    oldPrice: 10.95,
    description: "Tapete para bandeja de café",
    origin: "Hamburg, Alemania",
    roast: "",
    weight: "",
    // image: tapeteImage,
    bestSeller: true,
    onSale: false
  },
];

const seedProducts = async () => {
    try {
        await connectDB();

        await Product.deleteMany();
        await Product.insertMany(products);

        console.log("Productos cargados correctamente");
        process.exit(0);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

seedProducts();