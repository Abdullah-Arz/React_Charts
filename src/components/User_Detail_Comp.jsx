import React,{forwardRef} from 'react'
import '../sass/User_Detail_Comp.scss';
// import {data} from '../Json FIles/User_Detail_Comp.json';
import MaterialTable from '@material-table/core';
import { useEffect } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddIcon from "@material-ui/icons/AddAlarm";
import IconButton from "@material-ui/core/IconButton";
import ProgressBar from 'react-bootstrap/ProgressBar';

function User_Detail_Comp() {
  
const tableRef = React.createRef();
const addActionRef = React.useRef();
const now = 80;
  const data = require('../Json FIles/User_Detail_Comp.json')
  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'Avatar', field: 'avatar', 
    // editable: true,
    render: (rowData) =>
        rowData && (
          <img src={rowData.avatar} label={`${rowData.avatar}`} className='img' />
        )  },
    { title: 'Name', field: 'name',
    render: (rowData) =>
    rowData && (
      <p className='udc-name-p'>{rowData.name}</p>
    ) },
    { title: 'Company', field: 'company',
    render: (rowData) =>
    rowData && (
      <p className='udc-name-p'>{rowData.company}</p>
    ) },
    { title: 'Status', field: 'status',
    // editable: true,
    render: (rowData) => 
    
    rowData.status == 'canceled' ? (
      <p className='status-p'>{rowData.status}</p>
    ) : 
    rowData.status && (
      rowData.status == 'on hold' ? (
        <p className='status-hold-p'>{rowData.status}</p>
      )  : (rowData.status == 'in progress') ? (
        <p className='status-prog-p'>{rowData.status}</p>
      ) : (
        <p className='status-comp-p'>{rowData.status}</p>
      )
      
    )
     
  },
   
    { title: 'Date', field: 'date' },
    { title: 'Target', field: 'target',
    // editable: true,
    render: (rowData) =>
        rowData && (
          <ProgressBar now={rowData.target} label={`${rowData.target}%`} />
        ) },
  ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  
  return (
    <div style={{ maxWidth: '100%' }}>
    <MaterialTable 
    columns={columns} 
    data={data} 
    icons={tableIcons}  
    options={{sorting:true}}
    title='Books Directory'

    />
  </div>
  )
}

export default User_Detail_Comp;
