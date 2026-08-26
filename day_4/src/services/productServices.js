import { ApiError } from "../middleware/ErrorHandler.js";
import * as productModel from "../models/productModels.js"

export const getAllProducts = async ({category, search})=>{
    return await productModel.getAllProducts({category,search})
}

export const getProductById= async (id)=>{
    const product =  await productModel.getProductById(id);
    if(!product)throw new ApiError(404,`Product with ${id} not found`)
        return product
}

export const createProduct = async(data)=>{
    return await productModel.createProduct(data);
}

export const updateProduct = async(id, fields)=>{
    const updated = await productModel.updateProduct(id, fields);
    if(!updated) throw new ApiError(404, `Product with id ${id} not found`);
    return updated
}

export const replaceProduct = async(id, fields)=>{
    const replaced = await productModel.replaceProduct(id, fields);
    if(!replaced) throw new ApiError(404, `Product with id ${id} not found`);
    return replaced
}

export const deleteProduct = async(id)=>{
    const deleted = await productModel.deleteProduct(id);
    if(!deleted) throw new ApiError(404, `Product with id ${id} not found`);
    return deleted
}