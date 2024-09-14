import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {

    function AddtoCart(){
        console.log('Added to Cart');
    }

    return (
        <div className='product'>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/70/01/no-image-symbol-missing-available-icon-gallery-vector-42607001.jpg" alt="" />

            <h5>{props.title}</h5>
            <label>${props.price}</label>

            <QuantityPicker></QuantityPicker>

            <button onClick={AddtoCart}>Add</button>
        </div>
    );
}


export default Product;


/**
 * Create a Product component
 * render a title inside it
 * and a price
 *
 * on Catalog page
 * render 5 Product tags
 */