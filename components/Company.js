import React from "react";
import companies from "./Data/infoCompanies";
import {Card} from 'antd';

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
        style={{
            width: 960,
            height: 300,
            textAlign: 'center',
            background: '#364d79',
            color: '#FFFFFF',
            fontSize: 24,
            fontWeight: 300,
        }}
    >
        <div className="card-content-customers">
            <div className="logo-customers">
                {company.img}
            </div>
            <div className="description-customers">
                {company.description}
            </div>
        </div>
    </Card>
    <style jsx>{`
     .card-content-customers{
      margin: 0px auto;
      display: flex;
      height: 250px;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      align-items: center;
     }
     .logo-customers{
      display: flex;
      flex: 1;
      justify-content: center;
     }
     .description-customers{
      flex: 2;
     }
   `}</style>
</>

export default Company