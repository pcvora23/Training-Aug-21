import React from "react";

const Student1 = {
  studImage: "Assets/IMG_7156.JPG",
  ID: "140893104578",
  FirstName: "Parag",
  LastName: "Vora",
  Dob: "17/12/1999",
};
const Student2 = {
  studImage: "Assets/IMG_7156.JPG",
  ID: "170890104125",
  FirstName: "brijen",
  LastName: "sadariya",
  Dob: "12/01/2000",
};
const Student3 = {
  studImage: "Assets/IMG_7156.JPG",
  ID: "170890104126",
  FirstName: "jeel",
  LastName: "vadodariya",
  Dob: "02/08/2001",
};

const college = {
  collegeLogo: "Assets/logo.png",
  collegeName: "SLTIET-Rajkot",
  CollegeAddress: "Kankot, Near G.E.C, Kalawad Road, Rajkot - 360005",
};

function Assignment4() {
  return (
    <div className='assignment4'>
      <h3 className="display-6">Assignment 4</h3>
      <p>
        Call StudentID Card component 3 times and pass different student data
        using props.
      </p>
      <StudentIdCard student={Student1} college={college}></StudentIdCard>
      <StudentIdCard student={Student2} college={college}></StudentIdCard>
      <StudentIdCard student={Student3} college={college}></StudentIdCard>
    </div>
  );
}

function StudentIdCard(props) {
  const { student, college } = props;
  return (
    <section className='StuCard'>
      <Image image ={student.studImage}></Image>
      <Personal student ={student}></Personal>
      <College college ={college}></College>
    </section>
  );
}
function Image(props)
{
    return(
        <article className="StuImg">
            <img width="140" src={props.image} alt="student Image"></img>
        </article>
    )
}

function Personal(props)
{
    const {ID,FirstName,LastName,Dob} =props.student;
    return(
        <article className='stuPersonal'>
            <p>{ID}</p>
            <p>{FirstName} {LastName}</p>
            <p>Dob:{Dob}</p>
        </article>
    )
}

function College(props)
{
    const {collegeLogo,collegeName,CollegeAddress} = props.college;
    return(
        <article className='stuCollege'>
            <img width='70' src={collegeLogo}></img>
            <p className='collegeName'>{collegeName}</p>
            <p>{CollegeAddress}</p>
        </article>
    )
}
export default Assignment4;
