import faqsData from "./faqsdata"
import { Link } from "react-router-dom"
import clean from "../../../assets/faqs/clean.webp"
import { BsCheck } from "react-icons/bs"
import "./faqs.css"

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
     <div className="faqs-container">
         <h4 className="brown-text">
         HOW TO CLEAN THE PARTS?
  
         </h4>
         <p>
         Cleaning correctly is essential to preserve the shine and durability of semi-jewelry. It is recommended to clean them regularly or whenever the pieces come into contact with sweat, chlorine or sea water.
  
  To clean properly, you need a container, neutral detergent or soap, warm water and a soft cloth. 
   
  <br/><BsCheck/> place the semi-jewels in a container and pour in warm water with neutral detergent. 

  <br/><BsCheck/>Leave the pieces to soak for a few hours and then change the water, adding the detergent and warm water again, leaving the pieces to soak for a few more hours. 
  <br/><BsCheck/>Then, remove the pieces from the container and rinse well under running water. Afterwards, dry them with a soft cloth or a hairdryer. And your parts are cleaned!
   
  <br/>For more practical and simple cleaning, use a flannel to polish your semi-jewelry after wearing it. Taking this care further helps preserve the pieces.
   
  Watch the video below and check out how to properly clean your Bruna jewelry.
  
         </p>
         <img src={clean}/>
     </div>
    )
 }

 export function Store (){
    return(
        <div>

        </div>
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