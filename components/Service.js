import React from "react";
import services from "./Data/infoServices";
import {Card} from 'antd';


const ServicesList = () => (
    <>
        {Object.keys(services).map(key =>
            <Service key={key} service={services[key]}/>
        )}
    </>
)

const {Meta} = Card;

const Service = ({service}) => <div className="card-services">
    <Card
        style={{
            width: 300,
            height: 420,
            background: 'var(--default-background)',
            boxShadow: '0 0 30px 10px var(--shadow-color)',
            padding: 20
        }}
        bordered={true}
        cover={service.img}
    >
        <Meta title={service.title}
              description={service.description}
        />
    </Card>
</div>

export default Service