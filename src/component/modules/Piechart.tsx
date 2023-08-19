import Chart from "react-apexcharts";
function Piechart() {
  const data = {
    options: {
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      colors: ["#EDE1FF", "#F4BE38", "#032282"],
    },
    series: [12, 12, 76],
  };
  return (
    <div className="">
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        width="250"
      />
    </div>
  );
}

export default Piechart;
