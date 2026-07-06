import StatCard from "../components/StatCard";
import AttendanceChart from "../components/AttendanceChart";
import NeedsAttention from "../components/NeedsAttention";
import "../styles/Cards.css";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Good Morning, Ready for Roll Call</h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Here's how the school is doing this week.
      </p>

      <div className="cards">
        <StatCard title="Total Students" value="24" />
        <StatCard title="Average Attendance" value="82%" />
        <StatCard title="Average GPA" value="3.43" />
        <StatCard title="Students At Risk" value="7" />
      </div>

      <div className="dashboard-bottom">
        <AttendanceChart />
        <NeedsAttention />
      </div>
    </div>
  );
}

export default Dashboard;