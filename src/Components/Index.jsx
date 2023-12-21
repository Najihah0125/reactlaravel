import React from "react";

export default function Content() {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* <!-- start page title --> */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Dashboard</h4>
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Morvin</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="float-end d-none d-sm-block">
                  <a href="" className="btn btn-success">
                    Add Widget
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end page title -->     */}

        <div className="container-fluid">
          <div className="page-content-wrapper">
            <div className="row">
              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4 float-sm-start">
                      Quick Summary
                    </h4>

                    <div className="float-sm-end">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Day
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Week
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Month
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="clearfix"></div>

                    <div className="row align-items-center">
                      <div className="col-xl-9">
                        <div>
                          <div
                            id="stacked-column-chart"
                            className="apex-charts"
                            dir="ltr"
                          >
                            <div
                              id="apexchartsed37aiax"
                              class="apexcharts-canvas apexchartsed37aiax apexcharts-theme-light"
                              style={{ width: "511px", height: "380px" }}
                            >
                              <svg
                                id="SvgjsSvg1601"
                                width="511"
                                height="380"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlnsSvgjs="http://svgjs.com/svgjs"
                                class="apexcharts-svg"
                                xmlnsData="ApexChartsNS"
                                transform="translate(0, 0)"
                                style={{ background: "transparent" }}
                              >
                                <g
                                  id="SvgjsG1603"
                                  class="apexcharts-inner apexcharts-graphical"
                                  transform="translate(39.109375, 30)"
                                >
                                  <defs id="SvgjsDefs1602">
                                    <linearGradient
                                      id="SvgjsLinearGradient1607"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop
                                        id="SvgjsStop1608"
                                        stop-opacity="0.4"
                                        stop-color="rgba(216,227,240,0.4)"
                                        offset="0"
                                      ></stop>
                                      <stop
                                        id="SvgjsStop1609"
                                        stop-opacity="0.5"
                                        stop-color="rgba(190,209,230,0.5)"
                                        offset="1"
                                      ></stop>
                                      <stop
                                        id="SvgjsStop1610"
                                        stop-opacity="0.5"
                                        stop-color="rgba(190,209,230,0.5)"
                                        offset="1"
                                      ></stop>
                                    </linearGradient>
                                    <clipPath id="gridRectMasked37aiax">
                                      <rect
                                        id="SvgjsRect1612"
                                        width="465.890625"
                                        height="310.73"
                                        x="-2"
                                        y="0"
                                        rx="0"
                                        ry="0"
                                        opacity="1"
                                        stroke-width="0"
                                        stroke="none"
                                        stroke-dasharray="0"
                                        fill="#fff"
                                      ></rect>
                                    </clipPath>
                                    <clipPath id="gridRectMarkerMasked37aiax">
                                      <rect
                                        id="SvgjsRect1613"
                                        width="465.890625"
                                        height="314.73"
                                        x="-2"
                                        y="-2"
                                        rx="0"
                                        ry="0"
                                        opacity="1"
                                        stroke-width="0"
                                        stroke="none"
                                        stroke-dasharray="0"
                                        fill="#fff"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                  <rect
                                    id="SvgjsRect1611"
                                    width="7.6981770833333325"
                                    height="310.73"
                                    x="0"
                                    y="0"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke-dasharray="3"
                                    fill="url(#SvgjsLinearGradient1607)"
                                    class="apexcharts-xcrosshairs"
                                    y2="310.73"
                                    filter="none"
                                    fill-opacity="0.9"
                                  ></rect>
                                  <g
                                    id="SvgjsG1739"
                                    class="apexcharts-xaxis"
                                    transform="translate(0, 0)"
                                  >
                                    <g
                                      id="SvgjsG1740"
                                      class="apexcharts-xaxis-texts-g"
                                      transform="translate(0, -4)"
                                    >
                                      <text
                                        id="SvgjsText1742"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="19.245442708333332"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1743">Jan</tspan>
                                        <title>Jan</title>
                                      </text>
                                      <text
                                        id="SvgjsText1745"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="57.736328125"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1746">Feb</tspan>
                                        <title>Feb</title>
                                      </text>
                                      <text
                                        id="SvgjsText1748"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="96.22721354166667"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1749">Mar</tspan>
                                        <title>Mar</title>
                                      </text>
                                      <text
                                        id="SvgjsText1751"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="134.71809895833331"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1752">Apr</tspan>
                                        <title>Apr</title>
                                      </text>
                                      <text
                                        id="SvgjsText1754"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="173.20898437499997"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1755">May</tspan>
                                        <title>May</title>
                                      </text>
                                      <text
                                        id="SvgjsText1757"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="211.69986979166663"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1758">Jun</tspan>
                                        <title>Jun</title>
                                      </text>
                                      <text
                                        id="SvgjsText1760"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="250.1907552083333"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1761">Jul</tspan>
                                        <title>Jul</title>
                                      </text>
                                      <text
                                        id="SvgjsText1763"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="288.681640625"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1764">Aug</tspan>
                                        <title>Aug</title>
                                      </text>
                                      <text
                                        id="SvgjsText1766"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="327.1725260416667"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1767">Sep</tspan>
                                        <title>Sep</title>
                                      </text>
                                      <text
                                        id="SvgjsText1769"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="365.66341145833337"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1770">Oct</tspan>
                                        <title>Oct</title>
                                      </text>
                                      <text
                                        id="SvgjsText1772"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="404.15429687500006"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1773">Nov</tspan>
                                        <title>Nov</title>
                                      </text>
                                      <text
                                        id="SvgjsText1775"
                                        font-family="Helvetica, Arial, sans-serif"
                                        x="442.64518229166674"
                                        y="339.73"
                                        text-anchor="middle"
                                        dominant-baseline="auto"
                                        font-size="12px"
                                        font-weight="400"
                                        fill="#373d3f"
                                        class="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily:
                                            "Helvetica, Arial, sans-serif",
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1776">Dec</tspan>
                                        <title>Dec</title>
                                      </text>
                                    </g>
                                    <line
                                      id="SvgjsLine1777"
                                      x1="0"
                                      y1="311.73"
                                      x2="461.890625"
                                      y2="311.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      stroke-width="1"
                                    ></line>
                                  </g>
                                  <g id="SvgjsG1792" class="apexcharts-grid">
                                    <g
                                      id="SvgjsG1793"
                                      class="apexcharts-gridlines-horizontal"
                                    >
                                      <line
                                        id="SvgjsLine1808"
                                        x1="0"
                                        y1="0"
                                        x2="461.890625"
                                        y2="0"
                                        stroke="#e0e0e0"
                                        stroke-dasharray="0"
                                        class="apexcharts-gridline"
                                      ></line>
                                      <line
                                        id="SvgjsLine1809"
                                        x1="0"
                                        y1="62.146"
                                        x2="461.890625"
                                        y2="62.146"
                                        stroke="#e0e0e0"
                                        stroke-dasharray="0"
                                        class="apexcharts-gridline"
                                      ></line>
                                      <line
                                        id="SvgjsLine1810"
                                        x1="0"
                                        y1="124.292"
                                        x2="461.890625"
                                        y2="124.292"
                                        stroke="#e0e0e0"
                                        stroke-dasharray="0"
                                        class="apexcharts-gridline"
                                      ></line>
                                      <line
                                        id="SvgjsLine1811"
                                        x1="0"
                                        y1="186.438"
                                        x2="461.890625"
                                        y2="186.438"
                                        stroke="#e0e0e0"
                                        stroke-dasharray="0"
                                        class="apexcharts-gridline"
                                      ></line>
                                      <line
                                        id="SvgjsLine1812"
                                        x1="0"
                                        y1="248.584"
                                        x2="461.890625"
                                        y2="248.584"
                                        stroke="#e0e0e0"
                                        stroke-dasharray="0"
                                        class="apexcharts-gridline"
                                      ></line>
                                      <line
                                        id="SvgjsLine1813"
                                        x1="0"
                                        y1="310.73"
                                        x2="461.890625"
                                        y2="310.73"
                                        stroke="#e0e0e0"
                                        stroke-dasharray="0"
                                        class="apexcharts-gridline"
                                      ></line>
                                    </g>
                                    <g
                                      id="SvgjsG1794"
                                      class="apexcharts-gridlines-vertical"
                                    ></g>
                                    <line
                                      id="SvgjsLine1795"
                                      x1="0"
                                      y1="311.73"
                                      x2="0"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1796"
                                      x1="38.490885416666664"
                                      y1="311.73"
                                      x2="38.490885416666664"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1797"
                                      x1="76.98177083333333"
                                      y1="311.73"
                                      x2="76.98177083333333"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1798"
                                      x1="115.47265625"
                                      y1="311.73"
                                      x2="115.47265625"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1799"
                                      x1="153.96354166666666"
                                      y1="311.73"
                                      x2="153.96354166666666"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1800"
                                      x1="192.45442708333331"
                                      y1="311.73"
                                      x2="192.45442708333331"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1801"
                                      x1="230.94531249999997"
                                      y1="311.73"
                                      x2="230.94531249999997"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1802"
                                      x1="269.43619791666663"
                                      y1="311.73"
                                      x2="269.43619791666663"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1803"
                                      x1="307.9270833333333"
                                      y1="311.73"
                                      x2="307.9270833333333"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1804"
                                      x1="346.41796875"
                                      y1="311.73"
                                      x2="346.41796875"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1805"
                                      x1="384.9088541666667"
                                      y1="311.73"
                                      x2="384.9088541666667"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1806"
                                      x1="423.39973958333337"
                                      y1="311.73"
                                      x2="423.39973958333337"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1807"
                                      x1="461.89062500000006"
                                      y1="311.73"
                                      x2="461.89062500000006"
                                      y2="317.73"
                                      stroke="#e0e0e0"
                                      stroke-dasharray="0"
                                      class="apexcharts-xaxis-tick"
                                    ></line>
                                    <line
                                      id="SvgjsLine1815"
                                      x1="0"
                                      y1="310.73"
                                      x2="461.890625"
                                      y2="310.73"
                                      stroke="transparent"
                                      stroke-dasharray="0"
                                    ></line>
                                    <line
                                      id="SvgjsLine1814"
                                      x1="0"
                                      y1="1"
                                      x2="0"
                                      y2="310.73"
                                      stroke="transparent"
                                      stroke-dasharray="0"
                                    ></line>
                                  </g>
                                  <g
                                    id="SvgjsG1614"
                                    class="apexcharts-bar-series apexcharts-plot-series"
                                  >
                                    <g
                                      id="SvgjsG1615"
                                      class="apexcharts-series"
                                      seriesName="Earning"
                                      rel="1"
                                      dataRealIndex="0"
                                    >
                                      <path
                                        id="SvgjsPath1617"
                                        d="M 15.396354166666665 310.73L 15.396354166666665 209.0778776041667Q 19.245442708333332 205.22878906250003 23.094531249999996 209.0778776041667L 23.094531249999996 209.0778776041667L 23.094531249999996 310.73L 23.094531249999996 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 15.396354166666665 310.73L 15.396354166666665 209.0778776041667Q 19.245442708333332 205.22878906250003 23.094531249999996 209.0778776041667L 23.094531249999996 209.0778776041667L 23.094531249999996 310.73L 23.094531249999996 310.73z"
                                        pathFrom="M 15.396354166666665 310.73L 15.396354166666665 310.73L 23.094531249999996 310.73L 23.094531249999996 310.73L 23.094531249999996 310.73L 15.396354166666665 310.73"
                                        cy="207.15333333333336"
                                        cx="53.887239583333326"
                                        j="0"
                                        val="5"
                                        barHeight="103.57666666666667"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1622"
                                        d="M 53.887239583333326 310.73L 53.887239583333326 167.6472109375Q 57.73632812499999 163.79812239583333 61.58541666666666 167.6472109375L 61.58541666666666 167.6472109375L 61.58541666666666 310.73L 61.58541666666666 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 53.887239583333326 310.73L 53.887239583333326 167.6472109375Q 57.73632812499999 163.79812239583333 61.58541666666666 167.6472109375L 61.58541666666666 167.6472109375L 61.58541666666666 310.73L 61.58541666666666 310.73z"
                                        pathFrom="M 53.887239583333326 310.73L 53.887239583333326 310.73L 61.58541666666666 310.73L 61.58541666666666 310.73L 61.58541666666666 310.73L 53.887239583333326 310.73"
                                        cy="165.72266666666667"
                                        cx="92.37812499999998"
                                        j="1"
                                        val="7"
                                        barHeight="145.00733333333335"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1627"
                                        d="M 92.37812499999998 310.73L 92.37812499999998 167.6472109375Q 96.22721354166664 163.79812239583333 100.07630208333332 167.6472109375L 100.07630208333332 167.6472109375L 100.07630208333332 310.73L 100.07630208333332 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 92.37812499999998 310.73L 92.37812499999998 167.6472109375Q 96.22721354166664 163.79812239583333 100.07630208333332 167.6472109375L 100.07630208333332 167.6472109375L 100.07630208333332 310.73L 100.07630208333332 310.73z"
                                        pathFrom="M 92.37812499999998 310.73L 92.37812499999998 310.73L 100.07630208333332 310.73L 100.07630208333332 310.73L 100.07630208333332 310.73L 92.37812499999998 310.73"
                                        cy="165.72266666666667"
                                        cx="130.86901041666664"
                                        j="2"
                                        val="7"
                                        barHeight="145.00733333333335"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1632"
                                        d="M 130.86901041666664 310.73L 130.86901041666664 188.36254427083335Q 134.71809895833331 184.51345572916668 138.56718749999996 188.36254427083335L 138.56718749999996 188.36254427083335L 138.56718749999996 310.73L 138.56718749999996 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 130.86901041666664 310.73L 130.86901041666664 188.36254427083335Q 134.71809895833331 184.51345572916668 138.56718749999996 188.36254427083335L 138.56718749999996 188.36254427083335L 138.56718749999996 310.73L 138.56718749999996 310.73z"
                                        pathFrom="M 130.86901041666664 310.73L 130.86901041666664 310.73L 138.56718749999996 310.73L 138.56718749999996 310.73L 138.56718749999996 310.73L 130.86901041666664 310.73"
                                        cy="186.43800000000002"
                                        cx="169.3598958333333"
                                        j="3"
                                        val="6"
                                        barHeight="124.292"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1637"
                                        d="M 169.3598958333333 310.73L 169.3598958333333 167.6472109375Q 173.20898437499997 163.79812239583333 177.05807291666662 167.6472109375L 177.05807291666662 167.6472109375L 177.05807291666662 310.73L 177.05807291666662 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 169.3598958333333 310.73L 169.3598958333333 167.6472109375Q 173.20898437499997 163.79812239583333 177.05807291666662 167.6472109375L 177.05807291666662 167.6472109375L 177.05807291666662 310.73L 177.05807291666662 310.73z"
                                        pathFrom="M 169.3598958333333 310.73L 169.3598958333333 310.73L 177.05807291666662 310.73L 177.05807291666662 310.73L 177.05807291666662 310.73L 169.3598958333333 310.73"
                                        cy="165.72266666666667"
                                        cx="207.85078124999995"
                                        j="4"
                                        val="7"
                                        barHeight="145.00733333333335"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1642"
                                        d="M 207.85078124999995 310.73L 207.85078124999995 209.0778776041667Q 211.69986979166663 205.22878906250003 215.54895833333327 209.0778776041667L 215.54895833333327 209.0778776041667L 215.54895833333327 310.73L 215.54895833333327 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 207.85078124999995 310.73L 207.85078124999995 209.0778776041667Q 211.69986979166663 205.22878906250003 215.54895833333327 209.0778776041667L 215.54895833333327 209.0778776041667L 215.54895833333327 310.73L 215.54895833333327 310.73z"
                                        pathFrom="M 207.85078124999995 310.73L 207.85078124999995 310.73L 215.54895833333327 310.73L 215.54895833333327 310.73L 215.54895833333327 310.73L 207.85078124999995 310.73"
                                        cy="207.15333333333336"
                                        cx="246.3416666666666"
                                        j="5"
                                        val="5"
                                        barHeight="103.57666666666667"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1647"
                                        d="M 246.3416666666666 310.73L 246.3416666666666 167.6472109375Q 250.1907552083333 163.79812239583333 254.03984374999993 167.6472109375L 254.03984374999993 167.6472109375L 254.03984374999993 310.73L 254.03984374999993 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 246.3416666666666 310.73L 246.3416666666666 167.6472109375Q 250.1907552083333 163.79812239583333 254.03984374999993 167.6472109375L 254.03984374999993 167.6472109375L 254.03984374999993 310.73L 254.03984374999993 310.73z"
                                        pathFrom="M 246.3416666666666 310.73L 246.3416666666666 310.73L 254.03984374999993 310.73L 254.03984374999993 310.73L 254.03984374999993 310.73L 246.3416666666666 310.73"
                                        cy="165.72266666666667"
                                        cx="284.83255208333327"
                                        j="6"
                                        val="7"
                                        barHeight="145.00733333333335"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1652"
                                        d="M 284.83255208333327 310.73L 284.83255208333327 188.36254427083335Q 288.68164062499994 184.51345572916668 292.5307291666666 188.36254427083335L 292.5307291666666 188.36254427083335L 292.5307291666666 310.73L 292.5307291666666 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 284.83255208333327 310.73L 284.83255208333327 188.36254427083335Q 288.68164062499994 184.51345572916668 292.5307291666666 188.36254427083335L 292.5307291666666 188.36254427083335L 292.5307291666666 310.73L 292.5307291666666 310.73z"
                                        pathFrom="M 284.83255208333327 310.73L 284.83255208333327 310.73L 292.5307291666666 310.73L 292.5307291666666 310.73L 292.5307291666666 310.73L 284.83255208333327 310.73"
                                        cy="186.43800000000002"
                                        cx="323.32343749999995"
                                        j="7"
                                        val="6"
                                        barHeight="124.292"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1657"
                                        d="M 323.32343749999995 310.73L 323.32343749999995 167.6472109375Q 327.17252604166663 163.79812239583333 331.0216145833333 167.6472109375L 331.0216145833333 167.6472109375L 331.0216145833333 310.73L 331.0216145833333 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 323.32343749999995 310.73L 323.32343749999995 167.6472109375Q 327.17252604166663 163.79812239583333 331.0216145833333 167.6472109375L 331.0216145833333 167.6472109375L 331.0216145833333 310.73L 331.0216145833333 310.73z"
                                        pathFrom="M 323.32343749999995 310.73L 323.32343749999995 310.73L 331.0216145833333 310.73L 331.0216145833333 310.73L 331.0216145833333 310.73L 323.32343749999995 310.73"
                                        cy="165.72266666666667"
                                        cx="361.81432291666664"
                                        j="8"
                                        val="7"
                                        barHeight="145.00733333333335"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1662"
                                        d="M 361.81432291666664 310.73L 361.81432291666664 229.79321093750002Q 365.6634114583333 225.94412239583335 369.5125 229.79321093750002L 369.5125 229.79321093750002L 369.5125 310.73L 369.5125 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 361.81432291666664 310.73L 361.81432291666664 229.79321093750002Q 365.6634114583333 225.94412239583335 369.5125 229.79321093750002L 369.5125 229.79321093750002L 369.5125 310.73L 369.5125 310.73z"
                                        pathFrom="M 361.81432291666664 310.73L 361.81432291666664 310.73L 369.5125 310.73L 369.5125 310.73L 369.5125 310.73L 361.81432291666664 310.73"
                                        cy="227.86866666666668"
                                        cx="400.3052083333333"
                                        j="9"
                                        val="4"
                                        barHeight="82.86133333333333"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1667"
                                        d="M 400.3052083333333 310.73L 400.3052083333333 188.36254427083335Q 404.154296875 184.51345572916668 408.0033854166667 188.36254427083335L 408.0033854166667 188.36254427083335L 408.0033854166667 310.73L 408.0033854166667 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 400.3052083333333 310.73L 400.3052083333333 188.36254427083335Q 404.154296875 184.51345572916668 408.0033854166667 188.36254427083335L 408.0033854166667 188.36254427083335L 408.0033854166667 310.73L 408.0033854166667 310.73z"
                                        pathFrom="M 400.3052083333333 310.73L 400.3052083333333 310.73L 408.0033854166667 310.73L 408.0033854166667 310.73L 408.0033854166667 310.73L 400.3052083333333 310.73"
                                        cy="186.43800000000002"
                                        cx="438.79609375"
                                        j="10"
                                        val="6"
                                        barHeight="124.292"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1672"
                                        d="M 438.79609375 310.73L 438.79609375 167.6472109375Q 442.6451822916667 163.79812239583333 446.49427083333336 167.6472109375L 446.49427083333336 167.6472109375L 446.49427083333336 310.73L 446.49427083333336 310.73z"
                                        fill="rgba(82,92,229,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="0"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 438.79609375 310.73L 438.79609375 167.6472109375Q 442.6451822916667 163.79812239583333 446.49427083333336 167.6472109375L 446.49427083333336 167.6472109375L 446.49427083333336 310.73L 446.49427083333336 310.73z"
                                        pathFrom="M 438.79609375 310.73L 438.79609375 310.73L 446.49427083333336 310.73L 446.49427083333336 310.73L 446.49427083333336 310.73L 438.79609375 310.73"
                                        cy="165.72266666666667"
                                        cx="477.2869791666667"
                                        j="11"
                                        val="7"
                                        barHeight="145.00733333333335"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                    </g>
                                    <g
                                      id="SvgjsG1677"
                                      class="apexcharts-series"
                                      seriesName="Paid"
                                      rel="2"
                                      dataRealIndex="1"
                                    >
                                      <path
                                        id="SvgjsPath1679"
                                        d="M 15.396354166666665 207.15333333333336L 15.396354166666665 105.50121093750003Q 19.245442708333332 101.65212239583337 23.094531249999996 105.50121093750003L 23.094531249999996 105.50121093750003L 23.094531249999996 207.15333333333336L 23.094531249999996 207.15333333333336z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 15.396354166666665 207.15333333333336L 15.396354166666665 105.50121093750003Q 19.245442708333332 101.65212239583337 23.094531249999996 105.50121093750003L 23.094531249999996 105.50121093750003L 23.094531249999996 207.15333333333336L 23.094531249999996 207.15333333333336z"
                                        pathFrom="M 15.396354166666665 207.15333333333336L 15.396354166666665 207.15333333333336L 23.094531249999996 207.15333333333336L 23.094531249999996 207.15333333333336L 23.094531249999996 207.15333333333336L 15.396354166666665 207.15333333333336"
                                        cy="103.5766666666667"
                                        cx="53.887239583333326"
                                        j="0"
                                        val="5"
                                        barHeight="103.57666666666667"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1684"
                                        d="M 53.887239583333326 165.72266666666667L 53.887239583333326 43.3552109375Q 57.73632812499999 39.50612239583333 61.58541666666666 43.3552109375L 61.58541666666666 43.3552109375L 61.58541666666666 165.72266666666667L 61.58541666666666 165.72266666666667z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 53.887239583333326 165.72266666666667L 53.887239583333326 43.3552109375Q 57.73632812499999 39.50612239583333 61.58541666666666 43.3552109375L 61.58541666666666 43.3552109375L 61.58541666666666 165.72266666666667L 61.58541666666666 165.72266666666667z"
                                        pathFrom="M 53.887239583333326 165.72266666666667L 53.887239583333326 165.72266666666667L 61.58541666666666 165.72266666666667L 61.58541666666666 165.72266666666667L 61.58541666666666 165.72266666666667L 53.887239583333326 165.72266666666667"
                                        cy="41.43066666666667"
                                        cx="92.37812499999998"
                                        j="1"
                                        val="6"
                                        barHeight="124.292"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1689"
                                        d="M 92.37812499999998 165.72266666666667L 92.37812499999998 84.78587760416667Q 96.22721354166664 80.93678906250001 100.07630208333332 84.78587760416667L 100.07630208333332 84.78587760416667L 100.07630208333332 165.72266666666667L 100.07630208333332 165.72266666666667z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 92.37812499999998 165.72266666666667L 92.37812499999998 84.78587760416667Q 96.22721354166664 80.93678906250001 100.07630208333332 84.78587760416667L 100.07630208333332 84.78587760416667L 100.07630208333332 165.72266666666667L 100.07630208333332 165.72266666666667z"
                                        pathFrom="M 92.37812499999998 165.72266666666667L 92.37812499999998 165.72266666666667L 100.07630208333332 165.72266666666667L 100.07630208333332 165.72266666666667L 100.07630208333332 165.72266666666667L 92.37812499999998 165.72266666666667"
                                        cy="82.86133333333333"
                                        cx="130.86901041666664"
                                        j="2"
                                        val="4"
                                        barHeight="82.86133333333333"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1694"
                                        d="M 130.86901041666664 186.43800000000002L 130.86901041666664 84.78587760416669Q 134.71809895833331 80.93678906250003 138.56718749999996 84.78587760416669L 138.56718749999996 84.78587760416669L 138.56718749999996 186.43800000000002L 138.56718749999996 186.43800000000002z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 130.86901041666664 186.43800000000002L 130.86901041666664 84.78587760416669Q 134.71809895833331 80.93678906250003 138.56718749999996 84.78587760416669L 138.56718749999996 84.78587760416669L 138.56718749999996 186.43800000000002L 138.56718749999996 186.43800000000002z"
                                        pathFrom="M 130.86901041666664 186.43800000000002L 130.86901041666664 186.43800000000002L 138.56718749999996 186.43800000000002L 138.56718749999996 186.43800000000002L 138.56718749999996 186.43800000000002L 130.86901041666664 186.43800000000002"
                                        cy="82.86133333333335"
                                        cx="169.3598958333333"
                                        j="3"
                                        val="5"
                                        barHeight="103.57666666666667"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1699"
                                        d="M 169.3598958333333 165.72266666666667L 169.3598958333333 43.3552109375Q 173.20898437499997 39.50612239583333 177.05807291666662 43.3552109375L 177.05807291666662 43.3552109375L 177.05807291666662 165.72266666666667L 177.05807291666662 165.72266666666667z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 169.3598958333333 165.72266666666667L 169.3598958333333 43.3552109375Q 173.20898437499997 39.50612239583333 177.05807291666662 43.3552109375L 177.05807291666662 43.3552109375L 177.05807291666662 165.72266666666667L 177.05807291666662 165.72266666666667z"
                                        pathFrom="M 169.3598958333333 165.72266666666667L 169.3598958333333 165.72266666666667L 177.05807291666662 165.72266666666667L 177.05807291666662 165.72266666666667L 177.05807291666662 165.72266666666667L 169.3598958333333 165.72266666666667"
                                        cy="41.43066666666667"
                                        cx="207.85078124999995"
                                        j="4"
                                        val="6"
                                        barHeight="124.292"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1704"
                                        d="M 207.85078124999995 207.15333333333336L 207.85078124999995 126.21654427083337Q 211.69986979166663 122.3674557291667 215.54895833333327 126.21654427083337L 215.54895833333327 126.21654427083337L 215.54895833333327 207.15333333333336L 215.54895833333327 207.15333333333336z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 207.85078124999995 207.15333333333336L 207.85078124999995 126.21654427083337Q 211.69986979166663 122.3674557291667 215.54895833333327 126.21654427083337L 215.54895833333327 126.21654427083337L 215.54895833333327 207.15333333333336L 215.54895833333327 207.15333333333336z"
                                        pathFrom="M 207.85078124999995 207.15333333333336L 207.85078124999995 207.15333333333336L 215.54895833333327 207.15333333333336L 215.54895833333327 207.15333333333336L 215.54895833333327 207.15333333333336L 207.85078124999995 207.15333333333336"
                                        cy="124.29200000000003"
                                        cx="246.3416666666666"
                                        j="5"
                                        val="4"
                                        barHeight="82.86133333333333"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1709"
                                        d="M 246.3416666666666 165.72266666666667L 246.3416666666666 105.5012109375Q 250.1907552083333 101.65212239583335 254.03984374999993 105.5012109375L 254.03984374999993 105.5012109375L 254.03984374999993 165.72266666666667L 254.03984374999993 165.72266666666667z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 246.3416666666666 165.72266666666667L 246.3416666666666 105.5012109375Q 250.1907552083333 101.65212239583335 254.03984374999993 105.5012109375L 254.03984374999993 105.5012109375L 254.03984374999993 165.72266666666667L 254.03984374999993 165.72266666666667z"
                                        pathFrom="M 246.3416666666666 165.72266666666667L 246.3416666666666 165.72266666666667L 254.03984374999993 165.72266666666667L 254.03984374999993 165.72266666666667L 254.03984374999993 165.72266666666667L 246.3416666666666 165.72266666666667"
                                        cy="103.57666666666667"
                                        cx="284.83255208333327"
                                        j="6"
                                        val="3"
                                        barHeight="62.146"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1714"
                                        d="M 284.83255208333327 186.43800000000002L 284.83255208333327 84.78587760416669Q 288.68164062499994 80.93678906250003 292.5307291666666 84.78587760416669L 292.5307291666666 84.78587760416669L 292.5307291666666 186.43800000000002L 292.5307291666666 186.43800000000002z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 284.83255208333327 186.43800000000002L 284.83255208333327 84.78587760416669Q 288.68164062499994 80.93678906250003 292.5307291666666 84.78587760416669L 292.5307291666666 84.78587760416669L 292.5307291666666 186.43800000000002L 292.5307291666666 186.43800000000002z"
                                        pathFrom="M 284.83255208333327 186.43800000000002L 284.83255208333327 186.43800000000002L 292.5307291666666 186.43800000000002L 292.5307291666666 186.43800000000002L 292.5307291666666 186.43800000000002L 284.83255208333327 186.43800000000002"
                                        cy="82.86133333333335"
                                        cx="323.32343749999995"
                                        j="7"
                                        val="5"
                                        barHeight="103.57666666666667"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1719"
                                        d="M 323.32343749999995 165.72266666666667L 323.32343749999995 84.78587760416667Q 327.17252604166663 80.93678906250001 331.0216145833333 84.78587760416667L 331.0216145833333 84.78587760416667L 331.0216145833333 165.72266666666667L 331.0216145833333 165.72266666666667z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 323.32343749999995 165.72266666666667L 323.32343749999995 84.78587760416667Q 327.17252604166663 80.93678906250001 331.0216145833333 84.78587760416667L 331.0216145833333 84.78587760416667L 331.0216145833333 165.72266666666667L 331.0216145833333 165.72266666666667z"
                                        pathFrom="M 323.32343749999995 165.72266666666667L 323.32343749999995 165.72266666666667L 331.0216145833333 165.72266666666667L 331.0216145833333 165.72266666666667L 331.0216145833333 165.72266666666667L 323.32343749999995 165.72266666666667"
                                        cy="82.86133333333333"
                                        cx="361.81432291666664"
                                        j="8"
                                        val="4"
                                        barHeight="82.86133333333333"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1724"
                                        d="M 361.81432291666664 227.86866666666668L 361.81432291666664 105.50121093750002Q 365.6634114583333 101.65212239583336 369.5125 105.50121093750002L 369.5125 105.50121093750002L 369.5125 227.86866666666668L 369.5125 227.86866666666668z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 361.81432291666664 227.86866666666668L 361.81432291666664 105.50121093750002Q 365.6634114583333 101.65212239583336 369.5125 105.50121093750002L 369.5125 105.50121093750002L 369.5125 227.86866666666668L 369.5125 227.86866666666668z"
                                        pathFrom="M 361.81432291666664 227.86866666666668L 361.81432291666664 227.86866666666668L 369.5125 227.86866666666668L 369.5125 227.86866666666668L 369.5125 227.86866666666668L 361.81432291666664 227.86866666666668"
                                        cy="103.57666666666668"
                                        cx="400.3052083333333"
                                        j="9"
                                        val="6"
                                        barHeight="124.292"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1729"
                                        d="M 400.3052083333333 186.43800000000002L 400.3052083333333 105.50121093750002Q 404.154296875 101.65212239583336 408.0033854166667 105.50121093750002L 408.0033854166667 105.50121093750002L 408.0033854166667 186.43800000000002L 408.0033854166667 186.43800000000002z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 400.3052083333333 186.43800000000002L 400.3052083333333 105.50121093750002Q 404.154296875 101.65212239583336 408.0033854166667 105.50121093750002L 408.0033854166667 105.50121093750002L 408.0033854166667 186.43800000000002L 408.0033854166667 186.43800000000002z"
                                        pathFrom="M 400.3052083333333 186.43800000000002L 400.3052083333333 186.43800000000002L 408.0033854166667 186.43800000000002L 408.0033854166667 186.43800000000002L 408.0033854166667 186.43800000000002L 400.3052083333333 186.43800000000002"
                                        cy="103.57666666666668"
                                        cx="438.79609375"
                                        j="10"
                                        val="4"
                                        barHeight="82.86133333333333"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                      <path
                                        id="SvgjsPath1734"
                                        d="M 438.79609375 165.72266666666667L 438.79609375 105.5012109375Q 442.6451822916667 101.65212239583335 446.49427083333336 105.5012109375L 446.49427083333336 105.5012109375L 446.49427083333336 165.72266666666667L 446.49427083333336 165.72266666666667z"
                                        fill="rgba(237,241,245,1)"
                                        fill-opacity="1"
                                        stroke-opacity="1"
                                        stroke-linecap="square"
                                        stroke-width="0"
                                        stroke-dasharray="0"
                                        class="apexcharts-bar-area"
                                        index="1"
                                        clip-path="url(#gridRectMasked37aiax)"
                                        pathTo="M 438.79609375 165.72266666666667L 438.79609375 105.5012109375Q 442.6451822916667 101.65212239583335 446.49427083333336 105.5012109375L 446.49427083333336 105.5012109375L 446.49427083333336 165.72266666666667L 446.49427083333336 165.72266666666667z"
                                        pathFrom="M 438.79609375 165.72266666666667L 438.79609375 165.72266666666667L 446.49427083333336 165.72266666666667L 446.49427083333336 165.72266666666667L 446.49427083333336 165.72266666666667L 438.79609375 165.72266666666667"
                                        cy="103.57666666666667"
                                        cx="477.2869791666667"
                                        j="11"
                                        val="3"
                                        barHeight="62.146"
                                        barWidth="7.6981770833333325"
                                      ></path>
                                    </g>
                                    <g
                                      id="SvgjsG1616"
                                      class="apexcharts-datalabels"
                                      dataRealIndex="0"
                                    >
                                      <g
                                        id="SvgjsG1619"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1621"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="19.24544270833333"
                                          y="266.4416666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="19.24544270833333"
                                          cy="266.4416666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          5
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1624"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1626"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="57.736328124999986"
                                          y="245.72633333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="57.736328124999986"
                                          cy="245.72633333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          7
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1629"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1631"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="96.22721354166664"
                                          y="245.72633333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="96.22721354166664"
                                          cy="245.72633333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          7
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1634"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1636"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="134.71809895833331"
                                          y="256.084"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="134.71809895833331"
                                          cy="256.084"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          6
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1639"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1641"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="173.20898437499997"
                                          y="245.72633333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="173.20898437499997"
                                          cy="245.72633333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          7
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1644"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1646"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="211.69986979166663"
                                          y="266.4416666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="211.69986979166663"
                                          cy="266.4416666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          5
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1649"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1651"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="250.1907552083333"
                                          y="245.72633333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="250.1907552083333"
                                          cy="245.72633333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          7
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1654"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1656"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="288.68164062499994"
                                          y="256.084"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="288.68164062499994"
                                          cy="256.084"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          6
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1659"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1661"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="327.17252604166663"
                                          y="245.72633333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="327.17252604166663"
                                          cy="245.72633333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          7
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1664"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1666"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="365.6634114583333"
                                          y="276.7993333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="365.6634114583333"
                                          cy="276.7993333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          4
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1669"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1671"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="404.154296875"
                                          y="256.084"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="404.154296875"
                                          cy="256.084"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          6
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1674"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1676"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="442.6451822916667"
                                          y="245.72633333333334"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="442.6451822916667"
                                          cy="245.72633333333334"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          7
                                        </text>
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1678"
                                      class="apexcharts-datalabels"
                                      dataRealIndex="1"
                                    >
                                      <g
                                        id="SvgjsG1681"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1683"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="19.24544270833333"
                                          y="162.86500000000004"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="19.24544270833333"
                                          cy="162.86500000000004"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          5
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1686"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1688"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="57.736328124999986"
                                          y="111.07666666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="57.736328124999986"
                                          cy="111.07666666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          6
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1691"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1693"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="96.22721354166664"
                                          y="131.792"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="96.22721354166664"
                                          cy="131.792"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          4
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1696"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1698"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="134.71809895833331"
                                          y="142.1496666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="134.71809895833331"
                                          cy="142.1496666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          5
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1701"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1703"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="173.20898437499997"
                                          y="111.07666666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="173.20898437499997"
                                          cy="111.07666666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          6
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1706"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1708"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="211.69986979166663"
                                          y="173.2226666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="211.69986979166663"
                                          cy="173.2226666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          4
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1711"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1713"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="250.1907552083333"
                                          y="142.14966666666666"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="250.1907552083333"
                                          cy="142.14966666666666"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          3
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1716"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1718"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="288.68164062499994"
                                          y="142.1496666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="288.68164062499994"
                                          cy="142.1496666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          5
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1721"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1723"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="327.17252604166663"
                                          y="131.792"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="327.17252604166663"
                                          cy="131.792"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          4
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1726"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1728"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="365.6634114583333"
                                          y="173.22266666666667"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="365.6634114583333"
                                          cy="173.22266666666667"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          6
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1731"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1733"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="404.154296875"
                                          y="152.50733333333335"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="404.154296875"
                                          cy="152.50733333333335"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          4
                                        </text>
                                      </g>
                                      <g
                                        id="SvgjsG1736"
                                        class="apexcharts-data-labels"
                                        transform="rotate(0)"
                                      >
                                        <text
                                          id="SvgjsText1738"
                                          font-family="Helvetica, Arial, sans-serif"
                                          x="442.6451822916667"
                                          y="142.14966666666666"
                                          text-anchor="middle"
                                          dominant-baseline="auto"
                                          font-size="12px"
                                          font-weight="600"
                                          fill="#ffffff"
                                          class="apexcharts-datalabel"
                                          cx="442.6451822916667"
                                          cy="142.14966666666666"
                                          style={{
                                            fontFamily:
                                              "Helvetica, Arial, sans-serif",
                                          }}
                                        >
                                          3
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                  <line
                                    id="SvgjsLine1816"
                                    x1="0"
                                    y1="0"
                                    x2="461.890625"
                                    y2="0"
                                    stroke="#b6b6b6"
                                    stroke-dasharray="0"
                                    stroke-width="1"
                                    class="apexcharts-ycrosshairs"
                                  ></line>
                                  <line
                                    id="SvgjsLine1817"
                                    x1="0"
                                    y1="0"
                                    x2="461.890625"
                                    y2="0"
                                    stroke-dasharray="0"
                                    stroke-width="0"
                                    class="apexcharts-ycrosshairs-hidden"
                                  ></line>
                                  <g
                                    id="SvgjsG1818"
                                    class="apexcharts-yaxis-annotations"
                                  ></g>
                                  <g
                                    id="SvgjsG1819"
                                    class="apexcharts-xaxis-annotations"
                                  ></g>
                                  <g
                                    id="SvgjsG1820"
                                    class="apexcharts-point-annotations"
                                  ></g>
                                </g>
                                <g
                                  id="SvgjsG1778"
                                  class="apexcharts-yaxis"
                                  rel="0"
                                  transform="translate(9.109375, 0)"
                                >
                                  <g
                                    id="SvgjsG1779"
                                    class="apexcharts-yaxis-texts-g"
                                  >
                                    <text
                                      id="SvgjsText1780"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="20"
                                      y="31.5"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="11px"
                                      font-weight="400"
                                      fill="#373d3f"
                                      class="apexcharts-text apexcharts-yaxis-label "
                                      style={{
                                        fontFamily:
                                          "Helvetica, Arial, sans-serif",
                                      }}
                                    >
                                      <tspan id="SvgjsTspan1781">15</tspan>
                                    </text>
                                    <text
                                      id="SvgjsText1782"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="20"
                                      y="93.646"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="11px"
                                      font-weight="400"
                                      fill="#373d3f"
                                      class="apexcharts-text apexcharts-yaxis-label "
                                      style={{
                                        fontFamily:
                                          "Helvetica, Arial, sans-serif",
                                      }}
                                    >
                                      <tspan id="SvgjsTspan1783">12</tspan>
                                    </text>
                                    <text
                                      id="SvgjsText1784"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="20"
                                      y="155.792"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="11px"
                                      font-weight="400"
                                      fill="#373d3f"
                                      class="apexcharts-text apexcharts-yaxis-label "
                                      style={{
                                        fontFamily:
                                          "Helvetica, Arial, sans-serif",
                                      }}
                                    >
                                      <tspan id="SvgjsTspan1785">9</tspan>
                                    </text>
                                    <text
                                      id="SvgjsText1786"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="20"
                                      y="217.938"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="11px"
                                      font-weight="400"
                                      fill="#373d3f"
                                      class="apexcharts-text apexcharts-yaxis-label "
                                      style={{
                                        fontFamily:
                                          "Helvetica, Arial, sans-serif",
                                      }}
                                    >
                                      <tspan id="SvgjsTspan1787">6</tspan>
                                    </text>
                                    <text
                                      id="SvgjsText1788"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="20"
                                      y="280.084"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="11px"
                                      font-weight="400"
                                      fill="#373d3f"
                                      class="apexcharts-text apexcharts-yaxis-label "
                                      style={{
                                        fontFamily:
                                          "Helvetica, Arial, sans-serif",
                                      }}
                                    >
                                      <tspan id="SvgjsTspan1789">3</tspan>
                                    </text>
                                    <text
                                      id="SvgjsText1790"
                                      font-family="Helvetica, Arial, sans-serif"
                                      x="20"
                                      y="342.23"
                                      text-anchor="end"
                                      dominant-baseline="auto"
                                      font-size="11px"
                                      font-weight="400"
                                      fill="#373d3f"
                                      class="apexcharts-text apexcharts-yaxis-label "
                                      style={{
                                        fontFamily:
                                          "Helvetica, Arial, sans-serif",
                                      }}
                                    >
                                      <tspan id="SvgjsTspan1791">0</tspan>
                                    </text>
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG1604"
                                  class="apexcharts-annotations"
                                ></g>
                              </svg>
                              <div
                                class="apexcharts-legend"
                                style={{ maxHeight: "190px" }}
                              ></div>
                              <div class="apexcharts-tooltip apexcharts-theme-light">
                                <div
                                  class="apexcharts-tooltip-title"
                                  style={{
                                    fontFamily:
                                      "Helvetica, Arial, sans-serif; font-size: 12px",
                                  }}
                                ></div>
                                <div
                                  class="apexcharts-tooltip-series-group"
                                  style={{ order: 1 }}
                                >
                                  <span
                                    class="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(82, 92, 229)",
                                    }}
                                  ></span>
                                  <div
                                    class="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: "12px",
                                    }}
                                  >
                                    <div class="apexcharts-tooltip-y-group">
                                      <span class="apexcharts-tooltip-text-label"></span>
                                      <span class="apexcharts-tooltip-text-value"></span>
                                    </div>
                                    <div class="apexcharts-tooltip-z-group">
                                      <span class="apexcharts-tooltip-text-z-label"></span>
                                      <span class="apexcharts-tooltip-text-z-value"></span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="apexcharts-tooltip-series-group"
                                  style={{ order: "2" }}
                                >
                                  <span
                                    class="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(237, 241, 245)",
                                    }}
                                  ></span>
                                  <div
                                    class="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: "12px",
                                    }}
                                  >
                                    <div class="apexcharts-tooltip-y-group">
                                      <span class="apexcharts-tooltip-text-label"></span>
                                      <span class="apexcharts-tooltip-text-value"></span>
                                    </div>
                                    <div class="apexcharts-tooltip-z-group">
                                      <span class="apexcharts-tooltip-text-z-label"></span>
                                      <span class="apexcharts-tooltip-text-z-value"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div class="apexcharts-yaxistooltip-text"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3">
                        <div className="dash-info-widget mt-4 mt-lg-0 py-4 px-3 rounded">
                          <div className="media dash-main-border pb-2 mt-2">
                            <div className="avatar-sm mb-3 mt-2">
                              <span className="avatar-title rounded-circle bg-white shadow">
                                <i className="mdi mdi-currency-inr text-primary font-size-18"></i>
                              </span>
                            </div>
                            <div className="media-body ps-3">
                              <h4 className="font-size-20">$2354</h4>
                              <p className="text-muted">
                                Earning{" "}
                                <a href="#" className="text-primary">
                                  Withdraw{" "}
                                  <i className="mdi mdi-arrow-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          <div className="media mt-4 dash-main-border pb-2">
                            <div className="avatar-sm mb-3 mt-2">
                              <span className="avatar-title rounded-circle bg-white shadow">
                                <i className="mdi mdi-credit-card-outline text-primary font-size-18"></i>
                              </span>
                            </div>
                            <div className="media-body ps-3">
                              <h4 className="font-size-20">$1598</h4>
                              <p className="text-muted">
                                To Paid{" "}
                                <a href="#" className="text-primary">
                                  Pay <i className="mdi mdi-arrow-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          <div className="media mt-4">
                            <div className="avatar-sm mb-2 mt-2">
                              <span className="avatar-title rounded-circle bg-white shadow">
                                <i className="mdi mdi-eye-outline text-primary font-size-18"></i>
                              </span>
                            </div>
                            <div className="media-body ps-3">
                              <h4 className="font-size-20">1230</h4>
                              <p className="text-muted mb-0">
                                To Online{" "}
                                <a href="#" className="text-primary">
                                  View <i className="mdi mdi-arrow-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <p className="font-size-16">Orders</p>
                          <div className="mini-stat-icon mx-auto mb-4 mt-3">
                            <span className="avatar-title rounded-circle bg-soft-primary">
                              <i className="mdi mdi-cart-outline text-primary font-size-20"></i>
                            </span>
                          </div>
                          <h5 className="font-size-22">58</h5>

                          <p className="text-muted">70% Target</p>

                          <div
                            className="progress mt-3"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="70"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <p className="font-size-16">Users</p>
                          <div className="mini-stat-icon mx-auto mb-4 mt-3">
                            <span className="avatar-title rounded-circle bg-soft-success">
                              <i className="mdi mdi-account-outline text-success font-size-20"></i>
                            </span>
                          </div>
                          <h5 className="font-size-22">136</h5>

                          <p className="text-muted">80% Target</p>

                          <div
                            className="progress mt-3"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="80"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Revenue Stastics</h4>

                    <div className="media">
                      <h4>$14,235 </h4>

                      <div className="media-body ps-3">
                        <div className="dropdown">
                          <button
                            className="btn btn-light btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Today<i className="mdi mdi-chevron-down ms-1"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Yesterday
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              last Month
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div id="stastics-chart">
                        <div
                          id="apexchartsblnhvn43"
                          class="apexcharts-canvas apexchartsblnhvn43 apexcharts-theme-light"
                          style={{width: '729px', height: '80px'}}
                        >
                          <svg
                            id="SvgjsSvg3652"
                            width="729"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnsSvgjs="http://svgjs.com/svgjs"
                            class="apexcharts-svg"
                            xmlnsData="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{background: 'transparent'}}
                          >
                            <g
                              id="SvgjsG3654"
                              class="apexcharts-inner apexcharts-graphical"
                              transform="translate(0, 0)"
                            >
                              <defs id="SvgjsDefs3653">
                                <clipPath id="gridRectMaskblnhvn43">
                                  <rect
                                    id="SvgjsRect3659"
                                    width="735"
                                    height="82"
                                    x="-3"
                                    y="-1"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                                <clipPath id="gridRectMarkerMaskblnhvn43">
                                  <rect
                                    id="SvgjsRect3660"
                                    width="733"
                                    height="84"
                                    x="-2"
                                    y="-2"
                                    rx="0"
                                    ry="0"
                                    opacity="1"
                                    stroke-width="0"
                                    stroke="none"
                                    stroke-dasharray="0"
                                    fill="#fff"
                                  ></rect>
                                </clipPath>
                                <linearGradient
                                  id="SvgjsLinearGradient3665"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    id="SvgjsStop3666"
                                    stop-opacity="0.65"
                                    stop-color="rgba(82,92,229,0.65)"
                                    offset="0"
                                  ></stop>
                                  <stop
                                    id="SvgjsStop3667"
                                    stop-opacity="0.5"
                                    stop-color="rgba(169,174,242,0.5)"
                                    offset="1"
                                  ></stop>
                                  <stop
                                    id="SvgjsStop3668"
                                    stop-opacity="0.5"
                                    stop-color="rgba(169,174,242,0.5)"
                                    offset="1"
                                  ></stop>
                                </linearGradient>
                              </defs>
                              <line
                                id="SvgjsLine3658"
                                x1="566.5"
                                y1="0"
                                x2="566.5"
                                y2="80"
                                stroke="#b6b6b6"
                                stroke-dasharray="3"
                                class="apexcharts-xcrosshairs"
                                x="566.5"
                                y="0"
                                width="1"
                                height="80"
                                fill="#b1b9c4"
                                filter="none"
                                fill-opacity="0.9"
                                stroke-width="1"
                              ></line>
                              <g
                                id="SvgjsG3671"
                                class="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG3672"
                                  class="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                ></g>
                              </g>
                              <g id="SvgjsG3674" class="apexcharts-grid">
                                <g
                                  id="SvgjsG3675"
                                  class="apexcharts-gridlines-horizontal"
                                  style={{display: 'none'}}
                                >
                                  <line
                                    id="SvgjsLine3677"
                                    x1="0"
                                    y1="0"
                                    x2="729"
                                    y2="0"
                                    stroke="#e0e0e0"
                                    stroke-dasharray="0"
                                    class="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine3678"
                                    x1="0"
                                    y1="16"
                                    x2="729"
                                    y2="16"
                                    stroke="#e0e0e0"
                                    stroke-dasharray="0"
                                    class="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine3679"
                                    x1="0"
                                    y1="32"
                                    x2="729"
                                    y2="32"
                                    stroke="#e0e0e0"
                                    stroke-dasharray="0"
                                    class="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine3680"
                                    x1="0"
                                    y1="48"
                                    x2="729"
                                    y2="48"
                                    stroke="#e0e0e0"
                                    stroke-dasharray="0"
                                    class="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine3681"
                                    x1="0"
                                    y1="64"
                                    x2="729"
                                    y2="64"
                                    stroke="#e0e0e0"
                                    stroke-dasharray="0"
                                    class="apexcharts-gridline"
                                  ></line>
                                  <line
                                    id="SvgjsLine3682"
                                    x1="0"
                                    y1="80"
                                    x2="729"
                                    y2="80"
                                    stroke="#e0e0e0"
                                    stroke-dasharray="0"
                                    class="apexcharts-gridline"
                                  ></line>
                                </g>
                                <g
                                  id="SvgjsG3676"
                                  class="apexcharts-gridlines-vertical"
                                  style={{display: 'none'}}
                                ></g>
                                <line
                                  id="SvgjsLine3684"
                                  x1="0"
                                  y1="80"
                                  x2="729"
                                  y2="80"
                                  stroke="transparent"
                                  stroke-dasharray="0"
                                ></line>
                                <line
                                  id="SvgjsLine3683"
                                  x1="0"
                                  y1="1"
                                  x2="0"
                                  y2="80"
                                  stroke="transparent"
                                  stroke-dasharray="0"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG3661"
                                class="apexcharts-area-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG3662"
                                  class="apexcharts-series"
                                  seriesName="seriesx1"
                                  dataLongestSeries="true"
                                  rel="1"
                                  dataRealIndex="0"
                                >
                                  <path
                                    id="SvgjsPath3669"
                                    d="M 0 80L 0 60.8C 28.349999999999998 60.8 52.650000000000006 27.200000000000003 81 27.200000000000003C 109.35 27.200000000000003 133.65 46.4 162 46.4C 190.35 46.4 214.65 9.599999999999994 243 9.599999999999994C 271.35 9.599999999999994 295.65 30.4 324 30.4C 352.35 30.4 376.65 60.8 405 60.8C 433.35 60.8 457.65 44 486 44C 514.35 44 538.65 70.4 567 70.4C 595.35 70.4 619.65 51.2 648 51.2C 676.35 51.2 700.65 72 729 72C 729 72 729 72 729 80M 729 72z"
                                    fill="url(#SvgjsLinearGradient3665)"
                                    fill-opacity="1"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="0"
                                    stroke-dasharray="0"
                                    class="apexcharts-area"
                                    index="0"
                                    clip-path="url(#gridRectMaskblnhvn43)"
                                    pathTo="M 0 80L 0 60.8C 28.349999999999998 60.8 52.650000000000006 27.200000000000003 81 27.200000000000003C 109.35 27.200000000000003 133.65 46.4 162 46.4C 190.35 46.4 214.65 9.599999999999994 243 9.599999999999994C 271.35 9.599999999999994 295.65 30.4 324 30.4C 352.35 30.4 376.65 60.8 405 60.8C 433.35 60.8 457.65 44 486 44C 514.35 44 538.65 70.4 567 70.4C 595.35 70.4 619.65 51.2 648 51.2C 676.35 51.2 700.65 72 729 72C 729 72 729 72 729 80M 729 72z"
                                    pathFrom="M -1 80L -1 80L 81 80L 162 80L 243 80L 324 80L 405 80L 486 80L 567 80L 648 80L 729 80"
                                  ></path>
                                  <path
                                    id="SvgjsPath3670"
                                    d="M 0 60.8C 28.349999999999998 60.8 52.650000000000006 27.200000000000003 81 27.200000000000003C 109.35 27.200000000000003 133.65 46.4 162 46.4C 190.35 46.4 214.65 9.599999999999994 243 9.599999999999994C 271.35 9.599999999999994 295.65 30.4 324 30.4C 352.35 30.4 376.65 60.8 405 60.8C 433.35 60.8 457.65 44 486 44C 514.35 44 538.65 70.4 567 70.4C 595.35 70.4 619.65 51.2 648 51.2C 676.35 51.2 700.65 72 729 72"
                                    fill="none"
                                    fill-opacity="1"
                                    stroke="#525ce5"
                                    stroke-opacity="1"
                                    stroke-linecap="butt"
                                    stroke-width="2"
                                    stroke-dasharray="0"
                                    class="apexcharts-area"
                                    index="0"
                                    clip-path="url(#gridRectMaskblnhvn43)"
                                    pathTo="M 0 60.8C 28.349999999999998 60.8 52.650000000000006 27.200000000000003 81 27.200000000000003C 109.35 27.200000000000003 133.65 46.4 162 46.4C 190.35 46.4 214.65 9.599999999999994 243 9.599999999999994C 271.35 9.599999999999994 295.65 30.4 324 30.4C 352.35 30.4 376.65 60.8 405 60.8C 433.35 60.8 457.65 44 486 44C 514.35 44 538.65 70.4 567 70.4C 595.35 70.4 619.65 51.2 648 51.2C 676.35 51.2 700.65 72 729 72"
                                    pathFrom="M -1 80L -1 80L 81 80L 162 80L 243 80L 324 80L 405 80L 486 80L 567 80L 648 80L 729 80"
                                  ></path>
                                  <g
                                    id="SvgjsG3663"
                                    class="apexcharts-series-markers-wrap"
                                    dataRealIndex="0"
                                  >
                                    <g class="apexcharts-series-markers">
                                      <circle
                                        id="SvgjsCircle3690"
                                        r="0"
                                        cx="567"
                                        cy="70.4"
                                        class="apexcharts-marker w5a3m0fzo no-pointer-events"
                                        stroke="#ffffff"
                                        fill="#525ce5"
                                        fill-opacity="1"
                                        stroke-width="2"
                                        stroke-opacity="0.9"
                                        default-marker-size="0"
                                      ></circle>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG3664"
                                  class="apexcharts-datalabels"
                                  dataRealIndex="0"
                                ></g>
                              </g>
                              <line
                                id="SvgjsLine3685"
                                x1="0"
                                y1="0"
                                x2="729"
                                y2="0"
                                stroke="#b6b6b6"
                                stroke-dasharray="0"
                                stroke-width="1"
                                class="apexcharts-ycrosshairs"
                              ></line>
                              <line
                                id="SvgjsLine3686"
                                x1="0"
                                y1="0"
                                x2="729"
                                y2="0"
                                stroke-dasharray="0"
                                stroke-width="0"
                                class="apexcharts-ycrosshairs-hidden"
                              ></line>
                              <g
                                id="SvgjsG3687"
                                class="apexcharts-yaxis-annotations"
                              ></g>
                              <g
                                id="SvgjsG3688"
                                class="apexcharts-xaxis-annotations"
                              ></g>
                              <g
                                id="SvgjsG3689"
                                class="apexcharts-point-annotations"
                              ></g>
                            </g>
                            <rect
                              id="SvgjsRect3657"
                              width="0"
                              height="0"
                              x="0"
                              y="0"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fefefe"
                            ></rect>
                            <g
                              id="SvgjsG3673"
                              class="apexcharts-yaxis"
                              rel="0"
                              transform="translate(-18, 0)"
                            ></g>
                            <g
                              id="SvgjsG3655"
                              class="apexcharts-annotations"
                            ></g>
                          </svg>
                          <div
                            class="apexcharts-legend"
                            style={{maxHeight: '40px'}}
                          ></div>
                          <div
                            class="apexcharts-tooltip apexcharts-theme-light"
                            style={{left: '516.766px', top: '45px'}}
                          >
                            <div
                              class="apexcharts-tooltip-series-group apexcharts-active"
                              style={{order: 1, display: 'flex'}}
                            >
                              <span
                                class="apexcharts-tooltip-marker"
                                style={{backgroundColor: 'rgb(82, 92, 229)', display: 'none'}}
                              ></span>
                              <div
                                class="apexcharts-tooltip-text"
                                style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px'}}
                              >
                                <div class="apexcharts-tooltip-y-group">
                                  <span class="apexcharts-tooltip-text-label"></span>
                                  <span class="apexcharts-tooltip-text-value">
                                    12
                                  </span>
                                </div>
                                <div class="apexcharts-tooltip-z-group">
                                  <span class="apexcharts-tooltip-text-z-label"></span>
                                  <span class="apexcharts-tooltip-text-z-value"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                            <div class="apexcharts-yaxistooltip-text"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Product Traking</h4>

                    <ul className="list-unstyled activity-wid mb-0">
                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            className="avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              Your Manager Posted
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              James Raphael
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                3 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ti-shopping-cart font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              You have 5 pending order.
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              America
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                1 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-success text-success rounded-circle">
                            <i className="ti-user font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              New Order Received
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              Thank You
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                Today
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            className="avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              Your Manager Posted
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              James Raphael
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                3 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ti-shopping-cart font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              You have 1 pending order.
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              Dubai
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                1 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-success text-success rounded-circle">
                            <i className="ti-user font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              New Order Received
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              Thank You
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                Today
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Earning Goal</h4>

                    <div className="mt-2 text-center">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mt-4 mt-sm-0">
                            <div
                              id="list-chart-1"
                              className="apex-charts"
                              dir="ltr"
                            ></div>
                            <p className="text-muted mb-2 mt-2 pt-1">
                              Total Earning:
                            </p>
                            <h5 className="font-size-18 mb-1">USD 13,545.65</h5>
                          </div>
                        </div>

                        <div className="col-md-6 dash-goal">
                          <div className="mt-4 mt-sm-0">
                            <div
                              id="list-chart-2"
                              className="apex-charts"
                              dir="ltr"
                            ></div>

                            <p className="text-muted mb-2 mt-2 pt-1">
                              Earning Goal:
                            </p>
                            <h5 className="font-size-18 mb-1">USD 84,265.45</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Best Selling Product</h4>

                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row align-items-center mb-5">
                            <div className="col-md-4">
                              <img
                                src="assets/images/product/img-3.png"
                                className="img-fluid me-3"
                                alt=""
                              />
                            </div>
                            <div className="col-md-7 offset-md-1">
                              <div className="mt-4 mt-sm-0">
                                <p className="text-muted mb-2">Headphone</p>

                                <h5 className="text-primary">Blue Headphone</h5>

                                <div className="row no-gutters mt-4">
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>1200</h4>
                                      <p className="text-muted mb-1">Sold</p>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>450</h4>
                                      <p className="text-muted mb-1">Stock</p>
                                    </div>
                                  </div>

                                  <div className="col-4">
                                    <div className="mt-4 pt-1">
                                      <a
                                        href=""
                                        className="btn btn-primary btn-sm"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row align-items-center mb-5">
                            <div className="col-md-4">
                              <img
                                src="assets/images/product/img-5.png"
                                className="img-fluid me-3"
                                alt=""
                              />
                            </div>
                            <div className="col-md-7 offset-md-1">
                              <div className="mt-4 mt-sm-0">
                                <p className="text-muted mb-2">T-shirt</p>

                                <h5 className="text-primary">Blue T-shirt</h5>

                                <div className="row no-gutters mt-4">
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>800</h4>
                                      <p className="text-muted mb-1">Sold</p>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>250</h4>
                                      <p className="text-muted mb-1">Stock</p>
                                    </div>
                                  </div>

                                  <div className="col-4">
                                    <div className="mt-4 pt-1">
                                      <a
                                        href=""
                                        className="btn btn-primary btn-sm"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row align-items-center mb-5">
                            <div className="col-md-4">
                              <img
                                src="assets/images/product/img-1.png"
                                className="img-fluid me-3"
                                alt=""
                              />
                            </div>
                            <div className="col-md-7 offset-md-1">
                              <div className="mt-4 mt-sm-0">
                                <p className="text-muted mb-2">Sonic</p>

                                <h5 className="text-primary">Alarm clock</h5>

                                <div className="row no-gutters mt-4">
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>600</h4>
                                      <p className="text-muted mb-1">Sold</p>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>150</h4>
                                      <p className="text-muted mb-1">Stock</p>
                                    </div>
                                  </div>

                                  <div className="col-4">
                                    <div className="mt-4 pt-1">
                                      <a
                                        href=""
                                        className="btn btn-primary btn-sm"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Sales by State</h4>

                    <div
                      id="world-map-markers"
                      style={{ height: "230px" }}
                    ></div>

                    <div className="px-4 py-3 mt-4">
                      <p className="mb-1">
                        USA <span className="float-right">75%</span>
                      </p>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-primary"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="75"
                        ></div>
                      </div>

                      <p className="mt-3 mb-1">
                        Russia <span className="float-right">55%</span>
                      </p>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="55"
                        ></div>
                      </div>

                      <p className="mt-3 mb-1">
                        Australia <span className="float-right">85%</span>
                      </p>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-primary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="85"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">
                      Sales By Social Source
                    </h4>

                    <ul className="inbox-wid list-unstyled mb-0">
                      <li className="inbox-list-item">
                        <a href="#">
                          <div className="media">
                            <div className="me-3 align-self-center">
                              <div className="avatar-sm rounded bg-primary align-self-center">
                                <span className="avatar-title">
                                  <i className="ti-facebook text-white font-size-18"></i>
                                </span>
                              </div>
                            </div>
                            <div className="media-body overflow-hidden mt-1">
                              <h5 className="font-size-15 mb-1">
                                Facebook Ads
                              </h5>
                              <p className="text-muted mb-0">
                                3.2k Sale - 4.2k Like
                              </p>
                            </div>
                            <p className="ms-2 pt-3">
                              <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                              50%
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-list-item">
                        <a href="#">
                          <div className="media">
                            <div className="me-3 align-self-center">
                              <div className="avatar-sm rounded bg-info align-self-center">
                                <span className="avatar-title">
                                  <i className="ti-twitter-alt text-white font-size-18"></i>
                                </span>
                              </div>
                            </div>
                            <div className="media-body overflow-hidden mt-1">
                              <h5 className="font-size-15 mb-1">Twitter Ads</h5>
                              <p className="text-muted mb-0">
                                3.1k Sale - 3.7k Like
                              </p>
                            </div>
                            <p className="ms-2 pt-3">
                              <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                              45%
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-list-item">
                        <a href="#">
                          <div className="media">
                            <div className="me-3 align-self-center">
                              <div className="avatar-sm rounded bg-danger align-self-center">
                                <span className="avatar-title">
                                  <i className="ti-linkedin text-white font-size-18"></i>
                                </span>
                              </div>
                            </div>
                            <div className="media-body overflow-hidden mt-1">
                              <h5 className="font-size-15 mb-1">
                                linkedin Ads
                              </h5>
                              <p className="text-muted mb-0">
                                4.3k Sale - 4.3k Like
                              </p>
                            </div>
                            <p className="ms-2 pt-3">
                              <i className="mdi mdi-arrow-bottom-right text-danger me-1"></i>
                              30%
                            </p>
                          </div>
                        </a>
                      </li>

                      <li className="inbox-list-item">
                        <a href="#">
                          <div className="media">
                            <div className="me-3 align-self-center">
                              <div className="avatar-sm rounded bg-danger align-self-center">
                                <span className="avatar-title">
                                  <i className="ti-youtube text-white font-size-18"></i>
                                </span>
                              </div>
                            </div>
                            <div className="media-body overflow-hidden mt-1">
                              <h5 className="font-size-15 mb-1">Youtube Ads</h5>
                              <p className="text-muted mb-0">
                                4.2k Sale - 3.7k Like
                              </p>
                            </div>
                            <p className="ms-2 pt-3">
                              <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                              35%
                            </p>
                          </div>
                        </a>
                      </li>

                      <li className="inbox-list-item">
                        <a href="#" className="pb-0">
                          <div className="media">
                            <div className="me-3 align-self-center">
                              <div className="avatar-sm rounded bg-dark align-self-center">
                                <span className="avatar-title">
                                  <i className="ti-github text-white font-size-18"></i>
                                </span>
                              </div>
                            </div>
                            <div className="media-body overflow-hidden mt-1">
                              <h5 className="font-size-15 mb-1">GitHub Ads</h5>
                              <p className="text-muted mb-2">
                                4.9k Sale - 4.1k Like
                              </p>
                            </div>
                            <p className="ms-2 pt-3">
                              <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                              40%
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Products of the Month</h4>
                    <div className="table-responsive">
                      <table className="table table-centered table-nowrap mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>ID</th>
                            <th>Product</th>

                            <th>Customer</th>
                            <th>Price</th>
                            <th>Invoice</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#2356</td>
                            <td>
                              <img
                                src="assets/images/product/img-7.png"
                                width="42"
                                className="me-3"
                                alt=""
                              />
                              Green Chair
                            </td>
                            <td>Kenneth Gittens</td>
                            <td>$200.00</td>
                            <td>42</td>
                            <td>
                              <span className="badge badge-pill badge-soft-primary font-size-13">
                                Pending
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td>#2564</td>
                            <td>
                              <img
                                src="assets/images/product/img-8.png"
                                width="42"
                                className="me-3"
                                alt=""
                              />
                              Office Chair
                            </td>
                            <td>Alfred Gordon</td>
                            <td>$242.00</td>
                            <td>54</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-13">
                                Active
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td>#2125</td>
                            <td>
                              <img
                                src="assets/images/product/img-10.png"
                                width="42"
                                className="me-3"
                                alt=""
                              />
                              Gray Chair
                            </td>
                            <td>Keena Reyes</td>
                            <td>$320.00</td>
                            <td>65</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-13">
                                Active
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td>#8587</td>
                            <td>
                              <img
                                src="assets/images/product/img-11.png"
                                width="42"
                                className="me-3"
                                alt=""
                              />
                              Steel Chair
                            </td>
                            <td>Timothy Zuniga</td>
                            <td>$342.00</td>
                            <td>52</td>
                            <td>
                              <span className="badge badge-pill badge-soft-primary font-size-13">
                                Pending
                              </span>
                            </td>
                          </tr>

                          <tr>
                            <td>#2354</td>
                            <td>
                              <img
                                src="assets/images/product/img-12.png"
                                width="42"
                                className="me-3"
                                alt=""
                              />
                              Home Chair
                            </td>
                            <td>Joann Wiliams</td>
                            <td>$320.00</td>
                            <td>25</td>
                            <td>
                              <span className="badge badge-pill badge-soft-primary font-size-13">
                                Pending
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <!-- end table-responsive --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
