import z from "zod";

export const productSchema=z.object({
    name:z.string().trim().min(1,"name is required"),
    price:z.number().nonnegative("price must be non negative"),
    description:z.string().trim().min(1,"product description is required"),
    category:z.string().trim().min(1,"category is required"),
    stock:z.number().int("Stock must be an integer").nonnegative("stock must be non negative")
})

export const productUpdateSchema = productSchema.partial();