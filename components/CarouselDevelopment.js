//components
import Company from "../components/Company";

//files
import companies from "../components/Data/companies_info";

//antd
import {Carousel} from 'antd';

const CarouselDevelopment = () => (
<div className="carousel-customers-development">
    <Carousel autoplay>
        <div><Company company={companies["Freebiebox"]}/></div>
        <div><Company company={companies["Delta"]}/></div>
        <div><Company company={companies["Seekyou"]}/></div>
        <div><Company company={companies["LeadStudy"]}/></div>
        <div><Company company={companies["PrimeCrowd"]}/></div>
        <div><Company company={companies["Carployee"]}/></div>
    </Carousel>
    <style jsx>{`
      .carousel-customers-development {
         max-width: 60%;
         margin: 24px auto;
         background: #364d79;
        }
        @media only screen and (max-width: 600px) {
         .carousel-customers-development {
          display: none;
         }
        }
    `}</style>
</div>
)

export default CarouselDevelopment