import  { BsWhatsapp }  from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import { BsEnvelope } from "react-icons/bs"

const whatsapp = <BsWhatsapp/>
const envelope=<BsEnvelope/>
const twitter=<BsTwitter/>

const contactData= [
    {
        id: 1,
        name: "email",
        info: "INFO@BRUNAJEWELRY.COM.NG",
        icon: envelope,
        link:"mailto:INFO@BRUNAJEWELRY.COM.NG"
    },
    {
        id: 2,
        name: "whatsapp",
        info: "+2348036002914",
        icon: whatsapp,
        link: "https://wa.link/asc509"

    },

]

export default contactData