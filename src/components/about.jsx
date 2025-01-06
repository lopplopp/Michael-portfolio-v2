import {
  IoPersonCircleOutline,
  IoSchoolOutline,
  IoDesktopOutline,
} from "react-icons/io5";

export default function About() {
  return (
    <div>
      <div className="pb-10 border-t-2 border-gray-200/50">
        <div id="about" className="flex text-xl font-semibold pt-20 m-5 items-center">
          <IoPersonCircleOutline className="mx-2" />
          <span>About me</span>
        </div>
        <p className="mx-8 text-lg">
          My name is Michael Poon, and I’m an aspiring frontend web developer
          based in Hong Kong. My interest in technology began during my
          university years in Toronto, where I majored in Information
          Technology. Although I initially pursued a different career path after
          graduation, my passion for web development was reignited in 2023 when
          I returned to Hong Kong. Since then, I’ve been dedicated to
          self-learning through The Odin Project and building personal projects.
          Today, I’ve equipped myself with essential skills and have created
          numerous projects that demonstrate my growth and commitment to the
          field.
        </p>
      </div>
      <div className="pb-10 border-t-2 border-gray-200/50">
        <div id="education" className="pt-20 flex text-xl font-semibold m-5 items-center">
          <IoSchoolOutline className="mx-2" />
          <span>Education</span>
        </div>
        <div className="px-6 mx-9 border-l-2 relative">
          <div className="h-3 w-3 dark:bg-gray-200 bg-black rounded-full top-1.5 -left-[7px] absolute"></div>
          <span className="text-sm font-thin">2011-2017</span>
          <p className="text-lg font-bold">
            Bachelor of Commerce in Business Technology Management{" "}
          </p>
          <p>Ryanson University</p>
        </div>
      </div>
      <div className="pb-10 border-t-2 border-gray-200/50">
        <div id="experience" className="pt-20 flex text-xl font-semibold m-5 items-center">
          <IoDesktopOutline className="mx-2" />
          <span>Working Experience</span>
        </div>
        <div className="px-6 mx-9 border-l-2 relative">
          <div className="h-3 w-3 dark:bg-gray-200 bg-black rounded-full top-1.5 -left-[7px] absolute"></div>
          <span className="text-sm font-thin">May 2021 - Jun 2023</span>
          <p className="text-lg font-bold">
            Sales Administrator & Logistics Specialist,{" "}
            <span className="text-base font-semibold">
              Orientek Scaffolding
            </span>
          </p>
          <p className="my-3">
            Managed long-term client relationships and tailored product and
            pricing lists to improve ordering efficiency for over 30 clients. I
            led the implementation of Microsoft Teams to enhance internal
            communication and workflow, served as a bridge between overseas
            vendors and customers, and streamlined shipment document management
            through a centralized system.
          </p>

          <div className="relative">
            <div className="h-3 w-3 -left-[31px] top-2 dark:bg-gray-200 bg-black rounded-full absolute"></div>
            <span className="text-sm font-thin">Sept 2018 - May 2021</span>
            <p className="text-lg font-bold">
              Product Pricing Analyst,{" "}
              <span className="text-base font-semibold">Discus Supply Co</span>
            </p>
            <p className="my-3">
              Conducted competitive pricing analysis to enhance market
              positioning, optimized inventory management for over 50 clients,
              maintained efficient vendor and customer communication, and
              supported the sales team with pricing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
