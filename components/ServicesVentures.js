//components
import Service from "./Service";

//files
import services from "./Data/services_info";

//antd
import { Row, Col} from "antd";

const ServicesVentures = () => (
    <div className="card-wrapper-services-ventures">
        <Row gutter={[16, 32]} justify="center">
            <Col xs={{span: 17, offset: 7}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["code-exzellenz"]}/>
            </Col>
            <Col xs={{span: 17, offset: 7}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["netzwerk"]}/>
            </Col>
            <Col xs={{span: 17, offset: 7}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["teile-des-teams"]}/>
            </Col>
            <Col xs={{span: 17, offset: 7}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["startup-konditionen"]}/>
            </Col>
        </Row>
        <style jsx>{`
         .card-wrapper-services-ventures {
          max-width: 100%;
          margin: 48px auto;   
         }
         @media only screen and (min-width: 601px) {
          .card-wrapper-services-ventures {
           max-width: 80%;
          } 
         }
        `}</style>
    </div>
)

export default ServicesVentures

