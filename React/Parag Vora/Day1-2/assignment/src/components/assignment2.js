import React from "react";

function StudentInfo()
{
    return (
        <div className ='assignment2'>
            <h3>Assignment 2</h3>
            <p>Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo</p>
            <StudentIDCard></StudentIDCard>
        </div>
    )   
}
function StudentIDCard()
{
    return (
        <section className='StuCard'>
            <Image></Image>
            <Personal></Personal>
            <College></College>
        </section>
    )
}

function Image()
{
    return(
        <article className="StuImg">
            <img width="140" src="Assets/IMG_7156.JPG" alt="student Image"></img>
        </article>
    )
}

function Personal()
{
    return(
        <article className='stuPersonal'>
            <p>14089521036941</p>
            <p>Parag Vora</p>
            <p>17/12/1999</p>
        </article>
    )
}

function College()
{
    return(
        <article className='stuCollege'>
            <img width='70' src='Assets/logo.png' alt='college-logo'></img>
            <p className='collegeName'>SLTIET-Rajkot</p>
            <p>Kankot, Near G.E.C, Kalawad Road, Rajkot - 360005</p>
        </article>
    )
}

export default StudentInfo;