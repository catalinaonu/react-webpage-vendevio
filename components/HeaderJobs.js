import React from "react";

//next
import Link from "next/link";

//components
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

//antd
import {Button} from "antd";


const HeaderJobs = () => (
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

export default HeaderJobs