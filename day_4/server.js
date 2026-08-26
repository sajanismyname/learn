import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import productRoutes from "./src/routes/productRoutes.js"
import { notFound, errorHandler } from "./src/middleware/ErrorHandler.js"

dotenv.config()
const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.get("/", (req, res) => {
    res.json({ message: "Product API is running. Try GET /api/products" })
})

app.use("/api/products", productRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

})