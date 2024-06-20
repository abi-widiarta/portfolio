import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="p-5 pb-20">
      <h1 className="text-2xl font-semibold">About</h1>
      <div className="flex mt-3 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#53ACFF]"></div>
          <p>Little bit story about me and my journey</p>
        </div>
      </div>

      <span className="block w-full h-[1px] bg-slate-200 mt-6"></span>

      <p className="mt-6 leading-9 text-justify">
        I'm Abi Widiarta from Bali and currently based in Bandung. My journey in web development began in my last year of high school when I first encountered the world of programming. Fascinated by the potential to create and innovate, I
        decided to pursue a degree in Informatics at Telkom University. During my studies, I explored various aspects of web development, but it was the creative and interactive nature of front-end development that truly captivated me.
        Specializing in React and Tailwind CSS, I found great satisfaction in building responsive, visually appealing websites. Additionally, discovering Framer for creating seamless animations allowed me to further enhance user interfaces
        with engaging and dynamic elements.
      </p>
      <p className="mt-6 leading-9 text-justify">
        With a strong foundation in front-end frameworks, I now focus on crafting beautiful, responsive websites that provide an exceptional user experience. My technical skills and creative vision enable me to integrate intelligent
        features into my projects, pushing the boundaries of web design. I am dedicated to staying updated with the latest trends and technologies in front-end development, always striving to deliver innovative and engaging solutions.
      </p>

      <a
        href="/CV.pdf"
        download="CV_I_Wayan_Abi_Widiarta"
        className="flex px-4 py-2 mt-4 space-x-4 font-medium text-gray-600 transition border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 bg-slate-100 w-fit"
      >
        <img className="w-5 aspect-auto" src="/icon-download.svg" alt="" />
        <p>My Resume</p>
      </a>

      <Divider />

      {/* Educations */}
      <div className="flex items-center mt-6 space-x-2">
        <img className="w-8 aspect-auto dark:invert" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold">Educations</h2>
      </div>
      <p className="mt-1 text-gray-600 text-md dark:text-slate-300">My Academic Journey </p>

      <div className="flex mt-8 space-x-8">
        <div className="relative flex w-6">
          <span className="block h-full w-[2px] bg-slate-300 absolute top-0 left-[50%] -translate-x-[50%]"></span>
          <div className="z-20 flex w-6 h-6 rounded-full bg-slate-300 "></div>
        </div>

        <div className="flex items-start pb-16 space-x-8">
          <div className="w-20 overflow-hidden bg-white rounded-lg">
            <img className="w-20 scale-75 aspect-auto" src="/balihati.jpeg" alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Bali Hati International School</h2>
            <p>Senior High School</p>
            <p>2018 - 2021</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="relative flex w-6 ">
          <span className="block h-full w-[2px] bg-gradient-to-b from-slate-300 to-white dark:to-slate-800 absolute top-0 left-[50%] -translate-x-[50%]"></span>
          <div className="z-20 flex w-6 h-6 rounded-full bg-slate-300 "></div>
        </div>

        <div className="flex items-start pb-10 space-x-8">
          <div className="bg-white rounded-lg">
            <img className="w-20 aspect-auto " src="/telkom.png" alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Telkom University</h2>
            <p>Informatics Faculty - Computer Science - GPA : 3.98</p>
            <p>2021 - Present</p>
          </div>
        </div>
      </div>

      <Divider />
      {/* Certificates Projects */}
      <div className="flex items-center mt-6 space-x-2">
        <img className="w-8 aspect-auto dark:invert" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold ">Certificates</h2>
      </div>
      <p className="mt-1 text-gray-600 text-md dark:text-slate-300">Certificates I've acquired</p>

      <div className="flex flex-wrap w-full pt-8 gap-x-8 gap-y-4">
        {/* certificate 1 */}
        <div className="flex items-start w-full p-5 space-x-6 border border-gray-200 rounded-lg">
          <img className="rounded-md w-36" src="sertif-js.png" alt="" />

          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-medium">Belajar Dasar Pemrograman JavaScript</h3>
              <p className="text-gray-600 dark:text-slate-400">Learn the basic of Javascript syntax and concepts</p>
              <p className="text-sm text-gray-600 dark:text-slate-400">Dicoding</p>
            </div>

            <a className="block text-sm transition hover:opacity-70" target="_blank" href="https://www.dicoding.com/certificates/1OP86J7OQXQK">
              Read more
            </a>
          </div>
        </div>

        {/* certificate 2 */}
        <div className="flex items-start w-full p-5 space-x-6 border border-gray-200 rounded-lg">
          <img className="rounded-md w-36" src="sertif-web.png" alt="" />

          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-medium">Belajar Dasar Pemrograman Web</h3>
              <p className="text-gray-600 dark:text-slate-400">Learn the core concepts of web development including tools and best practices</p>
              <p className="text-sm text-gray-600 dark:text-slate-400">Dicoding</p>
            </div>

            <a className="block text-sm transition hover:opacity-70" target="_blank" href="https://www.dicoding.com/certificates/JMZVG1MOOZN9">
              Read more
            </a>
          </div>
        </div>

        {/* certificate 3 */}
        <div className="flex items-start w-full p-5 space-x-6 border border-gray-200 rounded-lg">
          <img className="rounded-md w-36" src="sertif-js.png" alt="" />

          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-medium">Belajar Membuat Front-End Web untuk Pemula</h3>
              <p className="text-gray-600 dark:text-slate-400">Learn the concepts of front-end web development, including DOM manipulation using Javascript</p>
              <p className="text-sm text-gray-600 dark:text-slate-400">Dicoding</p>
            </div>

            <a className="block text-sm transition hover:opacity-70" target="_blank" href="https://www.dicoding.com/certificates/MRZMDWV60ZYQ">
              Read more
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
