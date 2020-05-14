import React from "react";
import Link from 'next/link';
import openJobs from "./Data/openPositions";
import {Row, Col, Divider, List} from 'antd';

const keys = Object.keys(openJobs)

const ListOfJobs = () => <div className='list-of-jobs'>
    <List
        style={{
            background: 'var(--dark-blue-background)',
            color: 'var(--light-color)',
            fontSize: 18,
            padding: 24
        }}
        size="large"
        header={<div>AKTUELLE STELLEN</div>}
        bordered
        dataSource={keys}
        renderItem={key =>
            <List.Item>
                <Link href="/jobs/[position]" as={`/jobs/${key}`}>
                    <a>{openJobs[key].position}</a>
                </Link>
                <span>{openJobs[key].type_of_employment}</span>
                <span>{openJobs[key].starting_time}</span>
            </List.Item>
        }
    />
    <style jsx>{`
     @media only screen and (min-width: 601px) {
      .list-of-jobs {
       max-width: 80%;
       margin: 48px auto;
      }
     }
     a {
     color: var(--light-color);
     font-weight: 500;
     }
     a:hover {
     color: var(--light-blue-hoover);
     opacity: 0.6;
    }
  `}</style>
</div>

export default ListOfJobs