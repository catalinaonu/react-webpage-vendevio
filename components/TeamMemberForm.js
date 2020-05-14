// antd
import {Card} from 'antd';

const {Meta} = Card;

const TeamMemberForm = ({teamMember}) => <>
    <Card
        style={{
            width: 260,
            padding: 10,
            boxShadow: '0 0 5px 2px var(--shadow-color)'
        }}
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
    <style jsx>{`
    .additional{
     padding-top: 10px;
     color: #8c8c8c;
    }
    `}</style>
</>


export default TeamMemberForm