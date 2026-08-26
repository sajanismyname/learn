import * as yup from "yup"

export const productSchema = yup.object({
        name: yup.string().trim().required("name is required"),
        price: yup
                .number()
                .typeError("price must be a number")
                .min(0, "Price must be non negative")
                .required("Price us required"),
        description: yup.string().trim().required("Description is required"),
        category: yup.string().trim().required("category is required"),
        stock: yup
                .number()
                .typeError("Stock must be a number")
                .min(0, "Stock must be non negative")
                .required("Stock us required"),
})