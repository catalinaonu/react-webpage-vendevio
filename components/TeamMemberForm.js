// antd
import {Card} from 'antd';

const {Meta} = Card;

const TeamMemberForm = ({teamMember}) => (
    <div>
        <Card
            hoverable
            style={{width: 240}}
            cover={teamMember.photo_business}
        >
            <Meta title={teamMember.name}
                  description={teamMember.title}
            />
            <div className="additional">
                <div>{teamMember.phone}</div>
                <div>{teamMember.email}</div>
            </div>
        </Card>
    </div>
)


export default TeamMemberForm