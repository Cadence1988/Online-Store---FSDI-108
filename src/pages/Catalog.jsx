import Product from '../components/Product';
import './Catalog.css';
import {catalog as Product, Category } from '../services/DataService';
import { useEffect, useState } from 'react';

function Catalog() {
    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState([]);

    async function loadData() {        
        let data = await DataService.getProducts();
        setProducts(data);
    }

    // when the page loads
    useEffect (() => {
        loadData();
    })

    return (
        <div className='catalog page'>
            <h1>Our amazing catalog</h1>

            <div className='filters'>
                <button className='btn btn-sm btn-dark' onClick={() => setFilter("")}>All</button>
                {Category.map((cat) => (
                   <button className=' btn btn-sm btn-dark' onClick={() =>setFilter(cat)}>{cat}</button> 
                ))}
            </div>

            {products.filter(prod => prod.category == filter).map((prod) => (
            <Product data={prod}></Product>
            ))}

        </div>

    );
}


export default Catalog;


