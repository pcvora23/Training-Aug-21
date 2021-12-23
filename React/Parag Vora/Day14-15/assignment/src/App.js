import React, { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentIdCardsList from "./components/StudentList";

function App() {
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    image: "",
    collegeName: "",
    collegeLogo: "",
  });

  const [students, setStudents] = useState([]);

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

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    } else {
      alert("Form is not valid");
    }
  };

  return (
    <>
      <StudentForm
        student={{ ...student }}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StudentIdCardsList students={students} />
    </>
  );
}

export default App;
