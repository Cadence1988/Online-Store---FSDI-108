import { useState } from 'react';
import './Admin.css';



function Admin(){
    const [coupon, setCoupon] = useState({
        code: "",
        discount:""
    });


    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;
        console.log(name, text);

        //copy, modify the copy, set the copy
        const copy = {...coupon};
        if (name == 'discount'){
            copy.discount = text;
        }
        else if (name == 'code') {
            copy.code = text;
        }
        setCoupon(copy);
    }

        function saveCoupon(){
            console.log(coupon);
        }

        function handleDiscount(e){
            const text = e.target.value;
            const name = e.target.name;
            console.log(name, text);
    
            //copy, modify the copy, set the copy
            const copy = {...coupon};
            if (name == 'discount'){
                copy.discount = text;
            }
            else if (name == 'code') {
                copy.code = text;
            }
            setCoupon(copy);
        }
    
            function saveDiscount(){
                console.log(coupon);
            }

    return(
        <div className='admin page'>
            <h1>Admin page</h1>

        <div className='parent'>
            <div className='form'>
            <div className='discount'>
                <h3>Discounts</h3>
                <div className="mb-3">
                    <label className="form-label">Promo Code</label>
                    <input type="text" className="form-control" onBlur={handleDiscount} name='code'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount</label>
                    <input type="text" className="form-control" onBlur={handleDiscount} name='discount'/>
                </div>
                <div className='save'><button type="button" class="btn btn-dark" onClick={saveDiscount}>Save Discount</button></div>
            </div>
            </div>

            <div className="form">
            <div className='coupon'>
                <h3>Register Coupons</h3>
                <div className="mb-3">
                    <label className="form-label">Promo Code</label>
                    <input type="text" className="form-control" onBlur={handleCoupon} name='code'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount</label>
                    <input type="text" className="form-control" onBlur={handleCoupon} name='discount'/>
                </div>
                <div className='save'><button type="button" class="btn btn-dark" onClick={saveCoupon}>Save coupon</button></div>
            </div>
            </div>
          /** */
        </div>

        </div>
    );
}

export default Admin;

/**
 * coupon:
 * code: qwerty
 * discount: 10
 */

/**
 * Finish the product form
 * create the product state var
 * crate the handlProduct fn
 * set the onBlur and name to input fields
 * create the saveProduct that console logs the product
 * call the fn on the click event of the save button
 */

/**  /**</div> {allCoupons.map(cp => <li{cp.code} - {cp.discount}></li>)}**/
/**list the products (img, title, price)
 * 
 * create a list for products
 * on save, add product obj to the list (3 steps)
 * map the product to li velow the product form
 * 
 * css everything
 */
