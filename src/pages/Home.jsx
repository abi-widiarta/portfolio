import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} className="p-5 pb-20 overflow-hidden">
      <h1 className="text-2xl font-semibold">Hi There!, I'm Abi Widiarta</h1>
      <div className="flex mt-3 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="relative block mr-2">
            <div className="w-2 h-2 -top-[4px] absolute rounded-full bg-[#00FF94]"></div>
            <div className="w-2 h-2 -top-[4px] absolute rounded-full animate-ping bg-[#00FF94]"></div>
          </div>
          <p>Open to work</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#53ACFF]"></div>
          <p>Based in Bandung</p>
        </div>
      </div>
      <p className="mt-6 leading-9 text-justify">
        An informatics student at Telkom University with a massive interest in web applications focusing on front-end web development. I have hands-on experience in building websites using Laravel web frameworks, Bootstrap, and Tailwind CSS
        for efficient web development. Additionally, I am experienced in building responsive javascript based single page applications utilizing well known libraries primarily react with redux toolkit for global state management
      </p>

      <Divider />

      {/* Tech Stacks */}
      <div className="flex items-center mt-6 space-x-2">
        <img className="w-8 aspect-auto dark:invert" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold">Tech Stacks</h2>
      </div>
      <p className="mt-1 text-gray-600 text-md dark:text-slate-300">Programming Languages and Tools I Used</p>
      <div className="flex flex-wrap pt-8 pb-4 gap-x-6 gap-y-8">
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-html.svg" alt="" />
          <p className="font-medium">HTML</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-css.svg" alt="" />
          <p className="font-medium">CSS</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-js.svg" alt="" />
          <p className="font-medium">Javascript</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-react.svg" alt="" />
          <p className="font-medium">React</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-tailwind.svg" alt="" />
          <p className="font-medium">TailwindCSS</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-bootstrap.svg" alt="" />
          <p className="font-medium">Bootstrap</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-redux.svg" alt="" />
          <p className="font-medium">Redux</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-laravel.svg" alt="" />
          <p className="font-medium">Laravel</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 rounded-md aspect-auto" src="/icon-framer.svg" alt="" />
          <p className="font-medium">Framer Motion</p>
        </div>
      </div>

      <Divider />
      {/* Featured Projects */}
      <div className="flex items-center mt-6 space-x-2">
        <img className="w-8 aspect-auto dark:invert" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold ">Featured Projects</h2>
      </div>
      <p className="mt-1 text-gray-600 text-md dark:text-slate-300">Projects I've created</p>

      <div className="grid w-full grid-cols-2 pt-8 gap-x-8 gap-y-8">
        {/* project 1 */}
        <a href="https://github.com/abi-widiarta/bookrent_laravel" target="_blank" className="flex flex-col overflow-hidden border border-gray-200 rounded-lg shadow-lg shadow-slate-100 group dark:shadow-slate-800 dark:border-slate-700">
          <img className="object-cover w-full transition-all h-44 group-hover:scale-110" src="/project-2.png" alt="" />
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <h3 className="mb-2 font-semibold">OpenLibrary Book Rent</h3>
              <p className="text-sm text-gray-500 dark:text-slate-300">Website for book renting system in telkom university utilizing Laravel, Tailwind CSS and responsive design</p>
            </div>

            <div className="flex mt-6 space-x-4">
              <img className="w-6 aspect-auto" src="/icon-laravel.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-tailwind.svg" alt="" />
            </div>
          </div>
        </a>

        {/* project 2 */}
        <a href="https://github.com/abi-widiarta/rpl-mytelkomedika" target="_blank" className="flex flex-col overflow-hidden border border-gray-200 rounded-lg shadow-lg shadow-slate-100 group dark:shadow-slate-800 dark:border-slate-700">
          <img className="object-cover w-full transition-all h-44 group-hover:scale-110" src="/project-1.png" alt="" />
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <h3 className="mb-2 font-semibold">MyTelkomedika</h3>
              <p className="text-sm text-gray-500 dark:text-slate-300">Information system website for telkomedika clinic in Telkom University with Laravel and TailwindCSS</p>
            </div>

            <div className="flex mt-6 space-x-4">
              <img className="w-6 aspect-auto" src="/icon-laravel.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-tailwind.svg" alt="" />
            </div>
          </div>
        </a>

        {/* project 3 */}
        <a target="_blank" href="https://github.com/abi-widiarta/react-with-pokeapi" className="flex flex-col overflow-hidden border border-gray-200 rounded-lg shadow-lg shadow-slate-100 group dark:shadow-slate-800 dark:border-slate-700">
          <img className="object-cover w-full transition-all h-44 group-hover:scale-110" src="/project-3.png" alt="" />
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <h3 className="mb-2 font-semibold">Pokemon PokeAPI</h3>
              <p className="text-sm text-gray-500 dark:text-slate-300">Website that fetched data from PokeAPI with cart system using redux for state management</p>
            </div>

            <div className="flex mt-6 space-x-4">
              <img className="w-6 aspect-auto" src="/icon-react.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-tailwind.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-redux.svg" alt="" />
              <img className="w-6 aspect-auto dark:invert" src="/icon-framer.svg" alt="" />
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};
