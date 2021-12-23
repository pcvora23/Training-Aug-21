import React, { Component } from "react";
import StudentIDCard from "./StudentIdCard";
import students from "../data/studentInfo";
import college from "../data/collegeInfo";

export default class StudentIdCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: students,
      college: college,
    };
  }

  handleDelete = (id) => {
    const sortedStudents = this.state.students.filter((item) => item.ID !== id);
    this.setState({ students: sortedStudents });
  };

  render() {
    return (
      <div className="row">
        {this.state.students.map((s, i) => (
          <StudentIDCard
            key={s.ID}
            student={s}
            college={this.state.college}
            handleDelete ={this.handleDelete}
          ></StudentIDCard>
        ))}
      </div>
    );
  }
}
