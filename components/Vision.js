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
              backgroundColor: 'var(--dark-blue-background)',
              color: 'var(--light-color)',
              textAlign: 'center',
              fontSize: 18,
              padding: 24,
              marginBottom: 5,
              boxShadow: '0 0 15px 8px #486685'
          }}
          bodyStyle={{
              height: 240,
              backgroundColor: 'var(--dark-blue-background)',
              color: 'var(--light-color)',
              fontSize: 18,
              fontWeight: 300,
              padding: 24,
              boxShadow: '0 0 15px 8px #486685'

          }}
          title={visionMessage.title}
    >
        {visionMessage.description}
    </Card>
</>

export default Vision