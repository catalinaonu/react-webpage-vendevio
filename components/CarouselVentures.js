//components
import Company from "../components/Company";

//files
import companies from "../components/Data/companies_info";

//antd
import {Carousel} from 'antd';

const CarouselVentures = () => (
    <div className="carousel-customers" style={{height: 300}}>
        <Carousel autoplay>
            <div><Company company={companies["Alveri"]}/></div>
            <div><Company company={companies["QuickSpeech"]}/></div>
            <div><Company company={companies["Vereinsplaner"]}/></div>
        </Carousel>
        <style jsx>{`
        .carousel-customers {
         max-width: 60%;
         margin: 24px auto;
         background: #364d79;
        }
        @media only screen and (max-width: 600px) {
         .carousel-customers {
          display: none;
         }
        }
       `}</style>

    </div>
)

export default CarouselVentures;


