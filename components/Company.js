import React from "react";
import companies from "./Data/infoCompanies";
import {Card, Avatar} from 'antd';

const CompaniesList = () => (
    <>
        {Object.keys(companies).map(key =>
            <Company key={key} company={companies[key]}/>
        )}
    </>
)


const Company = ({company}) => <>
<Card
    bordered={false}
    >
    <div className="card-content">
        <div className="logo-company">{company.logo}</div>
    <div className="description-company">{company.description}</div>
    </div>
</Card>
    <style jsx>{`
    .card-content{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
    }
    .logo-company{
     padding-bottom: 10px;
     }
  `}</style>
</>

export default Company