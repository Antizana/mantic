import React, { useMemo } from "react";
import Chart from "react-chartist";

const UserBehaviorChart = () => {
  const data = useMemo(
    () => ({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
      ],
    }),
    []
  );

  const options = useMemo(
    () => ({
      seriesBarDistance: 10,
      axisX: {
        showGrid: false,
      },
      height: "245px",
    }),
    []
  );

  const responsiveOptions = useMemo(
    () => [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            },
          },
        },
      ],
    ],
    []
  );

  return (
    <div className="card ">
      <div className="header">
        <h4>2021 Sales</h4>
        <p className="category">All products including Taxes</p>
      </div>
      <div className="content">
        <Chart
          data={data}
          options={options}
          responsiveOptions={responsiveOptions}
          type="Bar"
          className="ct-chart"
        />
        <div className="footer">
          <div className="legend">
            <i className="fa fa-circle text-info"></i> BMW Model S
            <i className="fa fa-circle text-danger"></i> Mercedes 5 Series
          </div>
          <hr />
          <div className="stats">
            <i className="fa fa-check"></i> Data information certified
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBehaviorChart;
