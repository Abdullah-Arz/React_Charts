import { faAdd, faAngleDown, faAngleUp, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import Group_Button from "../components/Group_Button";
import User_Detail_Comp from "../components/User_Detail_Comp";
import "../sass/style.css";
import bus from '../Assests/bus.png';
import giftbox from '../Assests/giftbox.png';
import lighter from '../Assests/lighter.png';
import table from '../Assests/table.png';
import database from '../Assests/database.png';
import electriccar from '../Assests/electriccar.png';
import printer from '../Assests/printer.png';
import shop from '../Assests/shop.png';
import skyline from '../Assests/skyline.png';
import bug from '../Assests/bug.png';
import heart from '../Assests/heart.png';
import megaphone from '../Assests/megaphone.png';

function MainScreen() {
  const line_chart_data = {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 4],
      },
     
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      },
      yaxis: [
        {
          title: {
            text: "Website Blog",
          },
        },
        {
          opposite: true,
          title: {
            text: "Social Media",
          },
        },
      ],
    },
  };
  const radial_chart_data = {
    series: [75],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Percent"],
    },
  };
  const column_chart = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  const line_chart_data_dataset = {
          
    series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
    
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
          '10 Jan', '11 Jan', '12 Jan'
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
    },
  
  
 
}
  const area_chart_dataset = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };
  const income_chart_dataset = {
    series: [58],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },

          dataLabels: {
            show: true,
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "16px",
              show: true,
              offsetY: -10,
            },
          },
        },
      },

      stroke: {
        lineCap: "round",
      },
      labels: [""],
    },
  };
  const income_chart_dataset1 = {
    series: [62],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },

          dataLabels: {
            show: true,
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "16px",
              show: true,
              offsetY: -10,
            },
          },
        },
      },

      fill: {
        colors:'#d92550',
    
      },
      stroke: {
        lineCap: "round",
      },
      labels: [""],
    },
  };
  const income_chart_dataset2 = {
    series: [72],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },

          dataLabels: {
            show: true,
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "16px",
              show: true,
              offsetY: -10,
            },
          },
        },
      },

      fill: {
        colors:'#f7b924',
    
      },
      stroke: {
        lineCap: "round",
      },
      labels: [""],
    },
  };
  const income_chart_dataset3 = {
    series: [81],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "40%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },

          dataLabels: {
            show: true,
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "16px",
              show: true,
              offsetY: -10,
            },
          },
        },
      },

      fill: {
        colors:'#3ac47d',
    
      },
      stroke: {
        lineCap: "round",
      },
      labels: [""],
    },
  };
  return (
    <div className="app">
      <div className="container">
        <div className="row mb-5 mt-5 pt-5 pb-5">
          <div className="col-md-3">
            <div className="card primary_card_boder">
              <div className="card-body pb-0">
                <h4 className="card-title card_percent_header">NEW ACCOUNTS</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                        className="color_green"
                        icon={faAngleUp}
                      />
                      &nbsp;&nbsp;234 %
                    </h1>
                  </div>
                  <div className="col-md-5">
                    <Chart
                      options={income_chart_dataset.options}
                      series={income_chart_dataset.series}
                      type="radialBar"
                      width="140"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card secondary_card_boder">
              <div className="card-body pb-0">
                <h4 className="card-title card_percent_header">TOTAL EXPENSES</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                        className="secondary_color"
                        icon={faAngleDown}
                      />
                      &nbsp;&nbsp;71 %
                    </h1>
                  </div>
                  <div className="col-md-5">
                    <Chart
                      options={income_chart_dataset1.options}
                      series={income_chart_dataset1.series}
                      type="radialBar"
                      width="140"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card yellow_card_boder">
              <div className="card-body pb-0">
                <h4 className="card-title card_percent_header">COMPANY VALUE</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                        className="yellow_color"
                        icon={faDollarSign}
                      />
                      &nbsp;&nbsp;1,45M
                    </h1>
                  </div>
                  <div className="col-md-5">
                    <Chart
                      options={income_chart_dataset2.options}
                      series={income_chart_dataset2.series}
                      type="radialBar"
                      width="140"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card green_card_boder">
              <div className="card-body pb-0">
                <h4 className="card-title card_percent_header">NEW EMPLOYEES</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                        className="green_color"
                        icon={faAdd}
                      />
                      &nbsp;&nbsp;34 M
                    </h1>
                  </div>
                  <div className="col-md-5">
                    <Chart
                      options={income_chart_dataset3.options}
                      series={income_chart_dataset3.series}
                      type="radialBar"
                      width="140"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-white "><h4 className="card-title text-capitalize card_percent_header">Traffic Sources</h4></div>
              <div className="card-body">
              <Chart
              options={line_chart_data.options}
              series={line_chart_data.series}
              type="line"
              width="800"
              height="465"
            />
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
          <div className="card-header bg-white "><h4 className="card-title text-capitalize card_percent_header">Income</h4></div>
              <div className="card-body">
              <Chart
              options={radial_chart_data.options}
              series={radial_chart_data.series}
              type="radialBar"
              width="400"
              className="mt-5"
            />
<div className="d-flex mb-4 mt-4">
                <span className="progress-percent-text text-warning">32%</span>
                <div className="progress w-75 mt-3 h-8">
              <div className="progress-bar bg-warning" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="700"></div>
                </div>
                </div>
                <h4 className="card-title card_percent_header h6">Spendings Target</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5 pt-5  ">
        <div className="col-md-3">
            <div className="card ">
              <div className="card-body pb-1">
                <h4 className="card-title card_percent_header">Income</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                       className="text-secondary"
                        icon={faDollarSign}
                      />
                      &nbsp;&nbsp;<span className="text-secondary">5,456</span>
                    </h1>
                  </div>
                  <div className="col-md-5">
                  <span className="text-success pl-2 card-right-text">+14%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card ">
              <div className="card-body pb-1">
                <h4 className="card-title card_percent_header">Expenses</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                        className="text-secondary"
                        icon={faDollarSign}
                      />
                      &nbsp;&nbsp;<span className="secondary_color">4,764</span>
                    </h1>
                  </div>
                  <div className="col-md-5">
                  <span className="text-success pl-2 card-right-text"> <FontAwesomeIcon
                       className="text-success"
                       icon={faAngleUp}
                     /><span className="secondary_color">&nbsp; 8%</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card ">
              <div className="card-body pb-1">
                <h4 className="card-title card_percent_header">Spendings</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                       className="text-success"
                        icon={faAngleDown}
                      />&nbsp;&nbsp;
                       <FontAwesomeIcon
                       className="text-secondary fs-8"
                       icon={faDollarSign}
                     />
                      &nbsp;<span className="text-secondary" >1.5M</span>
                    </h1>
                  </div>
                  <div className="col-md-5">
                  <span className="text-success pl-2 card-right-text"> <FontAwesomeIcon
                       
                       icon={faAngleDown}
                     /><span className="secondary_color">&nbsp; 15%</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          <div className="card ">
              <div className="card-body pb-1">
                <h4 className="card-title card_percent_header">Totals</h4>
                <div className="row">
                  <div className="col-md-7">
                    <h1 className="card_percent_style">
                      {" "}
                      <FontAwesomeIcon
                       className="text-secondary"
                        icon={faDollarSign}
                      />
                      &nbsp;&nbsp;<span className="text-secondary">31,564</span>
                    </h1>
                  </div>
                  <div className="col-md-5">
                  <span className="yellow_color pl-2 card-right-text">+76%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5 pt-2  ">
        <h5 className="text-secondary mb-5">Target Section</h5>
        <div className="col-md-3">
            <div className="card ">
              <div className="card-body pb-1">
                <div className="d-flex mb-4">
                <span className="progress-percent-text secondary_color">71%</span>
                <div className="progress w-75 mt-3 h-8">
              <div className="progress-bar bg-danger" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="700"></div>
                </div>
                </div>
                <h4 className="card-title card_percent_header">Income Target</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body pb-1">
                <div className="d-flex mb-4">
                <span className="progress-percent-text text-success">54%</span>
                <div className="progress w-75 mt-3 h-8">
              <div className="progress-bar bg-success" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="700"></div>
                </div>
                </div>
                <h4 className="card-title card_percent_header">Expenses Target</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body pb-1"> 
                <div className="d-flex mb-4">
                <span className="progress-percent-text text-warning">71%</span>
                <div className="progress w-75 mt-3 h-8">
              <div className="progress-bar bg-warning" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="700"></div>
                </div>
                </div>
                <h4 className="card-title card_percent_header">Spendings Target</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body pb-1">
                <div className="d-flex mb-4">
                <span className="progress-percent-text text-primary">89%</span>
                <div className="progress w-75 mt-3 h-8">
              <div className="progress-bar bg-primary" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="700"></div>
                </div>
                </div>
                <h4 className="card-title card_percent_header">Totals Target</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <div className="card">
              
              <div className="card-header bg-white "><h4 className="card-title text-capitalize card_percent_header">Total Sales</h4></div>
              <div className="card-body">
              <Chart
              options={column_chart.options}
              series={column_chart.series}
              type="bar"
            />
            <Group_Button btn1='Accounts' btn2='Contacts' btn3='Products' btn4='Services' icon1={electriccar} icon2={giftbox} icon3={lighter} icon4={table} />
              </div>
          </div>
            
          </div>
          <div className="col-md-4">
          <div className="card">
              
              <div className="card-header bg-white "><h4 className="card-title text-capitalize card_percent_header">Daily Sales</h4></div>
              <div className="card-body">
              <Chart
              options={line_chart_data_dataset.options}
              series={line_chart_data_dataset.series}
              type="line"
            />
            <Group_Button btn1='Overview' btn2='Support' btn3='Activities' btn4='Marketing' icon1={skyline} icon2={database} icon3={printer} icon4={shop} />
              </div>
          </div>
          
          </div>
          <div className="col-md-4">
          <div className="card">  
              <div className="card-header bg-white "><h4 className="card-title text-capitalize card_percent_header">Total Expenses</h4></div>
              <div className="card-body">
              <Chart
              options={area_chart_dataset.options}
              series={area_chart_dataset.series}
              type="area"
            />
            <Group_Button btn1='Accounts' btn2='Contacts' btn3='Products' btn4='Services' icon1={lighter} icon2={table} icon3={bus} icon4={giftbox} />
              </div>
          </div>
          </div>
        </div>
    
        <div className="row mt-4">
          <div className="col-md-12">
          <div className="card">
              
              <div className="card-header bg-white "><h4 className="card-title text-capitalize card_percent_header">Company Agents Status</h4></div>
              <div className="card-body">
              <User_Detail_Comp />
              </div>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MainScreen;
