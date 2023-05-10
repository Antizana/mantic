import React from "react";
import ChartistGraph from "react-chartist";

const EmailStatistic = () => {
  const dataPreferences = {
    labels: ["62%", "32%", "6%"],
    series: [62, 32, 6],
  };

  const optionsPreferences = {
    donutWidth: 40,
    showLabel: true,
    axisX: { showGrid: false },
    axisY: { offset: 0 },
  };

  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Email Statistics</h4>
        <p className="category">Performance of the Last Email Campaign</p>
      </div>
      <div className="content">
        <ChartistGraph
          data={dataPreferences}
          options={optionsPreferences}
          type="Pie"
          className="ct-chart ct-perfect-fourth"
        />
      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Open
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Bounce
          </div>
          <div className="item">
            <i className="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-clock-o"></i> Campaign sent one month ago
        </div>
      </div>
    </div>
  );
};

export default EmailStatistic;
