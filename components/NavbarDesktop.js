import React from "react";

//next
import Link from 'next/link';

//antd
import {Row, Col} from "antd";


const NavbarDesktop = () => (
    <div className="navbar-container-desktop">
        <ul>
            <Row>
                <Col xs={{span: 11, offset: 1}} lg={{span: 7, offset: 5}}>
                    {/*Link to Homepage*/}
                    <li>
                        <Link
                            href="/index">
                            <h2><a title="Home Page">
                                <img src="/vendevio-header-logo.png" width="50"  height="50"/>
                                Vendevio
                            </a></h2>
                        </Link>
                    </li>
                </Col>

                <Col xs={{span: 11, offset: 1}} lg={{span: 10, offset: 2}}>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        {/*Link to Ventures Page*/}
                        <li>
                            <Col className="gutter-row" span={6}>
                                <Link href="/ventures">
                                    <h2><a title="Ventures Page">Ventures</a></h2>
                                </Link>
                            </Col>
                        </li>

                        {/*Link to Development Page*/}
                        <li>
                            <Col className="gutter-row" span={6}>
                                <Link href="/development">
                                    <h2><a title="Development Page">Development</a></h2>
                                </Link>
                            </Col>
                        </li>

                        {/*Link to Team Page*/}
                        <li>
                            <Col className="gutter-row" span={6}>
                                <Link href="/team">
                                    <h2><a title="Team Page">Team</a></h2>
                                </Link>
                            </Col>
                        </li>

                        {/*Link to Job Page*/}
                        <li>
                            <Col className="gutter-row" span={6}>
                                <Link href="/jobs">
                                    <h2><a title="Jobs Page">Jobs</a></h2>
                                </Link>
                            </Col>
                        </li>
                    </Row>
                </Col>
            </Row>
        </ul>

        <style jsx>{`
         .navbar-container-desktop {
            padding-top: 25px;
                     }
         ul li{
          list-style-type: none;
         }
          //text color
        .navbar-container-desktop
            h2,
            a{
              color: var(--light-color);
              font-weight: 400;
            }
        @media only screen and (max-width: 600px){
         .navbar-container-desktop{
          display: none;
         }
        }
      `}</style>
    </div>

)

export default NavbarDesktop







