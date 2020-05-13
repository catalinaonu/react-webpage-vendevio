// next
import Link from "next/link";

// antd
import {PhoneOutlined, MailOutlined, HomeOutlined, HeartTwoTone} from '@ant-design/icons';
import {Row, Col, Divider} from 'antd';

const Footer = () => {
    return (
        <>
            <Divider style={{height: '2px'}}/>
            <footer className="footer-container">
                <div className="contact-section">
                    <Row justify="space-between">
                        <Col xs={{span: 8, offset: 1}} lg={{span: 5, offset: 3}}>
                            <div id="contact" className="footer-subsection">
                                <h3>Contact</h3>
                                {/*phone icon*/}
                                <Col>
                                    <div className="icons-list">
                                        <PhoneOutlined/>
                                        <span>+43 664 96 53 217 </span>
                                    </div>
                                </Col>

                                {/*mail icon*/}
                                <Col>
                                    <div className="icons-list">
                                        <MailOutlined/>
                                        <a title="Email" href="mailto: team@vendevio.com">team@vendevio.com</a>
                                    </div>
                                </Col>

                                {/*address icon*/}
                                <Col>
                                    <div className="icons-list">
                                        <HomeOutlined/>
                                        <a href="https://www.google.com/maps/place/Peter-Behrens-Platz+10,+4020+Linz/@48.3116971,14.2964308,17z/data=!3m1!4b1!4m5!3m4!1s0x47739827b6f0861d:0xe495ce0cf50bf5a3!8m2!3d48.3116936!4d14.2986195"
                                           target="_blank" title="address">Peter-Behrens-Platz 10, 4020 Linz,
                                            Österreich
                                        </a>
                                    </div>
                                </Col>
                            </div>
                        </Col>

                        {/*Important*/}
                        <Col xs={{span: 4, offset: 3}} lg={{span: 5, offset: 3}}>
                            <div id="important" className="footer-subsection">
                                <h3>Important</h3>
                                <Col>
                                    <Link href="/data_protection">
                                        <a title="Datenschutz Page" target="_blank"> Datenschutz </a>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link href="/impressum">
                                        <a title="Impressum Page" target="_blank"> Impressum </a>
                                    </Link>
                                </Col>
                            </div>
                        </Col>

                        {/*Social Media*/}
                        <Col xs={{span: 5, offset: 3}} lg={{span: 5, offset: 3}}>
                            <div id="social-media" className="footer-subsection">
                                <h3> Follow Us </h3>
                                <Row>
                                    <Col>
                                        <div className="linkedIn">
                                            <a title="LinkedIn" href="https://www.linkedin.com/company/vendevio/"
                                               target="_blank">
                                                <img
                                                    src="/LinkedIn_Logo.png"
                                                    height="30" width="30"/>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="xing">
                                            <a title="Xing" href="https://www.xing.com/companies/vendevio"
                                               target="_blank">
                                                <img
                                                    src="/XNG_Logo.png"
                                                    height="30" width="30"/>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/*rights Section*/}
                <div className="rights-section">
                    <Row justify="space-between">
                        <Col xs={{span: 11, offset: 1}} lg={{span: 8, offset: 3}}><p> @2019 All rights reserved by
                            vendevio </p></Col>
                        <Col xs={{span: 9, offset: 3}} lg={{span: 5, offset: 6}}><p> made with <HeartTwoTone
                            twoToneColor="#52c41a"/> in Austria </p></Col>
                    </Row>
                </div>
            </footer>
            <style jsx>{`
             .footer-container{
              font-size: 14px;
             }
          `}</style>
        </>
    )
}

export default Footer