import React from "react";
//components
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import WelcomeMessage from "./WelcomeMessage";

//files
import welcomeMessage from "./Data/welcome_info";

const HeaderTeam = () => (
    <div className="header-img">
        <div className="navbar-container">
            {/*navbar desktop*/}
            <div className="top-navbar">
                <NavbarDesktop/>
            </div>

            {/*navbar mobile*/}
            <div className="drawer-navbar">
                <NavbarMobile/>
            </div>
        </div>

        <section className="welcome-messages">
            <div className="welcome-message-team">
                <WelcomeMessage welcomeMessage={welcomeMessage["team_page"]}/>
            </div>
        </section>
        <style jsx>{`
       .header-img {
         display: flex;
         flex-direction: column;
         flex-flow: flex-direction;
         max-width: 100%;
         height: 100vh;
         //center the background img
         background-position: center center;
         background-repeat: no-repeat;
         background-size: cover;
         }
        @media only screen and (max-width: 600px) {
        .header-img{
         background:  linear-gradient(
                       rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)
                       ), url('/team_small.jpg'); 
         height: 30vh;
                    }
         }        
         @media only screen and (min-width: 601px) {
         .header-img{
          background:  linear-gradient(
                       rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)
                       ), url('/team_large.jpg'); 
                     }
         }
      `}</style>
    </div>
)

export default HeaderTeam