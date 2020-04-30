import React from "react";

//antd
import {Button} from 'antd';

//next
import Link from "next/link";
import Head from "next/head";

// components
import Footer from "../components/Footer";
import Value from "../components/Value";
import Service from "../components/Service";
import TeamMemberJobsPage from "../components/TeamMemberJobsPage";
import ListOfJobs from "../components/ListOfJobs";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";


// files with data
import values from "../components/Data/values";
import services from "../components/Data/services_info";
import team from "../components/Data/team_info"


function Jobs() {
    return (
        <div>
            <Head>
                <title> Jobs Page </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>

            <header id="jobs-header">
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

                    {/*link to the list of jobs*/}

                    <Link href="#list-of-jobs">
                        <div className="jobs-link">
                            <a title="Jobs Page"> <Button ghost size="large">AKTUELLE STELLEN</Button></a>
                        </div>
                    </Link>
                </div>
            </header>


            {/* values/divider*/}
            <section className="values-section">
                <Value value={values["job"]["chance"]}/>
            </section>

            {/*services*/}
            <section className="services-section">
                <Service service={services["jobs"]["coding"]}/>
                <Service service={services["jobs"]["team-and-remote"]}/>
                <Service service={services["jobs"]["offene-unternehmeskultur"]}/>
                <Service service={services["jobs"]["gründe-neue-ventures"]}/>
            </section>

            {/* values/divider*/}
            <section className="values-section">
                <Value value={values["job"]["join-vendevio"]}/>
            </section>

            {/*List of jobs*/}
            <section className="jobs-section">
                <div id="list-of-jobs">
                    <ListOfJobs/>
                </div>
            </section>

            {/*team photo*/}
            <img src="/jobs_team.jpg"/>

            {/*map image*/}
            <img src="/map.jpg"/>

            {/*people*/}
            <section className="team-section">
                <TeamMemberJobsPage member={team["Karina"]}/>
                <TeamMemberJobsPage member={team["Leo"]}/>
                <TeamMemberJobsPage member={team["Gernot"]}/>
                <TeamMemberJobsPage member={team["Moritz"]}/>
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
                           ), url('/jobs_small.jpg'); 
             height: 30vh;
                        }
             }
            
             @media only screen and (min-width: 601px) {
             .header-img{
              background:  linear-gradient(
                           rgba(0, 0, 0, 0.4),
                           rgba(0, 0, 0, 0.4)
                           ), url('/jobs_large.jpg'); 
                         }
             }
             
             //center the link button of the header
             .jobs-link {
             display: flex;
             flex-direction: row;
             justify-content: flex-end;
             align-items: flex-end;
             align-content: flex-end;
             height: 100vh;
            }
             
             @media only screen and (max-width: 600px) {
             .jobs-link {
             padding-bottom: 24px;
             padding-right: 24px;
               }
             }
             
              @media only screen and (min-width: 601px) {
             .jobs-link {
              padding-bottom: 100px;
              padding-right: 100px;
                }
              }             
 
            `}</style>

        </div>
    )
}

export default Jobs