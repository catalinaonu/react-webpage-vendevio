//antd
import {Card} from 'antd';
import {Avatar} from 'antd';

const Company = ({company}) => (
    <div className="card-customers">
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
            <div className="card-content">
            <div className="logo-customers">{company.img}</div>
            <div className="description-customers">{company.description}</div>
            </div>
        </Card>
        <style jsx>{`
             .card-content{
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
    </div>
)

export default Company