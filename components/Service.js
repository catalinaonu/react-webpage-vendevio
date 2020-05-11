import React from "react";

//antd
import {Card} from 'antd';

const {Meta} = Card;

const Service = ({service}) => <div className="card-services">
    <Card
        hoverable
        style={{width: 240, background: '#fafafa'}}
        bordered={false}
        cover={service.img}
    >
        <Meta title={service.title}
              description={service.description}
        />
    </Card>
</div>
export default Service