import Product from '../components/Product';
import './Catalog.css';

function Catalog() {
    return (
        <div className='catalog'>
            <h1>Our amazing catalog</h1>

            <Product title='first prod' price='12.34'></Product>
            <Product title='second prod'></Product>
            <Product title='rare'></Product>
            <Product title='sirens'></Product>
            <Product title='keyboard'></Product>
        </div>
    );
}


export default Catalog;


