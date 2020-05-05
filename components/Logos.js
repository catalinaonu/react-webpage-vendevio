import React from 'react';
import companies from "./Data/companies_info";
import {Row, Col} from 'antd';
import {Divider} from 'antd';

const keys = Object.keys(companies)

const Logos = () => (
    <div className="customers-list">
        <Divider><p>Our Customers</p></Divider>
        <Row justify="center" align="middle" gutter={[32, 32]}>
            {keys.map(key => (
                <Col key={key} xs={{span: 9, offset: 2}} lg={{span: 4, offset: 1}}>
                    {companies[key].logo}
                </Col>
            ))}
        </Row>
        <style jsx>{`
        .customers-list{
         margin: 48px auto; /* will automatically align center */
        }  
        p{
            font-size: 24px;
        }
        @media only screen and (min-width: 601px) {
        .customers-list{
            max-width: 60%;
         }
        }
        `}</style>
    </div>
)

export default Logos

