//components
import Vision from "./Vision";
//data files
import vision from "./Data/vision_list"

import {Col, Row} from 'antd';

const keys = Object.keys(vision)

const VisionList = () => (
    <div>
            {keys.map(key => (
            <Vision key={key} visionMessage={vision[key]}/>
        ))}
            />
    </div>
)

export default VisionList

