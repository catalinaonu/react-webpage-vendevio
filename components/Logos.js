import React from 'react';
import companies from "./Data/companies_info";
import {Row, Col} from 'antd';

const keys = Object.keys(companies)

const Logos = () => (
    <div className="customers-list">
        <Row justify="center" align="middle" gutter={[32, 32]}>
            {keys.map(key => (
                <Col key={key} xs={{span: 9, offset: 2}} lg={{span: 4, offset: 1}}>
                    {companies[key].img}
                </Col>
            ))}
        </Row>
    </div>
)


export default Logos

