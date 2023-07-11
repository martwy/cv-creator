import { useWatch, Control } from "react-hook-form";
import { FormValues } from "../utils/types";

const CvView = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    control,
  });

  const {
    firstName,
    lastName,
    job,
    dateOfBirth,
    country,
    city,
    phoneNumber,
    email,
  } = formValues;
  return (
    <div
      id="container"
      className="w-1/2 border-l-2 border-gray-900 rounded-l-lg 
    shadow-inner flex flex-row-reverse"
    >
      <div id="mainInfo">
        <div className="flex gap-2 text-3xl font-bold mt-10 ml-10">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <div className="ml-10 text-xl">
          <span>{job}</span>
        </div>
        <div className="mx-10 mt-3 text-sm text-gray-500">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            culpa molestiae omnis nostrum. Praesentium, molestias debitis, in et
            animi ipsa repellat fuga veritatis inventore, assumenda maxime
            explicabo eum sequi provident.
          </span>
        </div>
        <div
          id="experience"
          className="text-2xl font-bold border-b-2 border-gray-800 mt-4 mx-10"
        >
          Experience
        </div>
        <div
          id="education"
          className="text-2xl font-bold border-b-2 border-gray-800 mt-4 mx-10"
        >
          Education
        </div>
        <div
          id="courses"
          className="text-2xl font-bold border-b-2 border-gray-800 mt-4 mx-10"
        >
          Courses
        </div>
      </div>
      <div id="contact" className="bg-gray-800 text-white p-6 pr-20">
        <div className="text-2xl font-bold border-b-2 border-white">
          <span>Contact</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="mt-4">
            <h1 className="font-bold">Date of birth</h1>
            <span className="text-sm">{dateOfBirth}</span>
          </div>
          <div className="">
            <h1 className="font-bold">Country</h1>

            <span className="text-sm">{country}</span>
          </div>
          <div className="">
            <h1 className="font-bold">City</h1>

            <span className="text-sm">{city}</span>
          </div>
          <div className="">
            <h1 className="font-bold">Phone</h1>

            <span className="text-sm">{phoneNumber}</span>
          </div>
          <div className="">
            <h1 className="font-bold">Email</h1>

            <span className="text-sm">{email}</span>
          </div>
        </div>
        <div
          id="coreStack"
          className="text-2xl font-bold border-b-2 border-white mt-2"
        >
          Core stack
        </div>
        <div
          id="lang"
          className="text-2xl font-bold border-b-2 border-white mt-2"
        >
          Language
        </div>
      </div>
    </div>
  );
};

export default CvView;
