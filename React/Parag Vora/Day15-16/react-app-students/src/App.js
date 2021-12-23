import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentOpeartons from './AxiosRequest';
const studobj = new StudentOpeartons();

const client = axios.create({
  baseURL : "http://localhost:8080/",
})

function App() {
  useEffect(()=>
  {
    client.get('/').then((response)=>
    {
      console.log(response.data);
      setStudents(response.data);
    })
  },[])
  
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    image: "",
    collegeName: "",
    collegeLogo: "",
  });

  const [students, setStudents] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [isValid,setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    id: "",
    firstName: "",
    lastName: "",
    image: "",
    collegeName: "",
    collegeLogo: "",
  });

  const validate = {
    id: (id) => idValidation(id),
    firstName: (name) => nameValidation("First Name", name),
    lastName: (name) => nameValidation("Last Name", name),
    image: (image) => imageValidation("Student image", image),
    collegeName: (name) => nameValidation("College Name", name),
    collegeLogo: (image) => imageValidation("College logo", image),
  };

  const idValidation = (id) => {
    if (id === "") {
      return "Id is required";
    }
    return null;
  };

  const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };

  const imageValidation = (fieldName, image) => {
    if (image.length === 0) {
      return `${fieldName} is required`;
    }

    return null;
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "image" || name === "collegeLogo") {
      value = URL.createObjectURL(e.target.files[0]);
    }
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;

    let error = null;

    let tempErrors = errors;

    for (const item in student) {
      error = validate[item](student[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });
    setIsValid(valid);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editForm)
    {
      studobj.editStudent(student.id,student);
    }
    else{
      studobj.addStudent(student);
    }
    let isValidForm = validateForm();
    if (isValidForm) {
      setStudents([...students, { ...student }]);
      setStudent({
        id: "",
        firstName: "",
        lastName: "",
        image: "",
        collegeName: "",
        collegeLogo: "",
      });
      setEditForm(false);
    } else {
      alert("Form is not valid");
    }
  };

  const deleteStudent = (id) => {
    const soretedStudents = students.filter((s) => s.id !== id);
    setStudents(soretedStudents);
    studobj.deleteStudent(id);
  };
  const editStudent = (id) => {
    const filteredStudents = students.filter((s) => s.id !== id);
    const selectedStudent = students.find((s) => s.id === id);
    setStudents(filteredStudents);
    setEditForm(true);
    setStudent({
      id: id,
      firstName: selectedStudent.firstName,
      lastName: selectedStudent.lastName,
      image: selectedStudent.image,
      collegeLogo: selectedStudent.collegeLogo,
      collegeName: selectedStudent.collegeName,
    });
    // this.setState({
    //   students: filteredStudents,
    //   editForm: true,
    //   id: id,
    //   firstName: selectedStudent.firstName,
    //   lastName: selectedStudent.lastName,
    //   image: selectedStudent.image,
    //   collegeLogo: selectedStudent.collegeLogo,
    //   collegeName: selectedStudent.collegeName,
    // });
  };

  return (
    <>
      <StudentForm
        student={{ ...student }}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editForm={editForm}
        isvalid={isValid}
      />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </>
  );
}

export default App;
