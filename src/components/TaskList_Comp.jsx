import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCheck, BiDotsHorizontal, BiTrash } from 'react-icons/bi';
import icon from '../Assests/printer.png';
import '../sass/TaskList_Comp.scss';
import Dropdown_Comp from './Dropdown_Comp';

const TaskList_Comp = () => {
    const data = require('../Json FIles/Task.json');
  return (
    <Container className='tlc-container'>
        <Row>
            <Col className='tlc-col'>
                <Row className='tlc-col-row'>
                    <Col className='tlc-col-row-col'>
                    <img src={icon} className='tlc-icon' />
                    <p className='tlc-top'>Task List</p>
                    </Col>
                </Row>
                <Row className='tlc-row2'>
                    {
                        data.map((item,id)=>{
                            return(
                                <Row key={id} className='tlc-row3'>
                                <Col className='tlc-row2-div1'>
                                
                                <div className='tlc-row2-div1-div'>
                                    {
                                        item.rejected == 'rejected' ? (
                                            <div className='tlc-row2-div1-border'  
                                    />
                                        ) : item.new == 'new' ? (
                                            <div className='tlc-row2-div1-border1'  
                                    />
                                        ) : item.latest == 'latest' ? (
                                            <div className='tlc-row2-div1-border2'  
                                    />
                                        )
                                        :  
                                        (
                                            <div className='tlc-row2-div1-border4' 
                                    />  
                                        ) 
                                    }

                                    <FormGroup>
                                        <FormControlLabel 
                                        control={
                                        <Checkbox 
                                        // defaultChecked 
                                        />
                                    } 
                                        />
                                    </FormGroup>

                                    <div className='tlc-row2-div2'>
                                <div className='tlc-row2-div3'>
                                <p className='tlc-row2-div1-p'>{item.title}</p>
                                {
                                    item.rejected == 'rejected' ? (
                                        <div className='tlc-row2-div3-div'>
                                            <p className='tlc-row2-div3-div-p'>{item.rejected}</p>
                                        </div>
                                    ) : item.new == 'new' ? (
                                        <div className='tlc-row2-div3-div1'>
                                    <p className='tlc-row2-div3-div-p1'>{item.new}</p>
                                </div>
                                    ) : item.latest == 'latest' ? (
                                        <div className='tlc-row2-div3-div2'>
                                    <p className='tlc-row2-div3-div-p1'>{item.latest} Task</p>
                                </div>
                                    ) : null
                                }
                                </div>
                                <p className='tlc-row2-div1-p1'>{item.description}</p>
                                </div>
                                </div>
                                
                                {
                                    item.rejected == 'rejected' ? (
                                        <div className='tlc-row2-icon-div'>
                                    <div className='tlc-row2-bicheck-icon-div'>
                                    <BiCheck className='tlc-row2-bicheck-icon'/>
                                    </div>
                                    <div className='tlc-row2-bicheck-icon-div1'>
                                    <BiTrash className='tlc-row2-bicheck-icon1'/>
                                    </div>
                                </div>
                                    ) : item.new == 'new' ? (
                                        <div className='tlc-dropdown'>
                                            <Dropdown_Comp />
                                        </div> 
                                        // <BiDotsHorizontal />
                                    ) : item.latest == 'latest' ? (
                                        <div className='tlc-row2-bicheck-icon-div2'>
                                    <BiCheck className='tlc-row2-bicheck-icon' />
                                    </div>
                                    ) : null
                                }
                                
                                
                                </Col>
                                </Row>
                            )
                        })
                    }
                </Row>
                <Row className='tlc-col-row-1'>
                    <Col className='tlc-col-row-col-1'>
                        <Button variant="text" style={{marginRight:'10px'}} >Cancel</Button>
                        
                        <Button variant="contained">Add Task</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default TaskList_Comp
