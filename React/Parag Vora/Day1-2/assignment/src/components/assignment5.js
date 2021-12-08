// Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent.

import React from "react";
const students = [
  {
    studImage: "Assets/IMG_7156.JPG",
    ID: "140893104578",
    FirstName: "Parag",
    LastName: "Vora",
    Dob: "17/12/1999",
  },
  {
    studImage: "Assets/IMG_7156.JPG",
    ID: "170890104125",
    FirstName: "brijen",
    LastName: "sadariya",
    Dob: "12/01/2000",
  },
  {
    studImage: "Assets/IMG_7156.JPG",
    ID: "170890104126",
    FirstName: "jeel",
    LastName: "vadodariya",
    Dob: "02/08/2001",
  },
];

const college = {
  collegeLogo: "Assets/logo.png",
  collegeName: "SLTIET-Rajkot",
  CollegeAddress: "Kankot, Near G.E.C, Kalawad Road, Rajkot - 360005",
};

function Assignment5() {
  var StudentList = students.map((s) => (
    <StudentIdCard key={s.ID} student={s} college={college}></StudentIdCard>
  ));

  return (
    <div className="container bg-light rounded border-primary mt-5 p-5 text-center">
      <h1 className="display-4">Assignment5</h1>
      <p>
        Create Students Array of 3 students with field
        Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and
        pass it as Object to the StudentIDCardComponent.
      </p>
      <section>{StudentList}</section>
    </div>
  );
}

function StudentIdCard(props) {
  const { student, college } = props;
  return (
    <section className="StuCard">
      <Image image={student.studImage}></Image>
      <Personal student={student}></Personal>
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

export default Assignment5;
