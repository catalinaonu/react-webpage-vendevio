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
    <p>{company.logo}</p>
    <p>{company.description}</p>
    </div>
</Card>
    <style jsx>{`
    .card-content{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    }
    
    `}</style>

</>

export default Company