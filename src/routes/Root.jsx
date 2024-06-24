import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Root = () => {
  let { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const blobRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (localStorage.getItem("theme") === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // document.onpointermove = (e) => {
  //   const { pageX, pageY } = e;

  //   blobRef.current.animate(
  //     {
  //       left: `${pageX}px`,
  //       top: `${pageY}px`,
  //     },
  //     {
  //       duration: 2000,
  //       fill: "forwards",
  //     }
  //   );
  // };

  // document.onscroll = (e) => {
  //   // get mouse position

  //   blobRef.current.style.top = `${window.scrollY}px`;
  // };

  return (
    <div className="w-full h-full pt-10 overflow-x-hidden transition-all dark:text-white dark:bg-slate-800">
      <div className="bg-transparent max-w-[1152px]  h-full mx-auto overflow-hidden flex">
        <article className="max-w-[298px] fixed w-full p-5 dark:z-20">
          <div className="relative flex flex-col items-center w-full">
            {/* theme toggler */}

            <div
              onClick={() => {
                localStorage.setItem("theme", isDarkMode ? "light" : "dark");
                setIsDarkMode(!isDarkMode);
              }}
              className="cursor-pointer absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-8 bg-white dark:bg-slate-800 group inverted-border-radius rounded-bl-xl after:transition-all before:transition-all transition-all dark:after:shadow-[20px_0_0_0_rgba(30,41,59,1)]  after:content-[''] after:absolute after:top-8 after:-right-0 after:h-[50px] after:w-[25px] after:z-0 after:shadow-[20px_0_0_0_rgba(255,255,255,1)]  after:rounded-tr-lg before:content-[''] before:absolute before:top-0  before:-left-6 before:h-[50px] before:w-[25px]  before:z-0 before:shadow-[0_-20px_0_0_rgba(255,255,255,1)] dark:before:shadow-[0_-20px_0_0_rgba(30,41,59,1)]  before:rounded-tr-lg "
            >
              <AnimatePresence>
                {isDarkMode && (
                  <motion.img
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "linear" }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute z-10 w-6 transition-all duration-150 group-hover:rotate-12"
                    src="/icon-moon.svg"
                    alt=""
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isDarkMode == false && (
                  <motion.img
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "linear" }}
                    exit={{ opacity: 0, y: -4 }}
                    className="absolute z-20 w-6 transition-all duration-150 group-hover:rotate-12"
                    src="/icon-sun.svg"
                    alt=""
                  />
                )}
              </AnimatePresence>
            </div>

            {/* <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-0 object-cover w-full rounded-md shadow-lg h-28 shadow-slate-200" src="/bg.png" alt="" /> */}

            <div className="absolute peer z-20 w-20 bg-[#EDAE9B]/60 dark:bg-[#00808B]/30 transition-all backdrop-blur-sm   border-4 border-white dark:border-slate-800 rounded-full shadow-lg top-14 shadow-slate-200 dark:shadow-none">
              <img draggable="false" className="transition hover:scale-110 hover:-translate-y-[4px] rounded-full hover:rotate-2" src="/profile.png" alt="" />
            </div>

            <AnimatePresence>
              {isDarkMode && (
                <motion.div
                  className="absolute top-0 peer-hover:*:scale-110 object-cover w-full overflow-hidden transition-all rounded-md shadow-lg h-28 shadow-slate-200 dark:shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img className="object-cover w-full h-full transition-all" src="/bg.png" alt="" />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isDarkMode == false && (
                <motion.div
                  className="absolute top-0 peer-hover:*:scale-125 object-cover w-full overflow-hidden transition-all rounded-md shadow-lg h-28 shadow-slate-200 dark:shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <img className="object-cover w-full h-full transition-all duration-200" src="/bg-light.svg" alt="" />
                </motion.div>
              )}
            </AnimatePresence>

            <h2 className="font-semibold mt-36">Abi Widiarta</h2>
            <p className="text-sm">front-end web enthuasiast</p>
            <div className="flex gap-2 mt-2">
              <a className="transition duration-150 hover:rotate-12" target="_blank" href="https://www.instagram.com/abi.widiarta/">
                <img className="w-5 aspect-square" src="/icon-ig.png" alt="" />
              </a>
              <a className="transition duration-150 hover:rotate-12" target="_blank" href="https://github.com/abi-widiarta">
                <img className={`w-5 aspect-square ${isDarkMode ? "invert" : ""}`} src="/icon-github.png" alt="" />
              </a>
              <a className="transition duration-150 hover:rotate-12" target="_blank" href="https://www.linkedin.com/in/abi-widiarta/">
                <img className="w-5 aspect-square" src="/icon-linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <span className="block w-full h-[1px] bg-slate-300 mt-4"></span>

          <div className="px-2 pt-4 space-y-2 transition-all dark:text-white">
            <Link to={"/home"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/home" ? "bg-slate-100 dark:bg-slate-700" : ""}`} href="#">
              <img className="w-5 dark:invert  transition aspect-auto group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5" src="/icon-home.svg" alt="" />
              <p className="font-medium ">Home</p>
            </Link>
            <Link to={"/about"} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/about" ? "bg-slate-100 dark:bg-slate-700" : ""}`} href="#">
              <img className="w-5 dark:invert  transition aspect-auto group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5" src="/icon-user.svg" alt="" />
              <p className="font-medium ">About</p>
            </Link>
            <Link to={"/projects"} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/projects" ? "bg-slate-100 dark:bg-slate-700" : ""}`} href="#">
              <img className="w-5 dark:invert  transition aspect-auto group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-0.5" src="/icon-project.svg" alt="" />
              <p className="font-medium ">Projects</p>
            </Link>
            <Link to={"/contact"} className={`flex group items-center px-4 py-3 space-x-4 rounded-lg transition ${pathname === "/contact" ? "bg-slate-100 dark:bg-slate-700" : ""}`} href="#">
              <img className="w-5 dark:invert  transition scale-125 aspect-auto group-hover:-rotate-12 group-hover:scale-150 group-hover:-translate-y-0.5" src="/icon-contact.svg" alt="" />
              <p className="font-medium ">Contact</p>
            </Link>
          </div>
        </article>

        <div className="pl-[298px] overflow-x-hidden dark:z-10">
          <Outlet />
        </div>
      </div>

      {/* <div
        ref={blobRef}
        id="blob-bg"
        style={{ animation: "rotate 4s linear infinite" }}
        className="absolute -translate-x-[50%] left-[50%] top-[50%] -translate-y-[50%] blur-md w-48 bg-green-500  rounded-full pointer-events-none dark:z-[1] dark:bg-gradient-to-r from-teal-600 to-blue-400 dark:opacity-20 -z-10 aspect-square"
      ></div> */}

      {/* loader */}
      {/* <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: "easeInOut" }} className="fixed top-0 w-full h-2 bg-[#E89AA3]"></motion.span> */}

      {/* shimeji */}
      {/* <div className="fixed bottom-0 w-full">
        <img className="w-16" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif" alt="" />
      </div> */}
    </div>
  );
};

export default Root;
