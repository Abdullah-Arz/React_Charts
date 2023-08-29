import React from 'react'
import ChatBox_Comp from '../components/ChatBox_Comp'
import Last_Comp from '../components/Last_Comp'
import Portfolio_Performance from '../components/Portfolio_Performance'
import Sales from '../components/Sales'
import Table_Comp from '../components/Table_Comp'
import Table from '../components/Table_Comp'
import Task_Chat from '../components/Task_Chat'
import TechTime_Comp from '../components/TechTime_Comp'
import User_Detail_Comp from '../components/User_Detail_Comp'

const Analytics = () => {
  return (
    <div>
      <br />
      <Portfolio_Performance />
      <br />
      <TechTime_Comp />
      <br />
      {/* <User_Detail_Comp /> */}
      <Sales />
      <br />
      <Table_Comp />
      <br />
      <Task_Chat />
      {/* <ChatBox_Comp /> */}
      <br />
      <Last_Comp />
      <br />
    </div>
  )
}

export default Analytics
