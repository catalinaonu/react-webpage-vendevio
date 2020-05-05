//components
import CompanyMobile from "../components/CompanyMobile";

//files
import companies from "../components/Data/companies_info";

//antd
import {Carousel} from 'antd';

const CarouselVenturesMobile = () => (
    <div className="carousel-customers-ventures">
        <Carousel autoplay style={{height: 300}}>
            <div><CompanyMobile company={companies["Alveri"]}/></div>
            <div><CompanyMobile company={companies["QuickSpeech"]}/></div>
            <div><CompanyMobile company={companies["Vereinsplaner"]}/></div>
        </Carousel>
        <style jsx>{`
        .carousel-customers-ventures {
         max-width: 100%;
         margin: 24px auto;
         background: #364d79;
        }
        @media only screen and (min-width: 601px) {
         .carousel-customers-ventures{
          display: none;
         }
        }
        `}</style>

    </div>
)

export default CarouselVenturesMobile;
