import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center">
      <div className="text-lg mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.1] hover:scale-[1.1] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
            href="https://wa.me/7893806821"
            target="_blank"
          >
            <FaWhatsapp className="hover:bg-green-500 hover:rounded-full" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
            href="https://www.instagram.com/jannaatclubofficial_"
            target="_blank"
          >
            <FaInstagram className="hover:bg-pink-500 hover:rounded-full" />
          </a>
        </div>

        <h2 className="font-semibold text-xl mb-2">Contact Us</h2>
        <div className="flex items-center justify-center mb-2">
          <AiOutlineHome className="mr-2 text-gray-500" />
          <p className="text-gray-700">125 Moo, 10 walking street, Pattaya, Thailand, Chon Buri</p>
        </div>
        <div className="flex items-center justify-center mb-2">
          <AiOutlinePhone className="mr-2 text-gray-500" />
          <p className="text-gray-700">+66 85 055 6050</p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <AiOutlineMail className="mr-2 text-gray-500" />
          <p className="text-gray-700">jannaatclubofficial@gmail.com</p>
        </div>
      </div>
      <small className="block text-md mt-4 text-gray-500">
        &copy; 2024 Jannaat Club. All rights reserved.
      </small>
    </footer>
  );
}
