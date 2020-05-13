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
              backgroundColor: 'var(--light-blue-background)',
              color: 'var(--light-color)',
              textAlign: 'center',
              fontSize: 18
          }}
          bodyStyle={{
              backgroundColor: 'var(--light-blue-background)',
              color: 'var(--light-color)',
              fontSize: 18,
              fontWeight: 300
          }}
          title={visionMessage.title}
    >
        {visionMessage.description}
    </Card>
</>

export default Vision