import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/productApi.js";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch((err) => setError(err.response?.data?.message || err.message))
            .finally(() => setLoading(false));
    }, []);

    function handleDelete(id) {
        deleteProduct(id)
            .then(() => setProducts((prev) => prev.filter((p) => p.id !== id)))
            .catch((err) => setError(err.response?.data?.message || err.message));
    }

    if (loading) return <p>Products loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                        {" - "}{product.price}
                        <Link to={`/products/${product.id}/edit`}>Edit</Link>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;