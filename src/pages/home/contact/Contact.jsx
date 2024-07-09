/* eslint-disable no-unused-vars */
import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      {/* <h1 className="text-center lg:p-10 lg:pt-0 text-2xl">Contact</h1> */}
      <section className="lg:py-6 dark:text-white text-blue-950">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div data-aos="fade-down">
            <div className="lg:py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold lg:text-start text-center">
                Get in touch
              </h1>
              {/* <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p> */}
              <div className="space-y-4 lg:pt-5 pt-2 lg:text-start text-center">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Chittagong , Bangladesh</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>01851332292</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>tahid.cse@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <Form />
          </div>
          {/* <form
            noValidate=""
            className="flex flex-col lg:py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className=" px-2 py-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className=" px-2 py-2 block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
                spellCheck="false"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-white dark:text-blue-700 focus:ri hover:ri"
            >
              Submit
            </button>
          </form> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
