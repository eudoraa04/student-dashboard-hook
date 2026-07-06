import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { getStudents } from "./services/api";
import "./App.css";

function App() {

const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetchStudents();
}, []);

const fetchStudents = async () => {

const data = await getStudents();

setStudents(data);

setLoading(false);

};

if(loading){
return <h2>Loading...</h2>;
}

return (

<div className="container">

<Sidebar/>

<div className="main">

<h1>Good Morning, Ready for Roll Call</h1>

<div className="cards">

<div className="card">
<h3>Total Students</h3>
<h2>{students.length}</h2>
</div>

<div className="card">
<h3>Attendance</h3>
<h2>81%</h2>
</div>

<div className="card">
<h3>Average GPA</h3>
<h2>3.09</h2>
</div>

</div>
<div className="chart">

<h3>Attendance Trend</h3>

<p>Week 1 : 95%</p>
<p>Week 2 : 90%</p>
<p>Week 3 : 88%</p>
<p>Week 4 : 85%</p>

</div>


<h2>Student List</h2>

{students.map((student)=>(

<div className="card" key={student.id}>
<h3>{student.name}</h3>
<p>{student.course}</p>
</div>

))}

</div>

</div>

);

}

export default App;