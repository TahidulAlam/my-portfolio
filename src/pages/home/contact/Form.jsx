// eslint-disable-next-line no-unused-vars
import React from "react";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "./Style.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_ql9cbv5", "template_1d4a3wr", data, "LyeAN-TelrbzPufAT")
      .then((response) => {
        console.log("sucsess", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("Try again", err);
      });
  };
  const formSuccess = () => {
    toast("Thanks for Submitting");
    document.getElementById("queryForm".reset());
  };
  return (
    <div className="query-form">
      <ToastContainer />
      <form
        id="queryForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:py-6 py-2 lg:space-y-6 space-y-2 md:py-0 md:px-6 dark:text-white text-blue-950"
      >
        <div className="grid grid-cols-2 gap-2">
          <level className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="from_name"
              className=" px-2 py-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri text-[#161D2D]"
              placeholder="Name"
              {...register("from_name", {
                required: "Name is required",
              })}
            />
            {errors.from_name?.message && (
              <p className="errors">{errors.from_name?.message}</p>
            )}
          </level>

          <level className="block">
            <span className="mb-1">Email</span>
            <input
              type="text"
              name="reply_to"
              className=" px-2 py-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri text-[#161D2D]"
              placeholder="Email"
              {...register("reply_to", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.reply_to?.message && (
              <p className="errors">{errors.reply_to?.message}</p>
            )}
          </level>
        </div>

        <label className="block">
          <span className="mb-1">Subject</span>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className=" px-2 py-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri text-[#161D2D]"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
          />
          {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </label>
        <lebel className="block">
          <span className="mb-1">Message</span>
          <textarea
            // className="textarea"
            name="message"
            rows="3"
            className="textarea block w-full rounded-md focus:ring focus:ri focus:ri text-[#161D2D]"
            placeholder="Your message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 20 characters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed",
              },
            })}
          />
          {errors.message?.message && (
            <p className="errors">{errors.message?.message}</p>
          )}
        </lebel>
        <button
          type="submit"
          className="btn  bg-white px-10 text-blue-700 font-semibold "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
