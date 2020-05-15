import React from "react";
import vision from "./Data/vision"
import {Card} from 'antd';

const keys = Object.keys(vision)

const VisionList = () => (
    <>
        {keys.map(key => (
            <Vision key={key} visionMessage={vision[key]}/>
        ))}
        />
    </>
)

const Vision = ({visionMessage}) => <>
    <Card
        title={visionMessage.title}
        bordered={false}
        style={{
            width: 300,
            background: 'var(--background-default)',
            color: 'var(--color-default)',
        }}>
        {visionMessage.description}
    </Card>
</>


export default Vision