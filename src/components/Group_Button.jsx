import React from 'react'
import { Button } from '@material-ui/core'
import '../sass/Group_Button.scss';

function Group_Button({btn1,btn2,btn3,btn4,icon1,icon2,icon3,icon4}) {
  return (
    <div id='gb'>
    <div >
      <Button variant="contained">
        {btn1}
        <img src={icon1} className='gb-icons' />
        </Button>
      <Button variant="contained">
        {btn2}
        <img src={icon2} className='gb-icons' />
        </Button>
    </div>
    <div>
      <Button variant="contained">
        {btn3}
        <img src={icon3} className='gb-icons' />
        </Button>
      <Button variant="contained">
        {btn4}
        <img src={icon4} className='gb-icons' />
        </Button>
    </div>
    </div>
  )
}

export default Group_Button
