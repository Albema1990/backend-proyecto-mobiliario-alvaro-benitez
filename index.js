import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
connectDB();

import express from "express";
import cors from "cors";
import productRouter from "./src/routes/product.router.js"

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Bienvenidos a la API de Hygge Coffee"});
});

app.use("/api/products", productRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));