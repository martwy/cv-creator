import { useForm } from "react-hook-form";
import CvView from "./CvView";
import { FormValues } from "../utils/types";
import { useState } from "react";

const Form = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const [firstStep, setFirstStep] = useState<boolean>(true);
  const [secondStep, setSecondStep] = useState<boolean>(false);

  function handleClick() {
    setFirstStep(!firstStep);
    setSecondStep(!secondStep);
  }

  const onSubmit = (data: FormValues) => console.log(data);

  const inputs = [
    {
      id: 0,
      label: "First name",
      name: "firstName",
      type: "text",
    },
    {
      id: 1,
      label: "Last name",
      name: "lastName",
      type: "text",
    },
    {
      id: 2,
      label: "Profession",
      name: "job",
      type: "text",
    },
    {
      id: 3,
      label: "Date of birth",
      name: "dateOfBirth",
      type: "date",
    },
    {
      id: 4,
      label: "Country",
      name: "country",
      type: "text",
    },
    {
      id: 5,
      label: "City",
      name: "city",
      type: "text",
    },
    {
      id: 6,
      label: "Phone number",
      name: "phoneNumber",
      type: "number",
    },
    {
      id: 7,
      label: "Email address",
      name: "email",
      type: "text",
    },
  ];

  return (
    <div className="flex">
      <div className="w-1/2 h-screen">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4 mx-3">
              {firstStep ? (
                inputs.map((input, index) => (
                  <div key={index}>
                    <label
                      htmlFor={input.label.toLowerCase()}
                      className="block mb-1 mt-4 text-sm font-medium text-gray-900"
                    >
                      {input.label}
                    </label>
                    <input
                      id={input.label.toLowerCase()}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type={input.type}
                      {...register(input.name as "firstName")}
                    ></input>
                  </div>
                ))
              ) : (
                <div className="flex justify-center my-4">
                  <button onClick={handleClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>{" "}
                  </button>
                </div>
              )}
            </div>
            {firstStep && (
              <div className="flex justify-center my-4">
                <button onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            )}
            {/* <div className="text-center">
              <button
                type="submit"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
              focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2
               dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
                dark:border-gray-700 mt-2"
              >
                Create
              </button>
            </div> */}
          </form>
        </div>
      </div>

      <CvView control={control} />
    </div>
  );
};

export default Form;
