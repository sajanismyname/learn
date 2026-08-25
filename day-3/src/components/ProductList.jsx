import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function ProductList(){
    const[products, setProducts]=useState([])
    const[loading, setLoading]=useState(true)
    const[error, setError]=useState(null)

    useEffect(()=>{
        fetch("http://localhost:/5000/api/products")
            .then((res)=>{
                if(!res.ok) throw new error("Failed to load products")
                    return res.json()
            })
            .then((data)=>setProducts(data))
            .catch((err)=>setError(err.message))
            .finally(()=>setLoading(false))
    },[])

    function handleDelete(id){
        fetch(`http://localhost:/5000/api/products/${id}`, {method: "DELETE"})
        .then(()=> setProducts(products.filter((p)=> p.id !== id)))
        .catch((err)=> setError(err.message))
    }

    if(loading) return <p>Products loading...</p>
    if(error)return <p>error:{error}</p>

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                        {"-"}{product.price}
                        <Link to={`/product/${product.id}/edit`}>Edit</Link>
                        <button onClick={()=>handleDelete(product.id)}>Delete</button>
                    </li>
                ))
                }
            </ul>
        </div>
    )

}

export default ProductList