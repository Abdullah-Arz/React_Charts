import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import '../sass/ChatBox_Comp.scss';
import icon from '../Assests/database.png';
import { BiCalendarCheck } from "react-icons/bi";
import TaskList_Comp from './TaskList_Comp';

const ChatBox_Comp = () => {
  return (
    <Container>
        <Row>
        <Col lg={6}>
                <TaskList_Comp />
            </Col>

            <Col lg={6} className='cc-col'>
                <Row className='cc-col-row'>
                    <Col className='cc-col-row-col'>
                    <img src={icon} className='cc-icon' />
                    <p className='cc-top'>Chat Box</p>
                    </Col>
                </Row>

                <Row className='cc-col-row-scroll-div'>
                <Row className='cc-col-row1'>
                    <Col>
                        <div className='cc-col-row1-div1'>
                        <img 
                        className='cc-col-row1-img'
                        src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg' 
                        />
                        <div className='cc-col-row1-div2'>
                            <p className='cc-col-row1-div2-p'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        </div>
                        </div>
                        <div className='cc-col-row1-div3'>
                            <BiCalendarCheck 
                            className='cc-col-row1-div3-icon'
                            />
                            <p className='cc-col-row1-div3-p'>11:01 AM | Yesterday</p>
                        </div>
                    </Col>
                </Row>
                <Row className='cc-col-row1-1'>
                    <Col>
                        <div className='cc-col-row1-div1-1'>
                        
                        <div className='cc-col-row1-div2-1'>
                            <p className='cc-col-row1-div2-p-1'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        </div>
                        <img 
                        className='cc-col-row1-img-1'
                        src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg' 
                        />

                        </div>
                        <div className='cc-col-row1-div3-1'>
                            <BiCalendarCheck 
                            className='cc-col-row1-div3-icon-1'
                            />
                            <p className='cc-col-row1-div3-p-1'>11:01 AM | Yesterday</p>
                        </div>
                    </Col>
                </Row>
                
                <div>
                <Row className='cc-col-row1'>
                    <Col>
                        <div className='cc-col-row1-div1'>
                        <img 
                        className='cc-col-row1-img'
                        src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg' 
                        />
                        <div className='cc-col-row1-div2'>
                            <p className='cc-col-row1-div2-p'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        </div>
                        </div>
                        <div className='cc-col-row1-div3'>
                            <BiCalendarCheck 
                            className='cc-col-row1-div3-icon'
                            />
                            <p className='cc-col-row1-div3-p'>11:01 AM | Yesterday</p>
                        </div>
                    </Col>
                </Row>
                <Row className='cc-col-row1-1'>
                    <Col>
                        <div className='cc-col-row1-div1-1'>
                        
                        <div className='cc-col-row1-div2-1'>
                            <p className='cc-col-row1-div2-p-1'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        </div>
                        <img 
                        className='cc-col-row1-img-1'
                        src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg' 
                        />

                        </div>
                        <div className='cc-col-row1-div3-1'>
                            <BiCalendarCheck 
                            className='cc-col-row1-div3-icon-1'
                            />
                            <p className='cc-col-row1-div3-p-1'>11:01 AM | Yesterday</p>
                        </div>
                    </Col>
                </Row>
                </div>
                <div>
                <Row className='cc-col-row1'>
                    <Col>
                        <div className='cc-col-row1-div1'>
                        <img 
                        className='cc-col-row1-img'
                        src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg' 
                        />
                        <div className='cc-col-row1-div2'>
                            <p className='cc-col-row1-div2-p'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        </div>
                        </div>
                        <div className='cc-col-row1-div3'>
                            <BiCalendarCheck 
                            className='cc-col-row1-div3-icon'
                            />
                            <p className='cc-col-row1-div3-p'>11:01 AM | Yesterday</p>
                        </div>
                    </Col>
                </Row>
                <Row className='cc-col-row1-1'>
                    <Col>
                        <div className='cc-col-row1-div1-1'>
                        
                        <div className='cc-col-row1-div2-1'>
                            <p className='cc-col-row1-div2-p-1'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                        </div>
                        <img 
                        className='cc-col-row1-img-1'
                        src='https://demo.dashboardpack.com/architectui-html-pro/assets/images/avatars/2.jpg' 
                        />

                        </div>
                        <div className='cc-col-row1-div3-1'>
                            <BiCalendarCheck 
                            className='cc-col-row1-div3-icon-1'
                            />
                            <p className='cc-col-row1-div3-p-1'>11:01 AM | Yesterday</p>
                        </div>
                    </Col>
                </Row>
                </div>
                </Row>

                <Row className='cc-col-row-1'>
                    <Col className='cc-col-row-col-1'>
                    <input 
                    placeholder='Write here and hit enter to send ...'
                    className='cc-col-row-col-1-input' />
                    </Col>
                </Row>

                
            </Col>
            
        </Row>
    </Container>
  )
}

export default ChatBox_Comp
