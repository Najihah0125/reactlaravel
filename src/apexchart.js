
// import ApexCharts from "apexcharts";
import { React, Fragment, Component } from "react";
import Charts from "apexcharts";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stacked_column_chart: {
        options:{
            chart: {
                id: "stacked-column-chart",
                height: 380,
                type: "bar",
                stacked: !0,
                toolbar: { show: !1 },
                zoom: { enabled: !0 },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            }
        },        
        plotOptions: {
            bar: { horizontal: !1, columnWidth: "20%", endingShape: "rounded" },
        },
        dataLabels: { enabled: !0 },
        series: [
            { name: "Earning", data: [5, 7, 7, 6, 7, 5, 7, 6, 7, 4, 6, 7] },
            { name: "Paid", data: [5, 6, 4, 5, 6, 4, 3, 5, 4, 6, 4, 3] },
        ],        
        colors: ["#525ce5", "#edf1f5"],
        legend: { show: !1 },
        fill: { opacity: 1 },
      },
    //   statistic chart
      stastics_chart: {
        options: {
          chart: { 
            id: "stastics-chart",
            type: "area", 
            height: 80, 
            sparkline: { enabled: !0 } 
         }
        },
        series: [
            { 
                data: [24, 66, 42, 88, 62, 24, 45, 12, 36, 10] 
            }
        ],
        stroke: { 
            curve: "smooth", 
            width: 2 
        },
        colors: ["#525ce5"],
        tooltip: {
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "";
                },
              },
            },
            marker: { 
                show: !1 
            },
        },
        },
      };
    }
  
  render() {
    return (
      <Fragment>
    
        <Charts
          options={this.state.stacked_column_chart.options}
          series={this.state.stacked_column_chart.series} 
          type={this.state.stacked_column_chart.options.chart}
          height={380}
        />
        <Charts
          options={this.state.stastics_chart.options.chart}
          series={this.state.stastics_chart.series}
          type="area"
          height={80}          
        />
      </Fragment> 
    
    );
  }
}
export default App;
