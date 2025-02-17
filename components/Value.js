import React from 'react';
import values from "./Data/values"

const ValuesList = () => (
    <>
        {Object.keys(values).map(key => (
            <Value key={key} value={values[key]}/>
        ))}
    </>
)

const Value = ({value}) => (
    <div className="values">
        <div className="title">
            {value.title}
        </div>
        <div className="description">
            {value.description}
        </div>
        <style jsx>{`
        .values {
         text-align: center;
         margin: 48px auto;
         font-weight: 400;
        }
        @media only screen and (max-width: 600px){
         .values{
          font-size: 24px;
         }
        }
        @media only screen and (min-width: 601px){
        .values{
         font-size: 48px;
        }
       }
       .title{
        color: var(--value-title-color);
        font-weight: 400;
       }
       .description {
        color: var(--value-description-color);
        font-weight: 300;
       }
     `}</style>
    </div>
)

export default Value