import TopTen from "../topTen/swiper"
import Faqs from "../Faqs/faqs"
import { Banner } from "../topTen/swiper"
import { CatalogSwiper } from "../topTen/swiper"
import Form from "../../form/form"
function Main () {
    return(
        <div>
        <Banner/>
    <CatalogSwiper/>
    <TopTen/>
    <Faqs/>
    <div className="form">
    <Form/>
    </div>
        </div>
    )
}

export default Main