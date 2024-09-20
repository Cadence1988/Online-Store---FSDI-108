import { useState } from 'react';
import './Contact.css'


function Contact() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleMessage(e) {
        const text = e.tarfet.value;
        const name = e.target.name;

        const copy = {...message};
        copy [name] = text;
        setMessage(copy);
    }

    function send(){
        console.log(message);
    }

    return (
        <div className='contact page'>
            <h1>Contact Us</h1>
            <p>Use the form below to get in touch</p>

            <div className='form'>

                <div>
                    <label className='form-lable'>Name</label>
                    <input className='form-control' type="text" onBlur={handleMessage} name='name'></input>
                </div>
                
                <div>
                    <label className='form-lable'>Email</label>
                    <input className='form-control' type="email" onBlur={handleMessage} name='email'></input>
                </div>
                
                <div>
                    <label className='form-lable'>Message</label>
                    <textarea className='form-control' type="text" rows={5} onBlur={handleMessage} name='message'></textarea>
                </div>

                <div>
                    <button className='btn btn-dark'>Send Message</button>
                </div>

            </div>
        </div>
    )
}

export default Contact;

/**
 * create a contact page with a contact form
 * 
 * create a Contact page
 * create a route for it   /contact
 * 
 * create a menu item for contact
 * 
 * create a form in the page with
 * - name
 * - email
 * - message
 * - button to send
 * 
 * 
 * - create the message state var
 * - create the handle fn
 * - set the onBlur and name in the input field
 * 
 * - create the send fn
 * - on click of the button, call the send function
 */