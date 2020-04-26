import TeamMemberJobsPage from "./TeamMemberJobsPage";
import team from "./Data/team_info";


const keys = Object.keys(team)

const TeamJobsPage = () => (
<div>
    {keys.map(key => (
        <TeamMemberJobsPage key={key} member={team[key]}/>
    ))}
</div>
)

export default TeamJobsPage

