import faqsData from "./faqsdata"
import { Link } from "react-router-dom"
import clean from "../../../assets/faqs/clean.webp"
import store from "../../../assets/faqs/store.webp"
import { BsCheck } from "react-icons/bs"
import "./faqs.css"
import faqsBanner from "../../../assets/faqsbanner.webp"

function Faqs () {
    function cards(props) {   
         const {name, link,src} = props

        return(
            <div className="faq-child">
           <Link className="faq-link" to={name.split(" ").join('')}>
          <img  className="faqs_images" src={src} alt="frequently asked questions"/>
          <p>{name}</p>
          </Link>
            </div>
        )
    }
    return(
        <div className="faq">
        {faqsData.map(cards)}

        </div>
    )
}


export function Clean () {
    return(
        <>    
        <img className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

     <div className="faqs-container">
         <h4 className="brown-text">
         HOW TO CLEAN THE PARTS?
  
         </h4>
         <p>
         Cleaning correctly is essential to preserve the shine and durability of semi-jewelry. It is recommended to clean them regularly or whenever the pieces come into contact with sweat, chlorine or sea water.
  
  To clean properly, you need a container, neutral detergent or soap, warm water and a soft cloth. 
   <div className="faqs-list">
  <p><BsCheck/> place the semi-jewels in a container and pour in warm water with neutral detergent. </p>

  <p><BsCheck/>Leave the pieces to soak for a few hours and then change the water, adding the detergent and warm water again, leaving the pieces to soak for a few more hours. </p>
  <p><BsCheck/>Then, remove the pieces from the container and rinse well under running water. Afterwards, dry them with a soft cloth or a hairdryer. And your parts are cleaned!</p>
   </div>
  <br/>For more practical and simple cleaning, use a flannel to polish your semi-jewelry after wearing it. Taking this care further helps preserve the pieces.
   
  Watch the video below and check out how to properly clean your Bruna jewelry.
  
         </p>
         <img src={clean}/>
     </div>
     </>
    )
 }

 export function Store (){
    return(
        <>  
        <img className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

     <div className="faqs-container">
         <h4 className="brown-text">
         HOW TO STORE?
  
         </h4>
         <p>
         To preserve the quality and ensure greater durability of semi-jewelry, choosing a suitable place to store it is an extremely important step and should not be neglected.
   <div className="faqs-list">
  <p><BsCheck/> It is recommended to set a clean and dry place, free from sun exposure, light and humidity. Choose to store semi-jewelry in compartments lined with soft fabric to help eliminate moisture and prevent the pieces from being scratched. For those who live in more humid regions, it is worth placing a piece of school chalk inside the compartment where the pieces are stored to absorb moisture.</p>

  <p><BsCheck/>Jewelry boxes, lined drawers and compartments or even velvet, satin or suede bags are great options to prevent semi-jewelry from coming into contact with other objects that could damage it. However, the ideal is that the fabrics and bags do not have strong colors, as the paint can stain the pieces. </p>
  <p><BsCheck/>Furthermore, the ideal is to store accessories separately from each other to prevent them from becoming tangled and suffering from scratches or other signs of poor conservation.</p>
   </div>
   
  Watch the video below and check out how to properly Store your Bruna jewelry.
  
         </p>
         <div className="faqs-media">
         <iframe width="420" height="315" src="https://youtube.com/embed/HVKcwtOibTE">

         </iframe>
         <img src={store}/>
         </div>
     </div>
     </>
    )
}

export function Care (){
    return(
        <div>

        </div>
    )
}

export function Diff (){
    return(
        <div>

        </div>
    )
}

export function Identify (){
    return(
        <div>

        </div>
    )
}

export function Successful (){
    return(
        <div>

        </div>
    )
}



 
export default Faqs