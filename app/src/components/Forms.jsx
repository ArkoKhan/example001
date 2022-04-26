// rfce = React Funtional Cpmponent Export

import React from "react";

function Forms(props) {
  const createStudentHandler = () => {
    if (props.studentName) {
      const newStudent = {
        name: props.studentName,
        id: Date.now(),
        isPresent: undefined,
      };

      fetch(`http://localhost:3000/studentData`, {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => props.fetchStudent());

      // props.setStudents([...props.students, newStudent]);
      props.setStudentName("");
    } else {
      alert("Invalid");
    }
  };

  //  updateStudentHandler
  const updateStudentHandler = () => {
    const newObj = {
      ...props.editableStudent,
      name: props.studentName,
    };

    fetch(`http://localhost:3000/studentData/${props.editableStudent.id}`, {
      method: "PUT",
      body: JSON.stringify(newObj),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => props.fetchStudent());

    props.setStudents(
      props.students.map((student) => {
        if (student.id === props.editableStudent.id) {
          student.name = props.studentName;
        }
        return student;
      })
    );
    props.setEditMode(false);
    props.setStudentName("");
    props.setEditableStudent(null);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editMode ? updateStudentHandler() : createStudentHandler();
      }}
    >
      <input
        type="text"
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
      />

      {/*  add button names */}
      <button className="btn-main">
        {props.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default Forms;
