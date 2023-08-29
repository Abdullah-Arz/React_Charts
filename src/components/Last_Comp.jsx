import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../sass/Last_Comp.scss';

function Last_Comp() {
  
    const data = require('../Json FIles/Record.json');
    const data1 = require('../Json FIles/Record1.json');

    return (
    <Container className='lc-container'>
        <Row className='lc-row'>
            {data.map((item,id)=>{
                return(
                    <Col sm={4} key={id} className='lc-col1'>
                    <div >
                    <p className='lc-col1-p'>{item.fname}</p>
                    <p className='lc-col1-p1'>{item.lname}</p>  
                    </div>  
                    {
                        item.id == 1 ? (
                            <p className='lc-col1-p2'>
                        {item.digit}
                    </p>
                        ) : item.id == 2 ? (
                            <p className='lc-col1-p3'>
                        {item.digit}
                    </p>
                        ) : (
                            <p className='lc-col1-p4'>
                        {item.digit}
                    </p>
                        )
                    }
                    </Col>
                )
            })}
            
        </Row>
        <Row className='lc-row'>
            {data1.map((item,id)=>{
                return(
                    <Col sm={4} key={id} className='lc-col2'>
                    <div >
                    <p className='lc-col1-p'>{item.fname}</p>
                    <p className='lc-col1-p1'>{item.lname}</p>  
                    </div>  
                    {
                        item.id == 1 ? (
                            <p className='lc-col1-1-p2'>
                        ${item.digit}
                    </p>
                        ) : item.id == 2 ? (
                            <p className='lc-col1-2-p3'>
                        ${item.digit}
                    </p>
                        ) : (
                            <p className='lc-col1-3-p4'>
                        ${item.digit}
                    </p>
                        )
                    }
                    </Col>
                )
            })}
            
        </Row>
    </Container>
  )
}

export default Last_Comp
