import React, { Component } from "react";
import StudentIdCard from "./StudentIdCard";

export default class StudentList extends Component {
  render() {
    const { students, deleteStudent, editStudent } = this.props;
    return (
      <div className="container my-5">
        <div className="row">
          {students.map((s) => {
            const student = {
              id: s.id,
              firstName: s.firstName,
              lastName: s.lastName,
              image: s.image,
            };
            const college = {
              collegeLogo: s.collegeLogo,
              collegeName: s.collegeName,
            };
            return (
              <StudentIdCard
                key={s.id}
                student={student}
                college={college}
                deleteStudent={deleteStudent}
                editStudent={editStudent}
              ></StudentIdCard>
            );
          })}
        </div>
      </div>
    );
  }
}
