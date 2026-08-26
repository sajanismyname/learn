import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productApi";

function Dashboard(){
    const[products, setProducts]=useState([]);
    const[error, setError]=useState(null);

    useEffect(() => {
    getProducts()
        .then(setProducts)
        .catch((err) => setError(err.message));
}, []);

    if(!products) return <p>Dashboard loading....</p>
    if(error) return <p>Error: {error}</p>

    const totalProducts = products.length;
    console.log("products:", products);
    const outOfStock = products.filter((p)=>p.stock === 0).length;

    return(
        <div><h2>Dashboard</h2>
        <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}>
                <p>Total Products</p>
                <h3>{totalProducts}</h3>
            </div>

            <div style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}>
                <p>Out Of Stock</p>
                <h3>{outOfStock}</h3>
            </div>
        </div>
            <Link to="/products">View all Products</Link>
        </div>
    )
}

export default Dashboard