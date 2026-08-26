import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi.js";

function ProductDetails() {
        const { id } = useParams();
        const [product, setProduct] = useState(null);
        const [error, setError] = useState(null);

        useEffect(() => {
            getProduct(id)
                .then((data) => {
            console.log("RAW product data:", data);
            setProduct(data);
        })
                .catch((err) => setError(err.response?.data?.message || err.message));
        }, [id]);

        if (error) return <p>Error: {error}</p>;
        if (!product) return <p>Loading...</p>;

        return (
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
        );
    }

export default ProductDetails;