import { MdLanguage } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

export default function Tools() {
  return (
    <div>
      <div className="pb-10 border-t-2 border-gray-200/50">
        <div id="languages" className="flex text-xl pt-20 font-semibold m-5 items-center">
          <MdLanguage className="mx-2" />
          <span>Languages</span>
        </div>
        <div className="md:grid md:grid-cols-3">
          <div className="bg-gray-100 dark:bg-gray-800 relative rounded-lg m-8 p-4">
            <p className="font-bold text-xl my-2">English</p>
            <p className="font-thin">Fluent</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 relative rounded-lg m-8 p-4">
            <p className="font-bold text-xl my-2">Cantonese </p>
            <p className="font-thin">Proficient</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 relative rounded-lg m-8 p-4">
            <p className="font-bold text-xl my-2">Mandarin </p>
            <p className="font-thin">Proficient</p>
          </div>
        </div>
      </div>
      <div className="pb-10 border-t-2 border-gray-200/50">
        <div id="tools" className="flex text-xl pt-20 font-semibold m-5 items-center">
          <VscTools className="mx-2" />
          <span>Tools</span>
        </div>
        <div class="flex justify-between">
          <div className="flex m-5 items-center">
            <FaHtml5 className="mx-2" />
            <p>HTML5</p>
          </div>
          <div className="flex m-5 items-center">
            <FaCss3Alt className="mx-2" />
            <p>CSS3</p>
          </div>
          <div className="flex m-5 items-center">
            <RiJavascriptFill className="mx-2" />
            <p>Javascript</p>
          </div>
          <div className="flex m-5 items-center">
            <FaReact className="mx-2" />
            <p>React</p>
          </div>
          <div className="flex m-5 items-center">
            <RiTailwindCssFill className="mx-2" />
            <p>TailwindCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
