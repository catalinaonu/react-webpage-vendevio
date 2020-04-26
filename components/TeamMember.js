const TeamMember = ({teamMember}) => (
    <div>
            <div>{teamMember.name}</div>
            <div>{teamMember.title}</div>
            <div>{teamMember.photo_business}</div>
            <div>{teamMember.motto}</div>
            <div>{teamMember.phone}</div>
            <div>{teamMember.email}</div>
            <div>{teamMember.linkedIn}</div>
            <div>{teamMember.xing}</div>
    </div>
)

export default TeamMember
