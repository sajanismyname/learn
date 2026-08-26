import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, getProduct, updateProduct } from "../api/productApi.js";
import { productSchema } from "../validation/productSchema.js";
import { ValidationError } from "yup";


function ProductForm({ mode }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "", price: "", description: "", category: "", stock: "", image: "",
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (mode === "edit" && id) {
            getProduct(id).then(setForm).catch((err) => setError(err.message));
        }
    }, [mode, id]);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const payload = { ...form, price: Number(form.price), stock: Number(form.stock) };
        
            await productSchema.validate(payload, {abortEarly:false})

            if (mode === "add") {
                await createProduct(payload);
            } else {
                await updateProduct(id, payload);
            }
            navigate("/products");
        } catch (err) {
            if(err.name === "ValidationError"){
                setError(err.errors.join(", "));
            }else{
                setError(err.response?.data?.message || err.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <label>
                Name:
                <input name="name" value={form.name} onChange={handleChange} />
            </label>

            <label>
                Price:
                <input name="price" value={form.price} onChange={handleChange} />
            </label>

            <label>
                Description:
                <input name="description" value={form.description} onChange={handleChange} />
            </label>

            <label>
                Category:
                <input name="category" value={form.category} onChange={handleChange} />
            </label>

            <label>
                Stock:
                <input name="stock" value={form.stock} onChange={handleChange} />
            </label>

            <label>
                Image URL:
                <input name="image" value={form.image} onChange={handleChange} />
            </label>

            <button type="submit">{mode === "add" ? "Add Product" : "Save Changes"}</button>
        </form>
    );
}

export default ProductForm;