import React from "react";

function PresentStudentList(props) {
  return (
    <div className="present-student">
      <ul>
        {props.students
          .filter((i) => i.isPresent === true)
          .map((student) => (
            <li>
              <span>{student.name}</span>
              {/*  toggleHandler */}
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

export default PresentStudentList;
