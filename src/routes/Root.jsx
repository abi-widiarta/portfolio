import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Root = () => {
  let { pathname } = useLocation();

  return (
    <div className="w-full h-full pt-12 overflow-x-hidden">
      <div className="max-w-[1152px] bg-white h-full mx-auto overflow-hidden flex">
        <article className="max-w-[298px] fixed w-full p-5 ">
          <div className="relative flex flex-col items-center w-full">
            <img className="object-cover w-full rounded-md shadow-lg h-28 shadow-slate-200" src="/bg-light.svg" alt="" />
            <div className="absolute w-20  bg-[#EDAE9B]/60 backdrop-blur-sm  transition border-4 border-white rounded-full shadow-lg top-14 shadow-slate-200">
              <img draggable="false" className="transition hover:scale-110 hover:-translate-y-[4px] rounded-full hover:rotate-2  hover:drop-shadow-sm hover:drop-shadow- " src="/profile.png" alt="" />
            </div>
            <h2 className="mt-8 font-semibold">Abi Widiarta</h2>
            <p className="text-sm">front-end web enthuasiast</p>
            <div className="flex gap-2 mt-2">
              <a className="transition duration-150 hover:rotate-12" target="_blank" href="https://www.instagram.com/abi.widiarta/">
                <img className="w-5 aspect-square" src="/icon-ig.png" alt="" />
              </a>
              <a className="transition duration-150 hover:rotate-12" target="_blank" href="https://github.com/abi-widiarta">
                <img className="w-5 aspect-square" src="/icon-github.png" alt="" />
              </a>
              <a className="transition duration-150 hover:rotate-12" target="_blank" href="https://www.linkedin.com/in/abi-widiarta/">
                <img className="w-5 aspect-square" src="/icon-linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <span className="block w-full h-[1px] bg-slate-300 mt-4"></span>

          <div className="px-2 pt-4 space-y-2">
            <Link to={"/home"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/home" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 transition aspect-auto group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5" src="/icon-home.svg" alt="" />
              <p className="font-medium transition-all group-hover:tracking-[0.15rem]">Home</p>
            </Link>
            <Link to={"/about"} className={`flex hover:bg-slate-50 group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/about" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 transition aspect-auto group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5" src="/icon-user.svg" alt="" />
              <p className="font-medium transition-all group-hover:tracking-[0.15rem]">About</p>
            </Link>
            <Link to={"/projects"} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/projects" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 transition aspect-auto group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5" src="/icon-project.svg" alt="" />
              <p className="font-medium transition-all group-hover:tracking-[0.15rem]">Projects</p>
            </Link>
            <Link to={"/contact"} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/contact" ? "bg-slate-100" : ""}`} href="#">
              <img className="w-5 transition scale-125 aspect-auto group-hover:-rotate-12 group-hover:scale-150 group-hover:-translate-y-0.5" src="/icon-contact.svg" alt="" />
              <p className="font-medium transition-all group-hover:tracking-[0.15rem]">Contact</p>
            </Link>
          </div>
        </article>

        <div className="pl-[298px] overflow-x-hidden">
          <Outlet />
        </div>
      </div>

      {/* shimeji */}
      {/* <div className="fixed bottom-0 w-full">
        <img className="w-16" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif" alt="" />
      </div> */}
    </div>
  );
};

export default Root;
