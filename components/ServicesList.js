// components
import Service from "./Service"
//data files
import services from "./Data/services_info";

const keys = Object.keys(services)

const ServicesList = () => (
    <ul>
        {keys.map(key =>
            <Service key={key} service={services[key]}/>
        )}
    </ul>
)

 export default ServicesList
