//components
import CompanyMobile from "../components/CompanyMobile";
//files
import companies from "../components/Data/companies_info";
//antd
import {Carousel} from 'antd';


const CarouselDevelopmentMobile = () => (
    <div className="carousel-customers-development">
        <Carousel autoplay style={{height: 300}}>
            <div><CompanyMobile company={companies["Freebiebox"]}/></div>
            <div><CompanyMobile company={companies["Delta"]}/></div>
            <div><CompanyMobile company={companies["Seekyou"]}/></div>
            <div><CompanyMobile company={companies["LeadStudy"]}/></div>
            <div><CompanyMobile company={companies["PrimeCrowd"]}/></div>
            <div><CompanyMobile company={companies["Carployee"]}/></div>
        </Carousel>
        <style jsx>{`
        .carousel-customers-development {
         max-width: 100%;
         height: 300px;
         margin: 24px auto;
         background: #364d79;
        }
        @media only screen and (min-width: 601px) {
         .carousel-customers-development{
          display: none;
         }
        }
    `}</style>
    </div>
)

export default CarouselDevelopmentMobile