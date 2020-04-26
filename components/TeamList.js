import team from './Data/team_info'
import TeamMember from "./TeamMember";

const keys = Object.keys(team);

const TeamList = () => (
    <div>
        {keys.map(key => (
            <TeamMember key={key} teamMember={team[key]}/>
        ))}
    </div>
)

export default TeamList