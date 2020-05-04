//components
import Company from "../components/Company";

//files
import companies from "../components/Data/companies_info";

//antd
import {Carousel} from 'antd';

const CarouselVentures = () => (
    <div className="carousel-customers">
        <Carousel autoplay>
            <div><Company company={companies["Alveri"]}/></div>
            <div><Company company={companies["QuickSpeech"]}/></div>
            <div><Company company={companies["Vereinsplaner"]}/></div>
        </Carousel>
        <style jsx>{`
        .carousel-customers {
         max-width: 60%;
         margin: 0px auto;
         background: #002766;
        }
        
        `}</style>

    </div>
)

export default CarouselVentures;



//
//
// .carousel-customers {
//     text-align: center;
//     height: 400px;
//     background: #364d79;
//     overflow: hidden;
//     max-width: 100%;
//     margin: 48px auto;
//     padding-bottom: 24px;
// }
//
// @media only screen and (min-width: 601px) {
// .carousel-customers {
//         max-width: 60%;
//         margin: 24px auto;
//     }
// }
//
// .carousel-customers
// div {
//     margin-left: 24px;
// }
//
