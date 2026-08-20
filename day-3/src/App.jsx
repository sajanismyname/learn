import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Dashboard from './components/Dashboard'
import ProductDetails from './components/ProductDetails'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'



import './App.css'

function App() {
    return (
        <div>
            <nav style={{ display: "flex", gap: "12px", marginBottom: "1rem" }}>
            <Link to="/">Dashboard</Link>
            <Link to="/products">Products</Link>
            <Link to="/products/add">Add Product</Link>
        </nav>

        <Routes>

            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/products" element={<ProductList/>}></Route>
            <Route path="/products/add" element={<ProductForm/>}></Route>
            <Route path="/products/:id/edit" element={<ProductForm/>}></Route>
        </Routes>
        </div>
    )
}

export default App
