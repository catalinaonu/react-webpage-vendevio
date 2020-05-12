import React from "react";

import TeamMember from "./TeamMember";
import team from "./Data/infoTeam";

const keys = Object.keys(team);

const TeamList = () => (
    <>
        {keys.map(key => (
            <TeamMember key={key} teamMember={team[key]}/>
        ))}
    </>
)

const TeamMember = ({teamMember}) => (
    <>
        {teamMember.name}
        {teamMember.title}
        {teamMember.photo_business}
        {teamMember.motto}
        {teamMember.phone}
        {teamMember.email}
        {teamMember.linkedIn}
        {teamMember.xing}
    </>
)

export default TeamMember
