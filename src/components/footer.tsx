import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center">
      <div className="text-lg mb-2">
        <h2 className="font-semibold">Contact Us</h2>
        <div className="flex items-center justify-center">
          <AiOutlineHome className="mr-1" />
          <p>125 Moo, 10 walking street, Pattaya, Thailand, Chon Buri</p>
        </div>
        <div className="flex items-center justify-center">
          <AiOutlinePhone className="mr-1" />
          <p>+66 85 055 6050</p>
        </div>
        <div className="flex items-center justify-center">
          <AiOutlineMail className="mr-1" />
          <p>jannaatclubofficial@gmail.com</p>
        </div>
      </div>
      <small className="block text-md">
        &copy; 2024 Jannaat Club. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About us:</span> The Jannaat Club is the one and only biggest Indian
        club in Walking Street, Pattaya. Jannaat Club, as an awesome party destination, is also a paradise of
        entertainment. It is the perfect destination for night parties and an ever more entertaining nightlife.
      </p>
    </footer>
  );
}