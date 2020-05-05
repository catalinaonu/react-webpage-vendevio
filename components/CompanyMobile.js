//antd
import {Card} from 'antd';
import {Avatar} from 'antd';

const CompanyMobile = ({company}) => (
    <div className="card-customers">
        <Card
            bordered={false}
            style={{
                width: 440,
                height: 240,
                textAlign: 'center',
                background: '#364d79',
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 300,
                // margin: '24px'
            }}
        >
            <div className="card-content">
                <div className="logo-customers">{company.logo}</div>
                <div className="description-customers">{company.description}</div>
            </div>
        </Card>
        <style jsx>{`
             .card-content{
              height: 200px;
              margin: 0px auto;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-content: center;
              align-items: center;
             }

            `}</style>
    </div>
)

export default CompanyMobile