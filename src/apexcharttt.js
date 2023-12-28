import { VectorMap } from "@react-jvectormap/core";
import React, { Fragment, Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stacked_column_chart: {
        options: {
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
          },
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
      stastics_chart: {
        options: {
          chart: {
            id: "stastics-chart",
            type: "area",
            height: 80,
            sparkline: { enabled: !0 },
          },
        },
        series: [
          {
            data: [24, 66, 42, 88, 62, 24, 45, 12, 36, 10],
          },
        ],
        stroke: {
          curve: "smooth",
          width: 2,
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
            show: !1,
          },
        },
      },
      list_chart_1: {
        options: {
          fill: { colors: ["#525ce5"] },
          series: [70],
          chart: {
            type: "radialBar",
            width: 65,
            height: 65,
            sparkline: { enabled: !0 },
          },
          dataLabels: { enabled: !1 },
          plotOptions: {
            radialBar: {
              hollow: { margin: 0, size: "60%" },
              track: { margin: 0 },
              dataLabels: { show: !1 },
            },
          },
        },
      },
      list_chart_2: {
        options: {
          fill: { colors: ["#23c58f"] },
          series: [80],
          chart: {
            type: "radialBar",
            width: 65,
            height: 65,
            sparkline: { enabled: !0 },
          },
          dataLabels: { enabled: !1 },
          plotOptions: {
            radialBar: {
              hollow: { margin: 0, size: "60%" },
              track: { margin: 0 },
              dataLabels: { show: !1 },
            },
          },
        },
      }
    };
  }

  renderStackedColumnChart() {
    return (
      <Chart
        options={this.state.stacked_column_chart.options}
        series={this.state.stacked_column_chart.series}
        type={this.state.stacked_column_chart.options.chart.type}
        height={this.state.stacked_column_chart.options.chart.height}
      />
    );
  }

  renderStatisticsChart() {
    return (
      <Chart
        options={this.state.stastics_chart.options}
        series={this.state.stastics_chart.series}
        type={this.state.stastics_chart.options.chart.type}
        height={this.state.stastics_chart.options.chart.height}
      />
    );
  }

  renderListChart1() {
    return (
      <Chart
        options={this.state.list_chart_1.options}
        series={this.state.list_chart_1.series}
        type={this.state.list_chart_1.options.chart.type}
        height={this.state.list_chart_1.options.chart.height}
      />
    );
  }

  renderListChart2() {
    return (
      <Chart
        options={this.state.list_chart_2.options}
        series={this.state.list_chart_2.options.series}
        type={this.state.list_chart_2.options.chart.type}
        height={this.state.list_chart_2.options.chart.height}
      />
    );
  }

  // renderWorldMapMarkers() {
  //   const markers = [
  //     { latLng: [41.9, 12.45], name: "USA" },
  //     { latLng: [12.05, -61.75], name: "Russia" },
  //     { latLng: [1.3, 103.8], name: "Australia" },
  //   ];

  //   const mapOptions = {
  //     map: "world_mill_en",
  //     normalizeFunction: "polynomial",
  //     hoverOpacity: 0.7,
  //     hoverColor: false,
  //     regionStyle: { initial: { fill: "#dde3ec" } },
  //     markerStyle: {
  //       initial: {
  //         r: 9,
  //         fill: "#525CE9",
  //         "fill-opacity": 0.9,
  //         stroke: "#fff",
  //         "stroke-width": 7,
  //         "stroke-opacity": 0.4,
  //       },
  //       hover: { stroke: "#fff", "fill-opacity": 1, "stroke-width": 1.5 },
  //     },
  //     backgroundColor: "transparent",
  //     markers: markers,
  //   };

  //   return <VectorMap {...mapOptions} />;
  // }

  render() {
    return (
      <Fragment>
        {this.props.chartType === "stackedColumn" &&
          this.renderStackedColumnChart()}
        {this.props.chartType === "statistics" && this.renderStatisticsChart()}
        {this.props.chartType === "listChart1" && this.renderListChart1()}
        {this.props.chartType === "listChart2" && this.renderListChart2()}
        {/* {this.props.chartType === "worldMapMarkers" && this.renderWorldMapMarkers()} */}
      </Fragment>
    );
  }
}

export default ApexChart;
