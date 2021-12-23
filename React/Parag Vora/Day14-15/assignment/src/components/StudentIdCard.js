import React, { Component } from "react";

export default class StudentIdCard extends Component {
  render() {
    const { student, college } = this.props;
    return (
      <section className="text-center col-md-6 col-lg-4">
        <div className="idCard rounded p-4 mx-auto my-5 bg-white">
          <Image image={student.image}></Image>
          <Personal student={student}></Personal>
          <College college={college}></College>
        </div>
      </section>
    );
  }
}
const Image = (props) => {

    return (
      <article>
        <img
          className="rounded-circle"
          width="140"
          src={props.image}
          alt="student"
        ></img>
      </article>
    );
  };
  
  const Personal = (props) => {
    const { id, firstName, lastName } = props.student;
    return (
      <article className="mt-3">
        <p>{id}</p>
        <p>
          {firstName} {lastName}
        </p>
      </article>
    );
  };
  
  const College = (props) => {
    const { collegeLogo, collegeName } = props.college;
    return (
      <article>
        <img src={collegeLogo} alt="logo" width="70"></img>
        <p className="text-uppercase mt-3">{collegeName}</p>
      </article>
    );
  };
  