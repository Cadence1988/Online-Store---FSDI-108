import DataContext from '../state/DataContext';
import { useContext } from 'react';
import './Cart.css';

function Cart() {
    const { cart } = useContext(DataContext); // Access the cart from context

    return (
        <div className='cart page'>
            <h1>Got everything?</h1>
            <h4>
                Let's proceed to payment for your <b>{cart.length}</b> items.
            </h4>

            <div className='parent'>
                <div className='list'>
                    {cart.map((prod) => (
                        <div className='prod-cart' key={prod._id}>
                            <img src={prod.image} alt={prod.title} />
                            <h5>{prod.title}</h5>
                            <label>Price: ${prod.price.toFixed(2)}</label>
                            <label>Quantity: {prod.quantity}</label>
                            <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
                            <button className='btn btn-sm btn-outline-danger'>
                                <i className='fa-regular fa-trash-can'></i>
                            </button>
                        </div>
                    ))}
                </div>

                <div className='side'>
                    <h4>Total</h4>
                    <h3>$9,999.00</h3>

                    <button className='btn btn-primary'>Proceed to payment</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;