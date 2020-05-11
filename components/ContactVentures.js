import TeamMemberForm from "./TeamMemberForm";
import team from "./Data/team_info";
import ContactFormVentures from "./ContactFormVentues";
import React from "react";

const ContactVentures = () => (
    <div className="contact-form-ventures">
        <div className="team-member-ventures">
            <TeamMemberForm teamMember={team["Kambis"]}/>
        </div>
        <div className="contact-form-ventures">
            <ContactFormVentures/>
        </div>
        <style jsx>{`
         .contact-form-ventures{
          margin: 48px auto;
          display: flex;
          max-width: 100%;   
         }
          //Prevent flexbox shrinking
         .contact-form-ventures{
          flex: 1;
         }
         .team-member-ventures {
          flex: 1;
          margin: 48px auto;
         }
         @media only screen and (max-width: 600px) {
          .contact-form-ventures {
           flex-direction: column;
           flex-flow: flex-direction; 
           justify-content: center;
           align-items: center;
           align-content: center;
           margin: 0 24px;
          }
         }
         @media only screen and (min-width: 601px) { 
          .contact-form-ventures {
           flex-direction: row;
           max-width: 50%;
           margin: 48px auto;
           flex-flow: flex-direction; 
           justify-content: space-between;
           align-items: center;
          }
         }
       `}</style>
    </div>
)

export default ContactVentures