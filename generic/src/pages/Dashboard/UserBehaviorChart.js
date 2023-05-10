import React from "react";
import Chart from "react-chartist";

const data = {
  labels: [
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
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
  ],
};

const options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
  },
  height: "245px",
};

const responsiveOptions = [
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
];

const UserBehaviorChart = () => (
  <div className="card">
    <div className="header">
      <h4 className="title">2021 Sales</h4>
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
    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> BMW Model 3
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Mercedes MG Series
        </div>
      </div>
      <hr />
      <div className="stats">
        <i className="fa fa-check"></i> Data information certified
      </div>
    </div>
  </div>
);

export default UserBehaviorChart;
