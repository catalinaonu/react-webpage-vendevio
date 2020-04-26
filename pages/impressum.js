//next
import Head from "next/head";

//antd
import {Divider} from 'antd';

//components
import Footer from "../components/Footer"
import NavbarMobile from "../components/NavbarMobile";
import NavbarDesktop from "../components/NavbarDesktop";

const Impressum = () => {
    return (
        <div>
            <Head>
                <title>Impressum Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="impressum-header">
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
                </div>
            </header>

            <section className="impressum">
                <Divider/>

            <h1>Vendevio GmbH</h1>

            <p> Schulstraße 14 <br/>
                4280 Königswiesen<br/>
                <strong>Telefon:</strong> +43 664 96 53 217<br/>
                <strong>E-Mail</strong>: hi@vendevio.com<br/>
                <strong>Firmenbuchnummer:</strong> 502701t<br/>
                <strong>Firmenbuchgericht:</strong> Landesgericht Linz<br/>
                <strong>UID:</strong> ATU73916159</p>

            <p>Mitglied der Wirtschaftskammer Wien: Unternehmensberatung, Buchhaltung und Informationstechnologie, Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik. Gewerberechtliche Vorschriften: Gewerbeordnung (www.ris.bka.gv.at)</p><br/>


            <h1>Offenlegung laut §25 Mediengesetz</h1>
                <p><strong>Medieninhaber und Herausgeber:</strong><br/>
                Vendevio GmbH<br/>
                Schulstraße 14<br/>
                4280 Königswiesen</p>

            <p><strong>Geschäftsführung:</strong><br/>
             Stefan Panholzer, Hannes Stefan Elmer</p>

            <p><strong>Eigentümer und Gesellschafter:</strong><br/>
            <a href="https://www.firmenabc.at/vendevio-gmbh_OeXT">FirmenABC.at</a></p>

            <p><strong>Unternehmensgegenstand:</strong><br/>
            Der Gegenstand des Unternehmens ist Softwareentwicklung, IT-Dienstleistung, Erbringung von Beratungsleistungen in den Bereichen Softwareentwicklung, Vermarktung und Werbung, sowie die Beteiligung an und Gründung von Unternehmen.</p>

            </section>
            <Footer/>
            <style jsx>{`
            //color of the links/navbar desktop
            .top-navbar :global(a) {
                                   color: #8c8c8c;
                                    }
             //color of the links/navbar mobile                  
            .drawer-navbar :global(a) {
                                      color: #8c8c8c;
                                      }
             
                          
            .impressum {
                       //text color
                        color: #8c8c8c;
                        //set the width for the content and center it 
                        width: 60%;
                        margin-left: 20%;
                        margin-right: 20%;
                        padding-top: 24px;
                        padding-bottom: 24px;
                         }  
            h1 {
               color: #8c8c8c;
            }  
                            
                       
                            
         //to appear only on mobile
        @media only screen and (max-width: 600px){
        .data-protection {
        width: 80%;
         margin-left: 10%;
                             margin-right: 10%;
        }
        }                                       
            
            `}</style>
        </div>
    )
}

export default Impressum