import Chart from "react-apexcharts"

const options = {
    chart: {
        id: "basic-bar",

    },
    stroke: {
        curve: 'smooth',
        width: 1
    },
    grid: {
        show: false,
        padding: {
            left: 0,
            right: 0
        }
    },
    xaxis: {
        floating: true,
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        crosshairs: {
            show: false
        }
    },
    yaxis: {
        floating: true,
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        },
        labels: {
            show: false
        },
        min: 0
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return ''
        },
        intersect: false,
        shared: false
        // marker: {
        //     show: false
        // },
        // style: {
        //     fontColor: '#000000'
        // },
        // theme: "dark",
        // y: {
        //     formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        //         return `$${value.toFixed(4)}`
        //     },
        //     title: {
        //         formatter: function (seriesName) {
        //             return
        //         }
        //     }
        // },
        // x: {
        //     formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
        //         return `${new Date(value).toLocaleDateString()}`
        //     }
        // },

    },


    dataLabels: {
        enabled: false
    },
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },

    },
}

const PriceChart = ({ chartData }) => {

    const series = [{
        data: chartData.prices
    }]

    return (
        <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="50%"
        />
    )
}

export default PriceChart
