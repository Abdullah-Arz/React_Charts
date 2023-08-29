import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../sass/Timeline_Comp.scss';
import icon from '../Assests/lighter.png';
import { Button } from '@material-ui/core';
import Timeline_Points_Comp from './Timeline_Points_Comp';

const Timeline_Comp = () => {
  return (
    <Container id='time-container'>
        <Row>
            <Col className='time-col'>
                <Row className='time-col-row'>
                    <Col className='time-col-row-col'>
                    <img src={icon} className='time-icon' />
                    <p className='time-top'>Timeline Example</p>
                    </Col>
                </Row>

                <Row>
                    <Timeline_Points_Comp />
                </Row>

                <Row className='time-col-row-1'>
                    <Col className='time-col-row-col-1'>
                        <Button id='timeline-button'>view all messages</Button>
                        <span className='timeline-dot' />

                        {/* <Button id='btn-shadow btn-wide btn-pill btn btn-focus'>
                        <span className='badge badge-dot badge-dot-lg badge-warning badge-pulse'></span>
                        view all messages
                        </Button> */}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Timeline_Comp
