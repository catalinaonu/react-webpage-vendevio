import React from "react";
import welcomeMessage from "./Data/welcomeMessages";


const WelcomeMessagesList = () => (
    <>
        {Object.keys(welcomeMessage).map = (key => (
            <WelcomeMessage key={key} welcomeMessage={welcomeMessage[key]}/>
        ))}
    </>
)

const WelcomeMessage = ({welcomeMessage}) => <div className="welcome-message">
    <div className="title-welcome-message">
        {welcomeMessage.title}
    </div>
        <div className="description-welcome-message">
            {welcomeMessage.description}
        </div>
    <style jsx>{`
     .welcome-message {
      color: #ffffff;
      text-align: center;
      height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
     }
     .description-welcome-message {
      font-weight: 300;
     }    
     .title-welcome-message{
      font-weight: 400;
     } 
     @media only screen and (max-width: 600px){
     .welcome-message{
      height: 20vh;
      font-size: 24px;
     }
    }
     @media only screen and (min-width: 601px){
      .welcome-message{
       font-size: 48px;
      }
     }
   `}</style>
</div>

export default WelcomeMessage
