import * as React from 'react';
import Box from '@mui/material/Box';
import { Col, Container, Row } from 'react-bootstrap';
import '../sass/Analytics.scss';
import img1 from './../Assests/responsive.png';
import img2 from './../Assests/magistrate.png';
import img3 from './../Assests/officebuilding.png';
import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import { Button } from '@material-ui/core';


const Portfolio_Performance = () => {

  const data = require('../Json FIles/Analytic.json');

  return (
    <Container className='ana-container'>
      <Row className='ana-top-row'>
        <Col>
        <p className='ana-top'>Portfolio Performance</p>
        </Col>
      </Row>
      <Row className='ana-row1'>
        {data.map((item,id)=>{
          return(
            // <Row className='ana-row1'>
            <Col key={item.id} className='ana-row2-col'>
        {
          item.id == 1 ? (
            <div className='ana-row2-div'>
          <img src={img1}  className='ana-row2-img'/>
        </div>
          ) : item.id == 2 ? (
            <div className='ana-row2-div1'>
          <img src={img2}  className='ana-row2-img1'/>
        </div> 
          ) :  <div className='ana-row2-div2'>
          <img src={img3}  className='ana-row2-img2'/>
        </div> 
        }
        <div>
          {}
        </div>
        <div>
          <p className='ana-p1'>{item.head}</p>
          {
            item.id == 3 ? <h1 className='ana-h1'>{item.price}</h1> : <h1 className='ana-h1-2'>{item.price}</h1>
          }
          <div className='ana-div'>
            <p className='ana-p1'>{item.earning}:  </p>
            {
              item.id == 1 ? (
                <>
                <BiCaretDown className='ana-icon-down' />
            <p className='ana-p2'>{item.percent}%</p>
            </>
              ) : item.id == 2 ? (
                <>
                <BiCaretDown className='ana-icon-down1' />
            <p className='ana-p3'>{item.percent}%</p>
            </>
              ) : (
                <>
                <BiCaretUp className='ana-icon-down2' />
            <p className='ana-p4'>{item.percent}%</p>
            </>
              )
            }
          </div>
        </div>
        
        </Col>
        // </Row>
          )
        })}
      </Row>
      <Row >
        <Col className='ana-bottom-row'>
        <button type="button" class="btn btn-primary btn-lg">View Complete Report</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio_Performance;