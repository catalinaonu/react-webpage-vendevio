import React from "react";

//antd
import {Card} from 'antd';
import {Row, Col} from 'antd';

// files
import team from "./Data/team_info";

const style2 = {
    height: 300,
    width: 200,
    textAlign: 'left',
    borderRadius: '3%',
    }


const PhotoGrid = ({teamMember}) => {
    return (
        <div className="card-grid-wrapper">
            <Row justify="center">
                        <Row gutter={[16, 16]}>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Albert"].photo_business}</p>
                        <p>{teamMember = team["Albert"].name}</p>
                        <p>{teamMember = team["Albert"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Gernot"].photo_business}</p>
                        <p>{teamMember = team["Gernot"].name}</p>
                        <p>{teamMember = team["Gernot"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Moritz"].photo_business}</p>
                        <p>{teamMember = team["Moritz"].name}</p>
                        <p>{teamMember = team["Moritz"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Karina"].photo_business}</p>
                        <p>{teamMember = team["Karina"].name}</p>
                        <p>{teamMember = team["Karina"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Martin"].photo_business}</p>
                        <p>{teamMember = team["Martin"].name}</p>
                        <p>{teamMember = team["Martin"].title}</p>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>

                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Tobias"].photo_business}</p>
                        <p>{teamMember = team["Tobias"].name}</p>
                        <p>{teamMember = team["Tobias"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Ersin"].photo_business}</p>
                        <p>{teamMember = team["Ersin"].name}</p>
                        <p>{teamMember = team["Ersin"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Leo"].photo_business}</p>
                        <p>{teamMember = team["Leo"].name}</p>
                        <p>{teamMember = team["Leo"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Anna"].photo_business}</p>
                        <p>{teamMember = team["Anna"].name}</p>
                        <p>{teamMember = team["Anna"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Raphael"].photo_business}</p>
                        <p>{teamMember = team["Raphael"].name}</p>
                        <p>{teamMember = team["Raphael"].title}</p>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>

                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Dominik"].photo_business}</p>
                        <p>{teamMember = team["Dominik"].name}</p>
                        <p>{teamMember = team["Dominik"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Florian"].photo_business}</p>
                        <p>{teamMember = team["Florian"].name}</p>
                        <p>{teamMember = team["Florian"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Sebastian"].photo_business}</p>
                        <p>{teamMember = team["Sebastian"].name}</p>
                        <p>{teamMember = team["Sebastian"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Lukas"].photo_business}</p>
                        <p>{teamMember = team["Lukas"].name}</p>
                        <p>{teamMember = team["Lukas"].title}</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable style={style2}>
                        <p>{teamMember = team["Mathias"].photo_business}</p>
                        <p>{teamMember = team["Mathias"].name}</p>
                        <p>{teamMember = team["Mathias"].title}</p>
                    </Card>
                </Col>

            </Row>
            </Row>

            <style jsx>{`
           
            `}</style>
        </div>
    )
}

export default PhotoGrid