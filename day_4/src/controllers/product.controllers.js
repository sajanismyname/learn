import { ProductData, getNextId } from "../data/products.data.js";
import { ApiError } from "../middleware/ErrorHandler.js";

const REQUIRED_FIELDS = ["name", "price", "description", "category", "stock"];

const validateProduct = (body, { partial = false } = {}) => {
    const error = [];

    const fieldToCheck = partial
        ? Object.keys(body)
        : REQUIRED_FIELDS;

    fieldToCheck.forEach((field) => {
        if (REQUIRED_FIELDS.includes(field)) {
            if (body[field] === undefined || body[field] === null || body[field] === "") {
                error.push(`${field} is required`)
            }
        }
    })

    if (!partial) {
        REQUIRED_FIELDS.forEach((field) => {
            if (body[field] === undefined) error.push(`${field} is required`)
        })
    }

    if (body.price !== undefined && (typeof body.price !== "number" || body.price < 0)) {
        error.push("Price must be non-negative number");
    }


    if (body.stock !== undefined && (!Number.isInteger(body.stock) || body.stock < 0)) {
        error.push("stock must be non-negative number");
    }

    return [...new Set(error)]
}

export const getProducts = async (req, res) => {
    let result = ProductData;

    const { category, search } = req.query;

    if (category) {
        result = result.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
    }

    if (search) {
        result = result.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.status(200).json({
        success: true,
        count: result.length,
        data: result,
    });
};


export const createProduct = async (req, res) => {
    const error = validateProduct(req.body);

    if (error.length > 0) {
        throw new ApiError(400, error.join(","))
    }

    const { name, price, description, category, stock, image } = req.body

    const getNewProduct = {
        id: getNextId(),
        name,
        price,
        category,
        description,
        stock,
        image: image || null
    }

    ProductData.push(getNewProduct)

    res.status(201).json({
        success: true,
        data: getNewProduct
    })
}

export const getProduct = async (req, res) => {
    const id = Number(req.params.id);
    const product = ProductData.find((p) => p.id === id);

    if (!product) {
        throw new ApiError(404, `Product with id ${id} not found`);
    }

    res.status(200).json({
        success: true,
        data: product,
    });
}

export const updateProduct= async (req, res)=>{
    const id = Number(req.params.id)
    const product=ProductData.find((p)=> p.id === id)
    console.log(id);
    

    if(!product){
        throw new ApiError(404,`${id} not found`)
    }

    const error = validateProduct(req.body, {partial: true});
    if(error.length>0){
        throw new ApiError(400, error.join(","))
    }

    Object.assign(product, req.body);
    res.status(200).json({ success: true, data: product });
}

export const deleteProduct = async (req, res) => {
    const id = Number(req.params.id);
    const index = ProductData.findIndex((p) => p.id === id)

    if (index === -1) {
        throw new ApiError(404, `${index} not found`)
    }

    res.status(201).json({
        success: true,
        message: index
    })
}