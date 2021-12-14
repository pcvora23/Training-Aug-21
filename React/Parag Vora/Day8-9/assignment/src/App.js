import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      image: "",
      collegeName: "",
      collegeLogo: "",
      students: [],
      isvalid: false,
      editForm: false,
    };
  }
  handleChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;
    if (targetName === "image" || targetName === "collegeLogo") {
      targetValue = `images/${e.target.files[0].name}`;
    }
    this.setState(
      {
        [targetName]: targetValue,
      },
      () => {
        if (
          !this.state.id ||
          !this.state.firstName ||
          !this.state.lastName ||
          !this.state.collegeName ||
          !this.state.collegeLogo ||
          !this.state.image
        ) {
          this.setState({
            isvalid: false,
          });
          return;
        } else {
          this.setState({ isvalid: true });
        }
      }
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      collegeName: this.state.collegeName,
      collegeLogo: this.state.collegeLogo,
    };
    this.setState({
      students: [...this.state.students, student],
      id: "",
      firstName: "",
      lastName: "",
      image: "",
      collegeName: "",
      collegeLogo: "",
      isvalid: false,
      editForm: false,
    });
  };
  deleteStudent = (id) => {
    const soretedStudents = this.state.students.filter((s) => s.id !== id);
    this.setState({ students: soretedStudents });
  };
  editStudent = (id) => {
    const filteredStudents = this.state.students.filter((s) => s.id !== id);
    const selectedStudent = this.state.students.find((s) => s.id === id);
    this.setState({
      students: filteredStudents,
      editForm: true,
      id: id,
      firstName: selectedStudent.firstName,
      lastName: selectedStudent.lastName,
      image: selectedStudent.image,
      collegeLogo: selectedStudent.collegeLogo,
      collegeName: selectedStudent.collegeName,
    });
  };

  render() {
    const student = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      image: this.state.image,
      collegeName: this.state.collegeName,
      collegeLogo: this.state.collegeLogo,
    };
    return (
      <div>
        <StudentForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          isvalid={this.state.isvalid}
          student={student}
          editForm={this.state.editForm}
        ></StudentForm>
        <StudentList
          students={this.state.students}
          deleteStudent={this.deleteStudent}
          editStudent={this.editStudent}
        ></StudentList>
      </div>
    );
  }
}
