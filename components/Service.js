import React from "react";
import services from "./Data/infoServices";
import {Card} from 'antd';

const keys = Object.keys(services)

const ServicesList = () => (
    <>
        {keys.map(key =>
            <Service key={key} service={services[key]}/>
        )}
    </>
)

const {Meta} = Card;

const Service = ({service}) => <div className="card-services">
    <Card
        hoverable
        style={{
            width: 240,
            background: 'var(--default-background)'
        }}
        bordered={false}
        cover={service.img}
    >
        <Meta title={service.title}
              description={service.description}
        />
    </Card>
</div>

export default Service