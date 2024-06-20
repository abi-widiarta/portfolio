import { useState } from "react";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { motion } from "framer-motion";
import { Contact } from "./pages/Contact";

function App() {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full h-full overflow-x-hidden pt-12">
      <div className="max-w-[1152px] bg-white h-full mx-auto overflow-hidden flex">
        <article className="max-w-[298px] fixed w-full p-5 ">
          <div className="w-full  flex flex-col items-center relative">
            <img className="w-full object-cover h-28 rounded-md" src="/bg.png" alt="" />
            <div className="bg-white rounded-full overflow-hidden w-20 absolute top-14">
              <img src="/profile.png" alt="" />
            </div>
            <h2 className="mt-8 font-semibold">Abi Widiarta</h2>
            <p className="text-sm">front-end web enthuasiast</p>
            <div className="flex gap-2 mt-2">
              <a href="#">
                <img className="aspect-square w-5" src="/icon-ig.png" alt="" />
              </a>
              <a href="#">
                <img className="aspect-square w-5" src="/icon-github.png" alt="" />
              </a>
              <a href="#">
                <img className="aspect-square w-5" src="/icon-linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <span className="block w-full h-[1px] bg-slate-300 mt-4"></span>

          <div className="pt-4 px-2 space-y-2">
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setActive("Home")} className={`flex items-center px-4 py-3 space-x-4 rounded-lg transition ${active === "Home" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 aspect-auto" src="/icon-home.svg" alt="" />
              <p className="font-medium">Home</p>
            </motion.a>
            <a onClick={() => setActive("About")} className={`flex items-center px-4 py-3 space-x-4 rounded-lg transition ${active === "About" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 aspect-auto" src="/icon-user.svg" alt="" />
              <p className="font-medium">About</p>
            </a>
            <a onClick={() => setActive("Projects")} className={`flex items-center px-4 py-3 space-x-4 rounded-lg transition ${active === "Projects" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 aspect-auto" src="/icon-project.svg" alt="" />
              <p className="font-medium">Projects</p>
            </a>
            <a onClick={() => setActive("Contact")} className={`flex items-center px-4 py-3 space-x-4 rounded-lg transition ${active === "Contact" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 scale-125 aspect-auto" src="/icon-contact.svg" alt="" />
              <p className="font-medium">Contact</p>
            </a>
          </div>
        </article>

        <div className="pl-[298px] overflow-x-hidden">
          {active === "Home" && <Home />}
          {active === "About" && <About />}
          {active === "Projects" && <Project />}
          {active === "Contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default App;
