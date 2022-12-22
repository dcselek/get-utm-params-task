import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { ErrorMessage } from "@hookform/error-message";
import 'react-phone-number-input/style.css';
import { useSearchParams, useNavigate } from 'react-router-dom';

const isValidEmail = email => {
  // eslint-disable-next-line no-useless-escape
  if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  ) === true) {
    return true
  } else {
    return false
  }
}

function Form() {
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let utmSource = "";
  let utmMedium = "";
  let utmTerm = "";
  const onSubmit = (data) => {
    utmSource = searchParams.get("utm_source");
    utmMedium = searchParams.get("utm_medium");
    utmTerm = searchParams.get("utm_term");
    
    localStorage.setItem("utm_source", utmSource);
    localStorage.setItem("utm_medium", utmMedium);
    localStorage.setItem("utm_term", utmTerm);

    navigate("/thanks", { state: data });
  };

  return (
    <div className="bg-white shadow-md w-1/5 rounded px-8 pt-6 pb-8 mb-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
          <input placeholder="Enter your full name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("fullName", { required: true })} />
          {errors.fullName && <span className="text-red-500 text-xs italic font-semibold">This field is required</span>}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "This field is required", validate: (value) => isValidEmail(value) || "Invalid email address" }}
            render={({ field: { onChange, value } }) => (
              <input
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter email"
                id="email"
              />)}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <span className="text-red-500 text-xs italic font-semibold">{message}</span>}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "This field is required", validate: (value) => isValidPhoneNumber(value) || "Invalid phone number" }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="TR"
                international
                placeholder="Enter phone number"
                id="phone-number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />)}
          />
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ message }) => <span className="text-red-500 text-xs italic font-semibold">{message}</span>}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
