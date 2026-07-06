import "../styles/Dashboard.css";

function AttendanceChart() {
  const data = [80, 82, 79, 85, 81, 84, 83];

  return (
    <div className="chart">
      <h2>Attendance Trend</h2>

      <div className="chart-box">
        {data.map((item, index) => (
          <div className="bar" key={index}>
            <div
              className="fill"
              style={{ height: `${item * 2}px` }}
            ></div>

            <span>W{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceChart;