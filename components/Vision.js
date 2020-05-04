//antd
import {Card} from 'antd';

const Vision = ({visionMessage}) => (
     <div className="card-vision">
        <Card size="small"
              headStyle={{backgroundColor: '#364d79', color: '#ffffff', textAlign: 'center', fontSize:18}}
              bodyStyle={{backgroundColor: '#364d79', color: '#ffffff', fontSize:18, fontWeight: 300}}
              title={visionMessage.title}
        >
            {visionMessage.description}
        </Card>
    </div>
)

export default Vision