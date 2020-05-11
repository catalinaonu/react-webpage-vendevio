import React from "react";
//components
import TeamMemberForm from "./TeamMemberForm";
import ContactFormDevelopment from "./ContactFormDevelopment";
//data files
import team from "./Data/team_info";


const ContactDevelopment = () => (
    <div className="contact-form-development">
        <div className="team-member-development">
            <TeamMemberForm teamMember={team["Stefan"]}/>
        </div>
        <div className="contact-form-development">
            <ContactFormDevelopment/>
        </div>
        <style jsx>{`
         .contact-form-development{
          max-width: 80%;  
          margin: 48px auto;
          display: flex;
         } 
          //Prevent flexbox shrinking
         .contact-form-development {
          flex: 1;
         }
         .team-member-development {
          flex: 1;
          margin: 48px auto;
         }
         @media only screen and (max-width: 600px) {
          .contact-form-development {
           flex-direction: column;
           flex-flow: flex-direction; 
           justify-content: center;
           align-items: center;
           align-content: center;
           margin: 48px auto;
          }
         }
         @media only screen and (min-width: 601px) { 
          .contact-form-development {
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

export default ContactDevelopment