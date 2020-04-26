import { Card } from 'antd';

const WelcomeMessage = ({welcomeMessage}) => (
    <div className="welcome-message">
        <div className="title">{welcomeMessage.title}</div>
            <div className="description">{welcomeMessage.description}</div>

        <style jsx>{`
         .welcome-message {
          color: #ffffff;
 
         }

         @media only screen and (max-width: 600px){
         .welcome-message{
          font-size: 24px;
              }
         }
         
          @media only screen and (min-width: 601px){
          .welcome-message{
          font-size: 48px;
          }
          }
         

         .description {
          font-weight: 300;
          }    
         
         .title{
          font-weight: 400;
         } 

         
        
        `}</style>
    </div>
)

export default WelcomeMessage