import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  const navigate = useNavigate() ; 
  async function handleRegister(user) {
  
    console.log(user);
    //call api to send user information
    let { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      user
    );
    console.log(data);
    if(data.message=="success"){
navigate("/")
    }
    else{

    }
  }

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be more than 3 char")
      .max(10, "Name must be less than 10 char")
      .required("Name is Required"),

    email: Yup.string()
      .email("It is not an email")
      .required("Email is reuired"),
    password: Yup.string()
      .min(6, "Password must be more than 6 char")
      .max(10, "Password must be less than 10 char")
      .required("Password is Required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")] , "repassword and password donot match").required("repassword is required")
   
   ,

    phone: Yup.string()
      .matches(/^[01][0125][0-9]{8}$/, "Phone is not correct")
      .required("phone is Required"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      <div className="mt-3">
        <h1 className="font-bold text-3xl mb-4 text-black">Register</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-sm mx-auto "
        >
          <div className="relative z-0 w-full mb-3 mt-5 group">
            <input
              id="floating_name"
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=""
              required
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_name"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Name
            </label>
          </div>
          {formik.errors.name && formik.touched.name ? (
            <div
              className="flex items-center mb-5 text-sm text-red-800   dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <div>
                <span className="font-medium">{formik.errors.name}</span>
              </div>
            </div>
          ) : null}
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="floating_email"
              type="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=""
              required
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_email"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Email
            </label>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div
              className="flex items-center mb-5 text-sm text-red-800   dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <div>
                <span className="font-medium">{formik.errors.email}</span>
              </div>
            </div>
          ) : null}
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="floating_password"
              type="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=""
              required
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_repassword"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Password
            </label>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div
              className="flex items-center mb-5 text-sm text-red-800   dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <div>
                <span className="font-medium">{formik.errors.password}</span>
              </div>
            </div>
          ) : null}
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="floating_repassword"
              type="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=""
              required
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_phone"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Re-Password
            </label>
          </div>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div
              className="flex items-center mb-5 text-sm text-red-800   dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <div>
                <span className="font-medium">{formik.errors.rePassword}</span>
              </div>
            </div>
          ) : null}
          <div className="relative z-0 w-full mb-5 group">
            <input
              id="floating_phone"
              type="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
              placeholder=""
              required
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="floating_phone"
              className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter Your Phone
            </label>
          </div>
          {formik.errors.phone && formik.touched.phone ? (
            <div
              className="flex items-center mb-5 text-sm text-red-800   dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <div>
                <span className="font-medium">{formik.errors.phone}</span>
              </div>
            </div>
          ) : null}
          <button
            type="submit"
            className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
