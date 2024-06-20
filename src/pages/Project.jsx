import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="p-5 pb-20">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="flex space-x-6 mt-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#53ACFF]"></div>
          <p>Projects I've created</p>
        </div>
      </div>

      <span className="block w-full h-[1px] bg-slate-200 mt-6"></span>

      <div className="w-full pt-8 gap-x-8 gap-y-8 grid grid-cols-2 mb-12">
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

        {/* project 4 */}
        <a target="_blank" href="https://github.com/abi-widiarta/lab-ase" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/project-4.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">ASE LAB Website Profile</h3>
              <p className="text-sm text-gray-500">Redesigned and rebuilt Advance Software Engineering website profile with vanilla HTML and CSS with AOS for animation</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-html.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-css.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-js.svg" alt="" />
            </div>
          </div>
        </a>

        {/* project 5 */}
        <a target="_blank" href="https://github.com/abi-widiarta/picking-item-with-algo" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/project-5.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">Most Optimal Searching Algorithm Visualizer</h3>
              <p className="text-sm text-gray-500">A pixel-game style website visualizer for brute-force, greedy, and dynamic programming search algorithms utilizing vanilla HTML, CSS, and Javascript</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-html.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-css.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-js.svg" alt="" />
            </div>
          </div>
        </a>
      </div>

      <Divider />

      {/* Playground */}
      <a target="_blank" href="https://github.com/abi-widiarta/project-odin-etchASketch" className="flex items-center mt-8 space-x-2">
        <img className="w-8 aspect-auto" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold">Playgrounds</h2>
      </a>
      <p className="mt-1 text-md text-gray-600">Mini project during my learning and exploration journey</p>

      <div className="w-full pt-8  gap-x-8 gap-y-8 grid grid-cols-2">
        {/* pg 1 */}
        <div className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/pg-1.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">Project Odin - Etch a Sketch</h3>
              <p className="text-sm text-gray-500">A project from Project Odin platform about etchASketch utilizing vanilla HTML, CSS, and Javascript for DOM manipulation</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-html.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-css.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-js.svg" alt="" />
            </div>
          </div>
        </div>

        {/* pg 2 */}
        <a href="https://github.com/abi-widiarta/not-linktree" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/pg-2.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">Not LinkTree - Linktree Clone</h3>
              <p className="text-sm text-gray-500">A project inspired by LinkTree to display contacts utilizing HTML, CSS, Vanilla Javascript, and TinyJS for 3D hover effects</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-html.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-css.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-js.svg" alt="" />
            </div>
          </div>
        </a>

        {/* pg 3 */}
        <a target="_blank" href="https://github.com/abi-widiarta/three.js-gsap" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/pg-3.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">Venom Three.Js</h3>
              <p className="text-sm text-gray-500">My first Three.JS website utilizing 3d .gltf assets. Utilizing HTML, CSS, Javascript</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-html.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-css.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-js.svg" alt="" />
            </div>
          </div>
        </a>

        {/* pg 4 */}
        <a href="https://github.com/abi-widiarta/isometric-room-built" target="_blank" className="flex flex-col shadow-lg shadow-slate-100 rounded-lg border-gray-200 border group overflow-hidden">
          <img className="object-cover h-44 w-full group-hover:scale-110 transition-all" src="/pg-4.png" alt="" />
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold mb-2">Isometric Room Three.Js</h3>
              <p className="text-sm text-gray-500">Website with custom 3D model created in blender. Utilizing Three.JS to import 3d model in .gltf format, HTML, CSS and vanilla Javascript</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <img className="w-6 aspect-auto" src="/icon-html.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-css.svg" alt="" />
              <img className="w-6 aspect-auto" src="/icon-js.svg" alt="" />
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};
