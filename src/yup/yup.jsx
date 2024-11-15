import * as yup from "yup";

export const employeeSchema = yup.object().shape({
  fullName: yup.string().trim().required("Full Name is Required"),
  email: yup
  .string()
  .trim()
  .email("Invalid email format")
  .required("Email is required"),
  phone: yup
  .string()
  .trim()
  .length(10, "Phone number must be exactly 10 digits")
  .required("Phone is Required"),
  image: yup
    .mixed()
    .required("Image is Required")
    .test("fileType", "Unsupported file format, onlye JPEG and JPG are allowed", (value) => {
      return (
        value &&
        [
          "image/jpeg",
          "image/jpg",
        ].includes(value.type)
      );
    })
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5 * 1024 * 1024;
    }),
  age: yup.string().trim().required("Age is Required"),
  salary: yup.number().required("Salary is Required"),
});




export const updateEmployeeSchema = yup.object().shape({
  fullName: yup.string().trim().required("Full Name is Required"),
  email: yup
  .string()
  .trim()
  .email("Invalid email format")
  .required("Email is required"),
  phone: yup
  .string()
  .trim()
  .length(10, "Phone number must be exactly 10 digits")
  .required("Phone is Required"),
  image: yup
  .mixed()
  .nullable() 
  .test(
    "fileType",
    "Unsupported file format, only JPEG and JPG are allowed",
    (value) => {
      if (value === null) return true; 
      return ["image/jpeg", "image/jpg"].includes(value.type); 
    }
  ),

  age: yup.string().trim().required("Age is Required"),
  salary: yup.number().required("Salary is Required"),
});
