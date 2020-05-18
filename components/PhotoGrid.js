import React from "react";

//antd
import {Card} from 'antd';
import {Row, Col} from 'antd';

// files
import team from "./Data/infoTeam";

const style = {
    height: 300,
    width: 200,
    textAlign: 'left',
    borderRadius: '3%',
}

const PhotoGrid = ({teamMember}) => {
    return (
        <div className="card-grid-wrapper">
            <Row gutter={[16, 16]} justify="center" align="middle">

                    <Col xs={{ span: 11, offset: 1 }} lg={{ span:4, offset: 1 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Albert"].photo_business}</p>
                            <p><strong>{teamMember = team["Albert"].name}</strong></p>
                            <p>{teamMember = team["Albert"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Gernot"].photo_business}</p>
                            <p><strong>{teamMember = team["Gernot"].name}</strong></p>
                            <p>{teamMember = team["Gernot"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Moritz"].photo_business}</p>
                            <p><strong>{teamMember = team["Moritz"].name}</strong></p>
                            <p>{teamMember = team["Moritz"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Karina"].photo_business}</p>
                            <p><strong>{teamMember = team["Karina"].name}</strong></p>
                            <p>{teamMember = team["Karina"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Martin"].photo_business}</p>
                            <p><strong>{teamMember = team["Martin"].name}</strong></p>
                            <p>{teamMember = team["Martin"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 1 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Tobias"].photo_business}</p>
                            <p><strong>{teamMember = team["Tobias"].name}</strong></p>
                            <p>{teamMember = team["Tobias"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Ersin"].photo_business}</p>
                            <p><strong>{teamMember = team["Ersin"].name}</strong></p>
                            <p>{teamMember = team["Ersin"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Leo"].photo_business}</p>
                            <p><strong>{teamMember = team["Leo"].name}</strong></p>
                            <p>{teamMember = team["Leo"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Anna"].photo_business}</p>
                            <p><strong>{teamMember = team["Anna"].name}</strong></p>
                            <p>{teamMember = team["Anna"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Raphael"].photo_business}</p>
                            <p><strong>{teamMember = team["Raphael"].name}</strong></p>
                            <p>{teamMember = team["Raphael"].title}</p>
                        </Card>
                    </Col>

                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 1 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Dominik"].photo_business}</p>
                            <p><strong>{teamMember = team["Dominik"].name}</strong></p>
                            <p>{teamMember = team["Dominik"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Florian"].photo_business}</p>
                            <p><strong>{teamMember = team["Florian"].name}</strong></p>
                            <p>{teamMember = team["Florian"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Sebastian"].photo_business}</p>
                            <p><strong>{teamMember = team["Sebastian"].name}</strong></p>
                            <p>{teamMember = team["Sebastian"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Lukas"].photo_business}</p>
                            <p><strong>{teamMember = team["Lukas"].name}</strong></p>
                            <p>{teamMember = team["Lukas"].title}</p>
                        </Card>
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <Card hoverable style={style}>
                            <p>{teamMember = team["Mathias"].photo_business}</p>
                            <p><strong>{teamMember = team["Mathias"].name}</strong></p>
                            <p>{teamMember = team["Mathias"].title}</p>
                        </Card>
                    </Col>

            </Row>
            <style jsx>{`
             @media only screen and (max-width: 601px) {  
              .card-grid-wrapper{
               display: none;
              }
             }
             @media only screen and (min-width: 600px) {  
              .card-grid-wrapper{
               max-width: 80%;
               margin: 48px auto;
              }
             }  
            `}</style>
        </div>
    )
}

export default PhotoGrid