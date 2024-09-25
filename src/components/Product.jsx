import './Product.css';
import {useContext, useState } from 'react';
import QuantityPicker from './QuantityPicker';

function Product(props) {
    const [totalPrice, setTotalPrice] = useState(props.data.price);

    function handleQuantityChange(quantity) {
        const updatedTotal = props.data.price * quantity;
        setTotalPrice(updatedTotal);
    }

    function AddtoCart(){
        console.log('Added to Cart');
    }

    return (
        <div className='product page'>
            <img src={props.data.image} alt="" />

            <h5>{props.data.title}</h5>
            <label>Price per unit: ${props.data.price}</label>

            <div className='controls'>
                <QuantityPicker onQuantityChange={handleQuantityChange}></QuantityPicker>

                <label>Total: ${totalPrice.toFixed(2)}</label>
                <button className='btn btn-sm btn-primary' onClick={AddtoCart}>Add</button>
                <i className="fa-solid fa-cart-shopping"></i>
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

/**
    const [user, setUser] = useState({ userId: 123, name: "Sergio"});

    function addProductToCart() {
        console.log("global add");
    }

    function removeProductFromCart() {
    }

    function clearCart() {        
    }
    user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart
    */