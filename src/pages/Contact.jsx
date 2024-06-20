import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="p-5 pb-52">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <div className="flex space-x-6 mt-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#53ACFF]"></div>
          <p>Let's Connect!</p>
        </div>
      </div>

      <span className="block w-full h-[1px] bg-slate-200 mt-6"></span>

      <div className="w-full border border-gray-200 rounded-lg p-5">
        <div className="flex items-end space-x-2">
          <img src="/icon-contact.svg" alt="" />
          <h1 className="text-xl font-medium">Send me email!</h1>
        </div>
        <p className="mt-4 text-gray-600">
          I'm open to new opportunities and collaborations. If you'd like to get in touch, please feel free to reach out! Whether it's a project idea, a potential collaboration, or just a friendly chat, I'd love to hear from you.
        </p>
        <a className="hover:opacity-70 transition block w-fit px-4 py-3 rounded-lg bg-slate-200 mt-8" href="https://mail.google.com/mail/?view=cm&fs=1&to=abiwidiarta01@gmail.com">
          Contact Me
        </a>
      </div>

      <Divider />

      {/* Educations */}
      <div className="flex items-center mt-6 space-x-2">
        <img className="w-8 aspect-auto" src="/icon-tech.png" alt="" />
        <h2 className="text-xl font-semibold">Social Media</h2>
      </div>
      <p className="mt-1 text-md text-gray-600">Find me on social media</p>
      <div className="mt-6 flex space-x-6">
        <a href="https://www.instagram.com/abi.widiarta/">
          <img className="w-8" src="/icon-ig.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/abi-widiarta/">
          <img className="w-8" src="/icon-linkedin.svg" alt="" />
        </a>
        <a href="https://github.com/abi-widiarta">
          <img className="w-8" src="/icon-github.svg" alt="" />
        </a>
      </div>
    </motion.div>
  );
};
