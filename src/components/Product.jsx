import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {

    function AddtoCart(){
        console.log('Added to Cart');
    }

    return (
        <div className='product page'>
            <img src={props.data.image} alt="" />

            <h5>{props.data.title}</h5>
            <label>${props.data.price}</label>

            <div className='controls'>
            <QuantityPicker></QuantityPicker>

            <button className='btn btn-sm btn-primary' onClick={AddtoCart}>Add</button>
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
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