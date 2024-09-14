import Product from '../components/Product';
import './Catalog.css';

function Catalog() {
    return (
        <div className='catalog'>
            <h1>Our amazing catalog</h1>

            <Product title='Tomatoes' price='6.34'></Product>
            <Product title='Banana' price='4.32'></Product>
            <Product title='Strawberry' price='8.34'></Product>
            <Product title='Blueberry' price='9.45'></Product>
            <Product title='Raspberry' price='9.42'></Product>
        </div>
    );
}


export default Catalog;


