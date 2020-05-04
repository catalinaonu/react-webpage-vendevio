import React from "react";

//components
import Vision from "../components/Vision"

//files
import vision from "./Data/vision_list";

//antd
import {Row, Col} from 'antd'

const VisionVentures = () => (
    <div className="card-wrapper-vision">
        <Row gutter={[16, 16]} justify="center">
            <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                <Vision visionMessage={vision["ventures"]["technologiepartner"]}/>
            </Col>
            <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                <Vision visionMessage={vision["ventures"]["startup-mindset"]}/>
            </Col>
            <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                <Vision visionMessage={vision["ventures"]["flexibles_beteiligungsmodell"]}/>
            </Col>
            <Col xs={{span: 24, offset: 0}} lg={{span: 6, offset: 0}}>
                <Vision visionMessage={vision["ventures"]["gemeinsame_vision"]}/>
            </Col>
        </Row>
        <style jsx>{`
         .card-wrapper-vision {
          max-width: 100%;
          padding: 48px;
         }
       `}</style>
    </div>
)

export default VisionVentures

