import React from "react";

//next
import Head from "next/head";

//components
import Footer from "../components/Footer";
import Service from "../components/Service";
import TeamList from "../components/TeamList";
import Value from "../components/Value";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

//files with data
import services from "../components/Data/services_info";
import values from "../components/Data/values";
import WelcomeMessage from "../components/WelcomeMessage";
import welcomeMessage from "../components/Data/welcome_info";

function Team() {
    return (
        <div>
            <Head>
                <title> Team Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="team-header">
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

                </div>
            </header>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["team"]["unsere-werte"]}/>
            </section>

            {/* services with photo and description*/}
            <section className="services-section">
                <Service service={services["team"]["coding_it_the_right_way"]}/>
                <Service service={services["team"]["love_what_you_do"]}/>
                <Service service={services["team"]["coding_it_the_right_way"]}/>
            </section>

            {/*values/divider*/}
            <section className="values-section">
                <Value value={values["team"]["unsere-helden"]}/>
            </section>

            {/*Photos of the entire team*/}
            <section className="team-section">
                <TeamList/>
            </section>

            <Footer/>

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
             
             //center the messages on the background img
             .welcome-messages{
              max-width: 50%;
              margin-left: 25%;
              margin-right: 25%;
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              align-content: center;
              justify-content: center;
             }
             
             .welcome-message-team {
              text-align: center;
              padding-bottom: 24px;
             }
             
          
         
            `}

            </style>
        </div>
    )
}

export default Team