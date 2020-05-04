//components
import Service from "./Service";

//files
import services from "./Data/services_info";

//antd
import { Row, Col} from "antd";

const ServicesVentures = () => (
    <div className="card-wrapper-services-ventures">
        <Row gutter={[16, 32]} justify="center">
            <Col xs={{span: 20, offset: 4}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["code-exzellenz"]}/>
            </Col>
            <Col xs={{span: 20, offset: 4}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["netzwerk"]}/>
            </Col>
            <Col xs={{span: 20, offset: 4}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["teile-des-teams"]}/>
            </Col>
            <Col xs={{span: 20, offset: 4}} lg={{span: 5, offset: 1}}>
                <Service service={services["ventures"]["startup-konditionen"]}/>
            </Col>
        </Row>
        <style jsx>{`
         .card-wrapper-services-ventures {
          max-width: 100%;  
         }
        `}</style>
    </div>
)

export default ServicesVentures

