import * as productServices from "../services/productServices.js"

export const getProducts = async (req, res) => {
    const { category, search } = req.query;
    const result = await productServices.getAllProducts({ category, search });
    res.status(200).json({ success: true, data: result });
    
    if (!result) {
        res.status(404).json({ message: "not found" }); // never reached, but if logic were reordered, this could double-send
    }
};

export const getProduct =async (req, res) => {
    const id = Number(req.params.id);
    const product = await productServices.getProductById(id);

    if (!product) {
        throw new ApiError(404, `Product with id ${id} not found`);
    }

    res.status(200).json({
        success: true,
        data: product,
    });
};


export const createProduct =async (req, res) => {

    const { name, price, description, category, stock, image } = req.body

    // const getNewProduct = {
    //     id: getNextId(),
    //     name,
    //     price,
    //     category,
    //     description,
    //     stock,
    //     image: image || null
    // }

    const newProduct =await productServices.createProduct({
        name,
        price,
        category,
        description,
        stock,
        image: image || null
    })


    res.status(201).json({
        success: true,
        data: newProduct
    })
}


export const updateProduct=async (req, res)=>{
    const id = Number(req.params.id)

    const updated=await productServices.updateProduct(id, req.body);
    if(!updated){
        throw new ApiError(404,`${id} not found`)
    }

    res.status(200).json({ success: true, data: updated });
}

export const replaceProduct =async (req, res) => {
    const id = Number(req.params.id);

    const error = validateProduct(req.body, { partial: false });
    if (error.length > 0) {
        throw new ApiError(400, error.join(","));
    }

    const { name, price, description, category, stock, image } = req.body;

    const replaced =await productServices.replaceProduct(id, {
        name, price, description, category, stock, image: image || null,
    });

    if (!replaced) {
        throw new ApiError(404, `${id} not found`);
    }

    res.status(200).json({ success: true, data: replaced });
};

export const deleteProduct = async(req, res) => {
    const id = Number(req.params.id);
    const deleted =await productServices.deleteProduct(id)

    if (!deleted) {
        throw new ApiError(404, `${index} not found`)
    }

    res.status(200).json({
        success: true,
        message: `Product ${id} deleted`,
        data: deleted,
    });
}

