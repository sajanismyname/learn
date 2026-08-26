import axiosClient from "./axiosClient";

export const getProducts = async (params = {}) => {
    const res = await axiosClient.get('/', { params });
    return res.data.data;
};

export const getProduct= async (id)=>{
    const res = await axiosClient.get(`/${id}`);
    return res.data.data;
}

export const createProduct=async(product)=>{
    const res=await axiosClient.post('/',product)
    return res.data.data;
}

export const updateProduct=async(id,fields)=>{
    const res=await axiosClient.patch(`/${id}`,fields);
    return res.data.data;
}

export const replaceProduct=async(id, product)=>{
    const res=await axiosClient.put(`/${id}`, product);
    return res.data.data;
}

export const deleteProduct=async(id)=>{
    const res=await axiosClient.delete(`/${id}`);
    return res.data.data
} 