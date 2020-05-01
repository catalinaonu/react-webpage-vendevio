// components
import Service from "./Service"
//data files
import services from "./Data/services_info";

import React from "react";

const keys = Object.keys(services)

const ServicesList = () => (
    <div>
        {keys.map(key =>
            <Service key={key} service={services[key]}/>
        )}
    </div>
)

export default ServicesList

