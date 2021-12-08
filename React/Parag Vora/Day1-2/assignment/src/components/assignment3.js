import React from "react";

// Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component

const Student = {
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

function dynamicStudInfo() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <p>
        Store above example info javascript variable and then display
        dynamically, Display FullName variable in respective Component
      </p>
      <StudentIdCard student={Student} college={college}></StudentIdCard>
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
            <img width="140" src={props.Image} alt="student Image"></img>
        </article>
    )
}

function Personal(props)
{
    const {ID,FirstName,LastName,Dob} =props.student;
    return(
        <article className='stuPersonal'>
            <p>{ID}</p>
            <p>{FirstName}{LastName}</p>
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



export default dynamicStudInfo;
