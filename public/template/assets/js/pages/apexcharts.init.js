function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var t = document.getElementById(e).getAttribute("data-colors");
        if (t) return (t = JSON.parse(t)).map(function(e) {
            var t = e.replace(" ", "");
            if (-1 === t.indexOf(",")) {
                var r = getComputedStyle(document.documentElement).getPropertyValue(t);
                return r || t
            }
            var o = e.split(",");
            return 2 != o.length ? t : "rgba(" + getComputedStyle(document.documentElement).getPropertyValue(o[0]) + "," + o[1] + ")"
        });
        console.warn("data-colors Attribute not found on:", e)
    }
}
var lineChartDatalabelColors = getChartColorsArray("line_chart_datalabel");
lineChartDatalabelColors && (options = {
    chart: {
        height: 380,
        type: "line",
        zoom: {
            enabled: !1
        },
        toolbar: {
            show: !1
        }
    },
    colors: lineChartDatalabelColors,
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: [3, 3],
        curve: "straight"
    },
    series: [{
        name: "High - 2018",
        data: [26, 24, 32, 36, 33, 31, 33]
    }, {
        name: "Low - 2018",
        data: [14, 11, 16, 12, 17, 13, 12]
    }],
    title: {
        text: "Average High & Low Temperature",
        align: "left",
        style: {
            fontWeight: "500"
        }
    },
    grid: {
        row: {
            colors: ["transparent", "transparent"],
            opacity: .2
        },
        borderColor: "#f1f1f1"
    },
    markers: {
        style: "inverted",
        size: 6
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
            text: "Month"
        }
    },
    yaxis: {
        title: {
            text: "Temperature"
        },
        min: 5,
        max: 40
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        floating: !0,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: !1
                }
            },
            legend: {
                show: !1
            }
        }
    }]
}, (chart = new ApexCharts(document.querySelector("#line_chart_datalabel"), options)).render());
var lineChartsplineAreaColors = getChartColorsArray("spline_area");
lineChartsplineAreaColors && (options = {
    chart: {
        height: 350,
        type: "area",
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: 3
    },
    series: [{
        name: "series1",
        data: [34, 40, 28, 52, 42, 109, 100]
    }, {
        name: "series2",
        data: [32, 60, 34, 46, 34, 52, 41]
    }],
    colors: lineChartsplineAreaColors,
    xaxis: {
        type: "datetime",
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
    },
    grid: {
        borderColor: "#f1f1f1"
    },
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm"
        }
    }
}, (chart = new ApexCharts(document.querySelector("#spline_area"), options)).render());
var columnChartColors = getChartColorsArray("column_chart");
columnChartColors && (options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "45%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"]
    },
    series: [{
        name: "Net Profit",
        data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
    }, {
        name: "Revenue",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
    }, {
        name: "Free Cash Flow",
        data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
    }],
    colors: columnChartColors,
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    },
    yaxis: {
        title: {
            text: "$ (thousands)",
            style: {
                fontWeight: "500"
            }
        }
    },
    grid: {
        borderColor: "#f1f1f1"
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function(e) {
                return "$ " + e + " thousands"
            }
        }
    }
}, (chart = new ApexCharts(document.querySelector("#column_chart"), options)).render());
var dumbbellColumnChartsColors = getChartColorsArray("dumbbell_column_charts");
dumbbellColumnChartsColors && (options = {
    series: [{
        data: [{
            x: "2008",
            y: [2800, 4500]
        }, {
            x: "2009",
            y: [3200, 4100]
        }, {
            x: "2010",
            y: [2950, 7800]
        }, {
            x: "2011",
            y: [3e3, 4600]
        }, {
            x: "2012",
            y: [3500, 4100]
        }, {
            x: "2013",
            y: [4500, 6500]
        }, {
            x: "2014",
            y: [4100, 5600]
        }]
    }],
    chart: {
        height: 350,
        type: "rangeBar",
        zoom: {
            enabled: !1
        }
    },
    color: dumbbellColumnChartsColors,
    plotOptions: {
        bar: {
            isDumbbell: !0,
            columnWidth: 3,
            dumbbellColors: dumbbellColumnChartsColors
        }
    },
    legend: {
        show: !0,
        showForSingleSeries: !0,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: ["Product A", "Product B"]
    },
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            gradientToColors: ["#00E396"],
            inverseColors: !0,
            stops: [0, 100]
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: !0
            }
        },
        yaxis: {
            lines: {
                show: !1
            }
        }
    },
    xaxis: {
        tickPlacement: "on"
    }
}, (chart = new ApexCharts(document.querySelector("#dumbbell_column_charts"), options)).render());
var rangeAreaChartColors = getChartColorsArray("range_area_chart");
rangeAreaChartColors && (options = {
    series: [{
        name: "New York Temperature",
        data: [{
            x: "Jan",
            y: [-2, 4]
        }, {
            x: "Feb",
            y: [-1, 6]
        }, {
            x: "Mar",
            y: [3, 10]
        }, {
            x: "Apr",
            y: [8, 16]
        }, {
            x: "May",
            y: [13, 22]
        }, {
            x: "Jun",
            y: [18, 26]
        }, {
            x: "Jul",
            y: [21, 29]
        }, {
            x: "Aug",
            y: [21, 28]
        }, {
            x: "Sep",
            y: [17, 24]
        }, {
            x: "Oct",
            y: [11, 18]
        }, {
            x: "Nov",
            y: [6, 12]
        }, {
            x: "Dec",
            y: [1, 7]
        }]
    }],
    chart: {
        height: 350,
        type: "rangeArea"
    },
    colors: rangeAreaChartColors,
    stroke: {
        curve: "straight"
    },
    title: {
        text: "New York Temperature (all year round)"
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    },
    dataLabels: {
        enabled: !1
    },
    yaxis: {
        labels: {
            formatter: function(e) {
                return e + "°C"
            }
        }
    }
}, (chart = new ApexCharts(document.querySelector("#range_area_chart"), options)).render()), (dumbbellColumnChartsColors = getChartColorsArray("dumbbell_timeline_charts")) && (options = {
    series: [{
        data: [{
            x: "Operations",
            y: [2800, 4500]
        }, {
            x: "Customer Success",
            y: [3200, 4100]
        }, {
            x: "Engineering",
            y: [2950, 7800]
        }, {
            x: "Marketing",
            y: [3e3, 4600]
        }, {
            x: "Product",
            y: [3500, 4100]
        }, {
            x: "Data Science",
            y: [4500, 6500]
        }, {
            x: "Sales",
            y: [4100, 5600]
        }]
    }],
    chart: {
        height: 390,
        type: "rangeBar",
        zoom: {
            enabled: !1
        }
    },
    colors: dumbbellColumnChartsColors,
    plotOptions: {
        bar: {
            horizontal: !0,
            isDumbbell: !0,
            dumbbellColors: dumbbellColumnChartsColors
        }
    },
    title: {
        text: "Paygap Disparity"
    },
    legend: {
        show: !0,
        showForSingleSeries: !0,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: ["Female", "Male"]
    },
    fill: {
        type: "gradient",
        gradient: {
            gradientToColors: ["#36BDCB"],
            inverseColors: !1,
            stops: [0, 100]
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: !0
            }
        },
        yaxis: {
            lines: {
                show: !1
            }
        }
    }
}, (chart = new ApexCharts(document.querySelector("#dumbbell_timeline_charts"), options)).render());
var funnelChartColors = getChartColorsArray("funnel_charts");
funnelChartColors && (options = {
    series: [{
        name: "Funnel Series",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200]
    }],
    chart: {
        type: "bar",
        height: 390
    },
    plotOptions: {
        bar: {
            borderRadius: 0,
            horizontal: !0,
            barHeight: "80%",
            isFunnel: !0
        }
    },
    dataLabels: {
        enabled: !0,
        formatter: function(e, t) {
            return t.w.globals.labels[t.dataPointIndex] + ":  " + e
        },
        dropShadow: {
            enabled: !0
        }
    },
    colors: funnelChartColors,
    title: {
        text: "Recruitment Funnel",
        align: "middle"
    },
    xaxis: {
        categories: ["Sourced", "Screened", "Assessed", "HR Interview", "Technical", "Verify", "Offered", "Hired"]
    },
    legend: {
        show: !1
    }
}, (chart = new ApexCharts(document.querySelector("#funnel_charts"), options)).render());
var columnChartDatalabelColors = getChartColorsArray("column_chart_datalabel");
columnChartDatalabelColors && (options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: "top"
            }
        }
    },
    dataLabels: {
        enabled: !0,
        formatter: function(e) {
            return e + "%"
        },
        offsetY: -22,
        style: {
            fontSize: "12px",
            colors: ["#304758"]
        }
    },
    series: [{
        name: "Inflation",
        data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, .8]
    }],
    colors: columnChartDatalabelColors,
    grid: {
        borderColor: "#f1f1f1"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: "top",
        labels: {
            offsetY: -18
        },
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: .4,
                    opacityTo: .5
                }
            }
        },
        tooltip: {
            enabled: !0,
            offsetY: -35
        }
    },
    fill: {
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: .25,
            gradientToColors: void 0,
            inverseColors: !0,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        }
    },
    yaxis: {
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            show: !1,
            formatter: function(e) {
                return e + "%"
            }
        }
    },
    title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: !0,
        offsetY: 330,
        align: "center",
        style: {
            color: "#444",
            fontWeight: "500"
        }
    }
}, (chart = new ApexCharts(document.querySelector("#column_chart_datalabel"), options)).render());
var barChartColors = getChartColorsArray("bar_chart");
barChartColors && (options = {
    chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
    }],
    colors: barChartColors,
    grid: {
        borderColor: "#f1f1f1"
    },
    xaxis: {
        categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
    }
}, (chart = new ApexCharts(document.querySelector("#bar_chart"), options)).render());
var mixedChartColors = getChartColorsArray("mixed_chart");
mixedChartColors && (options = {
    chart: {
        height: 350,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: "smooth"
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },
    colors: mixedChartColors,
    series: [{
        name: "Team A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: "Team B",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: "Team C",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    fill: {
        opacity: [.85, .25, 1],
        gradient: {
            inverseColors: !1,
            shade: "light",
            type: "vertical",
            opacityFrom: .85,
            opacityTo: .55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
    markers: {
        size: 0
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        title: {
            text: "Points"
        }
    },
    tooltip: {
        shared: !0,
        intersect: !1,
        y: {
            formatter: function(e) {
                return void 0 !== e ? e.toFixed(0) + " points" : e
            }
        }
    },
    grid: {
        borderColor: "#f1f1f1"
    }
}, (chart = new ApexCharts(document.querySelector("#mixed_chart"), options)).render());
var radialChartColors = getChartColorsArray("radial_chart");
radialChartColors && (options = {
    chart: {
        height: 370,
        type: "radialBar"
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: "22px"
                },
                value: {
                    fontSize: "16px"
                },
                total: {
                    show: !0,
                    label: "Total",
                    formatter: function(e) {
                        return 249
                    }
                }
            }
        }
    },
    series: [44, 55, 67, 83],
    labels: ["Computer", "Tablet", "Laptop", "Mobile"],
    colors: radialChartColors
}, (chart = new ApexCharts(document.querySelector("#radial_chart"), options)).render());
var options, chart, donutChartColors = getChartColorsArray("donut_chart");
donutChartColors && (options = {
    chart: {
        height: 320,
        type: "donut"
    },
    series: [44, 55, 41, 17, 15],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
    colors: donutChartColors,
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: !1
            }
        }
    }]
}, (chart = new ApexCharts(document.querySelector("#donut_chart"), options)).render());
