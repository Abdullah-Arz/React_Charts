import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Technical_Comp from './Technical_Comp'
import Timeline_Comp from './Timeline_Comp'

function TechTime_Comp() {
  return (
    <Container>
        <Row>
            <Col lg={6} md={12} sx={12}>
                <Technical_Comp />
            </Col>
            <Col lg={6} md={12} sx={12} >
                <Timeline_Comp />
            </Col>
        </Row>
    </Container>
  )
}

export default TechTime_Comp
