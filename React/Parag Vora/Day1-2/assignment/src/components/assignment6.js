// While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. Access it in the StudentID Card Component with Children props.

import React from "react";

const Student1 = {
  studImage: "Assets/IMG_7156.JPG",
  ID: "140893104578",
  FirstName: "Parag",
  LastName: "Vora",
  Dob: "17/12/1999",
};

const college = {
  collegeLogo: "Assets/logo.png",
  collegeName: "SLTIET-Rajkot",
  CollegeAddress: "Kankot, Near G.E.C, Kalawad Road, Rajkot - 360005",
};

function Assignment6() {
  return (
    <div className="container bg-light rounded border-primary mt-5 p-5 text-center">
      <h1 className="display-4">Assignment6</h1>
      <p>
        While calling StudentID Component in the app Component pass one{" "}
        <p>Student Details</p> as children. Access it in the StudentID Card
        Component with Children props.
      </p>
      <StudentIdCard student={Student1} college={college}>
          <h4>Student Info</h4>
          <h4>College Info</h4>
      </StudentIdCard>
    </div>
  );
}

function StudentIdCard(props) {
    const { student, college,children } = props;
    return (
      <section className="StuCard">
        <Image image={student.studImage}></Image>
        {children[0]}
        <Personal student={student}></Personal>
        {children[1]}
        <College college={college}></College>
      </section>
    );
  }

  function Image(props) {
    return (
      <article className="StuImg">
        <img width="140" src={props.image} alt="student Image"></img>
      </article>
    );
  }
  
  function Personal(props) {
    const { ID, FirstName, LastName, Dob } = props.student;
    return (
      <article className="stuPersonal">
        <p>{ID}</p>
        <p>
          {FirstName} {LastName}
        </p>
        <p>Dob:{Dob}</p>
      </article>
    );
  }
  
  function College(props) {
    const { collegeLogo, collegeName, CollegeAddress } = props.college;
    return (
      <article className="stuCollege">
        <img width="70" src={collegeLogo}></img>
        <p className="collegeName">{collegeName}</p>
        <p>{CollegeAddress}</p>
      </article>
    );
  }
  
export default Assignment6;
