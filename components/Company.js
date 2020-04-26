//antd
import {Card} from 'antd';


const Company = ({company}) => (
        <div clssName="card-customers">
            <Card
                bordered={false}
                hoverable={true}

                style={{ width: 480, height:240, textAlign: 'left', background: '#364d79', color: '#FFFFFF', fontSize:18}}
            >
                    {/*{company.id}*/}
                    <div className="content-wrapper">
                    <div className="logo-customers">{company.img}</div>
                    <div className="description-customers">{company.description}</div>
                    </div>

            </Card>
            <style jsx>{`
             //center the content of the card
             .content-wrapper {
             display: flex;
             flex-direction: row;
             justify-content: flex-start;
             align-items: center;
             align-content: space-between;
             height: 200px;
             }
             
             .logo-customers {
              padding-right: 24px;
          
             }
            
            `}</style>
    </div>
)

export default Company