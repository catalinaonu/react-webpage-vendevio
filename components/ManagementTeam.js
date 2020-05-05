import React from "react";
//antd
import {Col, Row} from "antd";
//components
import TeamMemberForm from "./TeamMemberForm";
//files
import team from "./Data/team_info";


const ManagementTeam = () => (
    <div className="card-wrapper-managers">
        <Row gutter={[16, 32]} justify="center">
            <Col xs={{span: 18, offset: 6}} lg={{span: 7, offset: 1}}>
                <TeamMemberForm teamMember={team["Stefan"]}/>
            </Col>
            <Col xs={{span: 18, offset: 6}} lg={{span: 7, offset: 1}}>
                <TeamMemberForm teamMember={team["Hannes"]}/>
            </Col>
            <Col xs={{span: 18, offset: 6}} lg={{span: 7, offset: 1}}>
                <TeamMemberForm teamMember={team["Kambis"]}/>
            </Col>
        </Row>
        <style jsx>{`
        .card-wrapper-managers{
         width: 100%;
         margin: 24px auto;
        }
         @media only screen and (min-width: 600px) {
          .card-wrapper-managers {
           max-width: 50%;  
          }
         }
        
        `}</style>
    </div>
)

export default ManagementTeam