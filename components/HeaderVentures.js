import React from "react";

//next
import Link from "next/link";

//components
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import WelcomeMessage from "./WelcomeMessage";

//files
import welcomeMessage from "./Data/welcomeMessages";

//antd
import {Button} from "antd";


const HeaderVentures = () => (

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
            {/*message header*/}
            <section className="welcome-messages">
                <div className="welcome-messages-ventures">
                    <div className="welcome-message-ventures">
                        <WelcomeMessage welcomeMessage={welcomeMessage["ventures_page"]}/>
                    </div>
                    {/*link to contact form*/}
                    <div className="link-contact-form">
                        <Link href="#contact-form-ventures">
                            <a title="Ventures Page"><Button ghost size="large">JETZT BEWERBEN</Button></a>
                        </Link>
                    </div>
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
                           rgba(0, 0, 0, 0.6),
                           rgba(0, 0, 0, 0.6)
                           ), url('/ventures_small.jpg'); 
             height: 30vh;
                        }
             }
            
             @media only screen and (min-width: 601px) {
             .header-img{
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.6),
                           rgba(0, 0, 0, 0.6)
                           ), url('/ventures_large.jpg'); 
                         }
             }
                               
             //center the messages on the background img
             .welcome-messages-ventures{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
             }
             @media only screen and (max-width: 600px) {
              .welcome-messages-ventures{
               height: 20vh;
              }
             }
             @media only screen and (min-width: 601px) {
              .welcome-messages-ventures{
               height: 80vh;
              }
             }
            `}</style>
        </div>

)

export default HeaderVentures