import React from  "react"
import "./form.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form (){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7j73bqc', 'template_h22glin', form.current, 'VFdarHR2Ae_MT8hx4')
        .then(function(result){
            alert("Message sent Successfuly, await our call or text to confirm.")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Full Name" name="from_name"/><br/>
            <input type="email" placeholder="Your Email" name="email"/><br/>
            <input type="phone" placeholder="Telephone" name="number"/><br/>
            <input placeholder="State" name="state"/><br/>
            <textarea placeholder="Your Message" name="message"/><br/>
            <div className="label">
            <input id="agree" value="I agree to receive message and communications" type="checkbox" name="agree"/>
            <label for="agree">I agree to receive messages and communications</label><br/> 
            </div>
           <button>Send Message</button>
        </form>
        </>
    )
}

export default Form 