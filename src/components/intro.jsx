import {
  IoLocationOutline,
  IoCalendarClearOutline,
  IoSchoolOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import resume from "../files/resume.pdf";

export default function Intro() {
  return (
    <div className="flex border-b-2 border-gray-200/50 flex-col pt-28 h-screen items-center">
      <p className="sm:text-5xl text-3xl font-extrabold mt-20 mb-10 mx-6">
        Hi, I'm Michael Poon
      </p>
      <p className="sm:text-7xl text-6xl font-extrabold mb-auto mx-6">
        Frontend web developer
      </p>
      <div className="flex text-base sm:text-xl">
        <div className="flex m-1 sm:m-4 justify-center items-center">
          <IoLocationOutline className="mx-2" />
          <span>Hong Kong</span>
        </div>
        <div className="flex m-1 sm:m-4 justify-center items-center">
          <IoCalendarClearOutline className="mx-2" />
          <span>31 Years</span>
        </div>
        <div className="flex m-1 sm:m-4 justify-center items-center">
          <IoSchoolOutline className="mx-2" />
          <span>Bachelor of Commerce</span>
        </div>
      </div>
      <a href={resume} download="Michael's resume" target="_blank">
        <button className="p-2 transition-all duration-200 mb-5 flex font-semibold justify-center items-center text-md bg-gray-200 rounded-lg dark:text-white dark:bg-black">
          <IoDownloadOutline className="mx-1" />
          Download Resume
        </button>
      </a>
    </div>
  );
}
