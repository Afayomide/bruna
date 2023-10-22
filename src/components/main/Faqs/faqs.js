import faqsData from "./faqsdata"
import { Link } from "react-router-dom"
import clean from "../../../assets/faqs/clean.webp"
import store from "../../../assets/faqs/store.webp"
import care from "../../../assets/faqs/care.webp"
import diff from "../../../assets/faqs/diff.webp"
import identify from "../../../assets/faqs/diff.webp"
import identify1 from "../../../assets/faqs/identify1.png"
import identify2 from "../../../assets/faqs/identify2.png"
import identify3 from "../../../assets/faqs/identify3.jpg"
import successful from "../../../assets/faqs/successful.webp"
import techspec from "../../../assets/faqs/techspec.jpg"
import warranty from  "../../../assets/faqs/warranty.png"
import { BsCheck, BsEnvelope, BsWhatsapp } from "react-icons/bs"
import { BsX } from "react-icons/bs"
import "./faqs.css"
import faqsBanner from "../../../assets/faqsbanner.webp"
import { BsDot } from "react-icons/bs"
import Form from "../../form/form"

function Faqs () {
    function cards(props) {   
         const {name, link,src} = props

        return(
            <div className="faq-child">
           <Link className="faq-link" to={name.split(" ").join('')}>
          <img loading="lazy"  className="faqs_images" src={src} alt="frequently asked questions"/>
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
        <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

     <div className="faqs-container">
         <h4 className="brown-text">
         HOW TO CLEAN THE PARTS?
  
         </h4>
         <div  className="faq-display">
         <p>
         Cleaning correctly is essential to preserve the shine and durability of semi-jewelry. It is recommended to clean them regularly or whenever the pieces come into contact with sweat, chlorine or sea water.
  
  To clean properly, you need a container, neutral detergent or soap, warm water and a soft cloth. 
   <ul className="faqs-list">

  <li><BsCheck/> First, place the semi-jewels in a container and pour in warm water with neutral detergent.
 </li>

  <li><BsCheck/>Leave the pieces to soak for a few hours and then change the water, adding the detergent and warm water again, leaving the pieces to soak for a few more hours. </li>
  <li><BsCheck/>Then, remove the pieces from the container and rinse well under running water. Afterwards, dry them with a soft cloth or a hairdryer. And your parts are cleaned!</li>
   </ul>
  <br/>For more practical and simple cleaning, use a flannel to polish your semi-jewelry after wearing it. Taking this care further helps preserve the pieces.
   
  Watch the video below and check out how to properly clean your Bruna jewelry.
  
         </p>
         <img loading="lazy" src={clean}/>
         </div>
     </div>
     </>
    )
 }

 export function Store (){
    return(
        <>  
        <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

     <div className="faqs-container">
         <h4 className="brown-text">
         HOW TO STORE?
  
         </h4>
         <div className="faq-display">
         <p>
         To preserve the quality and ensure greater durability of semi-jewelry, choosing a suitable place to store it is an extremely important step and should not be neglected.
   <ul className="faqs-list">
  <li><BsCheck/> It is recommended to set a clean and dry place, free from sun exposure, light and humidity. Choose to store semi-jewelry in compartments lined with soft fabric to help eliminate moisture and prevent the pieces from being scratched. For those who live in more humid regions, it is worth placing a piece of school chalk inside the compartment where the pieces are stored to absorb moisture.</li>

  <li><BsCheck/>Jewelry boxes, lined drawers and compartments or even velvet, satin or suede bags are great options to prevent semi-jewelry from coming into contact with other objects that could damage it. However, the ideal is that the fabrics and bags do not have strong colors, as the paint can stain the pieces. </li>
  <li><BsCheck/>Furthermore, the ideal is to store accessories separately from each other to prevent them from becoming tangled and suffering from scratches or other signs of poor conservation.</li>
   </ul>
   
  Watch the video below and check out how to properly Store your Bruna jewelry.
  
         </p>
         <div className="faqs-media">
         <iframe width="420" height="315" src="https://youtube.com/embed/HVKcwtOibTE">

         </iframe>
         <img loading="lazy" src={store}/>
         </div>
         </div>
     </div>
     </>
    )
}

export function Care (){
    return(
        <>
              <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

<div className="faqs-container">
    <h4 className="brown-text">
    GENERAL CARE FOR SEMI-JEWELRY

    </h4>
    <div className="faq-display">
    <p>
    Bruna is recognized for being a company that produces high quality and sophisticated semi-jewelry. However, semi-jewels are sensitive and require some care to extend the useful life of these pieces. Check out the main measures to preserve your semi-jewelry:

<ul className="faqs-list">
<li> <BsX/>Avoid handling chemical products, such as cleaning products, gardening products and other types that contain abrasive components.</li>
<li><BsX/>Avoid contact with perfume, soaps, moisturizers and other types of cosmetics. After using any of these products, wait for it to dry before placing the jewelry</li>
<li><BsCheck/> Clean the parts frequently, washing with warm water and neutral soap. Then dry with a soft cloth or hairdryer.</li>
<li><BsX/> Do not use jewelry to practice physical activities or go to the beach or swimming pools. If the jewelry comes into contact with sweat, chlorine or seawater, wash it with neutral soap and water.</li>

<li><BsCheck/>Polish the pieces with a flannel as soon as you finish using them. </li>
<li><BsCheck/> Store in a clean, dry place, free from sunlight, moisture and light.</li>
</ul>
    </p>
    <div className="faqs-media">
    <iframe width="420" height="315" src="https://youtube.com/embed/HVKcwtOibTE">

    </iframe>
    <img loading="lazy" src={care}/>
    </div>
    </div>
</div>
        </>
    )
}

export function Diff (){
    return(
      <>
         <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

<div className="faqs-container">
    <h4 className="brown-text">
DIFFERENCES BETWEEN SEMI-JEWELRY AND COSTUME JEWELRY
    </h4>
    <div className="faq-display">
    <p>
    Semi-jewels are known for being more resistant and sophisticated compared to costume jewelry. But after all, do you know what makes each of them different? So, come and learn about the main differences between semi-jewelry and costume jewelry:
<ul className="faqs-list">

<li><BsDot/> The  semi-jewels  are hypoallergenic, as they are nickel-free. Jewelry  contains nickel and other heavy metals in its composition ,  which can cause skin irritation.
</li>

<li><BsDot/>The  semi-jewels  are plated with noble metals, such as gold. While  costume jewelry  is plated with inferior materials.</li>
<li><BsDot/>The  semi-jewelry stones  are set in the metal itself, which prevents the stones from coming loose. The stones in  jewelry  are usually just glued together, making it easier for the stones to fall out.</li>
<li><BsDot/>In addition to being more durable,  semi-jewels  have more shine and a better finish. Jewelry  has low durability, less shine and a burred ,  unpolished finish.</li>
</ul>
    </p>
    <img loading="lazy" src={diff}/>
    </div>
</div>
      </>
    )
}

export function Identify (){
    return(
        <>
                 <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

<div className="faqs-container">
    <h4 className="brown-text">
    HOW TO IDENTIFY BRUNA’S SEMI-JEWELRY

    </h4>
    <div className="faq-display identify-items">
    <p>
    Bruna's semi-jewels are highly accepted pieces in the market due to their advanced design and the quality of their plating. Therefore, some companies, with the intention of confusing the customer, try to copy our pieces, even imitating the logo. Therefore, always be aware of imitations.
    </p>
    <p>
    Our semi-jewelry always comes with the Bruna brand cast or engraved on the piece. Therefore, to identify Bruna's true semi-jewelry, simply check whether the piece has this marking.
    </p>
    <img loading="lazy" src={identify1}/>
    <img loading="lazy" src={identify2}/>
    <p>On smaller pieces, the Bruna brand is engraved on the pins and tuners. On the chains, a stamp in the shape of the Bruna logo is welded together with the clasp.
</p>
    <img loading="lazy" src={identify3}/>
    <img loading="lazy" src={identify}/>
    </div>
</div>
        </>
    )
}

export function Successful (){
    return(
        <>
         <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

<div className="faqs-container">
    <h4 className="brown-text">
    HOW TO BECOME A SUCCESSFUL CONSULTANT
    </h4>
    <div className="faq-display">
    <p>
    
Being a consultant is a job that requires dedication, planning and organization. And for sales to be successful, it is necessary to stand out in an increasingly competitive market. And we at Bruna Semijoias will show you how to win many clients and become a successful consultant. Follow our tips:

<ul className="faqs-list">

<li><BsDot/> Get to know the brand (products, differentiators, quality);
</li>

<li><BsDot/>Always carry the sample with you, clean and organized;
</li>
<li><BsDot/>Always use Bruna Semijoias;
</li>
<li><BsDot/>Make a weekly and monthly plan;
</li>
<li><BsDot/>Always be up to date with the latest pieces (launches, promotions and news);
</li>
<li><BsDot/>Know your customers’ preferences;
</li>
<li><BsDot/>Always be smiling and be friendly;
</li>
<li><BsDot/>Create an exclusive profile for sales on social media;
</li>
<li><BsDot/>Take care of your personal image and your behavior with customers;
</li>
<li><BsDot/>Always pay attention to the Bruna Semijoias website and social networks.
</li>
</ul>
    </p>
    <img loading="lazy" src={successful}/>
    </div>
</div>
      </>
    )
}

export function  TechSpec () {
    return(
        <>
                <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

<div className="faqs-container">
    <h4 className="brown-text">
    HOW TO CLEAN THE PARTS?

    </h4>
    <div className="faq-display">
    <div>
    <p>
    Bruna Semijoias is a consolidated brand in the market and recognized for the quality and sophistication of its pieces. This recognition is due to our difference, which is associated with several factors that certify the high quality standard of our semi-jewelry.
    </p>
    <p>
    Sophisticated design, prototyping with 3D technology, detailed finishing and the amount of gold ensure that our pieces have a longer useful life.Sophisticated design, prototyping with 3D technology, detailed finishing and the amount of gold ensure that our pieces have a longer useful life.
    </p>
    <p>
    There are two bathing techniques, one by weight (thousandths) and another by area (microns). Our pieces are plated by area, ensuring a more homogeneous and better quality bath, as the micron corresponds to a larger layer of gold compared to the thousandths. It is worth remembering that Bruna is one of the brands that deposits the most microns in its semi-jewelry. All this commitment makes Bruna stand out in the plated jewelry sector.
    </p>
    </div>
    <img loading="lazy" src={techspec}/>
    </div>
</div>
        </>
    )
}

export function Warranty () {
  return(<>
          <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>
          <div className="faqs-container">
    <h4 className="brown-text">
    WARRANTY

    </h4>
    <div className="faq-display">
    <div>
    <p>
    Bruna Semijoias offers a guarantee against manufacturing defects for 1 (one) year from the date of sale.
    </p>
    <p>
    When purchasing a Bruna Semijoia, always require the Bruna Warranty Term to be filled out correctly. In the Warranty Term, in addition to information about the sale of the product, you can also find some tips on how to preserve your jewelry.
    </p>
    <p>
    All traces that indicate improper use of the product, such as broken, scraped, dented, scratched and stained parts, are not included in the warranty.
    </p>
    <p>
    Bruna Semijoias stores and distribution centers have a team of professionals trained to carry out an analysis of the piece and exchange it if a manufacturing defect is identified.
    </p>
    </div>
    <img loading="lazy" src={warranty}/>
    </div>
</div>
        </>

)}

export function Distrubutors () {
    return(
        <>
          <img loading="lazy" className="faqs-banner" src={faqsBanner} alt="faqs Banner"/>

<div className="faqs-container">
    <h4 className="brown-text">
Distrubutors
    </h4>
    <div  className="faq-display">
    <div className="distro">
    <div>
     <h5>
        Become A Distrubutor
     </h5>
     <p>
     Do you want to resell Bruna Semijoias in your physical store and form a sales team? Then register and our commercial department will contact you to inform you how you can become a Distributor of our brand.
     </p>
     <a href="mailto:SALES@BRUNAJEWELRY.COM.NG"><BsEnvelope/>sales@brunajewelry.com.ng</a><br/>
     <a href="https://wa.link/asc509"><BsWhatsapp/>+2348036002914</a><br/>
     </div>

     <div>
     <h5>
     Find a Bruna Semijoias Distributor
     </h5>
     <p>
     Our representatives, resellers, retailers and distributors are present throughout Nigeria and will be happy to serve you. To locate a representative closest to you, contact our sales department:
     </p>
     <a href="mailto:SALES@BRUNAJEWELRY.COM.NG"><BsEnvelope/>sales@brunajewelry.com.ng</a><br/>
     <a href="https://wa.link/asc509"><BsWhatsapp/>+2348036002914</a><br/>
     </div>

     <div>
 
     <p>
     If you live abroad and want to find a representative in your country, speak to our export sector:
     </p>
     <a href="mailto:manira@brunasemijoias.com.br"><BsEnvelope/>manira@brunasemijoias.com.br</a><br/>
     <a href="https://wa.me/message/Q4MPXD6C64DSE1"><BsWhatsapp/>+55 14 99903-140</a><br/>
     </div>
    </div>
    <Form/>
    </div>
</div>   
        </>
    )
}


 
export default Faqs