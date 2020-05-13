import React from "react";

//next
import Head from "next/head";
import Link from "next/link";

// components
import Footer from '../components/Footer';
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import WelcomeMessage from "../components/WelcomeMessage";

//files
import companies from "../components/Data/infoCompanies";
import welcomeMessage from "../components/Data/welcomeMessages";

//antd
import {Col, Divider, Row} from "antd";

const keys = Object.keys(companies)

function HomePage() {
    return (
        <div>
            <Head>
                <title> Home Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header>
                <div className="header-img">
                    <NavbarDesktop/>
                    <NavbarMobile/>
                    <section className="welcome-messages-homepage">
                        {/*Link to Venture Page*/}
                        <section className="welcome-message-ventures">
                            <Link href="/ventures">
                                <a title="Ventures Page"><WelcomeMessage
                                    welcomeMessage={welcomeMessage["ventures_homepage"]}/></a>
                            </Link>
                        </section>
                        {/*Link to Development Page*/}
                        <section className="welcome-message-development">
                            <Link href="/development">
                                <a title="Development Page"><WelcomeMessage
                                    welcomeMessage={welcomeMessage["development_homepage"]}/></a>
                            </Link>
                        </section>
                    </section>
                </div>
            </header>
            <Divider style={{
                fontSize: 24,
                color: 'var(--default-color)',
                marginTop: 48
            }}
            >
                Our Customers
            </Divider>
            {/*Logo of the companies*/}
            <section className="customers-homepage">
                <Row justify="center" align="middle" gutter={[32, 32]}>
                    {keys.map(key => (
                        <Col key={key} xs={{span: 9, offset: 2}} lg={{span: 4, offset: 1}}>
                            {companies[key].logo}
                        </Col>
                    ))}
                </Row>
            </section>

            <footer>
                <Footer/>
            </footer>
            <style jsx>{`
             .header-img {
              display: flex;
              flex-direction: column;
              flex-flow: flex-direction;
              max-width: 100%;
              height: 100vh;
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.6),
                           rgba(0, 0, 0, 0.6)
                           ), url('/homepage_large.jpg'); 
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
              .welcome-message-ventures :global(.description-welcome-message) {
               display: none;
             }
              .welcome-message-development :global(.description-welcome-message) {
                display: none;
               }    
             }
               //center the messages on the background img
             .welcome-messages-homepage{  
              display: flex;
              flex-direction: row;
              align-items: center;
              align-content: center;
              justify-content: space-around;
             }
              // customers section
             .customers-homepage{
              margin: 48px auto;
             }
             @media only screen and (min-width: 601px) {
              .customers-homepage{
               max-width: 60%;
             }
            }
          `}</style>
        </div>
    )
}

export default HomePage