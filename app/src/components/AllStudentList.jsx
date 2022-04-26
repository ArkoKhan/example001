import React from "react";

function AllStudentList(props) {
  // presentHandler
  const presentHandler = (id) => {
    // const newObj = {
    //   ...props.students,
    //   isPresent: props.isPresent,
    // };

    // fetch(`http://localhost:3000/studentData/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(newObj),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // }).then(() => props.fetchStudent());

    const student = props.students.find((i) => i.id === id);

    if (student.isPresent === true) {
      alert("In Present list");
    } else if (student.isPresent === false) {
      alert("In Absent List");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((i) => {
          if (i.id === student.id) {
            i.isPresent = true;
          }
          return i;
        })
      );
    }
  };

  //  absentHandler
  const absentHandler = (id) => {
    // const newObj = {
    //   ...props.students,
    //   isPresent: props.isPresent,
    // };

    // fetch(`http://localhost:3000/studentData/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(newObj),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // }).then(() => props.fetchStudent());

    const student = props.students.find((i) => i.id === id);
    if (student.isPresent === true) {
      alert("In Present list");
    } else if (student.isPresent === false) {
      alert("In Absent List");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((i) => {
          if (i.id === student.id) {
            i.isPresent = false;
          }
          return i;
        })
      );
    }
  };

  //   editStudentHandler
  const editStudentHandler = (id) => {
    const toBeEditedStudent = props.students.find((i) => i.id === id);
    props.setEditMode(true);
    props.setStudentName(toBeEditedStudent.name);
    props.setEditableStudent(toBeEditedStudent);
  };

  //    deleteStudentHandler
  const deleteStudentHandler = (id) => {
    fetch(`http://localhost:3000/studentData/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => props.fetchStudent());

    // props.setStudents(props.students.filter((i) => i.id !== id));
  };

  return (
    <div className="all-student">
      <ul>
        {props.students.map((student) => (
          <li>
            <span>{student.name}</span>

            {/* editStudentHandler */}
            <button
              className="btn-edit"
              onClick={() => editStudentHandler(student.id)}
            >
              Edit
            </button>
            {/* deleteStudentHandler */}
            <button
              className="btn-delete"
              onClick={() => deleteStudentHandler(student.id)}
            >
              Delete
            </button>
            {/* presentHandler */}
            <button
              className="btn-present"
              onClick={() => presentHandler(student.id)}
            >
              Present
            </button>
            {/* absentHandler */}
            <button
              className="btn-absent"
              onClick={() => absentHandler(student.id)}
            >
              Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudentList;
