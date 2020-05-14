import React from "react";
import Link from 'next/link';
import JobApplication from "./JobApplyForm";
import openJobs from "./Data/openPositions";
import {Card, List, Button, Divider} from 'antd';

const jobTitle = Object.keys(openJobs);

const OpenPositionsList = () => <>
    {jobTitle.map(key =>
        <OpenPosition key={key} job={openJobs[key]}/>
    )}
</>

const OpenPosition = ({job}) => {
    return <div className="open-position">
        <div className="job-description">
            <Divider orientation="left"> <Button type="link" size="large">
                <Link href="/jobs">
                    <a>AKTUELLE STELLEN</a>
                </Link>
            </Button></Divider>
            <Card
                bordered={false}
                style={{background: 'var(--default-background)',
                fontSize: 18,
                lineHeight: 2.0
                }}>
                <div>{job.type_of_employment}</div>
                <div>{job.location}</div>
                <div>{job.salary}</div>
                <div>{job.starting_time}</div>
                <div>{job.benefits}</div>
            </Card>
            <Divider orientation="left"> <JobApplication/></Divider>


        </div>
        <div className="job-responsibility">
            <Card
                bordered={false}
                style={{
                    background: 'var( --default-background)',
                    fontSize: 18
                }}
            >
                <h1>{job.position}</h1>
                <p>{job.profile}</p>
                <p>{job.responsibility}</p>

            </Card>
            <Divider/>
            <p>We look forward to hearing from you </p>
            <JobApplication/>

        </div>
        <style jsx>{`
        .open-position {
         max-width: 60%;
         margin: 0px auto;
         display: flex;
         flex-direction: flex-row;
         justify-content: space-between;
        }
        .job-description {
         flex: 1;
         margin-top: 200px;
        }
        .job-responsibility {
         flex: 2;
         margin-top: 100px;
         margin-bottom: 200px;
        }
        @media only screen and (max-width: 600px) {
         .open-position {
          max-width: 100%;
          flex-direction: column;
         }
         .job-description {
           margin: 0px 48px;
         }
         .job-responsibility {
         margin: 24px;
         }
        }
      `}</style>
    </div>
}

export default OpenPosition

