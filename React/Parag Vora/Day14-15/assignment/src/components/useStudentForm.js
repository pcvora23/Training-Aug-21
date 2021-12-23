import { useState } from "react";

export const useStudentForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e) => {
      let name = e.target.name;
      let value = e.target.value;

      if (name === "image" || name === "collegeLogo") {
        value = URL.createObjectURL(e.target.files[0]);
      }
      setValues({
        ...values,
        [name]: value,
      });
    },
  ];
};