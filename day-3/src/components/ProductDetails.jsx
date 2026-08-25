import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:/5000/api/products/${id}`)
            .then((res) => {
                if (!res.ok) throw new error("Failed to load products")
                return res.json()
            })
            .then((data) => setProduct(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p>Loading product...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>

            <Link to={`/products/${id}/edit`}>Edit</Link>
            {"|"}
            <Link to="/products">Back to Product</Link>
        </div>
    )

}

export default ProductDetails