import { IoMailOutline } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-200/50">
      <div className="pt-20 flex text-xl font-semibold m-5 items-center">
        <IoMailOutline className="mx-2" />
        <span>Contact me</span>
      </div>
      <p class="text-xl m-8">
        Currently open for new opportunities or people to share ideas with! For
        any other information about me or my work, feel free to reach out!
      </p>
      <div class="flex m-6 justify-between text-lg">
        <div>
          <p>Contact me at</p>
          <a
            href="mailto:michaelpoonhowan@hotmail.com"
            target="_blank"
            class="underline"
          >
            michaelpoonhowan@hotmail.com
          </a>
        </div>
        <div>
          <p>or find me here</p>
          <a href="https://github.com/lopplopp" target="_blank" class="w-2">
            <FaSquareGithub size={"38px"} />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm font-thin">© 2025 Michael Poon</p>
      </div>
    </div>
  );
}
