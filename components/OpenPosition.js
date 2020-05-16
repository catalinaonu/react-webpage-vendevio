import React from "react";
import Link from 'next/link';
import JobApplication from "./JobApplyForm";
import openJobs from "./Data/openPositions";
import {Card, List, Button, Divider} from 'antd';


const OpenPositionsList = () => <>
    {Object.keys(openJobs).map(key =>
        <OpenPosition key={key} job={openJobs[key]}/>
    )}
</>

const OpenPosition = ({job}) => <div className="open-position">
    <div className="job-description">
        <List size="small">
            <List.Item><Button type="link" size="large">
                <Link href="/jobs">
                    <a>AKTUELLE STELLEN</a>
                </Link>
            </Button></List.Item>
            <List.Item><p>Type of employment: {job.type_of_employment} </p></List.Item>
            <List.Item><p>Location: {job.location}</p></List.Item>
            <List.Item><p>Starting time: {job.starting_time}</p></List.Item>
            <List.Item><p>Salary: {job.salary}</p></List.Item>
            <List.Item><p>Benefits: {job.benefits}</p></List.Item>
            <List.Item><JobApplication/></List.Item>
        </List>
    </div>
    <div className="job-responsibility">
        <List>
            <List.Item><p className="title">{job.position}</p></List.Item>
            <List.Item><p>{job.profile}</p></List.Item>
            <List.Item><p>{job.responsibility}</p></List.Item>
            <List.Item><p className="title">We look forward to hearing from you</p></List.Item>
            <List.Item><JobApplication/></List.Item>
        </List>
    </div>
    <style jsx>{`
        .open-position {
         max-width: 100%;
         display: flex;
         flex-direction: flex-row;
         justify-content: space-between;
        }
        .job-description {
         flex: 1;
         margin: 48px 48px 0px 48px; 
        }
        .job-responsibility {
         flex: 3;
         margin: 48px;
        }
        @media only screen and (max-width: 600px) {
         .open-position {
          flex-direction: column;
         } 
        }
        @media only screen and (min-width: 601px) {
         .open-position {
          max-width: 80%;
         }
        }
        .title {
         font-size: 18px;
        }
        
       `}</style>
</div>


export default OpenPosition

