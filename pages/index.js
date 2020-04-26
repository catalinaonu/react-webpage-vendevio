import React from "react";

//next
import Head from "next/head";

// components
import Footer from '../components/Footer';
import Logos from "../components/Logos";
import WelcomeMessage from "../components/WelcomeMessage";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";

//data files
import welcomeMessage from "../components/Data/welcome_info";

//antd
import {Divider} from 'antd';
import Link from "next/link";


function Home() {
  return (
      <div>
        <Head>
          <title> Home Page </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>

        <header id="homepage-header">
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
              <section className="welcome-message-venture">
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
          </div>
        </header>

        {/*Logo of the customers*/
        }
        <section className="customers">
          <Divider><h2>Our Customers</h2></Divider>
          <Logos/>
        </section>

        < footer>
          < div
              id="footer">
            < Footer/>
          </div>
        </footer>

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
              max-width: 80%;
              margin-left: 10%;
              margin-right: 10%;
              height: 100vh;
              display: flex;
              flex-direction: row;
              align-items: center;
              align-content: center;
              justify-content: space-around;
             }
             
             //to hide the description on mobile
             @media only screen and (max-width: 600px) {
             .welcome-messages :global(.description) {
              display: none;
                    }  
             }  
             
             .welcome-message-venture{
              text-align: center;
              }
              
             .welcome-message-development{
              text-align: center;
              }
              
             .customers{
              max-width: 100%;
              margin: 0 auto; /* will automatically align center */
              padding: 24px 0;
              }
             
             @media only screen and (max-width: 600px) {
             .customers{
             width: 80%;
                         }
             }
             
             @media only screen and (min-width: 601px) {
             .customers{
              width: 60%;
                         }
             }
                                                        
              //text color for "Our Customers"
             .customers
              h2 {
                  color: #8c8c8c;
              }
       
             `}</style>
      </div>
  )
}

export default Home