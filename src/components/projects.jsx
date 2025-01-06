import { FaRegClipboard } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="pb-10 border-t-2 border-gray-200/50">
      <div id="projects" className="flex pt-20 text-xl font-semibold m-5 items-center">
        <FaRegClipboard className="mx-2" />
        <span>Personal Projects</span>
      </div>
      <div className="md:grid md:grid-cols-2">
        <div className="bg-gray-100 dark:bg-gray-800 relative rounded-lg m-8 p-4">
          <p className="text-xl font-bold my-2">Anime Vault App</p>
          <p className="pb-12">
            Explore and discover detailed information on anime from both current
            and past seasons. The Anime Vault allows users to browse seasonal
            anime releases, view detailed descriptions, and access key
            information such as genres, ratings and characters. Built with React
            and styled with TailwindCSS, this application ensures a responsive
            and visually appealing user experience. The app fetches anime data
            by integrating with the Jikan API, a RESTful API for MyAnimeList.
          </p>
          <a href="https://lopplopp.github.io/anime-vault/" target="_blank">
            <button className="text-white absolute bottom-3 right-5 font-semibold p-2 bg-purple-400 rounded-lg">
              View Project
            </button>
          </a>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 relative rounded-lg m-8 p-4">
          <p className="text-xl font-bold my-2">HoloStream</p>
          <p className="pb-12">
            Holostream is a website that tracks current and upcoming livestreams
            of the Hololive VTuber group on YouTube. Built with React and styled
            using CSS and Tailwind, it fetches data from the Holodex API to
            display the relevant information based on user preferences.
          </p>
          <a href="https://holostream.netlify.app/" target="_blank">
            <button className="text-white absolute bottom-3 right-5 font-semibold p-2 bg-purple-400 rounded-lg">
              View Project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
