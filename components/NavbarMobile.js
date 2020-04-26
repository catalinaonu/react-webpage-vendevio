import {useState} from "react";

//next
import Link from "next/link";

//antd
import {Button, Drawer} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {Divider} from 'antd';


const NavbarMobile = () => {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <div className="navbar-container-mobile">
            <div id="logo-mobile">
                <Link href="/index">
                    <h2><a title="Home Page"><img src="/vendevio-header-logo.png" width="30"
                                                  height="30"/> Vendevio </a></h2>
                </Link>
            </div>
            <div className="menu-btn">
                <Button ghost onClick={showDrawer}><MenuOutlined/></Button>
            </div>

            <Drawer
                title=""
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <div className="navigation">
                    <p><Link href="/index">
                        <a title="Home Page">Home </a>
                    </Link></p>
                    <p><Link href="/ventures">
                        <a title="Ventures Page">Ventures</a>
                    </Link></p>
                    <p><Link href="/development">
                        <a title="Development Page">Development</a>
                    </Link></p>
                    <p><Link href="/team">
                        <a title="Team Page">Team</a>
                    </Link></p>
                    <p><Link href="/jobs">
                        <a title="Jobs Page">Jobs</a>
                    </Link></p>

                    <Divider/>

                    <p><Link href="/data_protection">
                        <a title="Data protection Page">Datenscutz</a>
                    </Link></p>
                    <p><Link href="/impressum">
                        <a title="Inpressum Page">Impressum</a>
                    </Link></p>
                </div>


            </Drawer>


            <style jsx>{`
             .navbar-container-mobile{
             display: flex;
             justify-content: space-between;
             padding-left: 20px;
             }
                            
             //color for links inside the drawer
             .navigation 
             a {
             color: #8c8c8c;
             } 

              a:hover {
              opacity: 0.6;
              }
              
              //logo color
              h2,
              a {
              color: #ffffff;
              }
              
              //to appear only on mobile
             @media only screen and (min-width: 601px) {
             .navbar-container-mobile {
             display: none;
                             }
             }

            `}</style>
        </div>
    );
}

export default NavbarMobile