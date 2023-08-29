import { ChairTwoTone } from '@mui/icons-material';
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";
import { Container,Row,Col } from 'react-bootstrap';
import '../sass/Sales.scss';

function Sales() {


    const line_chart_data_dataset = {
          
        series: [
          {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        // options: {
        //   colors : ['#3f6ad8'],
        //   // fill: {
        //   //   type: 'gradient',
        //   //   gradient: {
        //   //     shadeIntensity: 1,
        //   //     inverseColors: false,
        //   //     opacityFrom: 1,
        //   //     opacityTo: 0.7,
        //   //     stops: [0, 90, 100]
        //   //   },
        //   // },
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
              opacityFrom: 0,
              opacityTo: 0,
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
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      // options: {
      //   colors : ['#ffc107'],
      //   // fill: {
      //   //   type: 'gradient',
      //   //   gradient: {
      //   //     shadeIntensity: 1,
      //   //     inverseColors: false,
      //   //     opacityFrom: 1,
      //   //     opacityTo: 0.7,
      //   //     stops: [0, 90, 100]
      //   //   },
      //   // },
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
        colors : ['#ffc107'],
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
            opacityFrom: 0,
            opacityTo: 0,
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
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      // options: {
      //   colors : ['#d92550'],
      //   // fill: {
      //   //   type: 'gradient',
      //   //   gradient: {
      //   //     shadeIntensity: 1,
      //   //     inverseColors: false,
      //   //     opacityFrom: 1,
      //   //     opacityTo: 0.7,
      //   //     stops: [0, 90, 100]
      //   //   },
      //   // },
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
        colors : ['#d92550'],
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
            opacityFrom: 0,
            opacityTo: 0,
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

    const line_chart_data_dataset3 = {
              
      series: [
        {
          name: 'Total Visits',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      // options: {
      //   colors : ['#20c997'],
      //   // fill: {
      //   //   type: 'gradient',
      //   //   gradient: {
      //   //     shadeIntensity: 1,
      //   //     inverseColors: false,
      //   //     opacityFrom: 1,
      //   //     opacityTo: 0.7,
      //   //     stops: [0, 90, 100]
      //   //   },
      //   // },
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
        // stroke: {
        //   width: [3, 5, 3],
        //   curve: 'straight',
        //   dashArray: [0, 8, 5]
        // },
      
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
                opacityFrom: 0,
                opacityTo: 0,
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

      
   const data = require('../Json FIles/Sales.json')
    //     series: [
    //         {
    //           name: "Net Profit",
    //           data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    //         },
    //       ],
    //         options: {
    //           chart: {
    //             type: 'area',
    //             stacked: false,
    //             height: 350,
    //             zoom: {
    //               type: 'x',
    //               enabled: true,
    //               autoScaleYaxis: true
    //             },
    //             toolbar: {
    //               autoSelected: 'zoom'
    //             }
    //           },
    //           dataLabels: {
    //             enabled: false
    //           },
    //           markers: {
    //             size: 0,
    //           },
    //           title: {
    //             text: 'Stock Price Movement',
    //             align: 'left'
    //           },
    //           fill: {
    //             type: 'gradient',
    //             gradient: {
    //               shadeIntensity: 1,
    //               inverseColors: false,
    //               opacityFrom: 0.5,
    //               opacityTo: 0,
    //               stops: [0, 90, 100]
    //             },
    //           },
    //           yaxis: {
    //             labels: {
    //               formatter: function (val) {
    //                 return (val / 1000000).toFixed(0);
    //               },
    //             },
    //             title: {
    //               text: 'Price'
    //             },
    //           },
    //           xaxis: {
    //             type: 'datetime',
    //           },
    //           tooltip: {
    //             shared: false,
    //             y: {
    //               formatter: function (val) {
    //                 return (val / 1000000).toFixed(0)
    //               }
    //             }
    //           }
    //         },
          
          
    //       };
    
  return (
    <Container className='sales-top-container'>
        <Row>
            {
                data.map((item,id)=>{
                    return(
                    id == 1 ? (
                        <Col key={id} className='sales-container2'>
                <div className='sales-div'>
                <p className='sales-div-h2'><span>$</span>{item.sales}</p>
                <p className='sales-div-p'>{item.last}</p>
                </div>
            <Chart
              options={line_chart_data_dataset.options}
              series={line_chart_data_dataset.series}
              type='area'
              height={150}
              width={200}
            />
            </Col>
                    ) : id == 2 ? (
                        <Col key={id} className='sales-container3'>
                <div className='sales-div'>
                <p className='sales-div-h2'><span>$</span>{item.sales}</p>
                <p className='sales-div-p'>{item.last}</p>
                </div>
            <Chart
              options={line_chart_data_dataset1.options}
              series={line_chart_data_dataset1.series}
              type='area'
              height={150}
              width={200}
            />
            </Col>
                    ) : id == 3 ? (
                        <Col key={id} className='sales-container4'>
                <div className='sales-div'>
                <p className='sales-div-h2'><span>$</span>{item.sales}</p>
                <p className='sales-div-p'>{item.last}</p>
                </div>
            <Chart
              options={line_chart_data_dataset2.options}
              series={line_chart_data_dataset2.series}
              type='area'
              height={150}
              width={200}
            />
            </Col>
                    ) : (
                        <Col key={id} className='sales-container'>
                <div className='sales-div'>
                <p className='sales-div-h2'><span>$</span>{item.sales}</p>
                <p className='sales-div-p'>{item.last}</p>
                </div>
            <Chart
              options={line_chart_data_dataset3.options}
              series={line_chart_data_dataset3.series}
              type='area'
              height={150}
              width={200}
            />
            </Col>
                    )
                    )
                })
            }
            
            
    </Row>
    </Container>
  )
}

export default Sales
