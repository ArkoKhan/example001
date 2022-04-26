// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Forms from "./components/Forms";
import StudentSec from "./components/StudentSec";

function App() {
  const [studentName, setStudentName] = useState(""); //= Forms & AllStudent
  const [students, setStudents] = useState([]); //= StudentSec
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  // const [isPresent, setIsPresent] = useState(undefined);

  const fetchStudent = () => {
    fetch("http://localhost:3000/studentData")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  };

  useEffect(() => fetchStudent(), []);

  return (
    <div className="App">
      {/* -------------------------- Student Form--------------------------- */}

      <Forms
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        fetchStudent={fetchStudent}
      />

      {/* ------------------------------Student Sec---------------------------- */}

      <StudentSec
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
        fetchStudent={fetchStudent}
      />
    </div>
  );
}

export default App;
