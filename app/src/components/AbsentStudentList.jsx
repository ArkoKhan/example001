import React from "react";

function AbsentStudentList(props) {
  return (
    <div className="absent-student">
      <ul>
        {props.students
          .filter((i) => i.isPresent === false)
          .map((student) => (
            <li>
              <span>{student.name}</span>
              {/* toggleHandler */}
              <button
                className="btn-toggle"
                onClick={() => props.toggleHandler(student.id)}
              >
                Accidentaly Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AbsentStudentList;
