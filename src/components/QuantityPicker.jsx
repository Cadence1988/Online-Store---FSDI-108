import { useState } from 'react';
import './QuantityPicker.css';


function QuantityPicker({onQuantityChange}) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
        let value = quantity +1;
        setQuantity(value);
        onQuantityChange(value);
    }

    function handleDecrease(){
        if (quantity == 1) return;

        let value = quantity -1;
        setQuantity(value);
        onQuantityChange(value);
    }

    return (
        <div className='qt-picker'>

            <button className='btn btn-sm btn-dark' disabled={quantity == 1} onClick={handleDecrease}>-</button>

            <label>{quantity}</label>

            <button className='btn btn-sm btn-secondary' onClick={handleIncrease}>+</button>

        </div>
    );
}

export default QuantityPicker;