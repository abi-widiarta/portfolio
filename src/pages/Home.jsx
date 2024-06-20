import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="p-5 overflow-hidden pb-20">
      <h1 className="text-2xl font-semibold">Hi There!, I'm Abi Widiarta</h1>
      <div className="flex space-x-6 mt-3">
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
        <img className="w-8 aspect-auto" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold">Tech Stacks</h2>
      </div>
      <p className="mt-1 text-md text-gray-600">Programming Languages and Tools I Used</p>
      <div className="flex flex-wrap gap-x-6 gap-y-8 pt-8 pb-4">
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-html.svg" alt="" />
          <p className="font-medium">HTML</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-css.svg" alt="" />
          <p className="font-medium">CSS</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-js.svg" alt="" />
          <p className="font-medium">Javascript</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-react.svg" alt="" />
          <p className="font-medium">React</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-tailwind.svg" alt="" />
          <p className="font-medium">TailwindCSS</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-bootstrap.svg" alt="" />
          <p className="font-medium">Bootstrap</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-redux.svg" alt="" />
          <p className="font-medium">Redux</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-laravel.svg" alt="" />
          <p className="font-medium">Laravel</p>
        </div>
        <div className="flex items-center space-x-2">
          <img className="w-6 aspect-auto rounded-md" src="/icon-framer.svg" alt="" />
          <p className="font-medium">Framer Motion</p>
        </div>
      </div>

      <Divider />
      {/* Featured Projects */}
      <div className="flex items-center mt-6 space-x-2">
        <img className="w-8 aspect-auto" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold">Featured Projects</h2>
      </div>
      <p className="mt-1 text-md text-gray-600">Projects I've created</p>

      <div className="w-full pt-8  gap-x-8 gap-y-8 grid grid-cols-2">
        {/* project 1 */}
        <a href="https://github.com/abi-widiarta/bookrent_laravel" target="_blank" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/project-2.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">OpenLibrary Book Rent</h3>
              <p className="text-sm text-gray-500">Website for book renting system in telkom university utilizing Laravel, Tailwind CSS and responsive design</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-laravel.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-tailwind.svg" alt="" />
            </div>
          </div>
        </a>

        {/* project 2 */}
        <a href="https://github.com/abi-widiarta/rpl-mytelkomedika" target="_blank" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/project-1.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">MyTelkomedika</h3>
              <p className="text-sm text-gray-500">Information system website for telkomedika clinic in Telkom University with Laravel and TailwindCSS</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-laravel.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-tailwind.svg" alt="" />
            </div>
          </div>
        </a>

        {/* project 3 */}
        <a target="_blank" href="https://github.com/abi-widiarta/react-with-pokeapi" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/project-3.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">Pokemon PokeAPI</h3>
              <p className="text-sm text-gray-500">Website that fetched data from PokeAPI with cart system using redux for state management</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-react.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-tailwind.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-redux.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-framer.svg" alt="" />
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};
