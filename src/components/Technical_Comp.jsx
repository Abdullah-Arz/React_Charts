import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import '../sass/Technical_Comp.scss';
import icon from '../Assests/server.png';
import Chart_Slider_Comp from './Chart_Slider_Comp';
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';
import uparrow from '../Assests/upload.png';
import down from '../Assests/down.png';
import Progress_Bar from './Progress_Bar';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Technical_Comp = () => {

    const line_chart_data_dataset = {
          
        series: [
          {
            name: 'Total Visits',
            data: [57, 101, 754, 29, 1825, 38, 1162, 1007, 82, 56, 300, 47, 1825, 38, 1162, 1007 ,57, 101, 754, 29, 1825, 38, 1162, 1007, 82, 56, 300, 47]
          }
        ],
        // options: {
                // colors : ['#3ac47d'],
            //     grid: {
            //     show: false,
            //     borderColor: '#90A4AE',
            //     strokeDashArray: 0,
            //     padding: {
            //         top: 0,
            //         right: 0,
            //         bottom: 0,
            //         left: 0
            //     },  
            // },
        //   chart: {
        //     height: 550,
        //     type: 'area',
        //     stacked: false,
        //     zoom: {
        //       enabled: false
        //     },
        //   },
        //   dataLabels: {
        //     enabled: false
        //   },
        //   stroke: {
        //     width: [3, 5, 3],
        //     curve: 'straight',
        //     dashArray: [0, 8, 5]
        //   },
        
        //   legend: {
        //     tooltipHoverFormatter: function(val, opts) {
        //       return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        //     }
        //   },
        //   markers: {
        //     size: 0,
        //     hover: {
        //       sizeOffset: 6
        //     }
        //   },
          // xaxis: {
          //   labels: {
          //       show: false
          //   }
          // },
          // yaxis: {
          //   labels: {
          //       show: false
          //   }
          // }
        // },
        
        options : {
          colors : ['#3ac47d'],
          grid: {
            show: false,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [3, 5, 3],
          },
          markers: {
            size: 0,
          },
          // title: {
          //   text: 'Stock Price Movement',
          //   align: 'left'
          // },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 10,
              opacityTo: 10,
              stops: [0, 90, 100]
            },
          },
          xaxis: {
            labels: {
                show: false
            }
          },
          yaxis: {
            labels: {
                show: false
            }
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        }
    }

    const line_chart_data_dataset1 = {
          
        series: [
          {
            name: 'Total Visits',
            data: [187, 101, 1754, 1129, 825, 38, 62, 107, 82, 1156, 1300, 47, 187, 101, 1754, 1129,187, 101, 1754, 1129, 825, 38, 62, 107, 82, 1156, 1300, 47, 187, 101, 1754, 1129]
          }
        ],
        // options: {
        //     colors : ['#3f6ad8'],
        //     grid: {
        //         show: false,
        //         borderColor: '#90A4AE',
        //         strokeDashArray: 0,
        //         padding: {
        //             top: 0,
        //             right: 0,
        //             bottom: 0,
        //             left: 0
        //         },  
        //     },
        //   chart: {
        //     height: 350,
        //     type: 'curve',
        //     zoom: {
        //       enabled: false
        //     },
        //   },
        //   dataLabels: {
        //     enabled: false
        //   },
        //   stroke: {
        //     width: [3, 5, 3],
        //     curve: 'straight',
        //     dashArray: [0, 8, 5]
        //   },
        
        //   legend: {
        //     tooltipHoverFormatter: function(val, opts) {
        //       return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        //     }
        //   },
        //   markers: {
        //     size: 0,
        //     hover: {
        //       sizeOffset: 6
        //     }
        //   },
        //   xaxis: {
        //     labels: {
        //         show: false
        //     }
        //   },
        //   yaxis: {
        //     labels: {
        //         show: false
        //     }
        //   }
        // },

        options : {
          colors : ['#3f6ad8'],
          grid: {
            show: false,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [3, 5, 3],
          },
          markers: {
            size: 0,
          },
          // title: {
          //   text: 'Stock Price Movement',
          //   align: 'left'
          // },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 10,
              opacityTo: 10,
              stops: [0, 90, 100]
            },
          },
          xaxis: {
            labels: {
                show: false
            }
          },
          yaxis: {
            labels: {
                show: false
            }
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        }
    }

    const line_chart_data_dataset2 = {
          
        series: [
          {
            name: 'Total Visits',
            data: [87, 101, 754, 29, 825, 38, 62, 1007, 82, 56, 300, 47,187, 101, 1754, 1129, 825, 38, 62, 107, 82, 1156, 1300, 47, 187, 101, 1754, 1129]
          }
        ],
        // options: {
        //     colors : ['#f7b924'],
        //     grid: {
        //         show: false,
        //         borderColor: '#90A4AE',
        //         strokeDashArray: 0,
        //         padding: {
        //             top: 0,
        //             right: 0,
        //             bottom: 0,
        //             left: 0
        //         },  
        //     },
        //   chart: {
        //     height: 350,
        //     type: 'line',
        //     zoom: {
        //       enabled: false
        //     },
        //   },
        //   dataLabels: {
        //     enabled: false
        //   },
        //   stroke: {
        //     width: [3, 5, 3],
        //     curve: 'straight',
        //     dashArray: [0, 8, 5]
        //   },
        
        //   legend: {
        //     tooltipHoverFormatter: function(val, opts) {
        //       return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        //     }
        //   },
        //   markers: {
        //     size: 0,
        //     hover: {
        //       sizeOffset: 6
        //     }
        //   },
        //   xaxis: {
        //     labels: {
        //         show: false
        //     }
        //   },
        //   yaxis: {
        //     labels: {
        //         show: false
        //     }
        //   }
        // },

        options : {
          colors : ['#f7b924'],
          grid: {
            show: false,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [3, 5, 3],
          },
          markers: {
            size: 0,
          },
          // title: {
          //   text: 'Stock Price Movement',
          //   align: 'left'
          // },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 10,
              opacityTo: 10,
              stops: [0, 90, 100]
            },
          },
          xaxis: {
            labels: {
                show: false
            }
          },
          yaxis: {
            labels: {
                show: false
            }
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        }
    }

  return (
    <Container className='tnc-container' fluid>
        <Row>
            <Col className='tnc-col'>

                <Row className='tnc-col-row'>
                    <Col className='tnc-col-row-col'>
                    <img src={icon} className='tnc-icon' />
                    <p className='tnc-top'>Technical Support</p>
                    </Col>
                </Row>

                <Row>
                    <Carousel>
                    <Carousel.Item>
                    <div className='tnc-col-row-p1-p2'>
                    <p className='tnc-col-row-p1'>new accounts since 2022</p>
                    <div className='tnc-col-row-p1-div'>
                    <img src={uparrow} className='tnc-col-row-p1-icon1' />   
                    <p className='tnc-col-row-p2'><span className='tnc-col-row-p2-span'>17</span> %</p>
                    </div>
                    </div>
                        
                        <Chart
                        options={line_chart_data_dataset.options}
                        series={line_chart_data_dataset.series}
                        height={150}
                        width={600}
                        type='area'
                        />
                        </Carousel.Item>

                        <Carousel.Item>
                    <div className='tnc-col-row-p1-p2'>
                    <p className='tnc-col-row-p1'>Last year total sales</p>
                    <div className='tnc-col-row-p1-div'>
                      
                    <p className='tnc-col-row-p2'>$ <span className='tnc-col-row-p2-span'>17</span></p>
                    <img src={down} className='tnc-col-row-p1-icon1' /> 
                    
                    </div>
                    </div>
                        
                        <Chart
                        options={line_chart_data_dataset1.options}
                        series={line_chart_data_dataset1.series}
                        height={150}
                        width={600}
                        type='area'
                        />
                        </Carousel.Item>

                        <Carousel.Item>
                    <div className='tnc-col-row-p1-p2'>
                    <p className='tnc-col-row-p1'>helpdesk tickets</p>
                    <div className='tnc-col-row-p1-div'>
                      
                    <p className='tnc-col-row-p3'>34 <span className='tnc-col-row-p3-span'>5% increase</span></p>
                    
                    </div>
                    </div>
                        
                        <Chart
                        options={line_chart_data_dataset2.options}
                        series={line_chart_data_dataset2.series}
                        height={150}
                        width={600}
                        type='area'
                        />
                        </Carousel.Item>
                    </Carousel>
                </Row>

                <Row className='tnc-col-row-1'>
                    <Col className='tnc-col-row-col-1'>
                    <div className='tnc-col-row-col-1-div'>
                    <div>
                        <p className='tnc-col-row-col-1-p'>total order</p>
                        <p className='tnc-col-row-col-1-p1'>last year expenses</p>
                    </div>
                    <div>
                        <p className='tnc-col-row-col-1-p2'>$1896</p>
                    </div>
                    </div>
                    
                    <div className='tnc-progressbar'>
                    
                    <ProgressBar animated now={45}/>
                        
                    </div>

                    <div className='tnc-col-row-col-1-div'>
                        <p className='tnc-col-row-col-1-p1'>YoY Growth</p>
                        <p className='tnc-col-row-col-1-p1'>100%</p>
                    </div>
                    
                    </Col>
                </Row>

            </Col>
        </Row>
    </Container>
  )
}

export default Technical_Comp
