import TopTen from "../topTen/swiper"
import Faqs from "../Faqs/faqs"
import { Banner } from "../topTen/swiper"
import { CatalogSwiper } from "../topTen/swiper"
function Main () {
    return(
        <div>
        <Banner/>
    <CatalogSwiper/>
    <TopTen/>
    <Faqs/>
        </div>
    )
}

export default Main