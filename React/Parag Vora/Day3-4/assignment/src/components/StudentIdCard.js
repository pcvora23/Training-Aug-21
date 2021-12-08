import React from "react";

function StudentIDCard(props) {
  const { student, college, children } = props;
  return (
    <section className="text-center col-md-4">
      <div className="IdCard rounded p-4 mx-auto my-5 bg-white">
        <Image image={student.studImage}></Image>
        <Personal student={student}></Personal>
        {children}
        <College college={college}></College>
      </div>
    </section>
  );
}

const Image = (props) => {
  return (
    <article>
      <img className ='rounded-circle' width='140' src={props.image} alt='student'>
      </img>
    </article>
  );
};

const Personal = (props) =>
{
    const {ID,FirstName,LastName,Dob} = props.student;
    return(
        <article className='mt-3'>
            <p>{ID}</p>
            <p>{FirstName} {LastName}</p>
            <p>{Dob}</p>
        </article>
    )
}

const College =(props)=>
{
    const {collegeLogo,collegeName,CollegeAddress} = props.college;
    return(
        <article>
            <img className='mb-3' width='70' src={collegeLogo} alt='logo'></img>
            <p className='text-uppercase'>{collegeName}</p>
            <p>{CollegeAddress}</p>
        </article>
    )
}
export default StudentIDCard;