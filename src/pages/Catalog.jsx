import Product from '../components/Product';
import './Catalog.css';
import DataService, { Category } from '../services/Data';
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

            <div className='filters'>
                <button className=' btn btn-sm btn-dark' onClick={() => setFilter("")}>All</button>
                {Category.map((cat) => (
                    <button className='btn btn-sm btn-dark' onClick={""}>{cat}</button>
                ))}
            </div>
            <h1>Our amazing catalog</h1>

            <div className='filters'>
            {Category.map(cat => <button className='btn btn-sm btn-outline-dark'>{cat}</button>)}
            </div>

            {products.map(prod => <Product data={prod}></Product>)}

        </div>

    );
}


export default Catalog;


