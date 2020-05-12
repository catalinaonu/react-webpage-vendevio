import React from "react";
import Link from 'next/link';
import openJobs from "./Data/openPositions";
import {Row, Col, Divider} from 'antd';

const keys = Object.keys(openJobs)

const ListOfJobs = () => (
    <div className='list-of-jobs'>
        {keys.map(key => (
            <Row gutter={[16, 16]} justify="center" key={key}>
                <Col xs={{span: 10, offset: 1}} lg={{span: 6, offset: 2}}>
                    <Link href="/jobs/[position]" as={`/jobs/${key}`}>
                        <a>{openJobs[key].position}</a>
                    </Link>
                </Col>

                <Col xs={{span: 8, offset: 3}} lg={{span: 4, offset: 1}}>
                    {openJobs[key].type_of_employment}
                </Col>

                <Col xs={{span: 10, offset: 1}} lg={{span: 4, offset: 1}}>
                    {openJobs[key].starting_time}
                </Col>

                <Col xs={{span: 8, offset: 3}} lg={{span: 4, offset: 1}}>
                    {openJobs[key].location}
                </Col>
                <Divider style={{background: '#bfbfbf'}}/>
            </Row>
        ))}
        <style jsx>{`
        .list-of-jobs {
         max-width: 100%;
         margin: 48px auto;
         color: #FFFFFF;
         font-size: 18px;
        }
        a {
        color: #FFFFFF;
         font-size: 24px;
        }
        @media only screen and (min-width: 601px) {
         .list-of-jobs {
          max-width: 60%;
         }
        }
        @media only screen and (max-width: 600px) {
          font-size: 18px;
        }
       a:hover {
         color: #e6f7ff;
         opacity: 0.6;
        }
      `}</style>
    </div>
)

export default ListOfJobs