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
        </Card>
    </div>
)


export default TeamMemberForm