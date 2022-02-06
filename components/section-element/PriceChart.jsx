import Chart from "react-apexcharts"

const series = [{
    data: [
        [
            1637280000000,
            0.20796100346726995
          ],
          [
            1637366400000,
            0.20796100346726995
          ],
          [
            1637452800000,
            0.19802408256546072
          ],
          [
            1637539200000,
            0.1883902102949226
          ],
          [
            1637625600000,
            0.13256065346831053
          ],
          [
            1637712000000,
            0.1283553321373665
          ],
          [
            1637798400000,
            0.1164935770482595
          ],
          [
            1637884800000,
            0.15499218043262253
          ],
          [
            1637971200000,
            0.12145451279606989
          ],
          [
            1638057600000,
            0.11665714765946851
          ],
          [
            1638144000000,
            0.13221650165252893
          ],
          [
            1638230400000,
            0.12770773965463952
          ],
          [
            1638316800000,
            0.1532663039048088
          ],
          [
            1638403200000,
            0.14907612877488832
          ],
          [
            1638489600000,
            0.13558252675931493
          ],
          [
            1638576000000,
            0.13403460760365177
          ],
          [
            1638662400000,
            0.11981158675209834
          ],
          [
            1638748800000,
            0.11382417162157105
          ],
          [
            1638835200000,
            0.09966697912532363
          ],
          [
            1638921600000,
            0.10041279463768495
          ],
          [
            1639008000000,
            0.09497779639487405
          ]]
}]


const options = {
    chart: {
        id: "basic-bar"
    },
    stroke: {
        curve: 'smooth',
        width: 1
    },
    grid: {
        show: false
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
        }
    },
    tooltip: {
        marker: {
            show: false
        },
        style: {
            fontColor: '#000000'
        },
        theme: "dark",
        y: {
            formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                return `$${value.toFixed(4)}`
            },
            title: {
                formatter: function (seriesName) {
                    return
                }
            }
        },
        x: {
            formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                return `${new Date(value).toLocaleDateString()}`
            },
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: 'dark',
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    chart: {
        toolbar: {
            show: false
        }
    },



}

const PriceChart = () => {
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