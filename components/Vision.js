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
    <Card size="small"
          headStyle={{
              backgroundColor: '#364d79',
              color: '#ffffff',
              textAlign: 'center',
              fontSize: 18
          }}
          bodyStyle={{
              backgroundColor: '#364d79',
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 300
          }}
          title={visionMessage.title}
    >
        {visionMessage.description}
    </Card>
</>

export default Vision