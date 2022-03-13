import Chart from "react-apexcharts"

const options = {
    chart: {
        id: "basic-bar",
        width: '100%'
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
        logarithmic: true,
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
            return '<div class="arrow_box">' +
                "<p class='header'>" +
                new Date(w.globals.labels[dataPointIndex]).toLocaleDateString() +
                "</p><p>$" +
                series[seriesIndex][dataPointIndex].toFixed(4) +
                "</p>" +
                "</div>"
        },
        intersect: false,
        shared: false
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: 'dark',
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.8,
            stops: [0, 100]
        }
    },
    colors: ['#db2777'],
    markers: {
        colors: ['#db2777'],
        strokeWidth: 0,
        hover: {
            size: 4
        }
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
        offsetX: 30

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
