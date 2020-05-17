import React from "react";
import companies from "./Data/infoCompanies";
import {Card, Avatar} from 'antd';

const {Meta} = Card;

const keys = Object.keys(companies)

const CompaniesList = () => (
    <>
        {keys.map(key =>
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
     justify-content: center;
     align-items: center;
    }
    .logo-company {
    padding-bottom: 24px;
    }
    
    `}</style>

</>

export default Company