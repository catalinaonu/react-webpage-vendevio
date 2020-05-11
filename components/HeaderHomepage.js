import React from "react";

//next
import Link from "next/link";

//components
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import WelcomeMessage from "./WelcomeMessage";

//files
import welcomeMessage from "./Data/welcome_info";


const HeaderHomepage = () => (
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
            {/*Link to Venture Page*/}
            <section className="welcome-message-ventures">
                <Link href="/ventures">
                    <a title="Ventures Page"><WelcomeMessage
                        welcomeMessage={welcomeMessage["ventures_homepage"]}/></a>
                </Link>
            </section>
            {/*/!*Link to Development Page*!/*/}
            <section className="welcome-message-development">
                <Link href="/development">
                    <a title="Development Page"><WelcomeMessage
                        welcomeMessage={welcomeMessage["development_homepage"]}/></a>
                </Link>
            </section>
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
        .welcome-message-ventures {
         flex: 1;
        }
        .welcome-message-development{
         flex: 1;
        }
        @media only screen and (max-width: 600px) {
        .header-img{
         background:  linear-gradient(
                       rgba(0, 0, 0, 0.6),
                       rgba(0, 0, 0, 0.6)
                      ), url('/homepage_small.jpg'); 
         height: 30vh;
                    }
        }
         @media only screen and (min-width: 601px) {
         .header-img{
          background:  linear-gradient(
                       rgba(0, 0, 0, 0.6),
                       rgba(0, 0, 0, 0.6)
                       ), url('/homepage_large.jpg'); 
                     }
         }
          //center the messages on the background img
         .welcome-messages{  
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-content: space-around;
         }
         //to hide the description on mobile
         @media only screen and (max-width: 600px) {
          .welcome-message-ventures :global(.description) {
           display: none;
          }
          .welcome-message-development :global(.description) {
            display: none;
           }    
          }                         
        `}</style>
    </div>
)

export default HeaderHomepage