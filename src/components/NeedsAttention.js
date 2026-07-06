import "../styles/Dashboard.css";

function NeedsAttention() {
  const students = [
    {
      name: "Abhi",
      attendance: "68%",
      course: "Computer Science",
    },
    {
      name: "Subha",
      attendance: "70%",
      course: "Information Technology",
    },
    {
      name: "Subhi",
      attendance: "72%",
      course: "Electronics",
    },
  ];

  return (
    <div className="attention">
      <h2>Needs Attention</h2>
      <p style={{ color: "gray", marginBottom: "20px" }}>
        Students with low attendance
      </p>

      {students.map((student, index) => (
        <div className="student-row" key={index}>
          <div>
            <h4>{student.name}</h4>
            <small>{student.course}</small>
          </div>

          <span className="badge">{student.attendance}</span>
        </div>
      ))}
    </div>
  );
}

export default NeedsAttention;