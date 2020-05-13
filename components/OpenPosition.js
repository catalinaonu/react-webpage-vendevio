import React from "react";
import Link from 'next/link';
import JobApplication from "./JobApplyForm";
import openJobs from "./Data/openPositions";
import {Card, Button, Divider, Alert} from 'antd';

const keys = Object.keys(openJobs);

const OpenPositionsList = () => <>
    {keys.map(key =>
        <OpenPosition key={key} job={openJobs[key]}/>
    )}
</>

const OpenPosition = ({job}) => {
    return <div className="open-position">
        <div className="job-description">
            <Card
                bordered={false}
                style={{
                    width: 300,
                    fontSize: 18,
                    background: 'var(--default-background)'
                }}>
                <p>
                    <Button type="link" size="large">
                        <Link href="/jobs">
                            <a>AKTUELLE STELLEN</a>
                        </Link>
                    </Button>
                </p>
                <Divider/>
                <p>{job.type_of_employment}</p>
                <Divider/>
                <p>{job.department}</p>
                <Divider/>
                <p>{job.starting_time}</p>
                <Divider/>
                <p>{job.location}</p>
                <Divider/>
                <p>{job.salary}</p>
                <Divider/>
                <p>{job.benefits}</p>
                <Divider/>
                <JobApplication/>
            </Card>
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
                <Divider/>
                <p>We look forward to hearing from you </p>
                <JobApplication/>
            </Card>

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

