import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function ProductForm({mode}){
    const [name, setName]=useState("")
    const [price, setPrice]=useState("")
    const [stock, setStock]=useState("")
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

    const navigate=useNavigate();
    const {id}=useParams()

    useEffect(()=>{
        if(mode !== "edit") return;

        fetch(`http://localhost:/5000/api/products/:${id}`)
            .then((res)=>{
                if(!res.ok) throw new error("Failed to load products");
            })
            .then((data)=>{
                setName(data.name);
                setPrice(data.price);
                setStock(data.stock);
            })
            .catch((err)=>setError(err.message))
            .finally(()=>setLoading(false))
    },[mode,id])


    function handleSubmit(event){
        event.preventDefault();

        if(name.trim() === "" || price === "") return;

        const productData={name, price:Number(price), stock:Number(stock)}

        const url= mode === "edit" ? `http://localhost:5000/api/products/${id}` : "http://localhost:5000/api/products";

        const method = mode === "edit" ? "PUT" : "POST";

        fetch(url, {
            method,
            headers:{"Content-type" : "application/json"},
            body:JSON.stringify(productData)
        })
        .then(()=>{
            if(!res.ok) throw new error("Failed to save product")
                navigate("/products")
        })
        .catch((err)=>setError(err.message))
    }

    if(loading) return <p>Loading... </p>
    if(error) return <p>Error: {error}</p>

    return(
        <div>
            <h2> {mode==="edit" ? "Edit Product" : "Add Product"} </h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="product name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="stock"
                        value={stock}
                        onChange={(e)=>setStock(e.target.value)}
                    />
                    
                <button type="submit">{mode==="edit" ? "Save Changes" : "Add Product"}</button>
            </form>
        </div>
    )
    
}

export default ProductForm