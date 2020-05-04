//antd
import {Card} from 'antd';
import {Avatar} from 'antd';

const Company = ({company}) => (
    <div className="card-customers">
        <Card
            bordered={false}
            hoverable={true}
            style={{
                width: 960,
                height: 360,
                textAlign: 'center',
                background: '#002766',
                color: '#FFFFFF',
                fontSize: 24,
                fontWeight: 300
            }}
        >
            <div className="card-content">
            <div className="logo-customers">{company.img}</div>
            <div className="description-customers">{company.description}</div>
            </div>
        </Card>
        <style jsx>{`
             .card-content{
              height: 360px;
              display: flex;
              flex-direction: row;
              align-items: center;
             }
             .logo-customers{
              height: 120px;
              display: flex;
              flex: 1;
              justify-content: center;
              aligh-items: center;
              border-radius: 50%;
              background: #FFFFFF;
             }
             .description-customers{
              flex: 2;
              justify-content: center;
             }
 
  
            `}</style>
    </div>
)

export default Company