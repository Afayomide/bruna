import logo from "../../assets/bruna-logo.png"
import { Link } from "react-router-dom"
import {BsTelephone} from "react-icons/bs"
import {BsPinMap} from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsEnvelope } from "react-icons/bs"
import "./footer.css"


function Footer () {
    return(
    <footer>
    <section className="footer-first-section">
     <img src={logo}/>
     <ul>
     <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/bruna">Bruna</Link></li>
        <li><Link className="link" to="/">Production</Link></li>
        <li><Link className="link" to="/">Guarantee</Link></li>
        <li><Link className="link" to="/">Distrubutors</Link></li>
        <li><Link className="link" to="/">Frequently Asked Questions</Link></li>
        <li><Link className="link" to="/">Technical Specifications</Link></li>
        <li><Link className="link" to="/">Contact Us</Link></li>
     </ul>
     <div>
        <BsPinMap className="icon"/>

        <p>
        BRUNA JEWELRY<br/>
NEW BALOGUN ULTRA MODERN SHOPPING PLAZA,<br/>
SUITE SA34, 2ND FLOOR,<br/>
47/49 BALOGUN STREET,<br/>
LAGOS ISLAND, NIGERIA.<br/>
</p>
     </div>
     <div className="icons">
     
     <div className="contacts-link">
        <BsTelephone className="icon"/>

        <a href="tel:+2348036002914">Telephone:+2348036002914</a>
     </div>
     <div className="contacts-link">
         <BsWhatsapp className="icon"/>
          <a href="https://wa.link/asc509">WhatsApp:+2348036002914</a>
     </div>
     <div className="contacts-link">
        <BsEnvelope className="icon"/>
         <a href="mailto:INFO@BRUNAJEWELRY.COM.NG">INFO@BRUNAJEWELRY.COM.NG</a>
     </div>
     <div className="contacts-link">
        <BsEnvelope className="icon"/>
         <a href="mailto:SALES@BRUNAJEWELRY.COM.NG">SALES@BRUNAJEWELRY.COM.NG</a>
     </div>
     </div>
     </section>
        
     <section className="second-section">
        <hr/>
        <p>
        © 2021 Bruna Jewelry. All rights reserved.<br/>
Reproduction, in whole or in part, is prohibited.
        </p>
     </section>   
     
    </footer>
    )                        
}

export default Footer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           