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
  render()
  {
      return(
          <div className='row'>
              {this.state.students.map((s,i)=>
              (
                  <StudentIDCard key={s.ID} student={s} college={this.state.college}></StudentIDCard>
              ))}
          </div>
      )
  }
}
